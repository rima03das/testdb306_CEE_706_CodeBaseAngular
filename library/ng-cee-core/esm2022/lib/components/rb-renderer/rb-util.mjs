import { defer } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./rb-renderer.component";
export class RBUtil {
    comp;
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (this.componentList['label']) {
                return this.componentList['label'];
            }
            else {
                const c = import('../../field-components/cee-label/cee-label.component').then(m => m.CeeLabelComponent);
                this.componentList['label'] = c;
                return c;
            }
        }),
        Textfield: defer(() => {
            if (this.componentList['Textfield']) {
                return this.componentList['Textfield'];
            }
            else {
                const c = import('../../field-components/cee-textfield/cee-textfield.component').then(m => m.CeeTextfieldComponent);
                this.componentList['Textfield'] = c;
                return c;
            }
        }),
        // 'Autocomplete Textfield': defer(() => {
        //     if (this.componentList['Autocomplete Textfield']) {
        //         return this.componentList['Autocomplete Textfield'];
        //     } else {
        //         const c = import('../../field-components/cee-auto-complete/cee-auto-complete.component').then(m => m.CeeAutoCompleteComponent);
        //         this.componentList['Autocomplete Textfield'] = c;
        //         return c;
        //     }
        // }),
        // Textarea: defer(() => {
        //     if (this.componentList['Textarea']) {
        //         return this.componentList['Textarea'];
        //     } else {
        //         const c = import('../../field-components/cee-textarea/cee-textarea.component').then(m => m.CeeTextareaComponent);
        //         this.componentList['Textarea'] = c;
        //         return c;
        //     }
        // }),
        // Date: defer(() => {
        //     if (this.componentList['Date']) {
        //         return this.componentList['Date'];
        //     } else {
        //         const c = import('../../field-components/cee-date/cee-date.component').then(m => m.CeeDateComponent);
        //         this.componentList['Date'] = c;
        //         return c;
        //     }
        // }),
        // radio: defer(() => {
        //     if (this.componentList['radio']) {
        //         return this.componentList['radio'];
        //     } else {
        //         const c = import('../../field-components/cee-radio/cee-radio.component').then(m => m.CeeRadioComponent);
        //         this.componentList['radio'] = c;
        //         return c;
        //     }
        // }),
        Menu: defer(() => {
            if (this.componentList['Menu']) {
                return this.componentList['Menu'];
            }
            else {
                const c = import('../../field-components/cee-menu/cee-menu.component').then(m => m.CeeMenuComponent);
                this.componentList['Menu'] = c;
                return c;
            }
        }),
        Checkbox: defer(() => {
            if (this.componentList['Checkbox']) {
                return this.componentList['Checkbox'];
            }
            else {
                const c = import('../../field-components/cee-checkbox/cee-checkbox.component').then(m => m.CeeCheckboxComponent);
                this.componentList['Checkbox'] = c;
                return c;
            }
        }),
        // Timepicker: defer(() => {
        //     if (this.componentList['Timepicker']) {
        //         return this.componentList['Timepicker'];
        //     } else {
        //         const c = import('../../field-components/cee-time-picker/cee-time-picker.component').then(m => m.CeeTimePickerComponent);
        //         this.componentList['Timepicker'] = c;
        //         return c;
        //     }
        // }),
        // PhoneNumber: defer(() => {
        //     if (this.componentList['PhoneNumber']) {
        //         return this.componentList['PhoneNumber'];
        //     } else {
        //         const c = import('../../field-components/cee-phone-number/cee-phone-number.component').then(m => m.CeePhoneNumberComponent);
        //         this.componentList['PhoneNumber'] = c;
        //         return c;
        //     }
        // }),
        // Picker: defer(() => {
        //     if (this.componentList['Picker']) {
        //         return this.componentList['Picker'];
        //     } else {
        //         const c = import('../../field-components/cee-picker/cee-picker.component').then(m => m.CeePickerComponent);
        //         this.componentList['Picker'] = c;
        //         return c;
        //     }
        // }),
        Button: defer(() => {
            if (this.componentList['Button']) {
                return this.componentList['Button'];
            }
            else {
                const c = import('../../field-components/cee-button/cee-button.component').then(m => m.CeeButtonComponent);
                this.componentList['Button'] = c;
                return c;
            }
        }),
        // Number: defer(() => {
        //     if (this.componentList['Number']) {
        //         return this.componentList['Number'];
        //     } else {
        //         const c = import('../../field-components/cee-number/cee-number.component').then(m => m.CeeNumberComponent);
        //         this.componentList['Number'] = c;
        //         return c;
        //     }
        // }),
        Attachments: defer(() => {
            if (this.componentList['Attachments']) {
                return this.componentList['Attachments'];
            }
            else {
                const c = import('../../field-components/cee-attachments/cee-attachments.component').then(m => m.CeeAttachmentsComponent);
                this.componentList['Attachments'] = c;
                return c;
            }
        }),
        // Table: defer(() => {
        //     if (this.componentList['Table']) {
        //         return this.componentList['Table'];
        //     } else {
        //         const c = import('../../field-components/cee-table/cee-table.component').then(m => m.CeeTableComponent);
        //         this.componentList['Table'] = c;
        //         return c;
        //     }
        // }),
        // 'Table-V2': defer(() => {
        //     if (this.componentList['Table-V2']) {
        //         return this.componentList['Table-V2'];
        //     } else {
        //         const c = import('../../field-components/cee-table-v2/cee-table-v2.component').then(m => m.CeeTableV2Component);
        //         this.componentList['Table-V2'] = c;
        //         return c;
        //     }
        // }),
        // List: defer(() => {
        //     if (this.componentList['List']) {
        //         return this.componentList['List'];
        //     } else {
        //         const c = import('../list-renderer/list-renderer.component').then(m => m.ListRendererComponent);
        //         this.componentList['List'] = c;
        //         return c;
        //     }
        // }),
        // Switch: defer(() => {
        //     if (this.componentList['Switch']) {
        //         return this.componentList['Switch'];
        //     } else {
        //         const c = import('../../field-components/cee-switch/cee-switch.component').then(m => m.CeeSwitchComponent);
        //         this.componentList['Switch'] = c;
        //         return c;
        //     }
        // }),
        // Editor: defer(() => {
        //     if (this.componentList['Editor']) {
        //         return this.componentList['Editor'];
        //     } else {
        //         const c = import('../../field-components/cee-editor/cee-editor.component').then(m => m.CeeEditorComponent);
        //         this.componentList['Editor'] = c;
        //         return c;
        //     }
        // })
    };
    constructor(comp) {
        this.comp = comp;
    }
    getComponentType(fieldType) {
        let comp = this.componentMap[fieldType];
        if (comp) {
            return comp;
        }
        console.log(`fieldType ${fieldType} not found, returning label component`);
        return this.componentMap['label'];
    }
    getComponentInputs(field, i, activePosition) {
        const listComps = ['List', 'Table', 'Table-V2'];
        const rowData = this.comp.repeatebleFieldsRows[i]?.[field.unique_id];
        var inputs = {
            stepId: this.comp.stepId,
            rootData: this.comp.rootData,
            rowData: rowData,
        };
        if (listComps.includes(field.field_type)) {
            inputs['sectionData'] = field;
            inputs['type'] = field.field_type;
        }
        else {
            inputs['fieldData'] = field;
            inputs['keepState'] = true;
            inputs['mandatoryCondition'] = this.comp.mandatoryCondition;
            inputs['editableCondition'] = this.comp.editableCondition;
            inputs['visibleCondition'] = this.comp.visibleCondition;
        }
        if (field.field_type === 'label') {
            inputs['activePosition'] = activePosition;
        }
        else if (field.field_type === 'Button') {
            inputs['primaryKeyIndex'] = {
                name: field.unique_id,
                value: rowData?.['value'],
                type: 'repeatable',
                cellData: rowData
            };
        }
        return inputs;
    }
    getFieldClasses(field, position) {
        const baseClass = `field-${position}`;
        const bootstrapClass = field.field_style
            ? this.comp.commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, this.comp.is_bootstrap, '', this.comp.conditionalUtil.evaluteBootstrapCondition(field))
            : '';
        return `${baseClass} ${bootstrapClass}`.trim();
    }
    static ɵfac = function RBUtil_Factory(t) { return new (t || RBUtil)(i0.ɵɵinject(i1.RBRendererComponent)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RBUtil, factory: RBUtil.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RBUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.RBRendererComponent }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmItdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL3JiLXJlbmRlcmVyL3JiLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLE1BQU07SUFFZixJQUFJLENBQXNCO0lBRTFCLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDbkIsWUFBWSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsc0RBQXNELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsOERBQThELENBQUMsQ0FBQyxJQUFJ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LG9CQUFvQixFQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFDdEIsRUFBRSxFQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUM3RDtZQUNELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFVCxPQUFPLEdBQUcsU0FBUyxJQUFJLGNBQWMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25ELENBQUM7Z0VBalBRLE1BQU07Z0VBQU4sTUFBTSxXQUFOLE1BQU0sbUJBRkgsTUFBTTs7aUZBRVQsTUFBTTtjQUhsQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJCUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL3JiLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSQlV0aWwge1xyXG5cclxuICAgIGNvbXA6IFJCUmVuZGVyZXJDb21wb25lbnQ7XHJcblxyXG4gICAgY29tcG9uZW50TGlzdCA9IHt9O1xyXG4gICAgY29tcG9uZW50TWFwID0ge1xyXG4gICAgICAgIGxhYmVsOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1sYWJlbC9jZWUtbGFiZWwuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlTGFiZWxDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydsYWJlbCddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVGV4dGZpZWxkOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ1RleHRmaWVsZCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUZXh0ZmllbGQnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRleHRmaWVsZC9jZWUtdGV4dGZpZWxkLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRleHRmaWVsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1RleHRmaWVsZCddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gJ0F1dG9jb21wbGV0ZSBUZXh0ZmllbGQnOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ0F1dG9jb21wbGV0ZSBUZXh0ZmllbGQnXSkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnQXV0b2NvbXBsZXRlIFRleHRmaWVsZCddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYXV0by1jb21wbGV0ZS9jZWUtYXV0by1jb21wbGV0ZS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVBdXRvQ29tcGxldGVDb21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydBdXRvY29tcGxldGUgVGV4dGZpZWxkJ10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICAvLyBUZXh0YXJlYTogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydUZXh0YXJlYSddKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUZXh0YXJlYSddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGFyZWEvY2VlLXRleHRhcmVhLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRleHRhcmVhQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGFyZWEnXSA9IGM7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pLFxyXG4gICAgICAgIC8vIERhdGU6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnRGF0ZSddKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydEYXRlJ107XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1kYXRlL2NlZS1kYXRlLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZURhdGVDb21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydEYXRlJ10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICAvLyByYWRpbzogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydyYWRpbyddKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydyYWRpbyddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcmFkaW8vY2VlLXJhZGlvLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVJhZGlvQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsncmFkaW8nXSA9IGM7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pLFxyXG4gICAgICAgIE1lbnU6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydNZW51J107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51L2NlZS1tZW51LmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZU1lbnVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydNZW51J10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBDaGVja2JveDogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydDaGVja2JveCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydDaGVja2JveCddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtY2hlY2tib3gvY2VlLWNoZWNrYm94LmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUNoZWNrYm94Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQ2hlY2tib3gnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIFRpbWVwaWNrZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnVGltZXBpY2tlciddKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUaW1lcGlja2VyJ107XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10aW1lLXBpY2tlci9jZWUtdGltZS1waWNrZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVGltZVBpY2tlckNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1RpbWVwaWNrZXInXSA9IGM7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pLFxyXG4gICAgICAgIC8vIFBob25lTnVtYmVyOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ1Bob25lTnVtYmVyJ10pIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1Bob25lTnVtYmVyJ107XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waG9uZS1udW1iZXIvY2VlLXBob25lLW51bWJlci5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVQaG9uZU51bWJlckNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1Bob25lTnVtYmVyJ10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICAvLyBQaWNrZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10pIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1BpY2tlciddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlUGlja2VyQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICBCdXR0b246IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0J1dHRvbiddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBOdW1iZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnTnVtYmVyJ10pIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ051bWJlciddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbnVtYmVyL2NlZS1udW1iZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlTnVtYmVyQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTnVtYmVyJ10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICBBdHRhY2htZW50czogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydBdHRhY2htZW50cyddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydBdHRhY2htZW50cyddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYXR0YWNobWVudHMvY2VlLWF0dGFjaG1lbnRzLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUF0dGFjaG1lbnRzQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQXR0YWNobWVudHMnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIFRhYmxlOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ1RhYmxlJ10pIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1RhYmxlJ107XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10YWJsZS9jZWUtdGFibGUuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVGFibGVDb21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZSddID0gYztcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSksXHJcbiAgICAgICAgLy8gJ1RhYmxlLVYyJzogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydUYWJsZS1WMiddKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZS1WMiddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFibGUtdjIvY2VlLXRhYmxlLXYyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRhYmxlVjJDb21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZS1WMiddID0gYztcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSksXHJcbiAgICAgICAgLy8gTGlzdDogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydMaXN0J10pIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0xpc3QnXTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uL2xpc3QtcmVuZGVyZXIvbGlzdC1yZW5kZXJlci5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5MaXN0UmVuZGVyZXJDb21wb25lbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydMaXN0J10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICAvLyBTd2l0Y2g6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnU3dpdGNoJ10pIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1N3aXRjaCddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtc3dpdGNoL2NlZS1zd2l0Y2guY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlU3dpdGNoQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnU3dpdGNoJ10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KSxcclxuICAgICAgICAvLyBFZGl0b3I6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnRWRpdG9yJ10pIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0VkaXRvciddO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtZWRpdG9yL2NlZS1lZGl0b3IuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlRWRpdG9yQ29tcG9uZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnRWRpdG9yJ10gPSBjO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wOiBSQlJlbmRlcmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wID0gY29tcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnRUeXBlKGZpZWxkVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNvbXAgPSB0aGlzLmNvbXBvbmVudE1hcFtmaWVsZFR5cGVdO1xyXG4gICAgICAgIGlmKGNvbXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBmaWVsZFR5cGUgJHtmaWVsZFR5cGV9IG5vdCBmb3VuZCwgcmV0dXJuaW5nIGxhYmVsIGNvbXBvbmVudGApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudE1hcFsnbGFiZWwnXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnRJbnB1dHMoZmllbGQ6IGFueSwgaTogbnVtYmVyLCBhY3RpdmVQb3NpdGlvbjogYW55KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdENvbXBzID0gWydMaXN0JywgJ1RhYmxlJywgJ1RhYmxlLVYyJ107XHJcbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IHRoaXMuY29tcC5yZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF07XHJcbiAgICAgICAgdmFyIGlucHV0cyA9IHtcclxuICAgICAgICAgICAgc3RlcElkOiB0aGlzLmNvbXAuc3RlcElkLFxyXG4gICAgICAgICAgICByb290RGF0YTogdGhpcy5jb21wLnJvb3REYXRhLFxyXG4gICAgICAgICAgICByb3dEYXRhOiByb3dEYXRhLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKGxpc3RDb21wcy5pbmNsdWRlcyhmaWVsZC5maWVsZF90eXBlKSkge1xyXG4gICAgICAgICAgICBpbnB1dHNbJ3NlY3Rpb25EYXRhJ10gPSBmaWVsZDtcclxuICAgICAgICAgICAgaW5wdXRzWyd0eXBlJ10gPSBmaWVsZC5maWVsZF90eXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRzWydmaWVsZERhdGEnXSA9IGZpZWxkO1xyXG4gICAgICAgICAgICBpbnB1dHNbJ2tlZXBTdGF0ZSddID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5wdXRzWydtYW5kYXRvcnlDb25kaXRpb24nXSA9IHRoaXMuY29tcC5tYW5kYXRvcnlDb25kaXRpb247XHJcbiAgICAgICAgICAgIGlucHV0c1snZWRpdGFibGVDb25kaXRpb24nXSA9IHRoaXMuY29tcC5lZGl0YWJsZUNvbmRpdGlvbjtcclxuICAgICAgICAgICAgaW5wdXRzWyd2aXNpYmxlQ29uZGl0aW9uJ10gPSB0aGlzLmNvbXAudmlzaWJsZUNvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgICAgICAgaW5wdXRzWydhY3RpdmVQb3NpdGlvbiddID0gYWN0aXZlUG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0J1dHRvbicpIHtcclxuICAgICAgICAgICAgaW5wdXRzWydwcmltYXJ5S2V5SW5kZXgnXSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLnVuaXF1ZV9pZCwgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm93RGF0YT8uWyd2YWx1ZSddLCBcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdyZXBlYXRhYmxlJywgXHJcbiAgICAgICAgICAgICAgICBjZWxsRGF0YTogcm93RGF0YVxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlucHV0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0RmllbGRDbGFzc2VzKGZpZWxkOiBhbnksIHBvc2l0aW9uOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGJhc2VDbGFzcyA9IGBmaWVsZC0ke3Bvc2l0aW9ufWA7XHJcbiAgICAgICAgY29uc3QgYm9vdHN0cmFwQ2xhc3MgPSBmaWVsZC5maWVsZF9zdHlsZSBcclxuICAgICAgICAgICAgPyB0aGlzLmNvbXAuY29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhcclxuICAgICAgICAgICAgICAgIGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcC5pc19ib290c3RyYXAsIFxyXG4gICAgICAgICAgICAgICAgJycsIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wLmNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGAke2Jhc2VDbGFzc30gJHtib290c3RyYXBDbGFzc31gLnRyaW0oKTtcclxuICAgIH1cclxufVxyXG4iXX0=