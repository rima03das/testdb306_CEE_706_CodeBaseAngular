import { Directive, HostListener, Input } from '@angular/core';
import { TooltipComponent } from "./tooltip.component";
import { TooltipPosition, TooltipTheme } from "./tooltip.enums";
import * as i0 from "@angular/core";
export class TooltipDirective {
    elementRef;
    appRef;
    componentFactoryResolver;
    injector;
    tooltip = '';
    position = TooltipPosition.DEFAULT;
    theme = TooltipTheme.DEFAULT;
    showDelay = 0;
    hideDelay = 0;
    componentRef = null;
    showTimeout;
    hideTimeout;
    touchTimeout;
    constructor(elementRef, appRef, componentFactoryResolver, injector) {
        this.elementRef = elementRef;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    onMouseEnter() {
        this.initializeTooltip();
    }
    onMouseLeave() {
        this.setHideTooltipTimeout();
    }
    onMouseMove($event) {
        if (this.componentRef !== null && this.position === TooltipPosition.DYNAMIC) {
            this.componentRef.instance.left = $event.clientX;
            this.componentRef.instance.top = $event.clientY;
            this.componentRef.instance.tooltip = this.tooltip;
        }
    }
    onTouchStart($event) {
        $event.preventDefault();
        window.clearTimeout(this.touchTimeout);
        this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), 500);
    }
    onTouchEnd() {
        window.clearTimeout(this.touchTimeout);
        this.setHideTooltipTimeout();
    }
    initializeTooltip() {
        if (this.componentRef === null) {
            window.clearInterval(this.hideDelay);
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
            this.componentRef = componentFactory.create(this.injector);
            this.appRef.attachView(this.componentRef.hostView);
            const [tooltipDOMElement] = this.componentRef.hostView.rootNodes;
            this.setTooltipComponentProperties();
            document.body.appendChild(tooltipDOMElement);
            this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
        }
    }
    setTooltipComponentProperties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.tooltip = this.tooltip;
            this.componentRef.instance.position = this.position;
            this.componentRef.instance.theme = this.theme;
            const { left, right, top, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
            switch (this.position) {
                case TooltipPosition.BELOW: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(bottom);
                    break;
                }
                case TooltipPosition.ABOVE: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(top);
                    break;
                }
                case TooltipPosition.RIGHT: {
                    this.componentRef.instance.left = Math.round(right);
                    this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
                    break;
                }
                case TooltipPosition.LEFT: {
                    this.componentRef.instance.left = Math.round(left);
                    this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    showTooltip() {
        if (this.componentRef !== null) {
            this.componentRef.instance.visible = true;
        }
    }
    setHideTooltipTimeout() {
        this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        if (this.componentRef !== null) {
            window.clearInterval(this.showTimeout);
            window.clearInterval(this.hideDelay);
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    static ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousemove", function TooltipDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); })("touchstart", function TooltipDirective_touchstart_HostBindingHandler($event) { return ctx.onTouchStart($event); })("touchend", function TooltipDirective_touchend_HostBindingHandler() { return ctx.onTouchEnd(); });
        } }, inputs: { tooltip: "tooltip", position: "position", theme: "theme", showDelay: "showDelay", hideDelay: "hideDelay" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tooltip]'
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }], { tooltip: [{
            type: Input
        }], position: [{
            type: Input
        }], theme: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], hideDelay: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onMouseMove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }], onTouchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], onTouchEnd: [{
            type: HostListener,
            args: ['touchend']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFJSCxTQUFTLEVBR1QsWUFBWSxFQUVaLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFFLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUs5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBYVA7SUFBZ0M7SUFDaEM7SUFBNEQ7SUFadkUsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLFFBQVEsR0FBb0IsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUNwRCxLQUFLLEdBQWlCLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFDM0MsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNkLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFFZixZQUFZLEdBQTZCLElBQUksQ0FBQztJQUM5QyxXQUFXLENBQVU7SUFDckIsV0FBVyxDQUFVO0lBQ3JCLFlBQVksQ0FBVTtJQUU5QixZQUFvQixVQUFzQixFQUFVLE1BQXNCLEVBQ3RELHdCQUFrRCxFQUFVLFFBQWtCO1FBRDlFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0RCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUNsRyxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxD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QUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBWU4sWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVk7WUFNMUIsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVk7WUFNMUIsV0FBVztrQkFEVixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVVyQyxZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBUXRDLFVBQVU7a0JBRFQsWUFBWTttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEVtYmVkZGVkVmlld1JlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIEluamVjdG9yLFxyXG4gICAgSW5wdXQsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmXHJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICBpbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gXCIuL3Rvb2x0aXAuY29tcG9uZW50XCI7XHJcbiAgaW1wb3J0IHtUb29sdGlwUG9zaXRpb24sIFRvb2x0aXBUaGVtZX0gZnJvbSBcIi4vdG9vbHRpcC5lbnVtc1wiO1xyXG4gIFxyXG4gIEBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdG9vbHRpcF0nXHJcbiAgfSlcclxuICBleHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XHJcbiAgXHJcbiAgICBASW5wdXQoKSB0b29sdGlwID0gJyc7XHJcbiAgICBASW5wdXQoKSBwb3NpdGlvbjogVG9vbHRpcFBvc2l0aW9uID0gVG9vbHRpcFBvc2l0aW9uLkRFRkFVTFQ7XHJcbiAgICBASW5wdXQoKSB0aGVtZTogVG9vbHRpcFRoZW1lID0gVG9vbHRpcFRoZW1lLkRFRkFVTFQ7XHJcbiAgICBASW5wdXQoKSBzaG93RGVsYXkgPSAwO1xyXG4gICAgQElucHV0KCkgaGlkZURlbGF5ID0gMDtcclxuICBcclxuICAgIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzaG93VGltZW91dD86IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGlkZVRpbWVvdXQ/OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRvdWNoVGltZW91dD86IG51bWJlcjtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIH1cclxuICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gICAgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVUb29sdGlwKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICAgIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zZXRIaWRlVG9vbHRpcFRpbWVvdXQoKTtcclxuICAgIH1cclxuICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pXHJcbiAgICBvbk1vdXNlTW92ZSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9PSBudWxsICYmIHRoaXMucG9zaXRpb24gPT09IFRvb2x0aXBQb3NpdGlvbi5EWU5BTUlDKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UubGVmdCA9ICRldmVudC5jbGllbnRYO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvcCA9ICRldmVudC5jbGllbnRZO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbJyRldmVudCddKVxyXG4gICAgb25Ub3VjaFN0YXJ0KCRldmVudDogVG91Y2hFdmVudCk6IHZvaWQge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCk7XHJcbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5pbml0aWFsaXplVG9vbHRpcC5iaW5kKHRoaXMpLCA1MDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnKVxyXG4gICAgb25Ub3VjaEVuZCgpOiB2b2lkIHtcclxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dCk7XHJcbiAgICAgIHRoaXMuc2V0SGlkZVRvb2x0aXBUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVUb29sdGlwKCkge1xyXG4gICAgICBpZiAodGhpcy5jb21wb25lbnRSZWYgPT09IG51bGwpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmhpZGVEZWxheSk7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvb2x0aXBDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcbiAgXHJcbiAgICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICAgICAgY29uc3QgW3Rvb2x0aXBET01FbGVtZW50XSA9ICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzO1xyXG4gIFxyXG4gICAgICAgIHRoaXMuc2V0VG9vbHRpcENvbXBvbmVudFByb3BlcnRpZXMoKTtcclxuICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBET01FbGVtZW50KTtcclxuICAgICAgICB0aGlzLnNob3dUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5zaG93VG9vbHRpcC5iaW5kKHRoaXMpLCB0aGlzLnNob3dEZWxheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHByaXZhdGUgc2V0VG9vbHRpcENvbXBvbmVudFByb3BlcnRpZXMoKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRoZW1lID0gdGhpcy50aGVtZTtcclxuICBcclxuICAgICAgICBjb25zdCB7bGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tfSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xyXG4gICAgICAgICAgY2FzZSBUb29sdGlwUG9zaXRpb24uQkVMT1c6IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UubGVmdCA9IE1hdGgucm91bmQoKHJpZ2h0IC0gbGVmdCkgLyAyICsgbGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvcCA9IE1hdGgucm91bmQoYm90dG9tKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIFRvb2x0aXBQb3NpdGlvbi5BQk9WRToge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5sZWZ0ID0gTWF0aC5yb3VuZCgocmlnaHQgLSBsZWZ0KSAvIDIgKyBsZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudG9wID0gTWF0aC5yb3VuZCh0b3ApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgVG9vbHRpcFBvc2l0aW9uLlJJR0hUOiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmxlZnQgPSBNYXRoLnJvdW5kKHJpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudG9wID0gTWF0aC5yb3VuZCh0b3AgKyAoYm90dG9tIC0gdG9wKSAvIDIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgVG9vbHRpcFBvc2l0aW9uLkxFRlQ6IHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UubGVmdCA9IE1hdGgucm91bmQobGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLnRvcCA9IE1hdGgucm91bmQodG9wICsgKGJvdHRvbSAtIHRvcCkgLyAyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJpdmF0ZSBzaG93VG9vbHRpcCgpIHtcclxuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHByaXZhdGUgc2V0SGlkZVRvb2x0aXBUaW1lb3V0KCkge1xyXG4gICAgICB0aGlzLmhpZGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5kZXN0cm95LmJpbmQodGhpcyksIHRoaXMuaGlkZURlbGF5KTtcclxuICAgIH1cclxuICBcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICBcclxuICAgIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc2hvd1RpbWVvdXQpO1xyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaGlkZURlbGF5KTtcclxuICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ==