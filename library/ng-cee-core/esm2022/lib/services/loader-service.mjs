import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LoaderService {
    skipLoading = false;
    loadingStack = 0;
    isLoading = new BehaviorSubject(false);
    loader = this.isLoading.asObservable();
    loadingTextSet = new BehaviorSubject('');
    loadingTextGet = this.loadingTextSet.asObservable();
    isLoading$ = new BehaviorSubject(false);
    constructor() { }
    static ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvc2VydmljZXMvbG9hZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sYUFBYTtJQUNmLFdBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IsWUFBWSxHQUFXLENBQUMsQ0FBQztJQUN6QixTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsY0FBYyxHQUE0QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6RSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxVQUFVLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDeEQsZ0JBQWdCLENBQUM7dUVBUlIsYUFBYTtnRUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGVixNQUFNOztpRkFFVCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRlclNlcnZpY2Uge1xyXG4gICAgcHVibGljIHNraXBMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgbG9hZGluZ1N0YWNrOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGlzTG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4gICAgbG9hZGVyID0gdGhpcy5pc0xvYWRpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBwdWJsaWMgbG9hZGluZ1RleHRTZXQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgICBsb2FkaW5nVGV4dEdldCA9IHRoaXMubG9hZGluZ1RleHRTZXQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBwdWJsaWMgaXNMb2FkaW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXX0=