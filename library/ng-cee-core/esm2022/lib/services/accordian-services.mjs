import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class AccordionService {
    // ✅ Existing observable for sectionId (used by old components)
    sectionOpenSource = new Subject();
    sectionOpen$ = this.sectionOpenSource.asObservable();
    // ✅ New observable for section info with parentId
    sectionOpenWithParentSource = new Subject();
    sectionOpenWithParent$ = this.sectionOpenWithParentSource.asObservable();
    // ✅ Old single section logic (unchanged)
    openSection(sectionId) {
        //console.log(`📢 Emitting section open request: ${sectionId}`);
        this.sectionOpenSource.next(sectionId);
    }
    // ✅ Old multi-section logic (still supported)
    openMultipleSections(sectionIds) {
        sectionIds.forEach(sectionId => {
            //console.log(`📢 Emitting API-triggered section open request: ${sectionId}`);
            this.sectionOpenSource.next(sectionId);
        });
    }
    // ✅ New method with parentId support (does not affect old components )
    openMultipleSectionsWithParent(sectionIds, parentId, defaultValue, iCounter) {
        //console.log(`📢 Emitting with parent:`, { sectionIds, parentId, defaultValue,iCounter });
        this.sectionOpenWithParentSource.next({ sectionIds, parentId, defaultValue, iCounter });
    }
    static ɵfac = function AccordionService_Factory(t) { return new (t || AccordionService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AccordionService, factory: AccordionService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaWFuLXNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3NlcnZpY2VzL2FjY29yZGlhbi1zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRy9CLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsK0RBQStEO0lBQ3ZELGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUFDbEQsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVyRCxrREFBa0Q7SUFDMUMsMkJBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQW9GLENBQUM7SUFDdEksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXpFLHlDQUF5QztJQUN6QyxXQUFXLENBQUMsU0FBaUI7UUFDM0IsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDhDQUE4QztJQUM5QyxvQkFBb0IsQ0FBQyxVQUFvQjtRQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLDhFQUE4RTtZQUM5RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSw4QkFBOEIsQ0FBQyxVQUFrQixFQUFFLFFBQWdCLEVBQUUsWUFBb0IsRUFBRSxRQUFpQjtRQUMxRywyRkFBMkY7UUFDM0YsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQzswRUEzQlUsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQURILE1BQU07O2lGQUNuQixnQkFBZ0I7Y0FENUIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblNlcnZpY2Uge1xyXG4gIC8vIOKchSBFeGlzdGluZyBvYnNlcnZhYmxlIGZvciBzZWN0aW9uSWQgKHVzZWQgYnkgb2xkIGNvbXBvbmVudHMpXHJcbiAgcHJpdmF0ZSBzZWN0aW9uT3BlblNvdXJjZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBzZWN0aW9uT3BlbiQgPSB0aGlzLnNlY3Rpb25PcGVuU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAvLyDinIUgTmV3IG9ic2VydmFibGUgZm9yIHNlY3Rpb24gaW5mbyB3aXRoIHBhcmVudElkXHJcbiAgcHJpdmF0ZSBzZWN0aW9uT3BlbldpdGhQYXJlbnRTb3VyY2UgPSBuZXcgU3ViamVjdDx7IHNlY3Rpb25JZHM6IHN0cmluZywgcGFyZW50SWQ6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcsaUNvdW50ZXI/OiBudW1iZXIgfT4oKTtcclxuICBzZWN0aW9uT3BlbldpdGhQYXJlbnQkID0gdGhpcy5zZWN0aW9uT3BlbldpdGhQYXJlbnRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIC8vIOKchSBPbGQgc2luZ2xlIHNlY3Rpb24gbG9naWMgKHVuY2hhbmdlZClcclxuICBvcGVuU2VjdGlvbihzZWN0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhg8J+ToiBFbWl0dGluZyBzZWN0aW9uIG9wZW4gcmVxdWVzdDogJHtzZWN0aW9uSWR9YCk7XHJcbiAgICB0aGlzLnNlY3Rpb25PcGVuU291cmNlLm5leHQoc2VjdGlvbklkKTtcclxuICB9XHJcblxyXG4gIC8vIOKchSBPbGQgbXVsdGktc2VjdGlvbiBsb2dpYyAoc3RpbGwgc3VwcG9ydGVkKVxyXG4gIG9wZW5NdWx0aXBsZVNlY3Rpb25zKHNlY3Rpb25JZHM6IHN0cmluZ1tdKSB7XHJcbiAgICBzZWN0aW9uSWRzLmZvckVhY2goc2VjdGlvbklkID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhg8J+ToiBFbWl0dGluZyBBUEktdHJpZ2dlcmVkIHNlY3Rpb24gb3BlbiByZXF1ZXN0OiAke3NlY3Rpb25JZH1gKTtcclxuICAgICAgdGhpcy5zZWN0aW9uT3BlblNvdXJjZS5uZXh0KHNlY3Rpb25JZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIOKchSBOZXcgbWV0aG9kIHdpdGggcGFyZW50SWQgc3VwcG9ydCAoZG9lcyBub3QgYWZmZWN0IG9sZCBjb21wb25lbnRzIClcclxuICBvcGVuTXVsdGlwbGVTZWN0aW9uc1dpdGhQYXJlbnQoc2VjdGlvbklkczogc3RyaW5nLCBwYXJlbnRJZDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZywgaUNvdW50ZXI/OiBudW1iZXIpIHtcclxuICAgIC8vY29uc29sZS5sb2coYPCfk6IgRW1pdHRpbmcgd2l0aCBwYXJlbnQ6YCwgeyBzZWN0aW9uSWRzLCBwYXJlbnRJZCwgZGVmYXVsdFZhbHVlLGlDb3VudGVyIH0pO1xyXG4gICAgdGhpcy5zZWN0aW9uT3BlbldpdGhQYXJlbnRTb3VyY2UubmV4dCh7IHNlY3Rpb25JZHMsIHBhcmVudElkLCBkZWZhdWx0VmFsdWUsIGlDb3VudGVyIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=