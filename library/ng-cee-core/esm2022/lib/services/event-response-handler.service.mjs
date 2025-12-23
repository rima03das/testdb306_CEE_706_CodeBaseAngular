import { Injectable } from '@angular/core';
import ExternalRequestResponseUtil from '../utils/external-request-response.util';
import * as i0 from "@angular/core";
import * as i1 from "../models/app-data/app-data.service";
import * as i2 from "../models/api-data/api-data.service";
import * as i3 from "@angular/common/http";
import * as i4 from "./shared-events-service.service";
export class EventResponseHandlerService {
    appDataService;
    apiDataService;
    http;
    sharedEventsService;
    externalRequestResponse;
    constructor(appDataService, apiDataService, http, sharedEventsService) {
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.http = http;
        this.sharedEventsService = sharedEventsService;
        this.externalRequestResponse = new ExternalRequestResponseUtil(http, appDataService, apiDataService, sharedEventsService);
        this.sharedEventsService.oidcApiEmitter.subscribe((apiData) => {
            // this.externalRequestResponse.storeResponse(apiData);
            this.emitAPIDATA(apiData);
        });
    }
    emitAPIDATA = (response) => {
        if (this.hash_api_key) {
            try {
                const { formattedResponse } = this.externalRequestResponse.storeResponse(response);
                const result = formattedResponse;
                if (result.event_success) {
                    this.sharedEventsService.emitApiSuccessResponse.emit(result.response);
                }
                else {
                    this.sharedEventsService.emitApiErrorResponse.emit(result.response);
                }
            }
            catch (error) {
                console.error(`Error Occurred. ${error}`);
            }
        }
        else {
            if (response['event_sucess']) {
                if (response['listResult']) {
                    this.sharedEventsService.emitApiSuccessResponse.emit(response['listResult']);
                }
                else {
                    this.sharedEventsService.emitApiSuccessResponse.emit(response);
                }
            }
            else {
                this.sharedEventsService.emitApiErrorResponse.emit(response);
            }
        }
    };
    get hash_api_key() {
        return localStorage.getItem('hash_api_key') === 'true' ? true : false;
    }
    static ɵfac = function EventResponseHandlerService_Factory(t) { return new (t || EventResponseHandlerService)(i0.ɵɵinject(i1.AppDataService), i0.ɵɵinject(i2.ApiDataService), i0.ɵɵinject(i3.HttpClient), i0.ɵɵinject(i4.SharedEventsServiceService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EventResponseHandlerService, factory: EventResponseHandlerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventResponseHandlerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.AppDataService }, { type: i2.ApiDataService }, { type: i3.HttpClient }, { type: i4.SharedEventsServiceService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcmVzcG9uc2UtaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3NlcnZpY2VzL2V2ZW50LXJlc3BvbnNlLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sMkJBQWlELE1BQU0seUNBQXlDLENBQUM7Ozs7OztBQUt4RyxNQUFNLE9BQU8sMkJBQTJCO0lBR3hCO0lBQ0E7SUFDQTtJQUNBO0lBTEosdUJBQXVCLENBQThCO0lBQzdELFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsSUFBZ0IsRUFDaEIsbUJBQStDO1FBSC9DLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQ3ZELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLDJCQUEyQixDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFMUgsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMxRCx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSTtnQkFDQSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRixNQUFNLE1BQU0sR0FBcUIsaUJBQWlCLENBQUM7Z0JBQ25ELElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pFO3FCQUFNO29CQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN2RTthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUM3QztTQUNKO2FBQU07WUFDSCxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQ2hGO3FCQUFNO29CQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2xFO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNoRTtTQUNKO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUUsQ0FBQztxRkEzQ1EsMkJBQTJCO2dFQUEzQiwyQkFBMkIsV0FBM0IsMkJBQTJCLG1CQUZ4QixNQUFNOztpRkFFVCwyQkFBMkI7Y0FIdkMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCBFeHRlcm5hbFJlcXVlc3RSZXNwb25zZVV0aWwsIHsgRXh0ZXJuYWxSZXNwb25zZSB9IGZyb20gJy4uL3V0aWxzL2V4dGVybmFsLXJlcXVlc3QtcmVzcG9uc2UudXRpbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50UmVzcG9uc2VIYW5kbGVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGV4dGVybmFsUmVxdWVzdFJlc3BvbnNlOiBFeHRlcm5hbFJlcXVlc3RSZXNwb25zZVV0aWw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxSZXF1ZXN0UmVzcG9uc2UgPSBuZXcgRXh0ZXJuYWxSZXF1ZXN0UmVzcG9uc2VVdGlsKGh0dHAsIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSwgc2hhcmVkRXZlbnRzU2VydmljZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5vaWRjQXBpRW1pdHRlci5zdWJzY3JpYmUoKGFwaURhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5leHRlcm5hbFJlcXVlc3RSZXNwb25zZS5zdG9yZVJlc3BvbnNlKGFwaURhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRBUElEQVRBKGFwaURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXRBUElEQVRBID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzaF9hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGZvcm1hdHRlZFJlc3BvbnNlIH0gPSB0aGlzLmV4dGVybmFsUmVxdWVzdFJlc3BvbnNlLnN0b3JlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBFeHRlcm5hbFJlc3BvbnNlID0gZm9ybWF0dGVkUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmV2ZW50X3N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5lbWl0KHJlc3VsdC5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0QXBpRXJyb3JSZXNwb25zZS5lbWl0KHJlc3VsdC5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBPY2N1cnJlZC4gJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXZlbnRfc3VjZXNzJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVsnbGlzdFJlc3VsdCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2UuZW1pdChyZXNwb25zZVsnbGlzdFJlc3VsdCddKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2UuZW1pdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaUVycm9yUmVzcG9uc2UuZW1pdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc2hfYXBpX2tleSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc2hfYXBpX2tleScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19