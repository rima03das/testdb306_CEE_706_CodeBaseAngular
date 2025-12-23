import { ComponentFactoryResolver, Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicComponentHandlerService {
    factoryResolver;
    rootViewContainer;
    dynamicComponents = [];
    constructor(factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    registerComponent(name, component) {
        this.dynamicComponents[name] = component;
    }
    unregisterComponents() {
        this.dynamicComponents = [];
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addDynamicComponent(name, cInput) {
        const factory = this.factoryResolver.resolveComponentFactory(this.dynamicComponents[name]);
        const component = factory.create(this.rootViewContainer.parentInjector);
        for (const input of factory.inputs) {
            if (cInput && cInput[input.propName]) {
                component.setInput(input.propName, cInput[input.propName]);
            }
        }
        this.rootViewContainer.insert(component.hostView);
    }
    static ɵfac = function DynamicComponentHandlerService_Factory(t) { return new (t || DynamicComponentHandlerService)(i0.ɵɵinject(ComponentFactoryResolver)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DynamicComponentHandlerService, factory: DynamicComponentHandlerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicComponentHandlerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [ComponentFactoryResolver]
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQtaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3NlcnZpY2VzL2R5bmFtaWMtY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxlQUFlLENBQUM7O0FBS3ZCLE1BQU0sT0FBTyw4QkFBOEI7SUFFMUMsZUFBZSxDQUEyQjtJQUMxQyxpQkFBaUIsQ0FBQztJQUNsQixpQkFBaUIsR0FBVSxFQUFFLENBQUM7SUFFOUIsWUFBOEMsZUFBZTtRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBWSxFQUFFLFNBQWM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsb0JBQW9CO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHVCQUF1QixDQUFDLGdCQUFnQjtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7SUFDM0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQVksRUFBRSxNQUFZO1FBQzdDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0YsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEUsS0FBSyxNQUFNLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ25DLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDRDtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7d0ZBL0JXLDhCQUE4QixjQU10Qix3QkFBd0I7Z0VBTmhDLDhCQUE4QixXQUE5Qiw4QkFBOEIsbUJBRjlCLE1BQU07O2lGQUVOLDhCQUE4QjtjQUgxQyxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQU9hLE1BQU07dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0SW5qZWN0YWJsZSxcclxuXHRJbmplY3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRIYW5kbGVyU2VydmljZSB7XHJcblxyXG5cdGZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cdHJvb3RWaWV3Q29udGFpbmVyO1xyXG5cdGR5bmFtaWNDb21wb25lbnRzOiBhbnlbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgZmFjdG9yeVJlc29sdmVyKSB7XHJcblx0XHR0aGlzLmZhY3RvcnlSZXNvbHZlciA9IGZhY3RvcnlSZXNvbHZlcjtcclxuXHR9XHJcblxyXG5cdHJlZ2lzdGVyQ29tcG9uZW50KG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBhbnkpIHtcclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cclxuXHR1bnJlZ2lzdGVyQ29tcG9uZW50cygpIHtcclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudHMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZpZXdDb250YWluZXJSZWYpIHtcclxuXHRcdHRoaXMucm9vdFZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyUmVmO1xyXG5cdH1cclxuXHJcblx0YWRkRHluYW1pY0NvbXBvbmVudChuYW1lOiBzdHJpbmcsIGNJbnB1dD86IGFueSkge1xyXG5cdFx0Y29uc3QgZmFjdG9yeSA9IHRoaXMuZmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZHluYW1pY0NvbXBvbmVudHNbbmFtZV0pO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUodGhpcy5yb290Vmlld0NvbnRhaW5lci5wYXJlbnRJbmplY3Rvcik7XHJcblx0XHRmb3IgKGNvbnN0IGlucHV0IG9mIGZhY3RvcnkuaW5wdXRzKSB7XHJcblx0XHRcdGlmIChjSW5wdXQgJiYgY0lucHV0W2lucHV0LnByb3BOYW1lXSkge1xyXG5cdFx0XHRcdGNvbXBvbmVudC5zZXRJbnB1dChpbnB1dC5wcm9wTmFtZSwgY0lucHV0W2lucHV0LnByb3BOYW1lXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMucm9vdFZpZXdDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=