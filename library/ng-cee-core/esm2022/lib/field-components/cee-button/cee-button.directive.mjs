import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { debounce } from 'lodash';
import * as i0 from "@angular/core";
export class DebounceClickDirective {
    debounceClick = new EventEmitter();
    debouncedClick = debounce((event) => {
        this.debounceClick.emit(event);
    }, 500, { leading: true, trailing: false });
    static ɵfac = function DebounceClickDirective_Factory(t) { return new (t || DebounceClickDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DebounceClickDirective, selectors: [["", "appDebounceClick", ""]], hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function DebounceClickDirective_click_HostBindingHandler($event) { return ctx.debouncedClick($event); });
        } }, outputs: { debounceClick: "debounceClick" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DebounceClickDirective, [{
        type: Directive,
        args: [{
                selector: '[appDebounceClick]',
                standalone: true
            }]
    }], null, { debounceClick: [{
            type: Output
        }], debouncedClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFLbEMsTUFBTSxPQUFPLHNCQUFzQjtJQUN2QixhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUc3QyxjQUFjLEdBQUcsUUFBUSxDQUN2QixDQUFDLEtBQVksRUFBRSxFQUFFO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUNELEdBQUcsRUFDSCxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUNuQyxDQUFDO2dGQVZTLHNCQUFzQjs2REFBdEIsc0JBQXNCO1lBQXRCLGlHQUFBLDBCQUFzQixJQUFBOzs7aUZBQXRCLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsVUFBVSxFQUFFLElBQUk7YUFDakI7Z0JBRVcsYUFBYTtrQkFBdEIsTUFBTTtZQUdQLGNBQWM7a0JBRGIsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICAgIERpcmVjdGl2ZSwgXHJcbiAgICBFdmVudEVtaXR0ZXIsIFxyXG4gICAgSG9zdExpc3RlbmVyLCBcclxuICAgIE91dHB1dCBcclxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gIGltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcclxuICBARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2FwcERlYm91bmNlQ2xpY2tdJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWVcclxuICB9KVxyXG4gIGV4cG9ydCBjbGFzcyBEZWJvdW5jZUNsaWNrRGlyZWN0aXZlIHtcclxuICAgIEBPdXRwdXQoKSBkZWJvdW5jZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gICAgZGVib3VuY2VkQ2xpY2sgPSBkZWJvdW5jZShcclxuICAgICAgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVib3VuY2VDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgfSxcclxuICAgICAgNTAwLFxyXG4gICAgICB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiBmYWxzZSB9LFxyXG4gICAgKTtcclxuICB9Il19