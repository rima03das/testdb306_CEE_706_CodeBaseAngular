import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ShowPasswordDirective {
    el;
    showLastCharDelay;
    valueLength = 0;
    constructor(el) {
        this.el = el;
    }
    onInput(target) {
        if (this.showLastCharDelay) {
            if (target.type === 'password') {
                if (target.value.length > 0) {
                    if (target.value.length > this.valueLength) {
                        target.type = 'text';
                        this.valueLength = target.value.length;
                        let copyInputVal = target.value;
                        let mask = "•";
                        target.value = mask.repeat(target.value.length - 1) + target.value[target.value.length - 1];
                        setTimeout(() => {
                            target.type = 'password';
                            target.value = copyInputVal;
                        }, 30);
                    }
                    else {
                        this.valueLength = target.value.length;
                    }
                }
            }
        }
    }
    static ɵfac = function ShowPasswordDirective_Factory(t) { return new (t || ShowPasswordDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ShowPasswordDirective, selectors: [["", "showPassword", "", "showLastCharDelay", ""]], hostBindings: function ShowPasswordDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function ShowPasswordDirective_input_HostBindingHandler($event) { return ctx.onInput($event.target); });
        } }, inputs: { showLastCharDelay: "showLastCharDelay" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShowPasswordDirective, [{
        type: Directive,
        args: [{
                selector: '[showPassword][showLastCharDelay]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }], { showLastCharDelay: [{
            type: Input
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1Bhc3N3b3JkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3Nob3dQYXNzd29yZC9zaG93UGFzc3dvcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0UsTUFBTSxPQUFPLHFCQUFxQjtJQUdaO0lBRlgsaUJBQWlCLENBQVU7SUFDcEMsV0FBVyxHQUFXLENBQUMsQ0FBQztJQUN4QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7SUFHdkMsT0FBTyxDQUFDLE1BQXdCO1FBQzlCLElBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQzlCLElBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO29CQUN6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUM7d0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO3dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO3dCQUN2QyxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNoQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7d0JBQ2YsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzFGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7NEJBQ2QsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7NEJBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO3dCQUM5QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQ1I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztxQkFDeEM7aUJBQ0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQzsrRUExQlUscUJBQXFCOzZEQUFyQixxQkFBcUI7WUFBckIsZ0dBQUEsMEJBQXNCLElBQUQ7OztpRkFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxVQUFVLEVBQUUsSUFBSTthQUNqQjsyQ0FFVSxpQkFBaUI7a0JBQXpCLEtBQUs7WUFLTixPQUFPO2tCQUROLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzaG93UGFzc3dvcmRdW3Nob3dMYXN0Q2hhckRlbGF5XScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3dQYXNzd29yZERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgc2hvd0xhc3RDaGFyRGVsYXk6IGJvb2xlYW47XHJcbiAgdmFsdWVMZW5ndGg6IG51bWJlciA9IDA7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgb25JbnB1dCh0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmKHRoaXMuc2hvd0xhc3RDaGFyRGVsYXkpIHtcclxuICAgICAgaWYgKHRhcmdldC50eXBlID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgaWYodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgaWYoIHRhcmdldC52YWx1ZS5sZW5ndGggPiB0aGlzLnZhbHVlTGVuZ3RoKXtcclxuICAgICAgICAgICAgdGFyZ2V0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVMZW5ndGggPSB0YXJnZXQudmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgY29weUlucHV0VmFsID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgbWFzayA9IFwi4oCiXCI7XHJcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IG1hc2sucmVwZWF0KHRhcmdldC52YWx1ZS5sZW5ndGgtMSkgKyB0YXJnZXQudmFsdWVbdGFyZ2V0LnZhbHVlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0YXJnZXQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gY29weUlucHV0VmFsO1xyXG4gICAgICAgICAgICB9LCAzMCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlTGVuZ3RoID0gdGFyZ2V0LnZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19