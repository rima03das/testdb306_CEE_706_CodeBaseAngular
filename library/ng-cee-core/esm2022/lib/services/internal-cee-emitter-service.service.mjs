import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * This file should contain all the internal emitters used
 * by the CEE Angular Product
 * Note: All the internal emitters except the following
 * need to be moved to this file
 * accordionStateEmitter
 * customEventVariableEmitter
 * customEventTargetSubscriber
 * eventResponseSubscriber
 * emitApiSuccessResponse
 * emitApiErrorResponse
 * customSectionLoaderEmitter
 */
export class CEEInternalEmitterService {
    fileUploadActionEmitter = new EventEmitter();
    languageChangeEmitter = new EventEmitter();
    static ɵfac = function CEEInternalEmitterService_Factory(t) { return new (t || CEEInternalEmitterService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CEEInternalEmitterService, factory: CEEInternalEmitterService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CEEInternalEmitterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNekQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxPQUFPLHlCQUF5QjtJQUNsQyx1QkFBdUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNoRSxxQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzttRkFGeEQseUJBQXlCO2dFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCLG1CQWhCdEIsTUFBTTs7aUZBZ0JULHlCQUF5QjtjQWpCckMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gYWxsIHRoZSBpbnRlcm5hbCBlbWl0dGVycyB1c2VkXHJcbiAqIGJ5IHRoZSBDRUUgQW5ndWxhciBQcm9kdWN0XHJcbiAqIE5vdGU6IEFsbCB0aGUgaW50ZXJuYWwgZW1pdHRlcnMgZXhjZXB0IHRoZSBmb2xsb3dpbmcgXHJcbiAqIG5lZWQgdG8gYmUgbW92ZWQgdG8gdGhpcyBmaWxlXHJcbiAqIGFjY29yZGlvblN0YXRlRW1pdHRlclxyXG4gKiBjdXN0b21FdmVudFZhcmlhYmxlRW1pdHRlclxyXG4gKiBjdXN0b21FdmVudFRhcmdldFN1YnNjcmliZXJcclxuICogZXZlbnRSZXNwb25zZVN1YnNjcmliZXJcclxuICogZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZVxyXG4gKiBlbWl0QXBpRXJyb3JSZXNwb25zZVxyXG4gKiBjdXN0b21TZWN0aW9uTG9hZGVyRW1pdHRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENFRUludGVybmFsRW1pdHRlclNlcnZpY2Uge1xyXG4gICAgZmlsZVVwbG9hZEFjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgbGFuZ3VhZ2VDaGFuZ2VFbWl0dGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxufSJdfQ==