import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./user-data-handler.service";
export class BearerTokenServiceService {
    storageService;
    tokenObj = {};
    constructor(storageService) {
        this.storageService = storageService;
    }
    intercept(request, next) {
        this.tokenObj['bearerToken'] = this.storageService.getFieldData('access_token'.toLowerCase());
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.tokenObj['bearerToken']
            }
        });
        return next.handle(request);
    }
    static ɵfac = function BearerTokenServiceService_Factory(t) { return new (t || BearerTokenServiceService)(i0.ɵɵinject(i1.UserDataHandlerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BearerTokenServiceService, factory: BearerTokenServiceService.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BearerTokenServiceService, [{
        type: Injectable
    }], () => [{ type: i1.UserDataHandlerService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhcmVyLXRva2VuLXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9zZXJ2aWNlcy9iZWFyZXItdG9rZW4tc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQU8seUJBQXlCO0lBR2hCO0lBRHBCLFFBQVEsR0FBVyxFQUFFLENBQUE7SUFDckIsWUFBb0IsY0FBc0M7UUFBdEMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO0lBQUksQ0FBQztJQUUvRCxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO2FBQ3hEO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7bUZBYlUseUJBQXlCO2dFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCOztpRkFBekIseUJBQXlCO2NBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCZWFyZXJUb2tlblNlcnZpY2VTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgdG9rZW5PYmo6IE9iamVjdCA9IHt9XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSkgeyB9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIHRoaXMudG9rZW5PYmpbJ2JlYXJlclRva2VuJ10gPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldEZpZWxkRGF0YSgnYWNjZXNzX3Rva2VuJy50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdGhpcy50b2tlbk9ialsnYmVhcmVyVG9rZW4nXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==