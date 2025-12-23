import { Component, Input, forwardRef } from '@angular/core';
import { CommonUtil } from '../../utils/common-util';
import { ViewRendererComponent } from '../view-renderer/view-renderer.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared-events-service.service";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/router";
import * as i4 from "../../services/wfe-step-loader.service";
import * as i5 from "@angular/common";
function BreadcrumbCellRendererComponent_section_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const pos_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("breadcrumb-state-", ctx_r1.selectedValue.label, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r3)("position", pos_r4)("templateId", ctx_r1.templateId);
} }
function BreadcrumbCellRendererComponent_section_0_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background", ctx_r1.selectedValue.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.selectedValue.label, " ");
} }
function BreadcrumbCellRendererComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵlistener("click", function BreadcrumbCellRendererComponent_section_0_Template_section_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onBlockClick()); });
    i0.ɵɵtemplate(1, BreadcrumbCellRendererComponent_section_0_ng_container_1_Template, 2, 7, "ng-container", 2)(2, BreadcrumbCellRendererComponent_section_0_p_2_Template, 2, 3, "p", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate3("cee-breadcrumb-cell template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData.block_id, "  block-", ctx_r1.blockPosition, "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData.block_id);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedValue);
} }
export class BreadcrumbCellRendererComponent {
    sharedEventsServiceService;
    http;
    router;
    wfeStepLoaderService;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    blockId;
    blockPosition;
    templateId;
    mappingValues;
    blockRenderedData;
    additionalParameters = {};
    selectedValue = {
        label: 'default',
        color: '#fff'
    };
    variableObj = {};
    commonUtil;
    constructor(sharedEventsServiceService, http, router, wfeStepLoaderService) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.http = http;
        this.router = router;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.commonUtil = new CommonUtil();
    }
    ngOnInit() {
        this.wfeStepLoaderService.loadBlockByName(this.blockId).toPromise().then(data => {
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            if (this.blockRenderedData.additional_parameters.length > 0) {
                for (const paramter of this.blockRenderedData.additional_parameters) {
                    this.additionalParameters[paramter.parameter_type] = paramter.value;
                }
                if (this.additionalParameters['AssociatedStep'] == this.stepId) {
                    this.selectedValue = this.mappingValues['CURRENT_STEP'];
                }
            }
            //console.log(this.additionalParameters['AssociatedStep'], this.stepId);
        });
        this.variableObj['emitApiSuccessResponse_' + this.blockId] =
            this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                if (this.additionalParameters['AssociatedStep'] != this.stepId) {
                    if (res.hasOwnProperty(this.additionalParameters['AssociatedAPIKey'])) {
                        if (res[this.additionalParameters['AssociatedAPIKey']]) {
                            this.selectedValue = this.mappingValues[res[this.additionalParameters['AssociatedAPIKey']]];
                        }
                        else {
                            this.selectedValue = this.mappingValues['NULL_VALUE'];
                        }
                    }
                }
            }, err => {
                console.error(err);
            });
    }
    onBlockClick() {
        const navigateStepName = localStorage.getItem('navigateStepName') === 'true' ? true : false;
        // console.log('Breadcrumb Click', localStorage.getItem('AkitaStores'));
        if (this.additionalParameters['AssociatedStep']) {
            if (navigateStepName) {
                const routeMap = JSON.parse(localStorage.getItem('CEE_ROUTE_MAP'));
                this.router.navigateByUrl(routeMap[this.additionalParameters['AssociatedStep']]);
            }
            else {
                this.router.navigateByUrl('wfe/step/' + this.additionalParameters['AssociatedStep']);
            }
        }
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
    }
    static ɵfac = function BreadcrumbCellRendererComponent_Factory(t) { return new (t || BreadcrumbCellRendererComponent)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.HttpClient), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.WfeStepLoaderService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbCellRendererComponent, selectors: [["app-breadcrumb-cell-renderer"]], inputs: { stepId: "stepId", blockId: "blockId", blockPosition: "blockPosition", templateId: "templateId", mappingValues: "mappingValues" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[3, "id", "class", "click", 4, "ngIf"], [3, "click", "id"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-label", 3, "background", 4, "ngIf"], [3, "stepId", "field", "position", "templateId"], [1, "breadcrumb-label"]], template: function BreadcrumbCellRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BreadcrumbCellRendererComponent_section_0_Template, 3, 10, "section", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.blockRenderedData);
        } }, dependencies: () => [CommonModule, i5.NgForOf, i5.NgIf, ViewRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbCellRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb-cell-renderer', standalone: true, imports: [CommonModule, forwardRef(() => ViewRendererComponent)], template: "<section id=\"{{ blockRenderedData.block_id }}\"\r\n\t[attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n\t[attr.role]=\"additionalParameters['Aria-Role']\"\r\n\tclass=\"cee-breadcrumb-cell template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}}\"\r\n\t*ngIf=\"blockRenderedData\" (click)=\"onBlockClick()\">\r\n\t<ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos\">\r\n\t\t<app-view-renderer [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n\t\t\tclass=\"breadcrumb-state-{{selectedValue.label}}\">\r\n\t\t</app-view-renderer>\r\n\t</ng-container>\r\n\t<p *ngIf=\"selectedValue\" [style.background]=\"selectedValue.color\" class=\"breadcrumb-label\">{{selectedValue.label}}\r\n\t</p>\r\n</section>\r\n" }]
    }], () => [{ type: i1.SharedEventsServiceService }, { type: i2.HttpClient }, { type: i3.Router }, { type: i4.WfeStepLoaderService }], { stepId: [{
            type: Input
        }], blockId: [{
            type: Input
        }], blockPosition: [{
            type: Input
        }], templateId: [{
            type: Input
        }], mappingValues: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbCellRendererComponent, { className: "BreadcrumbCellRendererComponent", filePath: "lib\\components\\breadcrumb-cell-renderer\\breadcrumb-cell-renderer.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1jZWxsLXJlbmRlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL2JyZWFkY3J1bWItY2VsbC1yZW5kZXJlci9icmVhZGNydW1iLWNlbGwtcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYi1jZWxsLXJlbmRlcmVyL2JyZWFkY3J1bWItY2VsbC1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7SUNGOUMsNkJBQWlGO0lBQ2hGLHVDQUVvQjs7Ozs7O0lBRG5CLGNBQWdEO0lBQWhELDhFQUFnRDtJQURxQixBQUFqQixBQUFoQixBQUFsQixzQ0FBaUIsbUJBQWdCLG9CQUFpQixpQ0FBMEI7OztJQUloRyw0QkFBMkY7SUFBQSxZQUMzRjtJQUFBLGlCQUFJOzs7SUFEcUIsd0RBQXdDO0lBQTBCLGNBQzNGO0lBRDJGLDBEQUMzRjs7OztJQVhELGtDQUlvRDtJQUF6QixnTUFBUyxxQkFBYyxLQUFDO0lBTWxELEFBTEEsNEdBQWlGLHlFQUtVO0lBRTVGLGlCQUFVOzs7SUFUVCxpS0FBbUg7SUFIM0csaUVBQXFDOztJQUtiLGNBQW1DO0lBQW5DLCtEQUFtQztJQUsvRCxjQUFtQjtJQUFuQiwyQ0FBbUI7O0FET3hCLE1BQU0sT0FBTywrQkFBK0I7SUFtQnBCO0lBQWdFO0lBQTBCO0lBQ2xHO0lBbkJaLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxNQUFNLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUN0TixlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHlDQUF5QyxDQUFDO0lBRXhFLE1BQU0sQ0FBTTtJQUNwQixPQUFPLENBQU07SUFDYixhQUFhLENBQVM7SUFDdEIsVUFBVSxDQUFNO0lBQ2hCLGFBQWEsQ0FBTTtJQUU1QixpQkFBaUIsQ0FBTTtJQUN2QixvQkFBb0IsR0FBRyxFQUFFLENBQUM7SUFDMUIsYUFBYSxHQUFHO1FBQ1osS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLE1BQU07S0FDaEIsQ0FBQztJQUNGLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsVUFBVSxDQUFhO0lBRXZCLFlBQW9CLDBCQUFzRCxFQUFVLElBQWdCLEVBQVUsTUFBYyxFQUNoSCxvQkFBMEM7UUFEbEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hILHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pELEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFO29CQUNqRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQ3ZFO2dCQUNELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUMzRDthQUNKO1lBQ0Qsd0VBQXdFO1FBRTVFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25FLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDNUQsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUU7d0JBQ25FLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUU7NEJBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMvRjs2QkFBTTs0QkFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQ3pEO3FCQUNKO2lCQUNKO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsWUFBWTtRQUNSLE1BQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUYsd0VBQXdFO1FBQ3hFLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDN0MsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEY7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7YUFDeEY7U0FDSjtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QztTQUNKO0lBQ0wsQ0FBQzt5RkExRVEsK0JBQStCOzZEQUEvQiwrQkFBK0I7WUNqQjVDLHlGQUlvRDs7WUFBbEQsNENBQXVCO2tDRFVYLFlBQVksdUJBQW1CLHFCQUFxQjs7aUZBR3JELCtCQUErQjtjQVIzQyxTQUFTOzJCQUNJLDhCQUE4QixjQUc1QixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUM7NElBTy9DLE1BQU07a0JBQXRCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7O2tGQVJHLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmlld1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldy1yZW5kZXJlci92aWV3LXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWJyZWFkY3J1bWItY2VsbC1yZW5kZXJlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi1jZWxsLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWItY2VsbC1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIGZvcndhcmRSZWYoKCkgPT4gVmlld1JlbmRlcmVyQ29tcG9uZW50KV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ2VsbFJlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBibG9ja0lkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBibG9ja1Bvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZUlkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYXBwaW5nVmFsdWVzOiBhbnk7XHJcblxyXG4gICAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXJzID0ge307XHJcbiAgICBzZWxlY3RlZFZhbHVlID0ge1xyXG4gICAgICAgIGxhYmVsOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJ1xyXG4gICAgfTtcclxuICAgIHZhcmlhYmxlT2JqID0ge307XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuYmxvY2tJZCkudG9Qcm9taXNlKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1twYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydBc3NvY2lhdGVkU3RlcCddID09IHRoaXMuc3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5tYXBwaW5nVmFsdWVzWydDVVJSRU5UX1NURVAnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Fzc29jaWF0ZWRTdGVwJ10sIHRoaXMuc3RlcElkKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArIHRoaXMuYmxvY2tJZF0gPVxyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2Uuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQXNzb2NpYXRlZFN0ZXAnXSAhPSB0aGlzLnN0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuaGFzT3duUHJvcGVydHkodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQXNzb2NpYXRlZEFQSUtleSddKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Fzc29jaWF0ZWRBUElLZXknXV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMubWFwcGluZ1ZhbHVlc1tyZXNbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQXNzb2NpYXRlZEFQSUtleSddXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLm1hcHBpbmdWYWx1ZXNbJ05VTExfVkFMVUUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CbG9ja0NsaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRlU3RlcE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmF2aWdhdGVTdGVwTmFtZScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0JyZWFkY3J1bWIgQ2xpY2snLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWtpdGFTdG9yZXMnKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Fzc29jaWF0ZWRTdGVwJ10pIHtcclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRlU3RlcE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWFwID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX1JPVVRFX01BUCcpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocm91dGVNYXBbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQXNzb2NpYXRlZFN0ZXAnXV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnd2ZlL3N0ZXAvJyArIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Fzc29jaWF0ZWRTdGVwJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCI8c2VjdGlvbiBpZD1cInt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19XCJcclxuXHRbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyc1snQXJpYS1MYWJlbCddIDogdW5kZWZpbmVkXCJcclxuXHRbYXR0ci5yb2xlXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydBcmlhLVJvbGUnXVwiXHJcblx0Y2xhc3M9XCJjZWUtYnJlYWRjcnVtYi1jZWxsIHRlbXBsYXRlLXt7dGVtcGxhdGVJZH19IGJsb2NrLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19ICBibG9jay17e2Jsb2NrUG9zaXRpb259fVwiXHJcblx0Km5nSWY9XCJibG9ja1JlbmRlcmVkRGF0YVwiIChjbGljayk9XCJvbkJsb2NrQ2xpY2soKVwiPlxyXG5cdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zXCI+XHJcblx0XHQ8YXBwLXZpZXctcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbZmllbGRdPVwiZmllbGRcIiBbcG9zaXRpb25dPVwicG9zXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiXHJcblx0XHRcdGNsYXNzPVwiYnJlYWRjcnVtYi1zdGF0ZS17e3NlbGVjdGVkVmFsdWUubGFiZWx9fVwiPlxyXG5cdFx0PC9hcHAtdmlldy1yZW5kZXJlcj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8cCAqbmdJZj1cInNlbGVjdGVkVmFsdWVcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJzZWxlY3RlZFZhbHVlLmNvbG9yXCIgY2xhc3M9XCJicmVhZGNydW1iLWxhYmVsXCI+e3tzZWxlY3RlZFZhbHVlLmxhYmVsfX1cclxuXHQ8L3A+XHJcbjwvc2VjdGlvbj5cclxuIl19