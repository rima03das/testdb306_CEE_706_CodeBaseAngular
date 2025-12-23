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
                standalone: true
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { resizable: [{
            type: Input,
            args: ["resizeColumn"]
        }], index: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRhYmxlLXYyLXJlc2l6ZS1jb2x1bW4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlLXYyL2NlZS10YWJsZS12Mi1yZXNpemUtY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQXVDLE1BQU0sZUFBZSxDQUFDOztBQU16RyxNQUFNLE9BQU8scUJBQXFCO0lBU1o7SUFBNkI7SUFSMUIsU0FBUyxDQUFVO0lBQ2pDLEtBQUssQ0FBUztJQUNmLE1BQU0sQ0FBUztJQUNmLFVBQVUsQ0FBUztJQUNuQixNQUFNLENBQWM7SUFDcEIsS0FBSyxDQUFjO0lBQ25CLE9BQU8sQ0FBVTtJQUV6QixZQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMs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LHdCQUF3QixDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQTtJQUNELFNBQVMsR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDLENBQUM7K0VBNUZTLHFCQUFxQjs2REFBckIscUJBQXFCOztpRkFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixVQUFVLEVBQUUsSUFBSTthQUNqQjttRUFFd0IsU0FBUztrQkFBL0IsS0FBSzttQkFBQyxjQUFjO1lBQ1osS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIFJlbmRlcmVyMiwgSW5wdXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXNpemVDb2x1bW5dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzaXplQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoXCJyZXNpemVDb2x1bW5cIikgcmVzaXphYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGFydFg6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXJ0V2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGNvbHVtbjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSB0YWJsZTogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVzc2VkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuY29sdW1uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5yZXNpemFibGUpIHtcclxuICAgICAgY29uc3Qgcm93ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuY29sdW1uKTtcclxuICAgICAgY29uc3QgdGhlYWQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUocm93KTtcclxuICAgICAgdGhpcy50YWJsZSA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGVhZCk7XHJcbiAgICAgIGNvbnN0IHJlc2l6ZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHJlc2l6ZXIsIFwicmVzaXplLWhvbGRlclwiKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvbHVtbiwgcmVzaXplcik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHJlc2l6ZXIsIFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gICAgfVxyXG4gICB9XHJcblxyXG4gIG9uTW91c2VEb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnByZXNzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydFggPSBldmVudC5wYWdlWDtcclxuICAgIHRoaXMuc3RhcnRXaWR0aCA9IHRoaXMuY29sdW1uLm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy50YWJsZSwgXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Nb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAzNTtcclxuICAgIGlmICh0aGlzLnByZXNzZWQgPT09IHRydWUgJiYgZXZlbnQuYnV0dG9ucykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGUsIFwicmVzaXppbmdcIik7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgd2lkdGggb2YgY29sdW1uXHJcbiAgICAgIGxldCB3aWR0aCA9IHRoaXMuc3RhcnRXaWR0aCArIChldmVudC5wYWdlWCAtIHRoaXMuc3RhcnRYIC0gb2Zmc2V0KTtcclxuICAgICAgY29uc3QgdGFibGVDZWxscyA9IEFycmF5LmZyb20odGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hdC1yb3dcIikpLm1hcChcclxuICAgICAgICAocm93OiBhbnkpID0+IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hdC1jZWxsXCIpLml0ZW0odGhpcy5pbmRleClcclxuICAgICAgKTtcclxuICAgICBcclxuICAgICAgLy8gU2V0IHRhYmxlIGhlYWRlciB3aWR0aFxyXG4gICAgICBpZih0aGlzLmNvbHVtbiAhPSBudWxsKXtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29sdW1uLCBcIndpZHRoXCIsIGAke3dpZHRofXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbHVtbiwgXCJtYXgtd2lkdGhcIiwgYCR7d2lkdGh9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29sdW1uLCBcIndvcmQtd3JhcFwiLCBcImJyZWFrLXdvcmRcIik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbHVtbiwgXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29sdW1uLCBcInRleHQtb3ZlcmZsb3dcIiwgXCJlbGxpcHNpc1wiKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29sdW1uLCBcIndoaXRlLXNwYWNlXCIsIFwibm93cmFwXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZXQgdGFibGUgY2VsbHMgd2lkdGhcclxuICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHRhYmxlQ2VsbHMpIHtcclxuICAgICAgICAgaWYoY2VsbCAhPSBudWxsKXtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnRXaXRoTGFiZWxDbGFzcyA9IHRoaXMuZmluZEVsZW1lbnRXaXRoTGFiZWxDbGFzcyhjZWxsKTtcclxuICAgICAgICAgIGlmKGVsZW1lbnRXaXRoTGFiZWxDbGFzcyAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50V2l0aExhYmVsQ2xhc3MsIFwid2lkdGhcIiwgYCR7d2lkdGh9cHhgKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50V2l0aExhYmVsQ2xhc3MsIFwibWF4LXdpZHRoXCIsIGAke3dpZHRofXB4YCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudFdpdGhMYWJlbENsYXNzLCBcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnRXaXRoTGFiZWxDbGFzcywgXCJ3aGl0ZS1zcGFjZVwiLCBcIm5vd3JhcFwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50V2l0aExhYmVsQ2xhc3MsIFwidGV4dC1vdmVyZmxvd1wiLCBcImVsbGlwc2lzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZpbmRFbGVtZW50V2l0aExhYmVsQ2xhc3MgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemVOZXcnKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5jaGlsZHJlbjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGVzY2VuZGFudFdpdGhMYWJlbENsYXNzID0gdGhpcy5maW5kRWxlbWVudFdpdGhMYWJlbENsYXNzKGNoaWxkcmVuW2ldKTtcclxuICAgICAgaWYgKGRlc2NlbmRhbnRXaXRoTGFiZWxDbGFzcykge1xyXG4gICAgICAgIHJldHVybiBkZXNjZW5kYW50V2l0aExhYmVsQ2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBudWxsOyBcclxuICB9XHJcbiAgb25Nb3VzZVVwID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcmVzc2VkKSB7XHJcbiAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGUsIFwicmVzaXppbmdcIik7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19