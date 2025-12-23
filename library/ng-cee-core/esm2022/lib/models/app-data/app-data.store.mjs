import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import * as i0 from "@angular/core";
let AppDataStore = class AppDataStore extends EntityStore {
    constructor() {
        super();
    }
    static ɵfac = function AppDataStore_Factory(t) { return new (t || AppDataStore)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppDataStore, factory: AppDataStore.ɵfac, providedIn: 'root' });
};
AppDataStore = __decorate([
    StoreConfig({ name: 'app-data' })
], AppDataStore);
export { AppDataStore };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppDataStore, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGEuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBT2pFLElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQWEsU0FBUSxXQUFrQztJQUNoRTtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztzRUFIUSxZQUFZO2dFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZDLE1BQU07O0FBRW5CLFlBQVk7SUFEeEIsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0dBQ3JCLFlBQVksQ0FJeEI7O2lGQUpZLFlBQVk7Y0FGeEIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW50aXR5U3RhdGUsIEVudGl0eVN0b3JlLCBTdG9yZUNvbmZpZyB9IGZyb20gJ0BkYXRvcmFtYS9ha2l0YSc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuL2FwcC1kYXRhLm1vZGVsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGF0YVN0YXRlIGV4dGVuZHMgRW50aXR5U3RhdGU8QXBwRGF0YT4geyB9XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5AU3RvcmVDb25maWcoeyBuYW1lOiAnYXBwLWRhdGEnIH0pXHJcbmV4cG9ydCBjbGFzcyBBcHBEYXRhU3RvcmUgZXh0ZW5kcyBFbnRpdHlTdG9yZTxBcHBEYXRhU3RhdGUsIEFwcERhdGE+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19