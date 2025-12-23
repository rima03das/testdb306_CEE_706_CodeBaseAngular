import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonUtil } from '../../utils/common-util';
import { BlockRendererComponent } from '../block-renderer/block-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
function TabRendererComponent_mat_tab_group_1_mat_tab_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵattributeInterpolate2("aria-controls", "", data_r1.blockId, "-", data_r1.name, "-tab");
    i0.ɵɵpropertyInterpolate("id", data_r1.name);
    i0.ɵɵattribute("aria-label", data_r1.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r1.name);
} }
function TabRendererComponent_mat_tab_group_1_mat_tab_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "app-block-renderer", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const data_r1 = ctx_r1.$implicit;
    const pos_r3 = ctx_r1.index;
    const activeBlock_r4 = i0.ɵɵreference(1);
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("cee-tab-body cee-tab-body-", activeBlock_r4.isActive ? "active" : "", "");
    i0.ɵɵpropertyInterpolate2("id", "", data_r1.blockId, "-", data_r1.name, "-tab");
    i0.ɵɵattribute("aria-labelledby", data_r1.name);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("tab-content tab-content-", pos_r3, "");
    i0.ɵɵproperty("stepId", ctx_r4.stepId)("templateId", ctx_r4.templateId)("blockId", data_r1.blockId)("blockPosition", pos_r3)("rootData", ctx_r4.rootData);
} }
function TabRendererComponent_mat_tab_group_1_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 4, 0);
    i0.ɵɵtemplate(2, TabRendererComponent_mat_tab_group_1_mat_tab_1_ng_template_2_Template, 2, 6, "ng-template", 5)(3, TabRendererComponent_mat_tab_group_1_mat_tab_1_div_3_Template, 2, 15, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const activeBlock_r4 = i0.ɵɵreference(1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", activeBlock_r4.isActive);
} }
function TabRendererComponent_mat_tab_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab-group", 2);
    i0.ɵɵtemplate(1, TabRendererComponent_mat_tab_group_1_mat_tab_1_Template, 4, 1, "mat-tab", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.tabData);
} }
export class TabRendererComponent {
    fieldData;
    stepId;
    templateId;
    rootData;
    additionalParameters = {};
    tabData = [];
    is_bootstrap;
    commonUtil;
    constructor() {
        this.commonUtil = new CommonUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    ngOnInit() {
        if (this.fieldData.additional_parameters
            && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
            }
        }
        if (this.fieldData.possible_values.length > 0) {
            let index = 0;
            for (const value of this.fieldData.possible_values) {
                this.tabData.push({ id: index, name: this.getTabName(value), blockId: this.getBlockId(value), showSection: false });
                index++;
            }
        }
    }
    getBlockId(field) {
        return this.commonUtil.getValue(field);
        // if (field.includes('|') && field.split('|').length > 0) {
        //   return field.split('|')[1];
        // } else {
        //   return field;
        // }
    }
    getTabName(field) {
        return this.commonUtil.getID(field);
        // if (field.includes('|') && field.split('|').length > 0) {
        //   return field.split('|')[0];
        // } else {
        //   return field;
        // }
    }
    static ɵfac = function TabRendererComponent_Factory(t) { return new (t || TabRendererComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabRendererComponent, selectors: [["app-tab-renderer"]], inputs: { fieldData: "fieldData", stepId: "stepId", templateId: "templateId", rootData: "rootData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 7, consts: [["activeBlock", ""], ["mat-align-tabs", "start", "animationDuration", "0ms", 4, "ngIf"], ["mat-align-tabs", "start", "animationDuration", "0ms"], ["aria-label", "Entertainment", 4, "ngFor", "ngForOf"], ["aria-label", "Entertainment"], ["mat-tab-label", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], [3, "stepId", "templateId", "blockId", "blockPosition", "rootData"]], template: function TabRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵtemplate(1, TabRendererComponent_mat_tab_group_1_Template, 2, 1, "mat-tab-group", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate2("cee-tabs cee-tabs-", ctx.fieldData.unique_id, " ", ctx.fieldData.field_style ? ctx.fieldData.field_style.custom_class_name : "", "");
            i0.ɵɵattribute("aria-label", ctx.additionalParameters["Aria-Label"] ? ctx.additionalParameters["Aria-Label"] : undefined)("role", ctx.additionalParameters["Aria-Role"]);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.fieldData.possible_values && ctx.tabData.length > 0);
        } }, dependencies: () => [MatTabsModule, i1.MatTabLabel, i1.MatTab, i1.MatTabGroup, CommonModule, i2.NgForOf, i2.NgIf, BlockRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-tab-renderer', standalone: true, imports: [MatTabsModule, CommonModule, forwardRef(() => BlockRendererComponent)], template: "<section [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n\t[attr.role]=\"additionalParameters['Aria-Role']\"\r\n\tclass=\"cee-tabs cee-tabs-{{fieldData.unique_id}} {{fieldData.field_style?fieldData.field_style.custom_class_name:''}}\">\r\n\t<mat-tab-group *ngIf=\"fieldData.possible_values && tabData.length > 0\" mat-align-tabs=\"start\" animationDuration=\"0ms\">\r\n\t\t<mat-tab aria-label=\"Entertainment\" *ngFor=\"let data of tabData; index as pos\" #activeBlock>\r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<span attr.aria-controls=\"{{data.blockId}}-{{data.name}}-tab\" id=\"{{data.name}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"data.name\">{{data.name}}</span>\r\n\t\t\t</ng-template>\r\n\t\t\t<div class=\"cee-tab-body cee-tab-body-{{activeBlock.isActive? 'active': ''}}\" *ngIf=\"activeBlock.isActive\"\r\n\t\t\t\t[attr.aria-labelledby]=\"data.name\" id=\"{{data.blockId}}-{{data.name}}-tab\">\r\n\t\t\t\t<app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"data.blockId\"\r\n\t\t\t\t\tclass=\"tab-content tab-content-{{pos}}\" [blockPosition]=\"pos\" [rootData]=\"rootData\">\r\n\t\t\t\t</app-block-renderer>\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t</mat-tab-group>\r\n</section>\r\n" }]
    }], () => [], { fieldData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabRendererComponent, { className: "TabRendererComponent", filePath: "lib\\components\\tab-renderer\\tab-renderer.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXJlbmRlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL3RhYi1yZW5kZXJlci90YWItcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFiLXJlbmRlcmVyL3RhYi1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7O0lDRWhGLCtCQUMrQjtJQUFBLFlBQWE7SUFBQSxpQkFBTzs7O0lBRDdDLDJGQUF1RDtJQUFDLDRDQUFrQjs7SUFDakQsY0FBYTtJQUFiLGtDQUFhOzs7SUFFN0MsOEJBQzRFO0lBQzNFLHdDQUVxQjtJQUN0QixpQkFBTTs7Ozs7OztJQUxELG9HQUF3RTtJQUN6QywrRUFBdUM7O0lBRXpFLGNBQXVDO0lBQXZDLGlFQUF1QztJQUF1QixBQUF0QixBQUR1QixBQUExQixBQUFsQixzQ0FBaUIsaUNBQTBCLDRCQUF5Qix5QkFDMUIsNkJBQXNCOzs7SUFSdEYscUNBQTRGO0lBSzNGLEFBSkEsK0dBQTJCLG1GQUtpRDtJQUs3RSxpQkFBVTs7O0lBTnNFLGVBQTBCO0lBQTFCLDhDQUEwQjs7O0lBTjNHLHdDQUFzSDtJQUNySCw2RkFBNEY7SUFZN0YsaUJBQWdCOzs7SUFac0MsY0FBWTtJQUFaLHdDQUFZOztBRFNuRSxNQUFNLE9BQU8sb0JBQW9CO0lBRWQsU0FBUyxDQUFNO0lBQ2YsTUFBTSxDQUFNO0lBQ3BCLFVBQVUsQ0FBTTtJQUNSLFFBQVEsQ0FBTTtJQUUvQixvQkFBb0IsR0FBRyxFQUFFLENBQUM7SUFDMUIsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLFlBQVksQ0FBVTtJQUN0QixVQUFVLENBQWE7SUFFdkI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQjtlQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEQsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFO2dCQUMzRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDckU7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO2dCQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3BILEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLDREQUE0RDtRQUM1RCxnQ0FBZ0M7UUFDaEMsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixJQUFJO0lBQ04sQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsNERBQTREO1FBQzVELGdDQUFnQztRQUNoQyxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLElBQUk7SUFDTixDQUFDOzhFQW5EVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ2JqQywrQkFFd0g7WUFDdkgseUZBQXNIO1lBY3ZILGlCQUFVOztZQWZULCtKQUFzSDs7WUFDdEcsY0FBcUQ7WUFBckQsOEVBQXFEO2tDRFExRCxhQUFhLDZDQUFFLFlBQVksdUJBQW1CLHNCQUFzQjs7aUZBRW5FLG9CQUFvQjtjQVBoQyxTQUFTOzJCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFFO29CQUloRSxTQUFTO2tCQUF6QixLQUFLO1lBQ1csTUFBTTtrQkFBdEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLOztrRkFMSyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBCbG9ja1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYmxvY2stcmVuZGVyZXIvYmxvY2stcmVuZGVyZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXRhYi1yZW5kZXJlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWF0VGFic01vZHVsZSwgQ29tbW9uTW9kdWxlLCBmb3J3YXJkUmVmKCgpID0+IEJsb2NrUmVuZGVyZXJDb21wb25lbnQpIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYlJlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlSWQ6IGFueTtcclxuICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcblxyXG4gIGFkZGl0aW9uYWxQYXJhbWV0ZXJzID0ge307XHJcbiAgdGFiRGF0YSA9IFtdO1xyXG4gIGlzX2Jvb3RzdHJhcDogYm9vbGVhbjtcclxuICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29tbW9uVXRpbCA9IG5ldyBDb21tb25VdGlsKCk7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzX2Jvb3RzdHJhcCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgdGhpcy5pc19ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzXHJcbiAgICAgICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1twYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzKSB7XHJcbiAgICAgICAgdGhpcy50YWJEYXRhLnB1c2goeyBpZDogaW5kZXgsIG5hbWU6IHRoaXMuZ2V0VGFiTmFtZSh2YWx1ZSksIGJsb2NrSWQ6IHRoaXMuZ2V0QmxvY2tJZCh2YWx1ZSksIHNob3dTZWN0aW9uOiBmYWxzZSB9KTtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRCbG9ja0lkKGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbW9uVXRpbC5nZXRWYWx1ZShmaWVsZCk7XHJcbiAgICAvLyBpZiAoZmllbGQuaW5jbHVkZXMoJ3wnKSAmJiBmaWVsZC5zcGxpdCgnfCcpLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgcmV0dXJuIGZpZWxkLnNwbGl0KCd8JylbMV07XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICByZXR1cm4gZmllbGQ7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBnZXRUYWJOYW1lKGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbW9uVXRpbC5nZXRJRChmaWVsZCk7XHJcbiAgICAvLyBpZiAoZmllbGQuaW5jbHVkZXMoJ3wnKSAmJiBmaWVsZC5zcGxpdCgnfCcpLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgcmV0dXJuIGZpZWxkLnNwbGl0KCd8JylbMF07XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICByZXR1cm4gZmllbGQ7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcbiIsIjxzZWN0aW9uIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJzWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIlxyXG5cdFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtUm9sZSddXCJcclxuXHRjbGFzcz1cImNlZS10YWJzIGNlZS10YWJzLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19IHt7ZmllbGREYXRhLmZpZWxkX3N0eWxlP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcblx0PG1hdC10YWItZ3JvdXAgKm5nSWY9XCJmaWVsZERhdGEucG9zc2libGVfdmFsdWVzICYmIHRhYkRhdGEubGVuZ3RoID4gMFwiIG1hdC1hbGlnbi10YWJzPVwic3RhcnRcIiBhbmltYXRpb25EdXJhdGlvbj1cIjBtc1wiPlxyXG5cdFx0PG1hdC10YWIgYXJpYS1sYWJlbD1cIkVudGVydGFpbm1lbnRcIiAqbmdGb3I9XCJsZXQgZGF0YSBvZiB0YWJEYXRhOyBpbmRleCBhcyBwb3NcIiAjYWN0aXZlQmxvY2s+XHJcblx0XHRcdDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG5cdFx0XHRcdDxzcGFuIGF0dHIuYXJpYS1jb250cm9scz1cInt7ZGF0YS5ibG9ja0lkfX0te3tkYXRhLm5hbWV9fS10YWJcIiBpZD1cInt7ZGF0YS5uYW1lfX1cIlxyXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJkYXRhLm5hbWVcIj57e2RhdGEubmFtZX19PC9zcGFuPlxyXG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2VlLXRhYi1ib2R5IGNlZS10YWItYm9keS17e2FjdGl2ZUJsb2NrLmlzQWN0aXZlPyAnYWN0aXZlJzogJyd9fVwiICpuZ0lmPVwiYWN0aXZlQmxvY2suaXNBY3RpdmVcIlxyXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJkYXRhLm5hbWVcIiBpZD1cInt7ZGF0YS5ibG9ja0lkfX0te3tkYXRhLm5hbWV9fS10YWJcIj5cclxuXHRcdFx0XHQ8YXBwLWJsb2NrLXJlbmRlcmVyIFtzdGVwSWRdPVwic3RlcElkXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiIFtibG9ja0lkXT1cImRhdGEuYmxvY2tJZFwiXHJcblx0XHRcdFx0XHRjbGFzcz1cInRhYi1jb250ZW50IHRhYi1jb250ZW50LXt7cG9zfX1cIiBbYmxvY2tQb3NpdGlvbl09XCJwb3NcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuXHRcdFx0XHQ8L2FwcC1ibG9jay1yZW5kZXJlcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21hdC10YWI+XHJcblx0PC9tYXQtdGFiLWdyb3VwPlxyXG48L3NlY3Rpb24+XHJcbiJdfQ==