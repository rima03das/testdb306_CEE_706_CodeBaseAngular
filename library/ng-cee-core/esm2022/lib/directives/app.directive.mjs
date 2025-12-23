import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Directive, HostListener, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class CustomTooltipDirective {
    overlay;
    overlayPositionBuilder;
    elementRef;
    viewContainerRef;
    uniqueId;
    additionalParameter;
    tooltipContent;
    _overlayRef;
    isTooltipOnclick;
    constructor(overlay, overlayPositionBuilder, elementRef, viewContainerRef) {
        this.overlay = overlay;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.isTooltipOnclick = this.additionalParameter['tooltipOnclick'] === "true" ? true : false;
        if (this.tooltipContent) {
            let customClass = (this.uniqueId) ? "custom-tooltip-" + this.uniqueId : "custom-tooltip";
            const position = this.overlayPositionBuilder
                .flexibleConnectedTo(this.elementRef)
                .withPositions([{
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top',
                    offsetX: 10,
                    offsetY: 10
                },
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom',
                    offsetX: 0,
                    offsetY: -10
                }
            ]);
            this._overlayRef = this.overlay.create({
                positionStrategy: position,
                scrollStrategy: this.overlay.scrollStrategies.close(),
                panelClass: customClass
            });
        }
        else {
            // console.error('Error, occured in html custom tooltip!');
        }
    }
    showTooltip() {
        //attach the template/component if it has not already attached to the overlay
        if (this._overlayRef && !this._overlayRef.hasAttached()) {
            let containerPortal;
            if (this.tooltipContent instanceof TemplateRef) {
                containerPortal = new TemplatePortal(this.tooltipContent, this.viewContainerRef);
            }
            else {
                containerPortal = new ComponentPortal(this.tooltipContent, this.viewContainerRef);
            }
            this._overlayRef.attach(containerPortal);
        }
    }
    toggle() {
        if (this.isTooltipOnclick) {
            this.showTooltip();
        }
    }
    show() {
        if (!this.isTooltipOnclick) {
            this.showTooltip();
        }
    }
    hide() {
        if (!this.isTooltipOnclick) {
            this.closeToolTip();
        }
    }
    onFocus(target) {
        this.showTooltip();
    }
    onFocusout(target) {
        this.closeToolTip();
    }
    ngOnDestroy() {
        this.closeToolTip();
    }
    closeToolTip() {
        if (this._overlayRef) {
            this._overlayRef.detach();
        }
    }
    static ɵfac = function CustomTooltipDirective_Factory(t) { return new (t || CustomTooltipDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i1.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CustomTooltipDirective, selectors: [["", "customTooltip", ""]], hostBindings: function CustomTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CustomTooltipDirective_click_HostBindingHandler() { return ctx.toggle(); })("mouseover", function CustomTooltipDirective_mouseover_HostBindingHandler() { return ctx.show(); })("mouseleave", function CustomTooltipDirective_mouseleave_HostBindingHandler() { return ctx.hide(); })("focus", function CustomTooltipDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event.target); })("focusout", function CustomTooltipDirective_focusout_HostBindingHandler($event) { return ctx.onFocusout($event.target); });
        } }, inputs: { uniqueId: [i0.ɵɵInputFlags.None, "tooltipId", "uniqueId"], additionalParameter: [i0.ɵɵInputFlags.None, "tooltipAdditionalparameter", "additionalParameter"], tooltipContent: [i0.ɵɵInputFlags.None, "customTooltip", "tooltipContent"] }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[customTooltip]',
                standalone: true,
            }]
    }], () => [{ type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }], { uniqueId: [{
            type: Input,
            args: ['tooltipId']
        }], additionalParameter: [{
            type: Input,
            args: ['tooltipAdditionalparameter']
        }], tooltipContent: [{
            type: Input,
            args: ['customTooltip']
        }], toggle: [{
            type: HostListener,
            args: ['click']
        }], show: [{
            type: HostListener,
            args: ['mouseover']
        }], hide: [{
            type: HostListener,
            args: ['mouseleave']
        }], onFocus: [{
            type: HostListener,
            args: ['focus', ['$event.target']]
        }], onFocusout: [{
            type: HostListener,
            args: ['focusout', ['$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2FwcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBaUIsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckYsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBb0IsTUFBTSxlQUFlLENBQUM7OztBQU1sSCxNQUFNLE9BQU8sc0JBQXNCO0lBUW5CO0lBQ0E7SUFDQTtJQUNBO0lBVlEsUUFBUSxDQUFNO0lBQ0csbUJBQW1CLENBQU07SUFDdEMsY0FBYyxDQUErQztJQUM3RSxXQUFXLENBQWE7SUFDeEIsZ0JBQWdCLENBQUM7SUFFekIsWUFDWSxPQUFnQixFQUNoQixzQkFBOEMsRUFDOUMsVUFBc0IsRUFDdEIsZ0JBQWtDO1FBSGxDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDM0MsQ0FBQztJQUVKLFFBQVE7UUFDSixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM3RixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFD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QkFBQyxXQUFXO1lBQ21CLG1CQUFtQjtrQkFBdkQsS0FBSzttQkFBQyw0QkFBNEI7WUFDWCxjQUFjO2tCQUFyQyxLQUFLO21CQUFDLGVBQWU7WUEyRHRCLE1BQU07a0JBREwsWUFBWTttQkFBQyxPQUFPO1lBUXJCLElBQUk7a0JBREgsWUFBWTttQkFBQyxXQUFXO1lBUXpCLElBQUk7a0JBREgsWUFBWTttQkFBQyxZQUFZO1lBUTFCLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFNeEMsVUFBVTtrQkFEVCxZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjdXN0b21Ub29sdGlwXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCd0b29sdGlwSWQnKSB1bmlxdWVJZDogYW55O1xyXG4gICAgQElucHV0KCd0b29sdGlwQWRkaXRpb25hbHBhcmFtZXRlcicpIGFkZGl0aW9uYWxQYXJhbWV0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgnY3VzdG9tVG9vbHRpcCcpIHRvb2x0aXBDb250ZW50OiBUZW1wbGF0ZVJlZiA8IGFueSA+IHwgQ29tcG9uZW50VHlwZSA8IGFueSA+IDtcclxuICAgIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgICBwcml2YXRlIGlzVG9vbHRpcE9uY2xpY2s7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgICAgIHByaXZhdGUgb3ZlcmxheVBvc2l0aW9uQnVpbGRlcjogT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNUb29sdGlwT25jbGljayA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndG9vbHRpcE9uY2xpY2snXSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcENvbnRlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbUNsYXNzID0gKHRoaXMudW5pcXVlSWQpID8gXCJjdXN0b20tdG9vbHRpcC1cIiArIHRoaXMudW5pcXVlSWQgOiBcImN1c3RvbS10b29sdGlwXCJcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLm92ZXJsYXlQb3NpdGlvbkJ1aWxkZXJcclxuICAgICAgICAgICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudFJlZilcclxuICAgICAgICAgICAgICAgIC53aXRoUG9zaXRpb25zKFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpblg6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVg6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMTBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICAgICAgICAgICAgICBwYW5lbENsYXNzOiBjdXN0b21DbGFzc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdFcnJvciwgb2NjdXJlZCBpbiBodG1sIGN1c3RvbSB0b29sdGlwIScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUb29sdGlwKCkge1xyXG4gICAgICAgIC8vYXR0YWNoIHRoZSB0ZW1wbGF0ZS9jb21wb25lbnQgaWYgaXQgaGFzIG5vdCBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBvdmVybGF5XHJcbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXlSZWYgJiYgIXRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyUG9ydGFsOiBUZW1wbGF0ZVBvcnRhbCA8IGFueSA+IHwgQ29tcG9uZW50UG9ydGFsIDwgYW55ID4gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b29sdGlwQ29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy50b29sdGlwQ29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwodGhpcy50b29sdGlwQ29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChjb250YWluZXJQb3J0YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb29sdGlwT25jbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUb29sdGlwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Rvb2x0aXBPbmNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Rvb2x0aXBPbmNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUb29sVGlwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBvbkZvY3VzKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zaG93VG9vbHRpcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBvbkZvY3Vzb3V0KHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VUb29sVGlwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19