import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./api-data.store";
export class ApiDataQuery extends QueryEntity {
    store;
    constructor(store) {
        super(store);
        this.store = store;
    }
    static ɵfac = function ApiDataQuery_Factory(t) { return new (t || ApiDataQuery)(i0.ɵɵinject(i1.ApiDataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiDataQuery, factory: ApiDataQuery.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiDataQuery, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.ApiDataStore }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWRhdGEucXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHM0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxXQUFrQztJQUUxQztJQUF0QixZQUFzQixLQUFtQjtRQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFESyxVQUFLLEdBQUwsS0FBSyxDQUFjO0lBRXpDLENBQUM7c0VBSlEsWUFBWTtnRUFBWixZQUFZLFdBQVosWUFBWSxtQkFEQyxNQUFNOztpRkFDbkIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlFbnRpdHkgfSBmcm9tICdAZGF0b3JhbWEvYWtpdGEnO1xyXG5pbXBvcnQgeyBBcGlEYXRhIH0gZnJvbSAnLi9hcGktZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IEFwaURhdGFTdG9yZSwgQXBpRGF0YVN0YXRlIH0gZnJvbSAnLi9hcGktZGF0YS5zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBcGlEYXRhUXVlcnkgZXh0ZW5kcyBRdWVyeUVudGl0eTxBcGlEYXRhU3RhdGUsIEFwaURhdGE+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IEFwaURhdGFTdG9yZSkge1xyXG4gICAgICAgIHN1cGVyKHN0b3JlKTtcclxuICAgIH1cclxuXHJcbn0iXX0=