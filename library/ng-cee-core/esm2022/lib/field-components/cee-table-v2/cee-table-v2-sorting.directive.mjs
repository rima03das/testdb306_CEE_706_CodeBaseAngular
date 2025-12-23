import { Directive, Input, EventEmitter, Output } from "@angular/core";
import * as i0 from "@angular/core";
const rotate = {
    asc: 'desc',
    desc: '',
    '': 'asc',
};
export const compare = (v1, v2) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
export class SortableHeaderDirective {
    renderer;
    el;
    sortable = '';
    direction = '';
    sorting;
    sort = new EventEmitter();
    column;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.column = this.el.nativeElement;
    }
    ngOnInit() {
    }
    rotate() {
        if (this.sorting == 'true') {
            this.direction = rotate[this.direction];
            this.sort.emit({ column: this.sortable, direction: this.direction });
        }
    }
    static ɵfac = function SortableHeaderDirective_Factory(t) { return new (t || SortableHeaderDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SortableHeaderDirective, selectors: [["span", "sortable", ""]], hostVars: 4, hostBindings: function SortableHeaderDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function SortableHeaderDirective_click_HostBindingHandler() { return ctx.rotate(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        } }, inputs: { sortable: "sortable", direction: "direction", sorting: "sorting" }, outputs: { sort: "sort" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortableHeaderDirective, [{
        type: Directive,
        args: [{
                selector: 'span[sortable]',
                standalone: true,
                host: {
                    '[class.asc]': 'direction === "asc"',
                    '[class.desc]': 'direction === "desc"',
                    '(click)': 'rotate()',
                },
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { sortable: [{
            type: Input
        }], direction: [{
            type: Input
        }], sorting: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRhYmxlLXYyLXNvcnRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlLXYyL2NlZS10YWJsZS12Mi1zb3J0aW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLdEcsTUFBTSxNQUFNLEdBQXFDO0lBQy9DLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLEVBQUU7SUFDUixFQUFFLEVBQUUsS0FBSztDQUNWLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FDckIsRUFBb0MsRUFDcEMsRUFBb0MsRUFDcEMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFnQnRDLE1BQU0sT0FBTyx1QkFBdUI7SUFPZDtJQUE2QjtJQU54QyxRQUFRLEdBQWUsRUFBRSxDQUFDO0lBQzFCLFNBQVMsR0FBa0IsRUFBRSxDQUFDO0lBQzlCLE9BQU8sQ0FBTTtJQUNaLElBQUksR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBRXZDLE1BQU0sQ0FBYztJQUM1QixZQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQztZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO2lGQW5CVSx1QkFBdUI7NkRBQXZCLHVCQUF1QjtZQUF2Qiw0RkFBQSxZQUFRLElBQWU7O1lBQXZCLHdDQUFjLEtBQUssQ0FBSSwyQkFBVCxNQUFNLENBQUc7OztpRkFBdkIsdUJBQXVCO2NBVG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFO29CQUNKLGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLGNBQWMsRUFBRSxzQkFBc0I7b0JBQ3RDLFNBQVMsRUFBRSxVQUFVO2lCQUN0QjthQUNGO21FQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0ksSUFBSTtrQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIFJlbmRlcmVyMiwgSW5wdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFNvcnRDb2x1bW4gPSAnJztcclxuZXhwb3J0IHR5cGUgU29ydERpcmVjdGlvbiA9ICdhc2MnIHwgJ2Rlc2MnIHwgJyc7XHJcblxyXG5jb25zdCByb3RhdGU6IHsgW2tleTogc3RyaW5nXTogU29ydERpcmVjdGlvbiB9ID0ge1xyXG4gIGFzYzogJ2Rlc2MnLFxyXG4gIGRlc2M6ICcnLFxyXG4gICcnOiAnYXNjJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlID0gKFxyXG4gIHYxOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSxcclxuICB2Mjogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IERhdGVcclxuKSA9PiAodjEgPCB2MiA/IC0xIDogdjEgPiB2MiA/IDEgOiAwKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU29ydEV2ZW50IHtcclxuICBjb2x1bW46IFNvcnRDb2x1bW47XHJcbiAgZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3NwYW5bc29ydGFibGVdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYXNjXSc6ICdkaXJlY3Rpb24gPT09IFwiYXNjXCInLFxyXG4gICAgJ1tjbGFzcy5kZXNjXSc6ICdkaXJlY3Rpb24gPT09IFwiZGVzY1wiJyxcclxuICAgICcoY2xpY2spJzogJ3JvdGF0ZSgpJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVIZWFkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgQElucHV0KCkgc29ydGFibGU6IFNvcnRDb2x1bW4gPSAnJztcclxuICBASW5wdXQoKSBkaXJlY3Rpb246IFNvcnREaXJlY3Rpb24gPSAnJztcclxuICBASW5wdXQoKSBzb3J0aW5nOiBhbnk7XHJcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFNvcnRFdmVudD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBjb2x1bW46IEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5jb2x1bW4gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHJvdGF0ZSgpIHtcclxuICAgIGlmKHRoaXMuc29ydGluZyA9PSAndHJ1ZScpe1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IHJvdGF0ZVt0aGlzLmRpcmVjdGlvbl07XHJcbiAgICAgIHRoaXMuc29ydC5lbWl0KHsgY29sdW1uOiB0aGlzLnNvcnRhYmxlLCBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==