import { Component, Input, Inject, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { DOCUMENT } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/user-data-handler.service";
import * as i3 from "../../services/shared-events-service.service";
import * as i4 from "../../services/internal-cee-emitter-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/material/dialog";
import * as i9 from "@angular/material/snack-bar";
import * as i10 from "@angular/common/http";
import * as i11 from "../../services/cee-api-service.service";
import * as i12 from "@angular/platform-browser";
import * as i13 from "@angular/youtube-player";
import * as i14 from "@angular/common";
const _c0 = ["video"];
const _c1 = ["videoContainer"];
const _c2 = ["progressBar"];
function CeeVideoComponent_div_0_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36, 3);
    i0.ɵɵelement(3, "div", 37)(4, "div", 38)(5, "div", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 40);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r0.watchedProgress + "%");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r0.loadPercentage + "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.durationRemaining, " ");
} }
function CeeVideoComponent_div_0_div_3_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41, 4);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.playPause()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 42, 5);
    i0.ɵɵelement(4, "polygon", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "svg", 44, 6);
    i0.ɵɵelement(7, "rect", 45)(8, "rect", 46);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isPlaying ? "none" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("display", ctx_r0.isPlaying ? "" : "none");
} }
function CeeVideoComponent_div_0_div_3_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.addTime(-10)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 31);
    i0.ɵɵelement(2, "path", 48);
    i0.ɵɵelementEnd()();
} }
function CeeVideoComponent_div_0_div_3_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.addTime(10)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 31);
    i0.ɵɵelement(2, "path", 50);
    i0.ɵɵelementEnd()();
} }
function CeeVideoComponent_div_0_div_3_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51, 7);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleMute()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 52, 8);
    i0.ɵɵelement(4, "polygon", 53)(5, "path", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "svg", 55, 9);
    i0.ɵɵelement(8, "polygon", 53)(9, "line", 56)(10, "line", 57);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isFullVolume ? "" : "none");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("display", ctx_r0.isFullVolume ? "none" : "");
} }
function CeeVideoComponent_div_0_div_3_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58)(1, "span", 59);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.showTitle);
} }
function CeeVideoComponent_div_0_div_3_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61, 10);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleFullScreen()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 62, 11);
    i0.ɵɵelement(4, "path", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "svg", 64, 12);
    i0.ɵɵelement(7, "path", 65);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isFullScreen ? "none" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("display", ctx_r0.isFullScreen ? "" : "none");
} }
function CeeVideoComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19, 0);
    i0.ɵɵelement(2, "div", 20)(3, "video", 21, 1);
    i0.ɵɵelementStart(5, "div", 22, 2);
    i0.ɵɵtemplate(7, CeeVideoComponent_div_0_div_3_div_7_Template, 8, 5, "div", 23);
    i0.ɵɵelementStart(8, "div", 24);
    i0.ɵɵtemplate(9, CeeVideoComponent_div_0_div_3_button_9_Template, 9, 4, "button", 25)(10, CeeVideoComponent_div_0_div_3_button_10_Template, 3, 0, "button", 26)(11, CeeVideoComponent_div_0_div_3_button_11_Template, 3, 0, "button", 27)(12, CeeVideoComponent_div_0_div_3_button_12_Template, 11, 4, "button", 28)(13, CeeVideoComponent_div_0_div_3_p_13_Template, 4, 1, "p", 29);
    i0.ɵɵelementStart(14, "button", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(15, "svg", 31);
    i0.ɵɵelement(16, "polygon", 32)(17, "line", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(18, CeeVideoComponent_div_0_div_3_button_18_Template, 8, 4, "button", 34);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isLoadingContent ? "" : "none");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", ctx_r0.normalId, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("opacity", ctx_r0.displayControllsOpacity);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showProgress);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.playPauseBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fastForwardBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fastForwardBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.muteBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.fullscreenBtn);
} }
function CeeVideoComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "iframe", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.fieldData.field_label);
    i0.ɵɵproperty("src", ctx_r0.embedId, i0.ɵɵsanitizeResourceUrl);
} }
function CeeVideoComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "youtube-player", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("videoId", ctx_r0.youtubeId);
} }
function CeeVideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    i0.ɵɵtemplate(3, CeeVideoComponent_div_0_div_3_Template, 19, 12, "div", 17)(4, CeeVideoComponent_div_0_div_4_Template, 2, 2, "div", 17)(5, CeeVideoComponent_div_0_div_5_Template, 2, 1, "div", 18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.normalUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.embedUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.youtubeUrl);
} }
export class CeeVideoComponent extends BaseView {
    router;
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
    sanitizer;
    document;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    rootData;
    displayControllsOpacity = 0;
    isPlaying = false;
    isFullVolume = true;
    isFullScreen = false;
    watchedProgress = 0;
    loadPercentage = 0;
    isLoadingContent = false;
    durationRemaining = '00:00';
    controlsTimeout;
    Target;
    additionalParameters = {};
    video;
    videoContainer;
    progressBar;
    videoElement;
    playPauseBtn = true;
    fastForwardBtn = true;
    muteBtn = true;
    showTitle = true;
    nextBtn = true;
    fullscreenBtn = true;
    showProgress = true;
    embedId;
    embedUrl = false;
    normalId;
    normalUrl = false;
    youtubeId;
    youtubeUrl = false;
    displayControlsTimout = 5000;
    constructor(router, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, sanitizer, document) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.router = router;
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
        this.sanitizer = sanitizer;
        this.document = document;
    }
    ngOnInit() {
        if (!this.fieldData.possible_values) {
            this.fieldData.possible_values = [];
        }
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    extractVideoId(url, regex) {
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        else {
            return null;
        }
    }
    isDomainIncluded(targetDomain, link) {
        targetDomain = targetDomain.toLowerCase().trim();
        switch (targetDomain) {
            case "www.youtube.com":
                const youtubeRegex = /(?:youtube\.com\/(?:.*?(?:[?&]v=|\/embed\/|\/v\/|\/watch\?v=))|youtu\.be\/)([^"&?\/ ]{11})/;
                this.youtubeId = this.extractVideoId(link, youtubeRegex);
                this.youtubeUrl = true;
                this.initalizeYoutube();
                break;
            case "www.instagram.com":
                const instaRegex = /instagram\.com\/p\/([A-Za-z0-9_-]+)/;
                this.embedUrl = true;
                const instaurl = this.extractVideoId(link, instaRegex);
                this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(instaurl);
                break;
            case "vimeo.com":
                const vimeoRegex = /vimeo\.com\/(\d+)/;
                this.embedUrl = true;
                const vimeourl = "https://player.vimeo.com/video/" + this.extractVideoId(link, vimeoRegex);
                this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(vimeourl);
                break;
            case "www.facebook.com":
                const fbRegex = /(?:facebook\.com\/[^/]+\/videos\/|facebook\.com\/video\.php\?v=|facebook\.com\/watch\/\?v=)([0-9]+)/;
                this.embedUrl = true;
                const fburl = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F" + this.extractVideoId(link, fbRegex);
                this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(fburl);
                break;
            default:
                this.normalUrl = true;
                this.normalId = link;
                break;
        }
    }
    extractDomain(url) {
        try {
            const urlObj = new URL(url);
            const domain = urlObj.hostname;
            return domain;
        }
        catch (error) {
            return null;
        }
    }
    initalizeYoutube() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        if (this.rowData && this.rowData.hasOwnProperty('value')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.value);
            this.setApiData(this.fieldData, this.rowData.value);
        }
        if (this.fieldData.possible_values.length > 0) {
            this.fieldData.possible_values.map(x => {
                let urlValue = x.split("||");
                const domain = this.extractDomain(urlValue[1]);
                if (urlValue[0] != "embedUrl") {
                    this.isDomainIncluded(domain, urlValue[1]);
                }
                else {
                    this.embedUrl = true;
                    this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(urlValue[1]);
                }
                if (!urlValue[2] && !this.fieldData.field_label.includes('((dynamic))')) {
                    urlValue[2] = this.fieldData.field_label;
                }
            });
        }
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'Play and Pause':
                        this.playPauseBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Fast Forward':
                        this.fastForwardBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Mute':
                        this.muteBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Title':
                        this.showTitle = paramter.value;
                        break;
                    case 'Next':
                        this.nextBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Fullscreen':
                        this.fullscreenBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'ShowProgress':
                        this.showProgress = paramter.value === 'false' ? false : true;
                        break;
                }
            }
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        this.setApiData(this.fieldData, data);
        this.fieldData.possible_values.forEach(config => {
            let urlValue = config.split("||");
            if (!urlValue[2] && !this.fieldData.field_label.includes('((dynamic))')) {
                urlValue[2] = this.fieldData.field_label;
            }
        });
    }
    setApiData(config, data) {
        if (config.response_api_key) {
            const link = this.setApiCallBackDataUtil.setApiCallBackData(config.response_api_key, data);
            if (link) {
                this.fieldData.possible_values.push(link);
            }
        }
    }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onSetSessionData(apiKey, value) {
    }
    concatData() { }
    /*
     * special event handled for link types
    */
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    onContextMenu(event) {
    }
    ngAfterViewInit() {
        if (this.normalUrl) {
            this.videoElement = this.video.nativeElement;
            this.videoContainer.nativeElement.addEventListener('mousemove', () => {
                this.displayControls();
            });
            this.document.addEventListener('fullscreenchange', () => {
                if (!document.fullscreenElement) {
                    this.isFullScreen = false;
                }
                else {
                    this.isFullScreen = true;
                }
            });
            this.document.addEventListener('keyup', (event) => {
                if (event.code === 'Space') {
                    this.playPause();
                }
                if (event.code === 'KeyM') {
                    this.toggleMute();
                }
                if (event.code === 'KeyF') {
                    this.toggleFullScreen();
                }
                this.displayControls();
            });
            this.videoElement.addEventListener('timeupdate', () => {
                this.watchedProgress =
                    (this.videoElement.currentTime / this.videoElement.duration) * 100;
                const totalSecondsRemaining = this.videoElement.duration - this.videoElement.currentTime;
                const time = new Date(null);
                time.setSeconds(totalSecondsRemaining);
                let hours = null;
                if (totalSecondsRemaining >= 3600) {
                    hours = time.getHours().toString().padStart(2, '0');
                }
                let minutes = time.getMinutes().toString().padStart(2, '0');
                let seconds = time.getSeconds().toString().padStart(2, '0');
                this.durationRemaining = `${hours ? hours + ':' : ''}${minutes}:${seconds}`;
            });
            this.progressBar.nativeElement.addEventListener('click', (event) => {
                const progressBarEle = this.progressBar.nativeElement;
                const pos = (event.pageX -
                    (progressBarEle.offsetLeft + progressBarEle.offsetLeft)) /
                    progressBarEle.offsetWidth;
                this.videoElement.currentTime = pos * this.videoElement.duration;
            });
            this.videoElement.addEventListener('progress', () => {
                var range = 0;
                var bf = this.videoElement.buffered;
                var time = this.videoElement.currentTime;
                while (!(bf.start(range) <= time && time <= bf.end(range))) {
                    range += 1;
                }
                var loadStartPercentage = bf.start(range) / this.videoElement.duration;
                var loadEndPercentage = bf.end(range) / this.videoElement.duration;
                this.loadPercentage = loadEndPercentage * 100;
            });
            this.videoElement.addEventListener('waiting', (data) => {
                this.isLoadingContent = true;
                this.isPlaying = false;
            });
            this.videoElement.addEventListener('playing', (data) => {
                this.isLoadingContent = false;
                this.isPlaying = true;
            });
            this.videoElement.addEventListener('ended', (data) => {
                this.isPlaying = false;
            });
        }
    }
    displayControls() {
        this.displayControllsOpacity = 1;
        document.body.style.cursor = 'initial';
        if (this.controlsTimeout) {
            clearTimeout(this.controlsTimeout);
        }
        this.controlsTimeout = setTimeout(() => {
            if (this.isPlaying) {
                this.displayControllsOpacity = 0;
            }
            else {
                this.displayControllsOpacity = 1;
            }
            document.body.style.cursor = 'none';
        }, this.displayControlsTimout);
    }
    playPause() {
        if (this.videoElement.paused) {
            this.videoElement.play();
            this.isPlaying = true;
        }
        else {
            this.videoElement.pause();
            this.isPlaying = false;
        }
    }
    toggleMute() {
        this.videoElement.muted = !this.videoElement.muted;
        if (this.videoElement.muted) {
            this.isFullVolume = false;
        }
        else {
            this.isFullVolume = true;
        }
    }
    toggleFullScreen() {
        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement) {
            this.openFullscreen();
        }
        else {
            this.closeFullscreen();
        }
    }
    openFullscreen() {
        if (this.videoContainer.nativeElement.requestFullscreen) {
            this.videoContainer.nativeElement.requestFullscreen();
        }
        else if (this.videoContainer.nativeElement.webkitRequestFullscreen) {
            /* Safari */
            this.videoContainer.nativeElement.webkitRequestFullscreen();
        }
    }
    /* Close fullscreen */
    closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
        }
    }
    addTime(seconds = 10) {
        this.videoElement.currentTime += seconds;
    }
    static ɵfac = function CeeVideoComponent_Factory(t) { return new (t || CeeVideoComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i11.CeeApiService), i0.ɵɵdirectiveInject(i12.DomSanitizer), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeVideoComponent, selectors: [["app-cee-video"]], viewQuery: function CeeVideoComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.video = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.videoContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.progressBar = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["videoContainer", ""], ["video", ""], ["controlsContainer", ""], ["progressBar", ""], ["playPauseButton", ""], ["playButton", ""], ["pauseButton", ""], ["volumeButton", ""], ["fullVolumeButton", ""], ["mutedButton", ""], ["fullScreenButton", ""], ["maximizeButton", ""], ["minimizeButton", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-field"], ["class", "video-container", 4, "ngIf"], [4, "ngIf"], [1, "video-container"], [1, "loader"], ["height", "520vh", "width", "100%", 3, "src"], [1, "controls-container"], ["class", "progress-controls", 4, "ngIf"], [1, "controls"], ["class", "play-pause", 3, "click", 4, "ngIf"], ["class", "rewind", 3, "click", 4, "ngIf"], ["class", "fast-forward", 3, "click", 4, "ngIf"], ["class", "volume", 3, "click", 4, "ngIf"], ["class", "title", 4, "ngIf"], [1, "next", "margin-left-auto"], ["viewBox", "0 0 24 24"], ["points", "5 4 15 12 5 20 5 4"], ["x1", "19", "y1", "5", "x2", "19", "y2", "19"], ["class", "full-screen", 3, "click", 4, "ngIf"], [1, "progress-controls"], [1, "progress-bar"], [1, "watched-bar"], [1, "loaded-bar"], [1, "playhead"], [1, "time-remaining"], [1, "play-pause", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "playing"], ["points", "5 3 19 12 5 21 5 3"], ["viewBox", "0 0 24 24", 1, "paused"], ["x", "6", "y", "4", "width", "4", "height", "16"], ["x", "14", "y", "4", "width", "4", "height", "16"], [1, "rewind", 3, "click"], ["fill", "#ffffff", "d", "M12.5,3C17.15,3 21.08,6.03 22.47,10.22L20.1,11C19.05,7.81 16.04,5.5 12.5,5.5C10.54,5.5 8.77,6.22 7.38,7.38L10,10H3V3L5.6,5.6C7.45,4 9.85,3 12.5,3M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14Z"], [1, "fast-forward", 3, "click"], ["fill", "#ffffff", "d", "M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14M11.5,3C14.15,3 16.55,4 18.4,5.6L21,3V10H14L16.62,7.38C15.23,6.22 13.46,5.5 11.5,5.5C7.96,5.5 4.95,7.81 3.9,11L1.53,10.22C2.92,6.03 6.85,3 11.5,3Z"], [1, "volume", 3, "click"], ["viewBox", "0 0 24 24", 1, "full-volume"], ["points", "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], ["d", "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"], ["viewBox", "0 0 24 24", 1, "muted"], ["x1", "23", "y1", "9", "x2", "17", "y2", "15"], ["x1", "17", "y1", "9", "x2", "23", "y2", "15"], [1, "title"], [1, "series"], [1, "episode"], [1, "full-screen", 3, "click"], ["viewBox", "0 0 24 24", 1, "maximize"], ["d", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"], ["viewBox", "0 0 24 24", 1, "minimize"], ["d", "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"], ["width", "100%", "height", "520vh", "frameborder", "0", "allowfullscreen", "", "webkitallowfullscreen", "", "mozallowfullscreen", "", 3, "title", "src"], ["suggestedQuality", "highres", "height", "520vh", "width", "100%", 3, "videoId"]], template: function CeeVideoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeVideoComponent_div_0_Template, 6, 3, "div", 13);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [YouTubePlayerModule, i13.YouTubePlayer, CommonModule, i14.NgIf], styles: [".video-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;position:relative;justify-content:center;align-items:center}.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}.video-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;outline:none;box-shadow:none;border:none;margin:0;transition:all .2s ease-in-out;cursor:pointer}.video-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;width:100%;height:100%}.video-container[_ngcontent-%COMP%]   button.rewind[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   button.fast-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{stroke:none}.video-container[_ngcontent-%COMP%]   button.ripple[_ngcontent-%COMP%]{position:relative}.video-container[_ngcontent-%COMP%]   button.ripple[_ngcontent-%COMP%]:after{content:\"\";background:#ffffff4d;display:block;position:absolute;border-radius:50%;inset:0;width:160px;height:160px;margin:auto;opacity:0;transition:all .5s}.video-container[_ngcontent-%COMP%]   button.ripple[_ngcontent-%COMP%]:active:after{height:10px;width:10px;opacity:1;transition:0s}.video-container[_ngcontent-%COMP%]   .video-controls-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-around;align-items:center;z-index:1}.video-container[_ngcontent-%COMP%]   .video-controls-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:160px;height:160px;min-width:160px;min-height:160px;padding:50px;background:#0000000d;opacity:1;overflow:hidden;border-radius:50%}.video-container[_ngcontent-%COMP%]   .video-controls-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1;transform:scale(1.2)}.video-container[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;min-height:50px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(#0000,#000000e6);transition:opacity .5s linear;z-index:2}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;color:#fff;padding:8px}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .time-remaining[_ngcontent-%COMP%]{margin:4px;width:1}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{width:100%;height:3px;max-height:7px;background:#fff3;display:flex;align-items:center;cursor:pointer;margin:0 8px;position:relative}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar.watched-bar[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar.playhead[_ngcontent-%COMP%]{display:inline-block;transition:all .2s}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .watched-bar[_ngcontent-%COMP%]{height:110%;width:20%;background:#8b53f1;z-index:1}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .loaded-bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;background:#fff;height:100%;width:20%;transition:all .2s}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .playhead[_ngcontent-%COMP%]{height:16px;width:16px;max-height:16px;max-width:16px;border-radius:50%;background:#fff;z-index:2;transition:all .2s}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]:hover{height:8px}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]:hover   .playhead[_ngcontent-%COMP%]{height:20px;width:20px;max-height:20px;max-width:20px}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:start;align-items:center;padding:8px}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;min-height:36px;opacity:.4;transform:scale(.9)}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1;transform:scale(1.2)}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button.volume[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button.full-screen[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:none}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center;padding:0 8px;margin:0;font-size:1rem}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .series[_ngcontent-%COMP%]{color:#fefefe;font-weight:700;font-size:1em;line-height:1}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .episode[_ngcontent-%COMP%]{color:#a1a1a1;font-size:.75em;padding-left:8px;line-height:1}@media only screen and (max-width: 768px){.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:none}}.margin-left-auto[_ngcontent-%COMP%]{margin-left:auto!important}.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{background:#fff;-webkit-animation:_ngcontent-%COMP%_load1 1s infinite ease-in-out;animation:_ngcontent-%COMP%_load1 1s infinite ease-in-out;width:1em;height:4em;z-index:100}.loader[_ngcontent-%COMP%]{color:#fff;text-indent:-9999em;margin:88px auto;font-size:11px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s;position:absolute}.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{position:absolute;top:0;content:\"\"}.loader[_ngcontent-%COMP%]:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader[_ngcontent-%COMP%]:after{left:1.5em}@-webkit-keyframes _ngcontent-%COMP%_load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes _ngcontent-%COMP%_load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeVideoComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-video', imports: [YouTubePlayerModule, CommonModule], standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-field\">\r\n            <div #videoContainer *ngIf=\"normalUrl\" class=\"video-container\">\r\n                <div [style.display]=\"isLoadingContent ? '' : 'none'\" class=\"loader\"></div>\r\n                <video\r\n                  #video\r\n                  height=\"520vh\"\r\n                  width=\"100%\"\r\n                  src={{normalId}}\r\n                ></video>\r\n                <div\r\n                  #controlsContainer\r\n                  class=\"controls-container\"\r\n                  [style.opacity]=\"displayControllsOpacity\"\r\n                >\r\n                  <div class=\"progress-controls\" *ngIf=\"showProgress\">\r\n                    <div #progressBar class=\"progress-bar\">\r\n                      <div class=\"watched-bar\" [style.width]=\"watchedProgress + '%'\"></div>\r\n                      <div class=\"loaded-bar\" [style.width]=\"loadPercentage + '%'\"></div>\r\n                      <div class=\"playhead\"></div>\r\n                    </div>\r\n                    <div class=\"time-remaining\">\r\n                      {{ durationRemaining }}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"controls\">\r\n                    <button #playPauseButton *ngIf=\"playPauseBtn\" class=\"play-pause\" (click)=\"playPause()\">\r\n                      <svg\r\n                        #playButton\r\n                        class=\"playing\"\r\n                        [style.display]=\"isPlaying ? 'none' : ''\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <polygon points=\"5 3 19 12 5 21 5 3\"></polygon>\r\n                      </svg>\r\n                      <svg\r\n                        #pauseButton\r\n                        class=\"paused\"\r\n                        [style.display]=\"isPlaying ? '' : 'none'\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect>\r\n                        <rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>\r\n                      </svg>\r\n                    </button>\r\n                    <button class=\"rewind\" *ngIf=\"fastForwardBtn\" (click)=\"addTime(-10)\">\r\n                      <svg viewBox=\"0 0 24 24\">\r\n                        <path fill=\"#ffffff\"\r\n                          d=\"M12.5,3C17.15,3 21.08,6.03 22.47,10.22L20.1,11C19.05,7.81 16.04,5.5 12.5,5.5C10.54,5.5 8.77,6.22 7.38,7.38L10,10H3V3L5.6,5.6C7.45,4 9.85,3 12.5,3M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14Z\" />\r\n                      </svg>\r\n                    </button>\r\n                          <button class=\"fast-forward\" *ngIf=\"fastForwardBtn\" (click)=\"addTime(10)\">\r\n                      <svg viewBox=\"0 0 24 24\">\r\n                        <path fill=\"#ffffff\"\r\n                          d=\"M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14M11.5,3C14.15,3 16.55,4 18.4,5.6L21,3V10H14L16.62,7.38C15.23,6.22 13.46,5.5 11.5,5.5C7.96,5.5 4.95,7.81 3.9,11L1.53,10.22C2.92,6.03 6.85,3 11.5,3Z\" />\r\n                      </svg>\r\n                    </button>\r\n                    <button #volumeButton class=\"volume\" *ngIf=\"muteBtn\" (click)=\"toggleMute()\">\r\n                      <svg\r\n                        #fullVolumeButton\r\n                        [style.display]=\"isFullVolume ? '' : 'none'\"\r\n                        class=\"full-volume\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>\r\n                        <path\r\n                          d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"\r\n                        ></path>\r\n                      </svg>\r\n                      <svg\r\n                        #mutedButton\r\n                        [style.display]=\"isFullVolume ? 'none' : ''\"\r\n                        class=\"muted\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>\r\n                        <line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line>\r\n                        <line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>\r\n                      </svg>\r\n                    </button>\r\n                    <p class=\"title\" *ngIf=\"showTitle\">\r\n                      <span class=\"series\">{{showTitle}}</span>\r\n                      <span class=\"episode\"></span>\r\n                    </p>\r\n                    <button class=\"next margin-left-auto\">\r\n                      <svg viewBox=\"0 0 24 24\">\r\n                        <polygon points=\"5 4 15 12 5 20 5 4\"></polygon>\r\n                        <line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>\r\n                      </svg>\r\n                    </button>\r\n                    <button\r\n                      #fullScreenButton\r\n                      *ngIf=\"fullscreenBtn\"\r\n                      class=\"full-screen\"\r\n                      (click)=\"toggleFullScreen()\"\r\n                    >\r\n                      <svg\r\n                        #maximizeButton\r\n                        class=\"maximize\"\r\n                        [style.display]=\"isFullScreen ? 'none' : ''\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <path\r\n                          d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"\r\n                        ></path>\r\n                      </svg>\r\n                      <svg\r\n                        #minimizeButton\r\n                        class=\"minimize\"\r\n                        [style.display]=\"isFullScreen ? '' : 'none'\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <path\r\n                          d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"\r\n                        ></path>\r\n                      </svg>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"embedUrl\" class=\"video-container\">\r\n              <iframe\r\n                title=\"{{fieldData.field_label}}\"\r\n                [src]=\"embedId\"\r\n                width=\"100%\"\r\n                height=\"520vh\"\r\n                frameborder=\"0\"\r\n                allowfullscreen\r\n                webkitallowfullscreen\r\n                mozallowfullscreen\r\n              >\r\n              </iframe>\r\n            </div>\r\n            <div *ngIf=\"youtubeUrl\">\r\n              <youtube-player\r\n                [videoId]=\"youtubeId\"\r\n                suggestedQuality=\"highres\"\r\n                height=\"520vh\"\r\n                width=\"100%\">\r\n              </youtube-player>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".video-container{width:100%;height:100%;display:flex;position:relative;justify-content:center;align-items:center}.video-container video{width:100%;height:100%}.video-container button{background:none;outline:none;box-shadow:none;border:none;margin:0;transition:all .2s ease-in-out;cursor:pointer}.video-container button svg{fill:#fff;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;width:100%;height:100%}.video-container button.rewind svg,.video-container button.fast-forward svg{stroke:none}.video-container button.ripple{position:relative}.video-container button.ripple:after{content:\"\";background:#ffffff4d;display:block;position:absolute;border-radius:50%;inset:0;width:160px;height:160px;margin:auto;opacity:0;transition:all .5s}.video-container button.ripple:active:after{height:10px;width:10px;opacity:1;transition:0s}.video-container .video-controls-container{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-around;align-items:center;z-index:1}.video-container .video-controls-container button{width:160px;height:160px;min-width:160px;min-height:160px;padding:50px;background:#0000000d;opacity:1;overflow:hidden;border-radius:50%}.video-container .video-controls-container button:hover{opacity:1;transform:scale(1.2)}.video-container .controls-container{position:absolute;bottom:0;width:100%;min-height:50px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(#0000,#000000e6);transition:opacity .5s linear;z-index:2}.video-container .progress-controls{width:100%;display:flex;justify-content:center;align-items:center;color:#fff;padding:8px}.video-container .progress-controls .time-remaining{margin:4px;width:1}.video-container .progress-controls .progress-bar{width:100%;height:3px;max-height:7px;background:#fff3;display:flex;align-items:center;cursor:pointer;margin:0 8px;position:relative}.video-container .progress-controls .progress-bar.watched-bar,.video-container .progress-controls .progress-bar.playhead{display:inline-block;transition:all .2s}.video-container .progress-controls .progress-bar .watched-bar{height:110%;width:20%;background:#8b53f1;z-index:1}.video-container .progress-controls .progress-bar .loaded-bar{position:absolute;top:0;left:0;background:#fff;height:100%;width:20%;transition:all .2s}.video-container .progress-controls .progress-bar .playhead{height:16px;width:16px;max-height:16px;max-width:16px;border-radius:50%;background:#fff;z-index:2;transition:all .2s}.video-container .progress-controls .progress-bar:hover{height:8px}.video-container .progress-controls .progress-bar:hover .playhead{height:20px;width:20px;max-height:20px;max-width:20px}.video-container .controls{width:100%;display:flex;justify-content:start;align-items:center;padding:8px}.video-container .controls button{width:36px;height:36px;min-width:36px;min-height:36px;opacity:.4;transform:scale(.9)}.video-container .controls button:hover{opacity:1;transform:scale(1.2)}.video-container .controls button.volume svg path,.video-container .controls button.full-screen svg{fill:none}.video-container .controls .title{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center;padding:0 8px;margin:0;font-size:1rem}.video-container .controls .title .series{color:#fefefe;font-weight:700;font-size:1em;line-height:1}.video-container .controls .title .episode{color:#a1a1a1;font-size:.75em;padding-left:8px;line-height:1}@media only screen and (max-width: 768px){.video-container .controls .title{display:none}}.margin-left-auto{margin-left:auto!important}.loader,.loader:before,.loader:after{background:#fff;-webkit-animation:load1 1s infinite ease-in-out;animation:load1 1s infinite ease-in-out;width:1em;height:4em;z-index:100}.loader{color:#fff;text-indent:-9999em;margin:88px auto;font-size:11px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s;position:absolute}.loader:before,.loader:after{position:absolute;top:0;content:\"\"}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}\n"] }]
    }], () => [{ type: i1.Router }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i11.CeeApiService }, { type: i12.DomSanitizer }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], video: [{
            type: ViewChild,
            args: ['video']
        }], videoContainer: [{
            type: ViewChild,
            args: ['videoContainer']
        }], progressBar: [{
            type: ViewChild,
            args: ['progressBar']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeVideoComponent, { className: "CeeVideoComponent", filePath: "lib\\field-components\\cee-video\\cee-video.component.ts", lineNumber: 35 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXZpZGVvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS12aWRlby9jZWUtdmlkZW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXZpZGVvL2NlZS12aWRlby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBc0QsTUFBTSxFQUFZLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVuTCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFZN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBM0IsQUFERiwrQkFBb0QsaUJBQ1g7SUFHckMsQUFEQSxBQURBLDBCQUFxRSxjQUNGLGNBQ3ZDO0lBQzlCLGlCQUFNO0lBQ04sK0JBQTRCO0lBQzFCLFlBQ0Y7SUFDRixBQURFLGlCQUFNLEVBQ0Y7OztJQVB1QixlQUFxQztJQUFyQyxxREFBcUM7SUFDdEMsY0FBb0M7SUFBcEMsb0RBQW9DO0lBSTVELGVBQ0Y7SUFERSx5REFDRjs7OztJQUdBLHFDQUF1RjtJQUF0Qiw2TEFBUyxrQkFBVyxLQUFDOztJQUNwRixr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Y0FBYztrQkFBMUMsU0FBUzttQkFBQyxnQkFBZ0I7WUFDRCxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWE7O2tGQXhCZixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbmplY3QsIFZFUlNJT04sICBWaWV3Q2hpbGQsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBZb3VUdWJlUGxheWVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIveW91dHViZS1wbGF5ZXInO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW50ZXJmYWNlIERvY3VtZW50IGV4dGVuZHMgSFRNTERvY3VtZW50IHtcclxuICAgIG1vekNhbmNlbEZ1bGxTY3JlZW46ICgpID0+IHZvaWQ7XHJcbiAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcclxuICAgIG1vekZ1bGxTY3JlZW5FbGVtZW50OiAoKSA9PiB2b2lkO1xyXG4gICAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLXZpZGVvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtdmlkZW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLXZpZGVvLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBpbXBvcnRzOiBbWW91VHViZVBsYXllck1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBzY2hlbWFzOltDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlVmlkZW9Db21wb25lbnQgZXh0ZW5kcyBCYXNlVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcblxyXG4gICAgZGlzcGxheUNvbnRyb2xsc09wYWNpdHkgPSAwO1xyXG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICBpc0Z1bGxWb2x1bWUgPSB0cnVlO1xyXG4gICAgaXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICB3YXRjaGVkUHJvZ3Jlc3MgPSAwO1xyXG4gICAgbG9hZFBlcmNlbnRhZ2UgPSAwO1xyXG4gICAgaXNMb2FkaW5nQ29udGVudCA9IGZhbHNlO1xyXG4gICAgZHVyYXRpb25SZW1haW5pbmcgPSAnMDA6MDAnO1xyXG4gICAgY29udHJvbHNUaW1lb3V0OiBhbnk7XHJcblxyXG4gICAgVGFyZ2V0OiBzdHJpbmc7XHJcbiAgICBhZGRpdGlvbmFsUGFyYW1ldGVycyA9IHt9O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3ZpZGVvJykgdmlkZW86IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCd2aWRlb0NvbnRhaW5lcicpIHZpZGVvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgncHJvZ3Jlc3NCYXInKSBwcm9ncmVzc0JhcjogRWxlbWVudFJlZjtcclxuICAgIHZpZGVvRWxlbWVudDogSFRNTFZpZGVvRWxlbWVudDtcclxuXHJcbiAgICBwbGF5UGF1c2VCdG46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZmFzdEZvcndhcmRCdG46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgbXV0ZUJ0bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgbmV4dEJ0bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBmdWxsc2NyZWVuQnRuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNob3dQcm9ncmVzczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBcclxuICAgIGVtYmVkSWQ7XHJcbiAgICBlbWJlZFVybDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBub3JtYWxJZDogc3RyaW5nO1xyXG4gICAgbm9ybWFsVXJsOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHlvdXR1YmVJZDpzdHJpbmc7XHJcbiAgICB5b3V0dWJlVXJsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBkaXNwbGF5Q29udHJvbHNUaW1vdXQ6IG51bWJlciA9IDUwMDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgICAgICBcclxuICAgICAgaWYgKCF0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3RWaWRlb0lkKHVybCwgcmVnZXgpIHtcclxuICAgICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnZXgpO1xyXG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hbMV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0RvbWFpbkluY2x1ZGVkKHRhcmdldERvbWFpbiwgbGluaykge1xyXG4gICAgICB0YXJnZXREb21haW4gPSB0YXJnZXREb21haW4udG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgIHN3aXRjaCAodGFyZ2V0RG9tYWluKSB7XHJcbiAgICAgICAgY2FzZSBcInd3dy55b3V0dWJlLmNvbVwiOlxyXG4gICAgICAgICAgICAgIGNvbnN0IHlvdXR1YmVSZWdleCA9IC8oPzp5b3V0dWJlXFwuY29tXFwvKD86Lio/KD86Wz8mXXY9fFxcL2VtYmVkXFwvfFxcL3ZcXC98XFwvd2F0Y2hcXD92PSkpfHlvdXR1XFwuYmVcXC8pKFteXCImP1xcLyBdezExfSkvO1xyXG4gICAgICAgICAgICAgIHRoaXMueW91dHViZUlkID0gdGhpcy5leHRyYWN0VmlkZW9JZChsaW5rLHlvdXR1YmVSZWdleCk7XHJcbiAgICAgICAgICAgICAgdGhpcy55b3V0dWJlVXJsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmluaXRhbGl6ZVlvdXR1YmUoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwid3d3Lmluc3RhZ3JhbS5jb21cIjpcclxuICAgICAgICAgICAgICBjb25zdCBpbnN0YVJlZ2V4ID0gL2luc3RhZ3JhbVxcLmNvbVxcL3BcXC8oW0EtWmEtejAtOV8tXSspLztcclxuICAgICAgICAgICAgICB0aGlzLmVtYmVkVXJsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjb25zdCBpbnN0YXVybCA9IHRoaXMuZXh0cmFjdFZpZGVvSWQobGluayxpbnN0YVJlZ2V4KTtcclxuICAgICAgICAgICAgICB0aGlzLmVtYmVkSWQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoaW5zdGF1cmwpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ2aW1lby5jb21cIjpcclxuICAgICAgICAgICAgICBjb25zdCB2aW1lb1JlZ2V4ID0gL3ZpbWVvXFwuY29tXFwvKFxcZCspLztcclxuICAgICAgICAgICAgICB0aGlzLmVtYmVkVXJsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjb25zdCB2aW1lb3VybCA9IFwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL1wiICsgdGhpcy5leHRyYWN0VmlkZW9JZChsaW5rLHZpbWVvUmVnZXgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZW1iZWRJZCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh2aW1lb3VybCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInd3dy5mYWNlYm9vay5jb21cIjpcclxuICAgICAgICAgICAgICBjb25zdCBmYlJlZ2V4ID0gLyg/OmZhY2Vib29rXFwuY29tXFwvW14vXStcXC92aWRlb3NcXC98ZmFjZWJvb2tcXC5jb21cXC92aWRlb1xcLnBocFxcP3Y9fGZhY2Vib29rXFwuY29tXFwvd2F0Y2hcXC9cXD92PSkoWzAtOV0rKS87XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWJlZFVybCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmJ1cmwgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3ZpZGVvLnBocD9ocmVmPWh0dHBzJTNBJTJGJTJGd3d3LmZhY2Vib29rLmNvbSUyRmZhY2Vib29rJTJGdmlkZW9zJTJGXCIgKyB0aGlzLmV4dHJhY3RWaWRlb0lkKGxpbmssZmJSZWdleCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWJlZElkID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGZidXJsKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHRoaXMubm9ybWFsVXJsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLm5vcm1hbElkID0gbGluaztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3REb21haW4odXJsKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IHVybE9iai5ob3N0bmFtZTtcclxuICAgICAgICByZXR1cm4gZG9tYWluO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGFsaXplWW91dHViZSgpe1xyXG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgdGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICAvLyBvbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgdGhpcy5yb3dEYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBcGlEYXRhKHRoaXMuZmllbGREYXRhLCB0aGlzLnJvd0RhdGEudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgbGV0IHVybFZhbHVlID0geC5zcGxpdChcInx8XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkb21haW4gPSB0aGlzLmV4dHJhY3REb21haW4odXJsVmFsdWVbMV0pO1xyXG4gICAgICAgICAgICBpZih1cmxWYWx1ZVswXSAhPSBcImVtYmVkVXJsXCIpe1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNEb21haW5JbmNsdWRlZChkb21haW4sIHVybFZhbHVlWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1iZWRVcmwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWJlZElkID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVybFZhbHVlWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXVybFZhbHVlWzJdICYmICF0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICAgIHVybFZhbHVlWzJdID0gdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICBjYXNlICdQbGF5IGFuZCBQYXVzZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlQYXVzZUJ0biA9IHBhcmFtdGVyLnZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ0Zhc3QgRm9yd2FyZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhc3RGb3J3YXJkQnRuID0gcGFyYW10ZXIudmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSAnTXV0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGVCdG4gPSBwYXJhbXRlci52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBjYXNlICdUaXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXRsZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ05leHQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0QnRuID0gcGFyYW10ZXIudmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSAnRnVsbHNjcmVlbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bGxzY3JlZW5CdG4gPSBwYXJhbXRlci52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBjYXNlICdTaG93UHJvZ3Jlc3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MgPSBwYXJhbXRlci52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRBcGlEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMuZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICAgICAgbGV0IHVybFZhbHVlID0gY29uZmlnLnNwbGl0KFwifHxcIik7XHJcbiAgICAgICAgICAgIGlmICghdXJsVmFsdWVbMl0gJiYgIXRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxWYWx1ZVsyXSA9IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzZXRBcGlEYXRhKGNvbmZpZywgZGF0YSkge1xyXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VfYXBpX2tleSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShjb25maWcucmVzcG9uc2VfYXBpX2tleSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMucHVzaChsaW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL3Rocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICAvL3Rocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0RGF0YSgpIHsgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBzcGVjaWFsIGV2ZW50IGhhbmRsZWQgZm9yIGxpbmsgdHlwZXNcclxuICAgICovXHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgfVxyXG5cclxuICAgICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMubm9ybWFsVXJsKXtcclxuICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50ID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy52aWRlb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q29udHJvbHMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBsYXlQYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnS2V5TScpIHtcclxuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU11dGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0tleUYnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q29udHJvbHMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlZFByb2dyZXNzID1cclxuICAgICAgICAgICAgICAodGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgLyB0aGlzLnZpZGVvRWxlbWVudC5kdXJhdGlvbikgKiAxMDA7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFNlY29uZHNSZW1haW5pbmcgPVxyXG4gICAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50LmR1cmF0aW9uIC0gdGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShudWxsKTtcclxuICAgICAgICAgICAgdGltZS5zZXRTZWNvbmRzKHRvdGFsU2Vjb25kc1JlbWFpbmluZyk7XHJcbiAgICAgICAgICAgIGxldCBob3VycyA9IG51bGw7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBpZiAodG90YWxTZWNvbmRzUmVtYWluaW5nID49IDM2MDApIHtcclxuICAgICAgICAgICAgICBob3VycyA9IHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIGxldCBtaW51dGVzID0gdGltZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kcyA9IHRpbWUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb25SZW1haW5pbmcgPSBgJHtcclxuICAgICAgICAgICAgICBob3VycyA/IGhvdXJzICsgJzonIDogJydcclxuICAgICAgICAgICAgfSR7bWludXRlc306JHtzZWNvbmRzfWA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJFbGUgPSB0aGlzLnByb2dyZXNzQmFyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9XHJcbiAgICAgICAgICAgICAgKGV2ZW50LnBhZ2VYIC1cclxuICAgICAgICAgICAgICAgIChwcm9ncmVzc0JhckVsZS5vZmZzZXRMZWZ0ICsgcHJvZ3Jlc3NCYXJFbGUub2Zmc2V0TGVmdCkpIC9cclxuICAgICAgICAgICAgICBwcm9ncmVzc0JhckVsZS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgPSBwb3MgKiB0aGlzLnZpZGVvRWxlbWVudC5kdXJhdGlvbjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSAwO1xyXG4gICAgICAgICAgICB2YXIgYmYgPSB0aGlzLnZpZGVvRWxlbWVudC5idWZmZXJlZDtcclxuICAgICAgICAgICAgdmFyIHRpbWUgPSB0aGlzLnZpZGVvRWxlbWVudC5jdXJyZW50VGltZTtcclxuICAgICAgICAgICAgd2hpbGUgKCEoYmYuc3RhcnQocmFuZ2UpIDw9IHRpbWUgJiYgdGltZSA8PSBiZi5lbmQocmFuZ2UpKSkge1xyXG4gICAgICAgICAgICAgIHJhbmdlICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGxvYWRTdGFydFBlcmNlbnRhZ2UgPSBiZi5zdGFydChyYW5nZSkgLyB0aGlzLnZpZGVvRWxlbWVudC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgdmFyIGxvYWRFbmRQZXJjZW50YWdlID0gYmYuZW5kKHJhbmdlKSAvIHRoaXMudmlkZW9FbGVtZW50LmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRQZXJjZW50YWdlID0gbG9hZEVuZFBlcmNlbnRhZ2UgKiAxMDA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGxheWluZycsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nQ29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBkaXNwbGF5Q29udHJvbHMoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5Q29udHJvbGxzT3BhY2l0eSA9IDE7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnaW5pdGlhbCc7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbHNUaW1lb3V0KSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jb250cm9sc1RpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRyb2xzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUNvbnRyb2xsc09wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q29udHJvbGxzT3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdub25lJztcclxuICAgICAgICB9LCB0aGlzLmRpc3BsYXlDb250cm9sc1RpbW91dCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwbGF5UGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9FbGVtZW50LnBhdXNlZCkge1xyXG4gICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQucGxheSgpO1xyXG4gICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICB0b2dnbGVNdXRlKCkge1xyXG4gICAgICAgIHRoaXMudmlkZW9FbGVtZW50Lm11dGVkID0gIXRoaXMudmlkZW9FbGVtZW50Lm11dGVkO1xyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvRWxlbWVudC5tdXRlZCkge1xyXG4gICAgICAgICAgdGhpcy5pc0Z1bGxWb2x1bWUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pc0Z1bGxWb2x1bWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICYmXHJcbiAgICAgICAgICAhKGRvY3VtZW50IGFzIERvY3VtZW50KS53ZWJraXRGdWxsc2NyZWVuRWxlbWVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5vcGVuRnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlRnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIG9wZW5GdWxsc2NyZWVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHRoaXMudmlkZW9Db250YWluZXIubmF0aXZlRWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWRlb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAvKiBTYWZhcmkgKi9cclxuICAgICAgICAgIHRoaXMudmlkZW9Db250YWluZXIubmF0aXZlRWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8qIENsb3NlIGZ1bGxzY3JlZW4gKi9cclxuICAgICAgY2xvc2VGdWxsc2NyZWVuKCkge1xyXG4gICAgICAgIGlmICgoZG9jdW1lbnQgYXMgRG9jdW1lbnQpLmV4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAoZG9jdW1lbnQgYXMgRG9jdW1lbnQpLmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoZG9jdW1lbnQgYXMgRG9jdW1lbnQpLndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAvKiBTYWZhcmkgKi9cclxuICAgICAgICAgIChkb2N1bWVudCBhcyBEb2N1bWVudCkud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBhZGRUaW1lKHNlY29uZHM6IG51bWJlciA9IDEwKSB7XHJcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgKz0gc2Vjb25kcztcclxuICAgICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgPGRpdiAjdmlkZW9Db250YWluZXIgKm5nSWY9XCJub3JtYWxVcmxcIiBjbGFzcz1cInZpZGVvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUuZGlzcGxheV09XCJpc0xvYWRpbmdDb250ZW50ID8gJycgOiAnbm9uZSdcIiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICN2aWRlb1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MjB2aFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17e25vcm1hbElkfX1cclxuICAgICAgICAgICAgICAgID48L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAjY29udHJvbHNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb250cm9scy1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJkaXNwbGF5Q29udHJvbGxzT3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1jb250cm9sc1wiICpuZ0lmPVwic2hvd1Byb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAjcHJvZ3Jlc3NCYXIgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3YXRjaGVkLWJhclwiIFtzdHlsZS53aWR0aF09XCJ3YXRjaGVkUHJvZ3Jlc3MgKyAnJSdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZWQtYmFyXCIgW3N0eWxlLndpZHRoXT1cImxvYWRQZXJjZW50YWdlICsgJyUnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWhlYWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1yZW1haW5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IGR1cmF0aW9uUmVtYWluaW5nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICNwbGF5UGF1c2VCdXR0b24gKm5nSWY9XCJwbGF5UGF1c2VCdG5cIiBjbGFzcz1cInBsYXktcGF1c2VcIiAoY2xpY2spPVwicGxheVBhdXNlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3BsYXlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwbGF5aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiaXNQbGF5aW5nID8gJ25vbmUnIDogJydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjUgMyAxOSAxMiA1IDIxIDUgM1wiPjwvcG9seWdvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcGF1c2VCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYXVzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJpc1BsYXlpbmcgPyAnJyA6ICdub25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNlwiIHk9XCI0XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTZcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxNFwiIHk9XCI0XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMTZcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmV3aW5kXCIgKm5nSWY9XCJmYXN0Rm9yd2FyZEJ0blwiIChjbGljayk9XCJhZGRUaW1lKC0xMClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMi41LDNDMTcuMTUsMyAyMS4wOCw2LjAzIDIyLjQ3LDEwLjIyTDIwLjEsMTFDMTkuMDUsNy44MSAxNi4wNCw1LjUgMTIuNSw1LjVDMTAuNTQsNS41IDguNzcsNi4yMiA3LjM4LDcuMzhMMTAsMTBIM1YzTDUuNiw1LjZDNy40NSw0IDkuODUsMyAxMi41LDNNMTAsMTJWMjJIOFYxNEg2VjEySDEwTTE4LDE0VjIwQzE4LDIxLjExIDE3LjExLDIyIDE2LDIySDE0QTIsMiAwIDAsMSAxMiwyMFYxNEEyLDIgMCAwLDEgMTQsMTJIMTZDMTcuMTEsMTIgMTgsMTIuOSAxOCwxNE0xNCwxNFYyMEgxNlYxNEgxNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZhc3QtZm9yd2FyZFwiICpuZ0lmPVwiZmFzdEZvcndhcmRCdG5cIiAoY2xpY2spPVwiYWRkVGltZSgxMClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMCwxMlYyMkg4VjE0SDZWMTJIMTBNMTgsMTRWMjBDMTgsMjEuMTEgMTcuMTEsMjIgMTYsMjJIMTRBMiwyIDAgMCwxIDEyLDIwVjE0QTIsMiAwIDAsMSAxNCwxMkgxNkMxNy4xMSwxMiAxOCwxMi45IDE4LDE0TTE0LDE0VjIwSDE2VjE0SDE0TTExLjUsM0MxNC4xNSwzIDE2LjU1LDQgMTguNCw1LjZMMjEsM1YxMEgxNEwxNi42Miw3LjM4QzE1LjIzLDYuMjIgMTMuNDYsNS41IDExLjUsNS41QzcuOTYsNS41IDQuOTUsNy44MSAzLjksMTFMMS41MywxMC4yMkMyLjkyLDYuMDMgNi44NSwzIDExLjUsM1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAjdm9sdW1lQnV0dG9uIGNsYXNzPVwidm9sdW1lXCIgKm5nSWY9XCJtdXRlQnRuXCIgKGNsaWNrKT1cInRvZ2dsZU11dGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZnVsbFZvbHVtZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJpc0Z1bGxWb2x1bWUgPyAnJyA6ICdub25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC12b2x1bWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTEgNSA2IDkgMiA5IDIgMTUgNiAxNSAxMSAxOSAxMSA1XCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTkuMDcgNC45M2ExMCAxMCAwIDAgMSAwIDE0LjE0TTE1LjU0IDguNDZhNSA1IDAgMCAxIDAgNy4wN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgI211dGVkQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImlzRnVsbFZvbHVtZSA/ICdub25lJyA6ICcnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtdXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDVcIj48L3BvbHlnb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjNcIiB5MT1cIjlcIiB4Mj1cIjE3XCIgeTI9XCIxNVwiPjwvbGluZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxN1wiIHkxPVwiOVwiIHgyPVwiMjNcIiB5Mj1cIjE1XCI+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiICpuZ0lmPVwic2hvd1RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlcmllc1wiPnt7c2hvd1RpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVwaXNvZGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0IG1hcmdpbi1sZWZ0LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI1IDQgMTUgMTIgNSAyMCA1IDRcIj48L3BvbHlnb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMTlcIiB5MT1cIjVcIiB4Mj1cIjE5XCIgeTI9XCIxOVwiPjwvbGluZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICNmdWxsU2NyZWVuQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZ1bGxzY3JlZW5CdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXNjcmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRnVsbFNjcmVlbigpXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNtYXhpbWl6ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1heGltaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwiaXNGdWxsU2NyZWVuID8gJ25vbmUnIDogJydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbWluaW1pemVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtaW5pbWl6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cImlzRnVsbFNjcmVlbiA/ICcnIDogJ25vbmUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJlbWJlZFVybFwiIGNsYXNzPVwidmlkZW8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJ7e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19XCJcclxuICAgICAgICAgICAgICAgIFtzcmNdPVwiZW1iZWRJZFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTIwdmhcIlxyXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgICAgd2Via2l0YWxsb3dmdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwieW91dHViZVVybFwiPlxyXG4gICAgICAgICAgICAgIDx5b3V0dWJlLXBsYXllclxyXG4gICAgICAgICAgICAgICAgW3ZpZGVvSWRdPVwieW91dHViZUlkXCJcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZFF1YWxpdHk9XCJoaWdocmVzXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjUyMHZoXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgIDwveW91dHViZS1wbGF5ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=