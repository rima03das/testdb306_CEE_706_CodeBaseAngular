import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./shared-events-service.service";
export class UserDataHandlerService {
    sharedEventsService;
    constructor(sharedEventsService) {
        this.sharedEventsService = sharedEventsService;
    }
    mandatoryData = [];
    setOrUpdateFieldData(apiKey, value) {
        window.sessionStorage.setItem(apiKey, value);
        // this.sharedEventsService.emitOnDataSetOrUpdated.emit({apiKey, value});
    }
    getFieldData(apiKey) {
        if (window.sessionStorage.getItem(apiKey)) {
            return window.sessionStorage.getItem(apiKey);
        }
        else {
            return '';
        }
    }
    removeSessionValues(apiKeys) {
        for (const key of apiKeys) {
            window.sessionStorage.removeItem(key);
        }
    }
    removeSessionValue(apiKey) {
        window.sessionStorage.removeItem(apiKey);
    }
    clearSessionValue() {
        window.sessionStorage.clear();
    }
    static ɵfac = function UserDataHandlerService_Factory(t) { return new (t || UserDataHandlerService)(i0.ɵɵinject(i1.SharedEventsServiceService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserDataHandlerService, factory: UserDataHandlerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDataHandlerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.SharedEventsServiceService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kYXRhLWhhbmRsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQU8sc0JBQXNCO0lBRWI7SUFBcEIsWUFBb0IsbUJBQStDO1FBQS9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7SUFBSSxDQUFDO0lBRXhFLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFFbkIsb0JBQW9CLENBQUMsTUFBYyxFQUFFLEtBQVU7UUFDN0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLHlFQUF5RTtJQUMzRSxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDekIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLE9BQWlCO1FBQ25DLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztnRkEvQlUsc0JBQXNCO2dFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZyQixNQUFNOztpRkFFUCxzQkFBc0I7Y0FIbEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckRhdGFIYW5kbGVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UpIHsgfVxyXG5cclxuICBtYW5kYXRvcnlEYXRhID0gW107XHJcblxyXG4gIHNldE9yVXBkYXRlRmllbGREYXRhKGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShhcGlLZXksIHZhbHVlKTtcclxuICAgIC8vIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLmVtaXQoe2FwaUtleSwgdmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGdldEZpZWxkRGF0YShhcGlLZXk6IHN0cmluZykge1xyXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGFwaUtleSkpIHtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGFwaUtleSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZXNzaW9uVmFsdWVzKGFwaUtleXM6IHN0cmluZ1tdKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZXNzaW9uVmFsdWUoYXBpS2V5OiBzdHJpbmcpIHtcclxuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGFwaUtleSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclNlc3Npb25WYWx1ZSgpIHtcclxuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gIH1cclxufVxyXG4iXX0=