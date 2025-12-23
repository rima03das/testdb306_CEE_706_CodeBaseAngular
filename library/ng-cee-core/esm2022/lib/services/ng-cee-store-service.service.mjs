import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../models/app-data/app-data.query";
import * as i2 from "../models/app-data/app-data.store";
import * as i3 from "../models/api-data/api-data.store";
import * as i4 from "../models/api-data/api-data.query";
/**
 * class file mainly used to expose the store
 * data to the project side so that they can
 * access the store values
 */
export class NgCEEStoreService {
    appDataQuery;
    appDataStore;
    apiDataStore;
    apiDataQuery;
    constructor(appDataQuery, appDataStore, apiDataStore, apiDataQuery) {
        this.appDataQuery = appDataQuery;
        this.appDataStore = appDataStore;
        this.apiDataStore = apiDataStore;
        this.apiDataQuery = apiDataQuery;
    }
    getAllAppData() {
        return this.appDataQuery.getAll();
    }
    getIndividualAppData(id) {
        return this.appDataQuery.getAll({
            filterBy: entity => entity.id === id
        });
    }
    getAllApiData() {
        return this.apiDataQuery.getAll();
    }
    getIndividualApiData(id) {
        return this.apiDataQuery.getAll({
            filterBy: entity => entity.id === id
        });
    }
    getAppStore() {
        return this.appDataStore.getValue().entities;
    }
    getApiStore() {
        return this.apiDataStore.getValue().entities;
    }
    static ɵfac = function NgCEEStoreService_Factory(t) { return new (t || NgCEEStoreService)(i0.ɵɵinject(i1.AppDataQuery), i0.ɵɵinject(i2.AppDataStore), i0.ɵɵinject(i3.ApiDataStore), i0.ɵɵinject(i4.ApiDataQuery)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgCEEStoreService, factory: NgCEEStoreService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgCEEStoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.AppDataQuery }, { type: i2.AppDataStore }, { type: i3.ApiDataStore }, { type: i4.ApiDataQuery }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2VlLXN0b3JlLXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9zZXJ2aWNlcy9uZy1jZWUtc3RvcmUtc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVczQzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLGlCQUFpQjtJQUVkO0lBQ0E7SUFDQTtJQUNBO0lBSlosWUFDWSxZQUEwQixFQUMxQixZQUEwQixFQUMxQixZQUEwQixFQUMxQixZQUEwQjtRQUgxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFcEMsYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG9CQUFvQixDQUFDLEVBQVU7UUFDbEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUU7U0FDdkMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxFQUFVO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFO1NBQ3ZDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDO0lBRU0sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDakQsQ0FBQzsyRUFqQ1EsaUJBQWlCO2dFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQVBkLE1BQU07O2lGQU9ULGlCQUFpQjtjQVI3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaURhdGEgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBBcGlEYXRhUXVlcnkgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEucXVlcnknO1xyXG5pbXBvcnQgeyBBcGlEYXRhU3RvcmUgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgQXBwRGF0YVF1ZXJ5IH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnF1ZXJ5JztcclxuaW1wb3J0IHsgQXBwRGF0YVN0b3JlIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnN0b3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG4vKipcclxuICogY2xhc3MgZmlsZSBtYWlubHkgdXNlZCB0byBleHBvc2UgdGhlIHN0b3JlXHJcbiAqIGRhdGEgdG8gdGhlIHByb2plY3Qgc2lkZSBzbyB0aGF0IHRoZXkgY2FuXHJcbiAqIGFjY2VzcyB0aGUgc3RvcmUgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmdDRUVTdG9yZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBEYXRhUXVlcnk6IEFwcERhdGFRdWVyeSxcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTdG9yZTogQXBwRGF0YVN0b3JlLFxyXG4gICAgICAgIHByaXZhdGUgYXBpRGF0YVN0b3JlOiBBcGlEYXRhU3RvcmUsXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlEYXRhUXVlcnk6IEFwaURhdGFRdWVyeSkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbEFwcERhdGEoKTogQXBwRGF0YVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhUXVlcnkuZ2V0QWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEluZGl2aWR1YWxBcHBEYXRhKGlkOiBzdHJpbmcpOiBBcHBEYXRhW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGFRdWVyeS5nZXRBbGwoe1xyXG4gICAgICAgICAgICBmaWx0ZXJCeTogZW50aXR5ID0+IGVudGl0eS5pZCA9PT0gaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsQXBpRGF0YSgpOiBBcGlEYXRhW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaURhdGFRdWVyeS5nZXRBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kaXZpZHVhbEFwaURhdGEoaWQ6IHN0cmluZyk6IEFwaURhdGFbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpRGF0YVF1ZXJ5LmdldEFsbCh7XHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiBlbnRpdHkgPT4gZW50aXR5LmlkID09PSBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBcHBTdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhU3RvcmUuZ2V0VmFsdWUoKS5lbnRpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXBpU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpRGF0YVN0b3JlLmdldFZhbHVlKCkuZW50aXRpZXM7XHJcbiAgICB9XHJcblxyXG59Il19