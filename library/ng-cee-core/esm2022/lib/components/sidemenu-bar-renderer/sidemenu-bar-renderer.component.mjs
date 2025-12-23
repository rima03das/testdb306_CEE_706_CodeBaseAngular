import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { Component, Input, ViewEncapsulation, } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeModule } from "@angular/material/tree";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../models/app-data/app-data.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "../../utils/wfe-event-list-handler-util";
import * as i5 from "../../services/shared-events-service.service";
import * as i6 from "@angular/common";
const _c0 = a0 => ({ "show-menu": a0 });
const _c1 = a0 => ({ "rotate-caret": a0 });
function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); const item_r3 = ctx_r1.$implicit; const i_r4 = ctx_r1.index; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.ddToggle(item_r3, i_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate2("", item_r3.menuclass, " ", item_r3.menu ? "active" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.linkText);
} }
function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); const item_r3 = ctx_r1.$implicit; const i_r4 = ctx_r1.index; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.ddToggle(item_r3, i_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate2("", item_r3.menuclass, " ", item_r3.menu ? "active" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.linkText);
} }
function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); const item_r3 = ctx_r1.$implicit; const i_r4 = ctx_r1.index; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.ddToggle(item_r3, i_r4)); });
    i0.ɵɵtext(1, "\u25BC");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1, item_r3.menu));
} }
function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_app_sidemenu_bar_renderer_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sidemenu-bar-renderer", 12);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("sidemenuBlockElements", item_r3.submenu)("sidemenuBlock", ctx_r4.sidemenuBlock)("currentStep", ctx_r4.currentStep);
} }
function SidemenuBarRendererComponent_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, SidemenuBarRendererComponent_div_1_ng_container_1_div_1_a_1_Template, 2, 5, "a", 6)(2, SidemenuBarRendererComponent_div_1_ng_container_1_div_1_a_2_Template, 2, 5, "a", 6)(3, SidemenuBarRendererComponent_div_1_ng_container_1_div_1_div_3_Template, 2, 3, "div", 7);
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵtemplate(5, SidemenuBarRendererComponent_div_1_ng_container_1_div_1_app_sidemenu_bar_renderer_5_Template, 1, 3, "app-sidemenu-bar-renderer", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.submenu.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r3.submenu.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.submenu.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, item_r3.menu));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.menu && item_r3.submenu && item_r3.submenu.length > 0);
} }
function SidemenuBarRendererComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SidemenuBarRendererComponent_div_1_ng_container_1_div_1_Template, 6, 7, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.isVisible);
} }
function SidemenuBarRendererComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, SidemenuBarRendererComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.sidemenuBlockElements)("ngForTrackBy", ctx_r4.trackByIdsideBar);
} }
export class SidemenuBarRendererComponent {
    router;
    appDataService;
    apiDataService;
    eventListHandler;
    sharedEventsService;
    renderer;
    sidemenuBlock;
    sidemenuBlockElements = [];
    currentStep;
    currentStepName = "";
    expandAll = false;
    redirectionUtil;
    constructor(router, appDataService, apiDataService, eventListHandler, sharedEventsService, renderer) {
        this.router = router;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.eventListHandler = eventListHandler;
        this.sharedEventsService = sharedEventsService;
        this.renderer = renderer;
        // thhs may solve the issue of eventListHandler being singleton (make it public first)
        // eventListHandler.sharedEventsServices = sharedEventsService;
    }
    ngOnInit() {
        this.sharedEventsService.sideMenuSelectionResetEmitter.subscribe(() => {
            sessionStorage.removeItem("menuState_id");
            this.restoreMenuState();
        });
    }
    ngOnChanges() {
        this.restoreMenuState();
    }
    restoreMenuState() {
        const savedMenuState = JSON.parse(sessionStorage.getItem("menuState_id") || "null");
        if (savedMenuState) {
            // console.log('savedMenuState', savedMenuState);
            var preselectedMenuId = "";
            this.sidemenuBlockElements.forEach((item) => {
                item.submenu?.forEach((submenuItem) => {
                    if (item.menu && submenuItem.menu) {
                        preselectedMenuId = submenuItem._id.toString();
                    }
                    submenuItem.menu = false;
                });
                item.menu = false;
            });
            this.sidemenuBlockElements.forEach((item, index) => {
                item.submenu?.forEach((submenuItem, subindex) => {
                    if (savedMenuState.menuitem._id === submenuItem._id) {
                        item.menu = true;
                        submenuItem.menu = true;
                    }
                });
                if (savedMenuState.menuitem._id === item._id) {
                    item.menu = true;
                }
            });
        }
    }
    trackByIdsideBar(index, item) {
        return item._id;
    }
    // notify step redirection, if this is actual page navigation
    notifyStepRedirection(route) {
        const currentUrlWithoutFragment = this.router.url.split('#')[0];
        var targetUrlWithoutFragment = route.split('#')[0];
        if (currentUrlWithoutFragment.startsWith('/') && !targetUrlWithoutFragment.startsWith('/')) {
            targetUrlWithoutFragment = '/' + targetUrlWithoutFragment;
        }
        // Only emit for actual page changes, not hash navigation
        if (currentUrlWithoutFragment !== targetUrlWithoutFragment) {
            this.sharedEventsService.targetStepRedirection.emit({
                event_handler: "overRideWorkflow"
            });
        }
    }
    ddToggle(item, index) {
        if (!item)
            return;
        if (item.attachtoStep == '') {
            item.menu = !item.menu;
            return;
        }
        if (item.attachtoStep == this.currentStep) {
            item.menu = !item.menu;
            return;
        }
        if (this.currentStepName && item.attachtoStep == this.currentStepName.replace(/\s+/g, '-')) {
            item.menu = !item.menu;
            return;
        }
        this.sidemenuBlockElements.forEach((otherItem, i) => {
            otherItem.menu = i === index;
        });
        sessionStorage.setItem("menuState_id", JSON.stringify({ menuitem: item }));
        item.menu = true;
        if (item.attachtoStep) {
            let route = this.resolveRoute(item.attachtoStep, index);
            this.notifyStepRedirection(route);
            this.eventListHandler.redirectToHref(route, null, "");
        }
        this.scrollToSection(item, index);
    }
    resolveRoute(route, index) {
        let stepObj = route.split("#");
        if (stepObj.length === 2) {
            stepObj[0] = this.replaceApiKeys(stepObj[0]);
            stepObj[1] = stepObj[1].replace("{{i}}", String(index));
        }
        return stepObj.join("#");
    }
    replaceApiKeys(sentence) {
        return sentence.replace(/%(.*?)%/g, (_, key) => {
            return this.appDataService.getFieldDataByFieldId(key) || key;
        });
    }
    scrollToSection(item, i) {
        if (item.attchedmenuClass) {
            const menuElement = document.querySelector("." + item.attchedmenuClass);
            if (menuElement) {
                const errorField = this.renderer.selectRootElement("." + item.attchedmenuClass, true);
                if (errorField) {
                    errorField.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                    });
                }
            }
            else {
                let attachtoStepParts = item.attachtoStep.split("#");
                if (attachtoStepParts.length > 1) {
                    let part = attachtoStepParts[1];
                    if (part && part.indexOf("{{i}}") !== -1) {
                        part = part.replace("{{i}}", i - 1);
                        const errorField = this.renderer.selectRootElement("." + part, true);
                        if (errorField) {
                            errorField.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "nearest",
                            });
                        }
                    }
                }
            }
        }
    }
    toggleAll() {
        this.expandAll = !this.expandAll;
        this.sidemenuBlock.submenu?.forEach((submenu) => {
            submenu.menu = this.expandAll;
        });
    }
    ngAfterViewInit() {
        const stepObj = this.router.url.split("#");
        if (stepObj.length > 1) {
            setTimeout(() => {
                this.scrollToSection({ attchedmenuClass: stepObj[1] }, 1);
            }, 5000);
        }
    }
    static ɵfac = function SidemenuBarRendererComponent_Factory(t) { return new (t || SidemenuBarRendererComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AppDataService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.WFEEventListHandler), i0.ɵɵdirectiveInject(i5.SharedEventsServiceService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidemenuBarRendererComponent, selectors: [["app-sidemenu-bar-renderer"]], inputs: { sidemenuBlock: "sidemenuBlock", sidemenuBlockElements: "sidemenuBlockElements", currentStep: "currentStep", currentStepName: "currentStepName" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 2, vars: 1, consts: [[1, "dynamic-sidebar"], ["class", "wrapper element-shadow", 4, "ngIf"], [1, "wrapper", "element-shadow"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "group", 4, "ngIf"], [1, "group"], [3, "class", "click", 4, "ngIf"], ["class", "caret", 3, "ngClass", "click", 4, "ngIf"], [1, "sub-menu", 3, "ngClass"], [3, "sidemenuBlockElements", "sidemenuBlock", "currentStep", 4, "ngIf"], [3, "click"], [1, "caret", 3, "click", "ngClass"], [3, "sidemenuBlockElements", "sidemenuBlock", "currentStep"]], template: function SidemenuBarRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, SidemenuBarRendererComponent_div_1_Template, 2, 2, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sidemenuBlockElements && ctx.sidemenuBlockElements.length > 0);
        } }, dependencies: [SidemenuBarRendererComponent, MatTreeModule, MatIconModule, CommonModule, i6.NgClass, i6.NgForOf, i6.NgIf], styles: [".dynamic-sidebar{font: 13px sans-serif;box-sizing:border-box;position:relative}.dynamic-sidebar .expand-all{font-size:12px;text-align:right;display:block;margin-bottom:5px;margin-right:15px;cursor:pointer}.dynamic-sidebar .wrapper .group{overflow:hidden;position:relative}.dynamic-sidebar .wrapper .group>a{color:#fff;padding:7px 0 6px 20px;display:block;cursor:pointer;background-color:#03658c;text-decoration:none;border-bottom:1px solid #fff}.dynamic-sidebar .wrapper .group .caret{position:absolute;transition:transform ease-out .2s;top:15px;right:10px;color:#fff;font-size:10px;transform:translateY(-50%) rotate(-90deg)}.dynamic-sidebar .wrapper .sub-menu{transition:max-height .2s;max-height:0}.dynamic-sidebar .wrapper .sub-menu ul{margin:0;padding:0}.dynamic-sidebar .wrapper .sub-menu li{list-style-type:none;background-color:#313b3f;font: 10pt sans-serif;line-height:19px;letter-spacing:.1pt}.dynamic-sidebar .wrapper .sub-menu li a{color:#fff;padding:7px 0 6px 20px;text-decoration:none;cursor:pointer;display:block}.dynamic-sidebar .wrapper .sub-menu li:hover{background-color:#03658c;color:#fff}.rotate-caret{transform:translateY(-50%) rotate(0)!important}.show-menu{max-height:1000px!important}@media screen and (max-width: 768px){.dynamic-sidebar{margin-top:10px}}\n"], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidemenuBarRendererComponent, [{
        type: Component,
        args: [{ selector: "app-sidemenu-bar-renderer", standalone: true, encapsulation: ViewEncapsulation.None, imports: [MatTreeModule, MatIconModule, NgTemplateOutlet, CommonModule], template: "<div class=\"dynamic-sidebar\">\r\n        <!-- <span class=\"expand-all\" (click)=\"toggleAll()\">{{\r\n          !expandAll ? 'Expand All' : 'Close All'\r\n        }}</span> -->\r\n        <div *ngIf=\"sidemenuBlockElements && sidemenuBlockElements.length > 0\" class=\"wrapper element-shadow\">\r\n            <ng-container *ngFor=\"let item of sidemenuBlockElements; let i = index; trackBy: trackByIdsideBar;\">\r\n                <div class=\"group\"*ngIf=\"item.isVisible\">\r\n                    <a *ngIf=\"item.submenu.length\" (click)=\"ddToggle(item, i)\" class=\"{{item.menuclass}} {{item.menu ? 'active' : ''}}\">{{ item.linkText }}</a>\r\n                    <a *ngIf=\"!item.submenu.length\" (click)=\"ddToggle(item, i)\" class=\"{{item.menuclass}} {{item.menu ? 'active' : ''}}\">{{ item.linkText }}</a>\r\n                    <div *ngIf=\"item.submenu.length\" (click)=\"ddToggle(item, i)\" class=\"caret\" [ngClass]=\"{ 'rotate-caret': item.menu }\">&#9660;</div>\r\n                    <div class=\"sub-menu\" [ngClass]=\"{ 'show-menu': item.menu }\">\r\n                      <app-sidemenu-bar-renderer *ngIf=\"item.menu && item.submenu && item.submenu.length > 0\" [sidemenuBlockElements]=\"item.submenu\" [sidemenuBlock]=\"sidemenuBlock\"\r\n                    [currentStep]=\"currentStep\"></app-sidemenu-bar-renderer>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n</div>", styles: [".dynamic-sidebar{font: 13px sans-serif;box-sizing:border-box;position:relative}.dynamic-sidebar .expand-all{font-size:12px;text-align:right;display:block;margin-bottom:5px;margin-right:15px;cursor:pointer}.dynamic-sidebar .wrapper .group{overflow:hidden;position:relative}.dynamic-sidebar .wrapper .group>a{color:#fff;padding:7px 0 6px 20px;display:block;cursor:pointer;background-color:#03658c;text-decoration:none;border-bottom:1px solid #fff}.dynamic-sidebar .wrapper .group .caret{position:absolute;transition:transform ease-out .2s;top:15px;right:10px;color:#fff;font-size:10px;transform:translateY(-50%) rotate(-90deg)}.dynamic-sidebar .wrapper .sub-menu{transition:max-height .2s;max-height:0}.dynamic-sidebar .wrapper .sub-menu ul{margin:0;padding:0}.dynamic-sidebar .wrapper .sub-menu li{list-style-type:none;background-color:#313b3f;font: 10pt sans-serif;line-height:19px;letter-spacing:.1pt}.dynamic-sidebar .wrapper .sub-menu li a{color:#fff;padding:7px 0 6px 20px;text-decoration:none;cursor:pointer;display:block}.dynamic-sidebar .wrapper .sub-menu li:hover{background-color:#03658c;color:#fff}.rotate-caret{transform:translateY(-50%) rotate(0)!important}.show-menu{max-height:1000px!important}@media screen and (max-width: 768px){.dynamic-sidebar{margin-top:10px}}\n"] }]
    }], () => [{ type: i1.Router }, { type: i2.AppDataService }, { type: i3.ApiDataService }, { type: i4.WFEEventListHandler }, { type: i5.SharedEventsServiceService }, { type: i0.Renderer2 }], { sidemenuBlock: [{
            type: Input
        }], sidemenuBlockElements: [{
            type: Input
        }], currentStep: [{
            type: Input
        }], currentStepName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidemenuBarRendererComponent, { className: "SidemenuBarRendererComponent", filePath: "lib\\components\\sidemenu-bar-renderer\\sidemenu-bar-renderer.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW1lbnUtYmFyLXJlbmRlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL3NpZGVtZW51LWJhci1yZW5kZXJlci9zaWRlbWVudS1iYXItcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc2lkZW1lbnUtYmFyLXJlbmRlcmVyL3NpZGVtZW51LWJhci1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakUsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7OztJQ0ZuQyw2QkFBb0g7SUFBckYsOFNBQVMsOEJBQWlCLEtBQUM7SUFBMEQsWUFBbUI7SUFBQSxpQkFBSTs7O0lBQWhGLHVGQUF3RDtJQUFDLGNBQW1CO0lBQW5CLHNDQUFtQjs7OztJQUN2SSw2QkFBcUg7SUFBckYsOFNBQVMsOEJBQWlCLEtBQUM7SUFBMEQsWUFBbUI7SUFBQSxpQkFBSTs7O0lBQWhGLHVGQUF3RDtJQUFDLGNBQW1CO0lBQW5CLHNDQUFtQjs7OztJQUN4SSwrQkFBcUg7SUFBcEYsa1RBQVMsOEJBQWlCLEtBQUM7SUFBeUQsc0JBQU87SUFBQSxp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QztJQUVELGVBQWU7UUFDYixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7c0ZBbkxVLDRCQUE0Qjs2REFBNUIsNEJBQTRCO1lDekJ6Qyw4QkFBNkI7WUFJckIsNkVBQXNHO1lBYTlHLGlCQUFNOztZQWJRLGNBQStEO1lBQS9ELHdGQUErRDs0QkRxQmhFLDRCQUE0QixFQUY3QixhQUFhLEVBQUUsYUFBYSxFQUFvQixZQUFZOztpRkFFM0QsNEJBQTRCO2NBUnhDLFNBQVM7MkJBQ0UsMkJBQTJCLGNBR3pCLElBQUksaUJBQ0QsaUJBQWlCLENBQUMsSUFBSSxXQUM1QixDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO29NQUc5RCxhQUFhO2tCQUFyQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7O2tGQUpLLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcclxuaW1wb3J0IHsgTWF0VHJlZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90cmVlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3Rpb25VdGlsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JlZGlyZWN0aW9uLXV0aWxcIjtcclxuaW1wb3J0IHsgV0ZFRXZlbnRMaXN0SGFuZGxlciB9IGZyb20gXCIuLi8uLi91dGlscy93ZmUtZXZlbnQtbGlzdC1oYW5kbGVyLXV0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1zaWRlbWVudS1iYXItcmVuZGVyZXJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3NpZGVtZW51LWJhci1yZW5kZXJlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zaWRlbWVudS1iYXItcmVuZGVyZXIuY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGltcG9ydHM6IFtNYXRUcmVlTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBOZ1RlbXBsYXRlT3V0bGV0LCBDb21tb25Nb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZW1lbnVCYXJSZW5kZXJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc2lkZW1lbnVCbG9jazogYW55O1xyXG4gIEBJbnB1dCgpIHNpZGVtZW51QmxvY2tFbGVtZW50czogYW55W10gPSBbXTtcclxuICBASW5wdXQoKSBjdXJyZW50U3RlcDogYW55O1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRTdGVwTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICBleHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICByZWRpcmVjdGlvblV0aWw6IFJlZGlyZWN0aW9uVXRpbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgcHVibGljIGV2ZW50TGlzdEhhbmRsZXI6IFdGRUV2ZW50TGlzdEhhbmRsZXIsXHJcbiAgICBwcml2YXRlIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICAvLyB0aGhzIG1heSBzb2x2ZSB0aGUgaXNzdWUgb2YgZXZlbnRMaXN0SGFuZGxlciBiZWluZyBzaW5nbGV0b24gKG1ha2UgaXQgcHVibGljIGZpcnN0KVxyXG4gICAgLy8gZXZlbnRMaXN0SGFuZGxlci5zaGFyZWRFdmVudHNTZXJ2aWNlcyA9IHNoYXJlZEV2ZW50c1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5zaWRlTWVudVNlbGVjdGlvblJlc2V0RW1pdHRlci5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibWVudVN0YXRlX2lkXCIpO1xyXG4gICAgICB0aGlzLnJlc3RvcmVNZW51U3RhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnJlc3RvcmVNZW51U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHJlc3RvcmVNZW51U3RhdGUoKSB7XHJcbiAgICBjb25zdCBzYXZlZE1lbnVTdGF0ZSA9IEpTT04ucGFyc2UoXHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJtZW51U3RhdGVfaWRcIikgfHwgXCJudWxsXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHNhdmVkTWVudVN0YXRlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzYXZlZE1lbnVTdGF0ZScsIHNhdmVkTWVudVN0YXRlKTtcclxuICAgICAgdmFyIHByZXNlbGVjdGVkTWVudUlkID0gXCJcIjtcclxuICAgICAgdGhpcy5zaWRlbWVudUJsb2NrRWxlbWVudHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgaXRlbS5zdWJtZW51Py5mb3JFYWNoKChzdWJtZW51SXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5tZW51ICYmIHN1Ym1lbnVJdGVtLm1lbnUpIHtcclxuICAgICAgICAgICAgcHJlc2VsZWN0ZWRNZW51SWQgPSBzdWJtZW51SXRlbS5faWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN1Ym1lbnVJdGVtLm1lbnUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdGVtLm1lbnUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2lkZW1lbnVCbG9ja0VsZW1lbnRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpdGVtLnN1Ym1lbnU/LmZvckVhY2goKHN1Ym1lbnVJdGVtOiBhbnksIHN1YmluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2F2ZWRNZW51U3RhdGUubWVudWl0ZW0uX2lkID09PSBzdWJtZW51SXRlbS5faWQpIHtcclxuICAgICAgICAgICAgaXRlbS5tZW51ID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3VibWVudUl0ZW0ubWVudSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNhdmVkTWVudVN0YXRlLm1lbnVpdGVtLl9pZCA9PT0gaXRlbS5faWQpIHtcclxuICAgICAgICAgIGl0ZW0ubWVudSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlJZHNpZGVCYXIoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBpdGVtLl9pZDtcclxuICB9XHJcblxyXG4gIC8vIG5vdGlmeSBzdGVwIHJlZGlyZWN0aW9uLCBpZiB0aGlzIGlzIGFjdHVhbCBwYWdlIG5hdmlnYXRpb25cclxuICBub3RpZnlTdGVwUmVkaXJlY3Rpb24ocm91dGU6IGFueSkge1xyXG4gICAgIGNvbnN0IGN1cnJlbnRVcmxXaXRob3V0RnJhZ21lbnQgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJyMnKVswXTtcclxuICAgICAgdmFyIHRhcmdldFVybFdpdGhvdXRGcmFnbWVudCA9IHJvdXRlLnNwbGl0KCcjJylbMF07XHJcbiAgICAgIGlmKGN1cnJlbnRVcmxXaXRob3V0RnJhZ21lbnQuc3RhcnRzV2l0aCgnLycpICYmICF0YXJnZXRVcmxXaXRob3V0RnJhZ21lbnQuc3RhcnRzV2l0aCgnLycpKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB0YXJnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSAnLycgKyB0YXJnZXRVcmxXaXRob3V0RnJhZ21lbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIE9ubHkgZW1pdCBmb3IgYWN0dWFsIHBhZ2UgY2hhbmdlcywgbm90IGhhc2ggbmF2aWdhdGlvblxyXG4gICAgICBpZiAoY3VycmVudFVybFdpdGhvdXRGcmFnbWVudCAhPT0gdGFyZ2V0VXJsV2l0aG91dEZyYWdtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UudGFyZ2V0U3RlcFJlZGlyZWN0aW9uLmVtaXQoe1xyXG4gICAgICAgICAgICBldmVudF9oYW5kbGVyOiBcIm92ZXJSaWRlV29ya2Zsb3dcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGRkVG9nZ2xlKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKCFpdGVtKSByZXR1cm47XHJcbiAgICBpZiAoaXRlbS5hdHRhY2h0b1N0ZXAgPT0gJycpIHtcclxuICAgICAgICBpdGVtLm1lbnUgPSAhaXRlbS5tZW51O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpdGVtLmF0dGFjaHRvU3RlcCA9PSB0aGlzLmN1cnJlbnRTdGVwKSB7XHJcbiAgICAgICAgaXRlbS5tZW51ID0gIWl0ZW0ubWVudTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcE5hbWUgJiYgaXRlbS5hdHRhY2h0b1N0ZXAgPT0gdGhpcy5jdXJyZW50U3RlcE5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpKSB7XHJcbiAgICAgICAgaXRlbS5tZW51ID0gIWl0ZW0ubWVudTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNpZGVtZW51QmxvY2tFbGVtZW50cy5mb3JFYWNoKChvdGhlckl0ZW0sIGkpID0+IHtcclxuICAgICAgb3RoZXJJdGVtLm1lbnUgPSBpID09PSBpbmRleDtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJtZW51U3RhdGVfaWRcIiwgSlNPTi5zdHJpbmdpZnkoeyBtZW51aXRlbTogaXRlbSB9KSk7XHJcbiAgICBpdGVtLm1lbnUgPSB0cnVlO1xyXG5cclxuICAgIGlmIChpdGVtLmF0dGFjaHRvU3RlcCkge1xyXG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJlc29sdmVSb3V0ZShpdGVtLmF0dGFjaHRvU3RlcCwgaW5kZXgpO1xyXG4gICAgICB0aGlzLm5vdGlmeVN0ZXBSZWRpcmVjdGlvbihyb3V0ZSk7XHJcbiAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5yZWRpcmVjdFRvSHJlZihyb3V0ZSwgbnVsbCwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY3JvbGxUb1NlY3Rpb24oaXRlbSxpbmRleCk7XHJcbiAgfVxyXG5cclxuICByZXNvbHZlUm91dGUocm91dGU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgc3RlcE9iaiA9IHJvdXRlLnNwbGl0KFwiI1wiKTtcclxuICAgIGlmIChzdGVwT2JqLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBzdGVwT2JqWzBdID0gdGhpcy5yZXBsYWNlQXBpS2V5cyhzdGVwT2JqWzBdKTtcclxuICAgICAgc3RlcE9ialsxXSA9IHN0ZXBPYmpbMV0ucmVwbGFjZShcInt7aX19XCIsIFN0cmluZyhpbmRleCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ZXBPYmouam9pbihcIiNcIik7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlQXBpS2V5cyhzZW50ZW5jZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzZW50ZW5jZS5yZXBsYWNlKC8lKC4qPyklL2csIChfLCBrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKGtleSkgfHwga2V5O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb1NlY3Rpb24oaXRlbSwgaTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXRlbS5hdHRjaGVkbWVudUNsYXNzKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGl0ZW0uYXR0Y2hlZG1lbnVDbGFzcyk7XHJcbiAgICAgIGlmIChtZW51RWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRmllbGQgPSB0aGlzLnJlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KFxyXG4gICAgICAgICAgXCIuXCIgKyBpdGVtLmF0dGNoZWRtZW51Q2xhc3MsXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZXJyb3JGaWVsZCkge1xyXG4gICAgICAgICAgZXJyb3JGaWVsZC5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaW5saW5lOiBcIm5lYXJlc3RcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgYXR0YWNodG9TdGVwUGFydHMgPSBpdGVtLmF0dGFjaHRvU3RlcC5zcGxpdChcIiNcIik7XHJcbiAgICAgICAgaWYgKGF0dGFjaHRvU3RlcFBhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIGxldCBwYXJ0ID0gYXR0YWNodG9TdGVwUGFydHNbMV07XHJcbiAgICAgICAgICBpZiAocGFydCAmJiBwYXJ0LmluZGV4T2YoXCJ7e2l9fVwiKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGFydCA9IHBhcnQucmVwbGFjZShcInt7aX19XCIsIGkgLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JGaWVsZCA9IHRoaXMucmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgXCIuXCIgKyBwYXJ0LFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yRmllbGQpIHtcclxuICAgICAgICAgICAgICBlcnJvckZpZWxkLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBpbmxpbmU6IFwibmVhcmVzdFwiLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBbGwoKSB7XHJcbiAgICB0aGlzLmV4cGFuZEFsbCA9ICF0aGlzLmV4cGFuZEFsbDtcclxuICAgIHRoaXMuc2lkZW1lbnVCbG9jay5zdWJtZW51Py5mb3JFYWNoKChzdWJtZW51OiBhbnkpID0+IHtcclxuICAgICAgc3VibWVudS5tZW51ID0gdGhpcy5leHBhbmRBbGw7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNvbnN0IHN0ZXBPYmogPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoXCIjXCIpO1xyXG4gICAgaWYgKHN0ZXBPYmoubGVuZ3RoID4gMSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvU2VjdGlvbih7IGF0dGNoZWRtZW51Q2xhc3M6IHN0ZXBPYmpbMV0gfSwgMSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZHluYW1pYy1zaWRlYmFyXCI+XHJcbiAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cImV4cGFuZC1hbGxcIiAoY2xpY2spPVwidG9nZ2xlQWxsKClcIj57e1xyXG4gICAgICAgICAgIWV4cGFuZEFsbCA/ICdFeHBhbmQgQWxsJyA6ICdDbG9zZSBBbGwnXHJcbiAgICAgICAgfX08L3NwYW4+IC0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaWRlbWVudUJsb2NrRWxlbWVudHMgJiYgc2lkZW1lbnVCbG9ja0VsZW1lbnRzLmxlbmd0aCA+IDBcIiBjbGFzcz1cIndyYXBwZXIgZWxlbWVudC1zaGFkb3dcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaWRlbWVudUJsb2NrRWxlbWVudHM7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlJZHNpZGVCYXI7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIipuZ0lmPVwiaXRlbS5pc1Zpc2libGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIml0ZW0uc3VibWVudS5sZW5ndGhcIiAoY2xpY2spPVwiZGRUb2dnbGUoaXRlbSwgaSlcIiBjbGFzcz1cInt7aXRlbS5tZW51Y2xhc3N9fSB7e2l0ZW0ubWVudSA/ICdhY3RpdmUnIDogJyd9fVwiPnt7IGl0ZW0ubGlua1RleHQgfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhaXRlbS5zdWJtZW51Lmxlbmd0aFwiIChjbGljayk9XCJkZFRvZ2dsZShpdGVtLCBpKVwiIGNsYXNzPVwie3tpdGVtLm1lbnVjbGFzc319IHt7aXRlbS5tZW51ID8gJ2FjdGl2ZScgOiAnJ319XCI+e3sgaXRlbS5saW5rVGV4dCB9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5zdWJtZW51Lmxlbmd0aFwiIChjbGljayk9XCJkZFRvZ2dsZShpdGVtLCBpKVwiIGNsYXNzPVwiY2FyZXRcIiBbbmdDbGFzc109XCJ7ICdyb3RhdGUtY2FyZXQnOiBpdGVtLm1lbnUgfVwiPiYjOTY2MDs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLW1lbnVcIiBbbmdDbGFzc109XCJ7ICdzaG93LW1lbnUnOiBpdGVtLm1lbnUgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFwcC1zaWRlbWVudS1iYXItcmVuZGVyZXIgKm5nSWY9XCJpdGVtLm1lbnUgJiYgaXRlbS5zdWJtZW51ICYmIGl0ZW0uc3VibWVudS5sZW5ndGggPiAwXCIgW3NpZGVtZW51QmxvY2tFbGVtZW50c109XCJpdGVtLnN1Ym1lbnVcIiBbc2lkZW1lbnVCbG9ja109XCJzaWRlbWVudUJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBbY3VycmVudFN0ZXBdPVwiY3VycmVudFN0ZXBcIj48L2FwcC1zaWRlbWVudS1iYXItcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==