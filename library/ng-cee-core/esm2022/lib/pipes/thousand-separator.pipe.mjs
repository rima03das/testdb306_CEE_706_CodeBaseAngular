import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ThousandSeparatorPipe {
    transform(value, locale) {
        return new Intl.NumberFormat(locale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(Number(value));
    }
    static ɵfac = function ThousandSeparatorPipe_Factory(t) { return new (t || ThousandSeparatorPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "thousandSeparator", type: ThousandSeparatorPipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThousandSeparatorPipe, [{
        type: Pipe,
        args: [{
                name: 'thousandSeparator',
                standalone: true
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhvdXNhbmQtc2VwYXJhdG9yLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvcGlwZXMvdGhvdXNhbmQtc2VwYXJhdG9yLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxxQkFBcUI7SUFFOUIsU0FBUyxDQUFDLEtBQXNCLEVBQUUsTUFBZTtRQUMvQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDbkMscUJBQXFCLEVBQUUsQ0FBQztZQUN4QixxQkFBcUIsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzsrRUFQUSxxQkFBcUI7b0ZBQXJCLHFCQUFxQjs7aUZBQXJCLHFCQUFxQjtjQUxqQyxJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsVUFBVSxFQUFFLElBQUk7YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAndGhvdXNhbmRTZXBhcmF0b3InLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRob3VzYW5kU2VwYXJhdG9yUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGUsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXHJcbiAgICAgIH0pLmZvcm1hdChOdW1iZXIodmFsdWUpKTtcclxuICAgIH1cclxuICBcclxufSJdfQ==