import { CommonModule, NgSwitch } from '@angular/common';
import { Component, Inject, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { DomSanitizePipe } from '../../pipes/dom-sanitize.pipe';
import { ImageCropperComponent } from 'ngx-image-cropper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
function ImageCropModalComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ImageCropModalComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.zoomOut()); });
    i0.ɵɵtext(1, "Zoom Out");
    i0.ɵɵelementEnd();
} }
function ImageCropModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ImageCropModalComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.zoomIn()); });
    i0.ɵɵtext(1, "Zoom In");
    i0.ɵɵelementEnd();
} }
export class ImageCropModalComponent {
    dialogRef;
    sanitizer;
    data;
    maintainAspectRatio = false;
    cropperStaticWidth = 170;
    cropperStaticHeight = 170;
    cropperMinWidth = 170;
    cropperMinHeight = 170;
    onlyScaleDown = true;
    roundCropper = true;
    imageChangedEvent = '';
    croppedImage = '';
    canvasRotation = 0;
    rotation;
    translateH = 0;
    translateV = 0;
    scale = 1;
    aspectRatio = 1 / 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform = {
        translateUnit: 'px'
    };
    imageURL;
    loading = false;
    allowMoveImage = true;
    hidden = false;
    ppFormat = 'png';
    additionalParameter;
    allowZoomImage = true;
    constructor(dialogRef, sanitizer, data) {
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.data = data;
        // console.log(data);
        this.imageChangedEvent = data.message;
        this.additionalParameter = data.additionalParameter;
        this.maintainAspectRatio = this.additionalParameter && this.additionalParameter['CEE_PP_MaintainAspectRatio'] && this.additionalParameter['CEE_PP_MaintainAspectRatio'].toLowerCase() == 'true' ? true : false;
        this.aspectRatio = this.additionalParameter && this.additionalParameter['CEE_PP_AspectRatio'] ? this.additionalParameter['CEE_PP_AspectRatio'] : this.aspectRatio;
        this.ppFormat = this.additionalParameter && this.additionalParameter['CEE_PP_Format'] ? this.additionalParameter['CEE_PP_Format'] : this.ppFormat;
        this.cropperMinWidth = this.additionalParameter && this.additionalParameter['CEE_PP_CropperMinWidth'] ? Number(this.additionalParameter['CEE_PP_CropperMinWidth']) : this.cropperMinWidth;
        this.cropperMinHeight = this.additionalParameter && this.additionalParameter['CEE_PP_CropperMinHeight'] ? Number(this.additionalParameter['CEE_PP_CropperMinHeight']) : this.cropperMinHeight;
        this.roundCropper = this.additionalParameter && this.additionalParameter['CEE_PP_RoundCropper'] && this.additionalParameter['CEE_PP_RoundCropper'].toLowerCase() == 'true' ? true : false;
        this.allowMoveImage = this.additionalParameter && this.additionalParameter['CEE_AllowMoveImage'] && this.additionalParameter['CEE_AllowMoveImage'].toLowerCase() == 'true' ? true : false;
        this.allowZoomImage = this.additionalParameter && this.additionalParameter['CEE_AllowZoomImage'] && this.additionalParameter['CEE_AllowZoomImage'].toLowerCase() == 'true' ? true : false;
        // console.log("format: ",this.ppFormat)
        if (data.config && data.config.disableClose) {
            dialogRef.disableClose = data.config.disableClose;
        }
    }
    onPostiveClick() {
        this.dialogRef.close(true);
    }
    onNegativeClick() {
        this.dialogRef.close(false);
    }
    // #####################################
    imageCropped(event) {
        this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
        // console.log(event);
    }
    imageLoaded() {
        this.showCropper = true;
        // console.log('Image loaded');
    }
    cropperReady(sourceImageDimensions) {
        // console.log('Cropper ready', sourceImageDimensions);
        this.loading = false;
    }
    loadImageFailed() {
        console.error('Load image failed');
    }
    rotateLeft() {
        this.loading = true;
        setTimeout(() => {
            this.canvasRotation--;
            this.flipAfterRotate();
        });
    }
    rotateRight() {
        this.loading = true;
        setTimeout(() => {
            this.canvasRotation++;
            this.flipAfterRotate();
        });
    }
    moveLeft() {
        this.transform = {
            ...this.transform,
            translateH: ++this.translateH
        };
    }
    moveRight() {
        this.transform = {
            ...this.transform,
            translateH: --this.translateH
        };
    }
    moveTop() {
        this.transform = {
            ...this.transform,
            translateV: ++this.translateV
        };
    }
    moveBottom() {
        this.transform = {
            ...this.transform,
            translateV: --this.translateV
        };
    }
    flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
        this.translateH = 0;
        this.translateV = 0;
    }
    flipHorizontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }
    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }
    resetImage() {
        this.scale = 1;
        this.rotation = 0;
        this.canvasRotation = 0;
        this.transform = {
            translateUnit: 'px'
        };
    }
    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }
    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }
    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }
    updateRotation() {
        this.transform = {
            ...this.transform,
            rotate: this.rotation
        };
    }
    toggleAspectRatio() {
        this.aspectRatio = this.aspectRatio === 4 / 3 ? 16 / 5 : 4 / 3;
    }
    applyCropedImage() {
        // console.log("Cropped Image: ", this.croppedImage )
        this.dialogRef.close(this.croppedImage.changingThisBreaksApplicationSecurity);
    }
    cancelCropedImage() {
        // console.log("cancel Croped Image" )
        this.dialogRef.close();
    }
    static ɵfac = function ImageCropModalComponent_Factory(t) { return new (t || ImageCropModalComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageCropModalComponent, selectors: [["lib-image-crop-modal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 12, vars: 24, consts: [[1, "cropper-container"], [1, "float-item", "cropper-wrapper"], ["imageAltText", "Alternative image text", "backgroundColor", "white", "output", "base64", 3, "transformChange", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", "imageChangedEvent", "imageURL", "maintainAspectRatio", "cropperStaticWidth", "cropperStaticHeight", "cropperMinWidth", "cropperMinHeight", "onlyScaleDown", "roundCropper", "containWithinAspectRatio", "aspectRatio", "canvasRotation", "transform", "alignImage", "allowMoveImage", "hidden", "format"], [1, "float-item"], [3, "src"], [1, "pp-action-btn", "btn-container"], [1, "btn", "btn-primary", 3, "click"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function ImageCropModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "image-cropper", 2);
            i0.ɵɵtwoWayListener("transformChange", function ImageCropModalComponent_Template_image_cropper_transformChange_2_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.transform, $event) || (ctx.transform = $event); return $event; });
            i0.ɵɵlistener("imageCropped", function ImageCropModalComponent_Template_image_cropper_imageCropped_2_listener($event) { return ctx.imageCropped($event); })("imageLoaded", function ImageCropModalComponent_Template_image_cropper_imageLoaded_2_listener() { return ctx.imageLoaded(); })("cropperReady", function ImageCropModalComponent_Template_image_cropper_cropperReady_2_listener($event) { return ctx.cropperReady($event); })("loadImageFailed", function ImageCropModalComponent_Template_image_cropper_loadImageFailed_2_listener() { return ctx.loadImageFailed(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 5)(6, "button", 6);
            i0.ɵɵlistener("click", function ImageCropModalComponent_Template_button_click_6_listener() { return ctx.cancelCropedImage(); });
            i0.ɵɵtext(7, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, ImageCropModalComponent_button_8_Template, 2, 0, "button", 7)(9, ImageCropModalComponent_button_9_Template, 2, 0, "button", 7);
            i0.ɵɵelementStart(10, "button", 6);
            i0.ɵɵlistener("click", function ImageCropModalComponent_Template_button_click_10_listener() { return ctx.applyCropedImage(); });
            i0.ɵɵtext(11, "Apply");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("display", ctx.showCropper ? null : "none");
            i0.ɵɵproperty("imageChangedEvent", ctx.imageChangedEvent)("imageURL", ctx.imageURL)("maintainAspectRatio", ctx.maintainAspectRatio)("cropperStaticWidth", ctx.cropperStaticWidth)("cropperStaticHeight", ctx.cropperStaticHeight)("cropperMinWidth", ctx.cropperMinWidth)("cropperMinHeight", ctx.cropperMinHeight)("onlyScaleDown", ctx.onlyScaleDown)("roundCropper", ctx.roundCropper)("containWithinAspectRatio", ctx.containWithinAspectRatio)("aspectRatio", ctx.aspectRatio)("canvasRotation", ctx.canvasRotation);
            i0.ɵɵtwoWayProperty("transform", ctx.transform);
            i0.ɵɵproperty("alignImage", "center")("allowMoveImage", ctx.allowMoveImage)("hidden", ctx.hidden)("format", ctx.ppFormat);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("border", ctx.croppedImage ? "1px solid black" : "none");
            i0.ɵɵproperty("src", ctx.croppedImage, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.allowZoomImage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.allowZoomImage);
        } }, dependencies: [MatFormFieldModule, MatInputModule, CommonModule, i3.NgIf, MatDialogModule, NgxImageZoomModule, FormsModule, ImageCropperComponent], styles: [".cropper-container[_ngcontent-%COMP%]{width:750px;display:flex;flex-wrap:nowrap;padding:25px}.float-item[_ngcontent-%COMP%]{width:50%;text-align:right}.float-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:295px;width:295px}.btn-container[_ngcontent-%COMP%]{text-align:center;padding:15px}.btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageCropModalComponent, [{
        type: Component,
        args: [{ selector: 'lib-image-crop-modal', standalone: true, imports: [NgSwitch, MatFormFieldModule, MatInputModule, CommonModule, MatDialogModule, NgxImageZoomModule, DomSanitizePipe, FormsModule, ImageCropperComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], template: "<div class=\"cropper-container\">\r\n    <div class=\"float-item cropper-wrapper\">\r\n        <image-cropper\r\n            [imageChangedEvent]=\"imageChangedEvent\"\r\n            [imageURL]=\"imageURL\"\r\n    \r\n            [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            [cropperStaticWidth]=\"cropperStaticWidth\"\r\n            [cropperStaticHeight]=\"cropperStaticHeight\"\r\n            [cropperMinWidth]=\"cropperMinWidth\"\r\n            [cropperMinHeight]=\"cropperMinHeight\"\r\n            [onlyScaleDown]=\"onlyScaleDown\"\r\n            [roundCropper]=\"roundCropper\"\r\n    \r\n            [containWithinAspectRatio]=\"containWithinAspectRatio\"\r\n            [aspectRatio]=\"aspectRatio\"\r\n            [canvasRotation]=\"canvasRotation\"\r\n            [(transform)]=\"transform\"\r\n            [alignImage]=\"'center'\"\r\n            [style.display]=\"showCropper ? null : 'none'\"\r\n            [allowMoveImage]=\"allowMoveImage\"\r\n            [hidden]=\"hidden\"\r\n            imageAltText=\"Alternative image text\"\r\n            backgroundColor=\"white\"\r\n            output=\"base64\"\r\n            [format]=\"ppFormat\"\r\n            (imageCropped)=\"imageCropped($event)\"\r\n            (imageLoaded)=\"imageLoaded()\"\r\n            (cropperReady)=\"cropperReady($event)\"\r\n            (loadImageFailed)=\"loadImageFailed()\"\r\n        ></image-cropper>\r\n    </div>\r\n    <div class=\"float-item\">\r\n        <img [src]=\"croppedImage\" [style.border]=\"croppedImage ? '1px solid black' : 'none'\" />\r\n    </div>\r\n</div>\r\n<div class=\"pp-action-btn btn-container\">\r\n    <button class=\"btn btn-primary\" (click)=\"cancelCropedImage()\">Cancel</button>\r\n    <button *ngIf=\"allowZoomImage\" class=\"btn btn-outline-primary\" (click)=\"zoomOut()\">Zoom Out</button> \r\n    <button *ngIf=\"allowZoomImage\" class=\"btn btn-outline-primary\" (click)=\"zoomIn()\">Zoom In</button>\r\n    <button class=\"btn btn-primary\" (click)=\"applyCropedImage()\">Apply</button>\r\n</div>\r\n", styles: [".cropper-container{width:750px;display:flex;flex-wrap:nowrap;padding:25px}.float-item{width:50%;text-align:right}.float-item img{height:295px;width:295px}.btn-container{text-align:center;padding:15px}.btn-container button{margin:5px}\n"] }]
    }], () => [{ type: i1.MatDialogRef }, { type: i2.DomSanitizer }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImageCropModalComponent, { className: "ImageCropModalComponent", filePath: "lib\\field-components\\cee-profile-image\\image-crop-modal.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtcHJvZmlsZS1pbWFnZS9pbWFnZS1jcm9wLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1wcm9maWxlLWltYWdlL2ltYWdlLWNyb3AtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQWdDLGVBQWUsSUFBSSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFpQyxxQkFBcUIsRUFBK0IsTUFBTSxtQkFBbUIs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RUFBRSxZQUFZLFdBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFtQixXQUFXLEVBQUUscUJBQXFCOztpRkFHckosdUJBQXVCO2NBUm5DLFNBQVM7MkJBQ0ksc0JBQXNCLGNBR3BCLElBQUksV0FDUCxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixDQUFDLFdBQ3ZKLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7O3NCQW9DN0MsTUFBTTt1QkFBQyxlQUFlOztrRkFsQ2xCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdTd2l0Y2ggfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiBhcyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSBhcyBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBOZ3hJbWFnZVpvb21Nb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2Utem9vbSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL2RvbS1zYW5pdGl6ZS5waXBlJztcclxuaW1wb3J0IHsgRGltZW5zaW9ucywgSW1hZ2VDcm9wcGVkRXZlbnQsIEltYWdlQ3JvcHBlckNvbXBvbmVudCwgSW1hZ2VUcmFuc2Zvcm0sIExvYWRlZEltYWdlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWItaW1hZ2UtY3JvcC1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY3JvcC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pbWFnZS1jcm9wLW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW05nU3dpdGNoLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBDb21tb25Nb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTmd4SW1hZ2Vab29tTW9kdWxlLCBEb21TYW5pdGl6ZVBpcGUsIEZvcm1zTW9kdWxlLCBJbWFnZUNyb3BwZXJDb21wb25lbnRdLFxyXG4gICAgc2NoZW1hczpbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlQ3JvcE1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBhbnkgPSBmYWxzZTtcclxuICAgIGNyb3BwZXJTdGF0aWNXaWR0aDogYW55ID0gMTcwO1xyXG4gICAgY3JvcHBlclN0YXRpY0hlaWdodDogYW55ID0gMTcwO1xyXG4gICAgY3JvcHBlck1pbldpZHRoOiBhbnkgPSAxNzA7XHJcbiAgICBjcm9wcGVyTWluSGVpZ2h0OiBhbnkgPSAxNzA7XHJcbiAgICBvbmx5U2NhbGVEb3duOiBhbnkgPSB0cnVlO1xyXG4gICAgcm91bmRDcm9wcGVyOiBhbnkgPSB0cnVlO1xyXG5cclxuICAgIGltYWdlQ2hhbmdlZEV2ZW50OiBhbnkgPSAnJztcclxuICAgIGNyb3BwZWRJbWFnZTogYW55ID0gJyc7XHJcbiAgICBjYW52YXNSb3RhdGlvbiA9IDA7XHJcbiAgICByb3RhdGlvbj86IG51bWJlcjtcclxuICAgIHRyYW5zbGF0ZUggPSAwO1xyXG4gICAgdHJhbnNsYXRlViA9IDA7XHJcbiAgICBzY2FsZSA9IDE7XHJcbiAgICBhc3BlY3RSYXRpbyA9IDEvMTtcclxuICAgIHNob3dDcm9wcGVyID0gZmFsc2U7XHJcbiAgICBjb250YWluV2l0aGluQXNwZWN0UmF0aW8gPSBmYWxzZTtcclxuICAgIHRyYW5zZm9ybTogSW1hZ2VUcmFuc2Zvcm0gPSB7XHJcbiAgICAgIHRyYW5zbGF0ZVVuaXQ6ICdweCdcclxuICAgIH07XHJcbiAgICBpbWFnZVVSTD86IHN0cmluZztcclxuICAgIGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIGFsbG93TW92ZUltYWdlID0gdHJ1ZTtcclxuICAgIGhpZGRlbiA9IGZhbHNlO1xyXG4gICAgcHBGb3JtYXQgPSAncG5nJztcclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXI6IGFueTtcclxuICAgIGFsbG93Wm9vbUltYWdlOiBhbnkgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZUNyb3BNb2RhbENvbXBvbmVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyID0gZGF0YS5hZGRpdGlvbmFsUGFyYW1ldGVyO1xyXG4gICAgICAgIHRoaXMubWFpbnRhaW5Bc3BlY3RSYXRpbyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlciAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QUF9NYWludGFpbkFzcGVjdFJhdGlvJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfUFBfTWFpbnRhaW5Bc3BlY3RSYXRpbyddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfUFBfQXNwZWN0UmF0aW8nXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1BQX0FzcGVjdFJhdGlvJ10gOiB0aGlzLmFzcGVjdFJhdGlvO1xyXG4gICAgICAgIHRoaXMucHBGb3JtYXQgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfUFBfRm9ybWF0J10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QUF9Gb3JtYXQnXSA6IHRoaXMucHBGb3JtYXQ7XHJcbiAgICAgICAgdGhpcy5jcm9wcGVyTWluV2lkdGggPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfUFBfQ3JvcHBlck1pbldpZHRoJ10gPyBOdW1iZXIodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfUFBfQ3JvcHBlck1pbldpZHRoJ10pIDogdGhpcy5jcm9wcGVyTWluV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jcm9wcGVyTWluSGVpZ2h0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1BQX0Nyb3BwZXJNaW5IZWlnaHQnXSA/IE51bWJlcih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QUF9Dcm9wcGVyTWluSGVpZ2h0J10pIDogdGhpcy5jcm9wcGVyTWluSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMucm91bmRDcm9wcGVyID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1BQX1JvdW5kQ3JvcHBlciddICAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QUF9Sb3VuZENyb3BwZXInXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmFsbG93TW92ZUltYWdlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0FsbG93TW92ZUltYWdlJ10gICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0FsbG93TW92ZUltYWdlJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbGxvd1pvb21JbWFnZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlciAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9BbGxvd1pvb21JbWFnZSddICAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9BbGxvd1pvb21JbWFnZSddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybWF0OiBcIix0aGlzLnBwRm9ybWF0KVxyXG4gICAgICAgIGlmIChkYXRhLmNvbmZpZyAmJiBkYXRhLmNvbmZpZy5kaXNhYmxlQ2xvc2UpIHtcclxuICAgICAgICAgICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IGRhdGEuY29uZmlnLmRpc2FibGVDbG9zZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3N0aXZlQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OZWdhdGl2ZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICBcclxuICAgIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoZXZlbnQub2JqZWN0VXJsIHx8IGV2ZW50LmJhc2U2NCB8fCAnJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlTG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Nyb3BwZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJbWFnZSBsb2FkZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcm9wcGVyUmVhZHkoc291cmNlSW1hZ2VEaW1lbnNpb25zOiBEaW1lbnNpb25zKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0Nyb3BwZXIgcmVhZHknLCBzb3VyY2VJbWFnZURpbWVuc2lvbnMpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZUZhaWxlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdMb2FkIGltYWdlIGZhaWxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZUxlZnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gVXNlIHRpbWVvdXQgYmVjYXVzZSByb3RhdGluZyBpbWFnZSBpcyBhIGhlYXZ5IG9wZXJhdGlvbiBhbmQgd2lsbCBibG9jayB0aGUgdWkgdGhyZWFkXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzUm90YXRpb24tLTtcclxuICAgICAgICAgICAgdGhpcy5mbGlwQWZ0ZXJSb3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1JvdGF0aW9uKys7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcEFmdGVyUm90YXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMudHJhbnNmb3JtLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVIOiArK3RoaXMudHJhbnNsYXRlSFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVJpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlSDogLS10aGlzLnRyYW5zbGF0ZUhcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb3AoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMudHJhbnNmb3JtLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVWOiArK3RoaXMudHJhbnNsYXRlVlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUJvdHRvbSgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVY6IC0tdGhpcy50cmFuc2xhdGVWXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZsaXBBZnRlclJvdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBmbGlwcGVkSCA9IHRoaXMudHJhbnNmb3JtLmZsaXBIO1xyXG4gICAgICAgIGNvbnN0IGZsaXBwZWRWID0gdGhpcy50cmFuc2Zvcm0uZmxpcFY7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMudHJhbnNmb3JtLFxyXG4gICAgICAgICAgICBmbGlwSDogZmxpcHBlZFYsXHJcbiAgICAgICAgICAgIGZsaXBWOiBmbGlwcGVkSFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVIID0gMDtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVYgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXBIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICAgICAgZmxpcEg6ICF0aGlzLnRyYW5zZm9ybS5mbGlwSFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcFZlcnRpY2FsKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICAgICAgZmxpcFY6ICF0aGlzLnRyYW5zZm9ybS5mbGlwVlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbWFnZSgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmNhbnZhc1JvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlVW5pdDogJ3B4J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgem9vbU91dCgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlIC09IC4xO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHpvb21JbigpIHtcclxuICAgICAgICB0aGlzLnNjYWxlICs9IC4xO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpbygpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpbyA9ICF0aGlzLmNvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpbztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSb3RhdGlvbigpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgICAgIHJvdGF0ZTogdGhpcy5yb3RhdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQXNwZWN0UmF0aW8oKSB7XHJcbiAgICAgICAgdGhpcy5hc3BlY3RSYXRpbyA9IHRoaXMuYXNwZWN0UmF0aW8gPT09IDQgLyAzID8gMTYgLyA1IDogNCAvIDM7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlDcm9wZWRJbWFnZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNyb3BwZWQgSW1hZ2U6IFwiLCB0aGlzLmNyb3BwZWRJbWFnZSApXHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5jcm9wcGVkSW1hZ2UuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsQ3JvcGVkSW1hZ2UoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYW5jZWwgQ3JvcGVkIEltYWdlXCIgKVxyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNyb3BwZXItY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtaXRlbSBjcm9wcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICA8aW1hZ2UtY3JvcHBlclxyXG4gICAgICAgICAgICBbaW1hZ2VDaGFuZ2VkRXZlbnRdPVwiaW1hZ2VDaGFuZ2VkRXZlbnRcIlxyXG4gICAgICAgICAgICBbaW1hZ2VVUkxdPVwiaW1hZ2VVUkxcIlxyXG4gICAgXHJcbiAgICAgICAgICAgIFttYWludGFpbkFzcGVjdFJhdGlvXT1cIm1haW50YWluQXNwZWN0UmF0aW9cIlxyXG4gICAgICAgICAgICBbY3JvcHBlclN0YXRpY1dpZHRoXT1cImNyb3BwZXJTdGF0aWNXaWR0aFwiXHJcbiAgICAgICAgICAgIFtjcm9wcGVyU3RhdGljSGVpZ2h0XT1cImNyb3BwZXJTdGF0aWNIZWlnaHRcIlxyXG4gICAgICAgICAgICBbY3JvcHBlck1pbldpZHRoXT1cImNyb3BwZXJNaW5XaWR0aFwiXHJcbiAgICAgICAgICAgIFtjcm9wcGVyTWluSGVpZ2h0XT1cImNyb3BwZXJNaW5IZWlnaHRcIlxyXG4gICAgICAgICAgICBbb25seVNjYWxlRG93bl09XCJvbmx5U2NhbGVEb3duXCJcclxuICAgICAgICAgICAgW3JvdW5kQ3JvcHBlcl09XCJyb3VuZENyb3BwZXJcIlxyXG4gICAgXHJcbiAgICAgICAgICAgIFtjb250YWluV2l0aGluQXNwZWN0UmF0aW9dPVwiY29udGFpbldpdGhpbkFzcGVjdFJhdGlvXCJcclxuICAgICAgICAgICAgW2FzcGVjdFJhdGlvXT1cImFzcGVjdFJhdGlvXCJcclxuICAgICAgICAgICAgW2NhbnZhc1JvdGF0aW9uXT1cImNhbnZhc1JvdGF0aW9uXCJcclxuICAgICAgICAgICAgWyh0cmFuc2Zvcm0pXT1cInRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgIFthbGlnbkltYWdlXT1cIidjZW50ZXInXCJcclxuICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2hvd0Nyb3BwZXIgPyBudWxsIDogJ25vbmUnXCJcclxuICAgICAgICAgICAgW2FsbG93TW92ZUltYWdlXT1cImFsbG93TW92ZUltYWdlXCJcclxuICAgICAgICAgICAgW2hpZGRlbl09XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICBpbWFnZUFsdFRleHQ9XCJBbHRlcm5hdGl2ZSBpbWFnZSB0ZXh0XCJcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICBvdXRwdXQ9XCJiYXNlNjRcIlxyXG4gICAgICAgICAgICBbZm9ybWF0XT1cInBwRm9ybWF0XCJcclxuICAgICAgICAgICAgKGltYWdlQ3JvcHBlZCk9XCJpbWFnZUNyb3BwZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChpbWFnZUxvYWRlZCk9XCJpbWFnZUxvYWRlZCgpXCJcclxuICAgICAgICAgICAgKGNyb3BwZXJSZWFkeSk9XCJjcm9wcGVyUmVhZHkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChsb2FkSW1hZ2VGYWlsZWQpPVwibG9hZEltYWdlRmFpbGVkKClcIlxyXG4gICAgICAgID48L2ltYWdlLWNyb3BwZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1pdGVtXCI+XHJcbiAgICAgICAgPGltZyBbc3JjXT1cImNyb3BwZWRJbWFnZVwiIFtzdHlsZS5ib3JkZXJdPVwiY3JvcHBlZEltYWdlID8gJzFweCBzb2xpZCBibGFjaycgOiAnbm9uZSdcIiAvPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicHAtYWN0aW9uLWJ0biBidG4tY29udGFpbmVyXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImNhbmNlbENyb3BlZEltYWdlKClcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJhbGxvd1pvb21JbWFnZVwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiAoY2xpY2spPVwiem9vbU91dCgpXCI+Wm9vbSBPdXQ8L2J1dHRvbj4gXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiYWxsb3dab29tSW1hZ2VcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgKGNsaWNrKT1cInpvb21JbigpXCI+Wm9vbSBJbjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseUNyb3BlZEltYWdlKClcIj5BcHBseTwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19