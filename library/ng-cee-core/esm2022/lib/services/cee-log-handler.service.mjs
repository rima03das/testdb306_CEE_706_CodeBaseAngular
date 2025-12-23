import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Log } from '../models/log';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./cee-init-service.service";
export class CeeLogHandlerService {
    httpClient;
    ceeInitService;
    // [DateTime] [App ID]  [Platform]  [Log Type] [Module Name] [Version]  [Tag] [Data]
    baseURL = '';
    token = '';
    applicationId = '';
    platform = 'web';
    applicationName = 'wfeAngular8';
    logData = [];
    environment = { version: 1.0 };
    constructor(httpClient, ceeInitService) {
        this.httpClient = httpClient;
        this.ceeInitService = ceeInitService;
        this.ceeInitService.initConfigurationJSON().then(res => {
            const data = JSON.parse(JSON.stringify(res));
            this.baseURL = data.logBaseURL;
            this.token = data.logToken;
            this.applicationId = data.applicationId;
        });
    }
    e(tag, data) {
        const logData = '[' + new Date() + '] [' + this.applicationId + '] [Angular] [ERROR] [CEE Core Library] ['
            + this.environment.version + '] [' + tag + '] [' + data + ']';
        this.uploadLogData(logData);
        console.error(tag, data);
    }
    i(tag, data) {
        const logData = '[' + new Date() + '] [' + this.applicationId + '] [Angular] [INFO] [CEE Core Library] ['
            + this.environment.version + '] [' + tag + '] [' + data + ']';
        this.uploadLogData(logData);
        console.info(tag, data);
    }
    w(tag, data) {
        const logData = '[' + new Date() + '] [' + this.applicationId + '] [Angular] [WARNING] [CEE Core Library] ['
            + this.environment.version + '] [' + tag + '] [' + data + ']';
        this.uploadLogData(logData);
        console.warn(tag, data);
    }
    d(tag, data) {
        const logData = '[' + new Date() + '] [' + this.applicationId + '] [Angular] [DEBUG] [CEE Core Library] ['
            + this.environment.version + '] [' + tag + '] [' + data + ']';
        this.uploadLogData(logData);
        console.debug(tag, data);
    }
    log(tag, data) {
        const logData = '[' + new Date() + '] [' + this.applicationId + '] [Angular] [LOG] [CEE Core Library] ['
            + this.environment.version + '] [' + tag + '] [' + data + ']';
        this.uploadLogData(logData);
        // console.log(tag, data);
    }
    uploadLogData(logData) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'token': this.token
            })
        };
        const log = new Log();
        log.platform = this.platform;
        log.applicationName = this.applicationName;
        log.message.push(logData);
        this.httpClient.post(`${this.baseURL}/logapplication/application`, log, httpOptions).subscribe((res) => {
            //console.log(res);
        });
    }
    static ɵfac = function CeeLogHandlerService_Factory(t) { return new (t || CeeLogHandlerService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CeeInitServiceService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CeeLogHandlerService, factory: CeeLogHandlerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeLogHandlerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.CeeInitServiceService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWxvZy1oYW5kbGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvc2VydmljZXMvY2VlLWxvZy1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNcEMsTUFBTSxPQUFPLG9CQUFvQjtJQVdaO0lBQWdDO0lBVHBELG9GQUFvRjtJQUM3RSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDbEIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixlQUFlLEdBQUcsYUFBYSxDQUFDO0lBQ2hDLE9BQU8sR0FBVSxFQUFFLENBQUM7SUFDcEIsV0FBVyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRXZDLFlBQW9CLFVBQXNCLEVBQVUsY0FBcUM7UUFBckUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUN4RixJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFH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UUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sNkJBQTZCLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzNHLG1CQUFtQjtRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7OEVBckVXLG9CQUFvQjtnRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGcEIsTUFBTTs7aUZBRU4sb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuLi9tb2RlbHMvbG9nJztcclxuaW1wb3J0IHsgQ2VlSW5pdFNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi9jZWUtaW5pdC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlTG9nSGFuZGxlclNlcnZpY2Uge1xyXG5cclxuXHQvLyBbRGF0ZVRpbWVdIFtBcHAgSURdICBbUGxhdGZvcm1dICBbTG9nIFR5cGVdIFtNb2R1bGUgTmFtZV0gW1ZlcnNpb25dICBbVGFnXSBbRGF0YV1cclxuXHRwdWJsaWMgYmFzZVVSTCA9ICcnO1xyXG5cdHB1YmxpYyB0b2tlbiA9ICcnO1xyXG5cdHB1YmxpYyBhcHBsaWNhdGlvbklkID0gJyc7XHJcblx0cHJpdmF0ZSBwbGF0Zm9ybSA9ICd3ZWInO1xyXG5cdHByaXZhdGUgYXBwbGljYXRpb25OYW1lID0gJ3dmZUFuZ3VsYXI4JztcclxuXHRwcml2YXRlIGxvZ0RhdGE6IGFueVtdID0gW107XHJcblx0cHJpdmF0ZSBlbnZpcm9ubWVudCA9IHsgdmVyc2lvbjogMS4wIH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCwgcHJpdmF0ZSBjZWVJbml0U2VydmljZTogQ2VlSW5pdFNlcnZpY2VTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmNlZUluaXRTZXJ2aWNlLmluaXRDb25maWd1cmF0aW9uSlNPTigpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdHRoaXMuYmFzZVVSTCA9IGRhdGEubG9nQmFzZVVSTDtcclxuXHRcdFx0dGhpcy50b2tlbiA9IGRhdGEubG9nVG9rZW47XHJcblx0XHRcdHRoaXMuYXBwbGljYXRpb25JZCA9IGRhdGEuYXBwbGljYXRpb25JZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZSh0YWc6IGFueSwgZGF0YTogYW55KSB7XHJcblx0XHRjb25zdCBsb2dEYXRhID0gJ1snICsgbmV3IERhdGUoKSArICddIFsnICsgdGhpcy5hcHBsaWNhdGlvbklkICsgJ10gW0FuZ3VsYXJdIFtFUlJPUl0gW0NFRSBDb3JlIExpYnJhcnldIFsnXHJcblx0XHRcdCsgdGhpcy5lbnZpcm9ubWVudC52ZXJzaW9uICsgJ10gWycgKyB0YWcgKyAnXSBbJyArIGRhdGEgKyAnXSc7XHJcblx0XHR0aGlzLnVwbG9hZExvZ0RhdGEobG9nRGF0YSk7XHJcblx0XHRjb25zb2xlLmVycm9yKHRhZywgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRpKHRhZzogYW55LCBkYXRhOiBhbnkpIHtcclxuXHRcdGNvbnN0IGxvZ0RhdGEgPSAnWycgKyBuZXcgRGF0ZSgpICsgJ10gWycgKyB0aGlzLmFwcGxpY2F0aW9uSWQgKyAnXSBbQW5ndWxhcl0gW0lORk9dIFtDRUUgQ29yZSBMaWJyYXJ5XSBbJ1xyXG5cdFx0XHQrIHRoaXMuZW52aXJvbm1lbnQudmVyc2lvbiArICddIFsnICsgdGFnICsgJ10gWycgKyBkYXRhICsgJ10nO1xyXG5cdFx0dGhpcy51cGxvYWRMb2dEYXRhKGxvZ0RhdGEpO1xyXG5cdFx0Y29uc29sZS5pbmZvKHRhZywgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR3KHRhZzogYW55LCBkYXRhOiBhbnkpIHtcclxuXHRcdGNvbnN0IGxvZ0RhdGEgPSAnWycgKyBuZXcgRGF0ZSgpICsgJ10gWycgKyB0aGlzLmFwcGxpY2F0aW9uSWQgKyAnXSBbQW5ndWxhcl0gW1dBUk5JTkddIFtDRUUgQ29yZSBMaWJyYXJ5XSBbJ1xyXG5cdFx0XHQrIHRoaXMuZW52aXJvbm1lbnQudmVyc2lvbiArICddIFsnICsgdGFnICsgJ10gWycgKyBkYXRhICsgJ10nO1xyXG5cdFx0dGhpcy51cGxvYWRMb2dEYXRhKGxvZ0RhdGEpO1xyXG5cdFx0Y29uc29sZS53YXJuKHRhZywgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRkKHRhZzogYW55LCBkYXRhOiBhbnkpIHtcclxuXHRcdGNvbnN0IGxvZ0RhdGEgPSAnWycgKyBuZXcgRGF0ZSgpICsgJ10gWycgKyB0aGlzLmFwcGxpY2F0aW9uSWQgKyAnXSBbQW5ndWxhcl0gW0RFQlVHXSBbQ0VFIENvcmUgTGlicmFyeV0gWydcclxuXHRcdFx0KyB0aGlzLmVudmlyb25tZW50LnZlcnNpb24gKyAnXSBbJyArIHRhZyArICddIFsnICsgZGF0YSArICddJztcclxuXHRcdHRoaXMudXBsb2FkTG9nRGF0YShsb2dEYXRhKTtcclxuXHRcdGNvbnNvbGUuZGVidWcodGFnLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdGxvZyh0YWc6IGFueSwgZGF0YTogYW55KSB7XHJcblx0XHRjb25zdCBsb2dEYXRhID0gJ1snICsgbmV3IERhdGUoKSArICddIFsnICsgdGhpcy5hcHBsaWNhdGlvbklkICsgJ10gW0FuZ3VsYXJdIFtMT0ddIFtDRUUgQ29yZSBMaWJyYXJ5XSBbJ1xyXG5cdFx0XHQrIHRoaXMuZW52aXJvbm1lbnQudmVyc2lvbiArICddIFsnICsgdGFnICsgJ10gWycgKyBkYXRhICsgJ10nO1xyXG5cdFx0dGhpcy51cGxvYWRMb2dEYXRhKGxvZ0RhdGEpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGFnLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdXBsb2FkTG9nRGF0YShsb2dEYXRhOiBhbnkpIHtcclxuXHRcdGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG5cdFx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0J3Rva2VuJzogdGhpcy50b2tlblxyXG5cdFx0XHR9KVxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGxvZyA9IG5ldyBMb2coKTtcclxuXHRcdGxvZy5wbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm07XHJcblx0XHRsb2cuYXBwbGljYXRpb25OYW1lID0gdGhpcy5hcHBsaWNhdGlvbk5hbWU7XHJcblx0XHRsb2cubWVzc2FnZS5wdXNoKGxvZ0RhdGEpO1xyXG5cdFx0dGhpcy5odHRwQ2xpZW50LnBvc3Q8TG9nPihgJHt0aGlzLmJhc2VVUkx9L2xvZ2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uYCwgbG9nLCBodHRwT3B0aW9ucykuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==