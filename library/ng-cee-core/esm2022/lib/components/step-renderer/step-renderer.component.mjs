import { Component, Input, HostListener, forwardRef, ViewChild } from '@angular/core';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { SessionTimeoutUtil } from '../../utils/session-timeout-util';
import { ESBRequestBodyUtil } from '../../utils/esb-request-body-utils';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { ModalRendererComponent } from '../modal-renderer/modal-renderer.component';
import { CommonUtil } from '../../utils/common-util';
import { SidemenuUtil } from '../../utils/sidemenu-util';
import ExternalRequestResponseUtil from '../../utils/external-request-response.util';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import jQuery from 'jquery';
import { EmptyUtil } from '../../utils/empty-util';
import { ApplicationStateStoreUtil } from '../../utils/application-state-store-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { RedirectionUtil } from '../../utils/redirection-util';
import { take } from 'rxjs/operators';
import { ProgressBarRendererComponent } from '../progress-bar-renderer/progress-bar-renderer.component';
import { SectionRendererComponent } from '../section-renderer/section-renderer.component';
import { DynamicRendererComponent } from '../dynamic-renderer/dynamic-renderer.component';
import { BlockRendererComponent } from '../block-renderer/block-renderer.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DrawerComponent } from '../drawer-renderer/drawer-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "../../services/cee-api-service.service";
import * as i4 from "../../services/shared-events-service.service";
import * as i5 from "../../services/user-data-handler.service";
import * as i6 from "../../services/accordian-services";
import * as i7 from "@angular/platform-browser";
import * as i8 from "@ng-idle/core";
import * as i9 from "@ng-idle/keepalive";
import * as i10 from "../../services/wfe-step-loader.service";
import * as i11 from "../../models/app-data/app-data.service";
import * as i12 from "../../models/api-data/api-data.service";
import * as i13 from "@angular/common/http";
import * as i14 from "@angular/material/dialog";
import * as i15 from "@angular/material/snack-bar";
import * as i16 from "../../services/loader-service";
import * as i17 from "../../services/internal-cee-emitter-service.service";
import * as i18 from "../../services/socketio.service";
import * as i19 from "../../services/event-response-handler.service";
import * as i20 from "../../services/cee-init-service.service";
import * as i21 from "../../utils/wfe-conditional-query-executer-util";
function StepRendererComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementEnd()();
} }
function StepRendererComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cee-drawer-renderer", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r0.drawerRenderer == null ? null : ctx_r0.drawerRenderer.data == null ? null : ctx_r0.drawerRenderer.data.stepId)("data", ctx_r0.drawerRenderer == null ? null : ctx_r0.drawerRenderer.data)("rootData", ctx_r0.rootData);
} }
function StepRendererComponent_ng_container_3_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 7);
    i0.ɵɵelement(1, "app-block-renderer", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("sub-menu-container ", ctx_r0.hamburgermenuBlockAdditionalParameter["displayPosition"] || "left", "");
    i0.ɵɵpropertyInterpolate1("id", "navblock-", ctx_r0.stepData.tid, "");
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("block-0 hamburgermenu hamburgermenu-", ctx_r0.hamburgermenuBlockData.block_id, " hamburgermenu-0");
    i0.ɵɵproperty("stepId", ctx_r0.stepData.tid)("templateId", ctx_r0.templateId)("blockId", ctx_r0.hamburgermenuBlockData)("blockPosition", 0)("rootData", ctx_r0.rootData);
} }
function StepRendererComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StepRendererComponent_ng_container_3_section_1_Template, 2, 15, "section", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.stepData && ctx_r0.blocksData);
} }
function StepRendererComponent_section_4_app_block_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-block-renderer", 8);
} if (rf & 2) {
    const block_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate4("block-", i_r3, " header header-", block_r2.block_id, " header-", i_r3, " ", ctx_r0.is_bootstrap ? "col-12" : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepData.tid)("templateId", ctx_r0.templateId)("blockId", block_r2)("blockPosition", i_r3)("rootData", ctx_r0.rootData);
} }
function StepRendererComponent_section_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-dynamic-renderer", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("cee_loader cee_loader_", ctx_r0.stepId, "");
} }
function StepRendererComponent_section_4_ng_container_3_app_section_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-section-renderer", 13);
} if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const pos_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("section-", pos_r5, " block-main-", pos_r5, " ", section_r4.section_style ? ctx_r0.commonUtil.bootstrapColClass(ctx_r0.commonUtil.implodeClassName(section_r4.section_style.bootstrap_class_name), ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(section_r4)) : "", "");
    i0.ɵɵproperty("hidden", ctx_r0.loader.showSection)("templateId", ctx_r0.templateId)("sectionData", section_r4)("stepPosition", pos_r5)("stepId", ctx_r0.stepData.tid)("stepName", ctx_r0.stepData.step_name)("sideBarData", ctx_r0.sideBarData)("rootData", ctx_r0.rootData);
} }
function StepRendererComponent_section_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StepRendererComponent_section_4_ng_container_3_app_section_renderer_1_Template, 1, 13, "app-section-renderer", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.stepData.section)("ngForTrackBy", ctx_r0.trackBySection);
} }
function StepRendererComponent_section_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵelement(3, "app-progress-bar-renderer", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.progressBlock["progress"]["bootstrap_class_name"] ? ctx_r0.progressBlock["progress"]["bootstrap_class_name"] : "col-12");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.progressBlock["progress"]["custom_class_name"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("progressBlock", ctx_r0.progressBlock["progress"])("stateIdMap", ctx_r0.progressBlock["steps"])("currentStep", ctx_r0.stepId);
} }
function StepRendererComponent_section_4_app_block_renderer_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-block-renderer", 8);
} if (rf & 2) {
    const block_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate4("block-", i_r7, " footer footer-", block_r6.block_id, " footer-", i_r7, " ", ctx_r0.is_bootstrap ? "col-12" : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepData.tid)("templateId", ctx_r0.templateId)("blockId", block_r6)("blockPosition", i_r7)("rootData", ctx_r0.rootData);
} }
function StepRendererComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 7);
    i0.ɵɵtemplate(1, StepRendererComponent_section_4_app_block_renderer_1_Template, 1, 11, "app-block-renderer", 9)(2, StepRendererComponent_section_4_div_2_Template, 2, 3, "div", 10)(3, StepRendererComponent_section_4_ng_container_3_Template, 2, 2, "ng-container", 1)(4, StepRendererComponent_section_4_ng_container_4_Template, 4, 9, "ng-container", 1)(5, StepRendererComponent_section_4_app_block_renderer_5_Template, 1, 11, "app-block-renderer", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate3("step-body step-", ctx_r0.stepData ? ctx_r0.stepData.tid : "", " ", ctx_r0.stepData && ctx_r0.stepData.step_style ? ctx_r0.commonUtil.implodeClassName(ctx_r0.stepData.step_style.custom_class_name) : "", " ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate1("id", "stepblock-", ctx_r0.stepData ? ctx_r0.stepData.tid : "", "");
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.headerBlocksData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loader.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.stepData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.progressBlock["progress"] && ctx_r0.progressBlock["progress"]["MapToStep"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.footerBlocksData);
} }
// if you want to use $ as an alias
const $ = jQuery;
export class StepRendererComponent {
    router;
    location;
    route;
    ceeApiService;
    sharedEventsService;
    storageService;
    accordionService;
    titleService;
    idle;
    keepalive;
    wfeStepLoaderService;
    appDataService;
    apiDataService;
    http;
    dialog;
    snackBar;
    locationStrategy;
    loaderService;
    interCEEEmitter;
    metaService;
    socketService;
    eventResponseHandler;
    ceeInitService;
    wfeConditionalExecuter;
    keyValueMap = new Map();
    borrowerIdMap = new Map();
    stepId;
    startSession;
    drawerComponent;
    templateId = '';
    stepDataBody = {};
    blockJsonData = {};
    drawerRenderer = {
        data: {
            stepId: ""
        }
    };
    stepData;
    blocksData = [];
    headerBlocksData = [];
    hamburgermenuBlockData = null;
    hamburgermenuBlockAdditionalParameter = {};
    footerBlocksData = [];
    sequenceData;
    updatedSeqData;
    showLoading = true;
    defaultStepId;
    visible = true;
    stepIsComplete;
    seqArray = [];
    modalStepId;
    modalIds = [];
    rootData = {};
    additionalParameter = {};
    globalParameters = {}; // variable to store the global parameters on step load
    variableObj = {};
    globalPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = '/application_blocks/application_blocks_';
    sessionTimeoutUtil;
    esbRequestBodyUtil;
    flatUnflat;
    wfeEventListHandler;
    applicationStateStore;
    overrideBackButtonValue;
    navigateStepName = false;
    navigateStepNameOnly = false;
    is_bootstrap = false;
    hasOnLeaveEvent = false;
    container_type;
    commonUtil;
    sidemenuUtil;
    conditionalUtil;
    externalRequestResponseUtil;
    setApiCallBackUtil;
    apiConfigPath = 'assets/jsons/api_config.json';
    checkEmpty;
    redirectionUtil;
    progressBlock = {};
    loader = {
        name: 'CEE_LOADER',
        showSection: false
    };
    showStepLoader = false;
    stepLoaderTimeout;
    rbs = [];
    lastRBRendered = false;
    isReloadPage = false;
    modalGenericCssClass = '';
    warnOnMultiTabsMsg = '';
    intervalId;
    stopCacheLoader = () => { };
    enableSubdomainHandling = false;
    sideBarData = {};
    responseResult;
    constructor(router, location, route, ceeApiService, sharedEventsService, storageService, accordionService, titleService, idle, keepalive, wfeStepLoaderService, appDataService, apiDataService, http, dialog, snackBar, locationStrategy, loaderService, interCEEEmitter, metaService, socketService, eventResponseHandler, ceeInitService, wfeConditionalExecuter) {
        this.router = router;
        this.location = location;
        this.route = route;
        this.ceeApiService = ceeApiService;
        this.sharedEventsService = sharedEventsService;
        this.storageService = storageService;
        this.accordionService = accordionService;
        this.titleService = titleService;
        this.idle = idle;
        this.keepalive = keepalive;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.http = http;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.locationStrategy = locationStrategy;
        this.loaderService = loaderService;
        this.interCEEEmitter = interCEEEmitter;
        this.metaService = metaService;
        this.socketService = socketService;
        this.eventResponseHandler = eventResponseHandler;
        this.ceeInitService = ceeInitService;
        this.wfeConditionalExecuter = wfeConditionalExecuter;
        // ******************* Start: To warn user before openning site in multiple tabs **********************
        if (this.globalParameters["CEE_WARN_ON_MULTI_TABS"] && this.globalParameters["CEE_WARN_ON_MULTI_TABS"] != "") {
            this.warnOnMultiTabsMsg = this.globalParameters["CEE_WARN_ON_MULTI_TABS"] ? this.globalParameters["CEE_WARN_ON_MULTI_TABS"] : "Site already opened in another tab, data can be lost! Would you want to continue?";
            if (window.location.origin == localStorage.getItem('domain')) {
                const dialogRef = this.dialog.open(AlertModalComponent, {
                    data: {
                        message: this.warnOnMultiTabsMsg
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (!result) {
                        this.router.navigateByUrl('/wfe/step/404');
                    }
                });
            }
            else {
                localStorage.setItem('domain', window.location.origin);
            }
            window.onbeforeunload = function () {
                localStorage.removeItem('domain');
                return '';
            };
        }
        // ******************* End: To warn user before openning site in multiple tabs **********************
        this.sessionTimeoutUtil = new SessionTimeoutUtil(idle, keepalive, router, dialog, wfeStepLoaderService, appDataService, apiDataService);
        this.esbRequestBodyUtil = new ESBRequestBodyUtil(apiDataService);
        this.flatUnflat = new FlatUnflat(appDataService);
        this.setApiCallBackUtil = new SetAPICallbackData(apiDataService, appDataService);
        this.externalRequestResponseUtil = new ExternalRequestResponseUtil(http, appDataService, apiDataService, sharedEventsService);
        this.wfeEventListHandler = new WFEEventListHandler(ceeApiService, router, sharedEventsService, interCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.sidemenuUtil = new SidemenuUtil(apiDataService);
        this.checkEmpty = new EmptyUtil();
        this.applicationStateStore = new ApplicationStateStoreUtil(this.appDataService);
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.redirectionUtil = new RedirectionUtil(router);
        if (this.wfeStepLoaderService.rootData && Object.keys(this.wfeStepLoaderService.rootData).length) {
            this.rootData = this.wfeStepLoaderService.rootData;
        }
        if (!Object.keys(this.rootData).length) {
            this.rootData = {};
            this.wfeStepLoaderService.rootData = this.rootData;
            this.rootData['FieldLoadStack'] = {
                add: function () {
                    loaderService.loadingStack++;
                    loaderService.isLoading.next(true);
                },
                remove: function () {
                    loaderService.loadingStack--;
                    if (loaderService.loadingStack === 0) {
                        loaderService.isLoading.next(false);
                    }
                    else {
                        loaderService.isLoading.next(true);
                    }
                }
            };
            this.rootData['sectionFields'] = {};
            this.rootData['blockFields'] = {};
            this.rootData['templateClass'] = '';
            this.rootData['FieldErrorFunctions'] = {};
            this.rootData['ArithmeticNames'] = {};
            this.rootData['_ArithmeticNames'] = {};
        }
        // this.location.onUrlChange(x => this.urlChange(x));
        setTimeout(async () => {
            // ############## Auto Save Handler Data  ##############
            // console.log("###############processBaseJSON###################",this.globalParameters["AutoSaveAPI"],"  ",this.globalParameters["AutoSaveTime"])
            const handler = this.globalParameters["AutoSaveAPI"] ? this.globalParameters["AutoSaveAPI"] : '';
            const timeInterval = this.globalParameters["AutoSaveTime"] ? Number(this.globalParameters["AutoSaveTime"]) : 60; // given in seconds
            if (handler && timeInterval) {
                const appConfigData = await this.http.get(this.apiConfigPath).toPromise();
                const handlerConfig = appConfigData['config'] ? appConfigData['config'].filter((item) => { return (item.id === handler); })[0] : null;
                const accessToken = this.commonUtil.returnAccessToken();
                if (this.intervalId) {
                    clearInterval(this.intervalId);
                }
                if (!handlerConfig['hasAuthorisation'] || (handlerConfig['hasAuthorisation'] && (accessToken && accessToken != "."))) {
                    this.intervalId = setInterval(() => {
                        this.runAutoSaveProcess(handlerConfig);
                    }, timeInterval * 1000);
                    // console.log("Constructor::interval id: ",this.intervalId)
                }
            }
            // ############## Connect to Socket  ##############
            if (localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 0 && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][0]['dataSocketUrl'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][0]['dataSocketUrl'] != "") {
                this.socketService.listenToTheSocket(this.stepId, this.wfeEventListHandler);
            }
        }, 1000);
        this.variableObj['exitWorkflowRes_' + this.stepId] = this.sharedEventsService.exitWorkflowSameStepRedirectEmmiter.subscribe(() => {
            this.setInitData();
        });
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                let executeOnLoadEvents = this.router.getCurrentNavigation()?.extras.state?.executeOnLoadEvents;
                if (executeOnLoadEvents) {
                    this.handleStepEvent('onload');
                }
                if (event.id === 1) { // reload page
                    this.isReloadPage = true;
                }
                else { // route navigate(No reload)
                    this.isReloadPage = false;
                }
                window['blockLogs'] = [];
                window['blockDataLogs'] = [];
            }
            else if (event instanceof NavigationStart) {
                // Check if this is actual page navigation, not just hash/fragment change
                const currentUrlWithoutFragment = this.router.url.split('#')[0];
                const targetUrlWithoutFragment = event.url.split('#')[0];
                // Only trigger onunload for actual page changes, not hash navigation
                if (currentUrlWithoutFragment !== targetUrlWithoutFragment) {
                    this.handleStepEvent('onunload');
                }
            }
        });
        this.sharedEventsService.oidcCheckLoginStatusEmitter.subscribe((res) => {
            this.wfeEventListHandler.emitLoginStateDataToStore(res['handler'], { loginStatus: res['loginStatus'] });
            // ########################### OIDC Check Login Status Emitter ##############################
            const OIDCConnect = localStorage.getItem('OIDCConnect');
            const _this = this;
            const ocIntervel = setInterval(() => {
                if (OIDCConnect) {
                    switch (OIDCConnect) {
                        case 'checkloginstatus':
                            // console.log("checkloginstatus: ", apiData);
                            if (res['loginStatus']) {
                                setTimeout(() => {
                                    _this.handleStepEvent('afterOIDCLogin');
                                }, 500);
                            }
                            else {
                                setTimeout(() => {
                                    _this.handleStepEvent('onLoginStatusFalse');
                                }, 500);
                            }
                            // localStorage.removeItem('columnRstructuringConfig');
                            break;
                    }
                }
            }, 100);
        });
        this.sharedEventsService.oidcApiEmitter.subscribe((apiData) => {
            const OIDCConnect = localStorage.getItem('OIDCConnect');
            if (OIDCConnect) {
                localStorage.removeItem('OIDCConnect');
                const _this = this;
                const ocIntervel = setInterval(() => {
                    if (this.stepData) {
                        switch (OIDCConnect) {
                            case 'login':
                                if (apiData && apiData.response && Object.keys(apiData.response).length > 0) {
                                    const LandingStepId = this.getCookie('LandingStepId');
                                    const postUrl = this.getCookie('postUrl');
                                    let route_Id = window.sessionStorage.getItem('CEE_last_route_id');
                                    let primaryFieldData = {
                                        id: route_Id,
                                        editable: false,
                                        visible: false,
                                        mandatory: false,
                                        value: LandingStepId ? 1 : 0,
                                        apiKey: '',
                                        isValid: true,
                                        stepId: this.stepId,
                                        requestApiKey: [],
                                        responseApiKey: []
                                    };
                                    this.appDataService.setAppData(primaryFieldData);
                                    if (LandingStepId) {
                                        this.setCookie('TargetStepId', LandingStepId, 1);
                                        setTimeout(() => {
                                            // console.log("calling  afterOIDCLogin 1 on: ", new Date().toLocaleString());
                                            _this.handleStepEvent('afterOIDCLogin');
                                        }, 500);
                                        localStorage.removeItem('columnRstructuringConfig');
                                        if (!postUrl) {
                                            this.redirectionUtil.redirectTo(LandingStepId);
                                        }
                                        else {
                                            this.redirectionUtil.redirectTo(LandingStepId, null, postUrl);
                                        }
                                        this.deleteCookie('LandingStepId');
                                        this.deleteCookie('postUrl');
                                    }
                                    else {
                                        setTimeout(() => {
                                            // console.log("calling  afterOIDCLogin 2 on: ", new Date().toLocaleString());
                                            _this.handleStepEvent('afterOIDCLogin');
                                        }, 500);
                                        localStorage.removeItem('columnRstructuringConfig');
                                    }
                                }
                                break;
                            case 'checkloginstatus':
                                if (apiData && apiData.response && Object.keys(apiData.response).length > 0) {
                                    const LandingStepId = this.getCookie('LandingStepId');
                                    const postUrl = this.getCookie('postUrl');
                                    if (LandingStepId) {
                                        this.setCookie('TargetStepId', LandingStepId, 1);
                                        setTimeout(() => {
                                            _this.handleStepEvent('afterOIDCLogin');
                                        }, 500);
                                        localStorage.removeItem('columnRstructuringConfig');
                                        if (!postUrl) {
                                            this.redirectionUtil.redirectTo(LandingStepId);
                                        }
                                        else {
                                            this.redirectionUtil.redirectTo(LandingStepId, "_self", postUrl);
                                        }
                                        this.deleteCookie('LandingStepId');
                                        this.deleteCookie('postUrl');
                                    }
                                }
                                break;
                            case 'logininpopup':
                                apiData && apiData.response && Object.keys(apiData.response).length > 0 &&
                                    _this.handleStepEvent('afterOIDCLogin');
                                localStorage.removeItem('columnRstructuringConfig');
                                break;
                            case 'logout':
                                //
                                break;
                            default:
                                break;
                        }
                        clearInterval(ocIntervel);
                    }
                }, 1000);
            }
        });
        this.variableObj['stepLoader_' + this.stepId] = this.sharedEventsService.stepLoaderEmitter.subscribe((data) => {
            if (!this.showStepLoader)
                return;
            if (this.rbs.length == 0)
                return;
            // console.log("- blockId:", data.blockId);
            if (this.stepLoaderTimeout) {
                clearTimeout(this.stepLoaderTimeout);
            }
            this.stepLoaderTimeout = setTimeout(() => {
                this.showStepLoader = false;
            }, 2000);
        });
        this.variableObj['targetStepRedirection_'] = this.sharedEventsService.targetStepRedirection.subscribe(res => {
            if (res?.event_handler.includes('overRideWorkflow')) {
                this.handleStepEvent('onunload');
            }
        });
        //cee core version update process
        const ceeCoreVersion = localStorage.getItem('CEE_CORE_VERSION');
        const ceeCoreVersionOld = localStorage.getItem('CEE_CORE_VERSION_OLD');
        let reloadFlag = false;
        if (ceeCoreVersion && ceeCoreVersionOld && ceeCoreVersion !== ceeCoreVersionOld) {
            localStorage.clear();
            sessionStorage.clear();
            reloadFlag = true;
        }
        ceeCoreVersion && localStorage.setItem('CEE_CORE_VERSION_OLD', ceeCoreVersion);
        if (reloadFlag) {
            window.location.reload();
        }
    }
    /* urlChange(x) {
        console.log(x);
        this.urlChangedManually = false
    } */
    // *************************************************
    // private returnAccessToken() {
    //     const accessToken = `${this.getCookie('headerPayload')}.${this.getCookie('signature')}`
    //     return accessToken;
    // }
    // private getCookie(name: string) {
    //     const ca: Array<string> = document.cookie.split(';');
    //     const caLen: number = ca.length;
    //     const cookieName = `${name}=`;
    //     let c: string;
    //     for (let i = 0; i < caLen; i += 1) {
    //       c = ca[i].replace(/^\s+/g, '');
    //       if (c.indexOf(cookieName) === 0) {
    //         return c.substring(cookieName.length, c.length);
    //       }
    //     }
    //     return '';
    // }
    setCookie(name, value, daysToExpire) {
        // Encode name and value
        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        // Set expiration if provided
        if (daysToExpire) {
            const date = new Date();
            date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
            cookieString += `; expires=${date.toUTCString()}`;
        }
        // Add security attributes
        cookieString += '; path=/';
        cookieString += '; Secure'; // Only sent over HTTPS
        cookieString += '; SameSite=Strict'; // or 'Lax' if you need some cross-site usage
        // Note: HttpOnly cannot be set via JavaScript - must be set server-side
        // The parameter is included for documentation purposes
        document.cookie = cookieString;
    }
    // setCookie(name: string, value: string, daysToExpire?: number): void {
    //     let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    //     if (daysToExpire) {
    //         const date = new Date();
    //         date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    //         cookieString += `; expires=${date.toUTCString()}`;
    //     }
    //     cookieString += '; path=/';
    //     document.cookie = cookieString;
    // }
    getCookie(name) {
        const nameEQ = encodeURIComponent(name) + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
            }
        }
        return null;
    }
    deleteCookie(name, path = '/', domain) {
        // Set the cookie expiration to a past date
        const pastDate = new Date(0).toUTCString();
        // Build the cookie string
        let cookieString = `${encodeURIComponent(name)}=; expires=${pastDate}; path=${path}`;
        // Add domain if specified
        if (domain) {
            cookieString += `; domain=${domain}`;
        }
        // Set the cookie
        document.cookie = cookieString;
        // Some browsers require sameSite attribute for proper deletion
        if (typeof document.cookie === 'string' && document.cookie.indexOf(name) >= 0) {
            cookieString += '; sameSite=strict';
            document.cookie = cookieString;
        }
    }
    runAutoSaveProcess(apiConfigData) {
        const response = {
            handler: apiConfigData.handler,
            response: null,
            event_success: true,
            storageType: apiConfigData.storageType,
            statusCode: 0
        };
        // console.log("*****************",apiConfigData)
        this.ceeApiCallingService(apiConfigData).subscribe(res => {
            // console.log("@@@@@@@@@@@@@@@",res);
            this.emitDataToCee(response, res, apiConfigData, true);
        }, error => {
            console.error(`Error Occurred for handler: ${apiConfigData.handler} and ${JSON.stringify(error)}`);
        });
    }
    /**
   * function that emits back the api response for a particular api
   * @param response the response object
   * @param res the response
   * @param isEvent if the handler is called from an event
   * @param success if the api res is success
   */
    emitDataToCee(response, res, apiConfigData, success) {
        response.statusCode = res.status;
        response.response = res.body || res.error;
        response.event_success = success;
        /* ESB API INTIGRATION */
        if (apiConfigData.isESB && response.response.api_response) {
            response.response = JSON.parse(response.response.api_response);
        }
        /* ESB API INTIGRATION (END) */
        if (apiConfigData.isEvent) {
            this.sharedEventsService.eventResponseSubscriber.emit(response);
        }
        else {
            this.eventResponseHandler.emitAPIDATA(response);
        }
    }
    /**
   * CEE internal API Service that hits the api
   * @param apiConfigData the api config data for the handler
   * via internal libraries of CEE
   */
    ceeApiCallingService(apiConfigData) {
        //
        const headers = apiConfigData['headers'] ? apiConfigData['headers'] : {};
        // set header request type
        switch (apiConfigData.requestType) {
            case 'application/json':
            case 'multipart/form-data':
            case 'application/x-www-form-urlencoded':
            case 'text/plain':
                headers['Content-Type'] = apiConfigData.requestType;
                break;
            default:
                console.error(`Invalid request type in returnHeaders: ${apiConfigData.requestType}`);
        }
        let apiURL = apiConfigData.url;
        // set url param
        for (const key of Object.keys(apiConfigData.urlParams)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(apiConfigData.urlParams[key]);
            }
        }
        // set query param
        for (const key of Object.keys(apiConfigData.queryParams)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(apiConfigData.queryParams[key]);
            }
        }
        // set request body
        let requestBody = this.formRequestBody(apiConfigData.requestBody, apiConfigData.requestType);
        /* ESB API INTIGRATION */
        if (apiConfigData.isESB) {
            requestBody = {
                api_request: JSON.stringify(requestBody)
            };
        }
        /* ESB API INTIGRATION (END) */
        switch (apiConfigData.methodType.toUpperCase()) {
            case 'POST':
            case 'PUT':
            case 'PATCH':
                return this.http[apiConfigData.methodType.toLowerCase()](apiURL, requestBody, { headers, observe: 'response' });
            case 'DELETE':
            case 'GET':
                return this.http[apiConfigData.methodType.toLowerCase()](apiURL, { headers, observe: 'response' });
        }
    }
    formRequestBody(requestData, type) {
        switch (type) {
            case 'text/plain':
            case 'application/json':
                return requestData;
            case 'multipart/form-data':
                const fd = new FormData();
                for (const key of Object.keys(requestData)) {
                    fd.append(key, requestData[key]);
                }
                return fd;
            case 'application/x-www-form-urlencoded':
                const body = new URLSearchParams();
                for (const key of Object.keys(requestData)) {
                    body.set(key, requestData[key]);
                }
                return body.toString();
            default:
                console.error(`Invalid request type in formRequestBody: ${type}`);
                return {};
        }
    }
    // *************************************************
    get hasUnsavedData() {
        return localStorage.getItem('has_unsaved_data') === 'true' ? true : false;
    }
    get modalOnPageLeave() {
        return localStorage.getItem('modal_on_page_leave') ? localStorage.getItem('modal_on_page_leave') : false;
    }
    // @HostListener('window:beforeunload', ['$event'])
    // unloadNotification($event: any) {
    //     // if (this.globalParameters["externalSitePrompt"] && $event.srcElement.activeElement.localName === 'a') {
    //     //     this.wfeEventListHandler.displayModal({ event_handler: this.globalParameters["externalSitePrompt"] });
    //     //     $event.preventDefault();
    //     //     $event.returnValue = true;
    //     // } else
    //     if (this.hasUnsavedData && this.modalOnPageLeave) {
    //         $event.returnValue = true;
    //     } else { }
    // }
    unloadNotification($event) {
        // Only show dialog if we have unsaved data and modal flag is on
        if (this.hasUnsavedData && this.modalOnPageLeave) {
            // console.log('Showing beforeunload dialog - unsaved data exists');
            // This is the modern standard way to trigger the dialog
            $event.preventDefault();
            // For older browsers
            $event.returnValue = true;
            localStorage.setItem('has_unsaved_data', 'false');
            return true;
        }
        // For all other cases, attempt to prevent the dialog with all known methods
        // console.log('Preventing beforeunload dialog - no unsaved data');
        // Explicitly return null and don't call preventDefault
        return null;
    }
    handleKeyboardEvent(event) {
        if (this.rootData['BindKey'][String(event.key)]) {
            this.rootData['BindKey'][String(event.key)]();
        }
    }
    openDialog(data) {
        this.dialog.open(ModalRendererComponent, { data: { stepId: data.tid }, id: `stepModal-${data.tid}`, panelClass: `stepModal-${data.tid}` });
    }
    onPopState(event) {
        if (this.hasOnLeaveEvent) {
            history.pushState(null, document.title, document.location.toString());
            this.handleStepEvent('onLeave');
        }
        else {
            this.onBackButton();
        }
    }
    onBackButton() {
        if (localStorage.getItem('forceOnBack')) {
            localStorage.removeItem('forceOnBack');
        }
        else if (this.overrideBackButtonValue) {
            history.pushState(null, document.title, document.location.toString());
            this.variableObj['loadStep_' + this.stepId] = this.wfeStepLoaderService.loadStepById(this.overrideBackButtonValue).subscribe((data) => {
                if (data !== undefined && data.display_as_modal === 1) {
                    this.openDialog(data);
                }
            });
        }
        else if (this.modalOnPageLeave && !(this.additionalParameter['OnPageLeaveCheckType'] === 'saved' && !this.hasUnsavedData)) {
            history.pushState(null, document.title, document.location.toString());
            this.variableObj['loadStep_' + this.stepId] = this.wfeStepLoaderService.loadStepById(this.modalOnPageLeave).subscribe((data) => {
                if (data !== undefined && data.display_as_modal === 1) {
                    this.openDialog(data);
                }
            });
        }
        // console.log("onPopState intervalId:",this.intervalId)
        if (this.intervalId && !this.globalParameters["AutoSaveAPI"]) {
            clearInterval(this.intervalId);
        }
        // Uncomment it End
    }
    slugify(value) {
        // https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
        return value.toString().toLowerCase()
            .replace(/\s+/g, '-');
    }
    getSubdomain(url) {
        try {
            const parsedUrl = new URL(url);
            const hostnameParts = parsedUrl.hostname.split('.');
            // Special handling for localhost
            if (parsedUrl.hostname.includes('localhost') && hostnameParts.length > 1) {
                return hostnameParts[0]; // Return the first part before ".localhost"
            }
            // Standard handling for subdomains
            if (hostnameParts.length > 2) {
                return hostnameParts[0]; // Return the first part (subdomain)
            }
            return ''; // No subdomain found
        }
        catch (error) {
            console.error('Invalid URL', error);
            return '';
        }
    }
    getAgentName() {
        this.enableSubdomainHandling = localStorage.getItem('ENABLE_SUBDOMAIN_HANDLING') === 'true' ? true : false;
        if (this.enableSubdomainHandling == true) {
            const subdomainkey = window.sessionStorage.getItem('CEE_subdomain');
            if (subdomainkey) {
                const subdomain = this.getSubdomain(window.location.href); // Pass a full URL
                // console.log('subdomain***', subdomain);
                // console.log('subdomainkey**', subdomainkey)
                if (subdomainkey.includes('##')) {
                    const valT = {};
                    valT[subdomainkey] = subdomain;
                    valT['handler_name'] = subdomainkey.split('##')[0];
                    const apiData = {
                        id: subdomainkey.split('##')[0],
                        apiUrl: subdomainkey.split('##')[0],
                        apiKey: subdomainkey.split('##')[0],
                        value: valT
                    };
                    this.apiDataService.setApiData(Object.assign({}, apiData));
                }
            }
        }
    }
    ngOnInit() {
        if (this.wfeStepLoaderService.defaultLang) {
            $('html').attr('lang', this.wfeStepLoaderService.defaultLang.replace('/', ''));
        }
        // reset root data
        this.rootData['BindKey'] = {};
        this.rootData['langChanged'] = false; // set the language changed to false
        this.rootData['FieldLoadStack']['count'] = 0;
        this.stepIsComplete = undefined;
        this.navigateStepName = localStorage.getItem('navigateStepName') === 'true' ? true : false;
        this.navigateStepNameOnly = localStorage.getItem('navigateStepNameOnly') === 'true' ? true : false;
        // console.log("&&&&&&&&&&&&&&&&&& Step Render &&&&&&&&&&&&&&&&&&&&&",this.stepId)
        // console.log("%%%%%%%%%%%% intervalId: %%%%%%%%%%%%",this.intervalId)
        if (this.intervalId && !this.globalParameters["AutoSaveAPI"]) {
            clearInterval(this.intervalId);
        }
        if (this.stepId) {
            this.showLoading = true;
            Promise.resolve(this.wfeStepLoaderService.prefetchBaseJSON()).then(() => {
                this.getAgentName();
                this.stepId = this.returnStepId(this.stepId);
                let configCopy = this.wfeStepLoaderService.baseJSONData && this.wfeStepLoaderService.baseJSONData.sidemenu_block ? JSON.parse(JSON.stringify(this.wfeStepLoaderService.baseJSONData.sidemenu_block)) : '';
                if (configCopy) {
                    this.sideBarData = this.sidemenuUtil.setSidemenuBlockStateOnDataEmit({}, configCopy, this.stepId);
                    this.sideBarDataProcess();
                }
                // check if the user is logged in or not
                const userRole = this.apiDataService.getUserRoleValue(this.storageService.getFieldData('UserRole')) || '';
                let stepDataCache = this.wfeStepLoaderService.getStepDataFromCache(this.stepId);
                if (stepDataCache) {
                    if (!this.ceeInitService.appConfigData['SKIP_JSON_LOADER']) {
                        this.loaderService.loadingStack++;
                        this.loaderService.isLoading.next(true);
                        this.stopCacheLoader = () => {
                            setTimeout(() => {
                                this.loaderService.loadingStack--;
                                if (this.loaderService.loadingStack === 0) {
                                    this.loaderService.isLoading.next(false);
                                }
                                else {
                                    this.loaderService.isLoading.next(true);
                                }
                            }, 0);
                        };
                    }
                    this.wfeStepLoaderService.checkUserRoleAccess(userRole, stepDataCache, async (stepData, error) => {
                        this.proceessStepData(stepData, error, userRole);
                    });
                    // setTimeout(() => {  
                    //     this.proceessStepData(stepDataCache, "", userRole);                        
                    // }, 0);
                }
                else {
                    this.stopCacheLoader = () => { };
                    this.wfeStepLoaderService.getWFEStepData(userRole, this.stepId, async (stepData, error) => {
                        this.wfeStepLoaderService.setStepDataInCache(this.stepId, stepData);
                        this.proceessStepData(stepData, error, userRole);
                    });
                }
                this.variableObj['emitApiSuccessRes_' + this.stepId] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
                    this.setGlobalConstantsOnDataEmit(res);
                    this.setProgressBlockStateOnDataEmit(res);
                    let configCopy = this.wfeStepLoaderService.baseJSONData && this.wfeStepLoaderService.baseJSONData.sidemenu_block ? JSON.parse(JSON.stringify(this.wfeStepLoaderService.baseJSONData.sidemenu_block)) : '';
                    if (configCopy) {
                        this.sideBarData = this.sidemenuUtil.setSidemenuBlockStateOnDataEmit(res, configCopy, this.stepId);
                        this.sideBarDataProcess();
                    }
                });
                this.variableObj['emitModalRes_' + this.stepId] = this.sharedEventsService.modelEmitter.subscribe(res => {
                    this.drawerRenderer = res;
                });
                // listen to language change
                this.variableObj['languageChange_' + this.stepId] = this.interCEEEmitter.languageChangeEmitter.subscribe(res => {
                    this.wfeStepLoaderService.stepDataStore = {};
                    this.wfeStepLoaderService.blockDataStore = {};
                    // localStorage.removeItem('stepDataCache');
                    // localStorage.removeItem('lastBlockLoaded');
                    // localStorage.removeItem('blockDataCache');
                    // load only when the language does not match
                    if (this.wfeStepLoaderService.defaultLang !== res) {
                        this.wfeStepLoaderService.defaultLang = res;
                        // fetch the base wfe json
                        // fetch the step
                        // map the message object
                        this.wfeStepLoaderService.loadOnLangChange(this.returnStepId(this.stepId), res).subscribe((result) => {
                            this.wfeStepLoaderService.baseJSONData = result[1];
                            this.wfeStepLoaderService.mapData(userRole, result, async (stepData, error) => {
                                if (error) {
                                    console.error('Step Loading Error', error);
                                    this.router.navigateByUrl('/wfe/step/404');
                                }
                                else {
                                    this.stepData = stepData;
                                    this.headerBlocksData = [];
                                    this.hamburgermenuBlockData = null;
                                    this.footerBlocksData = [];
                                    this.setAdditionalParameterOnStepLoad(this.stepData, res);
                                    this.rootData = { ...this.rootData, ...{ langChanged: true } };
                                    this.handleStepEvent('onload');
                                }
                            });
                        });
                    }
                });
            }).catch(err => {
                console.error('Step Loading Error', err);
                this.router.navigateByUrl('/wfe/step/404');
            });
        }
        const _this = this;
        $(document).off().on('click', "label.col-form-label a:not(.no-popup-link)", function (e) {
            const link = $(this).prop('href');
            const target = $(this).prop('target');
            if (_this.globalParameters["externalSitePrompt"]) {
                e.preventDefault();
                _this.pageLeaveStepId && localStorage.removeItem('page_leave_step_id');
                localStorage.setItem('page_leave_href', link);
                if (target) {
                    localStorage.setItem('page_leave_href_target', target);
                }
                _this.displayModal({ event_handler: _this.globalParameters['externalSitePrompt'] });
            }
        });
        localStorage.setItem('isButtonInvokeApi', '0');
    }
    sideBarDataProcess() {
        if (this.sideBarData && typeof this.sideBarData === 'object' && this.sideBarData !== null && this.sideBarData.sidemenuBlock) {
            this.sideBarData.sidemenuBlock.submenu = this.recusivelyCheckMenuDependency(this.sideBarData?.sidemenuBlock?.submenu);
            // console.log("sidemenuData after>>>>>", this.sideBarData);
            // let customEvent = {
            //     type : "sideBarData",
            //     data : this.sideBarData
            // }
            // this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            sessionStorage.setItem("sideBarData", JSON.stringify(this.sideBarData));
        }
    }
    recusivelyCheckMenuDependency(menuData) {
        if (menuData && menuData.length == 0) {
            return menuData;
        }
        menuData.forEach((menuDataItem, index) => {
            menuData[index]['isVisible'] = true;
            if (menuDataItem && menuDataItem.menu_condition && menuDataItem.menu_condition.length > 0 && menuDataItem.menu_condition[0].query != "") {
                menuData[index]['isVisible'] = this.checkMenuDependency(menuDataItem.menu_condition[0]);
            }
            menuData[index]['submenu'] = this.recusivelyCheckMenuDependency(menuDataItem.submenu);
        });
        return menuData;
    }
    checkMenuDependency(dependencyCondition) {
        return this.wfeConditionalExecuter.evaluateConditionQuery(dependencyCondition.query, dependencyCondition.condition);
    }
    trackBySection(index, item) {
        return item.section_id;
    }
    extractAfterFirstSegment(url) {
        const parts = url.split('/').filter(Boolean); // removes empty strings from "//"
        if (parts.length <= 1)
            return null;
        return '/' + parts.slice(1).join('/');
    }
    /**
     * Traverses the step data tree and builds a hierarchical object representing
     * the structure: step_name -> section_name -> (nested sections) -> fields.
     * While traversing, it also collects all linked_block_id values of fields
     * with field_type "Repeatable Block" into the `rbs` array.
     *
     * @param stepData The step data object containing sections and fields.
     * @returns An object representing the hierarchical tree of the step.
    */
    traverseStepTree(stepData) {
        if (!stepData || !stepData.step_name || !stepData.section) {
            console.warn('Invalid stepData provided');
            return null;
        }
        const stepName = stepData.step_name;
        const tree = {};
        tree[stepName] = {};
        this.rbs = [];
        // Recursive function to process sections and nested sections
        const processSections = (sections, parentNode) => {
            for (const section of sections) {
                const sectionName = section.section_name || `Unnamed Section (${section.section_id})`;
                parentNode[sectionName] = {};
                // Process fields in the current section and
                // Collect block_id for "Repeatable Block", "List-V2" fields
                if (section.fields && Array.isArray(section.fields)) {
                    //parentNode[sectionName]['fields'] = section.fields.map(field => field.field_type || 'Unknown Field Type');
                    const arrRBS = section.fields.filter(field => field.field_type == "Repeatable Block").map(field => field.repeatable_block_configuration.linked_block_id || 'Unknown Block ID');
                    this.rbs = this.rbs.concat(arrRBS);
                    const arrLists = section.fields.filter(field => field.field_type == "List-V2");
                    var arrListBlocks = [];
                    for (let field of arrLists) {
                        // extract default_value from additional_parameters
                        const defaultValue = field.additional_parameters?.find(param => param.parameter_type === 'default_value')?.value;
                        if (defaultValue) {
                            arrListBlocks.push(defaultValue);
                        }
                    }
                    this.rbs = this.rbs.concat(arrListBlocks);
                    // parentNode[sectionName]['rbs'] = arrRBS;
                }
                // Recursively process nested sections
                if (section.sections && Array.isArray(section.sections)) {
                    processSections(section.sections, parentNode[sectionName]);
                }
            }
        };
        // Start processing sections
        processSections(stepData.section, tree[stepName]);
        // console.log('Generated Tree:', JSON.stringify(tree));
        // console.log('Generated Tree:', this.rbs);
        return tree;
    }
    checkurlPresent(inputString) {
        const arr = inputString.split(',');
        const currentUrl = this.router.url;
        let isPresent = arr.some(value => currentUrl.includes(value));
        return isPresent;
    }
    proceessStepData(stepData, error, userRole = "") {
        // const TargetStepId = localStorage.getItem('TargetStepId');
        const TargetStepId = this.getCookie('TargetStepId');
        this.showLoading = false;
        if (stepData && stepData.section) {
            // ########### Support for section within a section ############
            stepData.section.forEach((stepSection, index) => {
                let sectionList = stepData.section.filter((sec) => { return sec.parent_section_id == stepSection.section_id; });
                stepData.section[index]['sections'] = sectionList;
            });
            stepData.section = stepData.section.filter((el) => { return !el.parent_section_id || el.parent_section_id == ''; });
            // ############################################################
        }
        if (stepData && stepData.display_as_modal !== 1) {
            this.wfeStepLoaderService.lastStepRootData = this.rootData;
        }
        if (!this.stepData || this.fixLayout) {
            this.modalGenericCssClass = 'modal-step-' + this.stepId;
            // console.log(error);
            // console.log(!this.getCookie('LandingStepId'));
            if (error) {
                if (TargetStepId && error === "No step found for the given user role.") {
                    this.router.navigateByUrl(this.wfeStepLoaderService.getDefaultStepByRole(userRole));
                }
                else if (this.ceeInitService.appConfigData['CEE_FORCE_LOGIN'] &&
                    !this.getCookie('LandingStepId') && error === "No step found for the given user role.") {
                    if (this.checkurlPresent(this.ceeInitService.appConfigData['CEE_FORCE_LOGIN_URL'])) {
                        let postUrl = this.extractAfterFirstSegment(this.router.url);
                        if (postUrl) {
                            // localStorage.setItem('postUrl', postUrl);
                            this.setCookie('postUrl', postUrl, 1);
                        }
                        // localStorage.setItem('LandingStepId', this.stepId);
                        this.setCookie('LandingStepId', this.stepId, 1);
                    }
                    this.appDataService.removeAllAppData();
                    // localStorage.clear();
                    this.router.navigateByUrl(this.ceeInitService.appConfigData['CEE_FORCE_LOGIN'], {
                        skipLocationChange: true,
                    });
                }
                else if (this.wfeStepLoaderService.baseJSONData && this.wfeStepLoaderService.baseJSONData.step_error) {
                    if (error === "No step found for the given user role." && this.wfeStepLoaderService.baseJSONData.step_error["403"]) {
                        this.wfeEventListHandler.eventConfig({
                            display_step: this.wfeStepLoaderService.baseJSONData.step_error["403"]
                        }, { event_handler: '' });
                    }
                    else if (this.wfeStepLoaderService.baseJSONData.step_error["404"]) {
                        this.wfeEventListHandler.eventConfig({
                            display_step: this.wfeStepLoaderService.baseJSONData.step_error["404"]
                        }, { event_handler: '' });
                    }
                    else {
                        console.error('Step Loading Error', error);
                        this.router.navigateByUrl('/wfe/step/404');
                    }
                }
                else {
                    console.error('Step Loading Error', error);
                    this.router.navigateByUrl('/wfe/step/404');
                }
            }
            else {
                // get step Id
                if (stepData.display_as_modal !== 1) {
                    window['currentModalId'] = '';
                    window['currentStepId'] = stepData.tid;
                    const workflowDetails = this.wfeStepLoaderService.getWorkflowDetails(stepData.tid);
                    if (workflowDetails && workflowDetails?.sequence_id) {
                        window['currentWorkflowId'] = workflowDetails.sequence_id;
                    }
                }
                else {
                    window['currentModalId'] = stepData.tid;
                }
                let currStep = this.stepId;
                let loadStep = true;
                if (stepData.conditional) {
                    if (stepData.dependency_condition.query) {
                        const dependencyCondition = this.conditionalUtil.checkStepDependency(stepData.dependency_condition);
                        if (!dependencyCondition) {
                            // set the current step as completed
                            // const progressBar = this.wfeStepLoaderService.progressBarMap[
                            //     this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep).sequence];
                            // if (progressBar && progressBar['progress']) {
                            //     this.applicationStateStore.setComplete(progressBar['progress'].progress_bar_id, currStep);
                            // }
                            this.getSequenceIdAndSetData(currStep);
                            this.stepId = this.wfeStepLoaderService.getNextStepInCurrentSequence(currStep);
                            loadStep = false;
                            this.redirectionUtil.redirectTo(this.stepId);
                        }
                    }
                }
                if (loadStep) {
                    // reset Page on leave data
                    if (stepData.display_as_modal === 0) {
                        this.overrideBackButtonValue = null;
                        localStorage.removeItem('has_unsaved_data');
                        localStorage.removeItem('modal_on_page_leave');
                        localStorage.removeItem('page_leave_step_id');
                        localStorage.removeItem('page_leave_href');
                        localStorage.removeItem('page_leave_href_target');
                        localStorage.removeItem('save_handler');
                    }
                    if (localStorage.getItem('is_bootstrap') === 'true') {
                        this.is_bootstrap = true;
                        this.container_type = localStorage.getItem('container_type');
                    }
                    else {
                        this.container_type = 'container-wrapper';
                    }
                    // Set Application Name
                    const WebsiteTitle = this.storageService.getFieldData('WebsiteTitle');
                    if (WebsiteTitle) {
                        this.titleService.setTitle(WebsiteTitle);
                    }
                    else if (stepData.meta_title) {
                        this.titleService.setTitle(stepData.meta_title);
                    }
                    if (stepData.meta_title) {
                        this.metaService.updateTag({ name: 'title', content: stepData.meta_title });
                    }
                    if (stepData.meta_description) {
                        this.metaService.updateTag({ name: 'description', content: stepData.meta_description });
                    }
                    this.stepData = stepData;
                    this.showStepLoader = this.isToShowStepLoader();
                    if (this.showStepLoader) {
                        this.traverseStepTree(stepData);
                    }
                    var timeDelay = 1000;
                    if (this.stepData.display_as_modal === 1) {
                        timeDelay = 10;
                    }
                    /* istanbul ignore next */
                    setTimeout(() => {
                        this.handleStepAction();
                        this.handleStepEvent('onload');
                        this.stopCacheLoader();
                        if (this.isReloadPage) {
                            this.handleStepEvent('OnReload');
                        }
                        this.hasOnLeaveEvent = this.stepData.event_list && this.stepData.event_list.find(i => i.event_name.toLowerCase() === 'onleave') ? true : false;
                        setTimeout(() => {
                            const scrollTarget = localStorage.getItem('scrollTarget');
                            if (scrollTarget) {
                                if (document.getElementById(scrollTarget)) {
                                    document.getElementById(scrollTarget).scrollIntoView({ behavior: 'smooth' });
                                }
                                localStorage.removeItem('scrollTarget');
                            }
                        }, 0);
                        if (this.showStepLoader && this.rbs.length == 0) {
                            // console.log("No RB, so hiding step loader");
                            this.showStepLoader = this.additionalParameter['CEE_ShowModalLoader_Table']?.toLowerCase() === 'true';
                        }
                    }, timeDelay);
                    // get sequence and map progress bar
                    this.progressBlock = this.wfeStepLoaderService.progressBarMap[this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep).sequence] || {};
                    // store global parameters
                    this.globalParameters = this.wfeStepLoaderService.additionalParameters;
                    this.setGlobalConstantsOnDataEmit();
                    // this.handleStepAction();
                    // this.handleStepEvent();
                    // this.setTemplates();  //deprecated feature
                    if (userRole !== '' && this.startSession !== false) {
                        this.sessionTimeoutUtil.sessionTimeout();
                    }
                    // call the set additional parameter method to set the
                    // additional parameter
                    this.setAdditionalParameterOnStepLoad(stepData, this.wfeStepLoaderService.defaultLang);
                    if (this.additionalParameter['Loader Handler name']) {
                        this.variableObj[this.stepId + '_customSectionLoaderEmitter'] =
                            this.sharedEventsService.customSectionLoaderEmitter.subscribe((res) => {
                                if (this.additionalParameter['Loader Handler name']
                                    .split('|').map(str => str.trim()).includes(res.handlerName)) {
                                    this.loader.showSection = res.loading;
                                }
                            });
                    }
                    // check step valid or not
                    this.variableObj['buttonValidation_' + this.stepId] =
                        this.sharedEventsService.buttonValidationEmitter.pipe(take(1)).subscribe(() => {
                            const oldComplete = this.stepIsComplete;
                            this.stepIsComplete = this.checkValidateANDCheckMandatory({ mandatory: true, valid: true });
                            const progressBar = this.wfeStepLoaderService.progressBarMap[this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep) ?
                                this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep).sequence : undefined];
                            if (progressBar && progressBar['progress'] && oldComplete !== this.stepIsComplete) {
                                this.stepIsComplete ?
                                    this.applicationStateStore.setComplete(progressBar['progress'].progress_bar_id, currStep) :
                                    this.applicationStateStore.setIncomplete(progressBar['progress'].progress_bar_id, currStep);
                            }
                        });
                    // bootstrap_class_name configuration
                    if (this.is_bootstrap && this.stepData && this.stepData.step_style && this.stepData.step_style.bootstrap_class_name) {
                        for (let i = 0; i < this.stepData.section.length; i++) {
                            const section = this.stepData.section[i];
                            if (section.section_style && !section.section_style.bootstrap_class_name) {
                                section.section_style.bootstrap_class_name = this.stepData.step_style.bootstrap_class_name;
                            }
                        }
                    }
                    // ############## Auto Save Handler Data  ##############
                    setTimeout(async () => {
                        // console.log("###############Step: processBaseJSON###################",this.additionalParameter["AutoSaveAPI"],"  ",this.additionalParameter["AutoSaveTime"])
                        const handler = this.stepData.step_action.additional_parameters.filter(e => e.parameter_type === "AutoSaveAPI").length > 0 ? this.stepData.step_action.additional_parameters.filter(e => e.parameter_type === "AutoSaveAPI")[0]['value'] : '';
                        const timeInterval = this.stepData.step_action.additional_parameters.filter(e => e.parameter_type === "AutoSaveTime").length > 0 ? this.stepData.step_action.additional_parameters.filter(e => e.parameter_type === "AutoSaveTime")[0]['value'] : 60; // given in seconds
                        if (handler && timeInterval && !this.globalParameters["AutoSaveAPI"]) {
                            const appConfigData = await this.http.get(this.apiConfigPath).toPromise();
                            const handlerConfig = appConfigData['config'] ? appConfigData['config'].filter((item) => { return (item.id === handler); })[0] : null;
                            const accessToken = this.commonUtil.returnAccessToken();
                            if (this.intervalId && !this.globalParameters["AutoSaveAPI"]) {
                                clearInterval(this.intervalId);
                            }
                            if (!handlerConfig['hasAuthorisation'] || (handlerConfig['hasAuthorisation'] && (accessToken && accessToken != "."))) {
                                this.intervalId = setInterval(() => {
                                    this.runAutoSaveProcess(handlerConfig);
                                }, timeInterval * 1000);
                                // console.log("processstepdata::interval id: ",this.intervalId)
                            }
                        }
                    }, 100);
                }
                else {
                    this.stopCacheLoader();
                }
                // Pushing the current URL in history to prevent back button for events
                if (this.hasOnLeaveEvent) {
                    history.pushState(null, document.title, document.location.toString());
                }
                // Predefine Templates configuration
                if (this.is_bootstrap && stepData.template) {
                    const gridClass = [];
                    for (const tGrid of stepData.template) {
                        switch (tGrid.device_type) {
                            case 'web':
                                gridClass.push(this.generateTemplateClass('col-lg-', tGrid.template_id));
                                break;
                            case 'tab':
                                gridClass.push(this.generateTemplateClass('col-md-', tGrid.template_id));
                                break;
                            case 'mobile':
                                gridClass.push(this.generateTemplateClass('col-sm-', tGrid.template_id));
                                break;
                            default:
                                gridClass.push(this.generateTemplateClass('col-', tGrid.template_id));
                                break;
                        }
                    }
                    this.rootData.templateClass = gridClass.join(' ');
                }
                if (stepData.display_as_modal == 1) {
                    this.toggleModalCssClass();
                }
            }
            if (TargetStepId) {
                // localStorage.removeItem('TargetStepId')
                this.deleteCookie('TargetStepId');
            }
        }
    }
    get pageLeaveStepId() {
        return localStorage.getItem('page_leave_step_id') ? localStorage.getItem('page_leave_step_id') : false;
    }
    // special event handler to handle the Display Modal event
    displayModal(handler) {
        let modals = JSON.parse(localStorage.getItem('modals'));
        modals.forEach((modal, i) => {
            if (modal.modalId == handler.event_handler) {
                const dialogRef = this.dialog.open(ModalRendererComponent, { data: { modal: modal }, id: `eventModal-${handler.event_handler}`, panelClass: `eventModal-${handler.event_handler}` });
                this.variableObj['afterClosed_' + this.stepId] = dialogRef.afterClosed().subscribe(result => {
                    // console.log('The dialog ' + modal.modalId + ' was closed.');
                });
            }
        });
    }
    isToShowStepLoader() {
        for (const paramter of this.stepData.step_action.additional_parameters) {
            if (paramter.parameter_type == "CEE_ShowStepLoader" || paramter.parameter_type == "CEE_ShowModalLoader_Table") {
                return paramter.value.toLowerCase() === "true";
            }
        }
        return false;
    }
    async setAdditionalParameterOnStepLoad(stepData, lang = '') {
        this.loaderService.loadingTextSet.next('');
        if (stepData && stepData.step_action && stepData.step_action.additional_parameters && stepData.step_action.additional_parameters.length > 0) {
            const headerBlocksData = [];
            const footerBlocksData = [];
            for (const paramter of stepData.step_action.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'stepBlocks':
                        for (const blockId of paramter.value.split('|')) {
                            if (blockId) {
                                const blocks = await this.fetchHeaderFooter(lang, blockId);
                                if (blocks && blocks.block_name && blocks.block_name.toLowerCase() === 'header') {
                                    if (headerBlocksData.findIndex(hBlockData => hBlockData.block_id == blocks.block_id) == -1) {
                                        headerBlocksData.push(blocks);
                                    }
                                }
                                if (blocks && blocks.block_name && blocks.block_name.toLowerCase() === 'hamburgermenu') {
                                    this.hamburgermenuBlockData = blocks;
                                    blocks.additional_parameters.forEach((i) => {
                                        this.hamburgermenuBlockAdditionalParameter[i.parameter_type] = i.value;
                                    });
                                }
                                if (blocks && blocks.block_name && blocks.block_name.toLowerCase() === 'footer') {
                                    if (footerBlocksData.findIndex(fBlockData => fBlockData.block_id == blocks.block_id) == -1) {
                                        footerBlocksData.push(blocks);
                                    }
                                }
                            }
                        }
                        break;
                    case 'URLParameters':
                        this.handleUrlParameters(paramter.value.split('|'));
                        break;
                    case 'OverrideBackButton':
                        history.pushState(null, document.title, document.location.toString());
                        this.overrideBackButtonValue = paramter.value;
                        break;
                    case 'ModalOnPageLeave':
                        localStorage.setItem('modal_on_page_leave', paramter.value);
                        break;
                    case 'OnPageLeaveCheckType':
                        localStorage.setItem('OnPageLeaveCheckType', paramter.value);
                        break;
                    case 'SaveHandler':
                        localStorage.setItem('save_handler', paramter.value);
                        break;
                    case 'WebsiteTitle':
                        this.titleService.setTitle(paramter.value);
                        break;
                    case 'LoaderText':
                        this.loaderService.loadingTextSet.next(paramter.value);
                        break;
                    default:
                        break;
                }
            }
            // rander header and footer          
            if (this.fixLayout) {
                if (JSON.stringify(headerBlocksData) !== JSON.stringify(this.headerBlocksData)) {
                    this.headerBlocksData = headerBlocksData;
                }
                if (JSON.stringify(footerBlocksData) !== JSON.stringify(this.footerBlocksData)) {
                    this.footerBlocksData = footerBlocksData;
                }
            }
            else {
                this.headerBlocksData = headerBlocksData;
                this.footerBlocksData = footerBlocksData;
            }
        }
    }
    /**
     * function to fetch Header Footer
     * @param lang have language of application
     * @param blockId block id that need to load
     */
    async fetchHeaderFooter(lang, blockId) {
        if (!this.blockJsonData[lang]) {
            this.blockJsonData[lang] = {};
        }
        if (this.blockJsonData[lang][blockId]) {
            return this.blockJsonData[lang][blockId];
        }
        else {
            const jsonData = await this.http.get(`${this.globalPath}${lang}${this.configBlockPath}${blockId}.json`).toPromise();
            this.blockJsonData[lang][blockId] = jsonData;
            return jsonData;
        }
    }
    /**
     * function to get class name of template
     * @param classNamePart class name part
     * @param columnType single_column/two_column
     */
    generateTemplateClass(classNamePart, columnType) {
        let resultClass = '';
        switch (columnType) {
            case 'single_column':
                resultClass = classNamePart + '12';
                break;
            case 'two_column':
                resultClass = classNamePart + '6';
                break;
            default:
                resultClass = classNamePart + '12';
                break;
        }
        return resultClass;
    }
    /**
     * function to emit the if the loading is needed to not
     * @param handlerName event handler or external api or api_information
     * @param loading true or false
     */
    showOrHideLoader(handlerName, loading) {
        this.sharedEventsService.customSectionLoaderEmitter.emit({
            handlerName,
            loading
        });
    }
    handleUrlParameters(urlParameters) {
        const array = urlParameters.map((el) => {
            return el.trim();
        });
        this.route.queryParamMap.subscribe(params => {
            for (const param of array) {
                if (params.get(param) !== null) {
                    // save the api data
                    const apiData = {
                        id: param,
                        apiUrl: '',
                        apiKey: param,
                        value: params.get(param)
                    };
                    this.apiDataService.setApiData(Object.assign({}, apiData));
                }
            }
        });
        this.route.paramMap.subscribe(params => {
            for (const param of array) {
                if (params.get(param) !== null) {
                    // save the api data
                    const apiData = {
                        id: param,
                        apiUrl: '',
                        apiKey: param,
                        value: params.get(param)
                    };
                    this.apiDataService.setApiData(Object.assign({}, apiData));
                }
            }
        });
    }
    closeModal(id) {
        this.modalIds.splice(this.modalIds.indexOf(id), 1);
    }
    scrollToSection(blockName) {
        if (!blockName)
            return;
        // Find the element with the matching ID sad
        const targetElement = document.getElementById(blockName);
        if (targetElement) {
            // console.log("Scrolling to:", blockName); 
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
        else {
            console.warn("Element not found:", blockName);
        }
    }
    ngAfterViewInit() {
        this.http.get('./assets/jsons/lender_mapping.json').subscribe({
            next: (response) => {
                if (response && response.result && Array.isArray(response.result)) {
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
        let isScroll = localStorage.getItem('isScroll') === 'true';
        if (isScroll) {
            localStorage.setItem('isScroll', "false");
            setTimeout(() => {
                const startTime = Date.now();
                const maxTime = 180000; // Keep checking for 50 seconds
                const checkInterval = 15000; // Check every 10 seconds
                let lastScrollTop = 0; // Track last scroll position
                const checkAndScroll = () => {
                    //console.log("Checking for target ID...");
                    let borrowerIdEntries = Object.entries(JSON.parse(localStorage.getItem('borrowerIdMap') || '{}'));
                    let keyValueEntries = Object.entries(JSON.parse(localStorage.getItem('keyValueMap') || '{}'));
                    this.borrowerIdMap = new Map(borrowerIdEntries);
                    this.keyValueMap = new Map(keyValueEntries);
                    //console.log("📍 localStorage.getItem('borrowerIdMap')  :", localStorage.getItem('borrowerIdMap'));
                    let lenderData = localStorage.getItem('lender-data');
                    let node = lenderData ? JSON.parse(lenderData) : null;
                    let customEvent = {
                        type: "error_actions",
                        data: node
                    };
                    this.sharedEventsService.emitToreactEmitter.emit(customEvent);
                    localStorage.removeItem('lender-data');
                    if (!node) {
                        //console.warn("No lender data found in localStorage");
                        return;
                    }
                    let finalScrollTarget = null;
                    let mainParentName = node.borrower_id || "";
                    let borrowerIndex = null;
                    const isFieldLevel = localStorage.getItem('isFieldLevel') === 'true';
                    const hasBorrowerId = !!node.borrower_id;
                    // console.log('mainParentName:', mainParentName);
                    // console.log('isFieldLevel:', isFieldLevel);
                    if (!hasBorrowerId && isFieldLevel) {
                        // ✅ Check parent_id from mapping
                        const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key);
                        const hasParentId = mappingEntry && !!mappingEntry.parent_id;
                        if (hasParentId) {
                            // console.log("🔁 Field-level edit: Parent ID found. Beginning nested lookup...");
                            // Step 1: Load the block using parent_id
                            this.wfeStepLoaderService.loadBlockByName(mappingEntry.parent_id).subscribe((parentBlockData) => {
                                // console.log("📦 Loaded Parent Block:", parentBlockData);
                                // Step 2: Find the field using mappingEntry.unique_id
                                const targetField = parentBlockData?.block_fields?.find((field) => field.unique_id === mappingEntry.unique_id);
                                if (targetField) {
                                    // console.log("✅ Field matched by unique_id:", targetField);
                                    // Step 3: Extract default_value from additional_parameters
                                    const defaultParam = targetField.additional_parameters?.find(param => param.parameter_type === 'default_value');
                                    const defaultValue = defaultParam?.value;
                                    if (defaultValue) {
                                        // console.log("📍 Found dasdefault_value for child block:", defaultValue);
                                        // console.log("📍 mappingEntry.unique_id:", mappingEntry.unique_id);
                                        // console.log("📍 mappingEntry.parent_id:", mappingEntry.parent_id);
                                        // console.log("📍 node.borrower_id :", node.borrower_id);
                                        borrowerIndex = this.borrowerIdMap.get(mainParentName);
                                        // console.log("📍 borrowerIndex:", borrowerIndex);
                                        // Step 4: Open accordion and load + scrolling
                                        this.accordionService.openMultipleSectionsWithParent(mappingEntry.unique_id, mappingEntry.parent_id, defaultValue, borrowerIndex);
                                        this.loadBlockAndScrollToField(defaultValue, node.api_key, true, borrowerIndex);
                                    }
                                    else {
                                        console.warn("⚠️ No default_value found in additional_parameters of target field.");
                                    }
                                }
                                else {
                                    console.warn(`❌ No field found in parent block '${mappingEntry.parent_id}' matching unique_id: ${mappingEntry.unique_id}`);
                                }
                            });
                            return;
                        }
                        else {
                            // console.log("🚨 Field-level edit with no borrower_id detected, and parent_id exists.");
                            const sectionsToOpen = [mappingEntry.unique_id]; // Dynamically use parent_id
                            this.accordionService.openMultipleSections(sectionsToOpen);
                            //this.scrollWithRetry(mappingEntry.unique_id); 
                            this.loadBlockAndScrollToField(mappingEntry.unique_id, node.api_key, false, 0);
                            return;
                        }
                    }
                    else if (hasBorrowerId && isFieldLevel) {
                        const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key);
                        const hasParentId = mappingEntry && !!mappingEntry.parent_id;
                        if (hasParentId) {
                            //  console.log("🔁 Field-level edit: Parent ID found. Beginning nested lookup...");
                            // Step 1: Load the block using parent_id
                            this.wfeStepLoaderService.loadBlockByName(mappingEntry.parent_id).subscribe((parentBlockData) => {
                                //  console.log("📦 Loaded Parent Block:", parentBlockData);
                                // Step 2: Find the field using mappingEntry.unique_id
                                const targetField = parentBlockData?.block_fields?.find((field) => field.unique_id === mappingEntry.unique_id);
                                if (targetField) {
                                    //  console.log("✅ Field matched by unique_id:", targetField);
                                    // Step 3: Extract default_value from additional_parameters
                                    const defaultParam = targetField.additional_parameters?.find(param => param.parameter_type === 'default_value');
                                    const defaultValue = defaultParam?.value;
                                    if (defaultValue) {
                                        // console.log("📍 Found default_value for child block:", defaultValue);
                                        // console.log("📍 mappingEntry.unique_id:", mappingEntry.unique_id);
                                        // console.log("📍 mappingEntry.parent_id:", mappingEntry.parent_id);
                                        // console.log("📍 node.borrower_id :", node.borrower_id);
                                        borrowerIndex = this.borrowerIdMap.get(mainParentName);
                                        //  console.log("📍 borrowerIndex:", borrowerIndex);
                                        // Step 4: Open accordion and load + scrolling
                                        this.accordionService.openMultipleSectionsWithParent(mappingEntry.unique_id, mappingEntry.parent_id, defaultValue, borrowerIndex);
                                        this.loadBlockAndScrollToField(defaultValue, node.api_key, true, borrowerIndex);
                                    }
                                    else {
                                        console.warn("⚠️ No default_value found in additional_parameters of target field.");
                                    }
                                }
                                else {
                                    console.warn(`❌ No field found in parent block '${mappingEntry.parent_id}' matching unique_id: ${mappingEntry.unique_id}`);
                                }
                            });
                            return;
                        }
                    }
                    else {
                        // ✅ Check if borrower_id is present and retrieve borrower_index
                        if (mainParentName && this.borrowerIdMap.has(mainParentName)) {
                            borrowerIndex = this.borrowerIdMap.get(mainParentName);
                            //  console.log(`✅ Borrower ID matched! Borrower Index: ${borrowerIndex}`);
                            // ✅ Retrieve label_info_heading from mapping file
                            if (this.keyValueMap.has(node.blockName)) {
                                let mappedValue = this.keyValueMap.get(node.blockName);
                                // ✅ Append borrowerIndex to mapped value
                                finalScrollTarget = `${mappedValue}-${borrowerIndex}`;
                                //  console.log(`✅ Direct Final Scroll Target: ${finalScrollTarget}`);
                            }
                            if (finalScrollTarget) {
                                this.scrollToSection(finalScrollTarget);
                                return; // ✅ Stop further processing since direct scrolling is handled
                            }
                        }
                        // ✅ Fallback to the existing logic if borrower_id is missing
                        if (!finalScrollTarget) {
                            if (node.blockName && this.keyValueMap.has(node.blockName)) {
                                finalScrollTarget = this.keyValueMap.get(node.blockName);
                                //  console.log("Using default mapped scroll target:", finalScrollTarget);
                                if (finalScrollTarget) {
                                    this.scrollToSection(finalScrollTarget);
                                    return; // ✅ Stop further processing since direct scrolling is handled
                                }
                            }
                            else {
                                console.warn("No valid scroll target found for node:", node.name);
                            }
                        }
                    }
                    if (Date.now() - startTime < maxTime) {
                        //  console.log("❌ Target not stable yet. Retrying in 10 seconds...");
                        setTimeout(checkAndScroll, checkInterval);
                    }
                    else {
                        console.warn("⏳ Timeout reached! Stopping retries.");
                    }
                };
                checkAndScroll(); // Start checking asd
            }, 8000); // Initial 8-second delay
        }
    }
    loadBlockAndScrollToField(uniqueId, apiKey, isFieldLevelWithParent, borrowerIndex) {
        //this.wfeStepLoaderService.loadBlockByName(uniqueId).subscribe((blockData) => {
        this.wfeStepLoaderService.loadBlockByName(uniqueId).subscribe((blockData) => {
            // console.log("📦 Loaded Blo ck Data:", blockData);
            let loadedBlock = blockData;
            // Find the field with the given api_key
            const targetField = loadedBlock?.block_fields?.find(field => field.api_key === apiKey);
            if (targetField) {
                // console.log("🎯 Field matched with API Key:", targetField);
                const scrollTargetId = targetField.unique_id;
                if (isFieldLevelWithParent) {
                    this.scrollWithRetryParent(scrollTargetId, borrowerIndex);
                }
                else {
                    this.scrollWithRetry(scrollTargetId);
                }
            }
            else {
                console.warn(`❌ No field found in block '${uniqueId}' matching api_key: ${apiKey}`);
            }
        }, (error) => {
            console.error(`❌ Error loading block by name (${uniqueId}):`, error);
        });
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
            // console.log("✅ Element found, scrolling into view:", target.id);
            this.scrollToSection(target.id); // ✅ Use existing scrolling method
        }
        else if (retries > 0) {
            console.warn(`⏳ Waiting for element containing "${fullId}" to appear. Retries left: ${retries}`);
            setTimeout(() => this.scrollWithRetryParent(elementId, borrowerIndex, retries - 1, delay), delay);
        }
        else {
            console.error(`❌ Element containing "${fullId}" not found after multiple retries.`);
        }
    }
    scrollWithRetry(elementId, retries = 30, delay = 3000) {
        if (!elementId)
            return;
        const target = document.getElementById(elementId);
        if (target) {
            // console.log("✅ Element found,   scrolling into view:", elementId);
            this.scrollToSection(elementId); // ✅ Reuse your existing method
        }
        else if (retries > 0) {
            console.warn(`⏳ Waiting for element "${elementId}" to appear. Retries left: ${retries}`);
            setTimeout(() => this.scrollWithRetry(elementId, retries - 1, delay), delay);
        }
        else {
            console.error(`❌ Element "${elementId}" not found after multiple retries.`);
        }
    }
    ngOnChanges(changes) {
        // load the wfe and call the ngonit if the step gets changed
        // default page rendering
        if (!changes.stepId.currentValue) {
            Promise.resolve(this.wfeStepLoaderService.prefetchBaseJSON()).then(() => {
                const defaultStep = this.wfeStepLoaderService.getDefaultStep();
                if (defaultStep) {
                    window.localStorage.clear();
                    window.location.href = (this.navigateStepName || this.navigateStepNameOnly) ? defaultStep.stepName : `/wfe/step/${defaultStep.tid}`;
                }
            });
        }
        if (changes.stepId.previousValue) {
            if (changes.stepId.currentValue !== changes.stepId.previousValue) {
                this.getSequenceIdAndSetData(this.returnStepId(changes.stepId.currentValue));
                this.setInitData();
            }
        }
    }
    setInitData() {
        this.blocksData = [];
        this.hamburgermenuBlockData = null;
        if (!this.fixLayout) {
            this.stepData = undefined;
            this.headerBlocksData = [];
            this.footerBlocksData = [];
        }
        this.ngOnInit();
    }
    returnStepId(stepId) {
        if (parseInt(stepId)) {
            return stepId;
        }
        else {
            const routeMap = JSON.parse(localStorage.getItem('CEE_ROUTE_MAP'));
            if (this.navigateStepNameOnly && routeMap) {
                return Object.keys(routeMap).find(key => routeMap[key] === stepId);
            }
            else {
                const data = stepId.split('-');
                return data[data.length - 1];
            }
        }
    }
    getSequenceIdAndSetData(stepID) {
        if (stepID) {
            const sequenceId = this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(stepID).sequence;
            this.setSequenceAndStepId(this.globalParameters['SequenceID'], sequenceId); // setting sequenceId
            this.setSequenceAndStepId(this.globalParameters['StepID'], stepID); // setting current value as per HLD (change on: 15/09/2020)
        }
    }
    setSequenceAndStepId(paramValue, value) {
        if (paramValue && paramValue.includes('$$')) {
            this.setApiData(paramValue.split('$$')[1], value);
        }
    }
    executeSequenceData() {
        for (const seqData in this.sequenceData) {
            if (seqData === 'workflow_progress') {
                for (const workflowData in this.sequenceData[seqData]) {
                    if (workflowData === 'progress_bar_type') {
                        if (this.sequenceData[seqData][workflowData] === 'Default' ||
                            this.sequenceData[seqData][workflowData] === '') {
                            this.visible = false;
                        }
                        else {
                            this.visible = true;
                            // this.updatedSeqData = this.sequenceData;
                            // this.WfeFieldDataService.getSequenceData(this.updatedSeqData);
                        }
                    }
                }
            }
        }
    }
    async handleStepAction() {
        let body = {};
        if (this.stepData && this.stepData.step_action && this.stepData.step_action.api_information) {
            const apiType = localStorage.getItem('API_TYPE');
            switch (apiType) {
                case 'ESB':
                    body = this.esbRequestBodyUtil.getESBRequestBody();
                    this.variableObj['ESBRequestHandler_' + this.stepId] = this.ceeApiService.ESBRequestHandler(this.stepData.step_action.api_information, body).subscribe(res => {
                        if (res['status'] === 'ok') {
                            const appBaseResult = window.sessionStorage.getItem('ApplicationBaseResultPath');
                            let apiResponse = JSON.parse(res['api_response'])[appBaseResult];
                            if (Array.isArray(apiResponse)) {
                                // TODO UNFLATTEn With Class
                            }
                            else {
                                apiResponse = this.flatUnflat.flattenJSON(apiResponse);
                            }
                            this.sharedEventsService.emitApiSuccessResponse.emit(apiResponse);
                        }
                        else {
                            this.sharedEventsService.emitApiErrorResponse.emit(res);
                        }
                    });
                    break;
                case 'INTERNAL':
                case 'EXTERNAL':
                    this.externalRequestResponseUtil.prepareObjectToBeSent(this.stepData.step_action.api_information, apiType === 'INTERNAL' ? 'internal' : '');
                    break;
                default:
                    let appData = [];
                    let apiData = [];
                    // store the appData
                    this.variableObj['getAllAppData_' + this.stepId] = this.appDataService.getAllAppData().subscribe(res => {
                        appData = res;
                    });
                    // store the apiData
                    this.variableObj['getAllApiData_' + this.stepId] = this.apiDataService.getAllApiData().subscribe(res => {
                        // console.log('apiData', res);
                        apiData = res;
                    });
                    const eventHandlerEmitterObject = {
                        handler: this.stepData.step_action.api_information,
                        appData,
                        apiData
                    };
                    this.sharedEventsService.eventHandlerEmitter.emit(eventHandlerEmitterObject);
                    break;
            }
        }
    }
    /**
     * function that sets the global parameters to default value or api response
     * @param res api response if present
     */
    setGlobalConstantsOnDataEmit(res) {
        for (const param of Object.keys(this.globalParameters)) {
            if (param === 'UserRole') {
                continue;
            }
            // Non Pre-defined API Key with and without value
            if (param.includes('##')) {
                const keys = param.includes('|') ? param.split('|').map(str => str.trim()) : [param];
                for (const key of keys) {
                    let val;
                    if (this.globalParameters[param].includes('||')) {
                        const values = this.globalParameters[param].split('||').map(str => str.trim());
                        val = values[0];
                        // remove data at first index
                        values.shift();
                        if (res) {
                            for (const singleVal of values) {
                                const multipleVal = singleVal.split('|').map(str => str.trim());
                                for (const apiKey of multipleVal) {
                                    const apiVal = this.setApiCallBackUtil.setApiCallBackData(apiKey.split('$$')[1], res);
                                    if (apiVal !== null) {
                                        val = apiVal;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        val = this.globalParameters[param].trim();
                    }
                    this.setApiData(key, val);
                }
            }
            else {
                if (this.globalParameters[param] && this.globalParameters[param].includes('##')) {
                    // Pre-defined parameter and value with api key
                    if (this.globalParameters[param].includes('|')) {
                        let val;
                        const multipleValues = this.globalParameters[param].split('|').map(str => str.trim());
                        for (const values of multipleValues) {
                            if (values.includes('##')) {
                                const key = values.includes('$$') ? values.split('$$')[1] : values;
                                // const apiValue = this.setApiCallBackUtil.setApiCallBackData(key,
                                //     this.getValues(values, res));
                                const apiValue = this.setApiCallBackUtil.setApiCallBackData(key, res);
                                if (apiValue !== null) {
                                    val = apiValue;
                                    this.setApiData(key, val);
                                }
                            }
                            else {
                                val = values;
                            }
                        }
                        // set value in the session storage
                        if (val !== undefined) {
                            window.sessionStorage.setItem(param, val);
                        }
                    }
                    else {
                        // Pre-defined Parameter and API Key
                        // set the api key in the session storage
                        if (this.globalParameters[param].includes('$$')) {
                            let apiKey = this.globalParameters[param].split('$$')[1].trim();
                            // check for sub or prn for OIDC
                            if (window.sessionStorage.getItem('CEE_OIDC') === '1' &&
                                window.sessionStorage.getItem('CEE_Token') &&
                                (param === 'CEE_SUB' || param === 'CEE_PRN')) {
                                const tokenHandlerName = window.sessionStorage.getItem('CEE_Token').split('##')[0];
                                apiKey = param === 'CEE_SUB' ? `${tokenHandlerName}##cee_sub` : `${tokenHandlerName}##cee_prn`;
                            }
                            // const val = this.setApiCallBackUtil.setApiCallBackData(
                            //     apiKey, this.getValues(this.globalParameters[param], res));
                            const val = this.setApiCallBackUtil.setApiCallBackData(apiKey, res);
                            this.setApiData(apiKey, val);
                            window.sessionStorage.setItem(param, apiKey);
                        }
                    }
                }
            }
        }
    }
    setApiData(key, val) {
        if (val) {
            const apiData = {
                id: key,
                apiUrl: '',
                apiKey: key,
                value: val
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
    }
    /**
     * function returns values from api data store and if not present sends the response back
     * @param values the api key
     * @param res the values  from api data store or if not present sends the response back
     */
    getValues(values, res) {
        if (res) {
            const data = this.setApiCallBackUtil.returnValueFromApiStoreUsingHandlerName(values.split('$$')[1].split('##')[0]);
            return data || res;
        }
        return undefined;
    }
    /**
     * to support event list that is configured in the step
     * only supports onLoad Event
     */
    handleStepEvent(eventName) {
        if (this.stepData.event_list && this.stepData.event_list.length > 0) {
            let warningOverwriteLocalDataHandlerArray = this.additionalParameter && this.additionalParameter['WarningOverwriteLocalDataHandler'] ? this.additionalParameter['WarningOverwriteLocalDataHandler'].split('||') : [];
            let dataLossHandlerArray = warningOverwriteLocalDataHandlerArray[0] ? warningOverwriteLocalDataHandlerArray[0].split('|') : [];
            let dataLossWarningMessage = warningOverwriteLocalDataHandlerArray.length > 1 ? warningOverwriteLocalDataHandlerArray[1] : 'Are you sure, locally updated data will be lost!';
            let priventOverwriteLocalDataHandler = this.additionalParameter && this.additionalParameter['PriventOverwriteLocalDataHandler'] ? this.additionalParameter['PriventOverwriteLocalDataHandler'] : '';
            let isOverwriteLocalData = (priventOverwriteLocalDataHandler != '') ? false : true;
            let localDataHandlerArray = [];
            priventOverwriteLocalDataHandler.split('||').forEach(handler => {
                if (handler) {
                    localDataHandlerArray.push(handler.split('##')[0]);
                }
            });
            for (const event of JSON.parse(JSON.stringify(this.stepData.event_list))) {
                let eventHandler = event && event['event_params'].length > 0 && event['event_params'][0]['event_handler'] ? event['event_params'][0]['event_handler'] : '';
                let apiData = this.apiDataService.getApiDataByHandler(eventHandler);
                if (event.isDefault && event.event_name.toLowerCase() === eventName.toLowerCase() && dataLossHandlerArray && dataLossHandlerArray.includes(eventHandler) && apiData) {
                    if (confirm(dataLossWarningMessage) != true) {
                        continue;
                    }
                }
                if (event.isDefault && event.event_name.toLowerCase() === eventName.toLowerCase() && (isOverwriteLocalData || !localDataHandlerArray.includes(eventHandler) || (!isOverwriteLocalData && localDataHandlerArray.includes(eventHandler) && !apiData))) {
                    if (eventName.toLowerCase() === 'onleave') {
                        this.hasOnLeaveEvent = true;
                    }
                    else {
                        this.wfeEventListHandler.switchEventDisplayType(event, this.stepData.event_list);
                    }
                }
            }
        }
    }
    setTemplates() {
        if (this.stepData.template) {
            for (const template of this.stepData.template) {
                if (template.device_type.toLowerCase() === 'web') {
                    this.templateId = template.template_id;
                }
            }
        }
    }
    // check if step is complete
    checkValidateANDCheckMandatory({ mandatory, valid }) {
        const allStepData = this.appDataService.getAllAppStoreData();
        for (const fieldData of allStepData) {
            if (this.stepId === fieldData.stepId) {
                if (mandatory && fieldData.mandatory && this.checkEmpty.isEmpty(fieldData.value)) {
                    return false;
                }
                if (valid && !fieldData.isValid) {
                    return false;
                }
            }
        }
        return true;
    }
    setProgressBlockStateOnDataEmit(res) {
        if (this.wfeStepLoaderService.baseJSONData && this.wfeStepLoaderService.baseJSONData.progress_block) {
            for (const progressBlock of this.wfeStepLoaderService.baseJSONData.progress_block) {
                const result = this.setApiCallBackUtil.setApiCallBackData(progressBlock, res);
                if (result) {
                    const data = JSON.parse(atob(result));
                    this.applicationStateStore.setStateValue(progressBlock.progress_bar_id, data);
                }
            }
        }
    }
    onDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        // console.log("interval cleared: ",this.intervalId)
        clearInterval(this.intervalId);
        // this.toggleModalCssClass();
        $(document).off('click');
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        // console.log("interval cleared: ",this.intervalId)
        clearInterval(this.intervalId);
        // this.toggleModalCssClass();
        $(document).off('click');
    }
    // Add class to the element with '.cdk-overlay-pane' class selector of a modal.
    toggleModalCssClass() {
        const modalWrapper = window.document.querySelector('.cdk-overlay-pane');
        if (modalWrapper) {
            modalWrapper.classList.toggle('modal-step-wrapper');
            modalWrapper.classList.toggle(this.modalGenericCssClass);
        }
    }
    // all getter and setters go here
    get fixLayout() {
        return localStorage.getItem('fixLayout') === 'true' ? true : false;
    }
    static ɵfac = function StepRendererComponent_Factory(t) { return new (t || StepRendererComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.Location), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i3.CeeApiService), i0.ɵɵdirectiveInject(i4.SharedEventsServiceService), i0.ɵɵdirectiveInject(i5.UserDataHandlerService), i0.ɵɵdirectiveInject(i6.AccordionService), i0.ɵɵdirectiveInject(i7.Title), i0.ɵɵdirectiveInject(i8.Idle), i0.ɵɵdirectiveInject(i9.Keepalive), i0.ɵɵdirectiveInject(i10.WfeStepLoaderService), i0.ɵɵdirectiveInject(i11.AppDataService), i0.ɵɵdirectiveInject(i12.ApiDataService), i0.ɵɵdirectiveInject(i13.HttpClient), i0.ɵɵdirectiveInject(i14.MatDialog), i0.ɵɵdirectiveInject(i15.MatSnackBar), i0.ɵɵdirectiveInject(i2.LocationStrategy), i0.ɵɵdirectiveInject(i16.LoaderService), i0.ɵɵdirectiveInject(i17.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i7.Meta), i0.ɵɵdirectiveInject(i18.SocketioService), i0.ɵɵdirectiveInject(i19.EventResponseHandlerService), i0.ɵɵdirectiveInject(i20.CeeInitServiceService), i0.ɵɵdirectiveInject(i21.WFEConditionalExecuter)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepRendererComponent, selectors: [["app-step-renderer"]], viewQuery: function StepRendererComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(DrawerComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.drawerComponent = _t.first);
        } }, hostBindings: function StepRendererComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("beforeunload", function StepRendererComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadNotification($event); }, false, i0.ɵɵresolveWindow)("keypress", function StepRendererComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0.ɵɵresolveDocument)("popstate", function StepRendererComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", startSession: "startSession" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 5, vars: 7, consts: [["class", "loader-overlay", 4, "ngIf"], [4, "ngIf"], [3, "id", "class", 4, "ngIf"], [1, "loader-overlay"], [1, "loader-content"], [1, "spinner"], [3, "stepId", "data", "rootData"], [3, "id"], [3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], [3, "stepId", "templateId", "blockId", "blockPosition", "class", "rootData", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["moduleName", "CEE_LOADER"], [3, "hidden", "templateId", "sectionData", "stepPosition", "stepId", "stepName", "sideBarData", "class", "rootData", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "hidden", "templateId", "sectionData", "stepPosition", "stepId", "stepName", "sideBarData", "rootData"], [3, "progressBlock", "stateIdMap", "currentStep"]], template: function StepRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StepRendererComponent_div_0_Template, 3, 0, "div", 0);
            i0.ɵɵelementStart(1, "main");
            i0.ɵɵtemplate(2, StepRendererComponent_ng_container_2_Template, 2, 3, "ng-container", 1)(3, StepRendererComponent_ng_container_3_Template, 2, 1, "ng-container", 1)(4, StepRendererComponent_section_4_Template, 6, 14, "section", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showStepLoader);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("main-body ", ctx.container_type, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.drawerRenderer == null ? null : ctx.drawerRenderer.data == null ? null : ctx.drawerRenderer.data.stepId);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hamburgermenuBlockData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.stepData || ctx.headerBlocksData || ctx.footerBlocksData);
        } }, dependencies: () => [DynamicRendererComponent, MatDialogModule, DrawerComponent, MatFormFieldModule, MatInputModule, CommonModule, i2.NgForOf, i2.NgIf, ProgressBarRendererComponent, BlockRendererComponent, SectionRendererComponent], styles: [".main-body[_ngcontent-%COMP%]{background-color:#fff;position:relative}.align-center[_ngcontent-%COMP%]{margin:50vh auto;text-align:center}.lds-ripple[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;border:4px solid #0071EB;opacity:1;border-radius:50%;animation:_ngcontent-%COMP%_lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.5s}@keyframes _ngcontent-%COMP%_lds-ripple{0%{top:28px;left:28px;width:0;height:0;opacity:1}to{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}.modal[_ngcontent-%COMP%]{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:#0006}.modal-content[_ngcontent-%COMP%]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.sub-menu-container[_ngcontent-%COMP%]{position:absolute;z-index:9}.sub-menu-container.left[_ngcontent-%COMP%]{top:0}.sub-menu-container.right[_ngcontent-%COMP%]{right:0}.sub-menu-bar[_ngcontent-%COMP%]{width:250px;background-color:#333;color:#fff;height:100vh;position:fixed;clear:both;float:left}.with-sub-menu-bar[_ngcontent-%COMP%]{margin-left:250px;padding:0}.loader-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:9999}.loader-content[_ngcontent-%COMP%]{background-color:#fff;padding:2rem;border-radius:8px;text-align:center}.spinner[_ngcontent-%COMP%]{border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 1s linear infinite;margin:0 auto 1rem}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-step-renderer', standalone: true, imports: [DynamicRendererComponent, MatDialogModule, DrawerComponent, MatFormFieldModule, MatInputModule, CommonModule, ProgressBarRendererComponent, forwardRef(() => BlockRendererComponent), forwardRef(() => SectionRendererComponent), forwardRef(() => ProgressBarRendererComponent)], template: "<div *ngIf=\"showStepLoader\" class=\"loader-overlay\">\r\n    <div class=\"loader-content\">\r\n        <div class=\"spinner\"></div>\r\n        <!-- <p>Loading...</p> -->\r\n        <!-- <app-dynamic-renderer moduleName=\"CEE_LOADER\"></app-dynamic-renderer> -->\r\n    </div>\r\n</div>\r\n<main class=\"main-body {{container_type}}\">\r\n    <!-- <app-loading-renderer></app-loading-renderer> -->\r\n     <!-- drawerRenderer -->\r\n    <ng-container *ngIf=\"drawerRenderer?.data?.stepId\">\r\n        <cee-drawer-renderer [stepId]=\"drawerRenderer?.data?.stepId\" [data]=\"drawerRenderer?.data\" [rootData]=\"rootData\"></cee-drawer-renderer>\r\n    </ng-container>\r\n\r\n    <!-- hamburgermenuBlock -->\r\n    <ng-container *ngIf=\"hamburgermenuBlockData\">\r\n        <section [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n            [attr.role]=\"additionalParameter['Aria-Role']\" *ngIf=\"stepData && blocksData\" id=\"navblock-{{stepData.tid}}\"\r\n            class=\"sub-menu-container {{hamburgermenuBlockAdditionalParameter['displayPosition']||'left'}}\">\r\n\r\n            <app-block-renderer [stepId]=\"stepData.tid\" [templateId]=\"templateId\" [blockId]=\"hamburgermenuBlockData\"\r\n                [blockPosition]=\"0\"\r\n                class=\"block-0 hamburgermenu hamburgermenu-{{hamburgermenuBlockData.block_id}} hamburgermenu-0\"\r\n                [rootData]=\"rootData\">\r\n            </app-block-renderer>\r\n        </section>  \r\n    </ng-container>\r\n    <!-- hamburgermenuBlock End -->\r\n    <!-- Sidemenu Blocks -->\r\n    <!-- <ng-container *ngIf=\"sideBarData.sidemenuBlockOn && sideBarData.sidemenuBlock\">\r\n        <section class=\"sub-menu-bar {{sideBarData.sidemenuBlock ? sideBarData.sidemenuBlock ?.side_menu_class: ''}}\">\r\n            <app-sidemenu-bar-renderer [sidemenuBlockElements]=\"sideBarData.sidemenuBlock.submenu\" [sidemenuBlock]=\"sideBarData.sidemenuBlock\"\r\n            [currentStep]=\"stepId\"></app-sidemenu-bar-renderer>{{sideBarData.sidemenuBlock ? 'with-sub-menu-bar': ''}}\r\n        </section>\r\n    </ng-container> -->\r\n    \r\n    <section [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n        [attr.role]=\"additionalParameter['Aria-Role']\" *ngIf=\"stepData || headerBlocksData || footerBlocksData\"\r\n        id=\"stepblock-{{stepData?stepData.tid:''}}\"\r\n        class=\"step-body step-{{stepData?stepData.tid:''}} {{stepData&&stepData.step_style?commonUtil.implodeClassName(stepData.step_style.custom_class_name):''}} {{is_bootstrap?'row':''}}\">\r\n\r\n\r\n        <!-- Header Blocks -->\r\n        <app-block-renderer [stepId]=\"stepData.tid\" [templateId]=\"templateId\" [blockId]=\"block\"\r\n            *ngFor=\"let block of headerBlocksData; index as i\" [blockPosition]=\"i\"\r\n            class=\"block-{{i}} header header-{{block.block_id}} header-{{i}} {{is_bootstrap?'col-12':''}}\"\r\n            [rootData]=\"rootData\">\r\n        </app-block-renderer>\r\n\r\n        <div *ngIf=\"loader.showSection\" class=\"cee_loader cee_loader_{{stepId}}\">\r\n            <app-dynamic-renderer moduleName=\"CEE_LOADER\"></app-dynamic-renderer>\r\n        </div>\r\n        <ng-container *ngIf=\"stepData\">\r\n            <app-section-renderer [hidden]=\"loader.showSection\" [templateId]=\"templateId\" [sectionData]=\"section\"\r\n                [stepPosition]=\"pos\" [stepId]=\"stepData.tid\" [stepName]=\"stepData.step_name\" [sideBarData]=\"sideBarData\"\r\n                *ngFor=\"let section of stepData.section; let pos = index; trackBy: trackBySection;\"\r\n                class=\"section-{{pos}} block-main-{{pos}} {{section.section_style?commonUtil.bootstrapColClass(commonUtil.implodeClassName(section.section_style.bootstrap_class_name), is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(section)):''}}\"\r\n                [rootData]=\"rootData\">\r\n            </app-section-renderer>\r\n        </ng-container>\r\n        <!-- Progress Blocks -->\r\n        <ng-container *ngIf=\"progressBlock['progress'] && progressBlock['progress']['MapToStep']\">\r\n            <div\r\n                class=\"{{progressBlock['progress']['bootstrap_class_name']?progressBlock['progress']['bootstrap_class_name']:'col-12'}}\">\r\n                <div class=\"{{progressBlock['progress']['custom_class_name']}}\">\r\n                    <app-progress-bar-renderer [progressBlock]=\"progressBlock['progress']\"\r\n                        [stateIdMap]=\"progressBlock['steps']\" [currentStep]=\"stepId\"></app-progress-bar-renderer>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n        <!-- Footer Blocks -->\r\n        <app-block-renderer [stepId]=\"stepData.tid\" [templateId]=\"templateId\" [blockId]=\"block\"\r\n            *ngFor=\"let block of footerBlocksData; index as i\" [blockPosition]=\"i\"\r\n            class=\"block-{{i}} footer footer-{{block.block_id}} footer-{{i}} {{is_bootstrap?'col-12':''}}\"\r\n            [rootData]=\"rootData\">\r\n        </app-block-renderer>\r\n    </section>\r\n</main>\r\n", styles: [".main-body{background-color:#fff;position:relative}.align-center{margin:50vh auto;text-align:center}.lds-ripple{display:inline-block;position:relative;width:64px;height:64px}.lds-ripple div{position:absolute;border:4px solid #0071EB;opacity:1;border-radius:50%;animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}.lds-ripple div:nth-child(2){animation-delay:-.5s}@keyframes lds-ripple{0%{top:28px;left:28px;width:0;height:0;opacity:1}to{top:-1px;left:-1px;width:58px;height:58px;opacity:0}}.modal{display:block;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:#0006}.modal-content{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.sub-menu-container{position:absolute;z-index:9}.sub-menu-container.left{top:0}.sub-menu-container.right{right:0}.sub-menu-bar{width:250px;background-color:#333;color:#fff;height:100vh;position:fixed;clear:both;float:left}.with-sub-menu-bar{margin-left:250px;padding:0}.loader-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:9999}.loader-content{background-color:#fff;padding:2rem;border-radius:8px;text-align:center}.spinner{border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;width:50px;height:50px;animation:spin 1s linear infinite;margin:0 auto 1rem}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
    }], () => [{ type: i1.Router }, { type: i2.Location }, { type: i1.ActivatedRoute }, { type: i3.CeeApiService }, { type: i4.SharedEventsServiceService }, { type: i5.UserDataHandlerService }, { type: i6.AccordionService }, { type: i7.Title }, { type: i8.Idle }, { type: i9.Keepalive }, { type: i10.WfeStepLoaderService }, { type: i11.AppDataService }, { type: i12.ApiDataService }, { type: i13.HttpClient }, { type: i14.MatDialog }, { type: i15.MatSnackBar }, { type: i2.LocationStrategy }, { type: i16.LoaderService }, { type: i17.CEEInternalEmitterService }, { type: i7.Meta }, { type: i18.SocketioService }, { type: i19.EventResponseHandlerService }, { type: i20.CeeInitServiceService }, { type: i21.WFEConditionalExecuter }], { stepId: [{
            type: Input
        }], startSession: [{
            type: Input
        }], drawerComponent: [{
            type: ViewChild,
            args: [DrawerComponent]
        }], unloadNotification: [{
            type: HostListener,
            args: ['window:beforeunload', ['$event']]
        }], handleKeyboardEvent: [{
            type: HostListener,
            args: ['document:keypress', ['$event']]
        }], onPopState: [{
            type: HostListener,
            args: ['window:popstate', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StepRendererComponent, { className: "StepRendererComponent", filePath: "lib\\components\\step-renderer\\step-renderer.component.ts", lineNumber: 77 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zdGVwLXJlbmRlcmVyL3N0ZXAtcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc3RlcC1yZW5kZXJlci9zdGVwLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUdMLFlBQVksRUFFWixVQUFVLEVBQ1YsU0FBUyxFQUdaLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBaUMsZUFBZSxFQUFtQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFTMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFJOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLDJCQUEyQixNQUFNLDRDQUE0QyxDQUFDO0FBRXJGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdD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QixDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixDQUFDLENBQUM7OHRCQUtsUixNQUFNO2tCQUFkLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ3NCLGVBQWU7a0JBQTFDLFNBQVM7bUJBQUMsZUFBZTtZQWltQjlCLGtCQUFrQjtrQkFEYixZQUFZO21CQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBb0JBLG1CQUFtQjtrQkFBakUsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVc3QyxVQUFVO2tCQURULFlBQVk7bUJBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tGQW5vQmxDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBJbnB1dCxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgSW5qZWN0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZWVJbml0U2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtaW5pdC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIEV2ZW50LCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlc3Npb25UaW1lb3V0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24tdGltZW91dC11dGlsJztcclxuaW1wb3J0IHsgRVNCUmVxdWVzdEJvZHlVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXNiLXJlcXVlc3QtYm9keS11dGlscyc7XHJcbmltcG9ydCB7IEZsYXRVbmZsYXQgfSBmcm9tICcuLi8uLi91dGlscy9mbGF0LXVuZmxhdC1qc29uJztcclxuXHJcbmltcG9ydCB7IElkbGUgfSBmcm9tICdAbmctaWRsZS9jb3JlJztcclxuaW1wb3J0IHsgS2VlcGFsaXZlIH0gZnJvbSAnQG5nLWlkbGUva2VlcGFsaXZlJztcclxuaW1wb3J0IHsgVGl0bGUsIE1ldGEgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFdGRUV2ZW50TGlzdEhhbmRsZXIgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtZXZlbnQtbGlzdC1oYW5kbGVyLXV0aWwnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZGFsUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC1yZW5kZXJlci9tb2RhbC1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBTaWRlbWVudVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9zaWRlbWVudS11dGlsJztcclxuaW1wb3J0IEV4dGVybmFsUmVxdWVzdFJlc3BvbnNlVXRpbCBmcm9tICcuLi8uLi91dGlscy9leHRlcm5hbC1yZXF1ZXN0LXJlc3BvbnNlLnV0aWwnO1xyXG5pbXBvcnQgeyBBcGlEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0LWFwaS1jYWxsYmFjay1kYXRhLXV0aWwnO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IEVtcHR5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2VtcHR5LXV0aWwnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwbGljYXRpb24tc3RhdGUtc3RvcmUtdXRpbCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbmFsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1jb25kaXRpb25hbC11dGlsJztcclxuaW1wb3J0IHsgUmVkaXJlY3Rpb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkaXJlY3Rpb24tdXRpbCc7XHJcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2FkZXItc2VydmljZSc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTb2NrZXRpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zb2NrZXRpby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRSZXNwb25zZUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtcmVzcG9uc2UtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci1yZW5kZXJlci9wcm9ncmVzcy1iYXItcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VjdGlvblJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VjdGlvbi1yZW5kZXJlci9zZWN0aW9uLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtcmVuZGVyZXIvZHluYW1pYy1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbG9ja1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYmxvY2stcmVuZGVyZXIvYmxvY2stcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBBbGVydE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gJy4uL2RyYXdlci1yZW5kZXJlci9kcmF3ZXItcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY29yZGlhbi1zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFdGRUNvbmRpdGlvbmFsRXhlY3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtY29uZGl0aW9uYWwtcXVlcnktZXhlY3V0ZXItdXRpbCc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWwnO1xyXG5cclxuLy8gaWYgeW91IHdhbnQgdG8gdXNlICQgYXMgYW4gYWxpYXNcclxuY29uc3QgJCA9IGpRdWVyeVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1zdGVwLXJlbmRlcmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGVwLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3N0ZXAtcmVuZGVyZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIC8vIHByb3ZpZGVyczogW0NlZUluaXRTZXJ2aWNlU2VydmljZV0sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW0R5bmFtaWNSZW5kZXJlckNvbXBvbmVudCwgTWF0RGlhbG9nTW9kdWxlLCBEcmF3ZXJDb21wb25lbnQsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIENvbW1vbk1vZHVsZSwgUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCwgZm9yd2FyZFJlZigoKSA9PiBCbG9ja1JlbmRlcmVyQ29tcG9uZW50KSwgZm9yd2FyZFJlZigoKSA9PiBTZWN0aW9uUmVuZGVyZXJDb21wb25lbnQpLCBmb3J3YXJkUmVmKCgpID0+IFByb2dyZXNzQmFyUmVuZGVyZXJDb21wb25lbnQpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlcFJlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBrZXlWYWx1ZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcclxuICAgIGJvcnJvd2VySWRNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7IFxyXG4gICAgQElucHV0KCkgc3RlcElkO1xyXG4gICAgQElucHV0KCkgc3RhcnRTZXNzaW9uPztcclxuICAgIEBWaWV3Q2hpbGQoRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQhOiBEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICB0ZW1wbGF0ZUlkID0gJyc7XHJcbiAgICBzdGVwRGF0YUJvZHk6IG9iamVjdCA9IHt9O1xyXG5cclxuICAgIGJsb2NrSnNvbkRhdGE6IG9iamVjdCA9IHt9O1xyXG4gICAgZHJhd2VyUmVuZGVyZXIgPSB7XHJcbiAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgc3RlcElkIDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBzdGVwRGF0YTogYW55O1xyXG4gICAgYmxvY2tzRGF0YTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgaGVhZGVyQmxvY2tzRGF0YTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgaGFtYnVyZ2VybWVudUJsb2NrRGF0YTogYW55ID0gbnVsbDtcclxuICAgIGhhbWJ1cmdlcm1lbnVCbG9ja0FkZGl0aW9uYWxQYXJhbWV0ZXI6IGFueSA9IHt9O1xyXG4gICAgZm9vdGVyQmxvY2tzRGF0YTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgc2VxdWVuY2VEYXRhOiBhbnk7XHJcbiAgICB1cGRhdGVkU2VxRGF0YTogYW55O1xyXG4gICAgc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgZGVmYXVsdFN0ZXBJZDogYW55O1xyXG4gICAgdmlzaWJsZSA9IHRydWU7XHJcbiAgICBzdGVwSXNDb21wbGV0ZTogYm9vbGVhbjtcclxuICAgIHNlcUFycmF5OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIG1vZGFsU3RlcElkOiBzdHJpbmc7XHJcblxyXG4gICAgbW9kYWxJZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICByb290RGF0YTogYW55ID0ge307XHJcbiAgICBhZGRpdGlvbmFsUGFyYW1ldGVyOiBhbnkgPSB7fTtcclxuICAgIGdsb2JhbFBhcmFtZXRlcnM6IGFueSA9IHt9OyAvLyB2YXJpYWJsZSB0byBzdG9yZSB0aGUgZ2xvYmFsIHBhcmFtZXRlcnMgb24gc3RlcCBsb2FkXHJcbiAgICB2YXJpYWJsZU9iajogYW55ID0ge307XHJcbiAgICBnbG9iYWxQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSAnL2FwcGxpY2F0aW9uX2Jsb2Nrcy9hcHBsaWNhdGlvbl9ibG9ja3NfJztcclxuXHJcbiAgICBwcml2YXRlIHNlc3Npb25UaW1lb3V0VXRpbDogU2Vzc2lvblRpbWVvdXRVdGlsO1xyXG4gICAgcHJpdmF0ZSBlc2JSZXF1ZXN0Qm9keVV0aWw6IEVTQlJlcXVlc3RCb2R5VXRpbDtcclxuICAgIHByaXZhdGUgZmxhdFVuZmxhdDogRmxhdFVuZmxhdDtcclxuICAgIHByaXZhdGUgd2ZlRXZlbnRMaXN0SGFuZGxlcjogV0ZFRXZlbnRMaXN0SGFuZGxlcjtcclxuICAgIHByaXZhdGUgYXBwbGljYXRpb25TdGF0ZVN0b3JlOiBBcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsO1xyXG4gICAgb3ZlcnJpZGVCYWNrQnV0dG9uVmFsdWU6IHN0cmluZztcclxuICAgIG5hdmlnYXRlU3RlcE5hbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5hdmlnYXRlU3RlcE5hbWVPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc19ib290c3RyYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhhc09uTGVhdmVFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29udGFpbmVyX3R5cGU6IHN0cmluZztcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBzaWRlbWVudVV0aWw6IFNpZGVtZW51VXRpbDtcclxuICAgIGNvbmRpdGlvbmFsVXRpbDogQ29uZGl0aW9uYWxVdGlsO1xyXG4gICAgZXh0ZXJuYWxSZXF1ZXN0UmVzcG9uc2VVdGlsOiBFeHRlcm5hbFJlcXVlc3RSZXNwb25zZVV0aWw7XHJcbiAgICBzZXRBcGlDYWxsQmFja1V0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIGFwaUNvbmZpZ1BhdGggPSAnYXNzZXRzL2pzb25zL2FwaV9jb25maWcuanNvbic7XHJcbiAgICBjaGVja0VtcHR5OiBFbXB0eVV0aWw7XHJcbiAgICByZWRpcmVjdGlvblV0aWw6IFJlZGlyZWN0aW9uVXRpbDtcclxuICAgIHByb2dyZXNzQmxvY2sgPSB7fTtcclxuICAgIGxvYWRlciA9IHtcclxuICAgICAgICBuYW1lOiAnQ0VFX0xPQURFUicsXHJcbiAgICAgICAgc2hvd1NlY3Rpb246IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgc2hvd1N0ZXBMb2FkZXIgPSBmYWxzZTtcclxuICAgIHN0ZXBMb2FkZXJUaW1lb3V0OiBhbnk7XHJcbiAgICByYnMgPSBbXTtcclxuICAgIGxhc3RSQlJlbmRlcmVkOiBhbnkgPSBmYWxzZTtcclxuICAgIGlzUmVsb2FkUGFnZSA9IGZhbHNlO1xyXG4gICAgbW9kYWxHZW5lcmljQ3NzQ2xhc3MgPSAnJztcclxuICAgIHdhcm5Pbk11bHRpVGFic01zZzogYW55ID0gJyc7XHJcbiAgICBpbnRlcnZhbElkOiBhbnk7XHJcbiAgICBzdG9wQ2FjaGVMb2FkZXIgPSAoKSA9PiB7fTtcclxuICAgIGVuYWJsZVN1YmRvbWFpbkhhbmRsaW5nOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzaWRlQmFyRGF0YTogYW55ID0ge307XHJcbiAgICByZXNwb25zZVJlc3VsdDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IEFjY29yZGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxyXG4gICAgICAgIHB1YmxpYyBpZGxlOiBJZGxlLFxyXG4gICAgICAgIHB1YmxpYyBrZWVwYWxpdmU6IEtlZXBhbGl2ZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5LFxyXG4gICAgICAgIHByaXZhdGUgbG9hZGVyU2VydmljZTogTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGludGVyQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG1ldGFTZXJ2aWNlOiBNZXRhLFxyXG4gICAgICAgIHB1YmxpYyBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRpb1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBldmVudFJlc3BvbnNlSGFuZGxlcjogRXZlbnRSZXNwb25zZUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBjZWVJbml0U2VydmljZTogQ2VlSW5pdFNlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVDb25kaXRpb25hbEV4ZWN1dGVyOiBXRkVDb25kaXRpb25hbEV4ZWN1dGVyXHJcbiAgICApIHsgICAgICAgIFxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKiogU3RhcnQ6IFRvIHdhcm4gdXNlciBiZWZvcmUgb3Blbm5pbmcgc2l0ZSBpbiBtdWx0aXBsZSB0YWJzICoqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICBpZih0aGlzLmdsb2JhbFBhcmFtZXRlcnNbXCJDRUVfV0FSTl9PTl9NVUxUSV9UQUJTXCJdICYmIHRoaXMuZ2xvYmFsUGFyYW1ldGVyc1tcIkNFRV9XQVJOX09OX01VTFRJX1RBQlNcIl0gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLndhcm5Pbk11bHRpVGFic01zZyA9IHRoaXMuZ2xvYmFsUGFyYW1ldGVyc1tcIkNFRV9XQVJOX09OX01VTFRJX1RBQlNcIl0gPyB0aGlzLmdsb2JhbFBhcmFtZXRlcnNbXCJDRUVfV0FSTl9PTl9NVUxUSV9UQUJTXCJdIDogXCJTaXRlIGFscmVhZHkgb3BlbmVkIGluIGFub3RoZXIgdGFiLCBkYXRhIGNhbiBiZSBsb3N0ISBXb3VsZCB5b3Ugd2FudCB0byBjb250aW51ZT9cIjtcclxuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9tYWluJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy53YXJuT25NdWx0aVRhYnNNc2dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy93ZmUvc3RlcC80MDQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb21haW4nLHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZG9tYWluJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKiogRW5kOiBUbyB3YXJuIHVzZXIgYmVmb3JlIG9wZW5uaW5nIHNpdGUgaW4gbXVsdGlwbGUgdGFicyAqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uVGltZW91dFV0aWwgPSBuZXcgU2Vzc2lvblRpbWVvdXRVdGlsKFxyXG4gICAgICAgICAgICBpZGxlLCBrZWVwYWxpdmUsIHJvdXRlciwgZGlhbG9nLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmVzYlJlcXVlc3RCb2R5VXRpbCA9IG5ldyBFU0JSZXF1ZXN0Qm9keVV0aWwoYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZmxhdFVuZmxhdCA9IG5ldyBGbGF0VW5mbGF0KGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnNldEFwaUNhbGxCYWNrVXRpbCA9IG5ldyBTZXRBUElDYWxsYmFja0RhdGEoYXBpRGF0YVNlcnZpY2UsIGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmV4dGVybmFsUmVxdWVzdFJlc3BvbnNlVXRpbCA9IG5ldyBFeHRlcm5hbFJlcXVlc3RSZXNwb25zZVV0aWwoXHJcbiAgICAgICAgICAgIGh0dHAsIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSwgc2hhcmVkRXZlbnRzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyID0gbmV3IFdGRUV2ZW50TGlzdEhhbmRsZXIoXHJcbiAgICAgICAgICAgIGNlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHJvdXRlciwgc2hhcmVkRXZlbnRzU2VydmljZSwgaW50ZXJDRUVFbWl0dGVyLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuc2lkZW1lbnVVdGlsID0gbmV3IFNpZGVtZW51VXRpbChhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja0VtcHR5ID0gbmV3IEVtcHR5VXRpbCgpO1xyXG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZVN0b3JlID0gbmV3IEFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWwodGhpcy5hcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25hbFV0aWwgPSBuZXcgQ29uZGl0aW9uYWxVdGlsKGZhbHNlLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3Rpb25VdGlsID0gbmV3IFJlZGlyZWN0aW9uVXRpbChyb3V0ZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnJvb3REYXRhICYmIE9iamVjdC5rZXlzKHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2Uucm9vdERhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5yb290RGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMucm9vdERhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhID0ge307XHJcbiAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2Uucm9vdERhdGEgPSB0aGlzLnJvb3REYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydGaWVsZExvYWRTdGFjayddID0ge1xyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyU2VydmljZS5sb2FkaW5nU3RhY2srKztcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXJTZXJ2aWNlLmlzTG9hZGluZy5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlclNlcnZpY2UubG9hZGluZ1N0YWNrLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRlclNlcnZpY2UubG9hZGluZ1N0YWNrID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydzZWN0aW9uRmllbGRzJ10gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnYmxvY2tGaWVsZHMnXSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWyd0ZW1wbGF0ZUNsYXNzJ10gPSAnJztcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddID0ge307XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0FyaXRobWV0aWNOYW1lcyddID0ge307XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ19Bcml0aG1ldGljTmFtZXMnXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmxvY2F0aW9uLm9uVXJsQ2hhbmdlKHggPT4gdGhpcy51cmxDaGFuZ2UoeCkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAjIyMjIyMjIyMjIyMjIyBBdXRvIFNhdmUgSGFuZGxlciBEYXRhICAjIyMjIyMjIyMjIyMjI1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjI3Byb2Nlc3NCYXNlSlNPTiMjIyMjIyMjIyMjIyMjIyMjIyNcIix0aGlzLmdsb2JhbFBhcmFtZXRlcnNbXCJBdXRvU2F2ZUFQSVwiXSxcIiAgXCIsdGhpcy5nbG9iYWxQYXJhbWV0ZXJzW1wiQXV0b1NhdmVUaW1lXCJdKVxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5nbG9iYWxQYXJhbWV0ZXJzW1wiQXV0b1NhdmVBUElcIl0gPyB0aGlzLmdsb2JhbFBhcmFtZXRlcnNbXCJBdXRvU2F2ZUFQSVwiXSA6ICcnO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lSW50ZXJ2YWwgPSB0aGlzLmdsb2JhbFBhcmFtZXRlcnNbXCJBdXRvU2F2ZVRpbWVcIl0gPyBOdW1iZXIodGhpcy5nbG9iYWxQYXJhbWV0ZXJzW1wiQXV0b1NhdmVUaW1lXCJdKSA6IDYwOyAvLyBnaXZlbiBpbiBzZWNvbmRzXHJcbiAgICAgICAgICAgIGlmKGhhbmRsZXIgJiYgdGltZUludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb25maWdEYXRhID0gYXdhaXQgdGhpcy5odHRwLmdldCh0aGlzLmFwaUNvbmZpZ1BhdGgpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlckNvbmZpZyA9IGFwcENvbmZpZ0RhdGFbJ2NvbmZpZyddID8gYXBwQ29uZmlnRGF0YVsnY29uZmlnJ10uZmlsdGVyKChpdGVtKT0+eyByZXR1cm4gKGl0ZW0uaWQgPT09IGhhbmRsZXIpfSlbMF0gOiBudWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHRoaXMuY29tbW9uVXRpbC5yZXR1cm5BY2Nlc3NUb2tlbigpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbnRlcnZhbElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIWhhbmRsZXJDb25maWdbJ2hhc0F1dGhvcmlzYXRpb24nXSB8fCAoaGFuZGxlckNvbmZpZ1snaGFzQXV0aG9yaXNhdGlvbiddICYmICggYWNjZXNzVG9rZW4gJiYgYWNjZXNzVG9rZW4hPVwiLlwiKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkF1dG9TYXZlUHJvY2VzcyhoYW5kbGVyQ29uZmlnKTsgICBcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aW1lSW50ZXJ2YWwqMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdG9yOjppbnRlcnZhbCBpZDogXCIsdGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICMjIyMjIyMjIyMjIyMjIENvbm5lY3QgdG8gU29ja2V0ICAjIyMjIyMjIyMjIyMjI1xyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAwICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXVswXVsnZGF0YVNvY2tldFVybCddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXVswXVsnZGF0YVNvY2tldFVybCddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0U2VydmljZS5saXN0ZW5Ub1RoZVNvY2tldCh0aGlzLnN0ZXBJZCwgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2V4aXRXb3JrZmxvd1Jlc18nICsgdGhpcy5zdGVwSWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmV4aXRXb3JrZmxvd1NhbWVTdGVwUmVkaXJlY3RFbW1pdGVyLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5pdERhdGEoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhlY3V0ZU9uTG9hZEV2ZW50cyA9IHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk/LmV4dHJhcy5zdGF0ZT8uZXhlY3V0ZU9uTG9hZEV2ZW50cztcclxuICAgICAgICAgICAgICAgIGlmKGV4ZWN1dGVPbkxvYWRFdmVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0ZXBFdmVudCgnb25sb2FkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaWQgPT09IDEpIHsgLy8gcmVsb2FkIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVsb2FkUGFnZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcm91dGUgbmF2aWdhdGUoTm8gcmVsb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWxvYWRQYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbJ2Jsb2NrTG9ncyddID0gW107XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbJ2Jsb2NrRGF0YUxvZ3MnXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGFjdHVhbCBwYWdlIG5hdmlnYXRpb24sIG5vdCBqdXN0IGhhc2gvZnJhZ21lbnQgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VXJsV2l0aG91dEZyYWdtZW50ID0gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KCcjJylbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBldmVudC51cmwuc3BsaXQoJyMnKVswXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gT25seSB0cmlnZ2VyIG9udW5sb2FkIGZvciBhY3R1YWwgcGFnZSBjaGFuZ2VzLCBub3QgaGFzaCBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFVybFdpdGhvdXRGcmFnbWVudCAhPT0gdGFyZ2V0VXJsV2l0aG91dEZyYWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwRXZlbnQoJ29udW5sb2FkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uub2lkY0NoZWNrTG9naW5TdGF0dXNFbWl0dGVyLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5lbWl0TG9naW5TdGF0ZURhdGFUb1N0b3JlKHJlc1snaGFuZGxlciddLCB7IGxvZ2luU3RhdHVzOiByZXNbJ2xvZ2luU3RhdHVzJ10gfSlcclxuICAgICAgICAgICAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE9JREMgQ2hlY2sgTG9naW4gU3RhdHVzIEVtaXR0ZXIgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICAgICAgICAgIGNvbnN0IE9JRENDb25uZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ09JRENDb25uZWN0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgY29uc3Qgb2NJbnRlcnZlbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChPSURDQ29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoT0lEQ0Nvbm5lY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tsb2dpbnN0YXR1cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoZWNrbG9naW5zdGF0dXM6IFwiLCBhcGlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc1snbG9naW5TdGF0dXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVTdGVwRXZlbnQoJ2FmdGVyT0lEQ0xvZ2luJyk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlU3RlcEV2ZW50KCdvbkxvZ2luU3RhdHVzRmFsc2UnKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uub2lkY0FwaUVtaXR0ZXIuc3Vic2NyaWJlKChhcGlEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IE9JRENDb25uZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ09JRENDb25uZWN0Jyk7XHJcbiAgICAgICAgICAgIGlmIChPSURDQ29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ09JRENDb25uZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvY0ludGVydmVsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0ZXBEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoT0lEQ0Nvbm5lY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ2luJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpRGF0YSAmJiBhcGlEYXRhLnJlc3BvbnNlICYmIE9iamVjdC5rZXlzKGFwaURhdGEucmVzcG9uc2UpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgTGFuZGluZ1N0ZXBJZCA9IHRoaXMuZ2V0Q29va2llKCdMYW5kaW5nU3RlcElkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RVcmwgPSB0aGlzLmdldENvb2tpZSgncG9zdFVybCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGVfSWQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX2xhc3Rfcm91dGVfaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaW1hcnlGaWVsZERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJvdXRlX0lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBMYW5kaW5nU3RlcElkID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFwaUtleTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHByaW1hcnlGaWVsZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTGFuZGluZ1N0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb29raWUoJ1RhcmdldFN0ZXBJZCcsIExhbmRpbmdTdGVwSWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYWxsaW5nICBhZnRlck9JRENMb2dpbiAxIG9uOiBcIiwgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlU3RlcEV2ZW50KCdhZnRlck9JRENMb2dpbicpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwb3N0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdGlvblV0aWwucmVkaXJlY3RUbyhMYW5kaW5nU3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdGlvblV0aWwucmVkaXJlY3RUbyhMYW5kaW5nU3RlcElkLCBudWxsLCBwb3N0VXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ29va2llKCdMYW5kaW5nU3RlcElkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNvb2tpZSgncG9zdFVybCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYWxsaW5nICBhZnRlck9JRENMb2dpbiAyIG9uOiBcIiwgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlU3RlcEV2ZW50KCdhZnRlck9JRENMb2dpbicpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tsb2dpbnN0YXR1cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwaURhdGEgJiYgYXBpRGF0YS5yZXNwb25zZSAmJiBPYmplY3Qua2V5cyhhcGlEYXRhLnJlc3BvbnNlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IExhbmRpbmdTdGVwSWQgPSB0aGlzLmdldENvb2tpZSgnTGFuZGluZ1N0ZXBJZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0VXJsID0gdGhpcy5nZXRDb29raWUoJ3Bvc3RVcmwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExhbmRpbmdTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29va2llKCdUYXJnZXRTdGVwSWQnLCBMYW5kaW5nU3RlcElkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVTdGVwRXZlbnQoJ2FmdGVyT0lEQ0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwb3N0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdGlvblV0aWwucmVkaXJlY3RUbyhMYW5kaW5nU3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdGlvblV0aWwucmVkaXJlY3RUbyhMYW5kaW5nU3RlcElkLCBcIl9zZWxmXCIsIHBvc3RVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDb29raWUoJ0xhbmRpbmdTdGVwSWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ29va2llKCdwb3N0VXJsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ2luaW5wb3B1cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpRGF0YSAmJiBhcGlEYXRhLnJlc3BvbnNlICYmIE9iamVjdC5rZXlzKGFwaURhdGEucmVzcG9uc2UpLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlU3RlcEV2ZW50KCdhZnRlck9JRENMb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ291dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChvY0ludGVydmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ3N0ZXBMb2FkZXJfJyArIHRoaXMuc3RlcElkXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5zdGVwTG9hZGVyRW1pdHRlci5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2hvd1N0ZXBMb2FkZXIpIHJldHVybjtcclxuICAgICAgICAgICAgaWYodGhpcy5yYnMubGVuZ3RoID09IDApIHJldHVybjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItIGJsb2NrSWQ6XCIsIGRhdGEuYmxvY2tJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGVwTG9hZGVyVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RlcExvYWRlclRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0ZXBMb2FkZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGVwTG9hZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ3RhcmdldFN0ZXBSZWRpcmVjdGlvbl8nXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS50YXJnZXRTdGVwUmVkaXJlY3Rpb24uc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXM/LmV2ZW50X2hhbmRsZXIuaW5jbHVkZXMoJ292ZXJSaWRlV29ya2Zsb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwRXZlbnQoJ29udW5sb2FkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NlZSBjb3JlIHZlcnNpb24gdXBkYXRlIHByb2Nlc3NcclxuICAgICAgICBjb25zdCBjZWVDb3JlVmVyc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDRUVfQ09SRV9WRVJTSU9OJyk7XHJcbiAgICAgICAgY29uc3QgY2VlQ29yZVZlcnNpb25PbGQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX0NPUkVfVkVSU0lPTl9PTEQnKTtcclxuICAgICAgICBsZXQgcmVsb2FkRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChjZWVDb3JlVmVyc2lvbiAmJiBjZWVDb3JlVmVyc2lvbk9sZCAmJiBjZWVDb3JlVmVyc2lvbiAhPT0gY2VlQ29yZVZlcnNpb25PbGQpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHJlbG9hZEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjZWVDb3JlVmVyc2lvbiAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQ0VFX0NPUkVfVkVSU0lPTl9PTEQnLCBjZWVDb3JlVmVyc2lvbik7XHJcbiAgICAgICAgaWYgKHJlbG9hZEZsYWcpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIHVybENoYW5nZSh4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coeCk7XHJcbiAgICAgICAgdGhpcy51cmxDaGFuZ2VkTWFudWFsbHkgPSBmYWxzZVxyXG4gICAgfSAqL1xyXG5cclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIC8vIHByaXZhdGUgcmV0dXJuQWNjZXNzVG9rZW4oKSB7XHJcbiAgICAvLyAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBgJHt0aGlzLmdldENvb2tpZSgnaGVhZGVyUGF5bG9hZCcpfS4ke3RoaXMuZ2V0Q29va2llKCdzaWduYXR1cmUnKX1gXHJcbiAgICAvLyAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgZ2V0Q29va2llKG5hbWU6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGNvbnN0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAvLyAgICAgY29uc3QgY2FMZW46IG51bWJlciA9IGNhLmxlbmd0aDtcclxuICAgIC8vICAgICBjb25zdCBjb29raWVOYW1lID0gYCR7bmFtZX09YDtcclxuICAgIC8vICAgICBsZXQgYzogc3RyaW5nO1xyXG4gICAgXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYUxlbjsgaSArPSAxKSB7XHJcbiAgICAvLyAgICAgICBjID0gY2FbaV0ucmVwbGFjZSgvXlxccysvZywgJycpO1xyXG4gICAgLy8gICAgICAgaWYgKGMuaW5kZXhPZihjb29raWVOYW1lKSA9PT0gMCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcoY29va2llTmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuICcnO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHNldENvb2tpZShcclxuICAgICAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkYXlzVG9FeHBpcmU/OiBudW1iZXJcclxuICAgICAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIC8vIEVuY29kZSBuYW1lIGFuZCB2YWx1ZVxyXG4gICAgICAgICAgICBsZXQgY29va2llU3RyaW5nID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNldCBleHBpcmF0aW9uIGlmIHByb3ZpZGVkXHJcbiAgICAgICAgICAgIGlmIChkYXlzVG9FeHBpcmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXNUb0V4cGlyZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0cmluZyArPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZWN1cml0eSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGNvb2tpZVN0cmluZyArPSAnOyBwYXRoPS8nO1xyXG4gICAgICAgICAgICBjb29raWVTdHJpbmcgKz0gJzsgU2VjdXJlJzsgLy8gT25seSBzZW50IG92ZXIgSFRUUFNcclxuICAgICAgICAgICAgY29va2llU3RyaW5nICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7IC8vIG9yICdMYXgnIGlmIHlvdSBuZWVkIHNvbWUgY3Jvc3Mtc2l0ZSB1c2FnZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTm90ZTogSHR0cE9ubHkgY2Fubm90IGJlIHNldCB2aWEgSmF2YVNjcmlwdCAtIG11c3QgYmUgc2V0IHNlcnZlci1zaWRlXHJcbiAgICAgICAgICAgIC8vIFRoZSBwYXJhbWV0ZXIgaXMgaW5jbHVkZWQgZm9yIGRvY3VtZW50YXRpb24gcHVycG9zZXNcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBkYXlzVG9FeHBpcmU/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vICAgICBsZXQgY29va2llU3RyaW5nID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YDtcclxuICAgICAgICBcclxuICAgIC8vICAgICBpZiAoZGF5c1RvRXhwaXJlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5c1RvRXhwaXJlICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgLy8gICAgICAgICBjb29raWVTdHJpbmcgKz0gYDsgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgICBcclxuICAgIC8vICAgICBjb29raWVTdHJpbmcgKz0gJzsgcGF0aD0vJztcclxuICAgIC8vICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IG5hbWVFUSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArIFwiPVwiO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvb2tpZSA9IGNvb2tpZXNbaV07XHJcbiAgICAgICAgICAgIHdoaWxlIChjb29raWUuY2hhckF0KDApID09PSAnICcpIHtcclxuICAgICAgICAgICAgY29va2llID0gY29va2llLnN1YnN0cmluZygxLCBjb29raWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29va2llLmluZGV4T2YobmFtZUVRKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCwgY29va2llLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvb2tpZShuYW1lOiBzdHJpbmcsIHBhdGg6IHN0cmluZyA9ICcvJywgZG9tYWluPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBjb29raWUgZXhwaXJhdGlvbiB0byBhIHBhc3QgZGF0ZVxyXG4gICAgICAgIGNvbnN0IHBhc3REYXRlID0gbmV3IERhdGUoMCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBCdWlsZCB0aGUgY29va2llIHN0cmluZ1xyXG4gICAgICAgIGxldCBjb29raWVTdHJpbmcgPSBgJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9PTsgZXhwaXJlcz0ke3Bhc3REYXRlfTsgcGF0aD0ke3BhdGh9YDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgZG9tYWluIGlmIHNwZWNpZmllZFxyXG4gICAgICAgIGlmIChkb21haW4pIHtcclxuICAgICAgICAgICAgY29va2llU3RyaW5nICs9IGA7IGRvbWFpbj0ke2RvbWFpbn1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTZXQgdGhlIGNvb2tpZVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cmluZztcclxuICAgICAgICBcclxuICAgICAgICAvLyBTb21lIGJyb3dzZXJzIHJlcXVpcmUgc2FtZVNpdGUgYXR0cmlidXRlIGZvciBwcm9wZXIgZGVsZXRpb25cclxuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmNvb2tpZSA9PT0gJ3N0cmluZycgJiYgZG9jdW1lbnQuY29va2llLmluZGV4T2YobmFtZSkgPj0gMCkge1xyXG4gICAgICAgICAgICBjb29raWVTdHJpbmcgKz0gJzsgc2FtZVNpdGU9c3RyaWN0JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBydW5BdXRvU2F2ZVByb2Nlc3MoYXBpQ29uZmlnRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiBhcGlDb25maWdEYXRhLmhhbmRsZXIsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBudWxsLFxyXG4gICAgICAgICAgICBldmVudF9zdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzdG9yYWdlVHlwZTogYXBpQ29uZmlnRGF0YS5zdG9yYWdlVHlwZSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKlwiLGFwaUNvbmZpZ0RhdGEpXHJcbiAgICAgICAgdGhpcy5jZWVBcGlDYWxsaW5nU2VydmljZShhcGlDb25maWdEYXRhKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJAQEBAQEBAQEBAQEBAQEBcIixyZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXREYXRhVG9DZWUocmVzcG9uc2UsIHJlcywgYXBpQ29uZmlnRGF0YSwgdHJ1ZSk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBPY2N1cnJlZCBmb3IgaGFuZGxlcjogJHthcGlDb25maWdEYXRhLmhhbmRsZXJ9IGFuZCAke0pTT04uc3RyaW5naWZ5KGVycm9yKX1gKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgKiBmdW5jdGlvbiB0aGF0IGVtaXRzIGJhY2sgdGhlIGFwaSByZXNwb25zZSBmb3IgYSBwYXJ0aWN1bGFyIGFwaVxyXG4gICAqIEBwYXJhbSByZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICogQHBhcmFtIHJlcyB0aGUgcmVzcG9uc2VcclxuICAgKiBAcGFyYW0gaXNFdmVudCBpZiB0aGUgaGFuZGxlciBpcyBjYWxsZWQgZnJvbSBhbiBldmVudFxyXG4gICAqIEBwYXJhbSBzdWNjZXNzIGlmIHRoZSBhcGkgcmVzIGlzIHN1Y2Nlc3NcclxuICAgKi9cclxuICAgIHByaXZhdGUgZW1pdERhdGFUb0NlZShyZXNwb25zZSwgcmVzLCBhcGlDb25maWdEYXRhLCBzdWNjZXNzKSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXM7XHJcbiAgICAgICAgcmVzcG9uc2UucmVzcG9uc2UgPSByZXMuYm9keSB8fCByZXMuZXJyb3I7XHJcbiAgICAgICAgcmVzcG9uc2UuZXZlbnRfc3VjY2VzcyA9IHN1Y2Nlc3M7XHJcbiAgICAgICAgLyogRVNCIEFQSSBJTlRJR1JBVElPTiAqL1xyXG4gICAgICAgIGlmIChhcGlDb25maWdEYXRhLmlzRVNCICYmIHJlc3BvbnNlLnJlc3BvbnNlLmFwaV9yZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5yZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2UuYXBpX3Jlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRVNCIEFQSSBJTlRJR1JBVElPTiAoRU5EKSAqL1xyXG4gICAgICAgIGlmIChhcGlDb25maWdEYXRhLmlzRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmV2ZW50UmVzcG9uc2VTdWJzY3JpYmVyLmVtaXQocmVzcG9uc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRSZXNwb25zZUhhbmRsZXIuZW1pdEFQSURBVEEocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIENFRSBpbnRlcm5hbCBBUEkgU2VydmljZSB0aGF0IGhpdHMgdGhlIGFwaVxyXG4gICAqIEBwYXJhbSBhcGlDb25maWdEYXRhIHRoZSBhcGkgY29uZmlnIGRhdGEgZm9yIHRoZSBoYW5kbGVyXHJcbiAgICogdmlhIGludGVybmFsIGxpYnJhcmllcyBvZiBDRUVcclxuICAgKi9cclxuICAgIHByaXZhdGUgY2VlQXBpQ2FsbGluZ1NlcnZpY2UoYXBpQ29uZmlnRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gYXBpQ29uZmlnRGF0YVsnaGVhZGVycyddID8gYXBpQ29uZmlnRGF0YVsnaGVhZGVycyddIDoge307XHJcbiAgICAgICAgLy8gc2V0IGhlYWRlciByZXF1ZXN0IHR5cGVcclxuICAgICAgICBzd2l0Y2ggKGFwaUNvbmZpZ0RhdGEucmVxdWVzdFR5cGUpIHtcclxuICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9qc29uJzpcclxuICAgICAgICBjYXNlICdtdWx0aXBhcnQvZm9ybS1kYXRhJzpcclxuICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOlxyXG4gICAgICAgIGNhc2UgJ3RleHQvcGxhaW4nOlxyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGFwaUNvbmZpZ0RhdGEucmVxdWVzdFR5cGU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgcmVxdWVzdCB0eXBlIGluIHJldHVybkhlYWRlcnM6ICR7YXBpQ29uZmlnRGF0YS5yZXF1ZXN0VHlwZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhcGlVUkwgPSBhcGlDb25maWdEYXRhLnVybDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHVybCBwYXJhbVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFwaUNvbmZpZ0RhdGEudXJsUGFyYW1zKSkge1xyXG4gICAgICAgIGlmIChhcGlVUkwuaW5jbHVkZXMoYHske2tleX19YCkpIHtcclxuICAgICAgICAgICAgYXBpVVJMID0gYXBpVVJMLnNwbGl0KGB7JHtrZXl9fWApLmpvaW4oYXBpQ29uZmlnRGF0YS51cmxQYXJhbXNba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHF1ZXJ5IHBhcmFtXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXBpQ29uZmlnRGF0YS5xdWVyeVBhcmFtcykpIHtcclxuICAgICAgICBpZiAoYXBpVVJMLmluY2x1ZGVzKGB7JHtrZXl9fWApKSB7XHJcbiAgICAgICAgICAgIGFwaVVSTCA9IGFwaVVSTC5zcGxpdChgeyR7a2V5fX1gKS5qb2luKGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXNba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHJlcXVlc3QgYm9keVxyXG4gICAgICAgIGxldCByZXF1ZXN0Qm9keSA9IHRoaXMuZm9ybVJlcXVlc3RCb2R5KGFwaUNvbmZpZ0RhdGEucmVxdWVzdEJvZHksIGFwaUNvbmZpZ0RhdGEucmVxdWVzdFR5cGUpO1xyXG4gICAgICAgIC8qIEVTQiBBUEkgSU5USUdSQVRJT04gKi9cclxuICAgICAgICBpZiAoYXBpQ29uZmlnRGF0YS5pc0VTQikge1xyXG4gICAgICAgIHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICAgICAgICBhcGlfcmVxdWVzdDogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogRVNCIEFQSSBJTlRJR1JBVElPTiAoRU5EKSAqL1xyXG4gICAgICAgIHN3aXRjaCAoYXBpQ29uZmlnRGF0YS5tZXRob2RUeXBlLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICBjYXNlICdQVVQnOlxyXG4gICAgICAgIGNhc2UgJ1BBVENIJzpcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFthcGlDb25maWdEYXRhLm1ldGhvZFR5cGUudG9Mb3dlckNhc2UoKV0oXHJcbiAgICAgICAgICAgIGFwaVVSTCxcclxuICAgICAgICAgICAgcmVxdWVzdEJvZHksXHJcbiAgICAgICAgICAgIHsgaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHBbYXBpQ29uZmlnRGF0YS5tZXRob2RUeXBlLnRvTG93ZXJDYXNlKCldKFxyXG4gICAgICAgICAgICBhcGlVUkwsXHJcbiAgICAgICAgICAgIHsgaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtUmVxdWVzdEJvZHkocmVxdWVzdERhdGE6IGFueSwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAndGV4dC9wbGFpbic6XHJcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcclxuICAgICAgICBjYXNlICdtdWx0aXBhcnQvZm9ybS1kYXRhJzpcclxuICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocmVxdWVzdERhdGEpKSB7XHJcbiAgICAgICAgICAgIGZkLmFwcGVuZChrZXksIHJlcXVlc3REYXRhW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmZDtcclxuICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOlxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXF1ZXN0RGF0YSkpIHtcclxuICAgICAgICAgICAgYm9keS5zZXQoa2V5LCByZXF1ZXN0RGF0YVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYm9keS50b1N0cmluZygpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgcmVxdWVzdCB0eXBlIGluIGZvcm1SZXF1ZXN0Qm9keTogJHt0eXBlfWApO1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAgIGdldCBoYXNVbnNhdmVkRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc191bnNhdmVkX2RhdGEnKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2RhbE9uUGFnZUxlYXZlKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kYWxfb25fcGFnZV9sZWF2ZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGFsX29uX3BhZ2VfbGVhdmUnKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnLCBbJyRldmVudCddKVxyXG4gICAgLy8gdW5sb2FkTm90aWZpY2F0aW9uKCRldmVudDogYW55KSB7XHJcbiAgICAvLyAgICAgLy8gaWYgKHRoaXMuZ2xvYmFsUGFyYW1ldGVyc1tcImV4dGVybmFsU2l0ZVByb21wdFwiXSAmJiAkZXZlbnQuc3JjRWxlbWVudC5hY3RpdmVFbGVtZW50LmxvY2FsTmFtZSA9PT0gJ2EnKSB7XHJcbiAgICAvLyAgICAgLy8gICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5kaXNwbGF5TW9kYWwoeyBldmVudF9oYW5kbGVyOiB0aGlzLmdsb2JhbFBhcmFtZXRlcnNbXCJleHRlcm5hbFNpdGVQcm9tcHRcIl0gfSk7XHJcbiAgICAvLyAgICAgLy8gICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIC8vICAgICAkZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgLy8gICAgIC8vIH0gZWxzZVxyXG4gICAgLy8gICAgIGlmICh0aGlzLmhhc1Vuc2F2ZWREYXRhICYmIHRoaXMubW9kYWxPblBhZ2VMZWF2ZSkge1xyXG4gICAgLy8gICAgICAgICAkZXZlbnQucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7IH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJywgWyckZXZlbnQnXSlcclxudW5sb2FkTm90aWZpY2F0aW9uKCRldmVudDogYW55KSB7XHJcbiAgICAvLyBPbmx5IHNob3cgZGlhbG9nIGlmIHdlIGhhdmUgdW5zYXZlZCBkYXRhIGFuZCBtb2RhbCBmbGFnIGlzIG9uXHJcbiAgICBpZiAodGhpcy5oYXNVbnNhdmVkRGF0YSAmJiB0aGlzLm1vZGFsT25QYWdlTGVhdmUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnU2hvd2luZyBiZWZvcmV1bmxvYWQgZGlhbG9nIC0gdW5zYXZlZCBkYXRhIGV4aXN0cycpO1xyXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIG1vZGVybiBzdGFuZGFyZCB3YXkgdG8gdHJpZ2dlciB0aGUgZGlhbG9nXHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXHJcbiAgICAgICAgJGV2ZW50LnJldHVyblZhbHVlID0gdHJ1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGFzX3Vuc2F2ZWRfZGF0YScsICAnZmFsc2UnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRm9yIGFsbCBvdGhlciBjYXNlcywgYXR0ZW1wdCB0byBwcmV2ZW50IHRoZSBkaWFsb2cgd2l0aCBhbGwga25vd24gbWV0aG9kc1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1ByZXZlbnRpbmcgYmVmb3JldW5sb2FkIGRpYWxvZyAtIG5vIHVuc2F2ZWQgZGF0YScpO1xyXG4gICAgLy8gRXhwbGljaXRseSByZXR1cm4gbnVsbCBhbmQgZG9uJ3QgY2FsbCBwcmV2ZW50RGVmYXVsdFxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5cHJlc3MnLCBbJyRldmVudCddKSBoYW5kbGVLZXlib2FyZEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vdERhdGFbJ0JpbmRLZXknXVtTdHJpbmcoZXZlbnQua2V5KV0pIHtcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnQmluZEtleSddW1N0cmluZyhldmVudC5rZXkpXSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGlhbG9nKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oTW9kYWxSZW5kZXJlckNvbXBvbmVudCwgeyBkYXRhOiB7IHN0ZXBJZDogZGF0YS50aWQgfSwgaWQ6IGBzdGVwTW9kYWwtJHtkYXRhLnRpZH1gLCBwYW5lbENsYXNzOiBgc3RlcE1vZGFsLSR7ZGF0YS50aWR9YCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cG9wc3RhdGUnLCBbJyRldmVudCddKVxyXG4gICAgb25Qb3BTdGF0ZShldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc09uTGVhdmVFdmVudCkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgZG9jdW1lbnQubG9jYXRpb24udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcEV2ZW50KCdvbkxlYXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJhY2tCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkJhY2tCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3JjZU9uQmFjaycpKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb3JjZU9uQmFjaycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vdmVycmlkZUJhY2tCdXR0b25WYWx1ZSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgZG9jdW1lbnQubG9jYXRpb24udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2xvYWRTdGVwXycgKyB0aGlzLnN0ZXBJZF0gPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRTdGVwQnlJZCh0aGlzLm92ZXJyaWRlQmFja0J1dHRvblZhbHVlKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhLmRpc3BsYXlfYXNfbW9kYWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RhbE9uUGFnZUxlYXZlICYmICEodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydPblBhZ2VMZWF2ZUNoZWNrVHlwZSddID09PSAnc2F2ZWQnICYmICF0aGlzLmhhc1Vuc2F2ZWREYXRhKSkge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgZG9jdW1lbnQubG9jYXRpb24udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2xvYWRTdGVwXycgKyB0aGlzLnN0ZXBJZF0gPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRTdGVwQnlJZCh0aGlzLm1vZGFsT25QYWdlTGVhdmUpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEuZGlzcGxheV9hc19tb2RhbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25Qb3BTdGF0ZSBpbnRlcnZhbElkOlwiLHRoaXMuaW50ZXJ2YWxJZClcclxuICAgICAgICBpZih0aGlzLmludGVydmFsSWQgJiYgIXRoaXMuZ2xvYmFsUGFyYW1ldGVyc1tcIkF1dG9TYXZlQVBJXCJdKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVW5jb21tZW50IGl0IEVuZFxyXG4gICAgfVxyXG4gICAgc2x1Z2lmeSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL0BtaGFnZW1hbm4vdGhlLXVsdGltYXRlLXdheS10by1zbHVnaWZ5LWEtdXJsLXN0cmluZy1pbi1qYXZhc2NyaXB0LWI4ZTRhMGQ4NDllMVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJyk7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJkb21haW4odXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKTtcclxuICAgICAgICAgICAgY29uc3QgaG9zdG5hbWVQYXJ0cyA9IHBhcnNlZFVybC5ob3N0bmFtZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgbG9jYWxob3N0XHJcbiAgICAgICAgICAgIGlmIChwYXJzZWRVcmwuaG9zdG5hbWUuaW5jbHVkZXMoJ2xvY2FsaG9zdCcpICYmIGhvc3RuYW1lUGFydHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RuYW1lUGFydHNbMF07IC8vIFJldHVybiB0aGUgZmlyc3QgcGFydCBiZWZvcmUgXCIubG9jYWxob3N0XCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgaGFuZGxpbmcgZm9yIHN1YmRvbWFpbnNcclxuICAgICAgICAgICAgaWYgKGhvc3RuYW1lUGFydHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvc3RuYW1lUGFydHNbMF07IC8vIFJldHVybiB0aGUgZmlyc3QgcGFydCAoc3ViZG9tYWluKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJyc7IC8vIE5vIHN1YmRvbWFpbiBmb3VuZFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgVVJMJywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFnZW50TmFtZSgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZVN1YmRvbWFpbkhhbmRsaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9TVUJET01BSU5fSEFORExJTkcnKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVN1YmRvbWFpbkhhbmRsaW5nID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViZG9tYWlua2V5ID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9zdWJkb21haW4nKTtcclxuICAgICAgICAgICAgaWYgKHN1YmRvbWFpbmtleSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViZG9tYWluID0gdGhpcy5nZXRTdWJkb21haW4od2luZG93LmxvY2F0aW9uLmhyZWYpOyAvLyBQYXNzIGEgZnVsbCBVUkxcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWJkb21haW4qKionLCBzdWJkb21haW4pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1YmRvbWFpbmtleSoqJywgc3ViZG9tYWlua2V5KVxyXG4gICAgICAgICAgICAgICAgaWYgKHN1YmRvbWFpbmtleS5pbmNsdWRlcygnIyMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbFQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxUW3N1YmRvbWFpbmtleV0gPSBzdWJkb21haW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsVFsnaGFuZGxlcl9uYW1lJ10gPSBzdWJkb21haW5rZXkuc3BsaXQoJyMjJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHN1YmRvbWFpbmtleS5zcGxpdCgnIyMnKVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpVXJsOiBzdWJkb21haW5rZXkuc3BsaXQoJyMjJylbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleTogc3ViZG9tYWlua2V5LnNwbGl0KCcjIycpWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsVFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5zZXRBcGlEYXRhKE9iamVjdC5hc3NpZ24oe30sIGFwaURhdGEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5kZWZhdWx0TGFuZykge1xyXG4gICAgICAgICAgICAkKCdodG1sJykuYXR0cignbGFuZycsIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuZGVmYXVsdExhbmcucmVwbGFjZSgnLycsICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHJvb3QgZGF0YVxyXG4gICAgICAgIHRoaXMucm9vdERhdGFbJ0JpbmRLZXknXSA9IHt9O1xyXG4gICAgICAgIHRoaXMucm9vdERhdGFbJ2xhbmdDaGFuZ2VkJ10gPSBmYWxzZTsgLy8gc2V0IHRoZSBsYW5ndWFnZSBjaGFuZ2VkIHRvIGZhbHNlXHJcbiAgICAgICAgdGhpcy5yb290RGF0YVsnRmllbGRMb2FkU3RhY2snXVsnY291bnQnXSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGVwSXNDb21wbGV0ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlU3RlcE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmF2aWdhdGVTdGVwTmFtZScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVN0ZXBOYW1lT25seSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYXZpZ2F0ZVN0ZXBOYW1lT25seScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCImJiYmJiYmJiYmJiYmJiYmJiYgU3RlcCBSZW5kZXIgJiYmJiYmJiYmJiYmJiYmJiYmJiYmXCIsdGhpcy5zdGVwSWQpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIlJSUlJSUlJSUlJSUgaW50ZXJ2YWxJZDogJSUlJSUlJSUlJSUlXCIsdGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICAgIGlmKHRoaXMuaW50ZXJ2YWxJZCAmJiAhdGhpcy5nbG9iYWxQYXJhbWV0ZXJzW1wiQXV0b1NhdmVBUElcIl0pIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGVwSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnByZWZldGNoQmFzZUpTT04oKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFnZW50TmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0aGlzLnJldHVyblN0ZXBJZCh0aGlzLnN0ZXBJZClcclxuICAgICAgICAgICAgICAgIGxldCBjb25maWdDb3B5ID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5iYXNlSlNPTkRhdGEgJiYgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5iYXNlSlNPTkRhdGEuc2lkZW1lbnVfYmxvY2sgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuYmFzZUpTT05EYXRhLnNpZGVtZW51X2Jsb2NrKSk6ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYoY29uZmlnQ29weSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWRlQmFyRGF0YSA9IHRoaXMuc2lkZW1lbnVVdGlsLnNldFNpZGVtZW51QmxvY2tTdGF0ZU9uRGF0YUVtaXQoe30sIGNvbmZpZ0NvcHksdGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkZUJhckRhdGFQcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBvciBub3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJSb2xlID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRVc2VyUm9sZVZhbHVlKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0RmllbGREYXRhKCdVc2VyUm9sZScpKSB8fCAnJztcclxuICAgICAgICAgICAgICAgIGxldCBzdGVwRGF0YUNhY2hlID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5nZXRTdGVwRGF0YUZyb21DYWNoZSh0aGlzLnN0ZXBJZClcclxuICAgICAgICAgICAgICAgIGlmKHN0ZXBEYXRhQ2FjaGUpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNlZUluaXRTZXJ2aWNlLmFwcENvbmZpZ0RhdGFbJ1NLSVBfSlNPTl9MT0FERVInXSkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UubG9hZGluZ1N0YWNrKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5pc0xvYWRpbmcubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQ2FjaGVMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5sb2FkaW5nU3RhY2stLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZXJTZXJ2aWNlLmxvYWRpbmdTdGFjayA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5pc0xvYWRpbmcubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5jaGVja1VzZXJSb2xlQWNjZXNzKHVzZXJSb2xlLCBzdGVwRGF0YUNhY2hlLCBhc3luYyAoc3RlcERhdGEsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vlc3NTdGVwRGF0YShzdGVwRGF0YSwgZXJyb3IsIHVzZXJSb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnByb2NlZXNzU3RlcERhdGEoc3RlcERhdGFDYWNoZSwgXCJcIiwgdXNlclJvbGUpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BDYWNoZUxvYWRlciA9ICgpID0+IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuZ2V0V0ZFU3RlcERhdGEodXNlclJvbGUsIHRoaXMuc3RlcElkLCBhc3luYyAoc3RlcERhdGEsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2Uuc2V0U3RlcERhdGFJbkNhY2hlKHRoaXMuc3RlcElkLHN0ZXBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWVzc1N0ZXBEYXRhKHN0ZXBEYXRhLCBlcnJvciwgdXNlclJvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydlbWl0QXBpU3VjY2Vzc1Jlc18nICsgdGhpcy5zdGVwSWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2Uuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHbG9iYWxDb25zdGFudHNPbkRhdGFFbWl0KHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzc0Jsb2NrU3RhdGVPbkRhdGFFbWl0KHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpZ0NvcHkgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmJhc2VKU09ORGF0YSAmJiB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmJhc2VKU09ORGF0YS5zaWRlbWVudV9ibG9jayA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5iYXNlSlNPTkRhdGEuc2lkZW1lbnVfYmxvY2spKTogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlnQ29weSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkZUJhckRhdGEgPSB0aGlzLnNpZGVtZW51VXRpbC5zZXRTaWRlbWVudUJsb2NrU3RhdGVPbkRhdGFFbWl0KHJlcywgY29uZmlnQ29weSx0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkZUJhckRhdGFQcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnZW1pdE1vZGFsUmVzXycgKyB0aGlzLnN0ZXBJZF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UubW9kZWxFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyUmVuZGVyZXIgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGxpc3RlbiB0byBsYW5ndWFnZSBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2xhbmd1YWdlQ2hhbmdlXycgKyB0aGlzLnN0ZXBJZF0gPSB0aGlzLmludGVyQ0VFRW1pdHRlci5sYW5ndWFnZUNoYW5nZUVtaXR0ZXIuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5zdGVwRGF0YVN0b3JlID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5ibG9ja0RhdGFTdG9yZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzdGVwRGF0YUNhY2hlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RCbG9ja0xvYWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdibG9ja0RhdGFDYWNoZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgb25seSB3aGVuIHRoZSBsYW5ndWFnZSBkb2VzIG5vdCBtYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmRlZmF1bHRMYW5nICE9PSByZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5kZWZhdWx0TGFuZyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmV0Y2ggdGhlIGJhc2Ugd2ZlIGpzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmV0Y2ggdGhlIHN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFwIHRoZSBtZXNzYWdlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRPbkxhbmdDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVyblN0ZXBJZCh0aGlzLnN0ZXBJZCksIHJlcykuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmJhc2VKU09ORGF0YSA9IHJlc3VsdFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLm1hcERhdGEodXNlclJvbGUsIHJlc3VsdCwgYXN5bmMgKHN0ZXBEYXRhLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0ZXAgTG9hZGluZyBFcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy93ZmUvc3RlcC80MDQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcERhdGEgPSBzdGVwRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQmxvY2tzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW1idXJnZXJtZW51QmxvY2tEYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyQmxvY2tzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBZGRpdGlvbmFsUGFyYW1ldGVyT25TdGVwTG9hZCh0aGlzLnN0ZXBEYXRhLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YSA9IHsgLi4udGhpcy5yb290RGF0YSwgLi4ueyBsYW5nQ2hhbmdlZDogdHJ1ZSB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0ZXBFdmVudCgnb25sb2FkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3RlcCBMb2FkaW5nIEVycm9yJywgZXJyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy93ZmUvc3RlcC80MDQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoKS5vbignY2xpY2snLCBcImxhYmVsLmNvbC1mb3JtLWxhYmVsIGE6bm90KC5uby1wb3B1cC1saW5rKVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gJCh0aGlzKS5wcm9wKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykucHJvcCgndGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5nbG9iYWxQYXJhbWV0ZXJzW1wiZXh0ZXJuYWxTaXRlUHJvbXB0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlTGVhdmVTdGVwSWQgJiYgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BhZ2VfbGVhdmVfc3RlcF9pZCcpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhZ2VfbGVhdmVfaHJlZicsIGxpbmspO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYWdlX2xlYXZlX2hyZWZfdGFyZ2V0JywgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLmRpc3BsYXlNb2RhbCh7IGV2ZW50X2hhbmRsZXI6IF90aGlzLmdsb2JhbFBhcmFtZXRlcnNbJ2V4dGVybmFsU2l0ZVByb21wdCddIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzQnV0dG9uSW52b2tlQXBpJywgJzAnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWRlQmFyRGF0YVByb2Nlc3MoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zaWRlQmFyRGF0YSAmJiB0eXBlb2YgdGhpcy5zaWRlQmFyRGF0YSA9PT0gJ29iamVjdCcgJiYgdGhpcy5zaWRlQmFyRGF0YSAhPT0gbnVsbCAmJiB0aGlzLnNpZGVCYXJEYXRhLnNpZGVtZW51QmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlQmFyRGF0YS5zaWRlbWVudUJsb2NrLnN1Ym1lbnUgPSB0aGlzLnJlY3VzaXZlbHlDaGVja01lbnVEZXBlbmRlbmN5KHRoaXMuc2lkZUJhckRhdGE/LnNpZGVtZW51QmxvY2s/LnN1Ym1lbnUpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2lkZW1lbnVEYXRhIGFmdGVyPj4+Pj5cIiwgdGhpcy5zaWRlQmFyRGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjdXN0b21FdmVudCA9IHtcclxuICAgICAgICAgICAgLy8gICAgIHR5cGUgOiBcInNpZGVCYXJEYXRhXCIsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhIDogdGhpcy5zaWRlQmFyRGF0YVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0VG9yZWFjdEVtaXR0ZXIuZW1pdChjdXN0b21FdmVudCk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzaWRlQmFyRGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNpZGVCYXJEYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY3VzaXZlbHlDaGVja01lbnVEZXBlbmRlbmN5KG1lbnVEYXRhKSB7XHJcbiAgICAgICAgaWYobWVudURhdGEgJiYgbWVudURhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbnVEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51RGF0YS5mb3JFYWNoKChtZW51RGF0YUl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVEYXRhW2luZGV4XVsnaXNWaXNpYmxlJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAobWVudURhdGFJdGVtICYmIG1lbnVEYXRhSXRlbS5tZW51X2NvbmRpdGlvbiAmJiBtZW51RGF0YUl0ZW0ubWVudV9jb25kaXRpb24ubGVuZ3RoID4gMCAmJiBtZW51RGF0YUl0ZW0ubWVudV9jb25kaXRpb25bMF0ucXVlcnkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgbWVudURhdGFbaW5kZXhdWydpc1Zpc2libGUnXSA9IHRoaXMuY2hlY2tNZW51RGVwZW5kZW5jeShtZW51RGF0YUl0ZW0ubWVudV9jb25kaXRpb25bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lbnVEYXRhW2luZGV4XVsnc3VibWVudSddID0gdGhpcy5yZWN1c2l2ZWx5Q2hlY2tNZW51RGVwZW5kZW5jeShtZW51RGF0YUl0ZW0uc3VibWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1lbnVEYXRhO1xyXG4gICAgfSBcclxuXHJcblxyXG4gICAgY2hlY2tNZW51RGVwZW5kZW5jeShkZXBlbmRlbmN5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ZlQ29uZGl0aW9uYWxFeGVjdXRlci5ldmFsdWF0ZUNvbmRpdGlvblF1ZXJ5KFxyXG4gICAgICAgICAgICBkZXBlbmRlbmN5Q29uZGl0aW9uLnF1ZXJ5LFxyXG4gICAgICAgICAgICBkZXBlbmRlbmN5Q29uZGl0aW9uLmNvbmRpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tCeVNlY3Rpb24oaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5zZWN0aW9uX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3RBZnRlckZpcnN0U2VnbWVudCh1cmw6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pOyAvLyByZW1vdmVzIGVtcHR5IHN0cmluZ3MgZnJvbSBcIi8vXCJcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoIDw9IDEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiAnLycgKyBwYXJ0cy5zbGljZSgxKS5qb2luKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmF2ZXJzZXMgdGhlIHN0ZXAgZGF0YSB0cmVlIGFuZCBidWlsZHMgYSBoaWVyYXJjaGljYWwgb2JqZWN0IHJlcHJlc2VudGluZ1xyXG4gICAgICogdGhlIHN0cnVjdHVyZTogc3RlcF9uYW1lIC0+IHNlY3Rpb25fbmFtZSAtPiAobmVzdGVkIHNlY3Rpb25zKSAtPiBmaWVsZHMuXHJcbiAgICAgKiBXaGlsZSB0cmF2ZXJzaW5nLCBpdCBhbHNvIGNvbGxlY3RzIGFsbCBsaW5rZWRfYmxvY2tfaWQgdmFsdWVzIG9mIGZpZWxkc1xyXG4gICAgICogd2l0aCBmaWVsZF90eXBlIFwiUmVwZWF0YWJsZSBCbG9ja1wiIGludG8gdGhlIGByYnNgIGFycmF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzdGVwRGF0YSBUaGUgc3RlcCBkYXRhIG9iamVjdCBjb250YWluaW5nIHNlY3Rpb25zIGFuZCBmaWVsZHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBoaWVyYXJjaGljYWwgdHJlZSBvZiB0aGUgc3RlcC5cclxuICAgICovICAgIFxyXG4gICAgcHJpdmF0ZSB0cmF2ZXJzZVN0ZXBUcmVlKHN0ZXBEYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICghc3RlcERhdGEgfHwgIXN0ZXBEYXRhLnN0ZXBfbmFtZSB8fCAhc3RlcERhdGEuc2VjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgc3RlcERhdGEgcHJvdmlkZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qgc3RlcE5hbWUgPSBzdGVwRGF0YS5zdGVwX25hbWU7XHJcbiAgICAgICAgY29uc3QgdHJlZTogYW55ID0ge307XHJcbiAgICAgICAgdHJlZVtzdGVwTmFtZV0gPSB7fTtcclxuICAgICAgICB0aGlzLnJicyA9IFtdXHJcbiAgICBcclxuICAgICAgICAvLyBSZWN1cnNpdmUgZnVuY3Rpb24gdG8gcHJvY2VzcyBzZWN0aW9ucyBhbmQgbmVzdGVkIHNlY3Rpb25zXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc1NlY3Rpb25zID0gKHNlY3Rpb25zOiBhbnlbXSwgcGFyZW50Tm9kZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBzZWN0aW9uLnNlY3Rpb25fbmFtZSB8fCBgVW5uYW1lZCBTZWN0aW9uICgke3NlY3Rpb24uc2VjdGlvbl9pZH0pYDtcclxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGVbc2VjdGlvbk5hbWVdID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBmaWVsZHMgaW4gdGhlIGN1cnJlbnQgc2VjdGlvbiBhbmRcclxuICAgICAgICAgICAgICAgIC8vIENvbGxlY3QgYmxvY2tfaWQgZm9yIFwiUmVwZWF0YWJsZSBCbG9ja1wiLCBcIkxpc3QtVjJcIiBmaWVsZHNcclxuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLmZpZWxkcyAmJiBBcnJheS5pc0FycmF5KHNlY3Rpb24uZmllbGRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50Tm9kZVtzZWN0aW9uTmFtZV1bJ2ZpZWxkcyddID0gc2VjdGlvbi5maWVsZHMubWFwKGZpZWxkID0+IGZpZWxkLmZpZWxkX3R5cGUgfHwgJ1Vua25vd24gRmllbGQgVHlwZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyclJCUyA9IHNlY3Rpb24uZmllbGRzLmZpbHRlcihmaWVsZCA9PiBmaWVsZC5maWVsZF90eXBlID09IFwiUmVwZWF0YWJsZSBCbG9ja1wiKS5tYXAoZmllbGQgPT4gZmllbGQucmVwZWF0YWJsZV9ibG9ja19jb25maWd1cmF0aW9uLmxpbmtlZF9ibG9ja19pZCB8fCAnVW5rbm93biBCbG9jayBJRCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmJzID0gdGhpcy5yYnMuY29uY2F0KGFyclJCUyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyckxpc3RzID0gc2VjdGlvbi5maWVsZHMuZmlsdGVyKGZpZWxkID0+IGZpZWxkLmZpZWxkX3R5cGUgPT0gXCJMaXN0LVYyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJMaXN0QmxvY2tzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBmaWVsZCBvZiBhcnJMaXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHRyYWN0IGRlZmF1bHRfdmFsdWUgZnJvbSBhZGRpdGlvbmFsX3BhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzPy5maW5kKHBhcmFtID0+IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpPy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJMaXN0QmxvY2tzLnB1c2goZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJicyA9IHRoaXMucmJzLmNvbmNhdChhcnJMaXN0QmxvY2tzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXJlbnROb2RlW3NlY3Rpb25OYW1lXVsncmJzJ10gPSBhcnJSQlM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgcHJvY2VzcyBuZXN0ZWQgc2VjdGlvbnNcclxuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLnNlY3Rpb25zICYmIEFycmF5LmlzQXJyYXkoc2VjdGlvbi5zZWN0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzU2VjdGlvbnMoc2VjdGlvbi5zZWN0aW9ucywgcGFyZW50Tm9kZVtzZWN0aW9uTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gU3RhcnQgcHJvY2Vzc2luZyBzZWN0aW9uc1xyXG4gICAgICAgIHByb2Nlc3NTZWN0aW9ucyhzdGVwRGF0YS5zZWN0aW9uLCB0cmVlW3N0ZXBOYW1lXSk7XHJcbiAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnR2VuZXJhdGVkIFRyZWU6JywgSlNPTi5zdHJpbmdpZnkodHJlZSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdHZW5lcmF0ZWQgVHJlZTonLCB0aGlzLnJicyk7XHJcbiAgICAgICAgcmV0dXJuIHRyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2t1cmxQcmVzZW50KGlucHV0U3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBpbnB1dFN0cmluZy5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlci51cmw7XHJcbiAgICAgICAgbGV0IGlzUHJlc2VudCA9IGFyci5zb21lKHZhbHVlID0+IGN1cnJlbnRVcmwuaW5jbHVkZXModmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gaXNQcmVzZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vlc3NTdGVwRGF0YShzdGVwRGF0YSwgZXJyb3IsIHVzZXJSb2xlPVwiXCIpIHtcclxuICAgICAgICAvLyBjb25zdCBUYXJnZXRTdGVwSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFyZ2V0U3RlcElkJyk7XHJcbiAgICAgICAgY29uc3QgVGFyZ2V0U3RlcElkID0gdGhpcy5nZXRDb29raWUoJ1RhcmdldFN0ZXBJZCcpO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoc3RlcERhdGEgJiYgc3RlcERhdGEuc2VjdGlvbikge1xyXG4gICAgICAgICAgICAvLyAjIyMjIyMjIyMjIyBTdXBwb3J0IGZvciBzZWN0aW9uIHdpdGhpbiBhIHNlY3Rpb24gIyMjIyMjIyMjIyMjXHJcbiAgICAgICAgICAgIHN0ZXBEYXRhLnNlY3Rpb24uZm9yRWFjaCgoc3RlcFNlY3Rpb24saW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9uTGlzdCA9IHN0ZXBEYXRhLnNlY3Rpb24uZmlsdGVyKChzZWMpID0+IHsgcmV0dXJuIHNlYy5wYXJlbnRfc2VjdGlvbl9pZCA9PSBzdGVwU2VjdGlvbi5zZWN0aW9uX2lkIH0pO1xyXG4gICAgICAgICAgICAgICAgc3RlcERhdGEuc2VjdGlvbltpbmRleF1bJ3NlY3Rpb25zJ10gPSBzZWN0aW9uTGlzdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0ZXBEYXRhLnNlY3Rpb24gPSBzdGVwRGF0YS5zZWN0aW9uLmZpbHRlcigoZWwpID0+IHsgcmV0dXJuICFlbC5wYXJlbnRfc2VjdGlvbl9pZCB8fCBlbC5wYXJlbnRfc2VjdGlvbl9pZCA9PSAnJyB9KTtcclxuICAgICAgICAgICAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwRGF0YSAmJiBzdGVwRGF0YS5kaXNwbGF5X2FzX21vZGFsICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubGFzdFN0ZXBSb290RGF0YSA9IHRoaXMucm9vdERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zdGVwRGF0YSB8fCB0aGlzLmZpeExheW91dCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsR2VuZXJpY0Nzc0NsYXNzID0gJ21vZGFsLXN0ZXAtJyArIHRoaXMuc3RlcElkO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCF0aGlzLmdldENvb2tpZSgnTGFuZGluZ1N0ZXBJZCcpKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGFyZ2V0U3RlcElkICYmIGVycm9yID09PSBcIk5vIHN0ZXAgZm91bmQgZm9yIHRoZSBnaXZlbiB1c2VyIHJvbGUuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuZ2V0RGVmYXVsdFN0ZXBCeVJvbGUodXNlclJvbGUpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jZWVJbml0U2VydmljZS5hcHBDb25maWdEYXRhWydDRUVfRk9SQ0VfTE9HSU4nXSAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMuZ2V0Q29va2llKCdMYW5kaW5nU3RlcElkJykgJiYgZXJyb3IgPT09IFwiTm8gc3RlcCBmb3VuZCBmb3IgdGhlIGdpdmVuIHVzZXIgcm9sZS5cIiApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNoZWNrdXJsUHJlc2VudCh0aGlzLmNlZUluaXRTZXJ2aWNlLmFwcENvbmZpZ0RhdGFbJ0NFRV9GT1JDRV9MT0dJTl9VUkwnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RVcmwgPSB0aGlzLmV4dHJhY3RBZnRlckZpcnN0U2VnbWVudCh0aGlzLnJvdXRlci51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdFVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc3RVcmwnLCBwb3N0VXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29va2llKCdwb3N0VXJsJywgcG9zdFVybCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0xhbmRpbmdTdGVwSWQnLCB0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29va2llKCdMYW5kaW5nU3RlcElkJywgdGhpcy5zdGVwSWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5yZW1vdmVBbGxBcHBEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY2VlSW5pdFNlcnZpY2UuYXBwQ29uZmlnRGF0YVsnQ0VFX0ZPUkNFX0xPR0lOJ10sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmJhc2VKU09ORGF0YSAmJiB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmJhc2VKU09ORGF0YS5zdGVwX2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yID09PSBcIk5vIHN0ZXAgZm91bmQgZm9yIHRoZSBnaXZlbiB1c2VyIHJvbGUuXCIgJiYgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5iYXNlSlNPTkRhdGEuc3RlcF9lcnJvcltcIjQwM1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIuZXZlbnRDb25maWcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9zdGVwOiB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmJhc2VKU09ORGF0YS5zdGVwX2Vycm9yW1wiNDAzXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtldmVudF9oYW5kbGVyOiAnJ30pIDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuYmFzZUpTT05EYXRhLnN0ZXBfZXJyb3JbXCI0MDRcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLmV2ZW50Q29uZmlnKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfc3RlcDogdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5iYXNlSlNPTkRhdGEuc3RlcF9lcnJvcltcIjQwNFwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7ZXZlbnRfaGFuZGxlcjogJyd9KSA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3RlcCBMb2FkaW5nIEVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvd2ZlL3N0ZXAvNDA0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTdGVwIExvYWRpbmcgRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3dmZS9zdGVwLzQwNCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHN0ZXAgSWRcclxuICAgICAgICAgICAgICAgIGlmIChzdGVwRGF0YS5kaXNwbGF5X2FzX21vZGFsICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydjdXJyZW50TW9kYWxJZCddID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydjdXJyZW50U3RlcElkJ10gPSBzdGVwRGF0YS50aWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29ya2Zsb3dEZXRhaWxzID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5nZXRXb3JrZmxvd0RldGFpbHMoc3RlcERhdGEudGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod29ya2Zsb3dEZXRhaWxzICYmIHdvcmtmbG93RGV0YWlscz8uc2VxdWVuY2VfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydjdXJyZW50V29ya2Zsb3dJZCddID0gd29ya2Zsb3dEZXRhaWxzLnNlcXVlbmNlX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydjdXJyZW50TW9kYWxJZCddID0gc3RlcERhdGEudGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJTdGVwID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hZFN0ZXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXBEYXRhLmNvbmRpdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXBEYXRhLmRlcGVuZGVuY3lfY29uZGl0aW9uLnF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1N0ZXBEZXBlbmRlbmN5KHN0ZXBEYXRhLmRlcGVuZGVuY3lfY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXBlbmRlbmN5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGN1cnJlbnQgc3RlcCBhcyBjb21wbGV0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5wcm9ncmVzc0Jhck1hcFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFdvcmtmbG93U2VxdWVuY2VJbmRleEZyb21TdGVwKGN1cnJTdGVwKS5zZXF1ZW5jZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAocHJvZ3Jlc3NCYXIgJiYgcHJvZ3Jlc3NCYXJbJ3Byb2dyZXNzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZS5zZXRDb21wbGV0ZShwcm9ncmVzc0JhclsncHJvZ3Jlc3MnXS5wcm9ncmVzc19iYXJfaWQsIGN1cnJTdGVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2VxdWVuY2VJZEFuZFNldERhdGEoY3VyclN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldE5leHRTdGVwSW5DdXJyZW50U2VxdWVuY2UoY3VyclN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFN0ZXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3Rpb25VdGlsLnJlZGlyZWN0VG8odGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgUGFnZSBvbiBsZWF2ZSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXBEYXRhLmRpc3BsYXlfYXNfbW9kYWwgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVycmlkZUJhY2tCdXR0b25WYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdoYXNfdW5zYXZlZF9kYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdtb2RhbF9vbl9wYWdlX2xlYXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYWdlX2xlYXZlX3N0ZXBfaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BhZ2VfbGVhdmVfaHJlZicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGFnZV9sZWF2ZV9ocmVmX3RhcmdldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2F2ZV9oYW5kbGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzX2Jvb3RzdHJhcCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc19ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl90eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnRhaW5lcl90eXBlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJfdHlwZSA9ICdjb250YWluZXItd3JhcHBlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBBcHBsaWNhdGlvbiBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgV2Vic2l0ZVRpdGxlID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRGaWVsZERhdGEoJ1dlYnNpdGVUaXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChXZWJzaXRlVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoV2Vic2l0ZVRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RlcERhdGEubWV0YV90aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShzdGVwRGF0YS5tZXRhX3RpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwRGF0YS5tZXRhX3RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ3RpdGxlJywgY29udGVudDogc3RlcERhdGEubWV0YV90aXRsZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwRGF0YS5tZXRhX2Rlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogc3RlcERhdGEubWV0YV9kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwRGF0YSA9IHN0ZXBEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0ZXBMb2FkZXIgPSB0aGlzLmlzVG9TaG93U3RlcExvYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dTdGVwTG9hZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhdmVyc2VTdGVwVHJlZShzdGVwRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lRGVsYXkgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RlcERhdGEuZGlzcGxheV9hc19tb2RhbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGVsYXkgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0ZXBBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGVwRXZlbnQoJ29ubG9hZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BDYWNoZUxvYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlbG9hZFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcEV2ZW50KCdPblJlbG9hZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzT25MZWF2ZUV2ZW50ID0gdGhpcy5zdGVwRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuc3RlcERhdGEuZXZlbnRfbGlzdC5maW5kKGkgPT4gaS5ldmVudF9uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvbmxlYXZlJykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njcm9sbFRhcmdldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JvbGxUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcm9sbFRhcmdldCkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2Nyb2xsVGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNob3dTdGVwTG9hZGVyICYmIHRoaXMucmJzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5vIFJCLCBzbyBoaWRpbmcgc3RlcCBsb2FkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGVwTG9hZGVyID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU2hvd01vZGFsTG9hZGVyX1RhYmxlJ10/LnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCB0aW1lRGVsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgc2VxdWVuY2UgYW5kIG1hcCBwcm9ncmVzcyBiYXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmxvY2sgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnByb2dyZXNzQmFyTWFwW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFdvcmtmbG93U2VxdWVuY2VJbmRleEZyb21TdGVwKGN1cnJTdGVwKS5zZXF1ZW5jZV0gfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIGdsb2JhbCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxQYXJhbWV0ZXJzID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVycztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdsb2JhbENvbnN0YW50c09uRGF0YUVtaXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVTdGVwQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVTdGVwRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFRlbXBsYXRlcygpOyAgLy9kZXByZWNhdGVkIGZlYXR1cmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvbGUgIT09ICcnICYmIHRoaXMuc3RhcnRTZXNzaW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb25UaW1lb3V0VXRpbC5zZXNzaW9uVGltZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgc2V0IGFkZGl0aW9uYWwgcGFyYW1ldGVyIG1ldGhvZCB0byBzZXQgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFkZGl0aW9uYWxQYXJhbWV0ZXJPblN0ZXBMb2FkKHN0ZXBEYXRhLCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmRlZmF1bHRMYW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTG9hZGVyIEhhbmRsZXIgbmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbdGhpcy5zdGVwSWQgKyAnX2N1c3RvbVNlY3Rpb25Mb2FkZXJFbWl0dGVyJ10gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmN1c3RvbVNlY3Rpb25Mb2FkZXJFbWl0dGVyLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydMb2FkZXIgSGFuZGxlciBuYW1lJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCd8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKS5pbmNsdWRlcyhyZXMuaGFuZGxlck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLnNob3dTZWN0aW9uID0gcmVzLmxvYWRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHN0ZXAgdmFsaWQgb3Igbm90XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnYnV0dG9uVmFsaWRhdGlvbl8nICsgdGhpcy5zdGVwSWRdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmJ1dHRvblZhbGlkYXRpb25FbWl0dGVyLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZENvbXBsZXRlID0gdGhpcy5zdGVwSXNDb21wbGV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElzQ29tcGxldGUgPSB0aGlzLmNoZWNrVmFsaWRhdGVBTkRDaGVja01hbmRhdG9yeSh7IG1hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UucHJvZ3Jlc3NCYXJNYXBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5nZXRXb3JrZmxvd1NlcXVlbmNlSW5kZXhGcm9tU3RlcChjdXJyU3RlcCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFdvcmtmbG93U2VxdWVuY2VJbmRleEZyb21TdGVwKGN1cnJTdGVwKS5zZXF1ZW5jZSA6IHVuZGVmaW5lZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3NCYXIgJiYgcHJvZ3Jlc3NCYXJbJ3Byb2dyZXNzJ10gJiYgb2xkQ29tcGxldGUgIT09IHRoaXMuc3RlcElzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJc0NvbXBsZXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXRlU3RvcmUuc2V0Q29tcGxldGUocHJvZ3Jlc3NCYXJbJ3Byb2dyZXNzJ10ucHJvZ3Jlc3NfYmFyX2lkLCBjdXJyU3RlcCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZS5zZXRJbmNvbXBsZXRlKHByb2dyZXNzQmFyWydwcm9ncmVzcyddLnByb2dyZXNzX2Jhcl9pZCwgY3VyclN0ZXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBib290c3RyYXBfY2xhc3NfbmFtZSBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNfYm9vdHN0cmFwICYmIHRoaXMuc3RlcERhdGEgJiYgdGhpcy5zdGVwRGF0YS5zdGVwX3N0eWxlICYmIHRoaXMuc3RlcERhdGEuc3RlcF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RlcERhdGEuc2VjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuc3RlcERhdGEuc2VjdGlvbltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLnNlY3Rpb25fc3R5bGUgJiYgIXNlY3Rpb24uc2VjdGlvbl9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24uc2VjdGlvbl9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSA9IHRoaXMuc3RlcERhdGEuc3RlcF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAjIyMjIyMjIyMjIyMjIyBBdXRvIFNhdmUgSGFuZGxlciBEYXRhICAjIyMjIyMjIyMjIyMjI1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjU3RlcDogcHJvY2Vzc0Jhc2VKU09OIyMjIyMjIyMjIyMjIyMjIyMjI1wiLHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkF1dG9TYXZlQVBJXCJdLFwiICBcIix0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJBdXRvU2F2ZVRpbWVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZSA9PiBlLnBhcmFtZXRlcl90eXBlID09PSBcIkF1dG9TYXZlQVBJXCIpLmxlbmd0aCA+IDAgPyB0aGlzLnN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZSA9PiBlLnBhcmFtZXRlcl90eXBlID09PSBcIkF1dG9TYXZlQVBJXCIpWzBdWyd2YWx1ZSddIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVJbnRlcnZhbCA9IHRoaXMuc3RlcERhdGEuc3RlcF9hY3Rpb24uYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihlID0+IGUucGFyYW1ldGVyX3R5cGUgPT09IFwiQXV0b1NhdmVUaW1lXCIpLmxlbmd0aCA+IDAgPyB0aGlzLnN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZSA9PiBlLnBhcmFtZXRlcl90eXBlID09PSBcIkF1dG9TYXZlVGltZVwiKVswXVsndmFsdWUnXSA6IDYwOyAvLyBnaXZlbiBpbiBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhhbmRsZXIgJiYgdGltZUludGVydmFsICYmICF0aGlzLmdsb2JhbFBhcmFtZXRlcnNbXCJBdXRvU2F2ZUFQSVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29uZmlnRGF0YSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQodGhpcy5hcGlDb25maWdQYXRoKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJDb25maWcgPSBhcHBDb25maWdEYXRhWydjb25maWcnXSA/IGFwcENvbmZpZ0RhdGFbJ2NvbmZpZyddLmZpbHRlcigoaXRlbSk9PnsgcmV0dXJuIChpdGVtLmlkID09PSBoYW5kbGVyKX0pWzBdIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB0aGlzLmNvbW1vblV0aWwucmV0dXJuQWNjZXNzVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW50ZXJ2YWxJZCAmJiAhdGhpcy5nbG9iYWxQYXJhbWV0ZXJzW1wiQXV0b1NhdmVBUElcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighaGFuZGxlckNvbmZpZ1snaGFzQXV0aG9yaXNhdGlvbiddIHx8IChoYW5kbGVyQ29uZmlnWydoYXNBdXRob3Jpc2F0aW9uJ10gJiYgKCBhY2Nlc3NUb2tlbiAmJiBhY2Nlc3NUb2tlbiE9XCIuXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVuQXV0b1NhdmVQcm9jZXNzKGhhbmRsZXJDb25maWcpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVJbnRlcnZhbCoxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc3N0ZXBkYXRhOjppbnRlcnZhbCBpZDogXCIsdGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQ2FjaGVMb2FkZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQdXNoaW5nIHRoZSBjdXJyZW50IFVSTCBpbiBoaXN0b3J5IHRvIHByZXZlbnQgYmFjayBidXR0b24gZm9yIGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT25MZWF2ZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIGRvY3VtZW50LmxvY2F0aW9uLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByZWRlZmluZSBUZW1wbGF0ZXMgY29uZmlndXJhdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNfYm9vdHN0cmFwICYmIHN0ZXBEYXRhLnRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZENsYXNzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdEdyaWQgb2Ygc3RlcERhdGEudGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0R3JpZC5kZXZpY2VfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2ViJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkQ2xhc3MucHVzaCh0aGlzLmdlbmVyYXRlVGVtcGxhdGVDbGFzcygnY29sLWxnLScsIHRHcmlkLnRlbXBsYXRlX2lkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0YWInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRDbGFzcy5wdXNoKHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZUNsYXNzKCdjb2wtbWQtJywgdEdyaWQudGVtcGxhdGVfaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21vYmlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZENsYXNzLnB1c2godGhpcy5nZW5lcmF0ZVRlbXBsYXRlQ2xhc3MoJ2NvbC1zbS0nLCB0R3JpZC50ZW1wbGF0ZV9pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkQ2xhc3MucHVzaCh0aGlzLmdlbmVyYXRlVGVtcGxhdGVDbGFzcygnY29sLScsIHRHcmlkLnRlbXBsYXRlX2lkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YS50ZW1wbGF0ZUNsYXNzID0gZ3JpZENsYXNzLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcERhdGEuZGlzcGxheV9hc19tb2RhbCA9PSAxKSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vZGFsQ3NzQ2xhc3MoKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChUYXJnZXRTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdUYXJnZXRTdGVwSWQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDb29raWUoJ1RhcmdldFN0ZXBJZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgcGFnZUxlYXZlU3RlcElkKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFnZV9sZWF2ZV9zdGVwX2lkJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFnZV9sZWF2ZV9zdGVwX2lkJykgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzcGVjaWFsIGV2ZW50IGhhbmRsZXIgdG8gaGFuZGxlIHRoZSBEaXNwbGF5IE1vZGFsIGV2ZW50XHJcbiAgICBkaXNwbGF5TW9kYWwoaGFuZGxlcjogYW55KSB7XHJcbiAgICAgICAgbGV0IG1vZGFscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGFscycpKTtcclxuICAgICAgICBtb2RhbHMuZm9yRWFjaCgobW9kYWwsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1vZGFsLm1vZGFsSWQgPT0gaGFuZGxlci5ldmVudF9oYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsUmVuZGVyZXJDb21wb25lbnQsIHsgZGF0YTogeyBtb2RhbDogbW9kYWwgfSwgaWQ6IGBldmVudE1vZGFsLSR7aGFuZGxlci5ldmVudF9oYW5kbGVyfWAsIHBhbmVsQ2xhc3M6IGBldmVudE1vZGFsLSR7aGFuZGxlci5ldmVudF9oYW5kbGVyfWAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydhZnRlckNsb3NlZF8nICsgdGhpcy5zdGVwSWRdID0gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgJyArIG1vZGFsLm1vZGFsSWQgKyAnIHdhcyBjbG9zZWQuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGlzVG9TaG93U3RlcExvYWRlcigpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuc3RlcERhdGEuc3RlcF9hY3Rpb24uYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlID09IFwiQ0VFX1Nob3dTdGVwTG9hZGVyXCIgfHwgcGFyYW10ZXIucGFyYW1ldGVyX3R5cGUgPT0gXCJDRUVfU2hvd01vZGFsTG9hZGVyX1RhYmxlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXRlci52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0QWRkaXRpb25hbFBhcmFtZXRlck9uU3RlcExvYWQoc3RlcERhdGEsIGxhbmcgPSAnJykge1xyXG4gICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5sb2FkaW5nVGV4dFNldC5uZXh0KCcnKTtcclxuICAgICAgICBpZiAoc3RlcERhdGEgJiYgc3RlcERhdGEuc3RlcF9hY3Rpb24gJiYgc3RlcERhdGEuc3RlcF9hY3Rpb24uYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckJsb2Nrc0RhdGEgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgZm9vdGVyQmxvY2tzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0ZXBCbG9ja3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrSWQgb2YgcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja3M6IGFueSA9IGF3YWl0IHRoaXMuZmV0Y2hIZWFkZXJGb290ZXIobGFuZywgYmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrcyAmJiBibG9ja3MuYmxvY2tfbmFtZSAmJiBibG9ja3MuYmxvY2tfbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaGVhZGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyQmxvY2tzRGF0YS5maW5kSW5kZXgoaEJsb2NrRGF0YSA9PiBoQmxvY2tEYXRhLmJsb2NrX2lkID09IGJsb2Nrcy5ibG9ja19pZCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckJsb2Nrc0RhdGEucHVzaChibG9ja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9ja3MgJiYgYmxvY2tzLmJsb2NrX25hbWUgJiYgYmxvY2tzLmJsb2NrX25hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2hhbWJ1cmdlcm1lbnUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFtYnVyZ2VybWVudUJsb2NrRGF0YSA9IGJsb2NrcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbWJ1cmdlcm1lbnVCbG9ja0FkZGl0aW9uYWxQYXJhbWV0ZXJbaS5wYXJhbWV0ZXJfdHlwZV0gPSBpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrcyAmJiBibG9ja3MuYmxvY2tfbmFtZSAmJiBibG9ja3MuYmxvY2tfbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZm9vdGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9vdGVyQmxvY2tzRGF0YS5maW5kSW5kZXgoZkJsb2NrRGF0YSA9PiBmQmxvY2tEYXRhLmJsb2NrX2lkID09IGJsb2Nrcy5ibG9ja19pZCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlckJsb2Nrc0RhdGEucHVzaChibG9ja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1VSTFBhcmFtZXRlcnMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVVybFBhcmFtZXRlcnMocGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ092ZXJyaWRlQmFja0J1dHRvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCBkb2N1bWVudC5sb2NhdGlvbi50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVycmlkZUJhY2tCdXR0b25WYWx1ZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdNb2RhbE9uUGFnZUxlYXZlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZGFsX29uX3BhZ2VfbGVhdmUnLCBwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ09uUGFnZUxlYXZlQ2hlY2tUeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ09uUGFnZUxlYXZlQ2hlY2tUeXBlJywgcGFyYW10ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTYXZlSGFuZGxlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlX2hhbmRsZXInLCBwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1dlYnNpdGVUaXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHBhcmFtdGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTG9hZGVyVGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5sb2FkaW5nVGV4dFNldC5uZXh0KHBhcmFtdGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcmFuZGVyIGhlYWRlciBhbmQgZm9vdGVyICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXhMYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShoZWFkZXJCbG9ja3NEYXRhKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5oZWFkZXJCbG9ja3NEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQmxvY2tzRGF0YSA9IGhlYWRlckJsb2Nrc0RhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZm9vdGVyQmxvY2tzRGF0YSkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMuZm9vdGVyQmxvY2tzRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlckJsb2Nrc0RhdGEgPSBmb290ZXJCbG9ja3NEYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQmxvY2tzRGF0YSA9IGhlYWRlckJsb2Nrc0RhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlckJsb2Nrc0RhdGEgPSBmb290ZXJCbG9ja3NEYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gZmV0Y2ggSGVhZGVyIEZvb3RlclxyXG4gICAgICogQHBhcmFtIGxhbmcgaGF2ZSBsYW5ndWFnZSBvZiBhcHBsaWNhdGlvblxyXG4gICAgICogQHBhcmFtIGJsb2NrSWQgYmxvY2sgaWQgdGhhdCBuZWVkIHRvIGxvYWRcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hIZWFkZXJGb290ZXIobGFuZywgYmxvY2tJZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ibG9ja0pzb25EYXRhW2xhbmddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tKc29uRGF0YVtsYW5nXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ibG9ja0pzb25EYXRhW2xhbmddW2Jsb2NrSWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJsb2NrSnNvbkRhdGFbbGFuZ11bYmxvY2tJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5nbG9iYWxQYXRofSR7bGFuZ30ke3RoaXMuY29uZmlnQmxvY2tQYXRofSR7YmxvY2tJZH0uanNvbmApLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrSnNvbkRhdGFbbGFuZ11bYmxvY2tJZF0gPSBqc29uRGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRvIGdldCBjbGFzcyBuYW1lIG9mIHRlbXBsYXRlXHJcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lUGFydCBjbGFzcyBuYW1lIHBhcnRcclxuICAgICAqIEBwYXJhbSBjb2x1bW5UeXBlIHNpbmdsZV9jb2x1bW4vdHdvX2NvbHVtblxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVRlbXBsYXRlQ2xhc3MoY2xhc3NOYW1lUGFydCwgY29sdW1uVHlwZSkge1xyXG4gICAgICAgIGxldCByZXN1bHRDbGFzcyA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAoY29sdW1uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdzaW5nbGVfY29sdW1uJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdENsYXNzID0gY2xhc3NOYW1lUGFydCArICcxMic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHdvX2NvbHVtbic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHRDbGFzcyA9IGNsYXNzTmFtZVBhcnQgKyAnNic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdENsYXNzID0gY2xhc3NOYW1lUGFydCArICcxMic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdENsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gZW1pdCB0aGUgaWYgdGhlIGxvYWRpbmcgaXMgbmVlZGVkIHRvIG5vdFxyXG4gICAgICogQHBhcmFtIGhhbmRsZXJOYW1lIGV2ZW50IGhhbmRsZXIgb3IgZXh0ZXJuYWwgYXBpIG9yIGFwaV9pbmZvcm1hdGlvblxyXG4gICAgICogQHBhcmFtIGxvYWRpbmcgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNob3dPckhpZGVMb2FkZXIoaGFuZGxlck5hbWU6IHN0cmluZywgbG9hZGluZzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5jdXN0b21TZWN0aW9uTG9hZGVyRW1pdHRlci5lbWl0KHtcclxuICAgICAgICAgICAgaGFuZGxlck5hbWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVVcmxQYXJhbWV0ZXJzKHVybFBhcmFtZXRlcnM6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IHVybFBhcmFtZXRlcnMubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZWwudHJpbSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuZ2V0KHBhcmFtKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIGFwaSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcmFtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHBhcmFtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLmdldChwYXJhbSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5nZXQocGFyYW0pICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgYXBpIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFyYW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleTogcGFyYW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMuZ2V0KHBhcmFtKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5zZXRBcGlEYXRhKE9iamVjdC5hc3NpZ24oe30sIGFwaURhdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubW9kYWxJZHMuc3BsaWNlKHRoaXMubW9kYWxJZHMuaW5kZXhPZihpZCksIDEpO1xyXG4gICAgfVxyXG4gICAgc2Nyb2xsVG9TZWN0aW9uKGJsb2NrTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFibG9ja05hbWUpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIC8vIEZpbmQgdGhlIGVsZW1lbnQgd2l0aCB0aGUgbWF0Y2hpbmcgSUQgc2FkXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrTmFtZSk7XHJcbiAgICBcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjcm9sbGluZyB0bzpcIiwgYmxvY2tOYW1lKTsgXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnLCBpbmxpbmU6ICdzdGFydCcgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRWxlbWVudCBub3QgZm91bmQ6XCIsIGJsb2NrTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldDxhbnk+KCcuL2Fzc2V0cy9qc29ucy9sZW5kZXJfbWFwcGluZy5qc29uJykuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzdWx0ICYmIEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5VmFsdWVNYXAuY2xlYXIoKTsgLy8gQ2xlYXIgcHJldmlvdXMgZGF0YVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZVJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBvYmoucmVzcG9uc2VfdmFsdWU7IC8vIEV4dHJhY3QgcmVzcG9uc2VfdmFsdWUgYXMga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqLnVuaXF1ZV9pZDsgLy8gRXh0cmFjdCB1bmlxdWVfaWQgYXMgdmFsdWVcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVZhbHVlTWFwLnNldChrZXksIHZhbHVlKTsgLy8gU3RvcmUgaW4gTWFwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIEFQSSBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlzU2Nyb2xsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2Nyb2xsJykgPT09ICd0cnVlJztcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzU2Nyb2xsJywgXCJmYWxzZVwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gSW5pdGlhbCAxMC1zZWNvbmQgZGVsYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhUaW1lID0gMTgwMDAwOyAvLyBLZWVwIGNoZWNraW5nIGZvciA1MCBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0ludGVydmFsID0gMTUwMDA7IC8vIENoZWNrIGV2ZXJ5IDEwIHNlY29uZHNcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0U2Nyb2xsVG9wID0gMDsgLy8gVHJhY2sgbGFzdCBzY3JvbGwgcG9zaXRpb25cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tBbmRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNoZWNraW5nIGZvciB0YXJnZXQgSUQuLi5cIik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9ycm93ZXJJZEVudHJpZXM6IFtzdHJpbmcsIG51bWJlcl1bXSA9IE9iamVjdC5lbnRyaWVzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JvcnJvd2VySWRNYXAnKSB8fCAne30nKSkgYXMgW3N0cmluZywgbnVtYmVyXVtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlWYWx1ZUVudHJpZXM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IE9iamVjdC5lbnRyaWVzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleVZhbHVlTWFwJykgfHwgJ3t9JykpIGFzIFtzdHJpbmcsIHN0cmluZ11bXTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9ycm93ZXJJZE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KGJvcnJvd2VySWRFbnRyaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVZhbHVlTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oa2V5VmFsdWVFbnRyaWVzKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLwn5ONIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib3Jyb3dlcklkTWFwJykgIDpcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JvcnJvd2VySWRNYXAnKSk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlbmRlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGVuZGVyLWRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGxlbmRlckRhdGEgPyBKU09OLnBhcnNlKGxlbmRlckRhdGEpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tRXZlbnQ6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvcl9hY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRUb3JlYWN0RW1pdHRlci5lbWl0KGN1c3RvbUV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGVuZGVyLWRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJObyBsZW5kZXIgZGF0YSBmb3VuZCBpbiBsb2NhbFN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxTY3JvbGxUYXJnZXQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYWluUGFyZW50TmFtZSA9IG5vZGUuYm9ycm93ZXJfaWQgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9ycm93ZXJJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGaWVsZExldmVsOiBib29sZWFuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzRmllbGRMZXZlbCcpID09PSAndHJ1ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzQm9ycm93ZXJJZCA9ICEhbm9kZS5ib3Jyb3dlcl9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21haW5QYXJlbnROYW1lOicsIG1haW5QYXJlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNGaWVsZExldmVsOicsIGlzRmllbGRMZXZlbCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0JvcnJvd2VySWQgJiYgaXNGaWVsZExldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOKchSBDaGVjayBwYXJlbnRfaWQgZnJvbSBtYXBwaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBpbmdFbnRyeSA9IHRoaXMucmVzcG9uc2VSZXN1bHQuZmluZChlbnRyeSA9PiBlbnRyeS5yZXNwb25zZV92YWx1ZSA9PT0gbm9kZS5hcGlfa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzUGFyZW50SWQgPSBtYXBwaW5nRW50cnkgJiYgISFtYXBwaW5nRW50cnkucGFyZW50X2lkO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNQYXJlbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLwn5SBIEZpZWxkLWxldmVsIGVkaXQ6IFBhcmVudCBJRCBmb3VuZC4gQmVnaW5uaW5nIG5lc3RlZCBsb29rdXAuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGVwIDE6IExvYWQgdGhlIGJsb2NrIHVzaW5nIHBhcmVudF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUobWFwcGluZ0VudHJ5LnBhcmVudF9pZCkuc3Vic2NyaWJlKChwYXJlbnRCbG9ja0RhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+TpiBMb2FkZWQgUGFyZW50IEJsb2NrOlwiLCBwYXJlbnRCbG9ja0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0ZXAgMjogRmluZCB0aGUgZmllbGQgdXNpbmcgbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEZpZWxkID0gcGFyZW50QmxvY2tEYXRhPy5ibG9ja19maWVsZHM/LmZpbmQoKGZpZWxkOiBhbnkpID0+IGZpZWxkLnVuaXF1ZV9pZCA9PT0gbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi4pyFIEZpZWxkIG1hdGNoZWQgYnkgdW5pcXVlX2lkOlwiLCB0YXJnZXRGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0ZXAgMzogRXh0cmFjdCBkZWZhdWx0X3ZhbHVlIGZyb20gYWRkaXRpb25hbF9wYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQYXJhbSA9IHRhcmdldEZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycz8uZmluZChwYXJhbSA9PiBwYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZGVmYXVsdFBhcmFtPy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLwn5ONIEZvdW5kIGRhc2RlZmF1bHRfdmFsdWUgZm9yIGNoaWxkIGJsb2NrOlwiLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLwn5ONIG1hcHBpbmdFbnRyeS51bmlxdWVfaWQ6XCIsIG1hcHBpbmdFbnRyeS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+TjSBtYXBwaW5nRW50cnkucGFyZW50X2lkOlwiLCBtYXBwaW5nRW50cnkucGFyZW50X2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+TjSBub2RlLmJvcnJvd2VyX2lkIDpcIiwgbm9kZS5ib3Jyb3dlcl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3Jyb3dlckluZGV4ID0gdGhpcy5ib3Jyb3dlcklkTWFwLmdldChtYWluUGFyZW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIvCfk40gYm9ycm93ZXJJbmRleDpcIiwgYm9ycm93ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGVwIDQ6IE9wZW4gYWNjb3JkaW9uIGFuZCBsb2FkICsgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2Uub3Blbk11bHRpcGxlU2VjdGlvbnNXaXRoUGFyZW50KG1hcHBpbmdFbnRyeS51bmlxdWVfaWQsIG1hcHBpbmdFbnRyeS5wYXJlbnRfaWQsZGVmYXVsdFZhbHVlLCBib3Jyb3dlckluZGV4KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCbG9ja0FuZFNjcm9sbFRvRmllbGQoZGVmYXVsdFZhbHVlLCBub2RlLmFwaV9rZXksIHRydWUsIGJvcnJvd2VySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIE5vIGRlZmF1bHRfdmFsdWUgZm91bmQgaW4gYWRkaXRpb25hbF9wYXJhbWV0ZXJzIG9mIHRhcmdldCBmaWVsZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYOKdjCBObyBmaWVsZCBmb3VuZCBpbiBwYXJlbnQgYmxvY2sgJyR7bWFwcGluZ0VudHJ5LnBhcmVudF9pZH0nIG1hdGNoaW5nIHVuaXF1ZV9pZDogJHttYXBwaW5nRW50cnkudW5pcXVlX2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+aqCBGaWVsZC1sZXZlbCBlZGl0IHdpdGggbm8gYm9ycm93ZXJfaWQgZGV0ZWN0ZWQsIGFuZCBwYXJlbnRfaWQgZXhpc3RzLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zVG9PcGVuID0gW21hcHBpbmdFbnRyeS51bmlxdWVfaWRdOyAvLyBEeW5hbWljYWxseSB1c2UgcGFyZW50X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2Uub3Blbk11bHRpcGxlU2VjdGlvbnMoc2VjdGlvbnNUb09wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNjcm9sbFdpdGhSZXRyeShtYXBwaW5nRW50cnkudW5pcXVlX2lkKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCbG9ja0FuZFNjcm9sbFRvRmllbGQobWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCwgbm9kZS5hcGlfa2V5LGZhbHNlLDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoaGFzQm9ycm93ZXJJZCAmJiBpc0ZpZWxkTGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFwcGluZ0VudHJ5ID0gdGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmFwaV9rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNQYXJlbnRJZCA9IG1hcHBpbmdFbnRyeSAmJiAhIW1hcHBpbmdFbnRyeS5wYXJlbnRfaWQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1BhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCLwn5SBIEZpZWxkLWxldmVsIGVkaXQ6IFBhcmVudCBJRCBmb3VuZC4gQmVnaW5uaW5nIG5lc3RlZCBsb29rdXAuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGVwIDE6IExvYWQgdGhlIGJsb2NrIHVzaW5nIHBhcmVudF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUobWFwcGluZ0VudHJ5LnBhcmVudF9pZCkuc3Vic2NyaWJlKChwYXJlbnRCbG9ja0RhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIvCfk6YgTG9hZGVkIFBhcmVudCBCbG9jazpcIiwgcGFyZW50QmxvY2tEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGVwIDI6IEZpbmQgdGhlIGZpZWxkIHVzaW5nIG1hcHBpbmdFbnRyeS51bmlxdWVfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRGaWVsZCA9IHBhcmVudEJsb2NrRGF0YT8uYmxvY2tfZmllbGRzPy5maW5kKChmaWVsZDogYW55KSA9PiBmaWVsZC51bmlxdWVfaWQgPT09IG1hcHBpbmdFbnRyeS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCLinIUgRmllbGQgbWF0Y2hlZCBieSB1bmlxdWVfaWQ6XCIsIHRhcmdldEZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RlcCAzOiBFeHRyYWN0IGRlZmF1bHRfdmFsdWUgZnJvbSBhZGRpdGlvbmFsX3BhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFBhcmFtID0gdGFyZ2V0RmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzPy5maW5kKHBhcmFtID0+IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0UGFyYW0/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIvCfk40gRm91bmQgZGVmYXVsdF92YWx1ZSBmb3IgY2hpbGQgYmxvY2s6XCIsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIvCfk40gbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZDpcIiwgbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLwn5ONIG1hcHBpbmdFbnRyeS5wYXJlbnRfaWQ6XCIsIG1hcHBpbmdFbnRyeS5wYXJlbnRfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLwn5ONIG5vZGUuYm9ycm93ZXJfaWQgOlwiLCBub2RlLmJvcnJvd2VyX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcnJvd2VySW5kZXggPSB0aGlzLmJvcnJvd2VySWRNYXAuZ2V0KG1haW5QYXJlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIvCfk40gYm9ycm93ZXJJbmRleDpcIiwgYm9ycm93ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGVwIDQ6IE9wZW4gYWNjb3JkaW9uIGFuZCBsb2FkICsgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2Uub3Blbk11bHRpcGxlU2VjdGlvbnNXaXRoUGFyZW50KG1hcHBpbmdFbnRyeS51bmlxdWVfaWQsIG1hcHBpbmdFbnRyeS5wYXJlbnRfaWQsZGVmYXVsdFZhbHVlLCBib3Jyb3dlckluZGV4KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCbG9ja0FuZFNjcm9sbFRvRmllbGQoZGVmYXVsdFZhbHVlLCBub2RlLmFwaV9rZXksIHRydWUsIGJvcnJvd2VySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4pqg77iPIE5vIGRlZmF1bHRfdmFsdWUgZm91bmQgaW4gYWRkaXRpb25hbF9wYXJhbWV0ZXJzIG9mIHRhcmdldCBmaWVsZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYOKdjCBObyBmaWVsZCBmb3VuZCBpbiBwYXJlbnQgYmxvY2sgJyR7bWFwcGluZ0VudHJ5LnBhcmVudF9pZH0nIG1hdGNoaW5nIHVuaXF1ZV9pZDogJHttYXBwaW5nRW50cnkudW5pcXVlX2lkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDinIUgQ2hlY2sgaWYgYm9ycm93ZXJfaWQgaXMgcHJlc2VudCBhbmQgcmV0cmlldmUgYm9ycm93ZXJfaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW5QYXJlbnROYW1lICYmIHRoaXMuYm9ycm93ZXJJZE1hcC5oYXMobWFpblBhcmVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3Jyb3dlckluZGV4ID0gdGhpcy5ib3Jyb3dlcklkTWFwLmdldChtYWluUGFyZW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coYOKchSBCb3Jyb3dlciBJRCBtYXRjaGVkISBCb3Jyb3dlciBJbmRleDogJHtib3Jyb3dlckluZGV4fWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOKchSBSZXRyaWV2ZSBsYWJlbF9pbmZvX2hlYWRpbmcgZnJvbSBtYXBwaW5nIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmtleVZhbHVlTWFwLmhhcyhub2RlLmJsb2NrTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFwcGVkVmFsdWUgPSB0aGlzLmtleVZhbHVlTWFwLmdldChub2RlLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOKchSBBcHBlbmQgYm9ycm93ZXJJbmRleCB0byBtYXBwZWQgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFNjcm9sbFRhcmdldCA9IGAke21hcHBlZFZhbHVlfS0ke2JvcnJvd2VySW5kZXh9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coYOKchSBEaXJlY3QgRmluYWwgU2Nyb2xsIFRhcmdldDogJHtmaW5hbFNjcm9sbFRhcmdldH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluYWxTY3JvbGxUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VjdGlvbihmaW5hbFNjcm9sbFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDinIUgU3RvcCBmdXJ0aGVyIHByb2Nlc3Npbmcgc2luY2UgZGlyZWN0IHNjcm9sbGluZyBpcyBoYW5kbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOKchSBGYWxsYmFjayB0byB0aGUgZXhpc3RpbmcgbG9naWMgaWYgYm9ycm93ZXJfaWQgaXMgbWlzc2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbmFsU2Nyb2xsVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ibG9ja05hbWUgJiYgdGhpcy5rZXlWYWx1ZU1hcC5oYXMobm9kZS5ibG9ja05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxTY3JvbGxUYXJnZXQgPSB0aGlzLmtleVZhbHVlTWFwLmdldChub2RlLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiVXNpbmcgZGVmYXVsdCBtYXBwZWQgc2Nyb2xsIHRhcmdldDpcIiwgZmluYWxTY3JvbGxUYXJnZXQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluYWxTY3JvbGxUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1NlY3Rpb24oZmluYWxTY3JvbGxUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOKchSBTdG9wIGZ1cnRoZXIgcHJvY2Vzc2luZyBzaW5jZSBkaXJlY3Qgc2Nyb2xsaW5nIGlzIGhhbmRsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHZhbGlkIHNjcm9sbCB0YXJnZXQgZm91bmQgZm9yIG5vZGU6XCIsIG5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydFRpbWUgPCBtYXhUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIuKdjCBUYXJnZXQgbm90IHN0YWJsZSB5ZXQuIFJldHJ5aW5nIGluIDEwIHNlY29uZHMuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tBbmRTY3JvbGwsIGNoZWNrSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKPsyBUaW1lb3V0IHJlYWNoZWQhIFN0b3BwaW5nIHJldHJpZXMuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNoZWNrQW5kU2Nyb2xsKCk7IC8vIFN0YXJ0IGNoZWNraW5nIGFzZFxyXG5cclxuICAgICAgICAgICAgfSwgODAwMCk7IC8vIEluaXRpYWwgOC1zZWNvbmQgZGVsYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEJsb2NrQW5kU2Nyb2xsVG9GaWVsZCh1bmlxdWVJZDogc3RyaW5nLCBhcGlLZXk6IHN0cmluZywgaXNGaWVsZExldmVsV2l0aFBhcmVudDogYm9vbGVhbiwgYm9ycm93ZXJJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy90aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh1bmlxdWVJZCkuc3Vic2NyaWJlKChibG9ja0RhdGEpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUodW5pcXVlSWQpLnN1YnNjcmliZSgoYmxvY2tEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+TpiBMb2FkZWQgQmxvIGNrIERhdGE6XCIsIGJsb2NrRGF0YSk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IGxvYWRlZEJsb2NrOiBhbnkgPSBibG9ja0RhdGE7XHJcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGZpZWxkIHdpdGggdGhlIGdpdmVuIGFwaV9rZXlcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RmllbGQgPSBsb2FkZWRCbG9jaz8uYmxvY2tfZmllbGRzPy5maW5kKGZpZWxkID0+IGZpZWxkLmFwaV9rZXkgPT09IGFwaUtleSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHRhcmdldEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIvCfjq8gRmllbGQgbWF0Y2hlZCB3aXRoIEFQSSBLZXk6XCIsIHRhcmdldEZpZWxkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRhcmdldElkID0gdGFyZ2V0RmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmllbGRMZXZlbFdpdGhQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFdpdGhSZXRyeVBhcmVudChzY3JvbGxUYXJnZXRJZCxib3Jyb3dlckluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxXaXRoUmV0cnkoc2Nyb2xsVGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDinYwgTm8gZmllbGQgZm91bmQgaW4gYmxvY2sgJyR7dW5pcXVlSWR9JyBtYXRjaGluZyBhcGlfa2V5OiAke2FwaUtleX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGDinYwgRXJyb3IgbG9hZGluZyBibG9jayBieSBuYW1lICgke3VuaXF1ZUlkfSk6YCwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzY3JvbGxXaXRoUmV0cnlQYXJlbnQoZWxlbWVudElkOiBzdHJpbmcsIGJvcnJvd2VySW5kZXg6IG51bWJlciwgcmV0cmllczogbnVtYmVyID0gMzAsIGRlbGF5OiBudW1iZXIgPSAzMDAwKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50SWQpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGZ1bGxJZCA9IGAke2VsZW1lbnRJZH0kJHtib3Jyb3dlckluZGV4fWA7XHJcbiAgICAgICAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW2lkXScpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHRhcmdldDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIGFsbEVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwuaWQuaW5jbHVkZXMoZnVsbElkKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLinIUgRWxlbWVudCBmb3VuZCwgc2Nyb2xsaW5nIGludG8gdmlldzpcIiwgdGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1NlY3Rpb24odGFyZ2V0LmlkKTsgLy8g4pyFIFVzZSBleGlzdGluZyBzY3JvbGxpbmcgbWV0aG9kXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXRyaWVzID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOKPsyBXYWl0aW5nIGZvciBlbGVtZW50IGNvbnRhaW5pbmcgXCIke2Z1bGxJZH1cIiB0byBhcHBlYXIuIFJldHJpZXMgbGVmdDogJHtyZXRyaWVzfWApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsV2l0aFJldHJ5UGFyZW50KGVsZW1lbnRJZCxib3Jyb3dlckluZGV4LCByZXRyaWVzIC0gMSwgZGVsYXkpLCBkZWxheSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihg4p2MIEVsZW1lbnQgY29udGFpbmluZyBcIiR7ZnVsbElkfVwiIG5vdCBmb3VuZCBhZnRlciBtdWx0aXBsZSByZXRyaWVzLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc2Nyb2xsV2l0aFJldHJ5KGVsZW1lbnRJZDogc3RyaW5nLCByZXRyaWVzOiBudW1iZXIgPSAzMCwgZGVsYXk6IG51bWJlciA9IDMwMDApIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnRJZCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgIFxyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLinIUgRWxlbWVudCBmb3VuZCwgICBzY3JvbGxpbmcgaW50byB2aWV3OlwiLCBlbGVtZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VjdGlvbihlbGVtZW50SWQpOyAvLyDinIUgUmV1c2UgeW91ciBleGlzdGluZyBtZXRob2RcclxuICAgICAgICB9IGVsc2UgaWYgKHJldHJpZXMgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihg4o+zIFdhaXRpbmcgZm9yIGVsZW1lbnQgXCIke2VsZW1lbnRJZH1cIiB0byBhcHBlYXIuIFJldHJpZXMgbGVmdDogJHtyZXRyaWVzfWApO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsV2l0aFJldHJ5KGVsZW1lbnRJZCwgcmV0cmllcyAtIDEsIGRlbGF5KSwgZGVsYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOKdjCBFbGVtZW50IFwiJHtlbGVtZW50SWR9XCIgbm90IGZvdW5kIGFmdGVyIG11bHRpcGxlIHJldHJpZXMuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIC8vIGxvYWQgdGhlIHdmZSBhbmQgY2FsbCB0aGUgbmdvbml0IGlmIHRoZSBzdGVwIGdldHMgY2hhbmdlZFxyXG4gICAgICAgIC8vIGRlZmF1bHQgcGFnZSByZW5kZXJpbmdcclxuICAgICAgICBpZiAoIWNoYW5nZXMuc3RlcElkLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUodGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5wcmVmZXRjaEJhc2VKU09OKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFN0ZXAgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldERlZmF1bHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAodGhpcy5uYXZpZ2F0ZVN0ZXBOYW1lIHx8IHRoaXMubmF2aWdhdGVTdGVwTmFtZU9ubHkpID8gZGVmYXVsdFN0ZXAuc3RlcE5hbWUgOiBgL3dmZS9zdGVwLyR7ZGVmYXVsdFN0ZXAudGlkfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5zdGVwSWQucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5zdGVwSWQuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLnN0ZXBJZC5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNlcXVlbmNlSWRBbmRTZXREYXRhKHRoaXMucmV0dXJuU3RlcElkKGNoYW5nZXMuc3RlcElkLmN1cnJlbnRWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbml0RGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRJbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmJsb2Nrc0RhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlcm1lbnVCbG9ja0RhdGEgPSBudWxsO1xyXG4gICAgICAgIGlmICghdGhpcy5maXhMYXlvdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwRGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJCbG9ja3NEYXRhID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyQmxvY2tzRGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXR1cm5TdGVwSWQoc3RlcElkKSB7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KHN0ZXBJZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0ZXBJZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NFRV9ST1VURV9NQVAnKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5hdmlnYXRlU3RlcE5hbWVPbmx5ICYmIHJvdXRlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocm91dGVNYXApLmZpbmQoa2V5ID0+IHJvdXRlTWFwW2tleV0gPT09IHN0ZXBJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gc3RlcElkLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcXVlbmNlSWRBbmRTZXREYXRhKHN0ZXBJRCkge1xyXG4gICAgICAgIGlmKHN0ZXBJRCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlSWQgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFdvcmtmbG93U2VxdWVuY2VJbmRleEZyb21TdGVwKHN0ZXBJRCkuc2VxdWVuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2VxdWVuY2VBbmRTdGVwSWQodGhpcy5nbG9iYWxQYXJhbWV0ZXJzWydTZXF1ZW5jZUlEJ10sIHNlcXVlbmNlSWQpOyAvLyBzZXR0aW5nIHNlcXVlbmNlSWRcclxuICAgICAgICAgICAgdGhpcy5zZXRTZXF1ZW5jZUFuZFN0ZXBJZCh0aGlzLmdsb2JhbFBhcmFtZXRlcnNbJ1N0ZXBJRCddLCBzdGVwSUQpOyAvLyBzZXR0aW5nIGN1cnJlbnQgdmFsdWUgYXMgcGVyIEhMRCAoY2hhbmdlIG9uOiAxNS8wOS8yMDIwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTZXF1ZW5jZUFuZFN0ZXBJZChwYXJhbVZhbHVlLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChwYXJhbVZhbHVlICYmIHBhcmFtVmFsdWUuaW5jbHVkZXMoJyQkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBcGlEYXRhKHBhcmFtVmFsdWUuc3BsaXQoJyQkJylbMV0sIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZVNlcXVlbmNlRGF0YSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNlcURhdGEgaW4gdGhpcy5zZXF1ZW5jZURhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHNlcURhdGEgPT09ICd3b3JrZmxvd19wcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgd29ya2Zsb3dEYXRhIGluIHRoaXMuc2VxdWVuY2VEYXRhW3NlcURhdGFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdvcmtmbG93RGF0YSA9PT0gJ3Byb2dyZXNzX2Jhcl90eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlRGF0YVtzZXFEYXRhXVt3b3JrZmxvd0RhdGFdID09PSAnRGVmYXVsdCcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VEYXRhW3NlcURhdGFdW3dvcmtmbG93RGF0YV0gPT09ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVkU2VxRGF0YSA9IHRoaXMuc2VxdWVuY2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5XZmVGaWVsZERhdGFTZXJ2aWNlLmdldFNlcXVlbmNlRGF0YSh0aGlzLnVwZGF0ZWRTZXFEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVTdGVwQWN0aW9uKCkge1xyXG4gICAgICAgIGxldCBib2R5ID0ge307XHJcbiAgICAgICAgaWYgKHRoaXMuc3RlcERhdGEgJiYgdGhpcy5zdGVwRGF0YS5zdGVwX2FjdGlvbiAmJiB0aGlzLnN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFwaV9pbmZvcm1hdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBhcGlUeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FQSV9UWVBFJyk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXBpVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRVNCJzpcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5lc2JSZXF1ZXN0Qm9keVV0aWwuZ2V0RVNCUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydFU0JSZXF1ZXN0SGFuZGxlcl8nICsgdGhpcy5zdGVwSWRdID0gdGhpcy5jZWVBcGlTZXJ2aWNlLkVTQlJlcXVlc3RIYW5kbGVyKHRoaXMuc3RlcERhdGEuc3RlcF9hY3Rpb24uYXBpX2luZm9ybWF0aW9uLCBib2R5KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1snc3RhdHVzJ10gPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcEJhc2VSZXN1bHQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQXBwbGljYXRpb25CYXNlUmVzdWx0UGF0aCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFwaVJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNbJ2FwaV9yZXNwb25zZSddKVthcHBCYXNlUmVzdWx0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFwaVJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gVU5GTEFUVEVuIFdpdGggQ2xhc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpUmVzcG9uc2UgPSB0aGlzLmZsYXRVbmZsYXQuZmxhdHRlbkpTT04oYXBpUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2UuZW1pdChhcGlSZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaUVycm9yUmVzcG9uc2UuZW1pdChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdJTlRFUk5BTCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdFWFRFUk5BTCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRlcm5hbFJlcXVlc3RSZXNwb25zZVV0aWwucHJlcGFyZU9iamVjdFRvQmVTZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFwaV9pbmZvcm1hdGlvbiwgYXBpVHlwZSA9PT0gJ0lOVEVSTkFMJyA/ICdpbnRlcm5hbCcgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcHBEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFwaURhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGFwcERhdGFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydnZXRBbGxBcHBEYXRhXycgKyB0aGlzLnN0ZXBJZF0gPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEFsbEFwcERhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwRGF0YSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGFwaURhdGFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydnZXRBbGxBcGlEYXRhXycgKyB0aGlzLnN0ZXBJZF0gPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFsbEFwaURhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwaURhdGEnLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlEYXRhID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudEhhbmRsZXJFbWl0dGVyT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLnN0ZXBEYXRhLnN0ZXBfYWN0aW9uLmFwaV9pbmZvcm1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5ldmVudEhhbmRsZXJFbWl0dGVyLmVtaXQoZXZlbnRIYW5kbGVyRW1pdHRlck9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHNldHMgdGhlIGdsb2JhbCBwYXJhbWV0ZXJzIHRvIGRlZmF1bHQgdmFsdWUgb3IgYXBpIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gcmVzIGFwaSByZXNwb25zZSBpZiBwcmVzZW50XHJcbiAgICAgKi9cclxuICAgIHNldEdsb2JhbENvbnN0YW50c09uRGF0YUVtaXQocmVzPzogYW55KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBPYmplY3Qua2V5cyh0aGlzLmdsb2JhbFBhcmFtZXRlcnMpKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbSA9PT0gJ1VzZXJSb2xlJykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTm9uIFByZS1kZWZpbmVkIEFQSSBLZXkgd2l0aCBhbmQgd2l0aG91dCB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uaW5jbHVkZXMoJyMjJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBwYXJhbS5pbmNsdWRlcygnfCcpID8gcGFyYW0uc3BsaXQoJ3wnKS5tYXAoc3RyID0+IHN0ci50cmltKCkpIDogW3BhcmFtXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbFBhcmFtZXRlcnNbcGFyYW1dLmluY2x1ZGVzKCd8fCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2xvYmFsUGFyYW1ldGVyc1twYXJhbV0uc3BsaXQoJ3x8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZGF0YSBhdCBmaXJzdCBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaW5nbGVWYWwgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXVsdGlwbGVWYWwgPSBzaW5nbGVWYWwuc3BsaXQoJ3wnKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBpS2V5IG9mIG11bHRpcGxlVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaVZhbCA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShhcGlLZXkuc3BsaXQoJyQkJylbMV0sIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlWYWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGFwaVZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdGhpcy5nbG9iYWxQYXJhbWV0ZXJzW3BhcmFtXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXBpRGF0YShrZXksIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxQYXJhbWV0ZXJzW3BhcmFtXSAmJiB0aGlzLmdsb2JhbFBhcmFtZXRlcnNbcGFyYW1dLmluY2x1ZGVzKCcjIycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJlLWRlZmluZWQgcGFyYW1ldGVyIGFuZCB2YWx1ZSB3aXRoIGFwaSBrZXlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxQYXJhbWV0ZXJzW3BhcmFtXS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWw6IGFueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXVsdGlwbGVWYWx1ZXMgPSB0aGlzLmdsb2JhbFBhcmFtZXRlcnNbcGFyYW1dLnNwbGl0KCd8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZXMgb2YgbXVsdGlwbGVWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuaW5jbHVkZXMoJyMjJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSB2YWx1ZXMuaW5jbHVkZXMoJyQkJykgPyB2YWx1ZXMuc3BsaXQoJyQkJylbMV0gOiB2YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFZhbHVlcyh2YWx1ZXMsIHJlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaVZhbHVlID0gdGhpcy5zZXRBcGlDYWxsQmFja1V0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGtleSwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gYXBpVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXBpRGF0YShrZXksIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IHZhbHVlIGluIHRoZSBzZXNzaW9uIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShwYXJhbSwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZS1kZWZpbmVkIFBhcmFtZXRlciBhbmQgQVBJIEtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGFwaSBrZXkgaW4gdGhlIHNlc3Npb24gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxQYXJhbWV0ZXJzW3BhcmFtXS5pbmNsdWRlcygnJCQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFwaUtleSA9IHRoaXMuZ2xvYmFsUGFyYW1ldGVyc1twYXJhbV0uc3BsaXQoJyQkJylbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHN1YiBvciBwcm4gZm9yIE9JRENcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX09JREMnKSA9PT0gJzEnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9Ub2tlbicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcmFtID09PSAnQ0VFX1NVQicgfHwgcGFyYW0gPT09ICdDRUVfUFJOJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbkhhbmRsZXJOYW1lID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9Ub2tlbicpLnNwbGl0KCcjIycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleSA9IHBhcmFtID09PSAnQ0VFX1NVQicgPyBgJHt0b2tlbkhhbmRsZXJOYW1lfSMjY2VlX3N1YmAgOiBgJHt0b2tlbkhhbmRsZXJOYW1lfSMjY2VlX3BybmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB2YWwgPSB0aGlzLnNldEFwaUNhbGxCYWNrVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXBpS2V5LCB0aGlzLmdldFZhbHVlcyh0aGlzLmdsb2JhbFBhcmFtZXRlcnNbcGFyYW1dLCByZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXksIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFwaURhdGEoYXBpS2V5LCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0ocGFyYW0sIGFwaUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXBpRGF0YShrZXksIHZhbCkge1xyXG4gICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgY29uc3QgYXBpRGF0YTogQXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyB2YWx1ZXMgZnJvbSBhcGkgZGF0YSBzdG9yZSBhbmQgaWYgbm90IHByZXNlbnQgc2VuZHMgdGhlIHJlc3BvbnNlIGJhY2tcclxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIGFwaSBrZXlcclxuICAgICAqIEBwYXJhbSByZXMgdGhlIHZhbHVlcyAgZnJvbSBhcGkgZGF0YSBzdG9yZSBvciBpZiBub3QgcHJlc2VudCBzZW5kcyB0aGUgcmVzcG9uc2UgYmFja1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFZhbHVlcyh2YWx1ZXMsIHJlcykge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tVdGlsLnJldHVyblZhbHVlRnJvbUFwaVN0b3JlVXNpbmdIYW5kbGVyTmFtZShcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpdCgnJCQnKVsxXS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IHJlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRvIHN1cHBvcnQgZXZlbnQgbGlzdCB0aGF0IGlzIGNvbmZpZ3VyZWQgaW4gdGhlIHN0ZXBcclxuICAgICAqIG9ubHkgc3VwcG9ydHMgb25Mb2FkIEV2ZW50XHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVN0ZXBFdmVudChldmVudE5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGVwRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuc3RlcERhdGEuZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB3YXJuaW5nT3ZlcndyaXRlTG9jYWxEYXRhSGFuZGxlckFycmF5ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnV2FybmluZ092ZXJ3cml0ZUxvY2FsRGF0YUhhbmRsZXInXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnV2FybmluZ092ZXJ3cml0ZUxvY2FsRGF0YUhhbmRsZXInXS5zcGxpdCgnfHwnKSA6IFtdO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUxvc3NIYW5kbGVyQXJyYXkgPSAgd2FybmluZ092ZXJ3cml0ZUxvY2FsRGF0YUhhbmRsZXJBcnJheVswXSA/IHdhcm5pbmdPdmVyd3JpdGVMb2NhbERhdGFIYW5kbGVyQXJyYXlbMF0uc3BsaXQoJ3wnKSA6IFtdO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUxvc3NXYXJuaW5nTWVzc2FnZSA9IHdhcm5pbmdPdmVyd3JpdGVMb2NhbERhdGFIYW5kbGVyQXJyYXkubGVuZ3RoID4gMSA/IHdhcm5pbmdPdmVyd3JpdGVMb2NhbERhdGFIYW5kbGVyQXJyYXlbMV0gOiAnQXJlIHlvdSBzdXJlLCBsb2NhbGx5IHVwZGF0ZWQgZGF0YSB3aWxsIGJlIGxvc3QhJztcclxuICAgICAgICAgICAgbGV0IHByaXZlbnRPdmVyd3JpdGVMb2NhbERhdGFIYW5kbGVyID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpdmVudE92ZXJ3cml0ZUxvY2FsRGF0YUhhbmRsZXInXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpdmVudE92ZXJ3cml0ZUxvY2FsRGF0YUhhbmRsZXInXSA6ICcnO1xyXG4gICAgICAgICAgICBsZXQgaXNPdmVyd3JpdGVMb2NhbERhdGEgPSAoIHByaXZlbnRPdmVyd3JpdGVMb2NhbERhdGFIYW5kbGVyICE9ICcnICkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbERhdGFIYW5kbGVyQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgcHJpdmVudE92ZXJ3cml0ZUxvY2FsRGF0YUhhbmRsZXIuc3BsaXQoJ3x8JykuZm9yRWFjaChoYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbERhdGFIYW5kbGVyQXJyYXkucHVzaChoYW5kbGVyLnNwbGl0KCcjIycpWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0ZXBEYXRhLmV2ZW50X2xpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50SGFuZGxlciA9IGV2ZW50ICYmIGV2ZW50WydldmVudF9wYXJhbXMnXS5sZW5ndGggPiAwICYmIGV2ZW50WydldmVudF9wYXJhbXMnXVswXVsnZXZlbnRfaGFuZGxlciddID8gZXZlbnRbJ2V2ZW50X3BhcmFtcyddWzBdWydldmVudF9oYW5kbGVyJ10gOiAnJztcclxuICAgICAgICAgICAgICAgIGxldCBhcGlEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgJiYgZGF0YUxvc3NIYW5kbGVyQXJyYXkgJiYgZGF0YUxvc3NIYW5kbGVyQXJyYXkuaW5jbHVkZXMoZXZlbnRIYW5kbGVyKSAmJiBhcGlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oZGF0YUxvc3NXYXJuaW5nTWVzc2FnZSkgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgJiYgKGlzT3ZlcndyaXRlTG9jYWxEYXRhIHx8ICFsb2NhbERhdGFIYW5kbGVyQXJyYXkuaW5jbHVkZXMoZXZlbnRIYW5kbGVyKSB8fCAoIWlzT3ZlcndyaXRlTG9jYWxEYXRhICYmIGxvY2FsRGF0YUhhbmRsZXJBcnJheS5pbmNsdWRlcyhldmVudEhhbmRsZXIpICYmICFhcGlEYXRhKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvbmxlYXZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc09uTGVhdmVFdmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZlbnQsIHRoaXMuc3RlcERhdGEuZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRlbXBsYXRlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGVwRGF0YS50ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRoaXMuc3RlcERhdGEudGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZS5kZXZpY2VfdHlwZS50b0xvd2VyQ2FzZSgpID09PSAnd2ViJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGVJZCA9IHRlbXBsYXRlLnRlbXBsYXRlX2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIHN0ZXAgaXMgY29tcGxldGVcclxuICAgIHByaXZhdGUgY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5KHsgbWFuZGF0b3J5LCB2YWxpZCB9KSB7XHJcbiAgICAgICAgY29uc3QgYWxsU3RlcERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEFsbEFwcFN0b3JlRGF0YSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGREYXRhIG9mIGFsbFN0ZXBEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0ZXBJZCA9PT0gZmllbGREYXRhLnN0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSAmJiBmaWVsZERhdGEubWFuZGF0b3J5ICYmIHRoaXMuY2hlY2tFbXB0eS5pc0VtcHR5KGZpZWxkRGF0YS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQgJiYgIWZpZWxkRGF0YS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyZXNzQmxvY2tTdGF0ZU9uRGF0YUVtaXQocmVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuYmFzZUpTT05EYXRhICYmIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuYmFzZUpTT05EYXRhLnByb2dyZXNzX2Jsb2NrKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZ3Jlc3NCbG9jayBvZiB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmJhc2VKU09ORGF0YS5wcm9ncmVzc19ibG9jaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZXRBcGlDYWxsQmFja1V0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHByb2dyZXNzQmxvY2ssIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoYXRvYihyZXN1bHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZS5zZXRTdGF0ZVZhbHVlKHByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfYmFyX2lkLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnZhcmlhYmxlT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhcmlhYmxlT2JqW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpba2V5XS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW50ZXJ2YWwgY2xlYXJlZDogXCIsdGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICAvLyB0aGlzLnRvZ2dsZU1vZGFsQ3NzQ2xhc3MoKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52YXJpYWJsZU9iaikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9ialtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludGVydmFsIGNsZWFyZWQ6IFwiLHRoaXMuaW50ZXJ2YWxJZClcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgLy8gdGhpcy50b2dnbGVNb2RhbENzc0NsYXNzKCk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgZWxlbWVudCB3aXRoICcuY2RrLW92ZXJsYXktcGFuZScgY2xhc3Mgc2VsZWN0b3Igb2YgYSBtb2RhbC5cclxuICAgIHRvZ2dsZU1vZGFsQ3NzQ2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxXcmFwcGVyID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1wYW5lJyk7XHJcbiAgICAgICAgaWYgKG1vZGFsV3JhcHBlcikge1xyXG4gICAgICAgICAgICBtb2RhbFdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWwtc3RlcC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIG1vZGFsV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMubW9kYWxHZW5lcmljQ3NzQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhbGwgZ2V0dGVyIGFuZCBzZXR0ZXJzIGdvIGhlcmVcclxuICAgIGdldCBmaXhMYXlvdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXhMYXlvdXQnKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJzaG93U3RlcExvYWRlclwiIGNsYXNzPVwibG9hZGVyLW92ZXJsYXlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2FkZXItY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPCEtLSA8cD5Mb2FkaW5nLi4uPC9wPiAtLT5cclxuICAgICAgICA8IS0tIDxhcHAtZHluYW1pYy1yZW5kZXJlciBtb2R1bGVOYW1lPVwiQ0VFX0xPQURFUlwiPjwvYXBwLWR5bmFtaWMtcmVuZGVyZXI+IC0tPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bWFpbiBjbGFzcz1cIm1haW4tYm9keSB7e2NvbnRhaW5lcl90eXBlfX1cIj5cclxuICAgIDwhLS0gPGFwcC1sb2FkaW5nLXJlbmRlcmVyPjwvYXBwLWxvYWRpbmctcmVuZGVyZXI+IC0tPlxyXG4gICAgIDwhLS0gZHJhd2VyUmVuZGVyZXIgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZHJhd2VyUmVuZGVyZXI/LmRhdGE/LnN0ZXBJZFwiPlxyXG4gICAgICAgIDxjZWUtZHJhd2VyLXJlbmRlcmVyIFtzdGVwSWRdPVwiZHJhd2VyUmVuZGVyZXI/LmRhdGE/LnN0ZXBJZFwiIFtkYXRhXT1cImRyYXdlclJlbmRlcmVyPy5kYXRhXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+PC9jZWUtZHJhd2VyLXJlbmRlcmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBoYW1idXJnZXJtZW51QmxvY2sgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFtYnVyZ2VybWVudUJsb2NrRGF0YVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogdW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgW2F0dHIucm9sZV09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLVJvbGUnXVwiICpuZ0lmPVwic3RlcERhdGEgJiYgYmxvY2tzRGF0YVwiIGlkPVwibmF2YmxvY2ste3tzdGVwRGF0YS50aWR9fVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwic3ViLW1lbnUtY29udGFpbmVyIHt7aGFtYnVyZ2VybWVudUJsb2NrQWRkaXRpb25hbFBhcmFtZXRlclsnZGlzcGxheVBvc2l0aW9uJ118fCdsZWZ0J319XCI+XHJcblxyXG4gICAgICAgICAgICA8YXBwLWJsb2NrLXJlbmRlcmVyIFtzdGVwSWRdPVwic3RlcERhdGEudGlkXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiIFtibG9ja0lkXT1cImhhbWJ1cmdlcm1lbnVCbG9ja0RhdGFcIlxyXG4gICAgICAgICAgICAgICAgW2Jsb2NrUG9zaXRpb25dPVwiMFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrLTAgaGFtYnVyZ2VybWVudSBoYW1idXJnZXJtZW51LXt7aGFtYnVyZ2VybWVudUJsb2NrRGF0YS5ibG9ja19pZH19IGhhbWJ1cmdlcm1lbnUtMFwiXHJcbiAgICAgICAgICAgICAgICBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICAgICAgPC9hcHAtYmxvY2stcmVuZGVyZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPiAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwhLS0gaGFtYnVyZ2VybWVudUJsb2NrIEVuZCAtLT5cclxuICAgIDwhLS0gU2lkZW1lbnUgQmxvY2tzIC0tPlxyXG4gICAgPCEtLSA8bmctY29udGFpbmVyICpuZ0lmPVwic2lkZUJhckRhdGEuc2lkZW1lbnVCbG9ja09uICYmIHNpZGVCYXJEYXRhLnNpZGVtZW51QmxvY2tcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInN1Yi1tZW51LWJhciB7e3NpZGVCYXJEYXRhLnNpZGVtZW51QmxvY2sgPyBzaWRlQmFyRGF0YS5zaWRlbWVudUJsb2NrID8uc2lkZV9tZW51X2NsYXNzOiAnJ319XCI+XHJcbiAgICAgICAgICAgIDxhcHAtc2lkZW1lbnUtYmFyLXJlbmRlcmVyIFtzaWRlbWVudUJsb2NrRWxlbWVudHNdPVwic2lkZUJhckRhdGEuc2lkZW1lbnVCbG9jay5zdWJtZW51XCIgW3NpZGVtZW51QmxvY2tdPVwic2lkZUJhckRhdGEuc2lkZW1lbnVCbG9ja1wiXHJcbiAgICAgICAgICAgIFtjdXJyZW50U3RlcF09XCJzdGVwSWRcIj48L2FwcC1zaWRlbWVudS1iYXItcmVuZGVyZXI+e3tzaWRlQmFyRGF0YS5zaWRlbWVudUJsb2NrID8gJ3dpdGgtc3ViLW1lbnUtYmFyJzogJyd9fVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbmctY29udGFpbmVyPiAtLT5cclxuICAgIFxyXG4gICAgPHNlY3Rpb24gW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIlxyXG4gICAgICAgIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1Sb2xlJ11cIiAqbmdJZj1cInN0ZXBEYXRhIHx8IGhlYWRlckJsb2Nrc0RhdGEgfHwgZm9vdGVyQmxvY2tzRGF0YVwiXHJcbiAgICAgICAgaWQ9XCJzdGVwYmxvY2ste3tzdGVwRGF0YT9zdGVwRGF0YS50aWQ6Jyd9fVwiXHJcbiAgICAgICAgY2xhc3M9XCJzdGVwLWJvZHkgc3RlcC17e3N0ZXBEYXRhP3N0ZXBEYXRhLnRpZDonJ319IHt7c3RlcERhdGEmJnN0ZXBEYXRhLnN0ZXBfc3R5bGU/Y29tbW9uVXRpbC5pbXBsb2RlQ2xhc3NOYW1lKHN0ZXBEYXRhLnN0ZXBfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUpOicnfX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cclxuXHJcbiAgICAgICAgPCEtLSBIZWFkZXIgQmxvY2tzIC0tPlxyXG4gICAgICAgIDxhcHAtYmxvY2stcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwRGF0YS50aWRcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW2Jsb2NrSWRdPVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgYmxvY2sgb2YgaGVhZGVyQmxvY2tzRGF0YTsgaW5kZXggYXMgaVwiIFtibG9ja1Bvc2l0aW9uXT1cImlcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJsb2NrLXt7aX19IGhlYWRlciBoZWFkZXIte3tibG9jay5ibG9ja19pZH19IGhlYWRlci17e2l9fSB7e2lzX2Jvb3RzdHJhcD8nY29sLTEyJzonJ319XCJcclxuICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgPC9hcHAtYmxvY2stcmVuZGVyZXI+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJsb2FkZXIuc2hvd1NlY3Rpb25cIiBjbGFzcz1cImNlZV9sb2FkZXIgY2VlX2xvYWRlcl97e3N0ZXBJZH19XCI+XHJcbiAgICAgICAgICAgIDxhcHAtZHluYW1pYy1yZW5kZXJlciBtb2R1bGVOYW1lPVwiQ0VFX0xPQURFUlwiPjwvYXBwLWR5bmFtaWMtcmVuZGVyZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0ZXBEYXRhXCI+XHJcbiAgICAgICAgICAgIDxhcHAtc2VjdGlvbi1yZW5kZXJlciBbaGlkZGVuXT1cImxvYWRlci5zaG93U2VjdGlvblwiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbc2VjdGlvbkRhdGFdPVwic2VjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBbc3RlcFBvc2l0aW9uXT1cInBvc1wiIFtzdGVwSWRdPVwic3RlcERhdGEudGlkXCIgW3N0ZXBOYW1lXT1cInN0ZXBEYXRhLnN0ZXBfbmFtZVwiIFtzaWRlQmFyRGF0YV09XCJzaWRlQmFyRGF0YVwiXHJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBzdGVwRGF0YS5zZWN0aW9uOyBsZXQgcG9zID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlTZWN0aW9uO1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb24te3twb3N9fSBibG9jay1tYWluLXt7cG9zfX0ge3tzZWN0aW9uLnNlY3Rpb25fc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhjb21tb25VdGlsLmltcGxvZGVDbGFzc05hbWUoc2VjdGlvbi5zZWN0aW9uX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lKSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oc2VjdGlvbikpOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLXNlY3Rpb24tcmVuZGVyZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPCEtLSBQcm9ncmVzcyBCbG9ja3MgLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb2dyZXNzQmxvY2tbJ3Byb2dyZXNzJ10gJiYgcHJvZ3Jlc3NCbG9ja1sncHJvZ3Jlc3MnXVsnTWFwVG9TdGVwJ11cIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ7e3Byb2dyZXNzQmxvY2tbJ3Byb2dyZXNzJ11bJ2Jvb3RzdHJhcF9jbGFzc19uYW1lJ10/cHJvZ3Jlc3NCbG9ja1sncHJvZ3Jlc3MnXVsnYm9vdHN0cmFwX2NsYXNzX25hbWUnXTonY29sLTEyJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3twcm9ncmVzc0Jsb2NrWydwcm9ncmVzcyddWydjdXN0b21fY2xhc3NfbmFtZSddfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLXByb2dyZXNzLWJhci1yZW5kZXJlciBbcHJvZ3Jlc3NCbG9ja109XCJwcm9ncmVzc0Jsb2NrWydwcm9ncmVzcyddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0YXRlSWRNYXBdPVwicHJvZ3Jlc3NCbG9ja1snc3RlcHMnXVwiIFtjdXJyZW50U3RlcF09XCJzdGVwSWRcIj48L2FwcC1wcm9ncmVzcy1iYXItcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPCEtLSBGb290ZXIgQmxvY2tzIC0tPlxyXG4gICAgICAgIDxhcHAtYmxvY2stcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwRGF0YS50aWRcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW2Jsb2NrSWRdPVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgYmxvY2sgb2YgZm9vdGVyQmxvY2tzRGF0YTsgaW5kZXggYXMgaVwiIFtibG9ja1Bvc2l0aW9uXT1cImlcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJsb2NrLXt7aX19IGZvb3RlciBmb290ZXIte3tibG9jay5ibG9ja19pZH19IGZvb3Rlci17e2l9fSB7e2lzX2Jvb3RzdHJhcD8nY29sLTEyJzonJ319XCJcclxuICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgPC9hcHAtYmxvY2stcmVuZGVyZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvbWFpbj5cclxuIl19