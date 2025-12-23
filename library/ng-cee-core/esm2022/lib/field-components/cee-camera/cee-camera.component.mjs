import { Component, Input, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, forwardRef } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { HttpHeaders } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { WebcamModule, WebcamUtil } from 'ngx-webcam';
import { NgxBarcodeScannerModule } from "@eisberg-labs/ngx-barcode-scanner";
import { CommonModule, JsonPipe } from '@angular/common';
import { CeeAttachmentsComponent } from '../cee-attachments/cee-attachments.component';
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
import * as i14 from "ngx-webcam";
import * as i15 from "@angular/common";
const _c0 = ["video"];
const _c1 = () => ["code_128", "ean", "upc", "upc_e", "ean_8"];
function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "webcam", 14);
    i0.ɵɵlistener("imageCapture", function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template_webcam_imageCapture_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleImage($event)); })("cameraSwitched", function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template_webcam_cameraSwitched_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.cameraWasSwitched($event)); })("initError", function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template_webcam_initError_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleInitError($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("width", 500)("height", 400)("trigger", ctx_r1.triggerObservable)("allowCameraSwitch", ctx_r1.allowCameraSwitch)("mirrorImage", ctx_r1.mirrorImage)("imageQuality", 1)("captureImageData", ctx_r1.captureImageData)("switchCamera", ctx_r1.nextWebcamObservable)("videoOptions", ctx_r1.videoOptionSet);
} }
function CeeCameraComponent_div_0_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "img", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.waterMarkImage ? ctx_r1.waterMarkImage : ctx_r1.webcamImage.imageAsDataUrl, i0.ɵɵsanitizeUrl);
} }
function CeeCameraComponent_div_0_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, "Captured image will be automatically uploaded.");
    i0.ɵɵelementEnd();
} }
function CeeCameraComponent_div_0_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "h6");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.AdditionalParameter.CEE_camera_error || "camera device not available", " ");
} }
function CeeCameraComponent_div_0_div_1_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.triggerSnapshot()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.AdditionalParameter.takepicture || "Take Picture");
} }
function CeeCameraComponent_div_0_div_1_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.retakePicture()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.AdditionalParameter.retakepicture || "Retake Picture");
} }
function CeeCameraComponent_div_0_div_1_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.changeWebCam(true)); });
    i0.ɵɵtext(1, "Toggle Camera");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", !ctx_r1.multipleWebcamsAvailable);
} }
function CeeCameraComponent_div_0_div_1_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onoffWebcam()); });
    i0.ɵɵtext(1, "Switch Camera");
    i0.ɵɵelementEnd();
} }
function CeeCameraComponent_div_0_div_1_div_1_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.rotate()); });
    i0.ɵɵtext(1, "Orientation");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", !ctx_r1.multipleWebcamsAvailable);
} }
function CeeCameraComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 5);
    i0.ɵɵtemplate(2, CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template, 1, 9, "webcam", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeCameraComponent_div_0_div_1_div_1_div_3_Template, 2, 1, "div", 7)(4, CeeCameraComponent_div_0_div_1_div_1_div_4_Template, 2, 0, "div", 8)(5, CeeCameraComponent_div_0_div_1_div_1_div_5_Template, 3, 1, "div", 9);
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵtemplate(7, CeeCameraComponent_div_0_div_1_div_1_button_7_Template, 2, 1, "button", 11)(8, CeeCameraComponent_div_0_div_1_div_1_button_8_Template, 2, 1, "button", 11)(9, CeeCameraComponent_div_0_div_1_div_1_button_9_Template, 2, 1, "button", 12)(10, CeeCameraComponent_div_0_div_1_div_1_button_10_Template, 2, 0, "button", 11)(11, CeeCameraComponent_div_0_div_1_div_1_button_11_Template, 2, 1, "button", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showWebcam);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.webcamImage && !ctx_r1.showWebcam);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.autoUpload == true && ctx_r1.errorMsgBox == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.errors.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.reTrigger);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.reTrigger);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.AdditionalParameter.cameratoggle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.AdditionalParameter.cameraswitch);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.AdditionalParameter.orientation);
} }
function CeeCameraComponent_div_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " camera device not available ");
} }
function CeeCameraComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeCameraComponent_div_0_div_1_div_1_Template, 12, 9, "div", 4)(2, CeeCameraComponent_div_0_div_1_ng_template_2_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noCameraExist_r8 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isCameraExist)("ngIfElse", noCameraExist_r8);
} }
function CeeCameraComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "label");
    i0.ɵɵtext(2, "Camera Library - Barcode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22)(4, "ngx-barcode-scanner", 23);
    i0.ɵɵtwoWayListener("valueChange", function CeeCameraComponent_div_0_div_2_Template_ngx_barcode_scanner_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.value, $event) || (ctx_r1.value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("exception", function CeeCameraComponent_div_0_div_2_Template_ngx_barcode_scanner_exception_4_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onError($event)); })("valueChange", function CeeCameraComponent_div_0_div_2_Template_ngx_barcode_scanner_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onValueChanges($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("value", ctx_r1.value);
    i0.ɵɵproperty("codes", i0.ɵɵpureFunction0(3, _c1))("errorThreshold", 0.1);
} }
function CeeCameraComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, CeeCameraComponent_div_0_div_1_Template, 4, 2, "div", 3)(2, CeeCameraComponent_div_0_div_2_Template, 5, 4, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.barcodeShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.barcodeShow);
} }
export class CeeCameraComponent extends BaseView {
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
    stepId;
    fieldData;
    keepState = false;
    rowData;
    rootData;
    video;
    isCameraExist = true;
    showWebcam = true;
    allowCameraSwitch = true;
    multipleWebcamsAvailable = false;
    errors = [];
    reTrigger = false;
    angle = 0;
    deviceId;
    mirrorImage = 'never';
    captureImageData = true;
    AdditionalParameter = {};
    videoOptions1 = {
        width: { ideal: 600 },
        height: { ideal: 480 },
        facingMode: "user"
    };
    videoOptions2 = {
        width: { ideal: 320 },
        height: { ideal: 240 },
        facingMode: "environment"
    };
    videoOptionSet = this.videoOptions1;
    webcamImage;
    trigger = new Subject();
    nextWebcam = new Subject();
    barcodeShow = false;
    value;
    isError = false;
    quaggaConfig = {};
    files = [];
    payLoad = {
        type: 'file',
        fileData: {}
    };
    variableObj = {};
    autoUpload = false;
    errorMsgBox = false;
    waterMarkImage = '';
    latitude;
    longitude;
    orientationChangeHandler = () => this.show();
    windowLoadHandler = () => this.show();
    subscriptions = new Subscription();
    isDestroyed = false;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService, service) {
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
        screen.orientation.addEventListener("change", this.orientationChangeHandler);
        window.addEventListener("load", this.windowLoadHandler);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.autoUpload = (this.AdditionalParameter['AutoUpload'] === "true") ? true : false;
    }
    //@HostListener('window:beforeunload')
    ngOnDestroy() {
        screen.orientation.removeEventListener("change", this.orientationChangeHandler);
        window.removeEventListener("load", this.windowLoadHandler);
        if (this.trigger) {
            this.trigger.complete();
        }
        if (this.nextWebcam) {
            this.nextWebcam.complete();
        }
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        this.isDestroyed = true;
        this.webcamImage = undefined;
        this.waterMarkImage = '';
        this.files = [];
        this.variableObj = {};
        this.errors = [];
        // Clear location data
        this.latitude = undefined;
        this.longitude = undefined;
        // Reset configuration objects
        this.AdditionalParameter = {};
        this.quaggaConfig = {};
        this.payLoad = {
            type: 'file',
            fileData: {}
        };
        // Reset video options
        this.videoOptions1 = null;
        this.videoOptions2 = null;
        this.videoOptionSet = null;
        this.onViewUnload();
        this.onStopButtonPress();
    }
    onStopButtonPress() {
        this.service.stop();
    }
    getCurrentLocation() {
        if (navigator.geolocation && !this.isDestroyed) {
            navigator.geolocation.getCurrentPosition(position => {
                if (!this.isDestroyed) {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                }
            }, error => {
                if (!this.isDestroyed) {
                    console.error('Geolocation error:', error);
                }
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    onViewDataInit() {
        this.getCurrentLocation();
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const param of this.fieldData.additional_parameters) {
                this.AdditionalParameter[param.parameter_type] = param.value;
            }
        }
        if (this.AdditionalParameter.scanmode === "barcode") {
            this.barcodeShow = true;
            this.onStartButtonPress();
        }
        else {
            this.barcodeShow = false;
            WebcamUtil.getAvailableVideoInputs()
                .then((mediaDevices) => {
                this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
            });
        }
    }
    concatData() { }
    onStartButtonPress() {
        this.service.start(this.quaggaConfig, 0.1);
    }
    onSessionDataUpdated(event) {
        // on click on switch
        // setting the value of the switch and passing it as payload so that
        // it can be set and emitted from the event list
        // this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: event ? this.value2 : this.value1 });
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
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
    }
    onError(error) {
        this.isError = true;
    }
    getOppositeOrientation() {
        const { type } = screen.orientation;
        return type.startsWith("portrait") ? "landscape" : "portrait";
    }
    async rotate() {
        // try {
        //   await this.fullScreenCheck();
        // } catch (err) {
        //   console.error(err);
        // }
        this.unlock();
        const newOrientation = this.getOppositeOrientation();
        // await screen.orientation.lock(newOrientation);
    }
    fullScreenCheck() {
        if (document.fullscreenElement)
            return;
        return document.documentElement.requestFullscreen();
    }
    unlock() {
        screen.orientation.unlock();
    }
    show() {
        const { type, angle } = screen.orientation;
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    onoffWebcam() {
        this.showWebcam = !this.showWebcam;
        this.webcamImage = undefined;
        this.reTrigger = false;
    }
    changeWebCam(directionOrDeviceId) {
        this.videoOptionSet = /Android|iphone/i.test(navigator.userAgent) ? this.videoOptions2 : this.videoOptions1;
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
        this.showWebcam = false;
        this.reTrigger = true;
        this.errorMsgBox = true;
        if (this.AdditionalParameter['CEE_watermark'] == 'true') {
            this.imageWatermarking(this.webcamImage);
        }
        else {
            let fileData = this.dataURLtoFile(this.webcamImage, this.AdditionalParameter['imageName'] + ".jpeg");
            this.sendDatatoAttachments(fileData);
        }
    }
    sendDatatoAttachments(fileData) {
        let selectedFile = {
            uploaded: false,
            file: fileData,
            attachmentId: '',
            url: '',
            attachmentPath: '',
            uId: fileData.lastModified,
            custom: [],
            autoUpload: this.autoUpload
        };
        this.rootData[this.fieldData.unique_id](selectedFile);
    }
    imageWatermarking(webImage) {
        let imageBase64 = webImage.imageAsDataUrl.split(",")[1];
        let requestBody = {
            image_text: 'india',
            output_image: "beach_timestamp_bottom1851.jpg",
            on_image: "",
            // image_pos: "200,200",
            // text_pos: "900,1600",
            file_name: "waterfall.jpg",
            file_data: imageBase64
        };
        requestBody.on_image = this.AdditionalParameter['CEE_watermarkonimage'] == 'true' ? "True" : "False";
        //requestBody.image_pos = this.AdditionalParameter['CEE_watermarkposition'] == 'top' ? "200,200" : "400,400";
        //requestBody.text_pos = this.AdditionalParameter['CEE_watermarkposition'] == 'top' ? "900,1600" : "500,1000";
        requestBody.output_image = this.AdditionalParameter['imageName'] + ".jpeg";
        if (this.AdditionalParameter['CEE_watermarkvalue'].includes('((dynamic))')) {
            let nowstring = this.setDynamicLabelUtil.getDynamicValue(this.fieldData).additional_parameters_config ? this.setDynamicLabelUtil.getDynamicValue(this.fieldData).additional_parameters_config : "";
            if (this.AdditionalParameter['CEE_watermarkvalue'].includes('now')) {
                let extractedString = this.extractStringAfterNow(this.AdditionalParameter['CEE_watermarkvalue']);
                let extractedArr = extractedString && extractedString.split("||");
                let textAdd = '';
                if (extractedArr) {
                    extractedArr.forEach(x => {
                        if (x.trim() == 'date') {
                            textAdd = textAdd + ' ' + this.getCurrentDateFormatted();
                        }
                        else if (x.trim() == 'timestamp') {
                            textAdd = textAdd + ' ' + Date.now();
                        }
                        else if (x.trim() == 'latlong') {
                            textAdd = textAdd.concat() + ' ' + this.latitude + ',' + this.longitude;
                        }
                        else {
                            textAdd = '';
                        }
                    });
                }
                let dynamicContentTime = extractedString ? this.replaceString(this.AdditionalParameter['CEE_watermarkvalue'], `now:$${extractedString}$`, textAdd) : this.AdditionalParameter['CEE_watermarkvalue'];
                let dynamicContent = this.replaceDynamicValue(dynamicContentTime, nowstring);
                requestBody.image_text = dynamicContent.replace(/\(\(dynamic\)\)/g, '');
                let image_text = dynamicContent.replace(/\(\(dynamic\)\)/g, '');
                requestBody.image_text = textAdd + ' ' + image_text;
            }
        }
        else {
            requestBody.image_text = this.AdditionalParameter['CEE_watermarkvalue'];
        }
        let finalRequestBody = {
            "api_request": JSON.stringify(requestBody)
        };
        const accessToken = this.returnAccessToken();
        let headers = new HttpHeaders({
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        });
        this.subscriptions.add(this.http.post(localStorage.getItem('WATERMARK_SERVICE_URL'), finalRequestBody, { headers }).subscribe({
            next: Jdata => {
                if (Jdata && Jdata.status && Jdata.status === 'ok') {
                    let data = Jdata.api_response && JSON.parse(Jdata.api_response);
                    this.waterMarkImage = 'data:image/jpeg;base64,' + data.watermarked_image_data;
                    let fileData = this.dataURLtoFile2(this.waterMarkImage, this.AdditionalParameter['imageName'] + ".jpeg");
                    this.sendDatatoAttachments(fileData);
                }
            },
            error: error => {
                console.error('There was an error!', error.message);
            }
        }));
    }
    replaceString(input, search, replaceValue) {
        return input.replace(search, replaceValue);
    }
    replaceDynamicValue(input, replaceValue) {
        const match = input.match(/%[^%]+%/);
        let finalValue = "";
        if (match) {
            finalValue = input.replace(match[0], replaceValue);
        }
        return finalValue;
    }
    getCurrentDateFormatted() {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
    extractStringAfterNow(input) {
        const regex = /now:\s*\$(.*?)\$/;
        const match = regex.exec(input);
        return match ? match[1] : null;
    }
    retakePicture() {
        this.showWebcam = !this.showWebcam;
        this.webcamImage = undefined;
        this.reTrigger = false;
    }
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl._imageAsDataUrl.split(','), mime = dataurl._mimeType, bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    dataURLtoFile2(imageBase64, filename) {
        var arr = imageBase64.split(','), mime = "image/jpeg", bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    barcodeScan() {
        this.barcodeShow = true;
    }
    onValueChanges(value) {
        this.updateFieldData(value, true);
    }
    cameraWasSwitched(deviceId) {
        this.videoOptionSet = /Android|iphone/i.test(navigator.userAgent) ? this.videoOptions2 : this.videoOptions1;
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    returnAccessToken() {
        const accessToken = `${this.getCookie('headerPayload')}.${this.getCookie('signature')}`;
        return accessToken;
    }
    getCookie(name) {
        const ca = document.cookie.split(';');
        const caLen = ca.length;
        const cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
    static ɵfac = function CeeCameraComponent_Factory(t) { return new (t || CeeCameraComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i12.FileUploadService), i0.ɵɵdirectiveInject(i13.NgxBarcodeScannerService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCameraComponent, selectors: [["app-cee-camera"]], viewQuery: function CeeCameraComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.video = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["noCameraExist", ""], ["class", "field-wrapper", "style", "margin-bottom: 20px;", 3, "id", 4, "ngIf"], [1, "field-wrapper", 2, "margin-bottom", "20px", 3, "id"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "margin-bottom:20px"], [3, "width", "height", "trigger", "allowCameraSwitch", "mirrorImage", "imageQuality", "captureImageData", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], ["class", "snapshot", 4, "ngIf"], ["class", "errorMsg", 4, "ngIf"], ["class", "errorMsgCamera", 4, "ngIf"], [1, "btn-group", "mt-4", 2, "margin-bottom", "20px"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", "id", "button", 3, "disabled", "click", 4, "ngIf"], [3, "imageCapture", "cameraSwitched", "initError", "width", "height", "trigger", "allowCameraSwitch", "mirrorImage", "imageQuality", "captureImageData", "switchCamera", "videoOptions"], [1, "snapshot"], ["alt", "image", 3, "src"], [1, "errorMsg"], [1, "errorMsgCamera"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", "id", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [2, "width", "500px", "height", "400px"], [3, "valueChange", "exception", "value", "codes", "errorThreshold"]], template: function CeeCameraComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCameraComponent_div_0_Template, 3, 3, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [WebcamModule, i14.WebcamComponent, NgxBarcodeScannerModule, i13.NgxBarcodeScannerComponent, CommonModule, i15.NgIf], styles: [".errorMsgCamera[_ngcontent-%COMP%], .errorMsg[_ngcontent-%COMP%]{text-align:center}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCameraComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-camera', imports: [WebcamModule, JsonPipe, NgxBarcodeScannerModule, CommonModule, forwardRef(() => CeeAttachmentsComponent)], standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\" style=\"margin-bottom: 20px;\">\r\n    <div *ngIf=\"!barcodeShow\">\r\n        <div *ngIf=\"isCameraExist; else noCameraExist\">\r\n            <div class=\"margin-bottom:20px\">\r\n                <webcam\r\n                [width]=\"500\"\r\n                [height]=\"400\"\r\n                [trigger]=\"triggerObservable\" \r\n                (imageCapture)=\"handleImage($event)\" \r\n                *ngIf=\"showWebcam\"\r\n                [allowCameraSwitch]=\"allowCameraSwitch\" \r\n                [mirrorImage]=\"mirrorImage\" \r\n                [imageQuality]=\"1\"\r\n                [captureImageData]=\"captureImageData\" \r\n                [switchCamera]=\"nextWebcamObservable\" \r\n                [videoOptions]=\"videoOptionSet\" \r\n                (cameraSwitched)=\"cameraWasSwitched($event)\"\r\n                (initError)=\"handleInitError($event)\"></webcam>\r\n            </div>\r\n            <div class=\"snapshot\" *ngIf=\"webcamImage && !showWebcam\">\r\n                <img [src]=\"waterMarkImage ? waterMarkImage : webcamImage.imageAsDataUrl\" alt=\"image\" />\r\n            </div>\r\n            <div class=\"errorMsg\" *ngIf=\"autoUpload == true && errorMsgBox == true\">Captured image will be automatically uploaded.</div>\r\n            <div *ngIf=\"errors.length > 0\" class=\"errorMsgCamera\">\r\n                <h6>{{this.AdditionalParameter.CEE_camera_error || \"camera device not available\"}} </h6>\r\n                <!-- <ul *ngFor=\"let err of errors\">\r\n                    <li>{{err | json}}</li>\r\n                </ul> -->\r\n            </div>\r\n            <div class=\"btn-group mt-4\" style=\"margin-bottom: 20px;\">\r\n                <button type=\"button\" *ngIf=\"!reTrigger\" class=\"btn btn-primary\" (click)=\"triggerSnapshot()\">{{this.AdditionalParameter.takepicture || \"Take Picture\"}}</button>\r\n                <button type=\"button\" *ngIf=\"reTrigger\" class=\"btn btn-primary\" (click)=\"retakePicture()\">{{this.AdditionalParameter.retakepicture || \"Retake Picture\"}}</button>\r\n                <button type=\"button\" *ngIf=\"AdditionalParameter.cameratoggle\" class=\"btn btn-primary\" [disabled]=\"!multipleWebcamsAvailable\" (click)=\"changeWebCam(true)\">Toggle Camera</button>\r\n                <button type=\"button\" *ngIf=\"AdditionalParameter.cameraswitch\" class=\"btn btn-primary\" (click)=\"onoffWebcam()\">Switch Camera</button>\r\n                <button type=\"button\" *ngIf=\"AdditionalParameter.orientation\"  class=\"btn btn-primary\"  [disabled]=\"!multipleWebcamsAvailable\" (click)=\"rotate()\" id=\"button\">Orientation</button>\r\n            </div>\r\n        </div>\r\n        <ng-template #noCameraExist>\r\n            camera device not available\r\n        </ng-template>\r\n    </div>\r\n    <div *ngIf=\"barcodeShow\">\r\n        <label>Camera Library - Barcode</label>\r\n        <div style=\"width: 500px; height: 400px;\">\r\n            <ngx-barcode-scanner\r\n            [(value)]=\"value\"\r\n            [codes]=\"['code_128', 'ean', 'upc', 'upc_e', 'ean_8']\"\r\n            [errorThreshold]=\"0.1\"\r\n            (exception)=\"onError($event)\"\r\n            (valueChange)=\"onValueChanges($event)\"\r\n            ></ngx-barcode-scanner>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".errorMsgCamera,.errorMsg{text-align:center}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }, { type: i12.FileUploadService }, { type: i13.NgxBarcodeScannerService }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], video: [{
            type: ViewChild,
            args: ['video', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCameraComponent, { className: "CeeCameraComponent", filePath: "lib\\field-components\\cee-camera\\cee-camera.component.ts", lineNumber: 56 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWNhbWVyYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtY2FtZXJhL2NlZS1jYW1lcmEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWNhbWVyYS9jZWUtY2FtZXJhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFxRCxTQUFTLEVBQWMsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pMLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVc3QyxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFjLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUErQixZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2xGLE9BQU8sRUFBQyx1QkFBdUIsRUFBMkIsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNkckUsa0NBYXNDO0lBQXRDLEFBREEsQUFSQSx3TkFBZ0IsMEJBQW1CLEtBQUMsK01BUWxCLGdDQUF5QixLQUFDLHFN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QkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSztZQUVpQyxLQUFLO2tCQUEzQyxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tGQVI1QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maWxlLXVwbG9hZC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7V2ViY2FtSW1hZ2UsIFdlYmNhbUluaXRFcnJvciwgV2ViY2FtTW9kdWxlLCBXZWJjYW1VdGlsfSBmcm9tICduZ3gtd2ViY2FtJztcclxuaW1wb3J0IHtOZ3hCYXJjb2RlU2Nhbm5lck1vZHVsZSwgTmd4QmFyY29kZVNjYW5uZXJTZXJ2aWNlfSBmcm9tIFwiQGVpc2JlcmctbGFicy9uZ3gtYmFyY29kZS1zY2FubmVyXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgSnNvblBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0NlZUF0dGFjaG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi4vY2VlLWF0dGFjaG1lbnRzL2NlZS1hdHRhY2htZW50cy5jb21wb25lbnQnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlRGF0YSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgaWNvbkltYWdlOiBzdHJpbmc7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJldmlldzogYm9vbGVhbjtcclxuICBjYW5Eb3dubG9hZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmlsZVBheWxvYWQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBmaWxlRGF0YTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlIHtcclxuICB1cGxvYWRlZDogYm9vbGVhbjtcclxuICBwcm9ncmVzcz86IG51bWJlcjtcclxuICB1SWQ6IHN0cmluZztcclxuICBhdHRhY2htZW50SWQ6IHN0cmluZztcclxuICBhdHRhY2htZW50UGF0aDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGZpbGU6IEZpbGU7XHJcbiAgY3VzdG9tOiBBcnJheTxhbnk+O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1jYW1lcmEnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1jYW1lcmEuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLWNhbWVyYS5jb21wb25lbnQuc2NzcycsICcuLi9maWVsZC1jb21tb24uc2NzcyddLFxyXG4gICAgaW1wb3J0czogWyBXZWJjYW1Nb2R1bGUsIEpzb25QaXBlLCBOZ3hCYXJjb2RlU2Nhbm5lck1vZHVsZSwgQ29tbW9uTW9kdWxlLCBmb3J3YXJkUmVmKCgpID0+IENlZUF0dGFjaG1lbnRzQ29tcG9uZW50KV0sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgc2NoZW1hczpbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVDYW1lcmFDb21wb25lbnQgZXh0ZW5kcyBCYXNlVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcbiAgICBcclxuICAgIEBWaWV3Q2hpbGQoJ3ZpZGVvJywgeyBzdGF0aWM6IGZhbHNlIH0pIHZpZGVvOiBFbGVtZW50UmVmO1xyXG4gICAgaXNDYW1lcmFFeGlzdCA9IHRydWU7XHJcbiAgICBzaG93V2ViY2FtID0gdHJ1ZTtcclxuICAgIGFsbG93Q2FtZXJhU3dpdGNoID0gdHJ1ZTtcclxuICAgIG11bHRpcGxlV2ViY2Ftc0F2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgZXJyb3JzOiBXZWJjYW1Jbml0RXJyb3JbXSA9IFtdO1xyXG4gICAgcmVUcmlnZ2VyID0gZmFsc2U7XHJcbiAgICBhbmdsZSA9IDA7XHJcbiAgICBkZXZpY2VJZDogc3RyaW5nO1xyXG4gICAgbWlycm9ySW1hZ2UgPSAnbmV2ZXInO1xyXG4gICAgY2FwdHVyZUltYWdlRGF0YSA9IHRydWU7XHJcbiAgICBBZGRpdGlvbmFsUGFyYW1ldGVyOiBhbnkgPSB7fTtcclxuICAgIHZpZGVvT3B0aW9uczE6IE1lZGlhVHJhY2tDb25zdHJhaW50cyA9IHtcclxuICAgICAgd2lkdGg6IHtpZGVhbDogNjAwfSxcclxuICAgICAgaGVpZ2h0OiB7aWRlYWw6IDQ4MH0sXHJcbiAgICAgIGZhY2luZ01vZGUgOiBcInVzZXJcIlxyXG4gICAgfTtcclxuICAgIHZpZGVvT3B0aW9uczI6IE1lZGlhVHJhY2tDb25zdHJhaW50cyA9IHtcclxuICAgICAgd2lkdGg6IHtpZGVhbDogMzIwfSxcclxuICAgICAgaGVpZ2h0OiB7aWRlYWw6IDI0MH0sXHJcbiAgICAgIGZhY2luZ01vZGU6IFwiZW52aXJvbm1lbnRcIlxyXG4gICAgfTtcclxuICAgIHZpZGVvT3B0aW9uU2V0IDogTWVkaWFUcmFja0NvbnN0cmFpbnRzID0gdGhpcy52aWRlb09wdGlvbnMxO1xyXG4gICAgd2ViY2FtSW1hZ2U6IFdlYmNhbUltYWdlIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHByaXZhdGUgbmV4dFdlYmNhbTogU3ViamVjdDxib29sZWFufHN0cmluZz4gPSBuZXcgU3ViamVjdDxib29sZWFufHN0cmluZz4oKTtcclxuICAgIGJhcmNvZGVTaG93ID0gZmFsc2U7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgaXNFcnJvciA9IGZhbHNlO1xyXG4gICAgcXVhZ2dhQ29uZmlnIDogYW55ID0ge307XHJcblxyXG4gICAgZmlsZXM6IEFycmF5PElGaWxlPiA9IFtdO1xyXG4gICAgcGF5TG9hZDogSUZpbGVQYXlsb2FkID0ge1xyXG4gICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICBmaWxlRGF0YToge31cclxuICAgIH07XHJcblxyXG4gICAgdmFyaWFibGVPYmogPSB7fTtcclxuICAgIGF1dG9VcGxvYWQgPSBmYWxzZTtcclxuICAgIGVycm9yTXNnQm94ID0gZmFsc2U7XHJcbiAgICB3YXRlck1hcmtJbWFnZSA9ICcnO1xyXG4gICAgbGF0aXR1ZGU7XHJcbiAgICBsb25naXR1ZGU7XHJcbiAgICBwcml2YXRlIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHRoaXMuc2hvdygpO1xyXG4gICAgcHJpdmF0ZSB3aW5kb3dMb2FkSGFuZGxlciA9ICgpID0+IHRoaXMuc2hvdygpO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gICAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgZmlsZVVwbG9hZFNlcnZpY2U6IEZpbGVVcGxvYWRTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBOZ3hCYXJjb2RlU2Nhbm5lclNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsIHNoYXJlZEV2ZW50c1NlcnZpY2UsIGludGVybmFsQ0VFRW1pdHRlciwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyLCBmaWxlVXBsb2FkU2VydmljZSk7XHJcbiAgICAgICAgc2NyZWVuLm9yaWVudGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLndpbmRvd0xvYWRIYW5kbGVyKTtcclxuICAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgICAgIHRoaXMuYXV0b1VwbG9hZCA9ICAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydBdXRvVXBsb2FkJ10gPT09IFwidHJ1ZVwiKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICBzY3JlZW4ub3JpZW50YXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLndpbmRvd0xvYWRIYW5kbGVyKTtcclxuICAgICAgaWYgKHRoaXMudHJpZ2dlcikge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm5leHRXZWJjYW0pIHtcclxuICAgICAgICAgIHRoaXMubmV4dFdlYmNhbS5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLndlYmNhbUltYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXJrSW1hZ2UgPSAnJztcclxuICAgICAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9iaiA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYXIgbG9jYXRpb24gZGF0YVxyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVzZXQgY29uZmlndXJhdGlvbiBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyID0ge307XHJcbiAgICAgICAgdGhpcy5xdWFnZ2FDb25maWcgPSB7fTtcclxuICAgICAgICB0aGlzLnBheUxvYWQgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgZmlsZURhdGE6IHt9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBSZXNldCB2aWRlbyBvcHRpb25zXHJcbiAgICAgICAgdGhpcy52aWRlb09wdGlvbnMxID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZpZGVvT3B0aW9uczIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlkZW9PcHRpb25TZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICAgICAgdGhpcy5vblN0b3BCdXR0b25QcmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RvcEJ1dHRvblByZXNzKCkge1xyXG4gICAgICB0aGlzLnNlcnZpY2Uuc3RvcCgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uKCkge1xyXG4gICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uICYmICF0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgICAgICAgcG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dlb2xvY2F0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuZ2V0Q3VycmVudExvY2F0aW9uKCk7XHJcbiAgICAgIGlmKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltwYXJhbS5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLnNjYW5tb2RlID09PSBcImJhcmNvZGVcIil7XHJcbiAgICAgICAgdGhpcy5iYXJjb2RlU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0QnV0dG9uUHJlc3MoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJhcmNvZGVTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgV2ViY2FtVXRpbC5nZXRBdmFpbGFibGVWaWRlb0lucHV0cygpXHJcbiAgICAgICAgLnRoZW4oKG1lZGlhRGV2aWNlczogTWVkaWFEZXZpY2VJbmZvW10pID0+IHtcclxuICAgICAgICAgIHRoaXMubXVsdGlwbGVXZWJjYW1zQXZhaWxhYmxlID0gbWVkaWFEZXZpY2VzICYmIG1lZGlhRGV2aWNlcy5sZW5ndGggPiAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0RGF0YSgpIHsgfVxyXG5cclxuICAgIG9uU3RhcnRCdXR0b25QcmVzcygpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLnN0YXJ0KHRoaXMucXVhZ2dhQ29uZmlnLCAwLjEpXHJcbiAgICB9XHJcblxyXG4gICAgb25TZXNzaW9uRGF0YVVwZGF0ZWQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBvbiBjbGljayBvbiBzd2l0Y2hcclxuICAgICAgICAvLyBzZXR0aW5nIHRoZSB2YWx1ZSBvZiB0aGUgc3dpdGNoIGFuZCBwYXNzaW5nIGl0IGFzIHBheWxvYWQgc28gdGhhdFxyXG4gICAgICAgIC8vIGl0IGNhbiBiZSBzZXQgYW5kIGVtaXR0ZWQgZnJvbSB0aGUgZXZlbnQgbGlzdFxyXG4gICAgICAgIC8vIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DbGljaycsIHt9LCB0cnVlLCB7IHVuaXF1ZUlkOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHZhbHVlOiBldmVudCA/IHRoaXMudmFsdWUyIDogdGhpcy52YWx1ZTEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoY2hhbmdlcy5maWVsZERhdGEgJiYgY2hhbmdlcy5yb290RGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhLmN1cnJlbnRWYWx1ZS5sYW5nQ2hhbmdlZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvZ2dsZUxhbmd1YWdlKGNoYW5nZXMuZmllbGREYXRhLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkVycm9yKGVycm9yIDphbnkpIHtcclxuICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZ2V0T3Bwb3NpdGVPcmllbnRhdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHNjcmVlbi5vcmllbnRhdGlvbjtcclxuICAgICAgICByZXR1cm4gdHlwZS5zdGFydHNXaXRoKFwicG9ydHJhaXRcIikgPyBcImxhbmRzY2FwZVwiIDogXCJwb3J0cmFpdFwiO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgYXN5bmMgcm90YXRlKCkge1xyXG4gICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgLy8gICBhd2FpdCB0aGlzLmZ1bGxTY3JlZW5DaGVjaygpO1xyXG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnVubG9jaygpO1xyXG4gICAgICAgIGNvbnN0IG5ld09yaWVudGF0aW9uID0gdGhpcy5nZXRPcHBvc2l0ZU9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgLy8gYXdhaXQgc2NyZWVuLm9yaWVudGF0aW9uLmxvY2sobmV3T3JpZW50YXRpb24pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgICBmdWxsU2NyZWVuQ2hlY2soKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgdW5sb2NrKCl7XHJcbiAgICAgICAgc2NyZWVuLm9yaWVudGF0aW9uLnVubG9jaygpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgc2hvdygpIHtcclxuICAgICAgICBjb25zdCB7IHR5cGUsIGFuZ2xlIH0gPSBzY3JlZW4ub3JpZW50YXRpb247XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICB0cmlnZ2VyU25hcHNob3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLm5leHQoKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGhhbmRsZUluaXRFcnJvcihlcnJvcjogV2ViY2FtSW5pdEVycm9yKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBvbm9mZldlYmNhbSgpe1xyXG4gICAgICAgIHRoaXMuc2hvd1dlYmNhbSA9ICF0aGlzLnNob3dXZWJjYW07XHJcbiAgICAgICAgdGhpcy53ZWJjYW1JbWFnZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnJlVHJpZ2dlciA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgY2hhbmdlV2ViQ2FtKGRpcmVjdGlvbk9yRGV2aWNlSWQ6IGJvb2xlYW58c3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWRlb09wdGlvblNldCA9IC9BbmRyb2lkfGlwaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyB0aGlzLnZpZGVvT3B0aW9uczIgOiB0aGlzLnZpZGVvT3B0aW9uczE7XHJcbiAgICAgICAgdGhpcy5uZXh0V2ViY2FtLm5leHQoZGlyZWN0aW9uT3JEZXZpY2VJZCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBoYW5kbGVJbWFnZSh3ZWJjYW1JbWFnZTogV2ViY2FtSW1hZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndlYmNhbUltYWdlID0gd2ViY2FtSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zaG93V2ViY2FtID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZVRyaWdnZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JNc2dCb3ggPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3dhdGVybWFyayddID09ICd0cnVlJyl7XHJcbiAgICAgICAgICB0aGlzLmltYWdlV2F0ZXJtYXJraW5nKHRoaXMud2ViY2FtSW1hZ2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBmaWxlRGF0YSA9IHRoaXMuZGF0YVVSTHRvRmlsZSh0aGlzLndlYmNhbUltYWdlLCB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2ltYWdlTmFtZSddICsgXCIuanBlZ1wiICk7XHJcbiAgICAgICAgICB0aGlzLnNlbmREYXRhdG9BdHRhY2htZW50cyhmaWxlRGF0YSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbmREYXRhdG9BdHRhY2htZW50cyhmaWxlRGF0YSl7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkRmlsZSA9IHtcclxuICAgICAgICAgIHVwbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgIGZpbGUgOiBmaWxlRGF0YSxcclxuICAgICAgICAgIGF0dGFjaG1lbnRJZCA6ICcnLFxyXG4gICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgIGF0dGFjaG1lbnRQYXRoIDogJycsXHJcbiAgICAgICAgICB1SWQgOiBmaWxlRGF0YS5sYXN0TW9kaWZpZWQsXHJcbiAgICAgICAgICBjdXN0b206IFtdLFxyXG4gICAgICAgICAgYXV0b1VwbG9hZCA6IHRoaXMuYXV0b1VwbG9hZFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb3REYXRhW3RoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0oc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1hZ2VXYXRlcm1hcmtpbmcod2ViSW1hZ2Upe1xyXG4gICAgICAgIGxldCBpbWFnZUJhc2U2NCA9IHdlYkltYWdlLmltYWdlQXNEYXRhVXJsLnNwbGl0KFwiLFwiKVsxXTtcclxuICAgICAgICBsZXQgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgICBpbWFnZV90ZXh0OiAnaW5kaWEnLFxyXG4gICAgICAgICAgb3V0cHV0X2ltYWdlOiBcImJlYWNoX3RpbWVzdGFtcF9ib3R0b20xODUxLmpwZ1wiLFxyXG4gICAgICAgICAgb25faW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgICAvLyBpbWFnZV9wb3M6IFwiMjAwLDIwMFwiLFxyXG4gICAgICAgICAgLy8gdGV4dF9wb3M6IFwiOTAwLDE2MDBcIixcclxuICAgICAgICAgIGZpbGVfbmFtZTogXCJ3YXRlcmZhbGwuanBnXCIsXHJcbiAgICAgICAgICBmaWxlX2RhdGE6aW1hZ2VCYXNlNjRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxdWVzdEJvZHkub25faW1hZ2UgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV93YXRlcm1hcmtvbmltYWdlJ10gPT0gJ3RydWUnID8gXCJUcnVlXCIgOiBcIkZhbHNlXCI7XHJcbiAgICAgICAgLy9yZXF1ZXN0Qm9keS5pbWFnZV9wb3MgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV93YXRlcm1hcmtwb3NpdGlvbiddID09ICd0b3AnID8gXCIyMDAsMjAwXCIgOiBcIjQwMCw0MDBcIjtcclxuICAgICAgICAvL3JlcXVlc3RCb2R5LnRleHRfcG9zID0gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfd2F0ZXJtYXJrcG9zaXRpb24nXSA9PSAndG9wJyA/IFwiOTAwLDE2MDBcIiA6IFwiNTAwLDEwMDBcIjtcclxuICAgICAgICByZXF1ZXN0Qm9keS5vdXRwdXRfaW1hZ2UgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2ltYWdlTmFtZSddICsgXCIuanBlZ1wiO1xyXG4gICAgICAgIGlmKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3dhdGVybWFya3ZhbHVlJ10uaW5jbHVkZXMoJygoZHluYW1pYykpJykpe1xyXG4gICAgICAgICAgbGV0IG5vd3N0cmluZyA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEpLmFkZGl0aW9uYWxfcGFyYW1ldGVyc19jb25maWcgPyB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhKS5hZGRpdGlvbmFsX3BhcmFtZXRlcnNfY29uZmlnIDogXCJcIjtcclxuICAgICAgICAgIGlmKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3dhdGVybWFya3ZhbHVlJ10uaW5jbHVkZXMoJ25vdycpKXtcclxuICAgICAgICAgICAgbGV0IGV4dHJhY3RlZFN0cmluZyA9IHRoaXMuZXh0cmFjdFN0cmluZ0FmdGVyTm93KHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3dhdGVybWFya3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICBsZXQgZXh0cmFjdGVkQXJyID0gZXh0cmFjdGVkU3RyaW5nICYmIGV4dHJhY3RlZFN0cmluZy5zcGxpdChcInx8XCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dEFkZCA9ICcnO1xyXG4gICAgICAgICAgICBpZihleHRyYWN0ZWRBcnIpIHtcclxuICAgICAgICAgICAgICBleHRyYWN0ZWRBcnIuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHgudHJpbSgpID09ICdkYXRlJyl7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBZGQgPSB0ZXh0QWRkKycgJyt0aGlzLmdldEN1cnJlbnREYXRlRm9ybWF0dGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih4LnRyaW0oKSA9PSAndGltZXN0YW1wJyl7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBZGQgPSB0ZXh0QWRkKycgJytEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoeC50cmltKCkgPT0gJ2xhdGxvbmcnKXtcclxuICAgICAgICAgICAgICAgICAgdGV4dEFkZCA9IHRleHRBZGQuY29uY2F0KCkrJyAnK3RoaXMubGF0aXR1ZGUrJywnK3RoaXMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dEFkZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZHluYW1pY0NvbnRlbnRUaW1lID0gZXh0cmFjdGVkU3RyaW5nID8gdGhpcy5yZXBsYWNlU3RyaW5nKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3dhdGVybWFya3ZhbHVlJ10sIGBub3c6JCR7ZXh0cmFjdGVkU3RyaW5nfSRgLHRleHRBZGQpIDogdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfd2F0ZXJtYXJrdmFsdWUnXTtcclxuICAgICAgICAgICAgbGV0IGR5bmFtaWNDb250ZW50PSB0aGlzLnJlcGxhY2VEeW5hbWljVmFsdWUoZHluYW1pY0NvbnRlbnRUaW1lLCBub3dzdHJpbmcpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Qm9keS5pbWFnZV90ZXh0ID0gZHluYW1pY0NvbnRlbnQucmVwbGFjZSgvXFwoXFwoZHluYW1pY1xcKVxcKS9nLCAnJyk7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZV90ZXh0ID0gZHluYW1pY0NvbnRlbnQucmVwbGFjZSgvXFwoXFwoZHluYW1pY1xcKVxcKS9nLCAnJyk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5LmltYWdlX3RleHQgPSB0ZXh0QWRkICsgJyAnICsgaW1hZ2VfdGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVxdWVzdEJvZHkuaW1hZ2VfdGV4dCA9IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3dhdGVybWFya3ZhbHVlJ11cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbmFsUmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgICBcImFwaV9yZXF1ZXN0XCI6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHRoaXMucmV0dXJuQWNjZXNzVG9rZW4oKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArICBhY2Nlc3NUb2tlbixcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9KTtcclxuICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcclxuICAgICAgICB0aGlzLmh0dHAucG9zdDxhbnk+KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXQVRFUk1BUktfU0VSVklDRV9VUkwnKSwgZmluYWxSZXF1ZXN0Qm9keSwge2hlYWRlcnN9KS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogSmRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZihKZGF0YSAmJiBKZGF0YS5zdGF0dXMgJiYgSmRhdGEuc3RhdHVzID09PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKZGF0YS5hcGlfcmVzcG9uc2UgJiYgSlNPTi5wYXJzZShKZGF0YS5hcGlfcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMud2F0ZXJNYXJrSW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgZGF0YS53YXRlcm1hcmtlZF9pbWFnZV9kYXRhO1xyXG4gICAgICAgICAgICAgIGxldCBmaWxlRGF0YSA9IHRoaXMuZGF0YVVSTHRvRmlsZTIodGhpcy53YXRlck1hcmtJbWFnZSwgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydpbWFnZU5hbWUnXSArIFwiLmpwZWdcIiApO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VuZERhdGF0b0F0dGFjaG1lbnRzKGZpbGVEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIScsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVwbGFjZVN0cmluZyhpbnB1dDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgcmVwbGFjZVZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZVZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVwbGFjZUR5bmFtaWNWYWx1ZShpbnB1dDogc3RyaW5nLCByZXBsYWNlVmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBpbnB1dC5tYXRjaCgvJVteJV0rJS8pO1xyXG4gICAgICAgIGxldCBmaW5hbFZhbHVlID0gXCJcIjtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgIGZpbmFsVmFsdWUgPSBpbnB1dC5yZXBsYWNlKG1hdGNoWzBdLCByZXBsYWNlVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmluYWxWYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2V0Q3VycmVudERhdGVGb3JtYXR0ZWQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBjb25zdCBtb250aCA9IChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgICAgZXh0cmFjdFN0cmluZ0FmdGVyTm93KGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IC9ub3c6XFxzKlxcJCguKj8pXFwkLztcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0YWtlUGljdHVyZSgpe1xyXG4gICAgICAgIHRoaXMuc2hvd1dlYmNhbSA9ICF0aGlzLnNob3dXZWJjYW07XHJcbiAgICAgICAgdGhpcy53ZWJjYW1JbWFnZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnJlVHJpZ2dlciA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhVVJMdG9GaWxlKGRhdGF1cmwsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IGRhdGF1cmwuX2ltYWdlQXNEYXRhVXJsLnNwbGl0KCcsJyksIG1pbWUgPSBkYXRhdXJsLl9taW1lVHlwZSwgYnN0ciA9IGF0b2IoYXJyWzFdKSwgbiA9IGJzdHIubGVuZ3RoLCB1OGFyciA9IG5ldyBVaW50OEFycmF5KG4pO1xyXG4gICAgICAgIHdoaWxlKG4tLSl7XHJcbiAgICAgICAgdThhcnJbbl0gPSBic3RyLmNoYXJDb2RlQXQobik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRmlsZShbdThhcnJdLCBmaWxlbmFtZSwge3R5cGU6bWltZX0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhVVJMdG9GaWxlMihpbWFnZUJhc2U2NCwgZmlsZW5hbWUpIHtcclxuICAgICAgICB2YXIgYXJyID0gaW1hZ2VCYXNlNjQuc3BsaXQoJywnKSwgbWltZSA9IFwiaW1hZ2UvanBlZ1wiLCBic3RyID0gYXRvYihhcnJbMV0pLCBuID0gYnN0ci5sZW5ndGgsIHU4YXJyID0gbmV3IFVpbnQ4QXJyYXkobik7XHJcbiAgICAgICAgd2hpbGUobi0tKXtcclxuICAgICAgICB1OGFycltuXSA9IGJzdHIuY2hhckNvZGVBdChuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaWxlKFt1OGFycl0sIGZpbGVuYW1lLCB7dHlwZTptaW1lfSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBiYXJjb2RlU2Nhbigpe1xyXG4gICAgICAgIHRoaXMuYmFyY29kZVNob3cgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvblZhbHVlQ2hhbmdlcyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodmFsdWUsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgY2FtZXJhV2FzU3dpdGNoZWQoZGV2aWNlSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlkZW9PcHRpb25TZXQgPSAvQW5kcm9pZHxpcGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gdGhpcy52aWRlb09wdGlvbnMyIDogdGhpcy52aWRlb09wdGlvbnMxO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSWQgPSBkZXZpY2VJZDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGdldCB0cmlnZ2VyT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZ2V0IG5leHRXZWJjYW1PYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbnxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXh0V2ViY2FtLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIHJldHVybkFjY2Vzc1Rva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYCR7dGhpcy5nZXRDb29raWUoJ2hlYWRlclBheWxvYWQnKX0uJHt0aGlzLmdldENvb2tpZSgnc2lnbmF0dXJlJyl9YFxyXG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGNvbnN0IGNhTGVuOiBudW1iZXIgPSBjYS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgY29va2llTmFtZSA9IGAke25hbWV9PWA7XHJcbiAgICAgICAgbGV0IGM6IHN0cmluZztcclxuICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xyXG4gICAgICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csICcnKTtcclxuICAgICAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIiAqbmdJZj1cImlzVmlzaWJsZVwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDtcIj5cclxuICAgIDxkaXYgKm5nSWY9XCIhYmFyY29kZVNob3dcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNDYW1lcmFFeGlzdDsgZWxzZSBub0NhbWVyYUV4aXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnaW4tYm90dG9tOjIwcHhcIj5cclxuICAgICAgICAgICAgICAgIDx3ZWJjYW1cclxuICAgICAgICAgICAgICAgIFt3aWR0aF09XCI1MDBcIlxyXG4gICAgICAgICAgICAgICAgW2hlaWdodF09XCI0MDBcIlxyXG4gICAgICAgICAgICAgICAgW3RyaWdnZXJdPVwidHJpZ2dlck9ic2VydmFibGVcIiBcclxuICAgICAgICAgICAgICAgIChpbWFnZUNhcHR1cmUpPVwiaGFuZGxlSW1hZ2UoJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93V2ViY2FtXCJcclxuICAgICAgICAgICAgICAgIFthbGxvd0NhbWVyYVN3aXRjaF09XCJhbGxvd0NhbWVyYVN3aXRjaFwiIFxyXG4gICAgICAgICAgICAgICAgW21pcnJvckltYWdlXT1cIm1pcnJvckltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICBbaW1hZ2VRdWFsaXR5XT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgW2NhcHR1cmVJbWFnZURhdGFdPVwiY2FwdHVyZUltYWdlRGF0YVwiIFxyXG4gICAgICAgICAgICAgICAgW3N3aXRjaENhbWVyYV09XCJuZXh0V2ViY2FtT2JzZXJ2YWJsZVwiIFxyXG4gICAgICAgICAgICAgICAgW3ZpZGVvT3B0aW9uc109XCJ2aWRlb09wdGlvblNldFwiIFxyXG4gICAgICAgICAgICAgICAgKGNhbWVyYVN3aXRjaGVkKT1cImNhbWVyYVdhc1N3aXRjaGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKGluaXRFcnJvcik9XCJoYW5kbGVJbml0RXJyb3IoJGV2ZW50KVwiPjwvd2ViY2FtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNuYXBzaG90XCIgKm5nSWY9XCJ3ZWJjYW1JbWFnZSAmJiAhc2hvd1dlYmNhbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cIndhdGVyTWFya0ltYWdlID8gd2F0ZXJNYXJrSW1hZ2UgOiB3ZWJjYW1JbWFnZS5pbWFnZUFzRGF0YVVybFwiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvck1zZ1wiICpuZ0lmPVwiYXV0b1VwbG9hZCA9PSB0cnVlICYmIGVycm9yTXNnQm94ID09IHRydWVcIj5DYXB0dXJlZCBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdXBsb2FkZWQuPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJlcnJvcnMubGVuZ3RoID4gMFwiIGNsYXNzPVwiZXJyb3JNc2dDYW1lcmFcIj5cclxuICAgICAgICAgICAgICAgIDxoNj57e3RoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5DRUVfY2FtZXJhX2Vycm9yIHx8IFwiY2FtZXJhIGRldmljZSBub3QgYXZhaWxhYmxlXCJ9fSA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8dWwgKm5nRm9yPVwibGV0IGVyciBvZiBlcnJvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e3tlcnIgfCBqc29ufX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG10LTRcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cIiFyZVRyaWdnZXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJ0cmlnZ2VyU25hcHNob3QoKVwiPnt7dGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLnRha2VwaWN0dXJlIHx8IFwiVGFrZSBQaWN0dXJlXCJ9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJyZVRyaWdnZXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJyZXRha2VQaWN0dXJlKClcIj57e3RoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5yZXRha2VwaWN0dXJlIHx8IFwiUmV0YWtlIFBpY3R1cmVcIn19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cIkFkZGl0aW9uYWxQYXJhbWV0ZXIuY2FtZXJhdG9nZ2xlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW11bHRpcGxlV2ViY2Ftc0F2YWlsYWJsZVwiIChjbGljayk9XCJjaGFuZ2VXZWJDYW0odHJ1ZSlcIj5Ub2dnbGUgQ2FtZXJhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cIkFkZGl0aW9uYWxQYXJhbWV0ZXIuY2FtZXJhc3dpdGNoXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25vZmZXZWJjYW0oKVwiPlN3aXRjaCBDYW1lcmE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiQWRkaXRpb25hbFBhcmFtZXRlci5vcmllbnRhdGlvblwiICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiICBbZGlzYWJsZWRdPVwiIW11bHRpcGxlV2ViY2Ftc0F2YWlsYWJsZVwiIChjbGljayk9XCJyb3RhdGUoKVwiIGlkPVwiYnV0dG9uXCI+T3JpZW50YXRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNub0NhbWVyYUV4aXN0PlxyXG4gICAgICAgICAgICBjYW1lcmEgZGV2aWNlIG5vdCBhdmFpbGFibGVcclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiYmFyY29kZVNob3dcIj5cclxuICAgICAgICA8bGFiZWw+Q2FtZXJhIExpYnJhcnkgLSBCYXJjb2RlPC9sYWJlbD5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDQwMHB4O1wiPlxyXG4gICAgICAgICAgICA8bmd4LWJhcmNvZGUtc2Nhbm5lclxyXG4gICAgICAgICAgICBbKHZhbHVlKV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIFtjb2Rlc109XCJbJ2NvZGVfMTI4JywgJ2VhbicsICd1cGMnLCAndXBjX2UnLCAnZWFuXzgnXVwiXHJcbiAgICAgICAgICAgIFtlcnJvclRocmVzaG9sZF09XCIwLjFcIlxyXG4gICAgICAgICAgICAoZXhjZXB0aW9uKT1cIm9uRXJyb3IoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvblZhbHVlQ2hhbmdlcygkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvbmd4LWJhcmNvZGUtc2Nhbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19