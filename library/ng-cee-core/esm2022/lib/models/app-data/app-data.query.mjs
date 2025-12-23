import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./app-data.store";
export class AppDataQuery extends QueryEntity {
    store;
    constructor(store) {
        super(store);
        this.store = store;
    }
    static ɵfac = function AppDataQuery_Factory(t) { return new (t || AppDataQuery)(i0.ɵɵinject(i1.AppDataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppDataQuery, factory: AppDataQuery.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppDataQuery, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.AppDataStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGEucXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHM0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxXQUFrQztJQUUxQztJQUF0QixZQUFzQixLQUFtQjtRQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFESyxVQUFLLEdBQUwsS0FBSyxDQUFjO0lBRXpDLENBQUM7c0VBSlEsWUFBWTtnRUFBWixZQUFZLFdBQVosWUFBWSxtQkFEQyxNQUFNOztpRkFDbkIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlFbnRpdHkgfSBmcm9tICdAZGF0b3JhbWEvYWtpdGEnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi9hcHAtZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IEFwcERhdGFTdG9yZSwgQXBwRGF0YVN0YXRlIH0gZnJvbSAnLi9hcHAtZGF0YS5zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBcHBEYXRhUXVlcnkgZXh0ZW5kcyBRdWVyeUVudGl0eTxBcHBEYXRhU3RhdGUsIEFwcERhdGE+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IEFwcERhdGFTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKHN0b3JlKTtcclxuICAgIH1cclxufVxyXG4iXX0=