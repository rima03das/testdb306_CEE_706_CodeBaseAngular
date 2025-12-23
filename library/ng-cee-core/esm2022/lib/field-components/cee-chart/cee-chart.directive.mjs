import { Directive, Input } from '@angular/core';
import * as c3 from 'c3';
import * as i0 from "@angular/core";
export class C3ChartDirective {
    el;
    renderer;
    chartData;
    chartColors;
    chartOptions;
    chartType;
    xAxisLabels;
    xAxisLabel;
    yAxisLabel;
    backgroundColor;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.generateChart();
    }
    ngOnChanges(changes) {
        if (changes.chartData || changes.chartOptions || changes.xAxisLabels || changes.xAxisLabel || changes.yAxisLabel || changes.backgroundColor) {
            this.generateChart();
        }
    }
    generateChart() {
        // Set the background color if provided
        let c3chart = {
            columns: []
        };
        let chartColorSetup = {
            colors: {},
            background: {},
            border: {}
        };
        this.chartData.forEach(x => {
            c3chart['columns'].push(x.data);
        });
        this.chartData.forEach(x => {
            chartColorSetup.colors[x.label] = x.colors;
            chartColorSetup.background[x.label] = x.backgroundColor;
            chartColorSetup.border[x.label] = x.borderColor;
        });
        if (this.backgroundColor) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
        }
        const options = {
            bindto: this.el.nativeElement,
            data: {
                ...c3chart,
                type: this.chartType,
                colors: chartColorSetup.colors,
            },
            axis: {
                x: {
                    type: 'category',
                    categories: this.xAxisLabels,
                    label: this.xAxisLabel
                },
                y: {
                    label: this.yAxisLabel
                }
            },
            legend: this.chartOptions?.legend,
            ...this.chartOptions
        };
        const chart = c3.generate(options);
        // Apply custom border colors after the chart is generated
        if (this.chartColors) {
            chart.data().forEach((data, index) => {
                const line = this.el.nativeElement.querySelector(`.c3-lines-${data.id}`);
                if (line) {
                    this.renderer.setStyle(line, 'stroke', chartColorSetup.border[data.id]);
                    this.renderer.setStyle(line, 'stroke', chartColorSetup.background[data.id]);
                }
            });
        }
    }
    static ɵfac = function C3ChartDirective_Factory(t) { return new (t || C3ChartDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: C3ChartDirective, selectors: [["", "appC3Chart", ""]], inputs: { chartData: "chartData", chartColors: "chartColors", chartOptions: "chartOptions", chartType: "chartType", xAxisLabels: "xAxisLabels", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", backgroundColor: "backgroundColor" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(C3ChartDirective, [{
        type: Directive,
        args: [{
                selector: '[appC3Chart]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], { chartData: [{
            type: Input
        }], chartColors: [{
            type: Input
        }], chartOptions: [{
            type: Input
        }], chartType: [{
            type: Input
        }], xAxisLabels: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWNoYXJ0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1jaGFydC9jZWUtY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQzs7QUFNekIsTUFBTSxPQUFPLGdCQUFnQjtJQVVQO0lBQXdCO0lBVG5DLFNBQVMsQ0FBTTtJQUNmLFdBQVcsQ0FBTTtJQUNqQixZQUFZLENBQU07SUFDbEIsU0FBUyxDQUFNO0lBQ2YsV0FBVyxDQUFXO0lBQ3RCLFVBQVUsQ0FBUztJQUNuQixVQUFVLENBQVM7SUFDbkIsZUFBZSxDQUFTO0lBRWpDLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFJLENBQUM7SUFFcEUsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDM0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVPLGFBQWE7UUFDbkIsdUNBQXVDO1FBQ3ZDLElBQUksT0FBTyxHQUFHO1lBQ1osT0FBTyxFQUFHLEVBQUU7U0FDYixDQUFDO1FBRUYsSUFBSSxlQUFlLEdBQUc7WUFDcEIsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRyxFQUFFO1NBQ1osQ0FBQTtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQ3hELGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3pGO1FBRUQsTUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQzdCLElBQUksRUFBRTtnQkFDSixHQUFHLE9BQU87Z0JBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNwQixNQUFNLEVBQUUsZUFBZSxDQUFDLE1BQU07YUFDL0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFO29CQUNELElBQUksRUFBRSxVQUFVO29CQUNoQixVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTtpQkFDdkI7Z0JBQ0QsQ0FBQyxFQUFFO29CQUNELEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTtpQkFDdkI7YUFDRjtZQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU07WUFDakMsR0FBRyxJQUFJLENBQUMsWUFBWTtTQUNyQixDQUFDO1FBQ0YsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQywwREFBMEQ7UUFDMUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDN0U7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0wsQ0FBQzswRUEvRVUsZ0JBQWdCOzZEQUFoQixnQkFBZ0I7O2lGQUFoQixnQkFBZ0I7Y0FKNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixVQUFVLEVBQUUsSUFBSTthQUNqQjttRUFFVSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgYzMgZnJvbSAnYzMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwQzNDaGFydF0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDM0NoYXJ0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGNoYXJ0RGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGNoYXJ0Q29sb3JzOiBhbnk7XHJcbiAgQElucHV0KCkgY2hhcnRPcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgY2hhcnRUeXBlOiBhbnk7XHJcbiAgQElucHV0KCkgeEF4aXNMYWJlbHM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHhBeGlzTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSB5QXhpc0xhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNoYXJ0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5jaGFydERhdGEgfHwgY2hhbmdlcy5jaGFydE9wdGlvbnMgfHwgY2hhbmdlcy54QXhpc0xhYmVscyB8fCBjaGFuZ2VzLnhBeGlzTGFiZWwgfHwgY2hhbmdlcy55QXhpc0xhYmVsIHx8IGNoYW5nZXMuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVDaGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUNoYXJ0KCkge1xyXG4gICAgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGlmIHByb3ZpZGVkXHJcbiAgICBsZXQgYzNjaGFydCA9IHtcclxuICAgICAgY29sdW1ucyA6IFtdICBcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNoYXJ0Q29sb3JTZXR1cCA9IHtcclxuICAgICAgY29sb3JzIDp7fSxcclxuICAgICAgYmFja2dyb3VuZDoge30sXHJcbiAgICAgIGJvcmRlciA6IHt9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFydERhdGEuZm9yRWFjaCh4ID0+e1xyXG4gICAgICBjM2NoYXJ0Wydjb2x1bW5zJ10ucHVzaCh4LmRhdGEpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmNoYXJ0RGF0YS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICBjaGFydENvbG9yU2V0dXAuY29sb3JzW3gubGFiZWxdID0geC5jb2xvcnM7XHJcbiAgICAgIGNoYXJ0Q29sb3JTZXR1cC5iYWNrZ3JvdW5kW3gubGFiZWxdID0geC5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgIGNoYXJ0Q29sb3JTZXR1cC5ib3JkZXJbeC5sYWJlbF0gPSB4LmJvcmRlckNvbG9yO1xyXG4gICAgfSlcclxuXHJcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGJpbmR0bzogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4uYzNjaGFydCxcclxuICAgICAgICB0eXBlOiB0aGlzLmNoYXJ0VHlwZSxcclxuICAgICAgICBjb2xvcnM6IGNoYXJ0Q29sb3JTZXR1cC5jb2xvcnMsXHJcbiAgICAgIH0sXHJcbiAgICAgIGF4aXM6IHtcclxuICAgICAgICB4OiB7XHJcbiAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgY2F0ZWdvcmllczogdGhpcy54QXhpc0xhYmVscyxcclxuICAgICAgICAgIGxhYmVsOiB0aGlzLnhBeGlzTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHk6IHtcclxuICAgICAgICAgIGxhYmVsOiB0aGlzLnlBeGlzTGFiZWxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGxlZ2VuZDogdGhpcy5jaGFydE9wdGlvbnM/LmxlZ2VuZCxcclxuICAgICAgLi4udGhpcy5jaGFydE9wdGlvbnNcclxuICAgIH07XHJcbiAgICBjb25zdCBjaGFydCA9IGMzLmdlbmVyYXRlKG9wdGlvbnMpO1xyXG4gICAgICAvLyBBcHBseSBjdXN0b20gYm9yZGVyIGNvbG9ycyBhZnRlciB0aGUgY2hhcnQgaXMgZ2VuZXJhdGVkXHJcbiAgICAgIGlmICh0aGlzLmNoYXJ0Q29sb3JzKSB7XHJcbiAgICAgICAgY2hhcnQuZGF0YSgpLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jMy1saW5lcy0ke2RhdGEuaWR9YCk7XHJcbiAgICAgICAgICBpZiAobGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGxpbmUsICdzdHJva2UnLCBjaGFydENvbG9yU2V0dXAuYm9yZGVyW2RhdGEuaWRdKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsaW5lLCAnc3Ryb2tlJywgY2hhcnRDb2xvclNldHVwLmJhY2tncm91bmRbZGF0YS5pZF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==