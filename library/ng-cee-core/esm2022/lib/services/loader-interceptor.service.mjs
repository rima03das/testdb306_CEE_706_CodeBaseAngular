import { Injectable } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./loader-service";
import * as i2 from "./shared-events-service.service";
export class LoaderInterceptorService {
    loaderService;
    sharedEventsServices;
    requests = [];
    configJSONVersion;
    skipJSONLoader;
    constructor(loaderService, sharedEventsServices) {
        this.loaderService = loaderService;
        this.sharedEventsServices = sharedEventsServices;
        this.configJSONVersion = localStorage.getItem('CONFIG_JSON_VERSION');
        this.skipJSONLoader = localStorage.getItem('SKIP_JSON_LOADER');
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
            this.loaderService.loadingStack--;
        }
        if (this.loaderService.loadingStack > 0) {
            this.loaderService.isLoading.next(this.loaderService.loadingStack > 0);
        }
        else {
            setTimeout(() => {
                this.loaderService.isLoading.next(this.loaderService.loadingStack > 0);
            }, 2000);
        }
    }
    intercept(req, next) {
        const httpProgress = {
            uId: null,
            progress: null,
            complete: false
        };
        if (req.headers && typeof req.headers.get !== "undefined" && req.headers.get('uId')) {
            httpProgress.uId = req.headers.get('uId');
            if (httpProgress.uId) {
                req = req.clone({
                    headers: req.headers.delete('uId')
                });
            }
        }
        let skipValue;
        if (req.headers && typeof req.headers.get !== "undefined" && req.headers.get('skip')) {
            skipValue = req.headers.get('skip');
            if (skipValue) {
                req = req.clone({
                    headers: req.headers.delete('skip')
                });
            }
        }
        //skip loading for OIDC refresh_token
        if (req.body && typeof req.body.get !== "undefined" && req.body.get('grant_type') && req.body.get('grant_type') === 'refresh_token') {
            skipValue = 'true';
        }
        if (!this.configJSONVersion) {
            this.configJSONVersion = localStorage.getItem('CONFIG_JSON_VERSION');
        }
        let newReq;
        if (/\.json$/.test(req.url) && this.configJSONVersion) {
            newReq = req.clone({
                url: req.url + '?version=' + this.configJSONVersion,
            });
        }
        else {
            newReq = req.clone();
        }
        //Skip Loader for JSON file download
        if (!this.skipJSONLoader) {
            this.skipJSONLoader = localStorage.getItem('SKIP_JSON_LOADER');
        }
        if (this.skipJSONLoader && this.skipJSONLoader === 'true' && /\.json$/.test(req.url)) {
            skipValue = 'true';
        }
        if (skipValue !== 'true' && !this.loaderService.skipLoading) {
            this.requests.push(req);
            this.loaderService.loadingStack++;
            // console.log("No of requests--->" + this.requests.length);
            this.loaderService.isLoading.next(true);
            return new Observable(observer => {
                const subscription = next.handle(newReq)
                    .subscribe({
                    next: (event) => {
                        switch (event.type) {
                            case HttpEventType.Sent:
                                //Request has been made!
                                break;
                            case HttpEventType.ResponseHeader:
                                //Response header has been received!
                                break;
                            case HttpEventType.UploadProgress:
                                let progress = Math.round(event.loaded / event.total * 100);
                                httpProgress.progress = progress;
                                break;
                            case HttpEventType.Response:
                                this.removeRequest(req);
                                observer.next(event);
                                httpProgress.complete = true;
                                break;
                        }
                        this.sharedEventsServices.httpProgressEmitter.emit(httpProgress);
                    },
                    error: (err) => {
                        if (err) {
                            this.removeRequest(req);
                            observer.error(err);
                        }
                    },
                    complete: () => {
                        this.removeRequest(req);
                        observer.complete();
                    }
                });
                // remove request from queue when cancelled
                return () => {
                    this.removeRequest(req);
                    subscription.unsubscribe();
                };
            });
        }
        else {
            // console.log('in here');
            return next.handle(newReq);
        }
    }
    static ɵfac = function LoaderInterceptorService_Factory(t) { return new (t || LoaderInterceptorService)(i0.ɵɵinject(i1.LoaderService), i0.ɵɵinject(i2.SharedEventsServiceService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoaderInterceptorService, factory: LoaderInterceptorService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderInterceptorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.LoaderService }, { type: i2.SharedEventsServiceService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLWludGVyY2VwdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvc2VydmljZXMvbG9hZGVyLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0gsYUFBYSxFQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFPbEMsTUFBTSxPQUFPLHdCQUF3QjtJQU1iO0lBQXNDO0lBSmxELFFBQVEsR0FBdUIsRUFBRSxDQUFDO0lBQzFDLGlCQUFpQixDQUFRO0lBQ3pCLGNBQWMsQ0FBUTtJQUV0QixZQUFvQixhQUE0QixFQUFVLG9CQUFnRDtRQUF0RixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNEI7UUFDdEcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQXFCO1FBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1NB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LENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNyQixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQ0FDN0IsTUFBTTt5QkFDYjt3QkFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyRSxDQUFDO29CQUNELEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUNYLElBQUcsR0FBRyxFQUFDOzRCQUNILElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO29CQUVMLENBQUM7b0JBQ0QsUUFBUSxFQUFFLEdBQUcsRUFBRTt3QkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hCLENBQUM7aUJBQ0osQ0FBQyxDQUFBO2dCQUNGLDJDQUEyQztnQkFDM0MsT0FBTyxHQUFHLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMvQixDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCwwQkFBMEI7WUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztrRkE3SFEsd0JBQXdCO2dFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztpRkFFVCx3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgSHR0cFJlcXVlc3QsXHJcbiAgICBIdHRwSGFuZGxlcixcclxuICAgIEh0dHBFdmVudCxcclxuICAgIEh0dHBJbnRlcmNlcHRvcixcclxuICAgIEh0dHBFdmVudFR5cGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9hZGVyU2VydmljZSB9IGZyb20gJy4vbG9hZGVyLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGVySW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgICBwcml2YXRlIHJlcXVlc3RzOiBIdHRwUmVxdWVzdDxhbnk+W10gPSBbXTtcclxuICAgIGNvbmZpZ0pTT05WZXJzaW9uOnN0cmluZztcclxuICAgIHNraXBKU09OTG9hZGVyOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvYWRlclNlcnZpY2U6IExvYWRlclNlcnZpY2UsIHByaXZhdGUgc2hhcmVkRXZlbnRzU2VydmljZXM6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlKSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbmZpZ0pTT05WZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NPTkZJR19KU09OX1ZFUlNJT04nKTtcclxuICAgICAgICB0aGlzLnNraXBKU09OTG9hZGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NLSVBfSlNPTl9MT0FERVInKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVSZXF1ZXN0KHJlcTogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLnJlcXVlc3RzLmluZGV4T2YocmVxKTtcclxuICAgICAgICBpZiAoaSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UubG9hZGluZ1N0YWNrLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubG9hZGVyU2VydmljZS5sb2FkaW5nU3RhY2sgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5pc0xvYWRpbmcubmV4dCh0aGlzLmxvYWRlclNlcnZpY2UubG9hZGluZ1N0YWNrID4gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyU2VydmljZS5pc0xvYWRpbmcubmV4dCh0aGlzLmxvYWRlclNlcnZpY2UubG9hZGluZ1N0YWNrID4gMCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgICAgICBjb25zdCBodHRwUHJvZ3Jlc3MgPSB7XHJcbiAgICAgICAgICAgIHVJZDogbnVsbCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IG51bGwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVxLmhlYWRlcnMgJiYgdHlwZW9mIHJlcS5oZWFkZXJzLmdldCAhPT0gXCJ1bmRlZmluZWRcIiAmJiByZXEuaGVhZGVycy5nZXQoJ3VJZCcpKSB7XHJcbiAgICAgICAgICAgIGh0dHBQcm9ncmVzcy51SWQgPSByZXEuaGVhZGVycy5nZXQoJ3VJZCcpO1xyXG4gICAgICAgICAgICBpZiAoaHR0cFByb2dyZXNzLnVJZCkge1xyXG4gICAgICAgICAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycy5kZWxldGUoJ3VJZCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2tpcFZhbHVlO1xyXG4gICAgICAgIGlmIChyZXEuaGVhZGVycyAmJiB0eXBlb2YgcmVxLmhlYWRlcnMuZ2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIHJlcS5oZWFkZXJzLmdldCgnc2tpcCcpKSB7XHJcbiAgICAgICAgICAgIHNraXBWYWx1ZSA9IHJlcS5oZWFkZXJzLmdldCgnc2tpcCcpO1xyXG4gICAgICAgICAgICBpZiAoc2tpcFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLmRlbGV0ZSgnc2tpcCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NraXAgbG9hZGluZyBmb3IgT0lEQyByZWZyZXNoX3Rva2VuXHJcbiAgICAgICAgaWYgKHJlcS5ib2R5ICYmIHR5cGVvZiByZXEuYm9keS5nZXQgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVxLmJvZHkuZ2V0KCdncmFudF90eXBlJykgJiYgcmVxLmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdyZWZyZXNoX3Rva2VuJykge1xyXG4gICAgICAgICAgICBza2lwVmFsdWUgPSAndHJ1ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5jb25maWdKU09OVmVyc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ0pTT05WZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NPTkZJR19KU09OX1ZFUlNJT04nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld1JlcTtcclxuICAgICAgICBpZiAoL1xcLmpzb24kLy50ZXN0KHJlcS51cmwpICYmIHRoaXMuY29uZmlnSlNPTlZlcnNpb24pIHtcclxuICAgICAgICAgICAgbmV3UmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgICAgICAgIHVybDogcmVxLnVybCsnP3ZlcnNpb249JyArIHRoaXMuY29uZmlnSlNPTlZlcnNpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmV3UmVxID0gcmVxLmNsb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vU2tpcCBMb2FkZXIgZm9yIEpTT04gZmlsZSBkb3dubG9hZFxyXG4gICAgICAgIGlmICghdGhpcy5za2lwSlNPTkxvYWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNraXBKU09OTG9hZGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NLSVBfSlNPTl9MT0FERVInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpcEpTT05Mb2FkZXIgJiYgdGhpcy5za2lwSlNPTkxvYWRlciA9PT0gJ3RydWUnICYmIC9cXC5qc29uJC8udGVzdChyZXEudXJsKSkge1xyXG4gICAgICAgICAgICBza2lwVmFsdWUgPSAndHJ1ZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2tpcFZhbHVlICE9PSAndHJ1ZScgJiYgIXRoaXMubG9hZGVyU2VydmljZS5za2lwTG9hZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RzLnB1c2gocmVxKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXJTZXJ2aWNlLmxvYWRpbmdTdGFjaysrO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5vIG9mIHJlcXVlc3RzLS0tPlwiICsgdGhpcy5yZXF1ZXN0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXh0LmhhbmRsZShuZXdSZXEpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlNlbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9SZXF1ZXN0IGhhcyBiZWVuIG1hZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2VIZWFkZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9SZXNwb25zZSBoZWFkZXIgaGFzIGJlZW4gcmVjZWl2ZWQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5yb3VuZChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cFByb2dyZXNzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVSZXF1ZXN0KHJlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cFByb2dyZXNzLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VzLmh0dHBQcm9ncmVzc0VtaXR0ZXIuZW1pdChodHRwUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUmVxdWVzdChyZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUmVxdWVzdChyZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgcmVxdWVzdCBmcm9tIHF1ZXVlIHdoZW4gY2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUmVxdWVzdChyZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGhlcmUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKG5ld1JlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==