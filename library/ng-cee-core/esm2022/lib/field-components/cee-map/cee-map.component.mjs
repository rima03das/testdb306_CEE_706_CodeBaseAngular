import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { CommonModule, NgSwitch } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapInfoWindow, GoogleMap } from '@angular/google-maps';
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
import * as i10 from "@angular/common";
import * as i11 from "@angular/google-maps";
function CeeMapComponent_ng_container_0_map_marker_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "map-marker", 6, 0);
    i0.ɵɵlistener("mapClick", function CeeMapComponent_ng_container_0_map_marker_2_Template_map_marker_mapClick_0_listener() { const m_r2 = i0.ɵɵrestoreView(_r1).$implicit; const mainmarker_r3 = i0.ɵɵreference(1); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openInfo(mainmarker_r3, m_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("position", m_r2)("options", ctx_r3.markerOptions);
} }
function CeeMapComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 2);
    i0.ɵɵelementStart(1, "google-map", 3);
    i0.ɵɵtemplate(2, CeeMapComponent_ng_container_0_map_marker_2_Template, 2, 2, "map-marker", 4);
    i0.ɵɵelement(3, "map-info-window", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("center", ctx_r3.center)("zoom", ctx_r3.zoom)("options", ctx_r3.options);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.markers);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r3.infoContent, i0.ɵɵsanitizeHtml);
} }
export class CeeMapComponent extends BaseView {
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
    keepState = false;
    rowData;
    rootData;
    visibleCondition;
    map;
    info;
    google;
    flatUnflat;
    datasource;
    mapProvider;
    markerIconUrl;
    mapInfoLabel;
    mapLabelApiKey;
    mapLatitudeApiKey;
    mapLongitudeApiKey;
    responseMap = [];
    mapLayers;
    center = {
        lat: 39.29,
        lng: -76.60
    };
    zoom = 10;
    markerOptions = {
        draggable: false,
        animation: null,
    };
    options = {
        zoomControl: true,
        panControl: true,
    };
    markerPositions = [];
    markers = [];
    infoContent = '';
    responseDataSource;
    primaryKeyVal;
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
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        const { possible_values, mapConfig } = this.fieldData;
        if (mapConfig && typeof (mapConfig) === 'object') {
            const { datasource, mapProvider, mapInfoLabel, mapLabelApiKey, mapLatitudeApiKey, mapLongitudeApiKey, mapMarkerImage, zoom, pan, defaultZoom, mapLayers } = mapConfig;
            this.mapInfoLabel = (mapInfoLabel) ? mapInfoLabel : '';
            this.mapLabelApiKey = (mapLabelApiKey) ? mapLabelApiKey : '';
            this.mapLatitudeApiKey = (mapLatitudeApiKey) ? mapLatitudeApiKey : '';
            this.mapLongitudeApiKey = (mapLongitudeApiKey) ? mapLongitudeApiKey : '';
            this.datasource = (datasource) ? datasource : '';
            this.mapProvider = (mapProvider) ? mapProvider.toLowerCase() : '';
            this.mapLayers = (mapLayers) ? mapLayers.split('|') : [];
            if (mapMarkerImage) {
                this.markerIconUrl = mapMarkerImage;
            }
            this.options.zoomControl = (zoom && String(zoom) === 'true') ? true : false;
            this.options.panControl = (pan && String(pan) === 'true') ? true : false;
            this.zoom = parseInt(defaultZoom) ? parseInt(defaultZoom) : 1;
            if (this.datasource && this.datasource === 'static') {
                this.responseMap = [];
                for (const pValue of possible_values) {
                    const pValueArr = pValue.split('|').map(s => s.trim());
                    if (pValueArr.length === 3) {
                        this.responseMap.push({
                            label: pValueArr[0],
                            lat: pValueArr[1],
                            lng: pValueArr[2]
                        });
                    }
                }
                if (this.mapProvider === 'google') {
                    this.loadGoogleMap();
                }
            }
            else {
                this.loadGoogleMap();
            }
        }
        this.variableObject['mapMarkerEmitter_' + this.appData.id] = this.sharedEventsService.mapMarkerEmitter.subscribe(res => {
            if (this.markers.length) {
                const pValueArr = res['MapMarkerKey'].split('|').map(s => s.trim());
                if (pValueArr.length === 3 || pValueArr.length === 4) {
                    const hValue = [];
                    for (let index = 0; index < 3; index++) {
                        const pValue = pValueArr[index];
                        hValue.push(this.appDataService.getAppDataByApiKey(pValue, 'response') ?
                            this.appDataService.getAppDataByApiKey(pValue, 'response').value : this.appDataService.getFieldDataByFieldId(pValue));
                    }
                    for (const m of this.markers) {
                        m.options.animation = "";
                        m.animation = "";
                        if (m.matchVal === hValue.join('|')) {
                            this.center = { lat: m.lat, lng: m.lng };
                            if (pValueArr[3] && parseInt(pValueArr[3])) {
                                this.zoom = parseInt(pValueArr[3]);
                            }
                            for (const m of this.markers) {
                                m.options.animation = "";
                                m.animation = "";
                                if (m.matchVal === hValue.join('|')) {
                                    this.center = { lat: m.lat, lng: m.lng };
                                    if (pValueArr[3] && parseInt(pValueArr[3])) {
                                        this.zoom = parseInt(pValueArr[3]);
                                    }
                                    m.options.animation = google.maps.Animation.BOUNCE;
                                    m.animation = "BOUNCE";
                                }
                            }
                        }
                    }
                }
            }
        });
        this.variableObject['searchFilterEmitter_' + this.appData.id] = this.sharedEventsService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.commonUtil.setFilterKeys(this.responseDataSource, data['filterCol']);
                this.responseDataSource.filter = data['values'][0] ? data['values'][0].trim().toLowerCase() : '';
                this.createResponseMap();
            }
        });
        this.variableObject['mapCenterEmitter_' + this.appData.id] = this.sharedEventsService.mapCenterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.fieldData.unique_id) && data['values'].length === 2) {
                this.center = { lat: parseFloat(data['values'][0]), lng: parseFloat(data['values'][1]) };
                this.createResponseMap();
            }
        });
        this.variableObject['mapLayerEmitter_' + this.appData.id] = this.sharedEventsService.mapLayerEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.fieldData.unique_id) && data['values'].length) {
                const mapLayers = data['values'][0] ? data['values'][0] : [];
                this.mapLayers = (Array.isArray(mapLayers)) ? mapLayers : [];
                this.createResponseMap();
            }
        });
        this.primaryKeyVal = this.additionalParameter['PrimaryKeyName'] ? this.additionalParameter['PrimaryKeyName'] : '';
    }
    createResponseMap() {
        if (this.responseDataSource && this.responseDataSource?.filteredData) {
            const apiData = this.flatUnflat.flattenJSON(this.responseDataSource.filteredData);
            this.responseMap = [];
            this.getApiValue(apiData, this.mapLabelApiKey, 'label');
            this.getApiValue(apiData, this.mapLatitudeApiKey, 'lat');
            this.getApiValue(apiData, this.mapLongitudeApiKey, 'lng');
            for (let i = 0; i < this.responseDataSource.filteredData.length; i++) {
                if (this.responseMap[i]) {
                    if (this.mapInfoLabel) {
                        this.responseMap[i].info = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.mapInfoLabel }, this.responseDataSource.filteredData[i]).field_label;
                    }
                    const data = JSON.parse(JSON.stringify(this.responseDataSource.filteredData[i]));
                    this.responseMap[i].data = data;
                }
            }
            this.responseMap = JSON.parse(JSON.stringify(this.responseMap.filter(this.validateLatLng)));
            if (this.mapProvider === 'google') {
                this.loadGoogleMap();
            }
            if (this.markers.length) {
                if (this.additionalParameter['fitbounds'] != "false") {
                    this.getfitBounds(this.markers);
                }
                else {
                    this.center = {
                        lat: this.markers[0].position.lat, lng: this.markers[0].position.lng
                    };
                }
            }
        }
    }
    validateLatLng(m) {
        const isNumeric = function (str) {
            return str &&
                !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
        };
        return isNumeric(m.lat) && Math.abs(m.lat) <= 90 && isNumeric(m.lng) && Math.abs(m.lng) <= 180;
    }
    getApiValue(res, api_key, endKey) {
        const regex = api_key.replace('[*]', '\\[\\d+\\]');
        for (const key of Object.keys(res)) {
            const result = key.match(new RegExp(regex));
            const currIndex = key.match(new RegExp('\\d+'));
            if (result && currIndex) {
                if (!this.responseMap[currIndex[0]]) {
                    this.responseMap[currIndex[0]] = {};
                }
                this.responseMap[currIndex[0]][endKey] = res[key];
            }
        }
    }
    loadGoogleMap() {
        this.markers = [];
        let i = 0;
        for (const mValue of this.responseMap) {
            if (mValue.hasOwnProperty('label') && mValue.hasOwnProperty('lat') && mValue.hasOwnProperty('lng')) {
                this.markers.push({
                    label: {
                        color: 'red',
                        text: String.fromCharCode(i)
                    },
                    info: mValue.info ? mValue.info : mValue.label,
                    title: String.fromCharCode(i),
                    position: {
                        lat: parseFloat(mValue.lat),
                        lng: parseFloat(mValue.lng),
                    },
                    lat: parseFloat(mValue.lat),
                    lng: parseFloat(mValue.lng),
                    matchVal: [mValue.label, mValue.lat, mValue.lng].join('|'),
                    data: mValue.data ? mValue.data : {},
                    options: { animation: mValue.animation },
                    animation: mValue.animation
                });
                i++;
            }
        }
        if (this.markers.length) {
            // this.options.center = this.markers[this.additionalParameter['default_value'] ? parseInt(this.additionalParameter['default_value']) : 0];
            if (this.additionalParameter['fitbounds'] != "false") {
                this.getfitBounds(this.markers);
            }
            else {
                this.center = {
                    lat: this.markers[0].position.lat, lng: this.markers[0].position.lng
                };
            }
        }
    }
    getfitBounds(markers) {
        let bounds = new google.maps.LatLngBounds();
        markers.forEach((marker) => {
            bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
        });
        this.map.fitBounds(bounds);
        if (this.map && this.map.googleMap) {
            this.map.googleMap.setOptions({ zoom: this.zoom });
        }
    }
    // ngAfterViewInit(){
    //     this.getfitBounds(this.markers);
    // }
    openInfo(marker, content) {
        content.options.animation = "";
        content.animation = "";
        this.infoContent = content.info;
        this.info.open(marker);
    }
    onAPICallback(data) {
        if (this.fieldData.response_api_key && !this.fieldData.response_api_key.includes('[*]') && this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLabelApiKey, data)) {
            const resLabel = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLabelApiKey, data);
            const resLatitude = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLatitudeApiKey, data);
            const resLongitude = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLongitudeApiKey, data);
            if (resLabel && resLatitude && resLongitude) {
                const apiDataTemp = {};
                apiDataTemp[this.mapLabelApiKey] = resLabel;
                apiDataTemp[this.mapLatitudeApiKey] = resLatitude;
                apiDataTemp[this.mapLongitudeApiKey] = resLongitude;
                this.responseDataSource = new MatTableDataSource([apiDataTemp]);
                this.createResponseMap();
            }
        }
        else {
            const apiDataTemp = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (apiDataTemp !== null && this.datasource && this.datasource === 'external') {
                this.responseDataSource = new MatTableDataSource(apiDataTemp);
                this.createResponseMap();
            }
        }
    }
    concatData(data) {
        // method not implemented
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) { }
    setFieldStateOnStateChangeEvent(data) { }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'fieldData.possible_values'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    updateStateHistory(data) { }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
    }
    static ɵfac = function CeeMapComponent_Factory(t) { return new (t || CeeMapComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeMapComponent, selectors: [["app-cee-map"]], viewQuery: function CeeMapComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(GoogleMap, 5);
            i0.ɵɵviewQuery(MapInfoWindow, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.map = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.info = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["mainmarker", "mapMarker"], ["class", "google-map-container", 4, "ngIf"], [1, "google-map-container"], ["height", "600px", "width", "100%", 3, "center", "zoom", "options"], [3, "position", "options", "mapClick", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [3, "mapClick", "position", "options"]], template: function CeeMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeMapComponent_ng_container_0_Template, 4, 5, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [CommonModule, i10.NgForOf, i10.NgIf, GoogleMapsModule, i11.GoogleMap, i11.MapInfoWindow, i11.MapMarker], styles: [".google-map-container[_ngcontent-%COMP%]   google-map[_ngcontent-%COMP%]{width:500px;height:600px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeMapComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-map', standalone: true, imports: [NgSwitch, CommonModule, GoogleMapsModule], template: "<ng-container  class=\"google-map-container\" *ngIf=\"isVisible\">\r\n\t<google-map height=\"600px\"\r\n\twidth=\"100%\"\r\n\t[center]=\"center\"\r\n\t[zoom]=\"zoom\"\r\n\t[options]=\"options\">\r\n\t\t<map-marker *ngFor=\"let m of markers\"\r\n\t\t\t#mainmarker=\"mapMarker\"\r\n\t  \t\t[position]=\"m\"\r\n\t  \t\t[options]=\"markerOptions\"\r\n\t\t\t(mapClick)=\"openInfo(mainmarker, m)\">\r\n\t\t</map-marker>\r\n\t\t<map-info-window [innerHTML]=\"infoContent\"></map-info-window>\r\n\t</google-map>\r\n</ng-container>\r\n", styles: [".google-map-container google-map{width:500px;height:600px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], map: [{
            type: ViewChild,
            args: [GoogleMap, { static: false }]
        }], info: [{
            type: ViewChild,
            args: [MapInfoWindow, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeMapComponent, { className: "CeeMapComponent", filePath: "lib\\field-components\\cee-map\\cee-map.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtbWFwL2NlZS1tYXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLW1hcC9jZWUtbWFwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUEyQixTQUFTLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVU3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixJQUFJLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFhLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNWekUsd0NBSXNDO0lBQXJDLDRRQUFZLG9DQUF1QixLQUFDO0lBQ3JDLGlCQUFhOzs7O0lBRlYsQUFEQSwrQkFBYyxpQ0FDVzs7O0lBVDlCLGdDQUE4RDtJQUM3RCxxQ0FJb0I7SUFDbkIsNkZBSXNDO0lBRXRDLHFDQUE2RDtJQUM5RCxpQkFBYTs7OztJQVZiLGNBQWlCO0lBRWpCLEFB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QztJQUV0QyxXQUFXLENBQUMsT0FBc0I7UUFDOUIsNEZBQTRGO1FBQzVGLDJEQUEyRDtRQUMzRCxJQUFJO1FBQ0osSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQzt5RUF6WFEsZUFBZTs2REFBZixlQUFlOzJCQVFiLFNBQVM7MkJBQ1QsYUFBYTs7Ozs7O1lDbEM1QixrRkFBOEQ7O1lBQWpCLG9DQUFlOzRCRHVCcEMsWUFBWSx5QkFBRSxnQkFBZ0I7O2lGQUV6QyxlQUFlO2NBUDNCLFNBQVM7MkJBQ0ksYUFBYSxjQUdYLElBQUksV0FDUCxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z1RBSWxDLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDbUMsR0FBRztrQkFBM0MsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ00sSUFBSTtrQkFBaEQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrRkFUbEMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIFZpZXdDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuIFxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEZsYXRVbmZsYXQgfSBmcm9tICcuLi8uLi91dGlscy9mbGF0LXVuZmxhdC1qc29uJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdTd2l0Y2ggfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0dvb2dsZU1hcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2dvb2dsZS1tYXBzJztcclxuaW1wb3J0IHsgTWFwSW5mb1dpbmRvdywgTWFwTWFya2VyLCBHb29nbGVNYXAgfSBmcm9tICdAYW5ndWxhci9nb29nbGUtbWFwcyc7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtbWFwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtbWFwLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1tYXAuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdTd2l0Y2gsIENvbW1vbk1vZHVsZSwgR29vZ2xlTWFwc01vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZU1hcENvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHZpc2libGVDb25kaXRpb246IGFueTtcclxuICAgIEBWaWV3Q2hpbGQoR29vZ2xlTWFwLCB7IHN0YXRpYzogZmFsc2UgfSkgbWFwOiBHb29nbGVNYXA7XHJcbiAgICBAVmlld0NoaWxkKE1hcEluZm9XaW5kb3csIHsgc3RhdGljOiBmYWxzZSB9KSBpbmZvOiBNYXBJbmZvV2luZG93O1xyXG4gICAgZGVjbGFyZSBnb29nbGU6IGFueTtcclxuICAgIHByaXZhdGUgZmxhdFVuZmxhdDogRmxhdFVuZmxhdDtcclxuICAgIGRhdGFzb3VyY2U6IHN0cmluZztcclxuICAgIG1hcFByb3ZpZGVyOiBzdHJpbmc7XHJcbiAgICBtYXJrZXJJY29uVXJsOiBzdHJpbmc7XHJcbiAgICBtYXBJbmZvTGFiZWw6IHN0cmluZztcclxuICAgIG1hcExhYmVsQXBpS2V5OiBzdHJpbmc7XHJcbiAgICBtYXBMYXRpdHVkZUFwaUtleTogc3RyaW5nO1xyXG4gICAgbWFwTG9uZ2l0dWRlQXBpS2V5OiBzdHJpbmc7XHJcbiAgICByZXNwb25zZU1hcDogYW55W10gPSBbXTtcclxuICAgIG1hcExheWVyczogc3RyaW5nW107XHJcblxyXG4gICAgY2VudGVyOiBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsID0ge1xyXG4gICAgICAgIGxhdDogMzkuMjksXHJcbiAgICAgICAgbG5nOiAtNzYuNjBcclxuICAgIH07XHJcbiAgICB6b29tID0gMTA7XHJcbiAgICBtYXJrZXJPcHRpb25zOiBnb29nbGUubWFwcy5NYXJrZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBudWxsLFxyXG4gICAgfTtcclxuICAgIG9wdGlvbnM6IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnMgPSB7XHJcbiAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgcGFuQ29udHJvbDogdHJ1ZSxcclxuICAgIH07XHJcbiAgICBtYXJrZXJQb3NpdGlvbnM6IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWxbXSA9IFtdO1xyXG4gICAgbWFya2VycyA9IFtdO1xyXG4gICAgaW5mb0NvbnRlbnQgPSAnJztcclxuICAgIHJlc3BvbnNlRGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcbiAgICBwcmltYXJ5S2V5VmFsIDogJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCk7XHJcbiAgICAgICAgdGhpcy5mbGF0VW5mbGF0ID0gbmV3IEZsYXRVbmZsYXQoYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZV92YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBtYXBDb25maWdcclxuICAgICAgICAgICAgfSA9IHRoaXMuZmllbGREYXRhO1xyXG4gICAgIFxyXG4gICAgICAgICAgICBpZiAobWFwQ29uZmlnICYmIHR5cGVvZiAobWFwQ29uZmlnKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc291cmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcFByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcEluZm9MYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXBMYWJlbEFwaUtleSxcclxuICAgICAgICAgICAgICAgICAgICBtYXBMYXRpdHVkZUFwaUtleSxcclxuICAgICAgICAgICAgICAgICAgICBtYXBMb25naXR1ZGVBcGlLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTWFya2VySW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbSxcclxuICAgICAgICAgICAgICAgICAgICBwYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFpvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwTGF5ZXJzXHJcbiAgICAgICAgICAgICAgICB9ID0gbWFwQ29uZmlnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBJbmZvTGFiZWwgPSAobWFwSW5mb0xhYmVsKSA/IG1hcEluZm9MYWJlbCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBMYWJlbEFwaUtleSA9IChtYXBMYWJlbEFwaUtleSkgPyBtYXBMYWJlbEFwaUtleSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBMYXRpdHVkZUFwaUtleSA9IChtYXBMYXRpdHVkZUFwaUtleSkgPyBtYXBMYXRpdHVkZUFwaUtleSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBMb25naXR1ZGVBcGlLZXkgPSAobWFwTG9uZ2l0dWRlQXBpS2V5KSA/IG1hcExvbmdpdHVkZUFwaUtleSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhc291cmNlID0gKGRhdGFzb3VyY2UpID8gZGF0YXNvdXJjZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBQcm92aWRlciA9IChtYXBQcm92aWRlcikgPyBtYXBQcm92aWRlci50b0xvd2VyQ2FzZSgpIDogJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcExheWVycyA9IChtYXBMYXllcnMpID8gbWFwTGF5ZXJzLnNwbGl0KCd8JykgOiBbXTtcclxuICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChtYXBNYXJrZXJJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VySWNvblVybCA9IG1hcE1hcmtlckltYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnpvb21Db250cm9sID0gKHpvb20gJiYgU3RyaW5nKHpvb20pID09PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBhbkNvbnRyb2wgPSAocGFuICYmIFN0cmluZyhwYW4pID09PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy56b29tID0gcGFyc2VJbnQoZGVmYXVsdFpvb20pID8gcGFyc2VJbnQoZGVmYXVsdFpvb20pIDogMTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFzb3VyY2UgJiYgdGhpcy5kYXRhc291cmNlID09PSAnc3RhdGljJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VNYXAgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBWYWx1ZSBvZiBwb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcFZhbHVlQXJyOiBzdHJpbmdbXSA9IHBWYWx1ZS5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBWYWx1ZUFyci5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VNYXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHBWYWx1ZUFyclswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBWYWx1ZUFyclsxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBWYWx1ZUFyclsyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tYXBQcm92aWRlciA9PT0gJ2dvb2dsZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRHb29nbGVNYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRHb29nbGVNYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W1xyXG4gICAgICAgICAgICAgICAgJ21hcE1hcmtlckVtaXR0ZXJfJyArIHRoaXMuYXBwRGF0YS5pZFxyXG4gICAgICAgICAgICBdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLm1hcE1hcmtlckVtaXR0ZXIuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBWYWx1ZUFycjogc3RyaW5nW10gPSByZXNbJ01hcE1hcmtlcktleSddLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwVmFsdWVBcnIubGVuZ3RoID09PSAzIHx8IHBWYWx1ZUFyci5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaFZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwVmFsdWUgPSBwVmFsdWVBcnJbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaFZhbHVlLnB1c2godGhpcy5hcHBEYXRhU2VydmljZS5nZXRBcHBEYXRhQnlBcGlLZXkocFZhbHVlLCAncmVzcG9uc2UnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5nZXRBcHBEYXRhQnlBcGlLZXkocFZhbHVlLCAncmVzcG9uc2UnKS52YWx1ZSA6IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHBWYWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtIG9mIHRoaXMubWFya2Vycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5vcHRpb25zLmFuaW1hdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmFuaW1hdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5tYXRjaFZhbCA9PT0gaFZhbHVlLmpvaW4oJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyID0ge2xhdCA6bS5sYXQsIGxuZzogbS5sbmd9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwVmFsdWVBcnJbM10gJiYgcGFyc2VJbnQocFZhbHVlQXJyWzNdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpvb20gPSBwYXJzZUludChwVmFsdWVBcnJbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG0gb2YgdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0ub3B0aW9ucy5hbmltYXRpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmFuaW1hdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLm1hdGNoVmFsID09PSBoVmFsdWUuam9pbignfCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlciA9IHtsYXQgOm0ubGF0LCBsbmc6IG0ubG5nfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwVmFsdWVBcnJbM10gJiYgcGFyc2VJbnQocFZhbHVlQXJyWzNdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSA9IHBhcnNlSW50KHBWYWx1ZUFyclszXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLm9wdGlvbnMuYW5pbWF0aW9uID0gZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uYW5pbWF0aW9uID0gXCJCT1VOQ0VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbXHJcbiAgICAgICAgICAgICAgICAnc2VhcmNoRmlsdGVyRW1pdHRlcl8nICsgdGhpcy5hcHBEYXRhLmlkXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uuc2VhcmNoRmlsdGVyRW1pdHRlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10uaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbC5zZXRGaWx0ZXJLZXlzKHRoaXMucmVzcG9uc2VEYXRhU291cmNlLCBkYXRhWydmaWx0ZXJDb2wnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGFTb3VyY2UuZmlsdGVyID0gZGF0YVsndmFsdWVzJ11bMF0gPyBkYXRhWyd2YWx1ZXMnXVswXS50cmltKCkudG9Mb3dlckNhc2UoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVzcG9uc2VNYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICBcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtcclxuICAgICAgICAgICAgICAgICdtYXBDZW50ZXJFbWl0dGVyXycgKyB0aGlzLmFwcERhdGEuaWRcclxuICAgICAgICAgICAgXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5tYXBDZW50ZXJFbWl0dGVyLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpICYmIGRhdGFbJ3ZhbHVlcyddLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyID0geyBsYXQ6IHBhcnNlRmxvYXQoZGF0YVsndmFsdWVzJ11bMF0pLCBsbmc6IHBhcnNlRmxvYXQoZGF0YVsndmFsdWVzJ11bMV0pIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJlc3BvbnNlTWFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbXHJcbiAgICAgICAgICAgICAgICAnbWFwTGF5ZXJFbWl0dGVyXycgKyB0aGlzLmFwcERhdGEuaWRcclxuICAgICAgICAgICAgXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5tYXBMYXllckVtaXR0ZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbJ3VuaXF1ZUlkcyddLmluY2x1ZGVzKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkgJiYgZGF0YVsndmFsdWVzJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFwTGF5ZXJzID0gZGF0YVsndmFsdWVzJ11bMF0gPyBkYXRhWyd2YWx1ZXMnXVswXSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwTGF5ZXJzID0gKEFycmF5LmlzQXJyYXkobWFwTGF5ZXJzKSkgPyBtYXBMYXllcnMgOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJlc3BvbnNlTWFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJpbWFyeUtleVZhbCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpbWFyeUtleU5hbWUnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpbWFyeUtleU5hbWUnXSA6ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVSZXNwb25zZU1hcCgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGFTb3VyY2UgJiYgdGhpcy5yZXNwb25zZURhdGFTb3VyY2U/LmZpbHRlcmVkRGF0YSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlEYXRhID0gdGhpcy5mbGF0VW5mbGF0LmZsYXR0ZW5KU09OKHRoaXMucmVzcG9uc2VEYXRhU291cmNlLmZpbHRlcmVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlTWFwID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFwaVZhbHVlKGFwaURhdGEsIHRoaXMubWFwTGFiZWxBcGlLZXksICdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBcGlWYWx1ZShhcGlEYXRhLCB0aGlzLm1hcExhdGl0dWRlQXBpS2V5LCAnbGF0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFwaVZhbHVlKGFwaURhdGEsIHRoaXMubWFwTG9uZ2l0dWRlQXBpS2V5LCAnbG5nJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzcG9uc2VEYXRhU291cmNlLmZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlTWFwW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcEluZm9MYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZU1hcFtpXS5pbmZvID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh7IGZpZWxkX2xhYmVsOiB0aGlzLm1hcEluZm9MYWJlbCB9LCB0aGlzLnJlc3BvbnNlRGF0YVNvdXJjZS5maWx0ZXJlZERhdGFbaV0pLmZpZWxkX2xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucmVzcG9uc2VEYXRhU291cmNlLmZpbHRlcmVkRGF0YVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlTWFwW2ldLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VNYXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucmVzcG9uc2VNYXAuZmlsdGVyKHRoaXMudmFsaWRhdGVMYXRMbmcpKSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1hcFByb3ZpZGVyID09PSAnZ29vZ2xlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkR29vZ2xlTWFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1hcmtlcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2ZpdGJvdW5kcyddICE9IFwiZmFsc2VcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Zml0Qm91bmRzKHRoaXMubWFya2Vycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyID17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQgOiB0aGlzLm1hcmtlcnNbMF0ucG9zaXRpb24ubGF0LCBsbmc6IHRoaXMubWFya2Vyc1swXS5wb3NpdGlvbi5sbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2YWxpZGF0ZUxhdExuZyhtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTnVtZXJpYyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaXNOYU4oc3RyKSAmJiAvLyB1c2UgdHlwZSBjb2VyY2lvbiB0byBwYXJzZSB0aGUgX2VudGlyZXR5XyBvZiB0aGUgc3RyaW5nIChgcGFyc2VGbG9hdGAgYWxvbmUgZG9lcyBub3QgZG8gdGhpcykuLi5cclxuICAgICAgICAgICAgICAgICAgICAhaXNOYU4ocGFyc2VGbG9hdChzdHIpKSAvLyAuLi5hbmQgZW5zdXJlIHN0cmluZ3Mgb2Ygd2hpdGVzcGFjZSBmYWlsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGlzTnVtZXJpYyhtLmxhdCkgJiYgTWF0aC5hYnMobS5sYXQpIDw9IDkwICYmIGlzTnVtZXJpYyhtLmxuZykgJiYgTWF0aC5hYnMobS5sbmcpIDw9IDE4MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEFwaVZhbHVlKHJlcywgYXBpX2tleSwgZW5kS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gYXBpX2tleS5yZXBsYWNlKCdbKl0nLCAnXFxcXFtcXFxcZCtcXFxcXScpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBrZXkubWF0Y2gobmV3IFJlZ0V4cChyZWdleCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyckluZGV4ID0ga2V5Lm1hdGNoKG5ldyBSZWdFeHAoJ1xcXFxkKycpKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgY3VyckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3BvbnNlTWFwW2N1cnJJbmRleFswXV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZU1hcFtjdXJySW5kZXhbMF1dID0ge31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZU1hcFtjdXJySW5kZXhbMF1dW2VuZEtleV0gPSByZXNba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZEdvb2dsZU1hcCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtVmFsdWUgb2YgdGhpcy5yZXNwb25zZU1hcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1WYWx1ZS5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSAmJiBtVmFsdWUuaGFzT3duUHJvcGVydHkoJ2xhdCcpICYmIG1WYWx1ZS5oYXNPd25Qcm9wZXJ0eSgnbG5nJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IG1WYWx1ZS5pbmZvID8gbVZhbHVlLmluZm8gOiBtVmFsdWUubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KG1WYWx1ZS5sYXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiAgcGFyc2VGbG9hdChtVmFsdWUubG5nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KG1WYWx1ZS5sYXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6ICBwYXJzZUZsb2F0KG1WYWx1ZS5sbmcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFZhbDogW21WYWx1ZS5sYWJlbCwgbVZhbHVlLmxhdCwgbVZhbHVlLmxuZ10uam9pbignfCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtVmFsdWUuZGF0YSA/IG1WYWx1ZS5kYXRhIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgOiB7YW5pbWF0aW9uIDogbVZhbHVlLmFuaW1hdGlvbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA6IG1WYWx1ZS5hbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMub3B0aW9ucy5jZW50ZXIgPSB0aGlzLm1hcmtlcnNbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10gPyBwYXJzZUludCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2RlZmF1bHRfdmFsdWUnXSkgOiAwXTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZml0Ym91bmRzJ10gIT0gXCJmYWxzZVwiKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldGZpdEJvdW5kcyh0aGlzLm1hcmtlcnMpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXIgPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0IDogdGhpcy5tYXJrZXJzWzBdLnBvc2l0aW9uLmxhdCwgbG5nOiB0aGlzLm1hcmtlcnNbMF0ucG9zaXRpb24ubG5nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRmaXRCb3VuZHMobWFya2Vycyl7XHJcbiAgICAgICAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XHJcbiAgICAgICAgICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm91bmRzLmV4dGVuZChcclxuICAgICAgICAgICAgICAgICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhtYXJrZXIucG9zaXRpb24ubGF0LCBtYXJrZXIucG9zaXRpb24ubG5nKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XHJcbiAgICAgICAgICAgIGlmKCB0aGlzLm1hcCAmJiB0aGlzLm1hcC5nb29nbGVNYXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwLmdvb2dsZU1hcC5zZXRPcHRpb25zKHsgem9vbTogdGhpcy56b29tIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBuZ0FmdGVyVmlld0luaXQoKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5nZXRmaXRCb3VuZHModGhpcy5tYXJrZXJzKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIG9wZW5JbmZvKG1hcmtlcjogTWFwTWFya2VyLCBjb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQub3B0aW9ucy5hbmltYXRpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICBjb250ZW50LmFuaW1hdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0NvbnRlbnQgPSBjb250ZW50LmluZm87XHJcbiAgICAgICAgICAgIHRoaXMuaW5mby5vcGVuKG1hcmtlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkgJiYgIXRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkuaW5jbHVkZXMoJ1sqXScpICYmIHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSArIHRoaXMubWFwTGFiZWxBcGlLZXksIGRhdGEpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0xhYmVsID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5ICsgdGhpcy5tYXBMYWJlbEFwaUtleSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0xhdGl0dWRlID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5ICsgdGhpcy5tYXBMYXRpdHVkZUFwaUtleSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0xvbmdpdHVkZSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSArIHRoaXMubWFwTG9uZ2l0dWRlQXBpS2V5LCBkYXRhKTtcclxuICAgICAgICAgICAgaWYgKHJlc0xhYmVsICYmIHJlc0xhdGl0dWRlICYmIHJlc0xvbmdpdHVkZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBpRGF0YVRlbXAgPSB7fTtcclxuICAgICAgICAgICAgICAgIGFwaURhdGFUZW1wW3RoaXMubWFwTGFiZWxBcGlLZXldID0gcmVzTGFiZWw7XHJcbiAgICAgICAgICAgICAgICBhcGlEYXRhVGVtcFt0aGlzLm1hcExhdGl0dWRlQXBpS2V5XSA9IHJlc0xhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgYXBpRGF0YVRlbXBbdGhpcy5tYXBMb25naXR1ZGVBcGlLZXldID0gcmVzTG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFthcGlEYXRhVGVtcF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSZXNwb25zZU1hcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYXBpRGF0YVRlbXAgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGFwaURhdGFUZW1wICE9PSBudWxsICYmIHRoaXMuZGF0YXNvdXJjZSAmJiB0aGlzLmRhdGFzb3VyY2UgPT09ICdleHRlcm5hbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShhcGlEYXRhVGVtcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJlc3BvbnNlTWFwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbmNhdERhdGEoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZFxyXG4gICAgfVxyXG4gXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuIFxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7fVxyXG4gXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge31cclxuIFxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hhbmdlTWFwID0ge1xyXG4gICAgICAgIC8vICAgICBmaWVsZF9sYWJlbDogJ2ZpZWxkRGF0YS5maWVsZF9sYWJlbCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyX3RleHQ6ICdmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCcsXHJcbiAgICAgICAgLy8gICAgIHRvb2x0aXA6ICdmaWVsZERhdGEudG9vbHRpcCcsXHJcbiAgICAgICAgLy8gICAgICdhZGRpdGlvbmFsX3BhcmFtZXRlcnNbKl1BcmlhLUxhYmVsJzogJ2FkZGl0aW9uYWxQYXJhbWV0ZXJbXFwnQXJpYS1MYWJlbFxcJ10nLFxyXG4gICAgICAgIC8vICAgICAnZmllbGRfZGF0YS5wb3NzaWJsZV92YWx1ZXNbKl0nOiAnZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcydcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlTWFwKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBsYW5nVmFsID0gdGhpcy5zd2l0Y2hMYW5nKHZhbHVlLCBkYXRhLCBjaGFuZ2VNYXApO1xyXG4gICAgICAgIC8vICAgICBpZiAobGFuZ1ZhbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc1tsYW5nVmFsLmtleV0gPSBsYW5nVmFsLnZhbDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuIFxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge31cclxuIFxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgIGNsYXNzPVwiZ29vZ2xlLW1hcC1jb250YWluZXJcIiAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG5cdDxnb29nbGUtbWFwIGhlaWdodD1cIjYwMHB4XCJcclxuXHR3aWR0aD1cIjEwMCVcIlxyXG5cdFtjZW50ZXJdPVwiY2VudGVyXCJcclxuXHRbem9vbV09XCJ6b29tXCJcclxuXHRbb3B0aW9uc109XCJvcHRpb25zXCI+XHJcblx0XHQ8bWFwLW1hcmtlciAqbmdGb3I9XCJsZXQgbSBvZiBtYXJrZXJzXCJcclxuXHRcdFx0I21haW5tYXJrZXI9XCJtYXBNYXJrZXJcIlxyXG5cdCAgXHRcdFtwb3NpdGlvbl09XCJtXCJcclxuXHQgIFx0XHRbb3B0aW9uc109XCJtYXJrZXJPcHRpb25zXCJcclxuXHRcdFx0KG1hcENsaWNrKT1cIm9wZW5JbmZvKG1haW5tYXJrZXIsIG0pXCI+XHJcblx0XHQ8L21hcC1tYXJrZXI+XHJcblx0XHQ8bWFwLWluZm8td2luZG93IFtpbm5lckhUTUxdPVwiaW5mb0NvbnRlbnRcIj48L21hcC1pbmZvLXdpbmRvdz5cclxuXHQ8L2dvb2dsZS1tYXA+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=