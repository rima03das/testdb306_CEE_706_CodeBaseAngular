import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CommonModule, NgClass } from '@angular/common';
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
import * as i10 from "ngx-image-zoom";
import * as i11 from "@angular/common";
function CeeCarouselComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("mouseover", function CeeCarouselComponent_div_1_div_1_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = true); })("mouseout", function CeeCarouselComponent_div_1_div_1_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = false); });
    i0.ɵɵelementStart(1, "img", 12);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_1_div_1_Template_img_click_1_listener() { const i_r4 = i0.ɵɵrestoreView(_r2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.currentSlide(i_r4)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("alt", image_r5.text);
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r4 ? "thumbnail thumbnail_active" : "thumbnail")("src", image_r5.thumbnail, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("aria-label", image_r5.text);
} }
function CeeCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CeeCarouselComponent_div_1_div_1_Template, 2, 4, "div", 8);
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵelementStart(3, "a", 9);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_1_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(-1)); });
    i0.ɵɵtext(4, "\u276E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 10);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(1)); });
    i0.ɵɵtext(6, "\u276F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.images);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "left" ? "prev-horizontal" : "prev");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "left" ? "next-horizontal" : "next");
} }
function CeeCarouselComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = i0.ɵɵnextContext().index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r6 ? "numbertext numbertext_active" : "numbertext");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r2.countText, " ", i_r6, " / ", ctx_r2.images.length, "");
} }
function CeeCarouselComponent_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 12);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_3_img_2_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r7); const image_r8 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openPictureInModal(image_r8)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r8 = ctx_r8.$implicit;
    const i_r6 = ctx_r8.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("alt", image_r8.text);
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r6 ? "image image_active" : "image")("src", image_r8.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("aria-label", image_r8.text);
} }
function CeeCarouselComponent_div_3_lib_ngx_image_zoom_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-ngx-image-zoom", 18);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r8 = ctx_r8.$implicit;
    const i_r6 = ctx_r8.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("thumbImage", image_r8.image)("fullImage", image_r8.highres)("magnification", 2)("enableScrollZoom", true)("zoomMode", ctx_r2.zoomInEventType)("enableLens", false)("ngClass", ctx_r2.slideIndex == i_r6 ? "image image_active" : "image")("altText", image_r8.text)("titleText", image_r8.text)("circularLens", true);
} }
function CeeCarouselComponent_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r8 = ctx_r8.$implicit;
    const i_r6 = ctx_r8.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r6 ? "text text_active" : "text")("innerHTML", image_r8.text, i0.ɵɵsanitizeHtml);
} }
function CeeCarouselComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CeeCarouselComponent_div_3_div_1_Template, 2, 4, "div", 14)(2, CeeCarouselComponent_div_3_img_2_Template, 1, 4, "img", 15)(3, CeeCarouselComponent_div_3_lib_ngx_image_zoom_3_Template, 1, 10, "lib-ngx-image-zoom", 16)(4, CeeCarouselComponent_div_3_ng_container_4_Template, 2, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showNumbers);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isZoomInModal);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isZoomInModal);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", image_r8.text);
} }
function CeeCarouselComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 20);
    i0.ɵɵlistener("click", function CeeCarouselComponent_ng_container_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(-1)); });
    i0.ɵɵtext(2, "\u276E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 21);
    i0.ɵɵlistener("click", function CeeCarouselComponent_ng_container_4_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(1)); });
    i0.ɵɵtext(4, "\u276F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function CeeCarouselComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("mouseover", function CeeCarouselComponent_div_5_div_1_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = true); })("mouseout", function CeeCarouselComponent_div_5_div_1_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = false); });
    i0.ɵɵelementStart(1, "img", 12);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_5_div_1_Template_img_click_1_listener() { const i_r13 = i0.ɵɵrestoreView(_r12).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.currentSlide(i_r13)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const image_r14 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("alt", image_r14.text);
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r13 ? "thumbnail thumbnail_active" : "thumbnail")("src", image_r14.thumbnail, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("aria-label", image_r14.text);
} }
function CeeCarouselComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CeeCarouselComponent_div_5_div_1_Template, 2, 4, "div", 8);
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵelementStart(3, "a", 9);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_5_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(-1)); });
    i0.ɵɵtext(4, "\u276E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 10);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_5_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(1)); });
    i0.ɵɵtext(6, "\u276F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.images);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "right" ? "prev-horizontal" : "prev");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "right" ? "next-horizontal" : "next");
} }
function CeeCarouselComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 22);
    i0.ɵɵlistener("click", function CeeCarouselComponent_ng_container_8_Template_span_click_1_listener() { const i_r16 = i0.ɵɵrestoreView(_r15).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.currentSlide(i_r16)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r16 ? "dot active" : "dot");
    i0.ɵɵattribute("aria-label", "Select Image " + i_r16);
} }
export class CeeCarouselComponent extends BaseView {
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
    primaryKeyIndex;
    keepState = false;
    rowData;
    images = [];
    slideIndex = 0;
    showNumbers = false;
    showNextPrevious = false;
    countText = '';
    autoCyclingInterval;
    autoCyclingPause = false;
    thumbnailCarouselPosition = "buttom";
    zoomInEventType = "onhover";
    isZoomInModal = false;
    flatUnflat;
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
    onViewDataInit() {
        // set images when the data is loaded.
        if (this.fieldData.field_style.field_assets && this.fieldData.field_style.field_assets.length > 0 && this.fieldData.possible_values) {
            this.fieldData.field_style.field_assets.map((data, key) => {
                this.images.push({
                    image: data.path,
                    thumbnail: data.thumbnail,
                    highres: data.highres,
                    text: this.fieldData.possible_values[key] ? this.fieldData.possible_values[key] : ''
                });
            });
        }
        this.thumbnailCarouselPosition = this.additionalParameter['CEE_Carousel_Position'] && this.additionalParameter['CEE_Carousel_Position'] != "" ? this.additionalParameter['CEE_Carousel_Position'].toLowerCase() : 'buttom';
        this.zoomInEventType = this.additionalParameter['CEE_ZoomInEventType'] && this.additionalParameter['CEE_ZoomInEventType'] != "" && this.additionalParameter['CEE_ZoomInEventType'].toLowerCase() == 'onhover' ? "hover" : 'click';
        this.isZoomInModal = this.additionalParameter['CEE_ZoomInModal'] && this.additionalParameter['CEE_ZoomInModal'] != "" && this.additionalParameter['CEE_ZoomInModal'].toLowerCase() == "true" ? true : false;
        if (this.additionalParameter['AutoCycling'] && this.additionalParameter['AutoCycling'] !== 'false' && parseInt(this.additionalParameter['AutoCycling'])) {
            this.autoCycling(parseInt(this.additionalParameter['AutoCycling']) * 1000);
        }
    }
    onAPICallback(data) {
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiData !== null) {
            if (Array.isArray(apiData)) {
                this.images = [];
                for (const data of apiData) {
                    if (typeof (data) == 'object') {
                        this.images.push({
                            image: data.path,
                            thumbnail: data.thumbnail,
                            highres: data.highres,
                        });
                    }
                    else {
                        this.images.push({
                            image: data
                        });
                    }
                }
            }
        }
    }
    concatData(data) {
        // throw new Error("Method not implemented.");
    }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    ngOnDestroy() {
        // throw new Error("Method not implemented.");
        if (this.autoCyclingInterval) {
            clearInterval(this.autoCyclingInterval);
            this.autoCyclingInterval = null;
        }
        // Clear images array and related data
        this.clearImages();
        // Clear utility object references
        this.flatUnflat = null;
        // Reset component state
        this.slideIndex = 0;
        this.showNumbers = false;
        this.showNextPrevious = false;
        this.countText = '';
        this.autoCyclingPause = false;
        this.thumbnailCarouselPosition = null;
        this.zoomInEventType = null;
        this.isZoomInModal = false;
        // Clear input properties
        this.primaryKeyIndex = null;
    }
    clearImages() {
        if (this.images && this.images.length > 0) {
            // Clear the array completely
            this.images.length = 0;
            this.images = [];
            // Reset slide index
            this.slideIndex = 0;
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    // Next/previous controls
    plusSlides(n) {
        if (this.slideIndex + n === this.images.length) {
            this.slideIndex = 0;
        }
        else if (this.slideIndex + n < 0) {
            this.slideIndex = this.images.length + n;
        }
        else {
            this.slideIndex += n;
        }
    }
    // Thumbnail image controls
    currentSlide(n) {
        this.slideIndex = n;
    }
    autoCycling(t = 1000) {
        const _this = this;
        this.autoCyclingInterval = setInterval(function () {
            if (!_this.autoCyclingPause)
                _this.plusSlides(1);
        }, t);
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    openPictureInModal(image) {
        let data = { 'image': image, 'zoomInEventType': this.zoomInEventType, 'zoomImg': true };
        this.wfeEventListHandler.openAlert(data);
    }
    static ɵfac = function CeeCarouselComponent_Factory(t) { return new (t || CeeCarouselComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCarouselComponent, selectors: [["app-cee-carousel"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 9, vars: 6, consts: [[1, "slider-main-container", 3, "ngClass"], ["class", "thumbnail-slideshow-container", 4, "ngIf"], [1, "slideshow-container", 3, "mouseover", "mouseout"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "dot-container", 3, "mouseover", "mouseout"], [4, "ngFor", "ngForOf"], [1, "thumbnail-slideshow-container"], ["class", "mySlides", 3, "mouseover", "mouseout", 4, "ngFor", "ngForOf"], ["aria-level", "prev image", 3, "click", "ngClass"], ["aria-level", "next image", 3, "click", "ngClass"], [1, "mySlides", 3, "mouseover", "mouseout"], [3, "click", "alt", "ngClass", "src"], [1, "mySlides"], [3, "ngClass", 4, "ngIf"], [3, "alt", "ngClass", "src", "click", 4, "ngIf"], [3, "thumbImage", "fullImage", "magnification", "enableScrollZoom", "zoomMode", "enableLens", "ngClass", "altText", "titleText", "circularLens", 4, "ngIf"], [3, "ngClass"], [3, "thumbImage", "fullImage", "magnification", "enableScrollZoom", "zoomMode", "enableLens", "ngClass", "altText", "titleText", "circularLens"], [3, "ngClass", "innerHTML"], ["aria-level", "prev image", 1, "prev", 3, "click"], ["aria-level", "next image", 1, "next", 3, "click"], [3, "click", "ngClass"]], template: function CeeCarouselComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CeeCarouselComponent_div_1_Template, 7, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵlistener("mouseover", function CeeCarouselComponent_Template_div_mouseover_2_listener() { return ctx.autoCyclingPause = true; })("mouseout", function CeeCarouselComponent_Template_div_mouseout_2_listener() { return ctx.autoCyclingPause = false; });
            i0.ɵɵtemplate(3, CeeCarouselComponent_div_3_Template, 5, 4, "div", 3)(4, CeeCarouselComponent_ng_container_4_Template, 5, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CeeCarouselComponent_div_5_Template, 7, 3, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "br");
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵlistener("mouseover", function CeeCarouselComponent_Template_div_mouseover_7_listener() { return ctx.autoCyclingPause = true; })("mouseout", function CeeCarouselComponent_Template_div_mouseout_7_listener() { return ctx.autoCyclingPause = false; });
            i0.ɵɵtemplate(8, CeeCarouselComponent_ng_container_8_Template, 2, 2, "ng-container", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.thumbnailCarouselPosition == "top" ? "position-top" : ctx.thumbnailCarouselPosition == "left" ? "position-left" : ctx.thumbnailCarouselPosition == "right" ? "position-right" : "position-bottom");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.thumbnailCarouselPosition == "top" || ctx.thumbnailCarouselPosition == "left");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.images);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showNextPrevious);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.thumbnailCarouselPosition == "right" || ctx.thumbnailCarouselPosition == "bottom");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.images);
        } }, dependencies: [NgClass, NgxImageZoomModule, i10.NgxImageZoomComponent, CommonModule, i11.NgForOf, i11.NgIf], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.slider-main-container[_ngcontent-%COMP%]{position:relative;max-width:1000px;margin:auto}.slideshow-container[_ngcontent-%COMP%]{max-width:1000px;position:relative;margin:auto}.position-top[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%], .position-bottom[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%]{display:flex;max-width:1000px;position:relative;margin:20px auto}.position-left[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%], .position-right[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%]{display:inline;max-width:1000px;position:relative;margin:20px auto}.position-top[_ngcontent-%COMP%]{display:inline}.position-left[_ngcontent-%COMP%], .position-right[_ngcontent-%COMP%]{display:flex}.position-bottom[_ngcontent-%COMP%]{display:inline}.thumbnail_active[_ngcontent-%COMP%]{border:3px solid rgb(190,190,190);box-shadow:#717171}.thumbnail[_ngcontent-%COMP%]{cursor:pointer;padding:5px;max-width:150px;max-height:150px}.mySlides[_ngcontent-%COMP%]{display:block}.image_active[_ngcontent-%COMP%]{display:block!important}.image[_ngcontent-%COMP%]{display:none;width:100%}.numbertext[_ngcontent-%COMP%]{display:none;color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.numbertext_active[_ngcontent-%COMP%]{display:block!important}.text[_ngcontent-%COMP%]{display:none;color:#f2f2f2;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.text_active[_ngcontent-%COMP%]{display:block!important}.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.prev-horizontal[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:50%;top:0;width:auto;margin-top:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:50%;bottom:0;width:auto;margin-bottom:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal[_ngcontent-%COMP%]{border-radius:3px 0 0 3px}.next[_ngcontent-%COMP%]{right:0;border-radius:3px 0 0 3px}.prev-horizontal[_ngcontent-%COMP%]:hover, .next-horizontal[_ngcontent-%COMP%]:hover, .prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover{background-color:#000c}.dot[_ngcontent-%COMP%]{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color .6s ease}.active[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%]:hover{background-color:#717171}.dot-container[_ngcontent-%COMP%]{text-align:center}.fade[_ngcontent-%COMP%]{-webkit-animation-name:_ngcontent-%COMP%_fade;-webkit-animation-duration:1.5s;animation-name:_ngcontent-%COMP%_fade;animation-duration:1.5s}@-webkit-keyframes _ngcontent-%COMP%_fade{0%{opacity:.4}to{opacity:1}}@keyframes _ngcontent-%COMP%_fade{0%{opacity:.4}to{opacity:1}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCarouselComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-carousel', standalone: true, imports: [NgClass, NgxImageZoomModule, CommonModule], template: "<div class=\"slider-main-container\" [ngClass]=\"thumbnailCarouselPosition == 'top' ? 'position-top' : ( thumbnailCarouselPosition == 'left' ? 'position-left' : ( thumbnailCarouselPosition == 'right' ? 'position-right' : 'position-bottom' ) )\">\r\n\t<!-- Slideshow container -->\r\n\t<div class=\"thumbnail-slideshow-container\" *ngIf=\"thumbnailCarouselPosition == 'top' || thumbnailCarouselPosition == 'left'\">\r\n\t\t<!-- thumbnail images -->\r\n\t\t<div class=\"mySlides\" *ngFor='let image of images; let i = index' (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\t\t\t<img [attr.aria-label]=\"image.text\" alt=\"{{image.text}}\" (click)=\"currentSlide(i)\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'thumbnail thumbnail_active' : 'thumbnail'\" [src]=\"image.thumbnail\">\r\n\t\t</div>\r\n\t\t<!-- Next and previous buttons -->\r\n\t\t<ng-container>\r\n\t\t\t<a aria-level=\"prev image\" [ngClass]=\"thumbnailCarouselPosition == 'left' ? 'prev-horizontal' : 'prev'\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n\t\t\t<a aria-level=\"next image\" [ngClass]=\"thumbnailCarouselPosition == 'left' ? 'next-horizontal' : 'next'\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"slideshow-container\" (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\r\n\t\t<!-- Full-width images with number and caption text -->\r\n\t\t<div class=\"mySlides\" *ngFor='let image of images; let i = index'>\r\n\r\n\t\t\t<div [ngClass]=\"slideIndex == i ? 'numbertext numbertext_active' : 'numbertext'\" *ngIf=\"showNumbers\">\r\n\t\t\t\t{{countText}}\r\n\t\t\t\t{{i}} / {{images.length}}</div>\r\n\t\t\t<!-- Image without Zoom feature -->\r\n\t\t\t<img [attr.aria-label]=\"image.text\" alt=\"{{image.text}}\" *ngIf=\"isZoomInModal\" (click)=\"openPictureInModal(image)\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'image image_active' : 'image'\" [src]=\"image.image\">\r\n\t\t\t<!-- Image with Zoom feature -->\r\n\t\t\t<lib-ngx-image-zoom\r\n\t\t\t\t*ngIf=\"!isZoomInModal\"\r\n\t\t\t\t[thumbImage]=\"image.image\"\r\n\t\t\t\t[fullImage]=\"image.highres\"\r\n\t\t\t\t[magnification]=\"2\"\r\n\t\t\t\t[enableScrollZoom]=\"true\"\r\n\t\t\t\t[zoomMode]=\"zoomInEventType\"\r\n\t\t\t\t[enableLens]=\"false\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'image image_active' : 'image'\"\r\n\t\t\t\t[altText]=\"image.text\"\r\n\t\t\t\t[titleText]=\"image.text\"\r\n\t\t\t\t[circularLens]=\"true\">\r\n\t\t\t</lib-ngx-image-zoom>\r\n\t\t\t<ng-container *ngIf=\"image.text\">\r\n\t\t\t\t<div [ngClass]=\"slideIndex == i ? 'text text_active' : 'text'\" [innerHTML]=\"image.text\">\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\r\n\t\t<!-- Next and previous buttons -->\r\n\t\t<ng-container *ngIf=\"showNextPrevious\">\r\n\t\t\t<a aria-level=\"prev image\" class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n\t\t\t<a aria-level=\"next image\" class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"thumbnail-slideshow-container\" *ngIf=\"thumbnailCarouselPosition == 'right' || thumbnailCarouselPosition == 'bottom'\">\r\n\t\t<!-- thumbnail images -->\r\n\t\t<div class=\"mySlides\" *ngFor='let image of images; let i = index' (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\t\t\t<img [attr.aria-label]=\"image.text\" alt=\"{{image.text}}\" (click)=\"currentSlide(i)\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'thumbnail thumbnail_active' : 'thumbnail'\" [src]=\"image.thumbnail\">\r\n\t\t</div>\r\n\t\t<!-- Next and previous buttons -->\r\n\t\t<ng-container>\r\n\t\t\t<a aria-level=\"prev image\" [ngClass]=\"thumbnailCarouselPosition == 'right' ? 'prev-horizontal' : 'prev'\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n\t\t\t<a aria-level=\"next image\" [ngClass]=\"thumbnailCarouselPosition == 'right' ? 'next-horizontal' : 'next'\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n\r\n<br>\r\n\r\n<!-- The dots/circles -->\r\n<div class=\"dot-container\" (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\t<ng-container *ngFor='let image of images; let i = index'>\r\n\t\t<span [attr.aria-label]=\"'Select Image '+ i\" [ngClass]=\"slideIndex == i ? 'dot active' : 'dot'\"\r\n\t\t\t(click)=\"currentSlide(i)\"></span>\r\n\t</ng-container>\r\n</div>\r\n", styles: ["*{box-sizing:border-box}.slider-main-container{position:relative;max-width:1000px;margin:auto}.slideshow-container{max-width:1000px;position:relative;margin:auto}.position-top .thumbnail-slideshow-container,.position-bottom .thumbnail-slideshow-container{display:flex;max-width:1000px;position:relative;margin:20px auto}.position-left .thumbnail-slideshow-container,.position-right .thumbnail-slideshow-container{display:inline;max-width:1000px;position:relative;margin:20px auto}.position-top{display:inline}.position-left,.position-right{display:flex}.position-bottom{display:inline}.thumbnail_active{border:3px solid rgb(190,190,190);box-shadow:#717171}.thumbnail{cursor:pointer;padding:5px;max-width:150px;max-height:150px}.mySlides{display:block}.image_active{display:block!important}.image{display:none;width:100%}.numbertext{display:none;color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.numbertext_active{display:block!important}.text{display:none;color:#f2f2f2;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.text_active{display:block!important}.prev,.next{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.prev-horizontal{cursor:pointer;position:absolute;right:50%;top:0;width:auto;margin-top:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal{cursor:pointer;position:absolute;right:50%;bottom:0;width:auto;margin-bottom:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal{border-radius:3px 0 0 3px}.next{right:0;border-radius:3px 0 0 3px}.prev-horizontal:hover,.next-horizontal:hover,.prev:hover,.next:hover{background-color:#000c}.dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color .6s ease}.active,.dot:hover{background-color:#717171}.dot-container{text-align:center}.fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{0%{opacity:.4}to{opacity:1}}@keyframes fade{0%{opacity:.4}to{opacity:1}}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCarouselComponent, { className: "CeeCarouselComponent", filePath: "lib\\field-components\\cee-carousel\\cee-carousel.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1jYXJvdXNlbC9jZWUtY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWNhcm91c2VsL2NlZS1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ1R0RCwrQkFBMEk7SUFBcEMsQUFBcEMsc05BQThCLElBQUksS0FBQyx1TUFBOEIsS0FBSyxLQUFDO0lBQ3hJLCtCQUNrRztJQUR6Qyx1TUFBUyx5QkFBZSxLQUFDO0lBRW5GLEFBRkMsaUJBQ2tHLEVBQzdGOzs7OztJQUYrQixjQUFvQjtJQUFwQiw4Q0FBb0I7SUFDa0IsQUFBekUsZ0dBQXdFLDZDQUF3Qjs7Ozs7SUFKbkcsOEJBQTZIO0lBRTVILDJFQUEwSTtJQUsxSSw2QkFBYztJQUNiLDRCQUFpSTtJQUF6QiwyS0FBUyxtQkFBWSxDQUFDLENBQUMsS0FB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IE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZsYXQtdW5mbGF0LWpzb24nO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmd4SW1hZ2Vab29tTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLXpvb20nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtY2Fyb3VzZWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdDbGFzcywgTmd4SW1hZ2Vab29tTW9kdWxlLCBDb21tb25Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG5cclxuICAgIGltYWdlcyA9IFtdO1xyXG4gICAgc2xpZGVJbmRleCA9IDA7XHJcbiAgICBzaG93TnVtYmVycyA9IGZhbHNlO1xyXG4gICAgc2hvd05leHRQcmV2aW91cyA9IGZhbHNlO1xyXG4gICAgY291bnRUZXh0ID0gJyc7XHJcbiAgICBhdXRvQ3ljbGluZ0ludGVydmFsO1xyXG4gICAgYXV0b0N5Y2xpbmdQYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdGh1bWJuYWlsQ2Fyb3VzZWxQb3NpdGlvbjogYW55ID0gXCJidXR0b21cIjtcclxuICAgIHpvb21JbkV2ZW50VHlwZTogYW55ID0gXCJvbmhvdmVyXCI7XHJcbiAgICBpc1pvb21Jbk1vZGFsOiBhbnkgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZmxhdFVuZmxhdDogRmxhdFVuZmxhdDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcih1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLCBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSwgd2ZlU3RlcExvYWRlclNlcnZpY2UsIGRpYWxvZywgc25hY2tCYXIsIGh0dHApO1xyXG4gICAgICAgIHRoaXMuZmxhdFVuZmxhdCA9IG5ldyBGbGF0VW5mbGF0KGFwcERhdGFTZXJ2aWNlKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHNldCBpbWFnZXMgd2hlbiB0aGUgZGF0YSBpcyBsb2FkZWQuXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2Fzc2V0cyAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9hc3NldHMubGVuZ3RoID4gMCAmJiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfYXNzZXRzLm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGEucGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBkYXRhLnRodW1ibmFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaHJlczogZGF0YS5oaWdocmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNba2V5XSA/IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlc1trZXldIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxDYXJvdXNlbFBvc2l0aW9uID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfQ2Fyb3VzZWxfUG9zaXRpb24nXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9DYXJvdXNlbF9Qb3NpdGlvbiddICE9IFwiXCIgPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9DYXJvdXNlbF9Qb3NpdGlvbiddLnRvTG93ZXJDYXNlKCkgOiAnYnV0dG9tJztcclxuICAgICAgICB0aGlzLnpvb21JbkV2ZW50VHlwZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1pvb21JbkV2ZW50VHlwZSddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1pvb21JbkV2ZW50VHlwZSddICE9IFwiXCIgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfWm9vbUluRXZlbnRUeXBlJ10udG9Mb3dlckNhc2UoKSA9PSAnb25ob3ZlcicgPyBcImhvdmVyXCIgOiAnY2xpY2snO1xyXG4gICAgICAgIHRoaXMuaXNab29tSW5Nb2RhbCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1pvb21Jbk1vZGFsJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfWm9vbUluTW9kYWwnXSAhPSBcIlwiICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1pvb21Jbk1vZGFsJ10udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBdXRvQ3ljbGluZyddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQXV0b0N5Y2xpbmcnXSAhPT0gJ2ZhbHNlJyAmJiBwYXJzZUludCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0F1dG9DeWNsaW5nJ10pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0N5Y2xpbmcocGFyc2VJbnQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBdXRvQ3ljbGluZyddKSAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIGlmIChhcGlEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFwaURhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIGFwaURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoZGF0YSkgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogZGF0YS5wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDogZGF0YS50aHVtYm5haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaHJlczogZGF0YS5oaWdocmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0RGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIG9uRW1wdHlTZXNzaW9uKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0N5Y2xpbmdJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b0N5Y2xpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0N5Y2xpbmdJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbGVhciBpbWFnZXMgYXJyYXkgYW5kIHJlbGF0ZWQgZGF0YVxyXG4gICAgICAgIHRoaXMuY2xlYXJJbWFnZXMoKTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdXRpbGl0eSBvYmplY3QgcmVmZXJlbmNlc1xyXG4gICAgICAgIHRoaXMuZmxhdFVuZmxhdCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGNvbXBvbmVudCBzdGF0ZVxyXG4gICAgICAgIHRoaXMuc2xpZGVJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zaG93TnVtYmVycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd05leHRQcmV2aW91cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY291bnRUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5hdXRvQ3ljbGluZ1BhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxDYXJvdXNlbFBvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnpvb21JbkV2ZW50VHlwZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1pvb21Jbk1vZGFsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIGlucHV0IHByb3BlcnRpZXNcclxuXHJcbiAgICAgICAgdGhpcy5wcmltYXJ5S2V5SW5kZXggPSBudWxsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFySW1hZ2VzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmltYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBhcnJheSBjb21wbGV0ZWx5XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXNldCBzbGlkZSBpbmRleFxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTmV4dC9wcmV2aW91cyBjb250cm9sc1xyXG4gICAgcGx1c1NsaWRlcyhuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVJbmRleCArIG4gPT09IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlSW5kZXggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZUluZGV4ICsgbiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZUluZGV4ID0gdGhpcy5pbWFnZXMubGVuZ3RoICsgbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlSW5kZXggKz0gbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBUaHVtYm5haWwgaW1hZ2UgY29udHJvbHNcclxuICAgIGN1cnJlbnRTbGlkZShuKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZUluZGV4ID0gbjtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvQ3ljbGluZyh0OiBudW1iZXIgPSAxMDAwKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYXV0b0N5Y2xpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5hdXRvQ3ljbGluZ1BhdXNlKSBfdGhpcy5wbHVzU2xpZGVzKDEpO1xyXG4gICAgICAgIH0sIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBpY3R1cmVJbk1vZGFsKGltYWdlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7J2ltYWdlJzogaW1hZ2UsICd6b29tSW5FdmVudFR5cGUnOiB0aGlzLnpvb21JbkV2ZW50VHlwZSwgJ3pvb21JbWcnOiB0cnVlfVxyXG4gICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5vcGVuQWxlcnQoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNsaWRlci1tYWluLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInRodW1ibmFpbENhcm91c2VsUG9zaXRpb24gPT0gJ3RvcCcgPyAncG9zaXRpb24tdG9wJyA6ICggdGh1bWJuYWlsQ2Fyb3VzZWxQb3NpdGlvbiA9PSAnbGVmdCcgPyAncG9zaXRpb24tbGVmdCcgOiAoIHRodW1ibmFpbENhcm91c2VsUG9zaXRpb24gPT0gJ3JpZ2h0JyA/ICdwb3NpdGlvbi1yaWdodCcgOiAncG9zaXRpb24tYm90dG9tJyApIClcIj5cclxuXHQ8IS0tIFNsaWRlc2hvdyBjb250YWluZXIgLS0+XHJcblx0PGRpdiBjbGFzcz1cInRodW1ibmFpbC1zbGlkZXNob3ctY29udGFpbmVyXCIgKm5nSWY9XCJ0aHVtYm5haWxDYXJvdXNlbFBvc2l0aW9uID09ICd0b3AnIHx8IHRodW1ibmFpbENhcm91c2VsUG9zaXRpb24gPT0gJ2xlZnQnXCI+XHJcblx0XHQ8IS0tIHRodW1ibmFpbCBpbWFnZXMgLS0+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibXlTbGlkZXNcIiAqbmdGb3I9J2xldCBpbWFnZSBvZiBpbWFnZXM7IGxldCBpID0gaW5kZXgnIChtb3VzZW92ZXIpPVwiYXV0b0N5Y2xpbmdQYXVzZT10cnVlXCIgKG1vdXNlb3V0KT1cImF1dG9DeWNsaW5nUGF1c2U9ZmFsc2VcIj5cclxuXHRcdFx0PGltZyBbYXR0ci5hcmlhLWxhYmVsXT1cImltYWdlLnRleHRcIiBhbHQ9XCJ7e2ltYWdlLnRleHR9fVwiIChjbGljayk9XCJjdXJyZW50U2xpZGUoaSlcIlxyXG5cdFx0XHRcdFtuZ0NsYXNzXT1cInNsaWRlSW5kZXggPT0gaSA/ICd0aHVtYm5haWwgdGh1bWJuYWlsX2FjdGl2ZScgOiAndGh1bWJuYWlsJ1wiIFtzcmNdPVwiaW1hZ2UudGh1bWJuYWlsXCI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwhLS0gTmV4dCBhbmQgcHJldmlvdXMgYnV0dG9ucyAtLT5cclxuXHRcdDxuZy1jb250YWluZXI+XHJcblx0XHRcdDxhIGFyaWEtbGV2ZWw9XCJwcmV2IGltYWdlXCIgW25nQ2xhc3NdPVwidGh1bWJuYWlsQ2Fyb3VzZWxQb3NpdGlvbiA9PSAnbGVmdCcgPyAncHJldi1ob3Jpem9udGFsJyA6ICdwcmV2J1wiIChjbGljayk9XCJwbHVzU2xpZGVzKC0xKVwiPiYjMTAwOTQ7PC9hPlxyXG5cdFx0XHQ8YSBhcmlhLWxldmVsPVwibmV4dCBpbWFnZVwiIFtuZ0NsYXNzXT1cInRodW1ibmFpbENhcm91c2VsUG9zaXRpb24gPT0gJ2xlZnQnID8gJ25leHQtaG9yaXpvbnRhbCcgOiAnbmV4dCdcIiAoY2xpY2spPVwicGx1c1NsaWRlcygxKVwiPiYjMTAwOTU7PC9hPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cInNsaWRlc2hvdy1jb250YWluZXJcIiAobW91c2VvdmVyKT1cImF1dG9DeWNsaW5nUGF1c2U9dHJ1ZVwiIChtb3VzZW91dCk9XCJhdXRvQ3ljbGluZ1BhdXNlPWZhbHNlXCI+XHJcblxyXG5cdFx0PCEtLSBGdWxsLXdpZHRoIGltYWdlcyB3aXRoIG51bWJlciBhbmQgY2FwdGlvbiB0ZXh0IC0tPlxyXG5cdFx0PGRpdiBjbGFzcz1cIm15U2xpZGVzXCIgKm5nRm9yPSdsZXQgaW1hZ2Ugb2YgaW1hZ2VzOyBsZXQgaSA9IGluZGV4Jz5cclxuXHJcblx0XHRcdDxkaXYgW25nQ2xhc3NdPVwic2xpZGVJbmRleCA9PSBpID8gJ251bWJlcnRleHQgbnVtYmVydGV4dF9hY3RpdmUnIDogJ251bWJlcnRleHQnXCIgKm5nSWY9XCJzaG93TnVtYmVyc1wiPlxyXG5cdFx0XHRcdHt7Y291bnRUZXh0fX1cclxuXHRcdFx0XHR7e2l9fSAvIHt7aW1hZ2VzLmxlbmd0aH19PC9kaXY+XHJcblx0XHRcdDwhLS0gSW1hZ2Ugd2l0aG91dCBab29tIGZlYXR1cmUgLS0+XHJcblx0XHRcdDxpbWcgW2F0dHIuYXJpYS1sYWJlbF09XCJpbWFnZS50ZXh0XCIgYWx0PVwie3tpbWFnZS50ZXh0fX1cIiAqbmdJZj1cImlzWm9vbUluTW9kYWxcIiAoY2xpY2spPVwib3BlblBpY3R1cmVJbk1vZGFsKGltYWdlKVwiXHJcblx0XHRcdFx0W25nQ2xhc3NdPVwic2xpZGVJbmRleCA9PSBpID8gJ2ltYWdlIGltYWdlX2FjdGl2ZScgOiAnaW1hZ2UnXCIgW3NyY109XCJpbWFnZS5pbWFnZVwiPlxyXG5cdFx0XHQ8IS0tIEltYWdlIHdpdGggWm9vbSBmZWF0dXJlIC0tPlxyXG5cdFx0XHQ8bGliLW5neC1pbWFnZS16b29tXHJcblx0XHRcdFx0Km5nSWY9XCIhaXNab29tSW5Nb2RhbFwiXHJcblx0XHRcdFx0W3RodW1iSW1hZ2VdPVwiaW1hZ2UuaW1hZ2VcIlxyXG5cdFx0XHRcdFtmdWxsSW1hZ2VdPVwiaW1hZ2UuaGlnaHJlc1wiXHJcblx0XHRcdFx0W21hZ25pZmljYXRpb25dPVwiMlwiXHJcblx0XHRcdFx0W2VuYWJsZVNjcm9sbFpvb21dPVwidHJ1ZVwiXHJcblx0XHRcdFx0W3pvb21Nb2RlXT1cInpvb21JbkV2ZW50VHlwZVwiXHJcblx0XHRcdFx0W2VuYWJsZUxlbnNdPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFtuZ0NsYXNzXT1cInNsaWRlSW5kZXggPT0gaSA/ICdpbWFnZSBpbWFnZV9hY3RpdmUnIDogJ2ltYWdlJ1wiXHJcblx0XHRcdFx0W2FsdFRleHRdPVwiaW1hZ2UudGV4dFwiXHJcblx0XHRcdFx0W3RpdGxlVGV4dF09XCJpbWFnZS50ZXh0XCJcclxuXHRcdFx0XHRbY2lyY3VsYXJMZW5zXT1cInRydWVcIj5cclxuXHRcdFx0PC9saWItbmd4LWltYWdlLXpvb20+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpbWFnZS50ZXh0XCI+XHJcblx0XHRcdFx0PGRpdiBbbmdDbGFzc109XCJzbGlkZUluZGV4ID09IGkgPyAndGV4dCB0ZXh0X2FjdGl2ZScgOiAndGV4dCdcIiBbaW5uZXJIVE1MXT1cImltYWdlLnRleHRcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8IS0tIE5leHQgYW5kIHByZXZpb3VzIGJ1dHRvbnMgLS0+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd05leHRQcmV2aW91c1wiPlxyXG5cdFx0XHQ8YSBhcmlhLWxldmVsPVwicHJldiBpbWFnZVwiIGNsYXNzPVwicHJldlwiIChjbGljayk9XCJwbHVzU2xpZGVzKC0xKVwiPiYjMTAwOTQ7PC9hPlxyXG5cdFx0XHQ8YSBhcmlhLWxldmVsPVwibmV4dCBpbWFnZVwiIGNsYXNzPVwibmV4dFwiIChjbGljayk9XCJwbHVzU2xpZGVzKDEpXCI+JiMxMDA5NTs8L2E+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwidGh1bWJuYWlsLXNsaWRlc2hvdy1jb250YWluZXJcIiAqbmdJZj1cInRodW1ibmFpbENhcm91c2VsUG9zaXRpb24gPT0gJ3JpZ2h0JyB8fCB0aHVtYm5haWxDYXJvdXNlbFBvc2l0aW9uID09ICdib3R0b20nXCI+XHJcblx0XHQ8IS0tIHRodW1ibmFpbCBpbWFnZXMgLS0+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibXlTbGlkZXNcIiAqbmdGb3I9J2xldCBpbWFnZSBvZiBpbWFnZXM7IGxldCBpID0gaW5kZXgnIChtb3VzZW92ZXIpPVwiYXV0b0N5Y2xpbmdQYXVzZT10cnVlXCIgKG1vdXNlb3V0KT1cImF1dG9DeWNsaW5nUGF1c2U9ZmFsc2VcIj5cclxuXHRcdFx0PGltZyBbYXR0ci5hcmlhLWxhYmVsXT1cImltYWdlLnRleHRcIiBhbHQ9XCJ7e2ltYWdlLnRleHR9fVwiIChjbGljayk9XCJjdXJyZW50U2xpZGUoaSlcIlxyXG5cdFx0XHRcdFtuZ0NsYXNzXT1cInNsaWRlSW5kZXggPT0gaSA/ICd0aHVtYm5haWwgdGh1bWJuYWlsX2FjdGl2ZScgOiAndGh1bWJuYWlsJ1wiIFtzcmNdPVwiaW1hZ2UudGh1bWJuYWlsXCI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwhLS0gTmV4dCBhbmQgcHJldmlvdXMgYnV0dG9ucyAtLT5cclxuXHRcdDxuZy1jb250YWluZXI+XHJcblx0XHRcdDxhIGFyaWEtbGV2ZWw9XCJwcmV2IGltYWdlXCIgW25nQ2xhc3NdPVwidGh1bWJuYWlsQ2Fyb3VzZWxQb3NpdGlvbiA9PSAncmlnaHQnID8gJ3ByZXYtaG9yaXpvbnRhbCcgOiAncHJldidcIiAoY2xpY2spPVwicGx1c1NsaWRlcygtMSlcIj4mIzEwMDk0OzwvYT5cclxuXHRcdFx0PGEgYXJpYS1sZXZlbD1cIm5leHQgaW1hZ2VcIiBbbmdDbGFzc109XCJ0aHVtYm5haWxDYXJvdXNlbFBvc2l0aW9uID09ICdyaWdodCcgPyAnbmV4dC1ob3Jpem9udGFsJyA6ICduZXh0J1wiIChjbGljayk9XCJwbHVzU2xpZGVzKDEpXCI+JiMxMDA5NTs8L2E+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48YnI+XHJcblxyXG48IS0tIFRoZSBkb3RzL2NpcmNsZXMgLS0+XHJcbjxkaXYgY2xhc3M9XCJkb3QtY29udGFpbmVyXCIgKG1vdXNlb3Zlcik9XCJhdXRvQ3ljbGluZ1BhdXNlPXRydWVcIiAobW91c2VvdXQpPVwiYXV0b0N5Y2xpbmdQYXVzZT1mYWxzZVwiPlxyXG5cdDxuZy1jb250YWluZXIgKm5nRm9yPSdsZXQgaW1hZ2Ugb2YgaW1hZ2VzOyBsZXQgaSA9IGluZGV4Jz5cclxuXHRcdDxzcGFuIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1NlbGVjdCBJbWFnZSAnKyBpXCIgW25nQ2xhc3NdPVwic2xpZGVJbmRleCA9PSBpID8gJ2RvdCBhY3RpdmUnIDogJ2RvdCdcIlxyXG5cdFx0XHQoY2xpY2spPVwiY3VycmVudFNsaWRlKGkpXCI+PC9zcGFuPlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19