import { Directive, HostListener } from '@angular/core';
import { CommonUtil } from '../../utils/common-util';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/common-util";
export class SeparatorDirective {
    _inputEl;
    cdRef;
    commonUtil;
    constructor(_inputEl, cdRef, commonUtil) {
        this._inputEl = _inputEl;
        this.cdRef = cdRef;
        this.commonUtil = commonUtil;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            let inputValue = this._inputEl.nativeElement.value;
            // 🔹 Strip everything except digits, comma, dot
            inputValue = inputValue.replace(/[^0-9.,]/g, '');
            // 🔹 Ensure only first dot stays (remove extra dots)
            const firstDotIndex = inputValue.indexOf('.');
            if (firstDotIndex !== -1) {
                // remove all dots after the first
                inputValue =
                    inputValue.slice(0, firstDotIndex + 1) +
                        inputValue
                            .slice(firstDotIndex + 1)
                            .replace(/\./g, '');
            }
            this._inputEl.nativeElement.value =
                this.commonUtil.formatNumber(inputValue.replace(/,/g, ''));
            this.cdRef.detectChanges();
        });
    }
    onInput(event) {
        const input = this._inputEl.nativeElement;
        // 🔹 1. Sanitize: allow only digits + . + ,
        let rawInput = input.value.replace(/[^0-9.,]/g, '');
        // 🔹 2. Allow only one decimal point
        const firstDotIndex = rawInput.indexOf('.');
        if (firstDotIndex !== -1) {
            // remove all dots after the first
            rawInput =
                rawInput.slice(0, firstDotIndex + 1) +
                    rawInput.slice(firstDotIndex + 1).replace(/\./g, '');
        }
        // 🔹 3. Remove commas to get raw numeric string
        const rawValue = rawInput.replace(/,/g, '');
        const cursorPos = input.selectionStart ?? 0;
        // Track digits before cursor
        const rawDigitsBeforeCursor = rawInput
            .slice(0, cursorPos)
            .replace(/[^0-9]/g, '');
        const digitsBeforeCursor = rawDigitsBeforeCursor.length;
        const hasDecimal = rawValue.includes('.');
        const [rawIntPart, rawDecimalPart = ''] = rawValue.split('.');
        // 🔹 4. Format integer part
        const formattedInt = this.commonUtil.formatNumber(rawIntPart);
        let formatted = formattedInt;
        // Keep decimal and up to 2 digits if decimal exists
        if (hasDecimal) {
            const safeDecimal = rawDecimalPart.slice(0, 2);
            formatted += '.' + safeDecimal;
        }
        input.value = formatted;
        // 🔹 5. Determine target cursor position
        let cursorIndex = 0;
        let digitCount = 0;
        for (; cursorIndex < formatted.length; cursorIndex++) {
            if (/\d/.test(formatted[cursorIndex])) {
                digitCount++;
            }
            if (digitCount === digitsBeforeCursor) {
                break;
            }
        }
        // If we’re deleting decimal digits and the cursor would land on the dot, skip it
        if (formatted[cursorIndex + 1] === '.' &&
            hasDecimal &&
            rawDecimalPart.length < 2) {
            cursorIndex++;
        }
        // Place cursor
        input.setSelectionRange(cursorIndex + 1, cursorIndex + 1);
    }
    static ɵfac = function SeparatorDirective_Factory(t) { return new (t || SeparatorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CommonUtil)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SeparatorDirective, selectors: [["input", "separator", ""]], hostBindings: function SeparatorDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function SeparatorDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
        } }, standalone: true, features: [i0.ɵɵProvidersFeature([CommonUtil])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeparatorDirective, [{
        type: Directive,
        args: [{
                selector: 'input[separator]',
                standalone: true,
                providers: [CommonUtil]
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.CommonUtil }], { onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3Rob3VzYW5kU2VwYXJhdG9yL3NlcGFyYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFPckQsTUFBTSxPQUFPLGtCQUFrQjtJQUVuQjtJQUNBO0lBQ0E7SUFIVixZQUNVLFFBQXNDLEVBQ3RDLEtBQXdCLEVBQ3hCLFVBQXNCO1FBRnRCLGFBQVEsR0FBUixRQUFRLENBQThCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQztJQUVKLGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBRW5ELGdEQUFnRDtZQUNoRCxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFakQscURBQXFEO1lBQ3JELE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLGtDQUFrQztnQkFDbEMsVUFBVTtvQkFDUixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QyxVQUFVOzZCQUNQLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FB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V0FBVyxFQUFFLENBQUM7U0FDZjtRQUVELGVBQWU7UUFDZixLQUFLLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs0RUFoR1Usa0JBQWtCOzZEQUFsQixrQkFBa0I7WUFBbEIsNkZBQUEsbUJBQWUsSUFBRztnRUFGbEIsQ0FBQyxVQUFVLENBQUM7O2lGQUVaLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN4QjtvR0FpQ0MsT0FBTztrQkFETixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXRbc2VwYXJhdG9yXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtDb21tb25VdGlsXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VwYXJhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9pbnB1dEVsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGNvbW1vblV0aWw6IENvbW1vblV0aWxcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuX2lucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuXHJcbiAgICAgIC8vIPCflLkgU3RyaXAgZXZlcnl0aGluZyBleGNlcHQgZGlnaXRzLCBjb21tYSwgZG90XHJcbiAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnJlcGxhY2UoL1teMC05LixdL2csICcnKTtcclxuXHJcbiAgICAgIC8vIPCflLkgRW5zdXJlIG9ubHkgZmlyc3QgZG90IHN0YXlzIChyZW1vdmUgZXh0cmEgZG90cylcclxuICAgICAgY29uc3QgZmlyc3REb3RJbmRleCA9IGlucHV0VmFsdWUuaW5kZXhPZignLicpO1xyXG4gICAgICBpZiAoZmlyc3REb3RJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAvLyByZW1vdmUgYWxsIGRvdHMgYWZ0ZXIgdGhlIGZpcnN0XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9XHJcbiAgICAgICAgICBpbnB1dFZhbHVlLnNsaWNlKDAsIGZpcnN0RG90SW5kZXggKyAxKSArXHJcbiAgICAgICAgICBpbnB1dFZhbHVlXHJcbiAgICAgICAgICAgIC5zbGljZShmaXJzdERvdEluZGV4ICsgMSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX2lucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSA9XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsLmZvcm1hdE51bWJlcihpbnB1dFZhbHVlLnJlcGxhY2UoLywvZywgJycpKTtcclxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcclxuICBvbklucHV0KGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5faW5wdXRFbC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIC8vIPCflLkgMS4gU2FuaXRpemU6IGFsbG93IG9ubHkgZGlnaXRzICsgLiArICxcclxuICAgIGxldCByYXdJbnB1dCA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1teMC05LixdL2csICcnKTtcclxuXHJcbiAgICAvLyDwn5S5IDIuIEFsbG93IG9ubHkgb25lIGRlY2ltYWwgcG9pbnRcclxuICAgIGNvbnN0IGZpcnN0RG90SW5kZXggPSByYXdJbnB1dC5pbmRleE9mKCcuJyk7XHJcbiAgICBpZiAoZmlyc3REb3RJbmRleCAhPT0gLTEpIHtcclxuICAgICAgLy8gcmVtb3ZlIGFsbCBkb3RzIGFmdGVyIHRoZSBmaXJzdFxyXG4gICAgICByYXdJbnB1dCA9XHJcbiAgICAgICAgcmF3SW5wdXQuc2xpY2UoMCwgZmlyc3REb3RJbmRleCArIDEpICtcclxuICAgICAgICByYXdJbnB1dC5zbGljZShmaXJzdERvdEluZGV4ICsgMSkucmVwbGFjZSgvXFwuL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDwn5S5IDMuIFJlbW92ZSBjb21tYXMgdG8gZ2V0IHJhdyBudW1lcmljIHN0cmluZ1xyXG4gICAgY29uc3QgcmF3VmFsdWUgPSByYXdJbnB1dC5yZXBsYWNlKC8sL2csICcnKTtcclxuICAgIGNvbnN0IGN1cnNvclBvcyA9IGlucHV0LnNlbGVjdGlvblN0YXJ0ID8/IDA7XHJcblxyXG4gICAgLy8gVHJhY2sgZGlnaXRzIGJlZm9yZSBjdXJzb3JcclxuICAgIGNvbnN0IHJhd0RpZ2l0c0JlZm9yZUN1cnNvciA9IHJhd0lucHV0XHJcbiAgICAgIC5zbGljZSgwLCBjdXJzb3JQb3MpXHJcbiAgICAgIC5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG4gICAgY29uc3QgZGlnaXRzQmVmb3JlQ3Vyc29yID0gcmF3RGlnaXRzQmVmb3JlQ3Vyc29yLmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBoYXNEZWNpbWFsID0gcmF3VmFsdWUuaW5jbHVkZXMoJy4nKTtcclxuICAgIGNvbnN0IFtyYXdJbnRQYXJ0LCByYXdEZWNpbWFsUGFydCA9ICcnXSA9IHJhd1ZhbHVlLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgLy8g8J+UuSA0LiBGb3JtYXQgaW50ZWdlciBwYXJ0XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRJbnQgPSB0aGlzLmNvbW1vblV0aWwuZm9ybWF0TnVtYmVyKHJhd0ludFBhcnQpO1xyXG4gICAgbGV0IGZvcm1hdHRlZCA9IGZvcm1hdHRlZEludDtcclxuXHJcbiAgICAvLyBLZWVwIGRlY2ltYWwgYW5kIHVwIHRvIDIgZGlnaXRzIGlmIGRlY2ltYWwgZXhpc3RzXHJcbiAgICBpZiAoaGFzRGVjaW1hbCkge1xyXG4gICAgICBjb25zdCBzYWZlRGVjaW1hbCA9IHJhd0RlY2ltYWxQYXJ0LnNsaWNlKDAsIDIpO1xyXG4gICAgICBmb3JtYXR0ZWQgKz0gJy4nICsgc2FmZURlY2ltYWw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWQ7XHJcblxyXG4gICAgLy8g8J+UuSA1LiBEZXRlcm1pbmUgdGFyZ2V0IGN1cnNvciBwb3NpdGlvblxyXG4gICAgbGV0IGN1cnNvckluZGV4ID0gMDtcclxuICAgIGxldCBkaWdpdENvdW50ID0gMDtcclxuXHJcbiAgICBmb3IgKDsgY3Vyc29ySW5kZXggPCBmb3JtYXR0ZWQubGVuZ3RoOyBjdXJzb3JJbmRleCsrKSB7XHJcbiAgICAgIGlmICgvXFxkLy50ZXN0KGZvcm1hdHRlZFtjdXJzb3JJbmRleF0pKSB7XHJcbiAgICAgICAgZGlnaXRDb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkaWdpdENvdW50ID09PSBkaWdpdHNCZWZvcmVDdXJzb3IpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHdl4oCZcmUgZGVsZXRpbmcgZGVjaW1hbCBkaWdpdHMgYW5kIHRoZSBjdXJzb3Igd291bGQgbGFuZCBvbiB0aGUgZG90LCBza2lwIGl0XHJcbiAgICBpZiAoXHJcbiAgICAgIGZvcm1hdHRlZFtjdXJzb3JJbmRleCArIDFdID09PSAnLicgJiZcclxuICAgICAgaGFzRGVjaW1hbCAmJlxyXG4gICAgICByYXdEZWNpbWFsUGFydC5sZW5ndGggPCAyXHJcbiAgICApIHtcclxuICAgICAgY3Vyc29ySW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSBjdXJzb3JcclxuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKGN1cnNvckluZGV4ICsgMSwgY3Vyc29ySW5kZXggKyAxKTtcclxuICB9XHJcbn1cclxuIl19