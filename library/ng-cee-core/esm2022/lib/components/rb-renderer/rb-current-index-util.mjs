import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./rb-renderer.component";
export class RBCurrentIndexUtil {
    comp;
    constructor(comp) {
        this.comp = comp;
    }
    suscribeRBCurrentIndex() {
        this.comp.variableObj['currentRepeatableBlockEmitter_' + this.comp.fieldData.unique_id] =
            this.comp.sharedEventsService.rbCurrentIndex.subscribe((res) => {
                // Get block info
                const blockInfo = this.getBlockInfo();
                // Check if the linkedBlockId matches the current blockId
                if (res.linkedBlockId == this.comp.blockId) {
                    // Check if the current block is a child block
                    if (!blockInfo.isChildBlock) {
                        const fields = this.getFieldsForPosition(res.position);
                        if (fields.length > 0) {
                            this.setCurrBlockAppData(fields, res);
                        }
                    }
                    else {
                        // If it's a child block, check if the parentPosition matches
                        if (res.parentPosition === blockInfo.parentPosition) {
                            // Get fields by position
                            const fields = this.getFieldsForPosition(res.position);
                            if (fields.length > 0) {
                                this.setCurrBlockAppData(fields, res);
                            }
                        }
                    }
                }
            });
    }
    // Get active block count and data
    getBlockInfo = () => {
        return {
            totalBlocks: this.comp.maxBlocksCount,
            activeBlocks: this.comp.activeBlocksCount,
            currentRows: this.comp.repeatebleFieldsRows.length,
            blockId: this.comp.blockId,
            isChildBlock: this.comp.isChildBlock(),
            parentPosition: this.comp.parentPosition
        };
    };
    // Get fields for a specific row/position
    getFieldsForPosition(position) {
        if (!this.comp.repeatebleFieldsRows[position]) {
            return [];
        }
        return Object.values(this.comp.repeatebleFieldsRows[position]).map((field) => field.html_id);
    }
    // Set the current block data in the Akita store
    async setCurrBlockAppData(ids, otherInfo) {
        const apiData = {
            fields: {},
            isChildBlock: otherInfo.isChildBlock,
            linkedBlockId: otherInfo.linkedBlockId,
            parentPosition: otherInfo.parentPosition,
            position: otherInfo.position,
            repeatedBlockFieldId: otherInfo.repeatedBlockFieldId,
            stepId: otherInfo.stepId
        };
        const entitiesByRB = await this.comp.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId(otherInfo.repeatedBlockFieldId);
        for (const id of ids) {
            const actualId = await id.split("$")[1];
            apiData['fields'][actualId] = await entitiesByRB[id];
        }
        // console.log("apiData ::::", apiData);
        // Set the API data in the Akita store
        this.comp.apiDataService.setApiData({
            id: 'RepeatableBlock/CurrentIndex',
            apiUrl: '',
            apiKey: 'RepeatableBlock/CurrentIndex',
            value: Object.assign({}, apiData),
        });
    }
    static ɵfac = function RBCurrentIndexUtil_Factory(t) { return new (t || RBCurrentIndexUtil)(i0.ɵɵinject(i1.RBRendererComponent)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RBCurrentIndexUtil, factory: RBCurrentIndexUtil.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RBCurrentIndexUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.RBRendererComponent }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmItY3VycmVudC1pbmRleC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmItcmVuZGVyZXIvcmItY3VycmVudC1pbmRleC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQU8sa0JBQWtCO0lBRTNCLElBQUksQ0FBc0I7SUFFMUIsWUFBWSxJQUF5QjtRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDM0QsaUJBQWlCO2dCQUNqQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RDLHlEQUF5RDtnQkFDekQsSUFBSSxHQUFHLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUN4Qyw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO3dCQUN6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEdB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QUFNOztpRkFFVCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSQlJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYi1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUkJDdXJyZW50SW5kZXhVdGlsIHtcclxuICAgIFxyXG4gICAgY29tcDogUkJSZW5kZXJlckNvbXBvbmVudDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoY29tcDogUkJSZW5kZXJlckNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29tcCA9IGNvbXA7XHJcbiAgICB9XHJcblxyXG4gICAgc3VzY3JpYmVSQkN1cnJlbnRJbmRleCgpIHtcclxuICAgICAgICB0aGlzLmNvbXAudmFyaWFibGVPYmpbJ2N1cnJlbnRSZXBlYXRhYmxlQmxvY2tFbWl0dGVyXycgKyB0aGlzLmNvbXAuZmllbGREYXRhLnVuaXF1ZV9pZF0gPVxyXG4gICAgICAgIHRoaXMuY29tcC5zaGFyZWRFdmVudHNTZXJ2aWNlLnJiQ3VycmVudEluZGV4LnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEdldCBibG9jayBpbmZvXHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrSW5mbyA9IHRoaXMuZ2V0QmxvY2tJbmZvKCk7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rZWRCbG9ja0lkIG1hdGNoZXMgdGhlIGN1cnJlbnQgYmxvY2tJZFxyXG4gICAgICAgICAgICBpZiAocmVzLmxpbmtlZEJsb2NrSWQgPT0gdGhpcy5jb21wLmJsb2NrSWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGJsb2NrIGlzIGEgY2hpbGQgYmxvY2tcclxuICAgICAgICAgICAgICAgIGlmICghYmxvY2tJbmZvLmlzQ2hpbGRCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzRm9yUG9zaXRpb24ocmVzLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyQmxvY2tBcHBEYXRhKGZpZWxkcywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBjaGlsZCBibG9jaywgY2hlY2sgaWYgdGhlIHBhcmVudFBvc2l0aW9uIG1hdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnBhcmVudFBvc2l0aW9uID09PSBibG9ja0luZm8ucGFyZW50UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGZpZWxkcyBieSBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkc0ZvclBvc2l0aW9uKHJlcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyQmxvY2tBcHBEYXRhKGZpZWxkcywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBhY3RpdmUgYmxvY2sgY291bnQgYW5kIGRhdGFcclxuICAgIGdldEJsb2NrSW5mbyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3RhbEJsb2NrczogdGhpcy5jb21wLm1heEJsb2Nrc0NvdW50LFxyXG4gICAgICAgICAgICBhY3RpdmVCbG9ja3M6IHRoaXMuY29tcC5hY3RpdmVCbG9ja3NDb3VudCxcclxuICAgICAgICAgICAgY3VycmVudFJvd3M6IHRoaXMuY29tcC5yZXBlYXRlYmxlRmllbGRzUm93cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJsb2NrSWQ6IHRoaXMuY29tcC5ibG9ja0lkLFxyXG4gICAgICAgICAgICBpc0NoaWxkQmxvY2s6IHRoaXMuY29tcC5pc0NoaWxkQmxvY2soKSxcclxuICAgICAgICAgICAgcGFyZW50UG9zaXRpb246IHRoaXMuY29tcC5wYXJlbnRQb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEdldCBmaWVsZHMgZm9yIGEgc3BlY2lmaWMgcm93L3Bvc2l0aW9uXHJcbiAgICBnZXRGaWVsZHNGb3JQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbXAucmVwZWF0ZWJsZUZpZWxkc1Jvd3NbcG9zaXRpb25dKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jb21wIC5yZXBlYXRlYmxlRmllbGRzUm93c1twb3NpdGlvbl0pLm1hcCgoZmllbGQ6IGFueSkgPT4gZmllbGQuaHRtbF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgIC8vIFNldCB0aGUgY3VycmVudCBibG9jayBkYXRhIGluIHRoZSBBa2l0YSBzdG9yZVxyXG4gICAgYXN5bmMgc2V0Q3VyckJsb2NrQXBwRGF0YShpZHM6IGFueVtdLCBvdGhlckluZm8pIHtcclxuICAgICAgICBjb25zdCBhcGlEYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGZpZWxkczoge30sXHJcbiAgICAgICAgICAgIGlzQ2hpbGRCbG9jazogb3RoZXJJbmZvLmlzQ2hpbGRCbG9jayxcclxuICAgICAgICAgICAgbGlua2VkQmxvY2tJZDogb3RoZXJJbmZvLmxpbmtlZEJsb2NrSWQsXHJcbiAgICAgICAgICAgIHBhcmVudFBvc2l0aW9uOiBvdGhlckluZm8ucGFyZW50UG9zaXRpb24sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBvdGhlckluZm8ucG9zaXRpb24sXHJcbiAgICAgICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiBvdGhlckluZm8ucmVwZWF0ZWRCbG9ja0ZpZWxkSWQsXHJcbiAgICAgICAgICAgIHN0ZXBJZDogb3RoZXJJbmZvLnN0ZXBJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZW50aXRpZXNCeVJCOiBhbnkgPSBhd2FpdCB0aGlzLmNvbXAuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGRJZE1hcEZpZWxkVmFsdWVCeVJlcGVhdGVkQmxvY2tGaWVsZElkKG90aGVySW5mby5yZXBlYXRlZEJsb2NrRmllbGRJZClcclxuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xyXG4gICAgICAgICAgICBjb25zdCBhY3R1YWxJZCA9IGF3YWl0IGlkLnNwbGl0KFwiJFwiKVsxXTtcclxuICAgICAgICAgICAgYXBpRGF0YVsnZmllbGRzJ11bYWN0dWFsSWRdID0gYXdhaXQgZW50aXRpZXNCeVJCW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcGlEYXRhIDo6OjpcIiwgYXBpRGF0YSk7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBBUEkgZGF0YSBpbiB0aGUgQWtpdGEgc3RvcmVcclxuICAgICAgICB0aGlzLmNvbXAuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YSh7XHJcbiAgICAgICAgICAgIGlkOiAnUmVwZWF0YWJsZUJsb2NrL0N1cnJlbnRJbmRleCcsXHJcbiAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgIGFwaUtleTogJ1JlcGVhdGFibGVCbG9jay9DdXJyZW50SW5kZXgnLFxyXG4gICAgICAgICAgICB2YWx1ZTogT2JqZWN0LmFzc2lnbih7fSwgYXBpRGF0YSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19