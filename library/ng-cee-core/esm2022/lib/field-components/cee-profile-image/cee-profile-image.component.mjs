import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, forwardRef } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { WebcamModule } from 'ngx-webcam';
import { NgxBarcodeScannerModule } from "@eisberg-labs/ngx-barcode-scanner";
import { CommonModule, JsonPipe } from '@angular/common';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ImageCropModalComponent } from './image-crop-modal.component';
import { CeeAttachmentsComponent } from "../cee-attachments/cee-attachments.component";
import heic2any from "heic2any";
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
import * as i12 from "../../services/file-upload-service.service";
import * as i13 from "@eisberg-labs/ngx-barcode-scanner";
import * as i14 from "@angular/platform-browser";
import * as i15 from "ngx-image-compress";
import * as i16 from "@angular/common";
const _c0 = a0 => ({ "background-image": a0 });
const _c1 = a0 => ({ "color": a0 });
function CeeProfileImageComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeProfileImageComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 15);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeProfileImageComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 12)(2, CeeProfileImageComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeProfileImageComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeProfileImageComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeProfileImageComponent_div_0_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 18);
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r4.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r4.code).message_text, "");
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_11_div_1_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r4.type == "Mandatory" && !ctx_r1.fieldValue);
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r4.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r4.code).message_text, "");
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_11_div_2_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r4.type == ctx_r1.errorType);
} }
function CeeProfileImageComponent_div_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_11_div_1_Template, 2, 1, "div", 19)(2, CeeProfileImageComponent_div_0_ng_container_11_div_2_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.errorType);
} }
function CeeProfileImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div")(2, "div", 3);
    i0.ɵɵtemplate(3, CeeProfileImageComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4)(4, CeeProfileImageComponent_div_0_span_4_Template, 2, 0, "span", 5)(5, CeeProfileImageComponent_div_0_button_5_Template, 2, 2, "button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7)(7, "label", 8);
    i0.ɵɵtemplate(8, CeeProfileImageComponent_div_0_img_8_Template, 1, 0, "img", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 10, 0);
    i0.ɵɵlistener("click", function CeeProfileImageComponent_div_0_Template_input_click_9_listener() { i0.ɵɵrestoreView(_r1); const fileInput_r3 = i0.ɵɵreference(10); return i0.ɵɵresetView(fileInput_r3.value = ""); })("change", function CeeProfileImageComponent_div_0_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fileChangeEvent($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CeeProfileImageComponent_div_0_ng_container_11_Template, 3, 2, "ng-container", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("image-upload ", ctx_r1.isCustomClass && ctx_r1.custom_class_name ? ctx_r1.custom_class_name[0] : "", " ", !ctx_r1.valid && ctx_r1.isMandatory ? "invalid" : "valid", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(11, _c0, "url(" + ctx_r1.imageName + ")"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
export class CeeProfileImageComponent extends BaseView {
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
    fileUploadService;
    service;
    sanitizer;
    imageCompress;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    rootData;
    imageName = "/assets/images/avatar.png";
    errors = [];
    AdditionalParameter = {};
    isError = false;
    files = [];
    maintainAspectRatio = false;
    cropperStaticWidth = 170;
    cropperStaticHeight = 170;
    cropperMinWidth = 170;
    cropperMinHeight = 170;
    onlyScaleDown = true;
    roundCropper = true;
    imageChangedEvent = '';
    croppedImage = '';
    canvasRotation = 0;
    rotation;
    translateH = 0;
    translateV = 0;
    scale = 1;
    aspectRatio = 1 / 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform = {
        translateUnit: 'px'
    };
    imageURL;
    loading = false;
    allowMoveImage = true;
    hidden = false;
    isPicChangeBtnClickd = false;
    custom_class_name;
    errorType = '';
    fileUploads = {};
    preDefineMimeType = {
        csv: 'text/csv',
        heic: 'image/heic',
        heif: 'image/heif',
    };
    preDefineMimeTypeCheck = {
        csv: ['', 'application/vnd.ms-excel'],
        heic: ['', 'image/heic'],
        heif: ['', 'image/heif'],
    };
    html_id = '';
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService, service, sanitizer, imageCompress) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService);
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
        this.fileUploadService = fileUploadService;
        this.service = service;
        this.sanitizer = sanitizer;
        this.imageCompress = imageCompress;
        ``;
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const param of this.fieldData.additional_parameters) {
                this.AdditionalParameter[param.parameter_type] = param.value;
            }
        }
        this.custom_class_name = this.fieldData.field_style && this.fieldData.field_style.custom_class_name ? this.fieldData.field_style.custom_class_name.split('|') : [];
        // console.log("rowData: ", this.rowData, " fieldData: ", this.fieldData, " rootData: ", this.rootData,)
        let ppData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        if (ppData) {
            this.fieldValue = this.imageName = ppData;
        }
        else if (this.fieldData.hasOwnProperty('response_api_key')) {
            let val;
            for (const key of this.fieldData.response_api_key.split('||')) {
                val = this.returnValueFromCallback(key);
                // console.log(key, " :=: ", val);
            }
            if (val) {
                this.fieldValue = this.imageName = val;
                this.updateFieldData(this.fieldValue);
            }
        }
        if (!this.fieldValue && this.isMandatory && this.isPicChangeBtnClickd) {
            this.valid = false;
        }
        else {
            this.valid = true;
        }
        this.updateFieldData(this.fieldValue, this.valid);
        this.variableObject['emitForEmptySession_' + this.fieldData.unique_id] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
            // console.log("res: ",res['unique_ids']," => ",this.fieldData.unique_id)
            if (res && res['unique_ids'] && res['unique_ids'].includes(this.fieldData.unique_id)) {
                this.fieldValue = "";
                this.imageName = "/assets/images/avatar.png";
            }
        });
        for (const [i, possibleValue] of this.fieldData.possible_values.entries()) {
            const values = possibleValue.split('|');
            if (values.length == 2) {
                const obj = {
                    id: `${this.fieldData.html_id}-${i}`,
                    type: values[0],
                    size: Number(values[1])
                };
                this.fileUploads = { ...this.fileUploads, ...{ [obj.type]: obj } };
            }
            else {
                console.error(`Something is wrong in the configuration for ${possibleValue}`);
            }
        }
    }
    onSessionDataUpdated(event) {
        // on click on switch
        // setting the value of the switch and passing it as payload so that
        // it can be set and emitted from the event list
        // this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: event ? this.value2 : this.value1 });
    }
    onAPICallback(data) {
        if (!this.rowData) {
            const resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            let ppData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
            if (ppData) {
                this.fieldValue = this.imageName = ppData;
            }
            else if (resData !== null && resData !== undefined && resData !== '') {
                this.fieldValue = this.imageName = resData;
                this.updateFieldData(this.fieldValue);
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
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
        // throw new Error("Method not implemented.");
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
    concatData() { }
    onError(error) {
        this.isError = true;
    }
    // ############################################
    // fileChangeEvent(event: any): void {
    //   this.isPicChangeBtnClickd = true;
    //   this.loading = true;
    //   this.imageChangedEvent = event;
    //   this.openDialog(event)
    // }
    convertReadableCSVFile(file) {
        const ext = file.name?.split('.').pop();
        if (file && file.size > 0 && this.preDefineMimeType[ext] && this.preDefineMimeTypeCheck[ext].includes(file.type)) {
            file = new File([file], file.name, { type: this.preDefineMimeType[ext] });
        }
        return file;
    }
    fileChangeEvent(event) {
        this.errorType = '';
        const file = event.target.files[0];
        const fileObj = this.convertReadableCSVFile(file);
        const fileData = this.fileUploads[fileObj.type];
        const fileName = file['name'];
        // ✅ Allow only filenames with exactly one dot (e.g., abc.pdf)
        const dotCount = (fileName.match(/\./g) || []).length;
        if (dotCount !== 1) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'invalid_file_extension');
            this.errorType = 'invalid_file_extension';
            event.target.value = ''; // Clear the input value
            return;
        }
        // 2. ✅ Block dangerous extensions
        const disallowedExtensions = ['exe', 'js', 'html', 'htm', 'svg', 'php', 'aspx', 'jsp', 'bat', 'sh'];
        const fileExtension = fileName.split('.').pop();
        if (disallowedExtensions.includes(fileExtension)) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'invalid_file_extension');
            this.errorType = 'invalid_file_extension';
            event.target.value = '';
            return;
        }
        if (!fileData) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'file_type');
            this.errorType = 'file_type';
            return;
        }
        if ((fileData.type.toLowerCase() == fileObj.type.toLowerCase()) && fileObj.size > (fileData.size * 1024)) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'individual_file_size');
            this.errorType = 'individual_file_size';
            return;
        }
        this.isPicChangeBtnClickd = true;
        this.loading = true;
        if (file && file.name.toLowerCase().endsWith(".heic")) {
            heic2any({
                blob: file,
                toType: "image/png",
            })
                .then((convertedBlob) => {
                const pngFile = new File([convertedBlob], file.name.replace(/\.heic$/i, ".png"), {
                    type: "image/png",
                    lastModified: new Date().getTime()
                });
                // Create new event with converted file
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(pngFile);
                const newEvent = { ...event, target: { ...event.target, files: dataTransfer.files } };
                this.imageChangedEvent = newEvent;
                this.openDialog(newEvent);
            })
                .catch((e) => {
                console.error("Error converting HEIC to PNG", e);
                this.loading = false;
            });
        }
        else {
            this.imageChangedEvent = event;
            this.openDialog(event);
        }
    }
    imageCropped(event) {
        this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
        // console.log(event);
    }
    imageLoaded() {
        this.showCropper = true;
        // console.log('Image loaded');
    }
    cropperReady(sourceImageDimensions) {
        // console.log('Cropper ready', sourceImageDimensions);
        this.loading = false;
    }
    loadImageFailed() {
        console.error('Load image failed');
    }
    rotateLeft() {
        this.loading = true;
        setTimeout(() => {
            this.canvasRotation--;
            this.flipAfterRotate();
        });
    }
    rotateRight() {
        this.loading = true;
        setTimeout(() => {
            this.canvasRotation++;
            this.flipAfterRotate();
        });
    }
    moveLeft() {
        this.transform = {
            ...this.transform,
            translateH: ++this.translateH
        };
    }
    moveRight() {
        this.transform = {
            ...this.transform,
            translateH: --this.translateH
        };
    }
    moveTop() {
        this.transform = {
            ...this.transform,
            translateV: ++this.translateV
        };
    }
    moveBottom() {
        this.transform = {
            ...this.transform,
            translateV: --this.translateV
        };
    }
    flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
        this.translateH = 0;
        this.translateV = 0;
    }
    flipHorizontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }
    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }
    resetImage() {
        this.scale = 1;
        this.rotation = 0;
        this.canvasRotation = 0;
        this.transform = {
            translateUnit: 'px'
        };
    }
    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }
    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }
    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }
    updateRotation() {
        this.transform = {
            ...this.transform,
            rotate: this.rotation
        };
    }
    toggleAspectRatio() {
        this.aspectRatio = this.aspectRatio === 4 / 3 ? 16 / 5 : 4 / 3;
    }
    openDialog(data) {
        const dialogRef = this.dialog.open(ImageCropModalComponent, {
            data: {
                message: data,
                additionalParameter: this.AdditionalParameter
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            if (result !== undefined) {
                // this.animal.set(result);
                // console.log('result: ',result);
                // If uploaded file size is smaller then skip compression 
                if (this.additionalParameter.hasOwnProperty("CEE_CompressImage_IfSizeExceedsInKB") && this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"] !== "") {
                    this.compressImage(result, (compImg) => {
                        this.fieldValue = this.imageName = this.imageChangedEvent = compImg;
                        this.updateFieldData(this.fieldValue);
                        this.sendDatatoAttachments(compImg);
                    });
                }
                else {
                    this.fieldValue = this.imageName = this.imageChangedEvent = result;
                    this.updateFieldData(this.fieldValue);
                    this.sendDatatoAttachments(result);
                }
            }
            if (!this.fieldValue && this.isMandatory && this.isPicChangeBtnClickd) {
                this.valid = false;
            }
            else {
                this.valid = true;
            }
            this.updateFieldData(this.fieldValue, this.valid);
        });
    }
    urltoFile(url, filename, mimeType) {
        if (url.startsWith('data:')) {
            var arr = url.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[arr.length - 1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var file = new File([u8arr], filename, { type: mime || mimeType });
            return Promise.resolve(file);
        }
        return fetch(url)
            .then(res => res.arrayBuffer())
            .then(buf => new File([buf], filename, { type: mimeType }));
    }
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[arr.length - 1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    getName(originalName, fileName, regex) {
        let result = originalName;
        const matched = originalName.match(new RegExp(regex));
        if (matched) {
            for (const name of matched) {
                let val = '';
                switch (name.toLowerCase()) {
                    case '{filename}':
                        val = fileName;
                        break;
                    case '{yyyymmddhhmmss}':
                    case '{timestamp}':
                        val = String(new Date().getTime());
                        break;
                    default:
                        if (name.includes('##')) {
                            const values = name.match(new RegExp(/[^{}]+/g));
                            const key = values ? values[0] : name;
                            const handlerData = this.apiDataService.getApiDataByHandler(key.split('##')[0]);
                            val = handlerData ? handlerData.value[key] : '';
                        }
                        else {
                            const apiData = this.apiDataService.getApiDataByApiKey(name);
                            val = apiData ? apiData.value : '';
                        }
                        break;
                }
                result = result.split(name).join(val);
            }
        }
        return result;
    }
    sendDatatoAttachments(fileData) {
        var imageName = this.AdditionalParameter['CEE_PP_Format'] ? 'profile_image.' + this.AdditionalParameter['CEE_PP_Format'] : 'profile_image.png';
        if (this.AdditionalParameter['CEE_PP_Filename']) {
            // check for the file name as concatenation of api keys
            /**
             * * File name can be {FileName}_{SomeAPIKey}_{TimeStamp}
             * * or file-{application/renewal-create-record##currentEnrollmentId}_{YYYYMMDDHHMMSS}
             * * here first searching would be done using FileName
             * * and TimeStamp then need to check if there are any apiKey
             * * then join
             */
            const file = imageName.split(".");
            const extension = file.splice(-1)[0];
            let resultFileName = this.getName(this.AdditionalParameter['CEE_PP_Filename'], file[0], /\{(.*?)\}/g);
            resultFileName = `${resultFileName}.${extension}`;
            imageName = resultFileName;
        }
        let selectedFile = {
            uploaded: false,
            file: this.dataURLtoFile(fileData, imageName),
            attachmentId: '',
            url: '',
            attachmentPath: '',
            uId: fileData.lastModified,
            custom: [],
            autoUpload: true
        };
        this.rootData[this.fieldData.unique_id](selectedFile);
    }
    async compressImage(file, callBack) {
        if (!file)
            return;
        const settings = {
            orientation: 1,
            ratio: 50,
            quality: 50
        };
        // for orientation
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Orientation") && this.additionalParameter["CEE_CompressImg_Orientation"] !== "") {
            settings.orientation = this.additionalParameter["CEE_CompressImg_Orientation"];
        }
        // for ratio
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_AspectRatio") && this.additionalParameter["CEE_CompressImg_AspectRatio"] !== "") {
            settings.ratio = this.additionalParameter["CEE_CompressImg_AspectRatio"];
        }
        // for quality
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Quality") && this.additionalParameter["CEE_CompressImg_Quality"] !== "") {
            settings.quality = this.additionalParameter["CEE_CompressImg_Quality"];
        }
        // for maxWidth
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxHeight") && this.additionalParameter["CEE_CompressImg_maxHeight"] !== "") {
            settings.maxWidth = parseInt(this.additionalParameter["CEE_CompressImg_maxHeight"].toString().replace(/[^\d]/g, ''));
        }
        // for maxHeight
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxWidth") && this.additionalParameter["CEE_CompressImg_maxWidth"] !== "") {
            settings.maxHeight = parseInt(this.additionalParameter["CEE_CompressImg_maxWidth"].toString().replace(/[^\d]/g, ''));
        }
        const imageSizeLimit = Number(this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"].match(/\d+/));
        const fileSize = this.getBase64ImageSize(file);
        if ((fileSize / 1000) < imageSizeLimit) {
            callBack(file);
        }
        this.imageCompress.compressFile(file, settings.orientation, settings.ratio, settings.quality, settings.maxWidth, settings.maxHeight).then((result) => {
            console.log('Compressed image: ', result); // Base64 compressed image
            callBack(result);
        }).catch(error => {
            console.log(error);
        });
    }
    getBase64ImageSize(base64String) {
        // Remove the prefix (if present)
        const base64Data = base64String.split(',')[1];
        // Calculate the size in bytes
        const sizeInBytes = (base64Data.length * 3) / 4 - (base64Data.endsWith('==') ? 2 : base64Data.endsWith('=') ? 1 : 0);
        return sizeInBytes;
    }
    static ɵfac = function CeeProfileImageComponent_Factory(t) { return new (t || CeeProfileImageComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i12.FileUploadService), i0.ɵɵdirectiveInject(i13.NgxBarcodeScannerService), i0.ɵɵdirectiveInject(i14.DomSanitizer), i0.ɵɵdirectiveInject(i15.NgxImageCompressService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeProfileImageComponent, selectors: [["app-cee-profile-image"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["fileInput", ""], ["class", "field-wrapper", "style", "margin-bottom: 20px;", 3, "id", 4, "ngIf"], [1, "field-wrapper", 2, "margin-bottom", "20px", 3, "id"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [3, "ngStyle"], ["for", "file-input"], ["src", "./assets/images/icon_expand.png", 4, "ngIf"], ["id", "file-input", "type", "file", "accept", "image/*,.heic", 3, "click", "change"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], ["src", "./assets/images/icon_expand.png"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"]], template: function CeeProfileImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeProfileImageComponent_div_0_Template, 12, 13, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [WebcamModule, NgxBarcodeScannerModule, CommonModule, i16.NgForOf, i16.NgIf, i16.NgStyle], styles: [".errorMsgCamera[_ngcontent-%COMP%], .errorMsg[_ngcontent-%COMP%]{text-align:center}image-cropper[_ngcontent-%COMP%]{max-height:33vh}.cropper-wrapper[_ngcontent-%COMP%]{min-height:300px;position:relative}.loader[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#00000080;display:flex;justify-content:center;align-items:center;font-size:20px;color:#fff}.image-upload[_ngcontent-%COMP%]{height:170px;width:170px;border-radius:50%;box-shadow:#00000029 0 3px 6px,#0000003b 0 3px 6px;background-image:url(/assets/images/avatar.png);background-repeat:no-repeat;background-size:170px 170px;margin:10px}.invalid[_ngcontent-%COMP%]{border:3px solid #f00!important}.image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;position:relative;top:106px;right:-150px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeProfileImageComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-profile-image', imports: [WebcamModule, JsonPipe, NgxBarcodeScannerModule, CommonModule, ImageCropperComponent, forwardRef(() => CeeAttachmentsComponent), forwardRef(() => ImageCropModalComponent)], standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\" style=\"margin-bottom: 20px;\">\r\n    <div>\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"image-upload {{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid && isMandatory  ? 'invalid' : 'valid' }}\" [ngStyle]=\"{'background-image': 'url(' + imageName + ')'}\">\r\n            <label for=\"file-input\">\r\n                <img *ngIf=\"isEditable\" src=\"./assets/images/icon_expand.png\"/>\r\n            </label>\r\n            <input #fileInput (click)=\"fileInput.value = ''\" id=\"file-input\" type=\"file\" (change)=\"fileChangeEvent($event)\" accept=\"image/*,.heic\" />\r\n        </div>\r\n        <ng-container *ngFor=\"let message of messages\">\r\n            <div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n                <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !fieldValue\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}</p>\r\n            </div>\r\n            <div class=\"error-message-wrapper\" *ngIf=\"errorType\">\r\n                <p *ngIf=\"message.type == errorType\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}</p>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n", styles: [".errorMsgCamera,.errorMsg{text-align:center}image-cropper{max-height:33vh}.cropper-wrapper{min-height:300px;position:relative}.loader{position:absolute;inset:0;background-color:#00000080;display:flex;justify-content:center;align-items:center;font-size:20px;color:#fff}.image-upload{height:170px;width:170px;border-radius:50%;box-shadow:#00000029 0 3px 6px,#0000003b 0 3px 6px;background-image:url(/assets/images/avatar.png);background-repeat:no-repeat;background-size:170px 170px;margin:10px}.invalid{border:3px solid #f00!important}.image-upload>input{display:none}.image-upload img{cursor:pointer;position:relative;top:106px;right:-150px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }, { type: i12.FileUploadService }, { type: i13.NgxBarcodeScannerService }, { type: i14.DomSanitizer }, { type: i15.NgxImageCompressService }], { stepId: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeProfileImageComponent, { className: "CeeProfileImageComponent", filePath: "lib\\field-components\\cee-profile-image\\cee-profile-image.component.ts", lineNumber: 64 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXByb2ZpbGUtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXByb2ZpbGUtaW1hZ2UvY2VlLXByb2ZpbGUtaW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXByb2ZpbGUtaW1hZ2UvY2VlLXByb2ZpbGUtaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTRFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6TCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFjN0MsT0FBTyxFQUErQixZQUFZLEVBQWEsTUFBTSxZQUFZLENBQUM7QUFDbEYsT0FBTyxFQUFDLHVCQUF1QixFQUEyQixNQUFNLG1DQUFtQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFpQyxxQkFBcUIsRUFBK0IsTUFBTSxtQkFBbUIsQ0FBQztBQUV0SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUV2RixPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CaEIsaUNBQXFFO0lBQUEsWUFBeUI7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QUFDLHVCQUF1QixDQUFDLENBQUMsY0FDMUssSUFBSSxXQUNSLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7K2VBS2pDLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7O2tGQU5HLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbGUtdXBsb2FkLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtXZWJjYW1JbWFnZSwgV2ViY2FtSW5pdEVycm9yLCBXZWJjYW1Nb2R1bGUsIFdlYmNhbVV0aWx9IGZyb20gJ25neC13ZWJjYW0nO1xyXG5pbXBvcnQge05neEJhcmNvZGVTY2FubmVyTW9kdWxlLCBOZ3hCYXJjb2RlU2Nhbm5lclNlcnZpY2V9IGZyb20gXCJAZWlzYmVyZy1sYWJzL25neC1iYXJjb2RlLXNjYW5uZXJcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBKc29uUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERpbWVuc2lvbnMsIEltYWdlQ3JvcHBlZEV2ZW50LCBJbWFnZUNyb3BwZXJDb21wb25lbnQsIEltYWdlVHJhbnNmb3JtLCBMb2FkZWRJbWFnZSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEltYWdlQ3JvcE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1jcm9wLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENlZUF0dGFjaG1lbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERPQ19PUklFTlRBVElPTiwgTmd4SW1hZ2VDb21wcmVzc1NlcnZpY2UgfSBmcm9tICduZ3gtaW1hZ2UtY29tcHJlc3MnO1xyXG5pbXBvcnQgaGVpYzJhbnkgZnJvbSBcImhlaWMyYW55XCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVEYXRhIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVQYXlsb2FkIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgZmlsZURhdGE6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmlsZSB7XHJcbiAgdXBsb2FkZWQ6IGJvb2xlYW47XHJcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XHJcbiAgdUlkOiBzdHJpbmc7XHJcbiAgYXR0YWNobWVudElkOiBzdHJpbmc7XHJcbiAgYXR0YWNobWVudFBhdGg6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBmaWxlOiBGaWxlO1xyXG4gIGN1c3RvbTogQXJyYXk8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcHJlc3NJbWFnZSB7XHJcbiAgICBvcmllbnRhdGlvbjogRE9DX09SSUVOVEFUSU9OLFxyXG4gICAgcmF0aW8/OiBudW1iZXIsXHJcbiAgICBxdWFsaXR5PzogbnVtYmVyLFxyXG4gICAgbWF4V2lkdGg/OiBudW1iZXIsXHJcbiAgICBtYXhIZWlnaHQ/OiBudW1iZXJcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtcHJvZmlsZS1pbWFnZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLXByb2ZpbGUtaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLXByb2ZpbGUtaW1hZ2UuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIGltcG9ydHM6IFsgV2ViY2FtTW9kdWxlLCBKc29uUGlwZSwgTmd4QmFyY29kZVNjYW5uZXJNb2R1bGUsIENvbW1vbk1vZHVsZSwgSW1hZ2VDcm9wcGVyQ29tcG9uZW50LCBmb3J3YXJkUmVmKCgpID0+IENlZUF0dGFjaG1lbnRzQ29tcG9uZW50KSwgZm9yd2FyZFJlZigoKSA9PiBJbWFnZUNyb3BNb2RhbENvbXBvbmVudCldLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHNjaGVtYXM6W0NVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUFdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlUHJvZmlsZUltYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG5cclxuICAgIGltYWdlTmFtZTogYW55ID0gXCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCI7XHJcbiAgICBcclxuICAgIGVycm9yczogV2ViY2FtSW5pdEVycm9yW10gPSBbXTtcclxuICAgIEFkZGl0aW9uYWxQYXJhbWV0ZXI6IGFueSA9IHt9O1xyXG4gICAgaXNFcnJvciA9IGZhbHNlO1xyXG4gICAgZmlsZXM6IEFycmF5PElGaWxlPiA9IFtdO1xyXG5cclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGFueSA9IGZhbHNlO1xyXG4gICAgY3JvcHBlclN0YXRpY1dpZHRoOiBhbnkgPSAxNzA7XHJcbiAgICBjcm9wcGVyU3RhdGljSGVpZ2h0OiBhbnkgPSAxNzA7XHJcbiAgICBjcm9wcGVyTWluV2lkdGg6IGFueSA9IDE3MDtcclxuICAgIGNyb3BwZXJNaW5IZWlnaHQ6IGFueSA9IDE3MDtcclxuICAgIG9ubHlTY2FsZURvd246IGFueSA9IHRydWU7XHJcbiAgICByb3VuZENyb3BwZXI6IGFueSA9IHRydWU7XHJcblxyXG4gICAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xyXG4gICAgY3JvcHBlZEltYWdlOiBhbnkgPSAnJztcclxuICAgIGNhbnZhc1JvdGF0aW9uID0gMDtcclxuICAgIHJvdGF0aW9uPzogbnVtYmVyO1xyXG4gICAgdHJhbnNsYXRlSCA9IDA7XHJcbiAgICB0cmFuc2xhdGVWID0gMDtcclxuICAgIHNjYWxlID0gMTtcclxuICAgIGFzcGVjdFJhdGlvID0gMS8xO1xyXG4gICAgc2hvd0Nyb3BwZXIgPSBmYWxzZTtcclxuICAgIGNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpbyA9IGZhbHNlO1xyXG4gICAgdHJhbnNmb3JtOiBJbWFnZVRyYW5zZm9ybSA9IHtcclxuICAgICAgdHJhbnNsYXRlVW5pdDogJ3B4J1xyXG4gICAgfTtcclxuICAgIGltYWdlVVJMPzogc3RyaW5nO1xyXG4gICAgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgYWxsb3dNb3ZlSW1hZ2UgPSB0cnVlO1xyXG4gICAgaGlkZGVuID0gZmFsc2U7XHJcbiAgICBpc1BpY0NoYW5nZUJ0bkNsaWNrZCA9IGZhbHNlO1xyXG4gICAgY3VzdG9tX2NsYXNzX25hbWU6IHN0cmluZ1tdO1xyXG4gICAgZXJyb3JUeXBlID0gJyc7XHJcbiAgICBmaWxlVXBsb2FkczogYW55ID0ge307XHJcbiAgICBwcmVEZWZpbmVNaW1lVHlwZTogYW55ID0ge1xyXG4gICAgICBjc3Y6ICd0ZXh0L2NzdicsXHJcbiAgICAgIGhlaWM6ICdpbWFnZS9oZWljJyxcclxuICAgICAgaGVpZjogJ2ltYWdlL2hlaWYnLFxyXG4gIH07XHJcbiAgcHJlRGVmaW5lTWltZVR5cGVDaGVjazogYW55ID0ge1xyXG4gICAgICBjc3Y6IFsnJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCddLFxyXG4gICAgICBoZWljOiBbJycsICdpbWFnZS9oZWljJ10sXHJcbiAgICAgIGhlaWY6IFsnJywgJ2ltYWdlL2hlaWYnXSxcclxuICB9O1xyXG4gIGh0bWxfaWQgPSAnJztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgZmlsZVVwbG9hZFNlcnZpY2U6IEZpbGVVcGxvYWRTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBOZ3hCYXJjb2RlU2Nhbm5lclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgICAgICBwcml2YXRlIGltYWdlQ29tcHJlc3M6IE5neEltYWdlQ29tcHJlc3NTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgc3VwZXIodXNlckRhdGFIYW5kbGVyU2VydmljZSwgc2hhcmVkRXZlbnRzU2VydmljZSwgaW50ZXJuYWxDRUVFbWl0dGVyLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwLCBjZWVBcGlTZXJ2aWNlLCByb3V0ZXIsIGZpbGVVcGxvYWRTZXJ2aWNlKTtgYFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkO1xyXG4gICAgICBpZih0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW0ucGFyYW1ldGVyX3R5cGVdID0gcGFyYW0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3VzdG9tX2NsYXNzX25hbWUgPSB0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZSAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSA/IHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lLnNwbGl0KCd8JykgOiBbXVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJvd0RhdGE6IFwiLCB0aGlzLnJvd0RhdGEsIFwiIGZpZWxkRGF0YTogXCIsIHRoaXMuZmllbGREYXRhLCBcIiByb290RGF0YTogXCIsIHRoaXMucm9vdERhdGEsKVxyXG4gICAgICBsZXQgcHBEYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKTtcclxuICAgICAgaWYocHBEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5pbWFnZU5hbWUgPSBwcERhdGE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZERhdGEuaGFzT3duUHJvcGVydHkoJ3Jlc3BvbnNlX2FwaV9rZXknKSkge1xyXG4gICAgICAgIGxldCB2YWw7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleS5zcGxpdCgnfHwnKSkge1xyXG4gICAgICAgICAgdmFsID0gdGhpcy5yZXR1cm5WYWx1ZUZyb21DYWxsYmFjayhrZXkpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5LCBcIiA6PTogXCIsIHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuaW1hZ2VOYW1lID0gdmFsO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYoIXRoaXMuZmllbGRWYWx1ZSAmJiB0aGlzLmlzTWFuZGF0b3J5ICYmIHRoaXMuaXNQaWNDaGFuZ2VCdG5DbGlja2QpIHtcclxuICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSwgdGhpcy52YWxpZCk7XHJcblxyXG4gICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0Rm9yRW1wdHlTZXNzaW9uXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRGb3JFbXB0eVNlc3Npb24uc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXM6IFwiLHJlc1sndW5pcXVlX2lkcyddLFwiID0+IFwiLHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZClcclxuICAgICAgICBpZiAocmVzICYmIHJlc1sndW5pcXVlX2lkcyddICYmIHJlc1sndW5pcXVlX2lkcyddLmluY2x1ZGVzKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU5hbWUgPSBcIi9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGNvbnN0IFtpLCBwb3NzaWJsZVZhbHVlXSBvZiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMuZW50cmllcygpKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gcG9zc2libGVWYWx1ZS5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBJRmlsZURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogYCR7dGhpcy5maWVsZERhdGEuaHRtbF9pZH0tJHtpfWAsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB2YWx1ZXNbMF0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBOdW1iZXIodmFsdWVzWzFdKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWRzID0geyAuLi50aGlzLmZpbGVVcGxvYWRzLCAuLi57IFtvYmoudHlwZV06IG9iaiB9IH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU29tZXRoaW5nIGlzIHdyb25nIGluIHRoZSBjb25maWd1cmF0aW9uIGZvciAke3Bvc3NpYmxlVmFsdWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2Vzc2lvbkRhdGFVcGRhdGVkKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gb24gY2xpY2sgb24gc3dpdGNoXHJcbiAgICAgICAgLy8gc2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHN3aXRjaCBhbmQgcGFzc2luZyBpdCBhcyBwYXlsb2FkIHNvIHRoYXRcclxuICAgICAgICAvLyBpdCBjYW4gYmUgc2V0IGFuZCBlbWl0dGVkIGZyb20gdGhlIGV2ZW50IGxpc3RcclxuICAgICAgICAvLyB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snLCB7fSwgdHJ1ZSwgeyB1bmlxdWVJZDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB2YWx1ZTogZXZlbnQgPyB0aGlzLnZhbHVlMiA6IHRoaXMudmFsdWUxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICAgIGxldCBwcERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgaWYocHBEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuaW1hZ2VOYW1lID0gcHBEYXRhO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNEYXRhICE9PSBudWxsICYmIHJlc0RhdGEgIT09IHVuZGVmaW5lZCAmJiByZXNEYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmltYWdlTmFtZSA9IHJlc0RhdGE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNldFNlc3Npb25EYXRhKGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25TZXRTZXNzaW9uRGF0YShhcGlLZXksIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UodGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbXB0eVNlc3Npb24oZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAvLyBpZiAoY2hhbmdlcy5maWVsZERhdGEgJiYgY2hhbmdlcy5yb290RGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhLmN1cnJlbnRWYWx1ZS5sYW5nQ2hhbmdlZCkge1xyXG4gICAgICAvLyAgICAgdGhpcy50b2dnbGVMYW5ndWFnZShjaGFuZ2VzLmZpZWxkRGF0YS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBpZiAoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBvbkVycm9yKGVycm9yIDphbnkpIHtcclxuICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8vIGZpbGVDaGFuZ2VFdmVudChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAvLyAgIHRoaXMuaXNQaWNDaGFuZ2VCdG5DbGlja2QgPSB0cnVlO1xyXG4gICAgLy8gICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgLy8gICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZXZlbnQ7XHJcbiAgICAvLyAgIHRoaXMub3BlbkRpYWxvZyhldmVudClcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb252ZXJ0UmVhZGFibGVDU1ZGaWxlKGZpbGU6IGFueSkge1xyXG4gICAgICBjb25zdCBleHQgPSBmaWxlLm5hbWU/LnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+IDAgJiYgdGhpcy5wcmVEZWZpbmVNaW1lVHlwZVtleHRdICYmIHRoaXMucHJlRGVmaW5lTWltZVR5cGVDaGVja1tleHRdLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcclxuICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShbZmlsZV0sIGZpbGUubmFtZSwgeyB0eXBlOiB0aGlzLnByZURlZmluZU1pbWVUeXBlW2V4dF0gfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG5cclxuICAgIGZpbGVDaGFuZ2VFdmVudChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgIHRoaXMuZXJyb3JUeXBlID0gJyc7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IGZpbGVPYmogPSB0aGlzLmNvbnZlcnRSZWFkYWJsZUNTVkZpbGUoZmlsZSk7XHJcbiAgICAgIGNvbnN0IGZpbGVEYXRhID0gdGhpcy5maWxlVXBsb2Fkc1tmaWxlT2JqLnR5cGVdO1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVbJ25hbWUnXTtcclxuICAgICAgLy8g4pyFIEFsbG93IG9ubHkgZmlsZW5hbWVzIHdpdGggZXhhY3RseSBvbmUgZG90IChlLmcuLCBhYmMucGRmKVxyXG4gICAgICBjb25zdCBkb3RDb3VudCA9IChmaWxlTmFtZS5tYXRjaCgvXFwuL2cpIHx8IFtdKS5sZW5ndGg7XHJcbiAgICAgIGlmIChkb3RDb3VudCAhPT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmh0bWxfaWQsIHRoaXMuZmlsZXMsICdpbnZhbGlkX2ZpbGVfZXh0ZW5zaW9uJyk7XHJcbiAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnaW52YWxpZF9maWxlX2V4dGVuc2lvbic7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7IC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyAyLiDinIUgQmxvY2sgZGFuZ2Vyb3VzIGV4dGVuc2lvbnNcclxuICAgICAgIGNvbnN0IGRpc2FsbG93ZWRFeHRlbnNpb25zID0gWydleGUnLCAnanMnLCAnaHRtbCcsICdodG0nLCAnc3ZnJywgJ3BocCcsICdhc3B4JywgJ2pzcCcsICdiYXQnLCAnc2gnXTtcclxuICAgICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBmaWxlTmFtZS5zcGxpdCgnLicpLnBvcCgpO1xyXG4gICAgICAgaWYgKGRpc2FsbG93ZWRFeHRlbnNpb25zLmluY2x1ZGVzKGZpbGVFeHRlbnNpb24pKSB7XHJcbiAgICAgICB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UodGhpcy5odG1sX2lkLCB0aGlzLmZpbGVzLCAnaW52YWxpZF9maWxlX2V4dGVuc2lvbicpO1xyXG4gICAgICAgdGhpcy5lcnJvclR5cGUgPSAnaW52YWxpZF9maWxlX2V4dGVuc2lvbic7XHJcbiAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgIHJldHVybjtcclxuICAgICAgIH1cclxuICAgICAgaWYgKCFmaWxlRGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuaHRtbF9pZCwgdGhpcy5maWxlcywgJ2ZpbGVfdHlwZScpO1xyXG4gICAgICAgICAgdGhpcy5lcnJvclR5cGUgPSAnZmlsZV90eXBlJztcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZigoZmlsZURhdGEudHlwZS50b0xvd2VyQ2FzZSgpID09IGZpbGVPYmoudHlwZS50b0xvd2VyQ2FzZSgpKSAmJiBmaWxlT2JqLnNpemUgPiAoZmlsZURhdGEuc2l6ZSAqIDEwMjQpKXtcclxuICAgICAgICB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UodGhpcy5odG1sX2lkLCB0aGlzLmZpbGVzLCAnaW5kaXZpZHVhbF9maWxlX3NpemUnKTtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9ICdpbmRpdmlkdWFsX2ZpbGVfc2l6ZSc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaXNQaWNDaGFuZ2VCdG5DbGlja2QgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlOyAgICBcclxuICAgICAgaWYgKGZpbGUgJiYgZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoXCIuaGVpY1wiKSkge1xyXG4gICAgICAgIGhlaWMyYW55KHtcclxuICAgICAgICAgIGJsb2I6IGZpbGUsXHJcbiAgICAgICAgICB0b1R5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoY29udmVydGVkQmxvYjogQmxvYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcG5nRmlsZSA9IG5ldyBGaWxlKFtjb252ZXJ0ZWRCbG9iXSwgZmlsZS5uYW1lLnJlcGxhY2UoL1xcLmhlaWMkL2ksIFwiLnBuZ1wiKSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgLy8gQ3JlYXRlIG5ldyBldmVudCB3aXRoIGNvbnZlcnRlZCBmaWxlXHJcbiAgICAgICAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XHJcbiAgICAgICAgICBkYXRhVHJhbnNmZXIuaXRlbXMuYWRkKHBuZ0ZpbGUpO1xyXG4gICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSB7IC4uLmV2ZW50LCB0YXJnZXQ6IHsgLi4uZXZlbnQudGFyZ2V0LCBmaWxlczogZGF0YVRyYW5zZmVyLmZpbGVzIH0gfTtcclxuICAgIFxyXG4gICAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IG5ld0V2ZW50O1xyXG4gICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKG5ld0V2ZW50KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29udmVydGluZyBIRUlDIHRvIFBOR1wiLCBlKTtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBldmVudDtcclxuICAgICAgICB0aGlzLm9wZW5EaWFsb2coZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50KSB7XHJcbiAgICAgIHRoaXMuY3JvcHBlZEltYWdlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybChldmVudC5vYmplY3RVcmwgfHwgZXZlbnQuYmFzZTY0IHx8ICcnKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1hZ2VMb2FkZWQoKSB7XHJcbiAgICAgIHRoaXMuc2hvd0Nyb3BwZXIgPSB0cnVlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnSW1hZ2UgbG9hZGVkJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjcm9wcGVyUmVhZHkoc291cmNlSW1hZ2VEaW1lbnNpb25zOiBEaW1lbnNpb25zKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDcm9wcGVyIHJlYWR5Jywgc291cmNlSW1hZ2VEaW1lbnNpb25zKTtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsb2FkSW1hZ2VGYWlsZWQoKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvYWQgaW1hZ2UgZmFpbGVkJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByb3RhdGVMZWZ0KCkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gVXNlIHRpbWVvdXQgYmVjYXVzZSByb3RhdGluZyBpbWFnZSBpcyBhIGhlYXZ5IG9wZXJhdGlvbiBhbmQgd2lsbCBibG9jayB0aGUgdWkgdGhyZWFkXHJcbiAgICAgICAgdGhpcy5jYW52YXNSb3RhdGlvbi0tO1xyXG4gICAgICAgIHRoaXMuZmxpcEFmdGVyUm90YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcm90YXRlUmlnaHQoKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FudmFzUm90YXRpb24rKztcclxuICAgICAgICB0aGlzLmZsaXBBZnRlclJvdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIG1vdmVMZWZ0KCkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHtcclxuICAgICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICB0cmFuc2xhdGVIOiArK3RoaXMudHJhbnNsYXRlSFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbW92ZVJpZ2h0KCkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHtcclxuICAgICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICB0cmFuc2xhdGVIOiAtLXRoaXMudHJhbnNsYXRlSFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbW92ZVRvcCgpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgdHJhbnNsYXRlVjogKyt0aGlzLnRyYW5zbGF0ZVZcclxuICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIG1vdmVCb3R0b20oKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAgIC4uLnRoaXMudHJhbnNmb3JtLFxyXG4gICAgICAgIHRyYW5zbGF0ZVY6IC0tdGhpcy50cmFuc2xhdGVWXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwcml2YXRlIGZsaXBBZnRlclJvdGF0ZSgpIHtcclxuICAgICAgY29uc3QgZmxpcHBlZEggPSB0aGlzLnRyYW5zZm9ybS5mbGlwSDtcclxuICAgICAgY29uc3QgZmxpcHBlZFYgPSB0aGlzLnRyYW5zZm9ybS5mbGlwVjtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgZmxpcEg6IGZsaXBwZWRWLFxyXG4gICAgICAgIGZsaXBWOiBmbGlwcGVkSFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZUggPSAwO1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZVYgPSAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZmxpcEhvcml6b250YWwoKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAgIC4uLnRoaXMudHJhbnNmb3JtLFxyXG4gICAgICAgIGZsaXBIOiAhdGhpcy50cmFuc2Zvcm0uZmxpcEhcclxuICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIGZsaXBWZXJ0aWNhbCgpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgZmxpcFY6ICF0aGlzLnRyYW5zZm9ybS5mbGlwVlxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVzZXRJbWFnZSgpIHtcclxuICAgICAgdGhpcy5zY2FsZSA9IDE7XHJcbiAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICB0aGlzLmNhbnZhc1JvdGF0aW9uID0gMDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlVW5pdDogJ3B4J1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgem9vbU91dCgpIHtcclxuICAgICAgdGhpcy5zY2FsZSAtPSAuMTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGVcclxuICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIHpvb21JbigpIHtcclxuICAgICAgdGhpcy5zY2FsZSArPSAuMTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGVcclxuICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIHRvZ2dsZUNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpbygpIHtcclxuICAgICAgdGhpcy5jb250YWluV2l0aGluQXNwZWN0UmF0aW8gPSAhdGhpcy5jb250YWluV2l0aGluQXNwZWN0UmF0aW87XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1cGRhdGVSb3RhdGlvbigpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgcm90YXRlOiB0aGlzLnJvdGF0aW9uXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0b2dnbGVBc3BlY3RSYXRpbygpIHtcclxuICAgICAgdGhpcy5hc3BlY3RSYXRpbyA9IHRoaXMuYXNwZWN0UmF0aW8gPT09IDQgLyAzID8gMTYgLyA1IDogNCAvIDM7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRpYWxvZyhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZUNyb3BNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGEsXHJcbiAgICAgICAgICAgICAgYWRkaXRpb25hbFBhcmFtZXRlcjogdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy8gdGhpcy5hbmltYWwuc2V0KHJlc3VsdCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzdWx0OiAnLHJlc3VsdCk7XHJcbiAgICAgICAgICAvLyBJZiB1cGxvYWRlZCBmaWxlIHNpemUgaXMgc21hbGxlciB0aGVuIHNraXAgY29tcHJlc3Npb24gXHJcbiAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KFwiQ0VFX0NvbXByZXNzSW1hZ2VfSWZTaXplRXhjZWVkc0luS0JcIikgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1hZ2VfSWZTaXplRXhjZWVkc0luS0JcIl0gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wcmVzc0ltYWdlKHJlc3VsdCwgKGNvbXBJbWc6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuaW1hZ2VOYW1lID0gdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGNvbXBJbWc7XHJcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhdG9BdHRhY2htZW50cyhjb21wSW1nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmltYWdlTmFtZSA9IHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZERhdGF0b0F0dGFjaG1lbnRzKHJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmZpZWxkVmFsdWUgJiYgdGhpcy5pc01hbmRhdG9yeSAmJiB0aGlzLmlzUGljQ2hhbmdlQnRuQ2xpY2tkKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy52YWxpZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlLCB0aGlzLnZhbGlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXJsdG9GaWxlKHVybCwgZmlsZW5hbWUsIG1pbWVUeXBlKXtcclxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHVybC5zcGxpdCgnLCcpLFxyXG4gICAgICAgICAgICAgICAgbWltZSA9IGFyclswXS5tYXRjaCgvOiguKj8pOy8pWzFdLFxyXG4gICAgICAgICAgICAgICAgYnN0ciA9IGF0b2IoYXJyW2Fyci5sZW5ndGggLSAxXSksIFxyXG4gICAgICAgICAgICAgICAgbiA9IGJzdHIubGVuZ3RoLCBcclxuICAgICAgICAgICAgICAgIHU4YXJyID0gbmV3IFVpbnQ4QXJyYXkobik7XHJcbiAgICAgICAgICAgIHdoaWxlKG4tLSl7XHJcbiAgICAgICAgICAgICAgICB1OGFycltuXSA9IGJzdHIuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IG5ldyBGaWxlKFt1OGFycl0sIGZpbGVuYW1lLCB7dHlwZTptaW1lIHx8IG1pbWVUeXBlfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuYXJyYXlCdWZmZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYnVmID0+IG5ldyBGaWxlKFtidWZdLCBmaWxlbmFtZSx7dHlwZTptaW1lVHlwZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhVVJMdG9GaWxlKGRhdGF1cmwsIGZpbGVuYW1lKSB7XHJcbiAgICAgIHZhciBhcnIgPSBkYXRhdXJsLnNwbGl0KCcsJyksXHJcbiAgICAgICAgICBtaW1lID0gYXJyWzBdLm1hdGNoKC86KC4qPyk7LylbMV0sXHJcbiAgICAgICAgICBic3RyID0gYXRvYihhcnJbYXJyLmxlbmd0aCAtIDFdKSwgXHJcbiAgICAgICAgICBuID0gYnN0ci5sZW5ndGgsIFxyXG4gICAgICAgICAgdThhcnIgPSBuZXcgVWludDhBcnJheShuKTtcclxuICAgICAgd2hpbGUobi0tKXtcclxuICAgICAgICAgIHU4YXJyW25dID0gYnN0ci5jaGFyQ29kZUF0KG4pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgRmlsZShbdThhcnJdLCBmaWxlbmFtZSwge3R5cGU6bWltZX0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldE5hbWUob3JpZ2luYWxOYW1lOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHApIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gb3JpZ2luYWxOYW1lO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZWQgPSBvcmlnaW5hbE5hbWUubWF0Y2gobmV3IFJlZ0V4cChyZWdleCkpO1xyXG4gICAgICAgIGlmIChtYXRjaGVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBtYXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3tmaWxlbmFtZX0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmaWxlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAne3l5eXltbWRkaGhtbXNzfSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAne3RpbWVzdGFtcH0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBTdHJpbmcobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnIyMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gbmFtZS5tYXRjaChuZXcgUmVnRXhwKC9bXnt9XSsvZykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdmFsdWVzID8gdmFsdWVzWzBdIDogbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGtleS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBoYW5kbGVyRGF0YSA/IGhhbmRsZXJEYXRhLnZhbHVlW2tleV0gOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaURhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUFwaUtleShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGFwaURhdGEgPyBhcGlEYXRhLnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3BsaXQobmFtZSkuam9pbih2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlbmREYXRhdG9BdHRhY2htZW50cyhmaWxlRGF0YSl7XHJcbiAgICAgIHZhciBpbWFnZU5hbWUgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QUF9Gb3JtYXQnXSA/ICdwcm9maWxlX2ltYWdlLicgKyB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QUF9Gb3JtYXQnXSA6ICdwcm9maWxlX2ltYWdlLnBuZyc7XHJcbiAgICAgIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QUF9GaWxlbmFtZSddKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIHRoZSBmaWxlIG5hbWUgYXMgY29uY2F0ZW5hdGlvbiBvZiBhcGkga2V5c1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICogRmlsZSBuYW1lIGNhbiBiZSB7RmlsZU5hbWV9X3tTb21lQVBJS2V5fV97VGltZVN0YW1wfVxyXG4gICAgICAgICAqICogb3IgZmlsZS17YXBwbGljYXRpb24vcmVuZXdhbC1jcmVhdGUtcmVjb3JkIyNjdXJyZW50RW5yb2xsbWVudElkfV97WVlZWU1NRERISE1NU1N9XHJcbiAgICAgICAgICogKiBoZXJlIGZpcnN0IHNlYXJjaGluZyB3b3VsZCBiZSBkb25lIHVzaW5nIEZpbGVOYW1lXHJcbiAgICAgICAgICogKiBhbmQgVGltZVN0YW1wIHRoZW4gbmVlZCB0byBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGFwaUtleVxyXG4gICAgICAgICAqICogdGhlbiBqb2luXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGltYWdlTmFtZS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZmlsZS5zcGxpY2UoLTEpWzBdO1xyXG4gICAgICAgIGxldCByZXN1bHRGaWxlTmFtZSA9IHRoaXMuZ2V0TmFtZShcclxuICAgICAgICAgIHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1BQX0ZpbGVuYW1lJ10sXHJcbiAgICAgICAgICBmaWxlWzBdLFxyXG4gICAgICAgICAgL1xceyguKj8pXFx9L2dcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdEZpbGVOYW1lID0gYCR7cmVzdWx0RmlsZU5hbWV9LiR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgICAgaW1hZ2VOYW1lID0gcmVzdWx0RmlsZU5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBzZWxlY3RlZEZpbGUgPSB7XHJcbiAgICAgICAgdXBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGZpbGUgOiB0aGlzLmRhdGFVUkx0b0ZpbGUoZmlsZURhdGEsaW1hZ2VOYW1lKSxcclxuICAgICAgICBhdHRhY2htZW50SWQgOiAnJyxcclxuICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgIGF0dGFjaG1lbnRQYXRoIDogJycsXHJcbiAgICAgICAgdUlkIDogZmlsZURhdGEubGFzdE1vZGlmaWVkLFxyXG4gICAgICAgIGN1c3RvbTogW10sXHJcbiAgICAgICAgYXV0b1VwbG9hZCA6IHRydWVcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvb3REYXRhW3RoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0oc2VsZWN0ZWRGaWxlKTtcclxuICAgIH1cclxuXHJcbiAgYXN5bmMgY29tcHJlc3NJbWFnZShmaWxlOiBhbnksIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG5cclxuICAgIGlmICghZmlsZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHNldHRpbmdzOiBJQ29tcHJlc3NJbWFnZSA9IHtcclxuICAgICAgb3JpZW50YXRpb246IDEsXHJcbiAgICAgIHJhdGlvOiA1MCxcclxuICAgICAgcXVhbGl0eTogNTBcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3Igb3JpZW50YXRpb25cclxuICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfQ29tcHJlc3NJbWdfT3JpZW50YXRpb25cIikgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX09yaWVudGF0aW9uXCJdICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldHRpbmdzLm9yaWVudGF0aW9uID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX09yaWVudGF0aW9uXCJdO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yIHJhdGlvXHJcbiAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KFwiQ0VFX0NvbXByZXNzSW1nX0FzcGVjdFJhdGlvXCIpICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9Db21wcmVzc0ltZ19Bc3BlY3RSYXRpb1wiXSAhPT0gXCJcIikge1xyXG4gICAgICBzZXR0aW5ncy5yYXRpbyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9Db21wcmVzc0ltZ19Bc3BlY3RSYXRpb1wiXTtcclxuICAgIH1cclxuICAgIC8vIGZvciBxdWFsaXR5XHJcbiAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KFwiQ0VFX0NvbXByZXNzSW1nX1F1YWxpdHlcIikgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX1F1YWxpdHlcIl0gIT09IFwiXCIpIHtcclxuICAgICAgc2V0dGluZ3MucXVhbGl0eSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9Db21wcmVzc0ltZ19RdWFsaXR5XCJdO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yIG1heFdpZHRoXHJcbiAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KFwiQ0VFX0NvbXByZXNzSW1nX21heEhlaWdodFwiKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWdfbWF4SGVpZ2h0XCJdICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldHRpbmdzLm1heFdpZHRoID0gcGFyc2VJbnQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX21heEhlaWdodFwiXS50b1N0cmluZygpLnJlcGxhY2UoL1teXFxkXS9nLCAnJykpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yIG1heEhlaWdodFxyXG4gICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eShcIkNFRV9Db21wcmVzc0ltZ19tYXhXaWR0aFwiKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWdfbWF4V2lkdGhcIl0gIT09IFwiXCIpIHtcclxuICAgICAgc2V0dGluZ3MubWF4SGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX21heFdpZHRoXCJdLnRvU3RyaW5nKCkucmVwbGFjZSgvW15cXGRdL2csICcnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VTaXplTGltaXQ6IG51bWJlciA9IE51bWJlcih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWFnZV9JZlNpemVFeGNlZWRzSW5LQlwiXS5tYXRjaCgvXFxkKy8pKTtcclxuICAgIGNvbnN0IGZpbGVTaXplID0gdGhpcy5nZXRCYXNlNjRJbWFnZVNpemUoZmlsZSk7XHJcbiAgICBpZiAoKGZpbGVTaXplIC8gMTAwMCkgPCBpbWFnZVNpemVMaW1pdCkge1xyXG4gICAgICBjYWxsQmFjayhmaWxlKVxyXG4gICAgfVxyXG4gICAgdGhpcy5pbWFnZUNvbXByZXNzLmNvbXByZXNzRmlsZShcclxuICAgICAgZmlsZSxcclxuICAgICAgc2V0dGluZ3Mub3JpZW50YXRpb24sXHJcbiAgICAgIHNldHRpbmdzLnJhdGlvLFxyXG4gICAgICBzZXR0aW5ncy5xdWFsaXR5LFxyXG4gICAgICBzZXR0aW5ncy5tYXhXaWR0aCxcclxuICAgICAgc2V0dGluZ3MubWF4SGVpZ2h0XHJcbiAgICApLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDb21wcmVzc2VkIGltYWdlOiAnLCByZXN1bHQpOyAgLy8gQmFzZTY0IGNvbXByZXNzZWQgaW1hZ2VcclxuICAgICAgY2FsbEJhY2socmVzdWx0KVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFzZTY0SW1hZ2VTaXplKGJhc2U2NFN0cmluZykge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBwcmVmaXggKGlmIHByZXNlbnQpXHJcbiAgICBjb25zdCBiYXNlNjREYXRhID0gYmFzZTY0U3RyaW5nLnNwbGl0KCcsJylbMV07XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzaXplIGluIGJ5dGVzXHJcbiAgICBjb25zdCBzaXplSW5CeXRlcyA9IChiYXNlNjREYXRhLmxlbmd0aCAqIDMpIC8gNCAtIChiYXNlNjREYXRhLmVuZHNXaXRoKCc9PScpID8gMiA6IGJhc2U2NERhdGEuZW5kc1dpdGgoJz0nKSA/IDEgOiAwKTtcclxuXHJcbiAgICByZXR1cm4gc2l6ZUluQnl0ZXM7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCIgaWQ9XCJ7e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiICpuZ0lmPVwiaXNWaXNpYmxlXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b29sdGlwXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+aTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS11cGxvYWQge3tpc0N1c3RvbUNsYXNzICYmIGN1c3RvbV9jbGFzc19uYW1lID8gY3VzdG9tX2NsYXNzX25hbWVbMF0gOiAnJ319IHt7ICF2YWxpZCAmJiBpc01hbmRhdG9yeSAgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgaW1hZ2VOYW1lICsgJyknfVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImlzRWRpdGFibGVcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvaWNvbl9leHBhbmQucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgI2ZpbGVJbnB1dCAoY2xpY2spPVwiZmlsZUlucHV0LnZhbHVlID0gJydcIiBpZD1cImZpbGUtaW5wdXRcIiB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBhY2NlcHQ9XCJpbWFnZS8qLC5oZWljXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIiAqbmdJZj1cInNob3dFcnJvck9uTmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeScgJiYgIWZpZWxkVmFsdWVcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCIgKm5nSWY9XCJlcnJvclR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09IGVycm9yVHlwZVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==