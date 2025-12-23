import { Directive, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class ResizeColumnDirective {
    renderer;
    el;
    resizable;
    index;
    startX;
    startWidth;
    column;
    table;
    pressed;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.column = this.el.nativeElement;
    }
    ngOnInit() {
        if (this.resizable) {
            const row = this.renderer.parentNode(this.column);
            const thead = this.renderer.parentNode(row);
            this.table = this.renderer.parentNode(thead);
            const resizer = this.renderer.createElement("span");
            this.renderer.addClass(resizer, "resize-holder");
            this.renderer.appendChild(this.column, resizer);
            this.renderer.listen(resizer, "mousedown", this.onMouseDown);
        }
    }
    onMouseDown = (event) => {
        this.pressed = true;
        this.startX = event.pageX;
        this.startWidth = this.column.offsetWidth;
        this.renderer.listen(this.table, "mousemove", this.onMouseMove);
        this.renderer.listen("document", "mouseup", this.onMouseUp);
    };
    onMouseMove = (event) => {
        event.preventDefault();
        const offset = 35;
        if (this.pressed === true && event.buttons) {
            this.renderer.addClass(this.table, "resizing");
            // Calculate width of column
            let width = this.startWidth + (event.pageX - this.startX - offset);
            const tableCells = Array.from(this.table.querySelectorAll(".mat-row")).map((row) => row.querySelectorAll(".mat-cell").item(this.index));
            // Set table header width
            if (this.column != null) {
                this.renderer.setStyle(this.column, "width", `${width}px`);
                this.renderer.setStyle(this.column, "max-width", `${width}px`);
                this.renderer.setStyle(this.column, "word-wrap", "break-word");
                this.renderer.setStyle(this.column, "overflow", "hidden");
                this.renderer.setStyle(this.column, "text-overflow", "ellipsis");
                this.renderer.setStyle(this.column, "white-space", "nowrap");
            }
            // Set table cells width
            for (const cell of tableCells) {
                if (cell != null) {
                    const elementWithLabelClass = this.findElementWithLabelClass(cell);
                    if (elementWithLabelClass != null) {
                        this.renderer.setStyle(elementWithLabelClass, "width", `${width}px`);
                        this.renderer.setStyle(elementWithLabelClass, "max-width", `${width}px`);
                        this.renderer.setStyle(elementWithLabelClass, "overflow", "hidden");
                        this.renderer.setStyle(elementWithLabelClass, "white-space", "nowrap");
                        this.renderer.setStyle(elementWithLabelClass, "text-overflow", "ellipsis");
                    }
                }
            }
        }
    };
    findElementWithLabelClass = (element) => {
        if (element.classList.contains('resizeNew')) {
            return element;
        }
        const children = element.children;
        for (let i = 0; i < children.length; i++) {
            const descendantWithLabelClass = this.findElementWithLabelClass(children[i]);
            if (descendantWithLabelClass) {
                return descendantWithLabelClass;
            }
        }
        return null;
    };
    onMouseUp = (event) => {
        if (this.pressed) {
            this.pressed = false;
            this.renderer.removeClass(this.table, "resizing");
            event.stopPropagation();
        }
    };
    static ɵfac = function ResizeColumnDirective_Factory(t) { return new (t || ResizeColumnDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ResizeColumnDirective, selectors: [["", "resizeColumn", ""]], inputs: { resizable: [i0.ɵɵInputFlags.None, "resizeColumn", "resizable"], index: "index" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResizeColumnDirective, [{
        type: Directive,
        args: [{
                selector: "[resizeColumn]",
                standalone: true,
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { resizable: [{
            type: Input,
            args: ["resizeColumn"]
        }], index: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRhYmxlLXJlc2l6ZS1jb2x1bW4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlL2NlZS10YWJsZS1yZXNpemUtY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQXVDLE1BQU0sZUFBZSxDQUFDOztBQU16RyxNQUFNLE9BQU8scUJBQXFCO0lBU1o7SUFBNkI7SUFSMUIsU0FBUyxDQUFVO0lBQ2pDLEtBQUssQ0FBUztJQUNmLE1BQU0sQ0FBUztJQUNmLFVBQVUsQ0FBUztJQUNuQixNQUFNLENBQWM7SUFDcEIsS0FBSyxDQUFjO0lBQ25CLE9BQU8sQ0FBVTtJQUV6QixZQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFD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QUFDO2FBQ2pDO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQTtJQUNELFNBQVMsR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDLENBQUM7K0VBNUZTLHFCQUFxQjs2REFBckIscUJBQXFCOztpRkFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixVQUFVLEVBQUUsSUFBSTthQUNqQjttRUFFd0IsU0FBUztrQkFBL0IsS0FBSzttQkFBQyxjQUFjO1lBQ1osS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIFJlbmRlcmVyMiwgSW5wdXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXNpemVDb2x1bW5dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2l6ZUNvbHVtbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KFwicmVzaXplQ29sdW1uXCIpIHJlc2l6YWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhcnRYOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGFydFdpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjb2x1bW46IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgdGFibGU6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlc3NlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmNvbHVtbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMucmVzaXphYmxlKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmNvbHVtbik7XHJcbiAgICAgIGNvbnN0IHRoZWFkID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHJvdyk7XHJcbiAgICAgIHRoaXMudGFibGUgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhlYWQpO1xyXG4gICAgICBjb25zdCByZXNpemVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVyLCBcInJlc2l6ZS1ob2xkZXJcIik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb2x1bW4sIHJlc2l6ZXIpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihyZXNpemVyLCBcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgIH1cclxuICAgfVxyXG5cclxuICBvbk1vdXNlRG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgdGhpcy5wcmVzc2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhcnRYID0gZXZlbnQucGFnZVg7XHJcbiAgICB0aGlzLnN0YXJ0V2lkdGggPSB0aGlzLmNvbHVtbi5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMudGFibGUsIFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xyXG4gIH07XHJcblxyXG4gIG9uTW91c2VNb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gMzU7XHJcbiAgICBpZiAodGhpcy5wcmVzc2VkID09PSB0cnVlICYmIGV2ZW50LmJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlLCBcInJlc2l6aW5nXCIpO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHdpZHRoIG9mIGNvbHVtblxyXG4gICAgICBsZXQgd2lkdGggPSB0aGlzLnN0YXJ0V2lkdGggKyAoZXZlbnQucGFnZVggLSB0aGlzLnN0YXJ0WCAtIG9mZnNldCk7XHJcbiAgICAgIGNvbnN0IHRhYmxlQ2VsbHMgPSBBcnJheS5mcm9tKHRoaXMudGFibGUucXVlcnlTZWxlY3RvckFsbChcIi5tYXQtcm93XCIpKS5tYXAoXHJcbiAgICAgICAgKHJvdzogYW55KSA9PiByb3cucXVlcnlTZWxlY3RvckFsbChcIi5tYXQtY2VsbFwiKS5pdGVtKHRoaXMuaW5kZXgpXHJcbiAgICAgICk7XHJcbiAgICAgXHJcbiAgICAgIC8vIFNldCB0YWJsZSBoZWFkZXIgd2lkdGhcclxuICAgICAgaWYodGhpcy5jb2x1bW4gIT0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbHVtbiwgXCJ3aWR0aFwiLCBgJHt3aWR0aH1weGApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb2x1bW4sIFwibWF4LXdpZHRoXCIsIGAke3dpZHRofXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbHVtbiwgXCJ3b3JkLXdyYXBcIiwgXCJicmVhay13b3JkXCIpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb2x1bW4sIFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbHVtbiwgXCJ0ZXh0LW92ZXJmbG93XCIsIFwiZWxsaXBzaXNcIik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbHVtbiwgXCJ3aGl0ZS1zcGFjZVwiLCBcIm5vd3JhcFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0IHRhYmxlIGNlbGxzIHdpZHRoXHJcbiAgICAgIGZvciAoY29uc3QgY2VsbCBvZiB0YWJsZUNlbGxzKSB7XHJcbiAgICAgICAgIGlmKGNlbGwgIT0gbnVsbCl7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50V2l0aExhYmVsQ2xhc3MgPSB0aGlzLmZpbmRFbGVtZW50V2l0aExhYmVsQ2xhc3MoY2VsbCk7XHJcbiAgICAgICAgICBpZihlbGVtZW50V2l0aExhYmVsQ2xhc3MgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudFdpdGhMYWJlbENsYXNzLCBcIndpZHRoXCIsIGAke3dpZHRofXB4YCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudFdpdGhMYWJlbENsYXNzLCBcIm1heC13aWR0aFwiLCBgJHt3aWR0aH1weGApO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnRXaXRoTGFiZWxDbGFzcywgXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50V2l0aExhYmVsQ2xhc3MsIFwid2hpdGUtc3BhY2VcIiwgXCJub3dyYXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudFdpdGhMYWJlbENsYXNzLCBcInRleHQtb3ZlcmZsb3dcIiwgXCJlbGxpcHNpc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmaW5kRWxlbWVudFdpdGhMYWJlbENsYXNzID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncmVzaXplTmV3JykpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnRXaXRoTGFiZWxDbGFzcyA9IHRoaXMuZmluZEVsZW1lbnRXaXRoTGFiZWxDbGFzcyhjaGlsZHJlbltpXSk7XHJcbiAgICAgIGlmIChkZXNjZW5kYW50V2l0aExhYmVsQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4gZGVzY2VuZGFudFdpdGhMYWJlbENsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gbnVsbDsgXHJcbiAgfVxyXG4gIG9uTW91c2VVcCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJlc3NlZCkge1xyXG4gICAgICB0aGlzLnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlLCBcInJlc2l6aW5nXCIpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==