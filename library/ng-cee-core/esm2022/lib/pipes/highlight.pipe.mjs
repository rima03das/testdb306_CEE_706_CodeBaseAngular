import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class HighlightPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<b>$&</b>");
    }
    static ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "highlight", type: HighlightPipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HighlightPipe, [{
        type: Pipe,
        args: [{
                name: 'highlight',
                standalone: true
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvcGlwZXMvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxhQUFhO0lBRXRCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUMsT0FBTyxLQUFLLENBQUM7U0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyx3RkFBd0Y7UUFDekgsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO3VFQU5RLGFBQWE7NEVBQWIsYUFBYTs7aUZBQWIsYUFBYTtjQUx6QixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFVBQVUsRUFBRSxJQUFJO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2hpZ2hsaWdodCcsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICghYXJncykge3JldHVybiB2YWx1ZTt9XHJcbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChhcmdzLCAnZ2knKTsgLy8nZ2knIGZvciBjYXNlIGluc2Vuc2l0aXZlIGFuZCBjYW4gdXNlICdnJyBpZiB5b3Ugd2FudCB0aGUgc2VhcmNoIHRvIGJlIGNhc2Ugc2Vuc2l0aXZlLlxyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCBcIjxiPiQmPC9iPlwiKTtcclxuICAgIH1cclxufSJdfQ==