import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Title } from '@angular/platform-browser';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { CeeApiService } from './services/cee-api-service.service';
import { CeeLogHandlerService } from './services/cee-log-handler.service';
import { DynamicComponentHandlerService } from './services/dynamic-component-handler.service';
import { UserDataHandlerService } from './services/user-data-handler.service';
import { WfeStepLoaderService } from './services/wfe-step-loader.service';
import { WebworkerService } from './services/web-worker-service';
/*
export * from './bearer-token-service.service';
export * from './shared-events-service.service';
export * from './event-response-handler.service'; */
// import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicRendererComponent } from './components/dynamic-renderer/dynamic-renderer.component';
import { StepRendererComponent } from './components/step-renderer/step-renderer.component';
import { ModalRendererComponent } from './components/modal-renderer/modal-renderer.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { BlockRendererComponent } from './components/block-renderer/block-renderer.component';
// import { SectionRendererComponent } from './components/section-renderer/section-renderer.component';
// import { ViewRendererComponent } from './components/view-renderer/view-renderer.component';
// import { BreadcrumbRendererComponent } from './components/breadcrumb-renderer/breadcrumb-renderer.component';
// import { BreadcrumbCellRendererComponent } from './components/breadcrumb-cell-renderer/breadcrumb-cell-renderer.component';
// import { RepeatableBlockRendererComponent } from './components/repeatable-block-renderer/repeatable-block-renderer.component';
// import { LoadingRendererComponent } from './components/loading-renderer/loading-renderer.component';
// import { AccordionRendererComponent } from './components/accordion-renderer/accordion-renderer.component';
// import { ListRendererComponent } from './components/list-renderer/list-renderer.component';
// import { ListRendererComponentV2 } from './components/list-renderer-v2/list-renderer-v2.component';
// import { TreeRendererComponent } from './components/tree-renderer/tree-renderer.component';
// import { TabRendererComponent } from './components/tab-renderer/tab-renderer.component';
// import { GenericBlockRendererComponent } from './components/generic-block-renderer/generic-block-renderer.component';
// import { BaseView } from './field-components/cee-base-class';
// import { CeeButtonComponent } from './field-components/cee-button/cee-button.component';
// import { CeeCheckboxComponent } from './field-components/cee-checkbox/cee-checkbox.component';
// import { CeeTableComponent } from './field-components/cee-table/cee-table.component';
// import { CeeTableV2Component } from './components/cee-table-v2/cee-table-v2.component';
// import { CeeDateComponent } from './field-components/cee-date/cee-date.component';
// import { CeeImageComponent } from './field-components/cee-image/cee-image.component';
// import { CeeLabelComponent } from './field-components/cee-label/cee-label.component';
// import { CeeTagComponent } from './field-components/cee-tag/cee-tag.component';
// import { CeeLinkComponent } from './field-components/cee-link/cee-link.component';
// import { CeeVideoComponent } from './field-components/cee-video/cee-video.component';
// import { CeePickerComponent } from './field-components/cee-picker/cee-picker.component';
// import { CeeRadioComponent } from './field-components/cee-radio/cee-radio.component';
// import { CeeSignatureComponent } from './field-components/cee-signature/cee-signature.component';
// import { CeeSliderComponent } from './field-components/cee-slider/cee-slider.component';
// import { CeeSwitchComponent } from './field-components/cee-switch/cee-switch.component';
// import { CeeTextareaComponent } from './field-components/cee-textarea/cee-textarea.component';
// import { CeeTextfieldComponent } from './field-components/cee-textfield/cee-textfield.component';
// import { CeeCaptchaComponent } from './field-components/cee-captcha/cee-captcha.component';
// import { CeeAutoCompleteComponent } from './field-components/cee-auto-complete/cee-auto-complete.component';
// import { CeeTimePickerComponent } from './field-components/cee-time-picker/cee-time-picker.component';
// import { CeeToggleButtonComponent } from './field-components/cee-toggle-button/cee-toggle-button.component';
// import { CeeMenuComponent } from './field-components/cee-menu/cee-menu.component';
// import { CeeMenucontextComponent } from './field-components/cee-menucontext/cee-menucontext.component';
// import { CeeMapComponent } from './field-components/cee-map/cee-map.component';
// import { CeeChartComponent } from './field-components/cee-chart/cee-chart.component';
// import { AgmCoreModule } from '@agm/core';
import { NgChartsModule, ThemeService, NgChartsConfiguration } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MaterialComponentModule } from './material-component.module';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
// import { CeeCarouselComponent } from './field-components/cee-carousel/cee-carousel.component';
// import { ProgressBarRendererComponent } from './components/progress-bar-renderer/progress-bar-renderer.component';
// import { CeeAttachmentsComponent } from './field-components/cee-attachments/cee-attachments.component';
// import { DomSanitizePipe } from './pipes/dom-sanitize.pipe';
// import { CeeTimeSlotsComponent } from './field-components/cee-time-slots/cee-time-slots.component';
// import { CeeCalendarComponent } from './field-components/cee-calendar/cee-calendar.component';
// import { CeeNumberComponent } from './field-components/cee-number/cee-number.component';
// import { CeePhoneNumberComponent } from './field-components/cee-phone-number/cee-phone-number.component';
// import { CustomTooltipDirective } from './directives/app.directive';
import { MatChipsModule as MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule as MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SocketIoModule } from 'ngx-socket-io';
import { SnackbarRendererComponent } from './components/snackbar-renderer/snackbar-renderer.component';
// import { CeeTickerComponent } from './field-components/cee-ticker/cee-ticker.component';
import { OAuthModule } from 'angular-oauth2-oidc';
// import { CeeCameraComponent } from './field-components/cee-camera/cee-camera.component';
import { WebcamModule } from 'ngx-webcam';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';
import { NgxBarcodeScannerService } from "@eisberg-labs/ngx-barcode-scanner";
import { NgxImageZoomModule } from 'ngx-image-zoom';
// import { ShowPasswordDirective } from "./directives/showPassword/showPassword.directive"
import { ToastrModule } from 'ngx-toastr';
import { CdkMenuModule } from '@angular/cdk/menu';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
// import {ResizeColumnDirective} from './field-components/cee-table/cee-table-resize-column.directive';
// import {SortableHeaderDirective} from './field-components/cee-table/cee-table-sorting.directive';
// import {DebounceClickDirective} from './field-components/cee-button/cee-button.directive';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxDaterangepickerBootstrapModule, NgxDaterangepickerLocaleService, } from 'ngx-daterangepicker-bootstrap';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { ImageCropModalComponent } from './field-components/cee-profile-image/image-crop-modal.component';
import { DrawerComponent } from './components/drawer-renderer/drawer-renderer.component';
import { QuillModule } from 'ngx-quill';
import * as i0 from "@angular/core";
import * as i1 from "@ng-idle/keepalive";
import * as i2 from "ng2-charts";
import * as i3 from "ngx-socket-io";
import * as i4 from "angular-oauth2-oidc";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-daterangepicker-bootstrap";
import * as i7 from "ngx-quill";
// import { TooltipModule } from './directives/tooltip/tooltip.module';
// @Injectable({providedIn: 'root'})
// export class SocketOne extends Socket {
//   constructor() {
//       super({
//         url: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 0 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][0]['dataSocketUrl'] : '',
//         options: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 0 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][0]['dataSocketOptions'] : { transports: ['websocket'], path:'/' }
//       });
//   }
// }
// @Injectable({providedIn: 'root'})
// export class SocketTwo extends Socket {
//   constructor() {
//       super({
//         url: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 1 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][1]['dataSocketUrl'] : '',
//         options: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 1 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][1]['dataSocketOptions'] : { transports: ['websocket'], path:'/' }
//       });
//   }
// }
// @Injectable({providedIn: 'root'})
// export class SocketThree extends Socket {
//   constructor() {
//       super({
//         url: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 2 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][2]['dataSocketUrl'] : '',
//         options: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 2 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][2]['dataSocketOptions'] : { transports: ['websocket'], path:'/' }
//       });
//   }
// }
// @Injectable({providedIn: 'root'})
// export class SocketFour extends Socket {
//   constructor() {
//       super({
//         url: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 3 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][3]['dataSocketUrl'] : '',
//         options: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 3 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][3]['dataSocketOptions'] : { transports: ['websocket'], path:'/' }
//       });
//   }
// }
// @Injectable({providedIn: 'root'})
// export class SocketFive extends Socket {
//   constructor() {
//       super({
//         url: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 4 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][4]['dataSocketUrl'] : '',
//         options: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 4 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][4]['dataSocketOptions'] : { transports: ['websocket'], path:'/' }
//       });
//   }
// }
const config = {
    url: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 0 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][0]['dataSocketUrl'] : '',
    options: localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 0 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'][0]['dataSocketOptions'] : { transports: ['websocket'], path: '/', autoConnect: false }
};
export { AlertModalComponent, ImageCropModalComponent, BlockRendererComponent, DynamicRendererComponent, 
// DynamicFormComponent,
ModalRendererComponent, SnackbarRendererComponent, StepRendererComponent, DrawerComponent };
export class NgCeeCoreModule {
    static ɵfac = function NgCeeCoreModule_Factory(t) { return new (t || NgCeeCoreModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgCeeCoreModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            Title,
            WfeStepLoaderService,
            UserDataHandlerService,
            CeeApiService,
            CeeLogHandlerService,
            DynamicComponentHandlerService,
            DatePipe,
            ThemeService,
            NgxDaterangepickerLocaleService,
            NgxBarcodeScannerService,
            WebworkerService,
            { provide: 'googleMapsApiKey', useValue: 'AIzaSyD9HeCFeg5EUx5CKvXGTdwJANhESMVTIWI' },
            { provide: NgChartsConfiguration, useValue: { generateColors: false } },
            provideAnimations(),
            provideToastr(), // Toastr providers
        ], imports: [FormsModule,
            ReactiveFormsModule,
            CommonModule,
            HttpClientModule,
            BrowserAnimationsModule,
            NgIdleKeepaliveModule.forRoot(),
            UiSwitchModule,
            MaterialComponentModule,
            MatChipsModule,
            MatIconModule,
            MatProgressBarModule,
            NgbModule,
            NgbTimepickerModule,
            // AgmCoreModule.forRoot({
            //     apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
            // }),
            NgChartsModule.forRoot(),
            Ng2GoogleChartsModule,
            NgxMaterialTimepickerModule,
            SocketIoModule.forRoot(config),
            OAuthModule.forRoot(),
            WebcamModule,
            NgxBarcodeScannerModule,
            NgxImageZoomModule,
            ToastrModule.forRoot({
                enableHtml: true,
                easing: 'ease-in-out-elastic',
                easeTime: 300
            }),
            CdkMenuModule,
            NgxMatTimepickerModule,
            NgxMatNativeDateModule,
            NgxMatDatetimePickerModule,
            YouTubePlayerModule,
            MatInputModule,
            MatFormFieldModule,
            BrowserModule,
            GoogleMapsModule,
            NgxDaterangepickerBootstrapModule.forRoot(),
            QuillModule.forRoot({
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
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
                        ['link', 'image'] // CRITICAL: No video in global config
                    ]
                }
            })
            // TooltipModule
        ] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgCeeCoreModule, [{
        type: NgModule,
        args: [{
                declarations: [
                // StepRendererComponent,
                // CeeButtonComponent,
                // CeeCheckboxComponent,
                // CeeDateComponent,
                // CeeImageComponent,
                // CeeLabelComponent,
                // CeeTagComponent,
                // CeePickerComponent,
                // CeeRadioComponent,
                // CeeSignatureComponent,
                // CeeSliderComponent,
                // CeeTextfieldComponent,
                // CeeCaptchaComponent,
                // CeeAutoCompleteComponent,
                // CeeTextareaComponent,
                // CeeToggleButtonComponent,
                // CeeSwitchComponent,
                // SectionRendererComponent,
                // BlockRendererComponent,
                // CeeLinkComponent,
                // CeeVideoComponent,
                // CeeTimePickerComponent,
                // CeePhoneNumberComponent,
                // DynamicRendererComponent,
                // DynamicFormComponent,
                // ViewRendererComponent,
                // CeeTableComponent,
                // BreadcrumbRendererComponent,
                // RepeatableBlockRendererComponent,
                // // LoadingRendererComponent,
                // ListRendererComponent,
                // TreeRendererComponent,
                // TabRendererComponent,
                // AccordionRendererComponent,
                // ModalRendererComponent,
                // SnackbarRendererComponent,
                // CeeMenuComponent,
                // CeeMenucontextComponent,
                // CeeMapComponent,
                // CeeChartComponent,
                // AlertModalComponent,
                // GenericBlockRendererComponent,
                // BreadcrumbCellRendererComponent,
                // CeeCarouselComponent,
                // ProgressBarRendererComponent,
                // CeeAttachmentsComponent,
                // CeeTimeSlotsComponent,
                // CeeCalendarComponent,
                // CeeNumberComponent,
                // CustomTooltipDirective,
                // CeeTickerComponent,
                // CeeCameraComponent,
                // ShowPasswordDirective,
                // ResizeColumnDirective,
                // SortableHeaderDirective
                ],
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    HttpClientModule,
                    BrowserAnimationsModule,
                    NgIdleKeepaliveModule.forRoot(),
                    UiSwitchModule,
                    MaterialComponentModule,
                    MatChipsModule,
                    MatIconModule,
                    MatProgressBarModule,
                    NgbModule,
                    NgbTimepickerModule,
                    // AgmCoreModule.forRoot({
                    //     apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                    // }),
                    NgChartsModule.forRoot(),
                    Ng2GoogleChartsModule,
                    NgxMaterialTimepickerModule,
                    SocketIoModule.forRoot(config),
                    OAuthModule.forRoot(),
                    WebcamModule,
                    NgxBarcodeScannerModule,
                    NgxImageZoomModule,
                    ToastrModule.forRoot({
                        enableHtml: true,
                        easing: 'ease-in-out-elastic',
                        easeTime: 300
                    }),
                    CdkMenuModule,
                    NgxMatTimepickerModule,
                    NgxMatNativeDateModule,
                    NgxMatDatetimePickerModule,
                    YouTubePlayerModule,
                    MatInputModule,
                    MatFormFieldModule,
                    BrowserModule,
                    GoogleMapsModule,
                    NgxDaterangepickerBootstrapModule.forRoot(),
                    QuillModule.forRoot({
                        modules: {
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
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
                                ['link', 'image'] // CRITICAL: No video in global config
                            ]
                        }
                    })
                    // TooltipModule
                ],
                providers: [
                    Title,
                    WfeStepLoaderService,
                    UserDataHandlerService,
                    CeeApiService,
                    CeeLogHandlerService,
                    DynamicComponentHandlerService,
                    DatePipe,
                    ThemeService,
                    NgxDaterangepickerLocaleService,
                    NgxBarcodeScannerService,
                    WebworkerService,
                    { provide: 'googleMapsApiKey', useValue: 'AIzaSyD9HeCFeg5EUx5CKvXGTdwJANhESMVTIWI' },
                    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
                    provideAnimations(),
                    provideToastr(), // Toastr providers
                ],
                exports: [
                // StepRendererComponent,
                // DynamicRendererComponent,
                // ModalRendererComponent,
                // SnackbarRendererComponent,
                // AlertModalComponent,
                // BlockRendererComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgCeeCoreModule, { imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule, i1.NgIdleKeepaliveModule, UiSwitchModule,
        MaterialComponentModule,
        MatChipsModule,
        MatIconModule,
        MatProgressBarModule,
        NgbModule,
        NgbTimepickerModule, i2.NgChartsModule, Ng2GoogleChartsModule,
        NgxMaterialTimepickerModule, i3.SocketIoModule, i4.OAuthModule, WebcamModule,
        NgxBarcodeScannerModule,
        NgxImageZoomModule, i5.ToastrModule, CdkMenuModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        NgxMatDatetimePickerModule,
        YouTubePlayerModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserModule,
        GoogleMapsModule, i6.NgxDaterangepickerBootstrapModule, i7.QuillModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2VlLWNvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL25nLWNlZS1jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakU7OztvREFHb0Q7QUFFcEQsMkZBQTJGO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0Is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b0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQiw4QkFBOEI7b0JBQzlCLFFBQVE7b0JBQ1IsWUFBWTtvQkFDWiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUseUNBQXlDLEVBQUU7b0JBQ3BGLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBQztvQkFDdEUsaUJBQWlCLEVBQUU7b0JBQ25CLGFBQWEsRUFBRSxFQUFFLG1CQUFtQjtpQkFDdkM7Z0JBQ0QsT0FBTyxFQUFFO2dCQUNMLHlCQUF5QjtnQkFDekIsNEJBQTRCO2dCQUM1QiwwQkFBMEI7Z0JBQzFCLDZCQUE2QjtnQkFDN0IsdUJBQXVCO2dCQUN2Qix5QkFBeUI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDOzt3RkFFWSxlQUFlLGNBekZwQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsdUJBQXVCLDRCQUV2QixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLFNBQVM7UUFDVCxtQkFBbUIscUJBS25CLHFCQUFxQjtRQUNyQiwyQkFBMkIscUNBRzNCLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCLG1CQU1sQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgVWlTd2l0Y2hNb2R1bGUgfSBmcm9tICduZ3gtdWktc3dpdGNoJztcclxuaW1wb3J0IHsgTmdJZGxlS2VlcGFsaXZlTW9kdWxlIH0gZnJvbSAnQG5nLWlkbGUva2VlcGFsaXZlJztcclxuXHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlTG9nSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NlZS1sb2ctaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudEhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9keW5hbWljLWNvbXBvbmVudC1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2Vid29ya2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvd2ViLXdvcmtlci1zZXJ2aWNlJztcclxuLypcclxuZXhwb3J0ICogZnJvbSAnLi9iZWFyZXItdG9rZW4tc2VydmljZS5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnQtcmVzcG9uc2UtaGFuZGxlci5zZXJ2aWNlJzsgKi9cclxuXHJcbi8vIGltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWMtcmVuZGVyZXIvZHluYW1pYy1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGVwUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RlcC1yZW5kZXJlci9zdGVwLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwtcmVuZGVyZXIvbW9kYWwtcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC1tb2RhbC9hbGVydC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbG9ja1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jsb2NrLXJlbmRlcmVyL2Jsb2NrLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IFNlY3Rpb25SZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWN0aW9uLXJlbmRlcmVyL3NlY3Rpb24tcmVuZGVyZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgVmlld1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3ZpZXctcmVuZGVyZXIvdmlldy1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBCcmVhZGNydW1iUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi1yZW5kZXJlci9icmVhZGNydW1iLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IEJyZWFkY3J1bWJDZWxsUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi1jZWxsLXJlbmRlcmVyL2JyZWFkY3J1bWItY2VsbC1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBSZXBlYXRhYmxlQmxvY2tSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXBlYXRhYmxlLWJsb2NrLXJlbmRlcmVyL3JlcGVhdGFibGUtYmxvY2stcmVuZGVyZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgTG9hZGluZ1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmctcmVuZGVyZXIvbG9hZGluZy1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBBY2NvcmRpb25SZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hY2NvcmRpb24tcmVuZGVyZXIvYWNjb3JkaW9uLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IExpc3RSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0LXJlbmRlcmVyL2xpc3QtcmVuZGVyZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgTGlzdFJlbmRlcmVyQ29tcG9uZW50VjIgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci12Mi9saXN0LXJlbmRlcmVyLXYyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IFRyZWVSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLXJlbmRlcmVyL3RyZWUtcmVuZGVyZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgVGFiUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFiLXJlbmRlcmVyL3RhYi1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBHZW5lcmljQmxvY2tSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmljLWJsb2NrLXJlbmRlcmVyL2dlbmVyaWMtYmxvY2stcmVuZGVyZXIuY29tcG9uZW50JztcclxuXHJcbi8vIGltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1iYXNlLWNsYXNzJztcclxuLy8gaW1wb3J0IHsgQ2VlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1idXR0b24vY2VlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtY2hlY2tib3gvY2VlLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS10YWJsZS9jZWUtdGFibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlVGFibGVWMkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jZWUtdGFibGUtdjIvY2VlLXRhYmxlLXYyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZURhdGVDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWRhdGUvY2VlLWRhdGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWltYWdlL2NlZS1pbWFnZS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtbGFiZWwvY2VlLWxhYmVsLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRhZ0NvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFnL2NlZS10YWcuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlTGlua0NvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtbGluay9jZWUtbGluay5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdmlkZW8vY2VlLXZpZGVvLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXJhZGlvL2NlZS1yYWRpby5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVTaWduYXR1cmVDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXNpZ25hdHVyZS9jZWUtc2lnbmF0dXJlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtc2xpZGVyL2NlZS1zbGlkZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1zd2l0Y2gvY2VlLXN3aXRjaC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGFyZWEvY2VlLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRleHRmaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGZpZWxkL2NlZS10ZXh0ZmllbGQuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlQ2FwdGNoYUNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtY2FwdGNoYS9jZWUtY2FwdGNoYS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVBdXRvQ29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF1dG8tY29tcGxldGUvY2VlLWF1dG8tY29tcGxldGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdGltZS1waWNrZXIvY2VlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdG9nZ2xlLWJ1dHRvbi9jZWUtdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51L2NlZS1tZW51LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZU1lbnVjb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51Y29udGV4dC9jZWUtbWVudWNvbnRleHQuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1tYXAvY2VlLW1hcC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVDaGFydENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtY2hhcnQvY2VlLWNoYXJ0LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NoYXJ0c01vZHVsZSwgVGhlbWVTZXJ2aWNlLCBOZ0NoYXJ0c0NvbmZpZ3VyYXRpb24gfSBmcm9tICduZzItY2hhcnRzJztcclxuaW1wb3J0IHsgTmcyR29vZ2xlQ2hhcnRzTW9kdWxlIH0gZnJvbSAnbmcyLWdvb2dsZS1jaGFydHMnO1xyXG5cclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLWNvbXBvbmVudC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUsIE5nYlRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7IENlZUNhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1jYXJvdXNlbC9jZWUtY2Fyb3VzZWwuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmVzcy1iYXItcmVuZGVyZXIvcHJvZ3Jlc3MtYmFyLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUF0dGFjaG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgRG9tU2FuaXRpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9kb20tc2FuaXRpemUucGlwZSc7XHJcbi8vIGltcG9ydCB7IENlZVRpbWVTbG90c0NvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdGltZS1zbG90cy9jZWUtdGltZS1zbG90cy5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtY2FsZW5kYXIvY2VlLWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtbnVtYmVyL2NlZS1udW1iZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlUGhvbmVOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXBob25lLW51bWJlci9jZWUtcGhvbmUtbnVtYmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IEN1c3RvbVRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXBwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIGFzIE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIGFzIE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgeyBTb2NrZXRJb01vZHVsZSwgU29ja2V0SW9Db25maWcsIFNvY2tldCB9IGZyb20gJ25neC1zb2NrZXQtaW8nO1xyXG5pbXBvcnQgeyBTbmFja2JhclJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NuYWNrYmFyLXJlbmRlcmVyL3NuYWNrYmFyLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdGlja2VyL2NlZS10aWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT0F1dGhNb2R1bGUgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuLy8gaW1wb3J0IHsgQ2VlQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1jYW1lcmEvY2VlLWNhbWVyYS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1dlYmNhbU1vZHVsZX0gZnJvbSAnbmd4LXdlYmNhbSc7XHJcbmltcG9ydCB7Tmd4QmFyY29kZVNjYW5uZXJNb2R1bGV9IGZyb20gJ0BlaXNiZXJnLWxhYnMvbmd4LWJhcmNvZGUtc2Nhbm5lcic7XHJcbmltcG9ydCB7Tmd4QmFyY29kZVNjYW5uZXJTZXJ2aWNlfSBmcm9tIFwiQGVpc2JlcmctbGFicy9uZ3gtYmFyY29kZS1zY2FubmVyXCI7XHJcbmltcG9ydCB7IE5neEltYWdlWm9vbU1vZHVsZSB9IGZyb20gJ25neC1pbWFnZS16b29tJztcclxuLy8gaW1wb3J0IHsgU2hvd1Bhc3N3b3JkRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9zaG93UGFzc3dvcmQvc2hvd1Bhc3N3b3JkLmRpcmVjdGl2ZVwiXHJcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gJ25neC10b2FzdHInO1xyXG5pbXBvcnQge0Nka01lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcclxuaW1wb3J0IHsgTmd4TWF0RGF0ZXRpbWVQaWNrZXJNb2R1bGUsIE5neE1hdE5hdGl2ZURhdGVNb2R1bGUsIE5neE1hdFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci1tYXRlcmlhbC1jb21wb25lbnRzL2RhdGV0aW1lLXBpY2tlcic7XHJcbi8vIGltcG9ydCB7UmVzaXplQ29sdW1uRGlyZWN0aXZlfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlL2NlZS10YWJsZS1yZXNpemUtY29sdW1uLmRpcmVjdGl2ZSc7XHJcbi8vIGltcG9ydCB7U29ydGFibGVIZWFkZXJEaXJlY3RpdmV9IGZyb20gJy4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFibGUvY2VlLXRhYmxlLXNvcnRpbmcuZGlyZWN0aXZlJztcclxuLy8gaW1wb3J0IHtEZWJvdW5jZUNsaWNrRGlyZWN0aXZlfSBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWJ1dHRvbi9jZWUtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFlvdVR1YmVQbGF5ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci95b3V0dWJlLXBsYXllcic7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEdvb2dsZU1hcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9nb29nbGUtbWFwcyc7XHJcbmltcG9ydCB7XHJcbiAgICBOZ3hEYXRlcmFuZ2VwaWNrZXJCb290c3RyYXBNb2R1bGUsXHJcbiAgICBOZ3hEYXRlcmFuZ2VwaWNrZXJMb2NhbGVTZXJ2aWNlLFxyXG59IGZyb20gJ25neC1kYXRlcmFuZ2VwaWNrZXItYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgcHJvdmlkZUFuaW1hdGlvbnMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBwcm92aWRlVG9hc3RyIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcbmltcG9ydCB7IEltYWdlQ3JvcE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZC1jb21wb25lbnRzL2NlZS1wcm9maWxlLWltYWdlL2ltYWdlLWNyb3AtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcmF3ZXItcmVuZGVyZXIvZHJhd2VyLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFF1aWxsTW9kdWxlIH0gZnJvbSAnbmd4LXF1aWxsJztcclxuLy8gaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuLy8gQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbi8vIGV4cG9ydCBjbGFzcyBTb2NrZXRPbmUgZXh0ZW5kcyBTb2NrZXQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgICBzdXBlcih7XHJcbi8vICAgICAgICAgdXJsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAwID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddWzBdWydkYXRhU29ja2V0VXJsJ10gOiAnJyxcclxuLy8gICAgICAgICBvcHRpb25zOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAwID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddWzBdWydkYXRhU29ja2V0T3B0aW9ucyddIDogeyB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddLCBwYXRoOicvJyB9XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbi8vIGV4cG9ydCBjbGFzcyBTb2NrZXRUd28gZXh0ZW5kcyBTb2NrZXQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgICBzdXBlcih7XHJcbi8vICAgICAgICAgdXJsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAxID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddWzFdWydkYXRhU29ja2V0VXJsJ10gOiAnJyxcclxuLy8gICAgICAgICBvcHRpb25zOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAxID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddWzFdWydkYXRhU29ja2V0T3B0aW9ucyddIDogeyB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddLCBwYXRoOicvJyB9XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbi8vIGV4cG9ydCBjbGFzcyBTb2NrZXRUaHJlZSBleHRlbmRzIFNvY2tldCB7XHJcbi8vICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICAgIHN1cGVyKHtcclxuLy8gICAgICAgICB1cmw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10gJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddLmxlbmd0aCA+IDIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ11bMl1bJ2RhdGFTb2NrZXRVcmwnXSA6ICcnLFxyXG4vLyAgICAgICAgIG9wdGlvbnM6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10gJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddLmxlbmd0aCA+IDIgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ11bMl1bJ2RhdGFTb2NrZXRPcHRpb25zJ10gOiB7IHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J10sIHBhdGg6Jy8nIH1cclxuLy8gICAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuLy8gZXhwb3J0IGNsYXNzIFNvY2tldEZvdXIgZXh0ZW5kcyBTb2NrZXQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgICBzdXBlcih7XHJcbi8vICAgICAgICAgdXJsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAzID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddWzNdWydkYXRhU29ja2V0VXJsJ10gOiAnJyxcclxuLy8gICAgICAgICBvcHRpb25zOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAzID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddWzNdWydkYXRhU29ja2V0T3B0aW9ucyddIDogeyB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddLCBwYXRoOicvJyB9XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbi8vIGV4cG9ydCBjbGFzcyBTb2NrZXRGaXZlIGV4dGVuZHMgU29ja2V0IHtcclxuLy8gICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgICAgc3VwZXIoe1xyXG4vLyAgICAgICAgIHVybDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10ubGVuZ3RoID4gNCA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXVs0XVsnZGF0YVNvY2tldFVybCddIDogJycsXHJcbi8vICAgICAgICAgb3B0aW9uczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10ubGVuZ3RoID4gNCA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXVs0XVsnZGF0YVNvY2tldE9wdGlvbnMnXSA6IHsgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSwgcGF0aDonLycgfVxyXG4vLyAgICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGNvbmZpZzogU29ja2V0SW9Db25maWcgPSB7XHJcbiAgICB1cmw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10gJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddLmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ11bMF1bJ2RhdGFTb2NrZXRVcmwnXSA6ICcnLFxyXG4gICAgb3B0aW9uczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10ubGVuZ3RoID4gMCA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXVswXVsnZGF0YVNvY2tldE9wdGlvbnMnXSA6IHsgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSwgcGF0aDogJy8nLCBhdXRvQ29ubmVjdDpmYWxzZSB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gICAgQWxlcnRNb2RhbENvbXBvbmVudCxcclxuICAgIEltYWdlQ3JvcE1vZGFsQ29tcG9uZW50LFxyXG4gICAgQmxvY2tSZW5kZXJlckNvbXBvbmVudCxcclxuICAgIER5bmFtaWNSZW5kZXJlckNvbXBvbmVudCxcclxuICAgIC8vIER5bmFtaWNGb3JtQ29tcG9uZW50LFxyXG4gICAgTW9kYWxSZW5kZXJlckNvbXBvbmVudCxcclxuICAgIFNuYWNrYmFyUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICBTdGVwUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICBEcmF3ZXJDb21wb25lbnRcclxufTtcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIC8vIFN0ZXBSZW5kZXJlckNvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlRGF0ZUNvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVJbWFnZUNvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVMYWJlbENvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVUYWdDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZVJhZGlvQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZVNpZ25hdHVyZUNvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVTbGlkZXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlVGV4dGZpZWxkQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZUNhcHRjaGFDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlQXV0b0NvbXBsZXRlQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZVRleHRhcmVhQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZVRvZ2dsZUJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVTd2l0Y2hDb21wb25lbnQsXHJcbiAgICAgICAgLy8gU2VjdGlvblJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIEJsb2NrUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlTGlua0NvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVWaWRlb0NvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZVBob25lTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIER5bmFtaWNSZW5kZXJlckNvbXBvbmVudCxcclxuICAgICAgICAvLyBEeW5hbWljRm9ybUNvbXBvbmVudCxcclxuICAgICAgICAvLyBWaWV3UmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlVGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQnJlYWRjcnVtYlJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFJlcGVhdGFibGVCbG9ja1JlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIC8vIExvYWRpbmdSZW5kZXJlckNvbXBvbmVudCxcclxuICAgICAgICAvLyBMaXN0UmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gVHJlZVJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFRhYlJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIEFjY29yZGlvblJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIE1vZGFsUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gU25hY2tiYXJSZW5kZXJlckNvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZU1lbnVjb250ZXh0Q29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZU1hcENvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVDaGFydENvbXBvbmVudCxcclxuICAgICAgICAvLyBBbGVydE1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIEdlbmVyaWNCbG9ja1JlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIEJyZWFkY3J1bWJDZWxsUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlQ2Fyb3VzZWxDb21wb25lbnQsXHJcbiAgICAgICAgLy8gUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCxcclxuICAgICAgICAvLyBDZWVBdHRhY2htZW50c0NvbXBvbmVudCxcclxuICAgICAgICBcclxuICAgICAgICAvLyBDZWVUaW1lU2xvdHNDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlQ2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQ2VlTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIEN1c3RvbVRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICAgICAgLy8gQ2VlVGlja2VyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIENlZUNhbWVyYUNvbXBvbmVudCxcclxuICAgICAgICAvLyBTaG93UGFzc3dvcmREaXJlY3RpdmUsXHJcbiAgICAgICAgLy8gUmVzaXplQ29sdW1uRGlyZWN0aXZlLFxyXG4gICAgICAgIC8vIFNvcnRhYmxlSGVhZGVyRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICAgICAgTmdJZGxlS2VlcGFsaXZlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBVaVN3aXRjaE1vZHVsZSxcclxuICAgICAgICBNYXRlcmlhbENvbXBvbmVudE1vZHVsZSxcclxuICAgICAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgICAgIE5nYk1vZHVsZSxcclxuICAgICAgICBOZ2JUaW1lcGlja2VyTW9kdWxlLFxyXG4gICAgICAgIC8vIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgICAgLy8gICAgIGFwaUtleTogJ1lPVVJfR09PR0xFX01BUFNfQVBJX0tFWSdcclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICBOZ0NoYXJ0c01vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgTmcyR29vZ2xlQ2hhcnRzTW9kdWxlLFxyXG4gICAgICAgIE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcclxuICAgICAgICBTb2NrZXRJb01vZHVsZS5mb3JSb290KGNvbmZpZyksXHJcbiAgICAgICAgT0F1dGhNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIFdlYmNhbU1vZHVsZSxcclxuICAgICAgICBOZ3hCYXJjb2RlU2Nhbm5lck1vZHVsZSxcclxuICAgICAgICBOZ3hJbWFnZVpvb21Nb2R1bGUsXHJcbiAgICAgICAgVG9hc3RyTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICBlbmFibGVIdG1sOiB0cnVlLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLWluLW91dC1lbGFzdGljJyxcclxuICAgICAgICAgICAgZWFzZVRpbWU6IDMwMFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIENka01lbnVNb2R1bGUsXHJcbiAgICAgICAgTmd4TWF0VGltZXBpY2tlck1vZHVsZSxcclxuICAgICAgICBOZ3hNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgICAgIE5neE1hdERhdGV0aW1lUGlja2VyTW9kdWxlLFxyXG4gICAgICAgIFlvdVR1YmVQbGF5ZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgR29vZ2xlTWFwc01vZHVsZSxcclxuICAgICAgICBOZ3hEYXRlcmFuZ2VwaWNrZXJCb290c3RyYXBNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIFF1aWxsTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgWydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snXSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdsaXN0JzogJ29yZGVyZWQnfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdzY3JpcHQnOiAnc3ViJ30sIHsgJ3NjcmlwdCc6ICdzdXBlcicgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2luZGVudCc6ICctMSd9LCB7ICdpbmRlbnQnOiAnKzEnIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXSB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2ZvbnQnOiBbXSB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnYWxpZ24nOiBbXSB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbJ2NsZWFuJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgWydsaW5rJywgJ2ltYWdlJ10gLy8gQ1JJVElDQUw6IE5vIHZpZGVvIGluIGdsb2JhbCBjb25maWdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gVG9vbHRpcE1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRpdGxlLFxyXG4gICAgICAgIFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBDZWVMb2dIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBEeW5hbWljQ29tcG9uZW50SGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgRGF0ZVBpcGUsXHJcbiAgICAgICAgVGhlbWVTZXJ2aWNlLFxyXG4gICAgICAgIE5neERhdGVyYW5nZXBpY2tlckxvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgTmd4QmFyY29kZVNjYW5uZXJTZXJ2aWNlLFxyXG4gICAgICAgIFdlYndvcmtlclNlcnZpY2UsXHJcbiAgICAgICAgeyBwcm92aWRlOiAnZ29vZ2xlTWFwc0FwaUtleScsIHVzZVZhbHVlOiAnQUl6YVN5RDlIZUNGZWc1RVV4NUNLdlhHVGR3SkFOaEVTTVZUSVdJJyB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogTmdDaGFydHNDb25maWd1cmF0aW9uLCB1c2VWYWx1ZTogeyBnZW5lcmF0ZUNvbG9yczogZmFsc2UgfX0sXHJcbiAgICAgICAgcHJvdmlkZUFuaW1hdGlvbnMoKSwgLy8gcmVxdWlyZWQgYW5pbWF0aW9ucyBwcm92aWRlcnNcclxuICAgICAgICBwcm92aWRlVG9hc3RyKCksIC8vIFRvYXN0ciBwcm92aWRlcnNcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgLy8gU3RlcFJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIER5bmFtaWNSZW5kZXJlckNvbXBvbmVudCxcclxuICAgICAgICAvLyBNb2RhbFJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIFNuYWNrYmFyUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICAgICAgLy8gQWxlcnRNb2RhbENvbXBvbmVudCxcclxuICAgICAgICAvLyBCbG9ja1JlbmRlcmVyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmdDZWVDb3JlTW9kdWxlIHsgfVxyXG4iXX0=