import { Component } from '@angular/core';
import { TooltipPosition, TooltipTheme } from "./tooltip.enums";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => [a0, a1];
function TooltipComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r0.left + "px")("top", ctx_r0.top + "px");
    i0.ɵɵclassProp("tooltip--visible", ctx_r0.visible);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, "tooltip--" + ctx_r0.position, "tooltip--" + ctx_r0.theme));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.tooltip, "\n");
} }
function TooltipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r0.left + "px")("top", ctx_r0.top + "px");
    i0.ɵɵclassProp("tooltip--visible", ctx_r0.visible);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, "tooltip--" + ctx_r0.position, "tooltip--" + ctx_r0.theme))("innerHTML", ctx_r0.tooltip, i0.ɵɵsanitizeHtml);
} }
export class TooltipComponent {
    position = TooltipPosition.DEFAULT;
    theme = TooltipTheme.DEFAULT;
    tooltip = '';
    left = 0;
    top = 0;
    visible = false;
    constructor() {
    }
    ngOnInit() {
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    static ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipComponent, selectors: [["tooltip"]], decls: 2, vars: 2, consts: [["class", "tooltip", 3, "ngClass", "tooltip--visible", "left", "top", 4, "ngIf"], ["class", "tooltip", 3, "ngClass", "tooltip--visible", "left", "top", "innerHTML", 4, "ngIf"], [1, "tooltip", 3, "ngClass"], [1, "tooltip", 3, "ngClass", "innerHTML"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TooltipComponent_div_0_Template, 2, 11, "div", 0)(1, TooltipComponent_div_1_Template, 1, 11, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isHTML(ctx.tooltip));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isHTML(ctx.tooltip));
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: [".tooltip[_ngcontent-%COMP%]{position:fixed;background-color:#000;border-radius:4px;color:#fff;font-family:Arial,sans-serif;padding:3px 6px;font-size:5px;opacity:0}.tooltip[_ngcontent-%COMP%]:before{content:\"\";width:0;height:0;position:absolute}.tooltip--visible[_ngcontent-%COMP%]{opacity:1;font-size:10px;transition:all .3s}.tooltip--light[_ngcontent-%COMP%]{background-color:#fff;color:#000}.tooltip--light[_ngcontent-%COMP%]:before{border:5px solid white}.tooltip--dark[_ngcontent-%COMP%]{background-color:#4b4b4b;color:#fff}.tooltip--dark[_ngcontent-%COMP%]:before{border:5px solid #4b4b4b}.tooltip--below[_ngcontent-%COMP%]{transform:translate(-50%);margin-top:7px}.tooltip--below[_ngcontent-%COMP%]:before{border-left-color:transparent;border-right-color:transparent;border-top:none;left:calc(50% - 5px);top:-5px}.tooltip--above[_ngcontent-%COMP%]{transform:translate(-50%,-100%);margin-bottom:7px}.tooltip--above[_ngcontent-%COMP%]:before{border-left-color:transparent;border-right-color:transparent;border-bottom:none;left:calc(50% - 5px);bottom:-5px}.tooltip--left[_ngcontent-%COMP%]{transform:translate(calc(-100% - 7px),-50%)}.tooltip--left[_ngcontent-%COMP%]:before{border-top-color:transparent;border-bottom-color:transparent;border-right:none;right:-5px;top:calc(50% - 5px)}.tooltip--right[_ngcontent-%COMP%]{transform:translateY(-50%);margin-left:7px}.tooltip--right[_ngcontent-%COMP%]:before{border-top-color:transparent;border-bottom-color:transparent;border-left:none;left:-5px;top:calc(50% - 5px)}.tooltip--dynamic[_ngcontent-%COMP%]{margin-left:20px}.tooltip--dynamic[_ngcontent-%COMP%]:before{display:none}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipComponent, [{
        type: Component,
        args: [{ selector: 'tooltip', template: "<div *ngIf=\"!isHTML(tooltip)\" class=\"tooltip\" [ngClass]=\"['tooltip--'+position, 'tooltip--'+theme]\"\r\n  [class.tooltip--visible]=\"visible\" [style.left]=\"left + 'px'\" [style.top]=\"top + 'px'\">\r\n  {{tooltip}}\r\n</div>\r\n<div *ngIf=\"isHTML(tooltip)\" class=\"tooltip\" [ngClass]=\"['tooltip--'+position, 'tooltip--'+theme]\"\r\n  [class.tooltip--visible]=\"visible\" [style.left]=\"left + 'px'\" [style.top]=\"top + 'px'\" [innerHTML]=\"tooltip\">\r\n</div>", styles: [".tooltip{position:fixed;background-color:#000;border-radius:4px;color:#fff;font-family:Arial,sans-serif;padding:3px 6px;font-size:5px;opacity:0}.tooltip:before{content:\"\";width:0;height:0;position:absolute}.tooltip--visible{opacity:1;font-size:10px;transition:all .3s}.tooltip--light{background-color:#fff;color:#000}.tooltip--light:before{border:5px solid white}.tooltip--dark{background-color:#4b4b4b;color:#fff}.tooltip--dark:before{border:5px solid #4b4b4b}.tooltip--below{transform:translate(-50%);margin-top:7px}.tooltip--below:before{border-left-color:transparent;border-right-color:transparent;border-top:none;left:calc(50% - 5px);top:-5px}.tooltip--above{transform:translate(-50%,-100%);margin-bottom:7px}.tooltip--above:before{border-left-color:transparent;border-right-color:transparent;border-bottom:none;left:calc(50% - 5px);bottom:-5px}.tooltip--left{transform:translate(calc(-100% - 7px),-50%)}.tooltip--left:before{border-top-color:transparent;border-bottom-color:transparent;border-right:none;right:-5px;top:calc(50% - 5px)}.tooltip--right{transform:translateY(-50%);margin-left:7px}.tooltip--right:before{border-top-color:transparent;border-bottom-color:transparent;border-left:none;left:-5px;top:calc(50% - 5px)}.tooltip--dynamic{margin-left:20px}.tooltip--dynamic:before{display:none}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TooltipComponent, { className: "TooltipComponent", filePath: "lib\\directives\\tooltip\\tooltip.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUNEOUQsOEJBQ3lGO0lBQ3ZGLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBRjBELEFBQTNCLDBDQUEwQiwwQkFBeUI7SUFBdEYsa0RBQWtDO0lBRFUsK0dBQXFEO0lBRWpHLGNBQ0Y7SUFERSxnREFDRjs7O0lBQ0EseUJBRU07OztJQUQwRCxBQUEzQiwwQ0FBMEIsMEJBQXlCO0lBQXRGLGtEQUFrQztJQUFxRCxBQUQ1QywrR0FBcUQsZ0RBQ1k7O0FERzlHLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsUUFBUSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ3BELEtBQUssR0FBaUIsWUFBWSxDQUFDLE9BQU8sQ0FBQztJQUMzQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNULEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDUixPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRWhCO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzBFQWxCVSxnQkFBZ0I7NkRBQWhCLGdCQUFnQjtZQ0o3QixBQUpBLGtFQUN5RixxREFJc0I7O1lBTHpHLCtDQUFzQjtZQUl0QixjQUFxQjtZQUFyQiw4Q0FBcUI7OztpRkRJZCxnQkFBZ0I7Y0FMNUIsU0FBUzsyQkFDRSxTQUFTOztrRkFJUixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUb29sdGlwUG9zaXRpb24sIFRvb2x0aXBUaGVtZX0gZnJvbSBcIi4vdG9vbHRpcC5lbnVtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcG9zaXRpb246IFRvb2x0aXBQb3NpdGlvbiA9IFRvb2x0aXBQb3NpdGlvbi5ERUZBVUxUO1xyXG4gIHRoZW1lOiBUb29sdGlwVGhlbWUgPSBUb29sdGlwVGhlbWUuREVGQVVMVDtcclxuICB0b29sdGlwID0gJyc7XHJcbiAgbGVmdCA9IDA7XHJcbiAgdG9wID0gMDtcclxuICB2aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBpc0hUTUwodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVnZXggPSAvKDwoW14+XSspPikvaWc7XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XHJcbiAgfVxyXG59IiwiPGRpdiAqbmdJZj1cIiFpc0hUTUwodG9vbHRpcClcIiBjbGFzcz1cInRvb2x0aXBcIiBbbmdDbGFzc109XCJbJ3Rvb2x0aXAtLScrcG9zaXRpb24sICd0b29sdGlwLS0nK3RoZW1lXVwiXHJcbiAgW2NsYXNzLnRvb2x0aXAtLXZpc2libGVdPVwidmlzaWJsZVwiIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCIgW3N0eWxlLnRvcF09XCJ0b3AgKyAncHgnXCI+XHJcbiAge3t0b29sdGlwfX1cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJpc0hUTUwodG9vbHRpcClcIiBjbGFzcz1cInRvb2x0aXBcIiBbbmdDbGFzc109XCJbJ3Rvb2x0aXAtLScrcG9zaXRpb24sICd0b29sdGlwLS0nK3RoZW1lXVwiXHJcbiAgW2NsYXNzLnRvb2x0aXAtLXZpc2libGVdPVwidmlzaWJsZVwiIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCIgW3N0eWxlLnRvcF09XCJ0b3AgKyAncHgnXCIgW2lubmVySFRNTF09XCJ0b29sdGlwXCI+XHJcbjwvZGl2PiJdfQ==