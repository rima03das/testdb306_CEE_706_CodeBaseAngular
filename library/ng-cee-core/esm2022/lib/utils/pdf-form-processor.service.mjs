import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PDFFormProcessor {
    /**
     * Process HTML content to remove form field borders and make them PDF-friendly
     */
    processContentForPDF(sourceElement) {
        const clonedElement = sourceElement.cloneNode(true);
        // Remove borders from all form elements
        this.removeFormElementBorders(clonedElement);
        // Replace form elements with static content
        this.replaceFormElementsWithStaticContent(clonedElement);
        // Apply PDF-specific styles
        this.applyPDFStyles(clonedElement);
        return clonedElement;
    }
    /**
     * Remove borders from all form elements using CSS
     */
    removeFormElementBorders(container) {
        const style = document.createElement('style');
        style.textContent = `
      /* Remove borders from all form elements */
      input, textarea, select, button {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        background: transparent !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
      }

      /* Specific styling for different input types */
      input[type="text"],
      input[type="email"],
      input[type="password"],
      input[type="number"],
      input[type="tel"],
      input[type="url"],
      input[type="search"],
      input[type="date"],
      input[type="datetime-local"],
      input[type="time"],
      textarea {
        border: none !important;
        background: transparent !important;
        color: #000 !important;
        font-family: inherit !important;
        font-size: inherit !important;
      }

      /* Hide checkbox and radio borders */
      input[type="checkbox"],
      input[type="radio"] {
        border: none !important;
        background: transparent !important;
        width: 0 !important;
        height: 0 !important;
        opacity: 0 !important;
      }

      /* Remove select dropdown styling */
      select {
        border: none !important;
        background: transparent !important;
        color: #000 !important;
        font-family: inherit !important;
        font-size: inherit !important;
      }

      /* Remove button styling */
      button {
        border: none !important;
        background: transparent !important;
        color: #000 !important;
      }
    `;
        container.appendChild(style);
    }
    /**
     * Replace form elements with their static content representation
     */
    replaceFormElementsWithStaticContent(container) {
        // Process input elements
        const inputs = container.querySelectorAll('input');
        inputs.forEach(input => this.processInputElement(input));
        // Process textarea elements
        const textareas = container.querySelectorAll('textarea');
        textareas.forEach(textarea => this.processTextareaElement(textarea));
        // Process select elements
        const selects = container.querySelectorAll('select');
        selects.forEach(select => this.processSelectElement(select));
        // Process button elements
        const buttons = container.querySelectorAll('button');
        buttons.forEach(button => this.processButtonElement(button));
    }
    /**
     * Process individual input elements
     */
    processInputElement(input) {
        const inputType = input.type.toLowerCase();
        switch (inputType) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'tel':
            case 'url':
            case 'search':
            case 'date':
            case 'datetime-local':
            case 'time':
                this.replaceTextInputWithSpan(input);
                break;
            case 'checkbox':
                this.replaceCheckboxWithSymbol(input);
                break;
            case 'radio':
                this.replaceRadioWithSymbol(input);
                break;
            case 'submit':
            case 'button':
                this.replaceButtonInputWithSpan(input);
                break;
            case 'hidden':
                // Remove hidden inputs entirely
                input.remove();
                break;
            default:
                this.replaceTextInputWithSpan(input);
                break;
        }
    }
    /**
     * Replace text input with span containing the value
     */
    replaceTextInputWithSpan(input) {
        const span = document.createElement('span');
        const value = input.value || '';
        span.textContent = value || '_'.repeat(Math.max(10, (input.placeholder?.length || 10)));
        span.className = 'pdf-input-replacement';
        // Copy computed styles
        const computedStyle = window.getComputedStyle(input);
        span.style.fontFamily = computedStyle.fontFamily;
        span.style.fontSize = computedStyle.fontSize;
        span.style.fontWeight = value ? 'bold' : 'normal';
        span.style.color = '#000';
        span.style.display = 'inline-block';
        span.style.minWidth = '50px';
        span.style.minHeight = '20px';
        span.style.padding = '2px 4px';
        // Add underline for empty values
        if (!value) {
            span.style.borderBottom = '1px solid #ccc';
            span.style.color = '#ccc';
        }
        input.parentNode?.replaceChild(span, input);
    }
    /**
     * Replace checkbox with check symbol
     */
    replaceCheckboxWithSymbol(input) {
        const span = document.createElement('span');
        span.textContent = input.checked ? '☑' : '☐';
        span.className = 'pdf-checkbox-replacement';
        span.style.fontSize = '16px';
        span.style.color = '#000';
        span.style.display = 'inline-block';
        span.style.width = '20px';
        span.style.height = '20px';
        span.style.textAlign = 'center';
        span.style.lineHeight = '20px';
        span.style.fontFamily = 'Arial, sans-serif';
        input.parentNode?.replaceChild(span, input);
    }
    /**
     * Replace radio button with circle symbol
     */
    replaceRadioWithSymbol(input) {
        const span = document.createElement('span');
        span.textContent = input.checked ? '●' : '○';
        span.className = 'pdf-radio-replacement';
        span.style.fontSize = '16px';
        span.style.color = '#000';
        span.style.display = 'inline-block';
        span.style.width = '20px';
        span.style.height = '20px';
        span.style.textAlign = 'center';
        span.style.lineHeight = '20px';
        span.style.fontFamily = 'Arial, sans-serif';
        input.parentNode?.replaceChild(span, input);
    }
    /**
     * Replace button input with span
     */
    replaceButtonInputWithSpan(input) {
        const span = document.createElement('span');
        span.textContent = input.value || 'Button';
        span.className = 'pdf-button-replacement';
        span.style.padding = '6px 12px';
        span.style.border = '1px solid #000';
        span.style.borderRadius = '4px';
        span.style.backgroundColor = '#f8f9fa';
        span.style.color = '#000';
        span.style.display = 'inline-block';
        span.style.fontWeight = 'bold';
        input.parentNode?.replaceChild(span, input);
    }
    /**
     * Process textarea elements
     */
    processTextareaElement(textarea) {
        const div = document.createElement('div');
        const value = textarea.value || '';
        div.textContent = value || 'Enter text here...';
        div.className = 'pdf-textarea-replacement';
        // Copy computed styles
        const computedStyle = window.getComputedStyle(textarea);
        div.style.fontFamily = computedStyle.fontFamily;
        div.style.fontSize = computedStyle.fontSize;
        div.style.fontWeight = value ? 'bold' : 'normal';
        div.style.color = value ? '#000' : '#ccc';
        div.style.minHeight = '60px';
        div.style.minWidth = '200px';
        div.style.padding = '8px';
        div.style.whiteSpace = 'pre-wrap';
        div.style.wordBreak = 'break-word';
        // Add border for empty values
        if (!value) {
            div.style.border = '1px dashed #ccc';
            div.style.borderRadius = '4px';
            div.style.backgroundColor = '#f9f9f9';
        }
        textarea.parentNode?.replaceChild(div, textarea);
    }
    /**
     * Process select elements
     */
    processSelectElement(select) {
        const span = document.createElement('span');
        const selectedOption = select.selectedOptions.length > 0
            ? select.selectedOptions[0].text
            : 'Select an option';
        span.textContent = selectedOption;
        span.className = 'pdf-select-replacement';
        // Copy computed styles
        const computedStyle = window.getComputedStyle(select);
        span.style.fontFamily = computedStyle.fontFamily;
        span.style.fontSize = computedStyle.fontSize;
        span.style.fontWeight = select.selectedIndex > 0 ? 'bold' : 'normal';
        span.style.color = select.selectedIndex > 0 ? '#000' : '#ccc';
        span.style.display = 'inline-block';
        span.style.minWidth = '100px';
        span.style.padding = '4px 8px';
        span.style.border = '1px solid #ccc';
        span.style.borderRadius = '4px';
        span.style.backgroundColor = '#fff';
        select.parentNode?.replaceChild(span, select);
    }
    /**
     * Process button elements
     */
    processButtonElement(button) {
        const span = document.createElement('span');
        span.textContent = button.textContent || 'Button';
        span.className = 'pdf-button-replacement';
        span.style.padding = '6px 12px';
        span.style.border = '1px solid #000';
        span.style.borderRadius = '4px';
        span.style.backgroundColor = '#f8f9fa';
        span.style.color = '#000';
        span.style.display = 'inline-block';
        span.style.fontWeight = 'bold';
        button.parentNode?.replaceChild(span, button);
    }
    /**
     * Apply PDF-specific styles to the container
     */
    applyPDFStyles(container) {
        // Add global PDF styles
        const style = document.createElement('style');
        style.textContent = `
      /* Global PDF styles */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }

      /* Ensure text is visible */
      .pdf-input-replacement,
      .pdf-textarea-replacement,
      .pdf-select-replacement,
      .pdf-button-replacement,
      .pdf-checkbox-replacement,
      .pdf-radio-replacement {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
        font-family: 'Arial', sans-serif !important;
      }

      /* Remove any remaining borders from form-like elements */
      div[class*="mat-"], 
      div[class*="form-"], 
      div[class*="input-"],
      .mat-form-field,
      .mat-input-element {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }

      /* Ensure proper spacing */
      .pdf-input-replacement + .pdf-input-replacement,
      .pdf-textarea-replacement + .pdf-textarea-replacement {
        margin-left: 10px;
      }
    `;
        container.appendChild(style);
        // Set container-level styles
        container.style.fontFamily = 'Arial, sans-serif';
        container.style.fontSize = '12px';
        container.style.lineHeight = '1.4';
        container.style.color = '#000';
        container.style.backgroundColor = '#fff';
    }
    /**
     * Enhanced jsPDF configuration to avoid form element borders
     */
    getOptimizedJsPDFConfig() {
        return {
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16,
            compress: true,
            html2canvas: {
                allowTaint: true,
                useCORS: true,
                scale: 0.75,
                logging: false,
                letterRendering: true,
                onclone: (clonedDoc) => {
                    this.enhanceClonedDocumentForPDF(clonedDoc);
                }
            },
            margin: [15, 15, 15, 15],
            pageBreak: {
                mode: ['css', 'avoid-all', 'legacy'],
                avoid: ['.avoid-page-break', '.pdf-input-replacement', '.pdf-checkbox-replacement', '.pdf-radio-replacement']
            }
        };
    }
    /**
     * Enhance the cloned document for better PDF rendering
     */
    enhanceClonedDocumentForPDF(clonedDoc) {
        const style = clonedDoc.createElement('style');
        style.textContent = `
      /* Force remove all form element borders in cloned document */
      input, textarea, select, button {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        background: transparent !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        visibility: hidden !important;
      }

      /* Make replaced elements visible */
      .pdf-input-replacement,
      .pdf-textarea-replacement,
      .pdf-select-replacement,
      .pdf-button-replacement,
      .pdf-checkbox-replacement,
      .pdf-radio-replacement {
        visibility: visible !important;
        display: inline-block !important;
      }

      /* Remove Material Design form field borders */
      .mat-form-field-underline,
      .mat-form-field-ripple,
      .mat-form-field-outline {
        display: none !important;
      }

      .mat-form-field {
        border: none !important;
      }

      /* Hide Angular Material form indicators */
      .mat-form-field-suffix,
      .mat-form-field-prefix,
      .mat-form-field-hint-wrapper {
        display: none !important;
      }
    `;
        clonedDoc.head.appendChild(style);
        // Also hide any form elements that might still be visible
        const formElements = clonedDoc.querySelectorAll('input, textarea, select, button');
        formElements.forEach(element => {
            element.style.display = 'none';
        });
    }
    static ɵfac = function PDFFormProcessor_Factory(t) { return new (t || PDFFormProcessor)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PDFFormProcessor, factory: PDFFormProcessor.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PDFFormProcessor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZvcm0tcHJvY2Vzc29yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvdXRpbHMvcGRmLWZvcm0tcHJvY2Vzc29yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQjs7T0FFRztJQUNILG9CQUFvQixDQUFDLGFBQTBCO1FBQzdDLE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFnQixDQUFDO1FBRW5FLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV6RCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuQyxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSyx3QkFBd0IsQ0FBQyxTQUFzQjtRQUNyRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxXQUFXLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0RuQixDQUFDO1FBRUYsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQ0FBb0MsQ0FBQyxTQUFzQjtRQUNqRSx5QkFBeUI7UUFDekIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixD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LENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFdBQVcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5Q25CLENBQUM7UUFFRixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQywwREFBMEQ7UUFDMUQsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDbkYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixPQUF1QixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzswRUF2Y1UsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07O2lGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGpzUERGIH0gZnJvbSAnanNwZGYnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUERGRm9ybVByb2Nlc3NvciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb2Nlc3MgSFRNTCBjb250ZW50IHRvIHJlbW92ZSBmb3JtIGZpZWxkIGJvcmRlcnMgYW5kIG1ha2UgdGhlbSBQREYtZnJpZW5kbHlcclxuICAgKi9cclxuICBwcm9jZXNzQ29udGVudEZvclBERihzb3VyY2VFbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBzb3VyY2VFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIFxyXG4gICAgLy8gUmVtb3ZlIGJvcmRlcnMgZnJvbSBhbGwgZm9ybSBlbGVtZW50c1xyXG4gICAgdGhpcy5yZW1vdmVGb3JtRWxlbWVudEJvcmRlcnMoY2xvbmVkRWxlbWVudCk7XHJcbiAgICBcclxuICAgIC8vIFJlcGxhY2UgZm9ybSBlbGVtZW50cyB3aXRoIHN0YXRpYyBjb250ZW50XHJcbiAgICB0aGlzLnJlcGxhY2VGb3JtRWxlbWVudHNXaXRoU3RhdGljQ29udGVudChjbG9uZWRFbGVtZW50KTtcclxuICAgIFxyXG4gICAgLy8gQXBwbHkgUERGLXNwZWNpZmljIHN0eWxlc1xyXG4gICAgdGhpcy5hcHBseVBERlN0eWxlcyhjbG9uZWRFbGVtZW50KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYm9yZGVycyBmcm9tIGFsbCBmb3JtIGVsZW1lbnRzIHVzaW5nIENTU1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlRm9ybUVsZW1lbnRCb3JkZXJzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAvKiBSZW1vdmUgYm9yZGVycyBmcm9tIGFsbCBmb3JtIGVsZW1lbnRzICovXHJcbiAgICAgIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBhcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFNwZWNpZmljIHN0eWxpbmcgZm9yIGRpZmZlcmVudCBpbnB1dCB0eXBlcyAqL1xyXG4gICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbiAgICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgICAgIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbiAgICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4gICAgICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0sXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIEhpZGUgY2hlY2tib3ggYW5kIHJhZGlvIGJvcmRlcnMgKi9cclxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFJlbW92ZSBzZWxlY3QgZHJvcGRvd24gc3R5bGluZyAqL1xyXG4gICAgICBzZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBSZW1vdmUgYnV0dG9uIHN0eWxpbmcgKi9cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIGA7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlIGZvcm0gZWxlbWVudHMgd2l0aCB0aGVpciBzdGF0aWMgY29udGVudCByZXByZXNlbnRhdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVwbGFjZUZvcm1FbGVtZW50c1dpdGhTdGF0aWNDb250ZW50KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIC8vIFByb2Nlc3MgaW5wdXQgZWxlbWVudHNcclxuICAgIGNvbnN0IGlucHV0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gdGhpcy5wcm9jZXNzSW5wdXRFbGVtZW50KGlucHV0KSk7XHJcblxyXG4gICAgLy8gUHJvY2VzcyB0ZXh0YXJlYSBlbGVtZW50c1xyXG4gICAgY29uc3QgdGV4dGFyZWFzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XHJcbiAgICB0ZXh0YXJlYXMuZm9yRWFjaCh0ZXh0YXJlYSA9PiB0aGlzLnByb2Nlc3NUZXh0YXJlYUVsZW1lbnQodGV4dGFyZWEpKTtcclxuXHJcbiAgICAvLyBQcm9jZXNzIHNlbGVjdCBlbGVtZW50c1xyXG4gICAgY29uc3Qgc2VsZWN0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgIHNlbGVjdHMuZm9yRWFjaChzZWxlY3QgPT4gdGhpcy5wcm9jZXNzU2VsZWN0RWxlbWVudChzZWxlY3QpKTtcclxuXHJcbiAgICAvLyBQcm9jZXNzIGJ1dHRvbiBlbGVtZW50c1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gdGhpcy5wcm9jZXNzQnV0dG9uRWxlbWVudChidXR0b24pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb2Nlc3MgaW5kaXZpZHVhbCBpbnB1dCBlbGVtZW50c1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvY2Vzc0lucHV0RWxlbWVudChpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXRUeXBlID0gaW5wdXQudHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICBjYXNlICdwYXNzd29yZCc6XHJcbiAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgIGNhc2UgJ3RlbCc6XHJcbiAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICBjYXNlICdkYXRldGltZS1sb2NhbCc6XHJcbiAgICAgIGNhc2UgJ3RpbWUnOlxyXG4gICAgICAgIHRoaXMucmVwbGFjZVRleHRJbnB1dFdpdGhTcGFuKGlucHV0KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICB0aGlzLnJlcGxhY2VDaGVja2JveFdpdGhTeW1ib2woaW5wdXQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAncmFkaW8nOlxyXG4gICAgICAgIHRoaXMucmVwbGFjZVJhZGlvV2l0aFN5bWJvbChpbnB1dCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdzdWJtaXQnOlxyXG4gICAgICBjYXNlICdidXR0b24nOlxyXG4gICAgICAgIHRoaXMucmVwbGFjZUJ1dHRvbklucHV0V2l0aFNwYW4oaW5wdXQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnaGlkZGVuJzpcclxuICAgICAgICAvLyBSZW1vdmUgaGlkZGVuIGlucHV0cyBlbnRpcmVseVxyXG4gICAgICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLnJlcGxhY2VUZXh0SW5wdXRXaXRoU3BhbihpbnB1dCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlIHRleHQgaW5wdXQgd2l0aCBzcGFuIGNvbnRhaW5pbmcgdGhlIHZhbHVlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXBsYWNlVGV4dElucHV0V2l0aFNwYW4oaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlIHx8ICcnO1xyXG4gICAgXHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdmFsdWUgfHwgJ18nLnJlcGVhdChNYXRoLm1heCgxMCwgKGlucHV0LnBsYWNlaG9sZGVyPy5sZW5ndGggfHwgMTApKSk7XHJcbiAgICBzcGFuLmNsYXNzTmFtZSA9ICdwZGYtaW5wdXQtcmVwbGFjZW1lbnQnO1xyXG4gICAgXHJcbiAgICAvLyBDb3B5IGNvbXB1dGVkIHN0eWxlc1xyXG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlucHV0KTtcclxuICAgIHNwYW4uc3R5bGUuZm9udEZhbWlseSA9IGNvbXB1dGVkU3R5bGUuZm9udEZhbWlseTtcclxuICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSBjb21wdXRlZFN0eWxlLmZvbnRTaXplO1xyXG4gICAgc3Bhbi5zdHlsZS5mb250V2VpZ2h0ID0gdmFsdWUgPyAnYm9sZCcgOiAnbm9ybWFsJztcclxuICAgIHNwYW4uc3R5bGUuY29sb3IgPSAnIzAwMCc7XHJcbiAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgIHNwYW4uc3R5bGUubWluV2lkdGggPSAnNTBweCc7XHJcbiAgICBzcGFuLnN0eWxlLm1pbkhlaWdodCA9ICcyMHB4JztcclxuICAgIHNwYW4uc3R5bGUucGFkZGluZyA9ICcycHggNHB4JztcclxuICAgIFxyXG4gICAgLy8gQWRkIHVuZGVybGluZSBmb3IgZW1wdHkgdmFsdWVzXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHNwYW4uc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjY2NjJztcclxuICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICcjY2NjJztcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5wYXJlbnROb2RlPy5yZXBsYWNlQ2hpbGQoc3BhbiwgaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwbGFjZSBjaGVja2JveCB3aXRoIGNoZWNrIHN5bWJvbFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVwbGFjZUNoZWNrYm94V2l0aFN5bWJvbChpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC5jaGVja2VkID8gJ+KYkScgOiAn4piQJztcclxuICAgIHNwYW4uY2xhc3NOYW1lID0gJ3BkZi1jaGVja2JveC1yZXBsYWNlbWVudCc7XHJcbiAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xyXG4gICAgc3Bhbi5zdHlsZS5jb2xvciA9ICcjMDAwJztcclxuICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgc3Bhbi5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgc3Bhbi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHNwYW4uc3R5bGUubGluZUhlaWdodCA9ICcyMHB4JztcclxuICAgIHNwYW4uc3R5bGUuZm9udEZhbWlseSA9ICdBcmlhbCwgc2Fucy1zZXJpZic7XHJcblxyXG4gICAgaW5wdXQucGFyZW50Tm9kZT8ucmVwbGFjZUNoaWxkKHNwYW4sIGlucHV0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2UgcmFkaW8gYnV0dG9uIHdpdGggY2lyY2xlIHN5bWJvbFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVwbGFjZVJhZGlvV2l0aFN5bWJvbChpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC5jaGVja2VkID8gJ+KXjycgOiAn4peLJztcclxuICAgIHNwYW4uY2xhc3NOYW1lID0gJ3BkZi1yYWRpby1yZXBsYWNlbWVudCc7XHJcbiAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xyXG4gICAgc3Bhbi5zdHlsZS5jb2xvciA9ICcjMDAwJztcclxuICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgc3Bhbi5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgc3Bhbi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHNwYW4uc3R5bGUubGluZUhlaWdodCA9ICcyMHB4JztcclxuICAgIHNwYW4uc3R5bGUuZm9udEZhbWlseSA9ICdBcmlhbCwgc2Fucy1zZXJpZic7XHJcblxyXG4gICAgaW5wdXQucGFyZW50Tm9kZT8ucmVwbGFjZUNoaWxkKHNwYW4sIGlucHV0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2UgYnV0dG9uIGlucHV0IHdpdGggc3BhblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVwbGFjZUJ1dHRvbklucHV0V2l0aFNwYW4oaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWUgfHwgJ0J1dHRvbic7XHJcbiAgICBzcGFuLmNsYXNzTmFtZSA9ICdwZGYtYnV0dG9uLXJlcGxhY2VtZW50JztcclxuICAgIHNwYW4uc3R5bGUucGFkZGluZyA9ICc2cHggMTJweCc7XHJcbiAgICBzcGFuLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgIzAwMCc7XHJcbiAgICBzcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xyXG4gICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y4ZjlmYSc7XHJcbiAgICBzcGFuLnN0eWxlLmNvbG9yID0gJyMwMDAnO1xyXG4gICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICBzcGFuLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcblxyXG4gICAgaW5wdXQucGFyZW50Tm9kZT8ucmVwbGFjZUNoaWxkKHNwYW4sIGlucHV0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb2Nlc3MgdGV4dGFyZWEgZWxlbWVudHNcclxuICAgKi9cclxuICBwcml2YXRlIHByb2Nlc3NUZXh0YXJlYUVsZW1lbnQodGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZSB8fCAnJztcclxuICAgIFxyXG4gICAgZGl2LnRleHRDb250ZW50ID0gdmFsdWUgfHwgJ0VudGVyIHRleHQgaGVyZS4uLic7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3BkZi10ZXh0YXJlYS1yZXBsYWNlbWVudCc7XHJcbiAgICBcclxuICAgIC8vIENvcHkgY29tcHV0ZWQgc3R5bGVzXHJcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGV4dGFyZWEpO1xyXG4gICAgZGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBjb21wdXRlZFN0eWxlLmZvbnRGYW1pbHk7XHJcbiAgICBkaXYuc3R5bGUuZm9udFNpemUgPSBjb21wdXRlZFN0eWxlLmZvbnRTaXplO1xyXG4gICAgZGl2LnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZSA/ICdib2xkJyA6ICdub3JtYWwnO1xyXG4gICAgZGl2LnN0eWxlLmNvbG9yID0gdmFsdWUgPyAnIzAwMCcgOiAnI2NjYyc7XHJcbiAgICBkaXYuc3R5bGUubWluSGVpZ2h0ID0gJzYwcHgnO1xyXG4gICAgZGl2LnN0eWxlLm1pbldpZHRoID0gJzIwMHB4JztcclxuICAgIGRpdi5zdHlsZS5wYWRkaW5nID0gJzhweCc7XHJcbiAgICBkaXYuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XHJcbiAgICBkaXYuc3R5bGUud29yZEJyZWFrID0gJ2JyZWFrLXdvcmQnO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgYm9yZGVyIGZvciBlbXB0eSB2YWx1ZXNcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgZGl2LnN0eWxlLmJvcmRlciA9ICcxcHggZGFzaGVkICNjY2MnO1xyXG4gICAgICBkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XHJcbiAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y5ZjlmOSc7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEucGFyZW50Tm9kZT8ucmVwbGFjZUNoaWxkKGRpdiwgdGV4dGFyZWEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvY2VzcyBzZWxlY3QgZWxlbWVudHNcclxuICAgKi9cclxuICBwcml2YXRlIHByb2Nlc3NTZWxlY3RFbGVtZW50KHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0LnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwIFxyXG4gICAgICA/IHNlbGVjdC5zZWxlY3RlZE9wdGlvbnNbMF0udGV4dCBcclxuICAgICAgOiAnU2VsZWN0IGFuIG9wdGlvbic7XHJcbiAgICBcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBzZWxlY3RlZE9wdGlvbjtcclxuICAgIHNwYW4uY2xhc3NOYW1lID0gJ3BkZi1zZWxlY3QtcmVwbGFjZW1lbnQnO1xyXG4gICAgXHJcbiAgICAvLyBDb3B5IGNvbXB1dGVkIHN0eWxlc1xyXG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNlbGVjdCk7XHJcbiAgICBzcGFuLnN0eWxlLmZvbnRGYW1pbHkgPSBjb21wdXRlZFN0eWxlLmZvbnRGYW1pbHk7XHJcbiAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gY29tcHV0ZWRTdHlsZS5mb250U2l6ZTtcclxuICAgIHNwYW4uc3R5bGUuZm9udFdlaWdodCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4ID4gMCA/ICdib2xkJyA6ICdub3JtYWwnO1xyXG4gICAgc3Bhbi5zdHlsZS5jb2xvciA9IHNlbGVjdC5zZWxlY3RlZEluZGV4ID4gMCA/ICcjMDAwJyA6ICcjY2NjJztcclxuICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgc3Bhbi5zdHlsZS5taW5XaWR0aCA9ICcxMDBweCc7XHJcbiAgICBzcGFuLnN0eWxlLnBhZGRpbmcgPSAnNHB4IDhweCc7XHJcbiAgICBzcGFuLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XHJcbiAgICBzcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xyXG4gICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcblxyXG4gICAgc2VsZWN0LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChzcGFuLCBzZWxlY3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvY2VzcyBidXR0b24gZWxlbWVudHNcclxuICAgKi9cclxuICBwcml2YXRlIHByb2Nlc3NCdXR0b25FbGVtZW50KGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gYnV0dG9uLnRleHRDb250ZW50IHx8ICdCdXR0b24nO1xyXG4gICAgc3Bhbi5jbGFzc05hbWUgPSAncGRmLWJ1dHRvbi1yZXBsYWNlbWVudCc7XHJcbiAgICBzcGFuLnN0eWxlLnBhZGRpbmcgPSAnNnB4IDEycHgnO1xyXG4gICAgc3Bhbi5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICMwMDAnO1xyXG4gICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNHB4JztcclxuICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOGY5ZmEnO1xyXG4gICAgc3Bhbi5zdHlsZS5jb2xvciA9ICcjMDAwJztcclxuICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgc3Bhbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG5cclxuICAgIGJ1dHRvbi5wYXJlbnROb2RlPy5yZXBsYWNlQ2hpbGQoc3BhbiwgYnV0dG9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IFBERi1zcGVjaWZpYyBzdHlsZXMgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXBwbHlQREZTdHlsZXMoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgLy8gQWRkIGdsb2JhbCBQREYgc3R5bGVzXHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgLyogR2xvYmFsIFBERiBzdHlsZXMgKi9cclxuICAgICAgKiB7XHJcbiAgICAgICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogRW5zdXJlIHRleHQgaXMgdmlzaWJsZSAqL1xyXG4gICAgICAucGRmLWlucHV0LXJlcGxhY2VtZW50LFxyXG4gICAgICAucGRmLXRleHRhcmVhLXJlcGxhY2VtZW50LFxyXG4gICAgICAucGRmLXNlbGVjdC1yZXBsYWNlbWVudCxcclxuICAgICAgLnBkZi1idXR0b24tcmVwbGFjZW1lbnQsXHJcbiAgICAgIC5wZGYtY2hlY2tib3gtcmVwbGFjZW1lbnQsXHJcbiAgICAgIC5wZGYtcmFkaW8tcmVwbGFjZW1lbnQge1xyXG4gICAgICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3QgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUmVtb3ZlIGFueSByZW1haW5pbmcgYm9yZGVycyBmcm9tIGZvcm0tbGlrZSBlbGVtZW50cyAqL1xyXG4gICAgICBkaXZbY2xhc3MqPVwibWF0LVwiXSwgXHJcbiAgICAgIGRpdltjbGFzcyo9XCJmb3JtLVwiXSwgXHJcbiAgICAgIGRpdltjbGFzcyo9XCJpbnB1dC1cIl0sXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZCxcclxuICAgICAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBFbnN1cmUgcHJvcGVyIHNwYWNpbmcgKi9cclxuICAgICAgLnBkZi1pbnB1dC1yZXBsYWNlbWVudCArIC5wZGYtaW5wdXQtcmVwbGFjZW1lbnQsXHJcbiAgICAgIC5wZGYtdGV4dGFyZWEtcmVwbGFjZW1lbnQgKyAucGRmLXRleHRhcmVhLXJlcGxhY2VtZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgYDtcclxuICAgIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcbiAgICAvLyBTZXQgY29udGFpbmVyLWxldmVsIHN0eWxlc1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmZvbnRGYW1pbHkgPSAnQXJpYWwsIHNhbnMtc2VyaWYnO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmxpbmVIZWlnaHQgPSAnMS40JztcclxuICAgIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9ICcjMDAwJztcclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmhhbmNlZCBqc1BERiBjb25maWd1cmF0aW9uIHRvIGF2b2lkIGZvcm0gZWxlbWVudCBib3JkZXJzXHJcbiAgICovXHJcbiAgZ2V0T3B0aW1pemVkSnNQREZDb25maWcoKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxyXG4gICAgICB1bml0OiAnbW0nLFxyXG4gICAgICBmb3JtYXQ6ICdhNCcsXHJcbiAgICAgIHB1dE9ubHlVc2VkRm9udHM6IHRydWUsXHJcbiAgICAgIGZsb2F0UHJlY2lzaW9uOiAxNixcclxuICAgICAgY29tcHJlc3M6IHRydWUsXHJcbiAgICAgIGh0bWwyY2FudmFzOiB7XHJcbiAgICAgICAgYWxsb3dUYWludDogdHJ1ZSxcclxuICAgICAgICB1c2VDT1JTOiB0cnVlLFxyXG4gICAgICAgIHNjYWxlOiAwLjc1LFxyXG4gICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxldHRlclJlbmRlcmluZzogdHJ1ZSxcclxuICAgICAgICBvbmNsb25lOiAoY2xvbmVkRG9jOiBEb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbmhhbmNlQ2xvbmVkRG9jdW1lbnRGb3JQREYoY2xvbmVkRG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmdpbjogWzE1LCAxNSwgMTUsIDE1XSxcclxuICAgICAgcGFnZUJyZWFrOiB7IFxyXG4gICAgICAgIG1vZGU6IFsnY3NzJywgJ2F2b2lkLWFsbCcsICdsZWdhY3knXSxcclxuICAgICAgICBhdm9pZDogWycuYXZvaWQtcGFnZS1icmVhaycsICcucGRmLWlucHV0LXJlcGxhY2VtZW50JywgJy5wZGYtY2hlY2tib3gtcmVwbGFjZW1lbnQnLCAnLnBkZi1yYWRpby1yZXBsYWNlbWVudCddXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmhhbmNlIHRoZSBjbG9uZWQgZG9jdW1lbnQgZm9yIGJldHRlciBQREYgcmVuZGVyaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBlbmhhbmNlQ2xvbmVkRG9jdW1lbnRGb3JQREYoY2xvbmVkRG9jOiBEb2N1bWVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjbG9uZWREb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAvKiBGb3JjZSByZW1vdmUgYWxsIGZvcm0gZWxlbWVudCBib3JkZXJzIGluIGNsb25lZCBkb2N1bWVudCAqL1xyXG4gICAgICBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIHZpc2libGUgKi9cclxuICAgICAgLnBkZi1pbnB1dC1yZXBsYWNlbWVudCxcclxuICAgICAgLnBkZi10ZXh0YXJlYS1yZXBsYWNlbWVudCxcclxuICAgICAgLnBkZi1zZWxlY3QtcmVwbGFjZW1lbnQsXHJcbiAgICAgIC5wZGYtYnV0dG9uLXJlcGxhY2VtZW50LFxyXG4gICAgICAucGRmLWNoZWNrYm94LXJlcGxhY2VtZW50LFxyXG4gICAgICAucGRmLXJhZGlvLXJlcGxhY2VtZW50IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFJlbW92ZSBNYXRlcmlhbCBEZXNpZ24gZm9ybSBmaWVsZCBib3JkZXJzICovXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIEhpZGUgQW5ndWxhciBNYXRlcmlhbCBmb3JtIGluZGljYXRvcnMgKi9cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCxcclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWhpbnQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICBjbG9uZWREb2MuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG4gICAgLy8gQWxzbyBoaWRlIGFueSBmb3JtIGVsZW1lbnRzIHRoYXQgbWlnaHQgc3RpbGwgYmUgdmlzaWJsZVxyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gY2xvbmVkRG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24nKTtcclxuICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=