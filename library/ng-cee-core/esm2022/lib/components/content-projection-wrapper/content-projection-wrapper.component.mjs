import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared-events-service.service";
import * as i2 from "../../utils/wfe-event-list-handler-util";
import * as i3 from "@angular/common/http";
const _c0 = ["printableContainer"];
const _c1 = ["*"];
export class ContentProjectionWrapperComponent {
    elementRef;
    sharedEventsServices;
    wfeEventListHandler;
    http;
    renderer;
    eventAdditionalParams = [];
    additionalParameters = [];
    event = {}; // for file service call
    destroy$ = new Subject();
    sectionData;
    // @Input() title?: string;
    showHeader = true;
    showFooter = true;
    /* @Input() showBefore: boolean = false;
    @Input() showAfter: boolean = false;
    @Input() showSidebar: boolean = true;
    @Input() showActions: boolean = true; */
    isolateStyles = true; // Option to isolate styles similar to Shadow DOM
    fonts = [];
    logoBase64 = '';
    loadedStylesheets = [];
    mutationObserver;
    contentProjectionOptions = {
        showHeader: false,
        showBefore: false,
        showAfter: false,
        showSidebar: false,
        showFooter: false,
        showActions: false,
        wrapperClass: '',
        isolateStyles: true,
        logoPath: '',
        fontPath: '',
        stylesheetPath: '',
        headerElementId: ''
    };
    generatePdfSubscription;
    //headerElementId: string = "2_45094"
    pdfStyles = '';
    printableContainer;
    pdfFileName = 'document.pdf';
    constructor(elementRef, sharedEventsServices, wfeEventListHandler, http, renderer) {
        this.elementRef = elementRef;
        this.sharedEventsServices = sharedEventsServices;
        this.wfeEventListHandler = wfeEventListHandler;
        this.http = http;
        this.renderer = renderer;
        this.generatePdfSubscription = this.sharedEventsServices.generatePdfUsingShadowDom
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
            // Handle the emitted data here
            if (data && data.additionalParameters) {
                this.eventAdditionalParams = data.additionalParameters;
            }
            if (data && data.pdfFileName) {
                this.pdfFileName = data.pdfFileName;
            }
            if (data && data.event) {
                this.event = data.event;
            }
            this.action('download');
        });
    }
    ngAfterViewInit() {
    }
    prepareAdditionalParams() {
        if (this.sectionData.additional_parameters && this.sectionData.additional_parameters.length > 0) {
            for (const parameter of this.sectionData.additional_parameters) {
                this.additionalParameters[parameter.parameter_type] = parameter.value;
                this.processParameter(parameter);
            }
        }
    }
    processParameter(parameter) {
        switch (parameter.parameter_type) {
            case 'CEE_ShowHeader':
                this.contentProjectionOptions.showHeader = parameter.value === 'true';
                break;
            case 'CEE_ShowBefore':
                this.contentProjectionOptions.showBefore = parameter.value === 'true';
                break;
            case 'CEE_ShowAfter':
                this.contentProjectionOptions.showAfter = parameter.value === 'true';
                break;
            case 'CEE_ShowSidebar':
                this.contentProjectionOptions.showSidebar = parameter.value === 'true';
                break;
            case 'CEE_ShowFooter':
                this.contentProjectionOptions.showFooter = parameter.value === 'true';
                break;
            case 'CEE_ShowActions':
                this.contentProjectionOptions.showActions = parameter.value === 'true';
                break;
            case 'CEE_WrapperClass':
                this.contentProjectionOptions.wrapperClass = parameter.value;
                break;
            case 'CEE_IsolateStyles':
                this.contentProjectionOptions.isolateStyles = parameter.value === 'true';
                break;
            case 'CEE_LogoPath':
                this.contentProjectionOptions.logoPath = parameter.value;
                break;
            case 'CEE_FontPath':
                this.contentProjectionOptions.fontPath = parameter.value;
                break;
            case 'CEE_Stylesheets':
                this.contentProjectionOptions.stylesheetPath = parameter.value;
                break;
            case 'CEE_HeaderSectionId':
                this.contentProjectionOptions.headerElementId = parameter.value;
                break;
            default:
                break;
        }
    }
    loadExternalStyles(stylesheetPath) {
        try {
            return this.http.get(stylesheetPath, { responseType: 'text' });
        }
        catch (error) {
            // console.error('Error in loadExternalStyles method:', error);
            throw error; // Re-throw to be handled by the subscriber
        }
    }
    ngOnInit() {
        // Prepare additional parameters
        this.prepareAdditionalParams();
        // First remove unwanted styles
        this.removeStyleTags();
        this.setupStyleMonitoring();
        // Then load the intentional stylesheet
        setTimeout(() => {
            if (this.contentProjectionOptions.stylesheetPath !== "") {
                //this.loadExternalStylesheet(this.contentProjectionOptions.stylesheetPath);
                this.loadExternalStyles(this.contentProjectionOptions.stylesheetPath).subscribe({
                    next: (response) => {
                        this.pdfStyles = response;
                        const shadowRoot = this.elementRef.nativeElement.shadowRoot;
                        if (!shadowRoot) {
                            console.warn('Shadow DOM not available for loading stylesheet');
                            return;
                        }
                        // Find the head element inside the shadow DOM
                        let headElement = shadowRoot.querySelector('head');
                        // If head doesn't exist, create it
                        if (!headElement) {
                            headElement = this.renderer.createElement('head');
                            const htmlElement = shadowRoot.querySelector('html');
                            if (htmlElement) {
                                this.renderer.insertBefore(htmlElement, headElement, htmlElement.firstChild);
                            }
                            else {
                                // If no html element, append to shadow root
                                this.renderer.appendChild(shadowRoot, headElement);
                            }
                        }
                        // Handle successful loading of external styles
                        const styleElement = this.renderer.createElement('style');
                        styleElement.setAttribute('data-pdf-only', 'true');
                        styleElement.innerHTML = response;
                        // Append to the head element instead of shadow root
                        this.renderer.appendChild(headElement, styleElement);
                        this.loadedStylesheets.push(styleElement);
                    },
                    error: (error) => {
                        console.error('Error loading external styles:', error);
                    }
                });
            }
        }, 0);
        // Convert and compress the logo image if a path is provided
        /* if (this.contentProjectionOptions.logoPath !== "") {
            //Convert and compress the logo image to base64
            this.convertAndCompressImage(this.contentProjectionOptions.logoPath, 140, 50, 0.7).then((compressedLogo) => {
                this.logoBase64 = compressedLogo;
            });
        } */
        if (this.contentProjectionOptions.fontPath !== "") {
            // Load Fonts
            try {
                this.loadFonts(this.contentProjectionOptions.fontPath)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe({
                    next: (response) => {
                        this.fonts = response;
                    },
                    error: (error) => {
                        console.error('Error loading fonts:', error);
                        this.fonts = []; // Fallback to empty array
                    }
                });
            }
            catch (error) {
                console.error('Error initializing font loading:', error);
                this.fonts = [];
            }
        }
    }
    ngOnDestroy() {
        // Emit destroy signal to complete all subscriptions
        this.destroy$.next();
        this.destroy$.complete();
        // Clean up dynamically loaded stylesheets
        this.loadedStylesheets.forEach(stylesheet => {
            if (stylesheet.parentNode) {
                this.renderer.removeChild(stylesheet.parentNode, stylesheet);
            }
        });
        this.loadedStylesheets = [];
        if (this.generatePdfSubscription) {
            this.generatePdfSubscription.unsubscribe();
        }
    }
    loadFonts(fontPath) {
        try {
            return this.http.get(fontPath);
        }
        catch (error) {
            console.error('Error in loadFonts method:', error);
            throw error; // Re-throw to be handled by the subscriber
        }
    }
    action(actionType) {
        // const fileName = this.getFileName();
        const shadowRoot = this.elementRef.nativeElement.shadowRoot;
        if (!shadowRoot) {
            console.warn('Template reference is not available for PDF generation.');
            return;
        }
        this.generateAdvancedSearchablePDF(shadowRoot, this.pdfFileName, actionType);
    }
    createPDFDocument() {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: false,
            floatPrecision: 16,
            compress: true
        });
        // doc.setProperties({
        //     title: 'Invoice',
        //     author: 'Your Company Name',
        //     subject: 'Invoice Document',
        //     keywords: 'invoice, pdf, jsPDF'
        // });
        if (this.fonts.length > 0) {
            this.loadFontsForPDF(doc);
        }
        return doc;
    }
    handlePDFAction(doc, actionType, fileName) {
        const printUpload = this.eventAdditionalParams['CEE_PRINT_UPLOAD'] === "true";
        fileName = fileName.includes('.pdf') ? fileName : `${fileName}.pdf`;
        //    setTimeout(() => {
        //        this.openHtmlPreview();
        //        const blob1 = doc.output('blob');
        //        const url1 = URL.createObjectURL(blob1);
        //        window.open(url1, '_blank');
        //        URL.revokeObjectURL(url1);
        //    }, 300);
        //     return;
        doc.save(fileName, { returnPromise: true })
            .then(() => {
            if (printUpload) {
                let success, failure;
                if (this.event.invoke_event_config) {
                    success = this.event.invoke_event_config.callback_config.OnSuccess ||
                        this.event.invoke_event_config.callback_config.onResponse;
                    failure = this.event.invoke_event_config.callback_config.onFailure ||
                        this.event.invoke_event_config.callback_config.onException;
                }
                const blobObj = doc.output('blob');
                blobObj.name = `${fileName}`; // set ilename in blob
                //self.printUpload(blobObj,`${fileName}`, success, failure);
                const res = {
                    blob: blobObj,
                    fileName: `${fileName}`,
                    success: success,
                    failure: failure
                };
                this.sharedEventsServices.printUploadUsingShadowDom.emit(res);
            }
            else {
                // console.log('PDF downloaded successfully');
            }
        });
        // switch (actionType) {
        //     case 'download':
        //         doc.save(fileName, { returnPromise: true }).then(() => {
        //             console.log('PDF downloaded successfully');
        //         });
        //         break;
        //     case 'print':
        //         doc.autoPrint();
        //         const blob = doc.output('blob');
        //         const url = URL.createObjectURL(blob);
        //         window.open(url, '_blank');
        //         URL.revokeObjectURL(url);
        //         break;
        //     case 'preview':
        //         const blob1 = doc.output('blob');
        //         const url1 = URL.createObjectURL(blob1);
        //         window.open(url1, '_blank');
        //         URL.revokeObjectURL(url1);
        //         break;
        //     default:
        //         console.warn('Unknown action type:', actionType);
        // }
    }
    loadFontsForPDF(doc) {
        try {
            this.fonts.forEach(font => {
                try {
                    doc.addFileToVFS(font.name, font.base64);
                    doc.addFont(font.name, font.family, font.type);
                    doc.setFont(font.family, font.type);
                }
                catch (fontError) {
                    console.error(`Error adding font ${font.name}:`, fontError);
                    // Continue with other fonts even if one fails
                }
            });
        }
        catch (error) {
            console.error('Error loading fonts for PDF:', error);
            // PDF generation can continue without custom fonts
        }
    }
    /**
     * Prepare content for PDF by copying form values to visible elements
     */
    prepareContentForPDF(shadowRoot) {
        // Create a temporary container
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = shadowRoot.innerHTML;
        // Process all form elements in the cloned content
        this.processFormElements(tempContainer, shadowRoot);
        // Apply app-view-renderer page break logic
        // this.handleAppViewRendererPageBreaks(tempContainer);
        // Remove all global style references from the cloned content
        //this.cleanClonedContent(tempContainer);
        this.cleanDatePickerElements(tempContainer);
        return tempContainer;
    }
    /**
     * Handle page breaks for app-view-renderer elements to prevent content cutting
     */
    handleAppViewRendererPageBreaks(container) {
        try {
            const appViewRenderers = container.querySelectorAll('app-view-renderer');
            if (appViewRenderers.length === 0) {
                // console.log('No app-view-renderer elements found');
                return;
            }
            // console.log(`Processing ${appViewRenderers.length} app-view-renderer elements for page breaks`);
            // A4 page dimensions at 96 DPI (standard web resolution)
            const pageHeightPx = 1122; // A4 height in pixels at 96 DPI
            const marginTop = 60; // Top margin in pixels
            const marginBottom = 40; // Bottom margin in pixels
            const availablePageHeight = pageHeightPx - marginTop - marginBottom;
            let currentY = 0;
            let pageNumber = 1;
            appViewRenderers.forEach((renderer, index) => {
                const rendererElement = renderer;
                // Get the estimated height of the app-view-renderer
                const rendererHeight = this.estimateElementHeight(rendererElement);
                // console.log(`App-view-renderer ${index + 1}: Height=${rendererHeight}px, CurrentY=${currentY}px`);
                // Check if this renderer would exceed the current page
                if (currentY + rendererHeight > availablePageHeight && currentY > 0) {
                    // console.log(`App-view-renderer ${index + 1} would exceed page ${pageNumber}, forcing page break`);
                    // Force a page break before this renderer
                    this.forcePageBreakBefore(rendererElement);
                    // Reset position for new page
                    currentY = rendererHeight;
                    pageNumber++;
                }
                else {
                    // Element fits on current page
                    currentY += rendererHeight;
                }
                // Apply enhanced page break styles to ensure content stays together
                this.applyPageBreakStyles(rendererElement);
            });
            // console.log(`Processed app-view-renderer elements across ${pageNumber} pages`);
        }
        catch (error) {
            // console.error('Error handling app-view-renderer page breaks:', error);
        }
    }
    /**
     * Estimate the height of an element including all its children
     */
    estimateElementHeight(element) {
        try {
            // Create a temporary clone to measure
            const clone = element.cloneNode(true);
            // Apply styles that will help with measurement
            clone.style.position = 'absolute';
            clone.style.left = '-9999px';
            clone.style.top = '0';
            clone.style.width = '800px'; // Standard PDF content width
            clone.style.visibility = 'hidden';
            clone.style.display = 'block';
            // Append to document body for measurement
            document.body.appendChild(clone);
            // Get the height
            const height = clone.offsetHeight;
            // Clean up
            document.body.removeChild(clone);
            // Add some padding for safety (20% buffer)
            const estimatedHeight = Math.ceil(height * 1.2);
            // Minimum height to ensure page break logic works
            return Math.max(estimatedHeight, 100);
        }
        catch (error) {
            console.warn('Could not estimate element height, using default:', error);
            return 150; // Default fallback height
        }
    }
    /**
     * Force a page break before an element
     */
    forcePageBreakBefore(element) {
        // Create a page break div
        const pageBreakDiv = document.createElement('div');
        pageBreakDiv.className = 'pdf-page-break-before';
        pageBreakDiv.style.cssText = `
            page-break-before: always !important;
            break-before: page !important;
            display: block !important;
            height: 1px !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            background: transparent !important;
            clear: both !important;
        `;
        // Insert the page break div before the element
        if (element.parentNode) {
            element.parentNode.insertBefore(pageBreakDiv, element);
        }
    }
    /**
     * Apply comprehensive page break styles to an app-view-renderer element
     */
    applyPageBreakStyles(element) {
        // Apply page break styles to the main element
        element.style.cssText += `
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            -webkit-column-break-inside: avoid !important;
            -moz-column-break-inside: avoid !important;
            display: block !important;
            overflow: visible !important;
            margin-bottom: 5px !important;
            //min-height: 20px !important;
        `;
        // .form-field,
        // Apply page break styles to child form elements
        const formElements = element.querySelectorAll(`
            .form-group,
            .field-container,
            .input-group,
            .mat-form-field,
            .mat-mdc-form-field,
            .radio-group,
            .checkbox-group,
            .select-container,
            .textarea-container,
            .date-picker-container
        `);
        formElements.forEach(formEl => {
            const formElement = formEl;
            formElement.style.cssText += `
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                -webkit-column-break-inside: avoid !important;
                -moz-column-break-inside: avoid !important;
                margin-bottom: 10px !important;
            `;
        });
        // Handle labels to stay with their inputs
        // const labels = element.querySelectorAll('label, .form-label, .field-label');
        // labels.forEach(label => {
        //     const labelElement = label as HTMLElement;
        //     labelElement.style.cssText += `
        //         page-break-after: avoid !important;
        //         break-after: avoid !important;
        //         -webkit-column-break-after: avoid !important;
        //         -moz-column-break-after: avoid !important;
        //     `;
        // });
        // Handle nested app-view-renderer elements
        // const nestedRenderers = element.querySelectorAll('app-view-renderer');
        // nestedRenderers.forEach(nested => {
        //     const nestedElement = nested as HTMLElement;
        //     nestedElement.style.cssText += `
        //         page-break-inside: avoid !important;
        //         break-inside: avoid !important;
        //         margin-bottom: 10px !important;
        //         display: block !important;
        //     `;
        // });
        // Handle Bootstrap grid elements within app-view-renderer
        // const gridElements = element.querySelectorAll('.row, .col, .col-auto, [class*="col-"]');
        const gridElements = element.querySelectorAll('.row, .col, .col-12, col-md-12, .col-sm-12, .col-lg-12, .col-xl-12, .col-xxl-12');
        gridElements.forEach(grid => {
            const gridElement = grid;
            gridElement.style.cssText += `
                page-break-inside: avoid !important;
                break-inside: avoid !important;
            `;
        });
    }
    cleanDatePickerElements(container) {
        // Remove ALL date picker related elements
        const datePickerElements = container.querySelectorAll(`
        mat-datepicker-toggle,
        mat-icon,
        .mat-datepicker-toggle,
        .mat-icon,
        .mat-mdc-form-field-icon-suffix,
        button[mat-icon-button],
        svg,
        .mdc-icon-button,
        [matdatepickertoggle],
        .shadow-dateInput
    `);
        datePickerElements.forEach(element => {
            element.remove();
        });
    }
    /**
     * Clean cloned content of global style references
     */
    cleanClonedContent(container) {
        // Remove all style and link elements
        const stylesAndLinks = container.querySelectorAll('style, link[rel="stylesheet"]');
        stylesAndLinks.forEach(element => {
            if (!element.hasAttribute('data-pdf-only')) {
                element.remove();
            }
        });
        // Remove style attributes and problematic classes from all elements
        const allElements = container.querySelectorAll('*');
        allElements.forEach(element => {
            // Remove inline styles
            element.removeAttribute('style');
            // Remove Angular attributes
            Array.from(element.attributes).forEach(attr => {
                if (attr.name.includes('_ngcontent') ||
                    attr.name.includes('_nghost') ||
                    attr.name.startsWith('ng-')) {
                    element.removeAttribute(attr.name);
                }
            });
            // Remove problematic CSS classes
            const classList = Array.from(element.classList);
            classList.forEach(className => {
                if (this.isProblematicClass(className)) {
                    element.classList.remove(className);
                }
            });
        });
    }
    /**
     * Enhance cloned document for better form element rendering and remove ALL global styles
     */
    enhanceClonedDocument(clonedDoc) {
        const style = clonedDoc.createElement('style');
        style.setAttribute('data-pdf-only', 'true');
        style.textContent = this.pdfStyles.concat(`
        
            /* Hide ALL Material Date Picker Components */
            .mat-mdc-form-field-icon-suffix,
            .mat-datepicker-toggle,
            .mat-datepicker-toggle-default-icon,
            .mat-mdc-form-field-flex .mat-mdc-form-field-icon-suffix,
            mat-datepicker-toggle,
            mat-datepicker-toggle *,
            mat-icon[matdatetimepickertoggleicon],
            mat-icon[matdatetoggleicon],
            mat-icon,
            button[mat-icon-button],
            .mat-icon,
            .mat-datepicker-toggle-default-icon,
            [matdatepickertoggle],
            [mat-datepicker-toggle],
            .mdc-icon-button,
            svg[data-mat-icon-name],
            .mat-mdc-icon-button {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                width: 0 !important;
                height: 0 !important;
                overflow: hidden !important;
            }

            /* Hide shadow date input elements */
            .shadow-dateInput {
                display: none !important;
            }

            /* Material form field adjustments */
            mat-form-field,
            .mat-mdc-form-field {
                .mat-mdc-text-field-wrapper {
                    .mat-mdc-form-field-flex {
                        .mat-mdc-form-field-icon-suffix {
                            display: none !important;
                        }

                        .mat-mdc-form-field-infix {
                            width: 100% !important;
                            padding-right: 0 !important;
                        }
                    }
                }
            }

            /* Remove any SVG icons */
            svg {
                display: none !important;
            }

            /* Hide any button elements within form fields */
            mat-form-field button,
            .mat-mdc-form-field button {
                display: none !important;
            }

            /* Style for PDF converted input divs */
            .pdf-converted-input {
                background-color: white !important;
                background: white !important;
                color: #000 !important;
                border: none !important;
                border-bottom: 2px solid #ffffff !important;
                font-family: "Quicksand", sans-serif !important;
                font-weight: 700 !important;
                padding: 10px 0 !important;
                margin: 0 0 15px 0 !important;
                width: 100% !important;
                display: block !important;
                min-height: 20px !important;
                word-wrap: break-word !important;
                white-space: normal !important;
            }

            /* Ensure date inputs are visible and properly styled */
            input[type="date"],
            input[type="datetime-local"],
            input[type="time"] {
                background-color: white !important;
                background: white !important;
                color: #000 !important;
                border: none !important;
                border-bottom: 2px solid #ffffff !important;
                font-family: "Quicksand", sans-serif !important;
                font-weight: 700 !important;
                padding: 10px 0 !important;
                margin: 0 0 15px 0 !important;
                width: 100% !important;
            }

            /* Additional targeting for Angular Material components */
            .mat-form-field-suffix,
            .mat-form-field-suffix *,
            .mat-datepicker-toggle-container,
            .mat-datepicker-toggle-container * {
                display: none !important;
                visibility: hidden !important;
            }`);
        clonedDoc.head.appendChild(style);
    }
    /**
     * Remove ALL styles from the cloned document
     */
    removeAllStylesFromDocument(doc) {
        // console.log(doc)
        // Remove style elements that don't have data-pdf-only attribute
        const styles = doc.querySelectorAll('style:not([data-pdf-only])');
        styles.forEach(style => style.remove());
        // Remove link elements with stylesheets that don't have data-pdf-only attribute
        // const links = doc.querySelectorAll('link[rel="stylesheet"]:not([data-pdf-only]), link[rel="preload"][as="style"]:not([data-pdf-only])');
        // links.forEach(link => link.remove());
        // console.log("links to remove", links);
        // Remove style attributes from ALL elements
        // const allElements = doc.querySelectorAll('*');
        // allElements.forEach(element => {
        //     element.removeAttribute('style');
        //     // Remove Angular attributes
        //     Array.from(element.attributes).forEach(attr => {
        //         if (attr.name.includes('_ngcontent') ||
        //             attr.name.includes('_nghost') ||
        //             attr.name.startsWith('ng-')) {
        //             element.removeAttribute(attr.name);
        //         }
        //     });
        //     // Remove problematic CSS classes
        //     const classList = Array.from(element.classList);
        //     classList.forEach(className => {
        //         if (this.isProblematicClass(className)) {
        //             element.classList.remove(className);
        //         }
        //     });
        // });
        // Remove any remaining CSS imports or external references
        // const head = doc.head;
        // if (head) {
        //     const metaStyles = head.querySelectorAll('meta, base');
        //     metaStyles.forEach(meta => {
        //         const httpEquiv = meta.getAttribute('http-equiv');
        //         if (httpEquiv && httpEquiv.toLowerCase() === 'content-style-type') {
        //             meta.remove();
        //         }
        //     });
        // }
    }
    /**
 * Check if a CSS class is problematic for PDF generation
 */
    isProblematicClass(className) {
        const problematicPrefixes = [
            'mat-', 'md-', 'mdc-',
            'bootstrap-', 'btn-', 'form-',
            'container', 'row', 'col-',
            'd-', 'p-', 'm-', 'text-',
            'ng-', 'cdk-',
            'fa-', 'fas-', 'far-',
            'ui-', 'ant-', 'el-' // Other UI frameworks
        ];
        return problematicPrefixes.some(prefix => className.startsWith(prefix));
    }
    /**
     * Process form elements to make their values visible in PDF
     */
    processFormElements(clonedContainer, originalShadowRoot) {
        // Process input elements
        const originalInputs = originalShadowRoot.querySelectorAll('input');
        const clonedInputs = clonedContainer.querySelectorAll('input');
        originalInputs.forEach((originalInput, index) => {
            const clonedInput = clonedInputs[index];
            if (clonedInput) {
                this.processInputElement(originalInput, clonedInput);
            }
        });
        // Process textarea elements
        const originalTextareas = originalShadowRoot.querySelectorAll('textarea');
        const clonedTextareas = clonedContainer.querySelectorAll('textarea');
        originalTextareas.forEach((originalTextarea, index) => {
            const clonedTextarea = clonedTextareas[index];
            if (clonedTextarea) {
                this.processTextareaElement(originalTextarea, clonedTextarea);
            }
        });
        // Process select elements
        const originalSelects = originalShadowRoot.querySelectorAll('select');
        const clonedSelects = clonedContainer.querySelectorAll('select');
        originalSelects.forEach((originalSelect, index) => {
            const clonedSelect = clonedSelects[index];
            if (clonedSelect) {
                this.processSelectElement(originalSelect, clonedSelect);
            }
        });
    }
    /**
     * Process individual input elements - Replace with div while keeping classes
     */
    processInputElement(originalInput, clonedInput) {
        const inputType = originalInput.type.toLowerCase();
        switch (inputType) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'tel':
            case 'url':
            case 'search':
                // Replace input with div while preserving classes and value
                this.replaceInputWithDiv(clonedInput, originalInput.value, originalInput);
                break;
            case 'checkbox':
            case 'radio':
                if (originalInput.checked) {
                    this.replaceWithVisualIndicator(clonedInput, true, inputType);
                }
                else {
                    this.replaceWithVisualIndicator(clonedInput, false, inputType);
                }
                break;
            case 'date':
            case 'datetime-local':
            case 'time':
                // Replace date inputs with div while preserving classes
                if (originalInput.value) {
                    this.replaceInputWithDiv(clonedInput, originalInput.value, originalInput);
                }
                else {
                    this.replaceInputWithDiv(clonedInput, '', originalInput);
                }
                break;
            case 'hidden':
                // Keep hidden inputs hidden
                break;
            default:
                // Replace all other input types with div
                this.replaceInputWithDiv(clonedInput, originalInput.value, originalInput);
                break;
        }
    }
    /**
     * Process textarea elements
     */
    processTextareaElement(originalTextarea, clonedTextarea) {
        clonedTextarea.textContent = originalTextarea.value;
        clonedTextarea.style.color = '#000';
        clonedTextarea.style.backgroundColor = '#ffffff';
        // Alternatively, replace with a div to ensure text is visible
        if (originalTextarea.value) {
            this.replaceWithTextDiv(clonedTextarea, originalTextarea.value);
        }
    }
    /**
     * Process select elements
     */
    processSelectElement(originalSelect, clonedSelect) {
        // Copy the selected state
        Array.from(originalSelect.options).forEach((originalOption, index) => {
            const clonedOption = clonedSelect.options[index];
            if (clonedOption) {
                clonedOption.selected = originalOption.selected;
            }
        });
        // Replace with visible text
        const selectedText = originalSelect.selectedOptions.length > 0
            ? Array.from(originalSelect.selectedOptions).map(option => option.text).join(', ')
            : '';
        if (selectedText) {
            this.replaceWithTextSpan(clonedSelect, selectedText);
        }
    }
    replaceWithVisualIndicator(element, isChecked, inputType) {
        const span = document.createElement('span');
        span.classList.add("pdf-dynamic-visual-indicator");
        // Apply common styles
        Object.assign(span.style, {
            backgroundColor: '#ffffff',
            // color: '#000',
            display: 'inline-block',
            fontWeight: 'bold',
            width: '11px',
            height: '11px',
            border: '2px solid #2b2b2bff',
            marginRight: '4px',
            marginTop: '2px',
            flexShrink: '0 !important',
        });
        if (inputType === 'radio') {
            span.style.borderRadius = '50%';
        }
        if (isChecked) {
            // span.style.outline = '1px solid #054d85';
            span.style.border = '2px solid #054d85';
            span.style.backgroundColor = '#0078d4';
        }
        element.parentNode?.replaceChild(span, element);
    }
    /**
     * Replace input element with div while preserving classes and attributes
     */
    replaceInputWithDiv(inputElement, text, originalInput) {
        const div = document.createElement('div');
        // Copy all classes from the original input
        if (originalInput.className) {
            div.className = originalInput.className;
        }
        // Copy relevant attributes (excluding form-specific ones)
        const attributesToCopy = ['id', 'data-*', 'aria-*', 'role'];
        Array.from(originalInput.attributes).forEach(attr => {
            if (attributesToCopy.some(pattern => pattern.endsWith('*') ? attr.name.startsWith(pattern.slice(0, -1)) : attr.name === pattern)) {
                div.setAttribute(attr.name, attr.value);
            }
        });
        // Set the text content
        div.textContent = text ? text : '--';
        // Add a class to identify PDF-converted elements
        div.classList.add('pdf-converted-input');
        // Apply basic styling to maintain visual consistency
        const computedStyle = window.getComputedStyle(originalInput);
        Object.assign(div.style, {
            padding: computedStyle.padding || '8px',
            backgroundColor: '#ffffff',
            color: '#000',
            fontSize: computedStyle.fontSize || 'inherit',
            fontFamily: computedStyle.fontFamily || 'inherit',
            fontWeight: computedStyle.fontWeight || 'normal',
            border: 'none',
            borderBottom: '2px solid #ffffff',
            // minHeight: computedStyle.height || 'auto',
            width: computedStyle.width || 'auto',
            display: 'block',
            marginBottom: '15px',
            borderRadius: '0 !important'
        });
        // Replace the input element with the div
        if (inputElement.parentNode) {
            inputElement.parentNode.replaceChild(div, inputElement);
        }
    }
    /**
     * Replace form element with text span
     */
    replaceWithTextSpan(element, text) {
        const span = document.createElement('span');
        span.classList.add("pdf-dynamic-span");
        const computedStyle = window.getComputedStyle(element);
        span.textContent = text;
        Object.assign(span.style, {
            padding: '4px 8px',
            border: '1px solid #ffffffff',
            // borderRadius: '4px',
            backgroundColor: '#ffffffff',
            color: '#000',
            fontSize: computedStyle.fontSize,
            fontFamily: computedStyle.fontFamily,
            display: 'inline-block',
            minWidth: '100px'
        });
        element.parentNode?.replaceChild(span, element);
    }
    /**
     * Replace textarea with div
     */
    replaceWithTextDiv(element, text) {
        const div = document.createElement('div');
        const computedStyle = window.getComputedStyle(element);
        div.classList.add("pdf-dynamic-text-div");
        div.textContent = text ? text : '--';
        Object.assign(div.style, {
            padding: '8px',
            // border: '1px solid #ccc',
            // borderRadius: '4px',
            // backgroundColor: '#f9f9f9',
            color: '#000',
            fontSize: computedStyle.fontSize,
            fontFamily: computedStyle.fontFamily,
            // minHeight: element.offsetHeight + 'px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontWeight: 700,
            borderBottom: '2px solid #ffffff'
        });
        element.parentNode?.replaceChild(div, element);
    }
    /**
     * Generate PDF with advanced searchable header using headerElementId
     */
    generateAdvancedSearchablePDF(shadowRoot, fileName, actionType) {
        // Get header and main content elements
        // Use CSS.escape for IDs that start with numbers or contain special characters
        const escapedId = CSS.escape(this.contentProjectionOptions.headerElementId);
        const headerElement = document.querySelector(`#${escapedId}`);
        const mainContent = this.prepareContentForPDF(shadowRoot);
        if (!headerElement) {
            console.warn(`Header element with ID '${this.contentProjectionOptions.headerElementId}' not found.`);
            return;
        }
        this.generateAdvancedPDF(headerElement, mainContent, fileName);
    }
    /**
     * Generate PDF with advanced searchable header functionality
     */
    async generateAdvancedPDF(headerElement, mainContent, fileName) {
        try {
            const doc = this.createPDFDocument();
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const marginTop = 45;
            const marginBottom = 20;
            const marginLeft = 15;
            const marginRight = 10;
            const headerLineGap = 3; // Gap between header Line and header and content
            // Extract advanced header content
            const headerContent = this.extractAdvancedHeaderContent(headerElement);
            // Process header images
            const processedImages = await this.processHeaderImages(headerContent.images);
            // Function to add advanced searchable header to each page
            const addAdvancedSearchableHeader = (pageNum, totalPages) => {
                // Header background
                doc.setFillColor(255, 255, 255);
                doc.rect(0, 0, pageWidth, 30, 'F');
                // Header border
                doc.setLineWidth(0.5);
                doc.setDrawColor(225, 228, 228);
                doc.line(0, (marginTop - headerLineGap), pageWidth, (marginTop - headerLineGap));
                // Add images on the left side
                let imageXPosition = marginLeft;
                let imageYPosition = 8;
                processedImages.forEach((img, index) => {
                    if (img.data) {
                        doc.addImage(img.data, 'PNG', imageXPosition - 5, imageYPosition, 35, 15);
                        imageXPosition += 40; // Space between images
                    }
                    // Add invisible searchable alt text for accessibility
                    if (img.alt) {
                        doc.setFontSize(1);
                        doc.setTextColor(255, 255, 255); // White text (invisible)
                        doc.text(img.alt, imageXPosition - 35, 2);
                        doc.setTextColor(0, 0, 0); // Reset to black
                    }
                });
                // Calculate text starting position (after images)
                const textStartX = imageXPosition + 10; // 10mm space after last image
                const maxTextWidth = pageWidth - textStartX - marginRight;
                // Add searchable text elements on the right side (right-aligned)
                let yPosition = 10;
                headerContent.textElements.forEach((textEl, index) => {
                    const fontSize = index === 0 ? 12 : 10;
                    const fontWeight = index === 0 ? 'bold' : 'normal';
                    doc.setFontSize(fontSize);
                    doc.setFont('Quicksand', fontWeight);
                    doc.setTextColor(0, 0, 0);
                    // Handle long text by wrapping with available width
                    const lines = doc.splitTextToSize(textEl.text, maxTextWidth);
                    if (Array.isArray(lines)) {
                        lines.forEach((line, lineIndex) => {
                            // Right align the text
                            doc.text(line, pageWidth - marginRight, yPosition + (lineIndex * (fontSize === 12 ? 8 : 6)), { align: 'right' });
                        });
                        yPosition += lines.length * (fontSize === 12 ? 8 : 6);
                    }
                    else {
                        // Right align the text
                        doc.text(lines, pageWidth - marginRight, yPosition, { align: 'right' });
                        yPosition += fontSize === 12 ? 8 : 6;
                    }
                });
            };
            // Add initial header
            addAdvancedSearchableHeader(1, 1);
            // Generate PDF with main content
            await new Promise((resolve) => {
                const pdfWidthMm = 210;
                const totalPx = 1000;
                const marginPx = 5;
                const usablePx = totalPx - marginPx * 2; // 980px
                const scaleFactor = (pdfWidthMm / usablePx - 0.01).toFixed(2) || 0.21; // ≈ 0.2143
                doc.html(mainContent, {
                    /* x: marginLeft,
                    y: marginTop,
                    width: pageWidth - marginLeft - marginRight,
                    windowWidth: 800, */
                    x: 0,
                    y: 0,
                    width: 1000,
                    windowWidth: 1000,
                    autoPaging: 'text',
                    //margin: [marginTop, marginRight, marginBottom, marginLeft],
                    margin: [marginTop, marginPx, marginBottom, marginPx],
                    html2canvas: {
                        //scale: 0.21,
                        scale: scaleFactor,
                        useCORS: true,
                        allowTaint: true,
                        logging: false,
                        backgroundColor: '#ffffff',
                        // CRITICAL: Ignore ALL external stylesheets and global styles
                        /* ignoreElements: (element: Element) => {
                            
                            // Ignore ALL style elements
                            if (element.tagName === 'STYLE') {
                                //console.log(element);
                                return !element.hasAttribute('data-pdf-only');
                            }

                            // Ignore ALL link elements with stylesheets
                            if (element.tagName === 'LINK' && element.getAttribute('rel') === 'stylesheet') {
                                return !element.hasAttribute('data-pdf-only');
                            }

                            // Ignore elements with global framework classes
                            const classList = Array.from(element.classList);
                            const hasGlobalClasses = classList.some(className => this.isProblematicClass(className));

                            return hasGlobalClasses;
                        }, */
                        onclone: (clonedDoc) => {
                            this.setCustomViewport(clonedDoc);
                            // console.log(clonedDoc);
                            this.removeAllStylesFromDocument(clonedDoc);
                            this.enhanceClonedDocument(clonedDoc);
                        }
                    },
                    callback: (pdf) => {
                        const totalPages = pdf.internal.getNumberOfPages();
                        // Add headers to all pages
                        for (let i = 1; i <= totalPages; i++) {
                            pdf.setPage(i);
                            addAdvancedSearchableHeader(i, totalPages);
                        }
                        // Add PDF metadata for searchability
                        pdf.setProperties({
                            title: `${fileName}`,
                            author: 'Inadev',
                            subject: `${fileName}`,
                            keywords: `${fileName}, pdf`,
                            creator: 'Inadev'
                        });
                        setTimeout(() => {
                            this.handlePDFAction(pdf, 'download', fileName);
                            resolve();
                        }, 0);
                    }
                });
            });
        }
        catch (error) {
            // console.error('Error generating advanced searchable PDF:', error);
        }
    }
    setCustomViewport(doc) {
        const viewport = doc.querySelector('meta[name="viewport"]');
        if (viewport) {
            // Set custom viewport for PDF generation
            viewport.setAttribute('content', 'width=1000, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no, minimum-scale=1.0');
        }
        else {
            // Create new viewport meta tag if none exists
            const meta = doc.createElement('meta');
            meta.setAttribute('name', 'viewport');
            meta.setAttribute('content', 'width=1000, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no, minimum-scale=1.0');
            doc.head.appendChild(meta);
        }
    }
    /**
     * Extract advanced content from header element
     */
    extractAdvancedHeaderContent(element) {
        const content = {
            textElements: [],
            images: []
        };
        // Extract text nodes with their styling context using TreeWalker
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
        let node;
        while (node = walker.nextNode()) {
            const text = node.textContent?.trim();
            if (text && text.length > 0) {
                const parentElement = node.parentElement;
                if (parentElement) {
                    const computedStyle = window.getComputedStyle(parentElement);
                    content.textElements.push({
                        text: text,
                        color: computedStyle.color,
                        fontSize: computedStyle.fontSize,
                        fontWeight: computedStyle.fontWeight
                    });
                }
            }
        }
        // Extract images with their metadata
        const images = element.querySelectorAll('img');
        images.forEach(img => {
            if (img.src) {
                content.images.push({
                    src: img.src,
                    alt: img.alt || 'Header Image',
                    width: img.width || img.offsetWidth,
                    height: img.height || img.offsetHeight
                });
            }
        });
        return content;
    }
    /**
     * Process header images for PDF inclusion
     */
    async processHeaderImages(images) {
        const processed = [];
        for (const imgInfo of images) {
            try {
                const dataUrl = await this.convertAndCompressImage(imgInfo.src, 140, 50, 0.9);
                processed.push({
                    data: dataUrl,
                    alt: imgInfo.alt,
                    width: imgInfo.width,
                    height: imgInfo.height
                });
            }
            catch (error) {
                console.warn('Could not process header image:', error);
                // Add placeholder for failed images
                processed.push({
                    data: null,
                    alt: imgInfo.alt || 'Image not available',
                    width: imgInfo.width,
                    height: imgInfo.height
                });
            }
        }
        return processed;
    }
    convertAndCompressImage(url, maxWidth = 800, maxHeight = 800, quality = 0.7) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = () => {
                try {
                    const { compressedDataUrl } = this.processImageCompression(img, maxWidth, maxHeight, quality, url);
                    resolve(compressedDataUrl);
                }
                catch (error) {
                    reject(error);
                }
            };
            img.onerror = (err) => reject(err);
            img.src = url;
        });
    }
    processImageCompression(img, maxWidth, maxHeight, quality, url) {
        let { width, height } = img;
        // Calculate new size while preserving aspect ratio
        if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = width * ratio;
            height = height * ratio;
        }
        const canvas = this.createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const originalFormat = this.getImageFormat(url);
        if (originalFormat === 'png' || this.hasTransparency(canvas)) {
            return { compressedDataUrl: canvas.toDataURL('image/png') };
        }
        else {
            const tempCanvas = this.createCanvasWithBackground(canvas, width, height);
            return { compressedDataUrl: tempCanvas.toDataURL('image/jpeg', quality) };
        }
    }
    createCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    createCanvasWithBackground(sourceCanvas, width, height) {
        const tempCanvas = this.createCanvas(width, height);
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.fillStyle = '#FFFFFF';
        tempCtx.fillRect(0, 0, width, height);
        tempCtx.drawImage(sourceCanvas, 0, 0);
        return tempCanvas;
    }
    getImageFormat(url) {
        const extension = url.split('.').pop()?.toLowerCase();
        return extension || 'png';
    }
    hasTransparency(canvas) {
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return false;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        // Check if any pixel has alpha channel less than 255 (transparent)
        for (let i = 3; i < data.length; i += 4) {
            if (data[i] < 255) {
                return true;
            }
        }
        return false;
    }
    /* Styles related helper functions */
    removeStyleTags() {
        const shadowRoot = this.elementRef.nativeElement.shadowRoot;
        if (!shadowRoot)
            return;
        // Remove all <style> tags from projected content EXCEPT intentionally loaded ones
        const styleTags = shadowRoot.querySelectorAll('style');
        styleTags.forEach(styleTag => {
            if (!styleTag.hasAttribute('data-pdf-only')) {
                styleTag.remove();
            }
        });
        // Remove all <link> tags with stylesheets EXCEPT intentionally loaded ones
        const linkTags = shadowRoot.querySelectorAll('link[rel="stylesheet"]');
        linkTags.forEach(linkTag => {
            if (!linkTag.hasAttribute('data-pdf-only')) {
                linkTag.remove();
            }
        });
        // Also check specifically in the head element
        const headElement = shadowRoot.querySelector('head');
        if (headElement) {
            const headStyles = headElement.querySelectorAll('style:not([data-pdf-only])');
            const headLinks = headElement.querySelectorAll('link[rel="stylesheet"]:not([data-pdf-only])');
            headStyles.forEach(style => style.remove());
            headLinks.forEach(link => link.remove());
        }
    }
    // Monitor style changes within the shadow DOM
    setupStyleMonitoring() {
        const shadowRoot = this.elementRef.nativeElement.shadowRoot;
        if (!shadowRoot)
            return;
        this.mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const element = node;
                            // Only remove style/link tags that are NOT intentionally loaded
                            if (element.tagName === 'STYLE' && !element.hasAttribute('data-pdf-only')) {
                                element.remove();
                            }
                            else if (element.tagName === 'LINK' &&
                                element.getAttribute('rel') === 'stylesheet' &&
                                !element.hasAttribute('data-pdf-only')) {
                                element.remove();
                            }
                            // Check for nested style tags (excluding intentionally loaded ones)
                            const nestedStyles = element.querySelectorAll('style:not([data-pdf-only]), link[rel="stylesheet"]:not([data-pdf-only])');
                            nestedStyles.forEach(style => style.remove());
                        }
                    });
                }
            });
        });
        this.mutationObserver.observe(shadowRoot, {
            childList: true,
            subtree: true
        });
    }
    // Load an external stylesheet into the shadow DOM
    loadExternalStylesheet(cssPath) {
        if (!cssPath || this.isStylesheetAlreadyLoaded(cssPath)) {
            return;
        }
        const shadowRoot = this.elementRef.nativeElement.shadowRoot;
        if (!shadowRoot) {
            console.warn('Shadow DOM not available for loading stylesheet');
            return;
        }
        // Find the head element inside the shadow DOM
        let headElement = shadowRoot.querySelector('head');
        // If head doesn't exist, create it
        if (!headElement) {
            headElement = this.renderer.createElement('head');
            const htmlElement = shadowRoot.querySelector('html');
            if (htmlElement) {
                this.renderer.insertBefore(htmlElement, headElement, htmlElement.firstChild);
            }
            else {
                // If no html element, append to shadow root
                this.renderer.appendChild(shadowRoot, headElement);
            }
        }
        const link = this.renderer.createElement('link');
        this.renderer.setAttribute(link, 'rel', 'stylesheet');
        this.renderer.setAttribute(link, 'type', 'text/css');
        this.renderer.setAttribute(link, 'href', cssPath);
        // IMPORTANT: Mark as intentionally loaded to prevent removal
        this.renderer.setAttribute(link, 'data-pdf-only', 'true');
        // Append to the head element instead of shadow root
        this.renderer.appendChild(headElement, link);
        this.loadedStylesheets.push(link);
    }
    isStylesheetAlreadyLoaded(cssPath) {
        const shadowRoot = this.elementRef.nativeElement.shadowRoot;
        if (!shadowRoot)
            return false;
        // Check within shadow DOM's head tag
        const headElement = shadowRoot.querySelector('head');
        if (!headElement)
            return false;
        return headElement.querySelector(`link[href="${cssPath}"]`) !== null;
    }
    cleanGlobalStyleReferences(container) {
        // Remove any elements that might be pulling in external styles
        const elementsWithStyleRefs = container.querySelectorAll('[style], [class*="mat-"], [class*="bootstrap-"], [class*="btn-"]');
        elementsWithStyleRefs.forEach(element => {
            // Remove problematic classes
            const classList = Array.from(element.classList);
            classList.forEach(className => {
                if (className.startsWith('mat-') ||
                    className.startsWith('bootstrap-') ||
                    className.startsWith('btn-') ||
                    className.startsWith('form-') ||
                    className.startsWith('container') ||
                    className.startsWith('row') ||
                    className.startsWith('col-')) {
                    element.classList.remove(className);
                }
            });
        });
    }
    /**
     * Open HTML preview in a new tab before PDF generation
     */
    openHtmlPreview() {
        try {
            const shadowRoot = this.elementRef.nativeElement.shadowRoot;
            if (!shadowRoot) {
                console.warn('Shadow DOM not available for HTML preview');
                return;
            }
            // Prepare content for preview (same as PDF preparation)
            const previewContent = this.prepareContentForPDF(shadowRoot);
            // Create a complete HTML document
            const htmlDocument = this.createPreviewHtmlDocument(previewContent);
            // Open in new tab
            const newWindow = window.open('', '_blank');
            if (newWindow) {
                newWindow.document.write(htmlDocument);
                newWindow.document.close();
                // Optional: Set window title
                newWindow.document.title = this.pdfFileName.replace('.pdf', '') + ' - Preview';
            }
            else {
                console.warn('Failed to open preview window. Please check popup blocker settings.');
            }
        }
        catch (error) {
            console.error('Error opening HTML preview:', error);
        }
    }
    /**
     * Create a complete HTML document for preview
     */
    createPreviewHtmlDocument(content) {
        // Get header content if available
        let headerHtml = '';
        if (this.contentProjectionOptions.headerElementId) {
            const escapedId = CSS.escape(this.contentProjectionOptions.headerElementId);
            const headerElement = document.querySelector(`#${escapedId}`);
            if (headerElement) {
                headerHtml = this.createHeaderPreviewHtml(headerElement);
            }
        }
        // Create complete HTML document
        const htmlDocument = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=1000, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no, minimum-scale=1.0" style="transition-property: none;">
                <title>${this.pdfFileName.replace('.pdf', '')} - Preview</title>
                <style>
                    ${this.pdfStyles}
                    body {
                        font-family: "Quicksand", sans-serif;
                        margin: 0;
                        padding: 20px;
                        background-color: #ffffff;
                        color: #000;
                        line-height: 1.6;
                    }
                    .preview-container {
                        max-width: 210mm;
                        margin: 0 auto;
                        background: white;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                        padding: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="preview-container">
                    ${headerHtml ? `<div class="header-section">${headerHtml}</div>` : ''}
                    <div class="content-section">
                        ${content.innerHTML}
                    </div>
                </div>
            </body>
            </html>
        `;
        return htmlDocument;
    }
    /**
     * Create header HTML for preview
     */
    createHeaderPreviewHtml(headerElement) {
        // Clone the header element
        const clonedHeader = headerElement.cloneNode(true);
        // Process any form elements in the header
        this.processFormElements(clonedHeader, headerElement.getRootNode());
        // Clean up the header content
        this.cleanDatePickerElements(clonedHeader);
        return clonedHeader.innerHTML;
    }
    static ɵfac = function ContentProjectionWrapperComponent_Factory(t) { return new (t || ContentProjectionWrapperComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.WFEEventListHandler), i0.ɵɵdirectiveInject(i3.HttpClient), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentProjectionWrapperComponent, selectors: [["print-preview-wrapper"]], viewQuery: function ContentProjectionWrapperComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.printableContainer = _t.first);
        } }, inputs: { sectionData: "sectionData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c1, decls: 4, vars: 3, consts: [[1, "content-projection-container", "content-container"], [1, "section-main"]], template: function ContentProjectionWrapperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("viewport-wrapper ", ctx.contentProjectionOptions == null ? null : ctx.contentProjectionOptions.wrapperClass, "");
        } }, dependencies: [CommonModule], encapsulation: 3 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentProjectionWrapperComponent, [{
        type: Component,
        args: [{ selector: 'print-preview-wrapper', standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.ShadowDom, template: "<div class=\"content-projection-container content-container\">\r\n    <div class=\"viewport-wrapper {{contentProjectionOptions?.wrapperClass}}\">\r\n        <!-- Main content projection (default slot) -->\r\n        <div class=\"section-main\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n    </div>\r\n</div>" }]
    }], () => [{ type: i0.ElementRef }, { type: i1.SharedEventsServiceService }, { type: i2.WFEEventListHandler }, { type: i3.HttpClient }, { type: i0.Renderer2 }], { sectionData: [{
            type: Input,
            args: ['sectionData']
        }], printableContainer: [{
            type: ViewChild,
            args: ['printableContainer', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentProjectionWrapperComponent, { className: "ContentProjectionWrapperComponent", filePath: "lib\\components\\content-projection-wrapper\\content-projection-wrapper.component.ts", lineNumber: 40 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wcm9qZWN0aW9uLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY29udGVudC1wcm9qZWN0aW9uLXdyYXBwZXIvY29udGVudC1wcm9qZWN0aW9uLXdyYXBwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY29udGVudC1wcm9qZWN0aW9uLXdyYXBwZXIvY29udGVudC1wcm9qZWN0aW9uLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFnQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFnQzNDLE1BQU0sT0FBTyxpQ0FBaUM7SUE2QzlCO0lBQ0Q7SUFDQTtJQUNBO0lBQ0E7SUEvQ1gscUJBQXFCLEdBQVUsRUFBRSxDQUFDO0lBQ2xDLG9CQUFvQixHQUFVLEVBQUUsQ0FBQztJQUNqQyxLQUFLLEdBQVEsRUFBRSxDQUFDLENBQUMsd0JBQXdCO0lBQ2pDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRWpCLFdBQVcsQ0FBTztJQUN4QywyQkFBMkI7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cERRLGlDQUFpQzs2REFBakMsaUNBQWlDOzs7Ozs7O1lDcEN0QyxBQUZKLEFBREosOEJBQTRELFVBQ2lCLGFBRTNDO1lBQ3RCLGtCQUF5QjtZQUdyQyxBQURJLEFBREksaUJBQU0sRUFDSixFQUNKOztZQU5HLGNBQW1FO1lBQW5FLDJJQUFtRTs0QkRpQzlELFlBQVk7O2lGQUtiLGlDQUFpQztjQVI3QyxTQUFTOzJCQUNJLHVCQUF1QixjQUNyQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsaUJBR1IsaUJBQWlCLENBQUMsU0FBUzt1S0FTcEIsV0FBVztrQkFBaEMsS0FBSzttQkFBQyxhQUFhO1lBaUNnQyxrQkFBa0I7a0JBQXJFLFNBQVM7bUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrRkF4Q3pDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFdGRUV2ZW50TGlzdEhhbmRsZXIgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtZXZlbnQtbGlzdC1oYW5kbGVyLXV0aWwnO1xyXG5pbXBvcnQganNQREYgZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW50ZXJmYWNlIENvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucyB7XHJcbiAgICBzaG93SGVhZGVyOiBib29sZWFuO1xyXG4gICAgc2hvd0JlZm9yZTogYm9vbGVhbjtcclxuICAgIHNob3dBZnRlcjogYm9vbGVhbjtcclxuICAgIHNob3dTaWRlYmFyOiBib29sZWFuO1xyXG4gICAgc2hvd0Zvb3RlcjogYm9vbGVhbjtcclxuICAgIHNob3dBY3Rpb25zOiBib29sZWFuO1xyXG4gICAgd3JhcHBlckNsYXNzOiBzdHJpbmc7XHJcbiAgICBpc29sYXRlU3R5bGVzOiBib29sZWFuO1xyXG4gICAgbG9nb1BhdGg6IHN0cmluZztcclxuICAgIGZvbnRQYXRoOiBzdHJpbmc7XHJcbiAgICBzdHlsZXNoZWV0UGF0aDogc3RyaW5nO1xyXG4gICAgaGVhZGVyRWxlbWVudElkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGb250RGVmaW5pdGlvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBiYXNlNjQ6IHN0cmluZztcclxuICAgIGZhbWlseTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJpbnQtcHJldmlldy13cmFwcGVyJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXByb2plY3Rpb24td3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb250ZW50LXByb2plY3Rpb24td3JhcHBlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50UHJvamVjdGlvbldyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgZXZlbnRBZGRpdGlvbmFsUGFyYW1zOiBhbnlbXSA9IFtdO1xyXG4gICAgYWRkaXRpb25hbFBhcmFtZXRlcnM6IGFueVtdID0gW107XHJcbiAgICBldmVudDogYW55ID0ge307IC8vIGZvciBmaWxlIHNlcnZpY2UgY2FsbFxyXG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgQElucHV0KCdzZWN0aW9uRGF0YScpIHNlY3Rpb25EYXRhPzogYW55O1xyXG4gICAgLy8gQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBzaG93SGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNob3dGb290ZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyogQElucHV0KCkgc2hvd0JlZm9yZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2hvd0FmdGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzaG93U2lkZWJhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaG93QWN0aW9uczogYm9vbGVhbiA9IHRydWU7ICovXHJcbiAgICBpc29sYXRlU3R5bGVzOiBib29sZWFuID0gdHJ1ZTsgLy8gT3B0aW9uIHRvIGlzb2xhdGUgc3R5bGVzIHNpbWlsYXIgdG8gU2hhZG93IERPTVxyXG4gICAgZm9udHM6IEZvbnREZWZpbml0aW9uW10gPSBbXTtcclxuICAgIGxvZ29CYXNlNjQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBsb2FkZWRTdHlsZXNoZWV0czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG5cclxuICAgIGNvbnRlbnRQcm9qZWN0aW9uT3B0aW9uczogQ29udGVudFByb2plY3Rpb25PcHRpb25zID0ge1xyXG4gICAgICAgIHNob3dIZWFkZXI6IGZhbHNlLFxyXG4gICAgICAgIHNob3dCZWZvcmU6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBZnRlcjogZmFsc2UsXHJcbiAgICAgICAgc2hvd1NpZGViYXI6IGZhbHNlLFxyXG4gICAgICAgIHNob3dGb290ZXI6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBY3Rpb25zOiBmYWxzZSxcclxuICAgICAgICB3cmFwcGVyQ2xhc3M6ICcnLFxyXG4gICAgICAgIGlzb2xhdGVTdHlsZXM6IHRydWUsXHJcbiAgICAgICAgbG9nb1BhdGg6ICcnLFxyXG4gICAgICAgIGZvbnRQYXRoOiAnJyxcclxuICAgICAgICBzdHlsZXNoZWV0UGF0aDogJycsXHJcbiAgICAgICAgaGVhZGVyRWxlbWVudElkOiAnJ1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBnZW5lcmF0ZVBkZlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgLy9oZWFkZXJFbGVtZW50SWQ6IHN0cmluZyA9IFwiMl80NTA5NFwiXHJcblxyXG4gICAgcHVibGljIHBkZlN0eWxlczogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgncHJpbnRhYmxlQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaW50YWJsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBwZGZGaWxlTmFtZTogc3RyaW5nID0gJ2RvY3VtZW50LnBkZic7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlczogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZUV2ZW50TGlzdEhhbmRsZXI6IFdGRUV2ZW50TGlzdEhhbmRsZXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmdlbmVyYXRlUGRmU3Vic2NyaXB0aW9uID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlcy5nZW5lcmF0ZVBkZlVzaW5nU2hhZG93RG9tXHJcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBlbWl0dGVkIGRhdGEgaGVyZVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hZGRpdGlvbmFsUGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRBZGRpdGlvbmFsUGFyYW1zID0gZGF0YS5hZGRpdGlvbmFsUGFyYW1ldGVycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEucGRmRmlsZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBkZkZpbGVOYW1lID0gZGF0YS5wZGZGaWxlTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ID0gZGF0YS5ldmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uKCdkb3dubG9hZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVBZGRpdGlvbmFsUGFyYW1zKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiB0aGlzLnNlY3Rpb25EYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1twYXJhbWV0ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW1ldGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUGFyYW1ldGVyKHBhcmFtZXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzUGFyYW1ldGVyKHBhcmFtZXRlcjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChwYXJhbWV0ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnQ0VFX1Nob3dIZWFkZXInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc2hvd0hlYWRlciA9IHBhcmFtZXRlci52YWx1ZSA9PT0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NFRV9TaG93QmVmb3JlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLnNob3dCZWZvcmUgPSBwYXJhbWV0ZXIudmFsdWUgPT09ICd0cnVlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDRUVfU2hvd0FmdGVyJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLnNob3dBZnRlciA9IHBhcmFtZXRlci52YWx1ZSA9PT0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NFRV9TaG93U2lkZWJhcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5zaG93U2lkZWJhciA9IHBhcmFtZXRlci52YWx1ZSA9PT0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NFRV9TaG93Rm9vdGVyJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLnNob3dGb290ZXIgPSBwYXJhbWV0ZXIudmFsdWUgPT09ICd0cnVlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDRUVfU2hvd0FjdGlvbnMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc2hvd0FjdGlvbnMgPSBwYXJhbWV0ZXIudmFsdWUgPT09ICd0cnVlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDRUVfV3JhcHBlckNsYXNzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLndyYXBwZXJDbGFzcyA9IHBhcmFtZXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDRUVfSXNvbGF0ZVN0eWxlcyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5pc29sYXRlU3R5bGVzID0gcGFyYW1ldGVyLnZhbHVlID09PSAndHJ1ZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQ0VFX0xvZ29QYXRoJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLmxvZ29QYXRoID0gcGFyYW1ldGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NFRV9Gb250UGF0aCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5mb250UGF0aCA9IHBhcmFtZXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDRUVfU3R5bGVzaGVldHMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc3R5bGVzaGVldFBhdGggPSBwYXJhbWV0ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQ0VFX0hlYWRlclNlY3Rpb25JZCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5oZWFkZXJFbGVtZW50SWQgPSBwYXJhbWV0ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRXh0ZXJuYWxTdHlsZXMoc3R5bGVzaGVldFBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHN0eWxlc2hlZXRQYXRoLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGxvYWRFeHRlcm5hbFN0eWxlcyBtZXRob2Q6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjsgLy8gUmUtdGhyb3cgdG8gYmUgaGFuZGxlZCBieSB0aGUgc3Vic2NyaWJlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAgICB0aGlzLnByZXBhcmVBZGRpdGlvbmFsUGFyYW1zKCk7XHJcblxyXG4gICAgICAgIC8vIEZpcnN0IHJlbW92ZSB1bndhbnRlZCBzdHlsZXNcclxuICAgICAgICB0aGlzLnJlbW92ZVN0eWxlVGFncygpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTdHlsZU1vbml0b3JpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gVGhlbiBsb2FkIHRoZSBpbnRlbnRpb25hbCBzdHlsZXNoZWV0XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5zdHlsZXNoZWV0UGF0aCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmxvYWRFeHRlcm5hbFN0eWxlc2hlZXQodGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc3R5bGVzaGVldFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRXh0ZXJuYWxTdHlsZXModGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc3R5bGVzaGVldFBhdGgpLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogKHJlc3BvbnNlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZGZTdHlsZXMgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zaGFkb3dSb290O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignU2hhZG93IERPTSBub3QgYXZhaWxhYmxlIGZvciBsb2FkaW5nIHN0eWxlc2hlZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaGVhZCBlbGVtZW50IGluc2lkZSB0aGUgc2hhZG93IERPTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZEVsZW1lbnQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGhlYWQgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdoZWFkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaHRtbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoaHRtbEVsZW1lbnQsIGhlYWRFbGVtZW50LCBodG1sRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm8gaHRtbCBlbGVtZW50LCBhcHBlbmQgdG8gc2hhZG93IHJvb3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNoYWRvd1Jvb3QsIGhlYWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NmdWwgbG9hZGluZyBvZiBleHRlcm5hbCBzdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXBkZi1vbmx5JywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdG8gdGhlIGhlYWQgZWxlbWVudCBpbnN0ZWFkIG9mIHNoYWRvdyByb290XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoaGVhZEVsZW1lbnQsIHN0eWxlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkU3R5bGVzaGVldHMucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBleHRlcm5hbCBzdHlsZXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgLy8gQ29udmVydCBhbmQgY29tcHJlc3MgdGhlIGxvZ28gaW1hZ2UgaWYgYSBwYXRoIGlzIHByb3ZpZGVkXHJcbiAgICAgICAgLyogaWYgKHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLmxvZ29QYXRoICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vQ29udmVydCBhbmQgY29tcHJlc3MgdGhlIGxvZ28gaW1hZ2UgdG8gYmFzZTY0XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydEFuZENvbXByZXNzSW1hZ2UodGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMubG9nb1BhdGgsIDE0MCwgNTAsIDAuNykudGhlbigoY29tcHJlc3NlZExvZ28pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nb0Jhc2U2NCA9IGNvbXByZXNzZWRMb2dvO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICovXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5mb250UGF0aCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBMb2FkIEZvbnRzXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb250cyh0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5mb250UGF0aClcclxuICAgICAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbnRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZm9udHM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250cyA9IFtdOyAvLyBGYWxsYmFjayB0byBlbXB0eSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgZm9udCBsb2FkaW5nOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9udHMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBFbWl0IGRlc3Ryb3kgc2lnbmFsIHRvIGNvbXBsZXRlIGFsbCBzdWJzY3JpcHRpb25zXHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAvLyBDbGVhbiB1cCBkeW5hbWljYWxseSBsb2FkZWQgc3R5bGVzaGVldHNcclxuICAgICAgICB0aGlzLmxvYWRlZFN0eWxlc2hlZXRzLmZvckVhY2goc3R5bGVzaGVldCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZXNoZWV0LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoc3R5bGVzaGVldC5wYXJlbnROb2RlLCBzdHlsZXNoZWV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZGVkU3R5bGVzaGVldHMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZVBkZlN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUGRmU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRGb250cyhmb250UGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Rm9udERlZmluaXRpb25bXT4oZm9udFBhdGgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGxvYWRGb250cyBtZXRob2Q6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjsgLy8gUmUtdGhyb3cgdG8gYmUgaGFuZGxlZCBieSB0aGUgc3Vic2NyaWJlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb24oYWN0aW9uVHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc3QgZmlsZU5hbWUgPSB0aGlzLmdldEZpbGVOYW1lKCk7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3Q7XHJcblxyXG4gICAgICAgIGlmICghc2hhZG93Um9vdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RlbXBsYXRlIHJlZmVyZW5jZSBpcyBub3QgYXZhaWxhYmxlIGZvciBQREYgZ2VuZXJhdGlvbi4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFkdmFuY2VkU2VhcmNoYWJsZVBERihzaGFkb3dSb290LCB0aGlzLnBkZkZpbGVOYW1lLCBhY3Rpb25UeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBERkRvY3VtZW50KCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgZG9jID0gbmV3IGpzUERGKHtcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdwb3J0cmFpdCcsXHJcbiAgICAgICAgICAgIHVuaXQ6ICdtbScsXHJcbiAgICAgICAgICAgIGZvcm1hdDogJ2E0JyxcclxuICAgICAgICAgICAgcHV0T25seVVzZWRGb250czogZmFsc2UsXHJcbiAgICAgICAgICAgIGZsb2F0UHJlY2lzaW9uOiAxNixcclxuICAgICAgICAgICAgY29tcHJlc3M6IHRydWVcclxuICAgICAgICB9KTsgICAgICAgIFxyXG5cclxuICAgICAgICAvLyBkb2Muc2V0UHJvcGVydGllcyh7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnSW52b2ljZScsXHJcbiAgICAgICAgLy8gICAgIGF1dGhvcjogJ1lvdXIgQ29tcGFueSBOYW1lJyxcclxuICAgICAgICAvLyAgICAgc3ViamVjdDogJ0ludm9pY2UgRG9jdW1lbnQnLFxyXG4gICAgICAgIC8vICAgICBrZXl3b3JkczogJ2ludm9pY2UsIHBkZiwganNQREYnXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRm9udHNGb3JQREYoZG9jKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVQREZBY3Rpb24oZG9jOiBhbnksIGFjdGlvblR5cGU6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHByaW50VXBsb2FkID0gdGhpcy5ldmVudEFkZGl0aW9uYWxQYXJhbXNbJ0NFRV9QUklOVF9VUExPQUQnXSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5pbmNsdWRlcygnLnBkZicpID8gZmlsZU5hbWUgOiBgJHtmaWxlTmFtZX0ucGRmYDtcclxuICAgIC8vICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgIHRoaXMub3Blbkh0bWxQcmV2aWV3KCk7XHJcbiAgICAvLyAgICAgICAgY29uc3QgYmxvYjEgPSBkb2Mub3V0cHV0KCdibG9iJyk7XHJcbiAgICAvLyAgICAgICAgY29uc3QgdXJsMSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYjEpO1xyXG4gICAgLy8gICAgICAgIHdpbmRvdy5vcGVuKHVybDEsICdfYmxhbmsnKTtcclxuICAgIC8vICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybDEpO1xyXG4gICAgICAgICAgIFxyXG4gICAgLy8gICAgfSwgMzAwKTtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgZG9jLnNhdmUoZmlsZU5hbWUsIHsgcmV0dXJuUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJpbnRVcGxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VjY2VzcywgZmFpbHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ldmVudC5pbnZva2VfZXZlbnRfY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmV2ZW50Lmludm9rZV9ldmVudF9jb25maWcuY2FsbGJhY2tfY29uZmlnLk9uU3VjY2VzcyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudC5pbnZva2VfZXZlbnRfY29uZmlnLmNhbGxiYWNrX2NvbmZpZy5vblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlID0gdGhpcy5ldmVudC5pbnZva2VfZXZlbnRfY29uZmlnLmNhbGxiYWNrX2NvbmZpZy5vbkZhaWx1cmUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuaW52b2tlX2V2ZW50X2NvbmZpZy5jYWxsYmFja19jb25maWcub25FeGNlcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2JPYmogPSBkb2Mub3V0cHV0KCdibG9iJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgKGJsb2JPYmogYXMgYW55KS5uYW1lID0gYCR7ZmlsZU5hbWV9YDsgLy8gc2V0IGlsZW5hbWUgaW4gYmxvYlxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2VsZi5wcmludFVwbG9hZChibG9iT2JqLGAke2ZpbGVOYW1lfWAsIHN1Y2Nlc3MsIGZhaWx1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvYjogYmxvYk9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IGAke2ZpbGVOYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlcy5wcmludFVwbG9hZFVzaW5nU2hhZG93RG9tLmVtaXQocmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1BERiBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyBzd2l0Y2ggKGFjdGlvblR5cGUpIHtcclxuICAgICAgICAvLyAgICAgY2FzZSAnZG93bmxvYWQnOlxyXG4gICAgICAgIC8vICAgICAgICAgZG9jLnNhdmUoZmlsZU5hbWUsIHsgcmV0dXJuUHJvbWlzZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnUERGIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlICdwcmludCc6XHJcbiAgICAgICAgLy8gICAgICAgICBkb2MuYXV0b1ByaW50KCk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBibG9iID0gZG9jLm91dHB1dCgnYmxvYicpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICAgIC8vICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgJ3ByZXZpZXcnOlxyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYmxvYjEgPSBkb2Mub3V0cHV0KCdibG9iJyk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCB1cmwxID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iMSk7XHJcbiAgICAgICAgLy8gICAgICAgICB3aW5kb3cub3Blbih1cmwxLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgLy8gICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLndhcm4oJ1Vua25vd24gYWN0aW9uIHR5cGU6JywgYWN0aW9uVHlwZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRGb250c0ZvclBERihkb2M6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udHMuZm9yRWFjaChmb250ID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLmFkZEZpbGVUb1ZGUyhmb250Lm5hbWUsIGZvbnQuYmFzZTY0KTtcclxuICAgICAgICAgICAgICAgICAgICBkb2MuYWRkRm9udChmb250Lm5hbWUsIGZvbnQuZmFtaWx5LCBmb250LnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250KGZvbnQuZmFtaWx5LCBmb250LnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZm9udEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgYWRkaW5nIGZvbnQgJHtmb250Lm5hbWV9OmAsIGZvbnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCBvdGhlciBmb250cyBldmVuIGlmIG9uZSBmYWlsc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGZvbnRzIGZvciBQREY6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAvLyBQREYgZ2VuZXJhdGlvbiBjYW4gY29udGludWUgd2l0aG91dCBjdXN0b20gZm9udHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZSBjb250ZW50IGZvciBQREYgYnkgY29weWluZyBmb3JtIHZhbHVlcyB0byB2aXNpYmxlIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJlcGFyZUNvbnRlbnRGb3JQREYoc2hhZG93Um9vdDogU2hhZG93Um9vdCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRlbXBDb250YWluZXIuaW5uZXJIVE1MID0gc2hhZG93Um9vdC5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgYWxsIGZvcm0gZWxlbWVudHMgaW4gdGhlIGNsb25lZCBjb250ZW50XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzRm9ybUVsZW1lbnRzKHRlbXBDb250YWluZXIsIHNoYWRvd1Jvb3QpO1xyXG5cclxuICAgICAgICAvLyBBcHBseSBhcHAtdmlldy1yZW5kZXJlciBwYWdlIGJyZWFrIGxvZ2ljXHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVBcHBWaWV3UmVuZGVyZXJQYWdlQnJlYWtzKHRlbXBDb250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGdsb2JhbCBzdHlsZSByZWZlcmVuY2VzIGZyb20gdGhlIGNsb25lZCBjb250ZW50XHJcbiAgICAgICAgLy90aGlzLmNsZWFuQ2xvbmVkQ29udGVudCh0ZW1wQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmNsZWFuRGF0ZVBpY2tlckVsZW1lbnRzKHRlbXBDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGVtcENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBwYWdlIGJyZWFrcyBmb3IgYXBwLXZpZXctcmVuZGVyZXIgZWxlbWVudHMgdG8gcHJldmVudCBjb250ZW50IGN1dHRpbmdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVBcHBWaWV3UmVuZGVyZXJQYWdlQnJlYWtzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhcHBWaWV3UmVuZGVyZXJzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FwcC12aWV3LXJlbmRlcmVyJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYXBwVmlld1JlbmRlcmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdObyBhcHAtdmlldy1yZW5kZXJlciBlbGVtZW50cyBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUHJvY2Vzc2luZyAke2FwcFZpZXdSZW5kZXJlcnMubGVuZ3RofSBhcHAtdmlldy1yZW5kZXJlciBlbGVtZW50cyBmb3IgcGFnZSBicmVha3NgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEE0IHBhZ2UgZGltZW5zaW9ucyBhdCA5NiBEUEkgKHN0YW5kYXJkIHdlYiByZXNvbHV0aW9uKVxyXG4gICAgICAgICAgICBjb25zdCBwYWdlSGVpZ2h0UHggPSAxMTIyOyAvLyBBNCBoZWlnaHQgaW4gcGl4ZWxzIGF0IDk2IERQSVxyXG4gICAgICAgICAgICBjb25zdCBtYXJnaW5Ub3AgPSA2MDsgLy8gVG9wIG1hcmdpbiBpbiBwaXhlbHNcclxuICAgICAgICAgICAgY29uc3QgbWFyZ2luQm90dG9tID0gNDA7IC8vIEJvdHRvbSBtYXJnaW4gaW4gcGl4ZWxzXHJcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVBhZ2VIZWlnaHQgPSBwYWdlSGVpZ2h0UHggLSBtYXJnaW5Ub3AgLSBtYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY3VycmVudFkgPSAwO1xyXG4gICAgICAgICAgICBsZXQgcGFnZU51bWJlciA9IDE7XHJcblxyXG4gICAgICAgICAgICBhcHBWaWV3UmVuZGVyZXJzLmZvckVhY2goKHJlbmRlcmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZXJFbGVtZW50ID0gcmVuZGVyZXIgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZXN0aW1hdGVkIGhlaWdodCBvZiB0aGUgYXBwLXZpZXctcmVuZGVyZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVySGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZUVsZW1lbnRIZWlnaHQocmVuZGVyZXJFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEFwcC12aWV3LXJlbmRlcmVyICR7aW5kZXggKyAxfTogSGVpZ2h0PSR7cmVuZGVyZXJIZWlnaHR9cHgsIEN1cnJlbnRZPSR7Y3VycmVudFl9cHhgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHJlbmRlcmVyIHdvdWxkIGV4Y2VlZCB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFkgKyByZW5kZXJlckhlaWdodCA+IGF2YWlsYWJsZVBhZ2VIZWlnaHQgJiYgY3VycmVudFkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEFwcC12aWV3LXJlbmRlcmVyICR7aW5kZXggKyAxfSB3b3VsZCBleGNlZWQgcGFnZSAke3BhZ2VOdW1iZXJ9LCBmb3JjaW5nIHBhZ2UgYnJlYWtgKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3JjZSBhIHBhZ2UgYnJlYWsgYmVmb3JlIHRoaXMgcmVuZGVyZXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlUGFnZUJyZWFrQmVmb3JlKHJlbmRlcmVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgcG9zaXRpb24gZm9yIG5ldyBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFkgPSByZW5kZXJlckhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsZW1lbnQgZml0cyBvbiBjdXJyZW50IHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WSArPSByZW5kZXJlckhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBlbmhhbmNlZCBwYWdlIGJyZWFrIHN0eWxlcyB0byBlbnN1cmUgY29udGVudCBzdGF5cyB0b2dldGhlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVBhZ2VCcmVha1N0eWxlcyhyZW5kZXJlckVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQcm9jZXNzZWQgYXBwLXZpZXctcmVuZGVyZXIgZWxlbWVudHMgYWNyb3NzICR7cGFnZU51bWJlcn0gcGFnZXNgKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgYXBwLXZpZXctcmVuZGVyZXIgcGFnZSBicmVha3M6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVzdGltYXRlIHRoZSBoZWlnaHQgb2YgYW4gZWxlbWVudCBpbmNsdWRpbmcgYWxsIGl0cyBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGVzdGltYXRlRWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IGNsb25lIHRvIG1lYXN1cmVcclxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFwcGx5IHN0eWxlcyB0aGF0IHdpbGwgaGVscCB3aXRoIG1lYXN1cmVtZW50XHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUubGVmdCA9ICctOTk5OXB4JztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgICAgICBjbG9uZS5zdHlsZS53aWR0aCA9ICc4MDBweCc7IC8vIFN0YW5kYXJkIFBERiBjb250ZW50IHdpZHRoXHJcbiAgICAgICAgICAgIGNsb25lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgY2xvbmUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgdG8gZG9jdW1lbnQgYm9keSBmb3IgbWVhc3VyZW1lbnRcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGhlaWdodFxyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBjbG9uZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDbGVhbiB1cFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNhZmV0eSAoMjAlIGJ1ZmZlcilcclxuICAgICAgICAgICAgY29uc3QgZXN0aW1hdGVkSGVpZ2h0ID0gTWF0aC5jZWlsKGhlaWdodCAqIDEuMik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBNaW5pbXVtIGhlaWdodCB0byBlbnN1cmUgcGFnZSBicmVhayBsb2dpYyB3b3Jrc1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoZXN0aW1hdGVkSGVpZ2h0LCAxMDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBlc3RpbWF0ZSBlbGVtZW50IGhlaWdodCwgdXNpbmcgZGVmYXVsdDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiAxNTA7IC8vIERlZmF1bHQgZmFsbGJhY2sgaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9yY2UgYSBwYWdlIGJyZWFrIGJlZm9yZSBhbiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZm9yY2VQYWdlQnJlYWtCZWZvcmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBDcmVhdGUgYSBwYWdlIGJyZWFrIGRpdlxyXG4gICAgICAgIGNvbnN0IHBhZ2VCcmVha0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBhZ2VCcmVha0Rpdi5jbGFzc05hbWUgPSAncGRmLXBhZ2UtYnJlYWstYmVmb3JlJztcclxuICAgICAgICBwYWdlQnJlYWtEaXYuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5cyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBicmVhay1iZWZvcmU6IHBhZ2UgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IHRoZSBwYWdlIGJyZWFrIGRpdiBiZWZvcmUgdGhlIGVsZW1lbnRcclxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGFnZUJyZWFrRGl2LCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSBjb21wcmVoZW5zaXZlIHBhZ2UgYnJlYWsgc3R5bGVzIHRvIGFuIGFwcC12aWV3LXJlbmRlcmVyIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhcHBseVBhZ2VCcmVha1N0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEFwcGx5IHBhZ2UgYnJlYWsgc3R5bGVzIHRvIHRoZSBtYWluIGVsZW1lbnRcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gYFxyXG4gICAgICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYnJlYWstaW5zaWRlOiBhdm9pZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtd2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGU6IGF2b2lkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC1tb3otY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8vbWluLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIC8vIC5mb3JtLWZpZWxkLFxyXG4gICAgICAgIC8vIEFwcGx5IHBhZ2UgYnJlYWsgc3R5bGVzIHRvIGNoaWxkIGZvcm0gZWxlbWVudHNcclxuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCxcclxuICAgICAgICAgICAgLmZpZWxkLWNvbnRhaW5lcixcclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLFxyXG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQsXHJcbiAgICAgICAgICAgIC5tYXQtbWRjLWZvcm0tZmllbGQsXHJcbiAgICAgICAgICAgIC5yYWRpby1ncm91cCxcclxuICAgICAgICAgICAgLmNoZWNrYm94LWdyb3VwLFxyXG4gICAgICAgICAgICAuc2VsZWN0LWNvbnRhaW5lcixcclxuICAgICAgICAgICAgLnRleHRhcmVhLWNvbnRhaW5lcixcclxuICAgICAgICAgICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lclxyXG4gICAgICAgIGApO1xyXG5cclxuICAgICAgICBmb3JtRWxlbWVudHMuZm9yRWFjaChmb3JtRWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGZvcm1FbCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgZm9ybUVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBgXHJcbiAgICAgICAgICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC1tb3otY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGxhYmVscyB0byBzdGF5IHdpdGggdGhlaXIgaW5wdXRzXHJcbiAgICAgICAgLy8gY29uc3QgbGFiZWxzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCwgLmZvcm0tbGFiZWwsIC5maWVsZC1sYWJlbCcpO1xyXG4gICAgICAgIC8vIGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbGFiZWxFbGVtZW50ID0gbGFiZWwgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgLy8gICAgIGxhYmVsRWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGBcclxuICAgICAgICAvLyAgICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhay1hZnRlcjogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAvLyAgICAgICAgIC13ZWJraXQtY29sdW1uLWJyZWFrLWFmdGVyOiBhdm9pZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICAgICAgLW1vei1jb2x1bW4tYnJlYWstYWZ0ZXI6IGF2b2lkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gICAgIGA7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBuZXN0ZWQgYXBwLXZpZXctcmVuZGVyZXIgZWxlbWVudHNcclxuICAgICAgICAvLyBjb25zdCBuZXN0ZWRSZW5kZXJlcnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FwcC12aWV3LXJlbmRlcmVyJyk7XHJcbiAgICAgICAgLy8gbmVzdGVkUmVuZGVyZXJzLmZvckVhY2gobmVzdGVkID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbmVzdGVkRWxlbWVudCA9IG5lc3RlZCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAvLyAgICAgbmVzdGVkRWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGBcclxuICAgICAgICAvLyAgICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWstaW5zaWRlOiBhdm9pZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAvLyAgICAgYDtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIEJvb3RzdHJhcCBncmlkIGVsZW1lbnRzIHdpdGhpbiBhcHAtdmlldy1yZW5kZXJlclxyXG4gICAgICAgIC8vIGNvbnN0IGdyaWRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdywgLmNvbCwgLmNvbC1hdXRvLCBbY2xhc3MqPVwiY29sLVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGdyaWRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdywgLmNvbCwgLmNvbC0xMiwgY29sLW1kLTEyLCAuY29sLXNtLTEyLCAuY29sLWxnLTEyLCAuY29sLXhsLTEyLCAuY29sLXh4bC0xMicpO1xyXG4gICAgICAgIGdyaWRFbGVtZW50cy5mb3JFYWNoKGdyaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkRWxlbWVudCA9IGdyaWQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGdyaWRFbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhay1pbnNpZGU6IGF2b2lkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhbkRhdGVQaWNrZXJFbGVtZW50cyhjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIEFMTCBkYXRlIHBpY2tlciByZWxhdGVkIGVsZW1lbnRzXHJcbiAgICAgICAgY29uc3QgZGF0ZVBpY2tlckVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoYFxyXG4gICAgICAgIG1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcclxuICAgICAgICBtYXQtaWNvbixcclxuICAgICAgICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxyXG4gICAgICAgIC5tYXQtaWNvbixcclxuICAgICAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWljb24tc3VmZml4LFxyXG4gICAgICAgIGJ1dHRvblttYXQtaWNvbi1idXR0b25dLFxyXG4gICAgICAgIHN2ZyxcclxuICAgICAgICAubWRjLWljb24tYnV0dG9uLFxyXG4gICAgICAgIFttYXRkYXRlcGlja2VydG9nZ2xlXSxcclxuICAgICAgICAuc2hhZG93LWRhdGVJbnB1dFxyXG4gICAgYCk7XHJcblxyXG4gICAgICAgIGRhdGVQaWNrZXJFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYW4gY2xvbmVkIGNvbnRlbnQgb2YgZ2xvYmFsIHN0eWxlIHJlZmVyZW5jZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjbGVhbkNsb25lZENvbnRlbnQoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgc3R5bGUgYW5kIGxpbmsgZWxlbWVudHNcclxuICAgICAgICBjb25zdCBzdHlsZXNBbmRMaW5rcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZSwgbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XHJcbiAgICAgICAgc3R5bGVzQW5kTGlua3MuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wZGYtb25seScpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBzdHlsZSBhdHRyaWJ1dGVzIGFuZCBwcm9ibGVtYXRpYyBjbGFzc2VzIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgY29uc3QgYWxsRWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnKicpO1xyXG4gICAgICAgIGFsbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBpbmxpbmUgc3R5bGVzXHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIEFuZ3VsYXIgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRyLm5hbWUuaW5jbHVkZXMoJ19uZ2NvbnRlbnQnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIubmFtZS5pbmNsdWRlcygnX25naG9zdCcpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ25nLScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJvYmxlbWF0aWMgQ1NTIGNsYXNzZXNcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIGNsYXNzTGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Byb2JsZW1hdGljQ2xhc3MoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuaGFuY2UgY2xvbmVkIGRvY3VtZW50IGZvciBiZXR0ZXIgZm9ybSBlbGVtZW50IHJlbmRlcmluZyBhbmQgcmVtb3ZlIEFMTCBnbG9iYWwgc3R5bGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZW5oYW5jZUNsb25lZERvY3VtZW50KGNsb25lZERvYzogRG9jdW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGNsb25lZERvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1wZGYtb25seScsICd0cnVlJyk7XHJcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSB0aGlzLnBkZlN0eWxlcy5jb25jYXQoYFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvKiBIaWRlIEFMTCBNYXRlcmlhbCBEYXRlIFBpY2tlciBDb21wb25lbnRzICovXHJcbiAgICAgICAgICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtaWNvbi1zdWZmaXgsXHJcbiAgICAgICAgICAgIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXHJcbiAgICAgICAgICAgIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtZGVmYXVsdC1pY29uLFxyXG4gICAgICAgICAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggLm1hdC1tZGMtZm9ybS1maWVsZC1pY29uLXN1ZmZpeCxcclxuICAgICAgICAgICAgbWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxyXG4gICAgICAgICAgICBtYXQtZGF0ZXBpY2tlci10b2dnbGUgKixcclxuICAgICAgICAgICAgbWF0LWljb25bbWF0ZGF0ZXRpbWVwaWNrZXJ0b2dnbGVpY29uXSxcclxuICAgICAgICAgICAgbWF0LWljb25bbWF0ZGF0ZXRvZ2dsZWljb25dLFxyXG4gICAgICAgICAgICBtYXQtaWNvbixcclxuICAgICAgICAgICAgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0sXHJcbiAgICAgICAgICAgIC5tYXQtaWNvbixcclxuICAgICAgICAgICAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1kZWZhdWx0LWljb24sXHJcbiAgICAgICAgICAgIFttYXRkYXRlcGlja2VydG9nZ2xlXSxcclxuICAgICAgICAgICAgW21hdC1kYXRlcGlja2VyLXRvZ2dsZV0sXHJcbiAgICAgICAgICAgIC5tZGMtaWNvbi1idXR0b24sXHJcbiAgICAgICAgICAgIHN2Z1tkYXRhLW1hdC1pY29uLW5hbWVdLFxyXG4gICAgICAgICAgICAubWF0LW1kYy1pY29uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogSGlkZSBzaGFkb3cgZGF0ZSBpbnB1dCBlbGVtZW50cyAqL1xyXG4gICAgICAgICAgICAuc2hhZG93LWRhdGVJbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIE1hdGVyaWFsIGZvcm0gZmllbGQgYWRqdXN0bWVudHMgKi9cclxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQsXHJcbiAgICAgICAgICAgIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAgICAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWljb24tc3VmZml4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBSZW1vdmUgYW55IFNWRyBpY29ucyAqL1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBIaWRlIGFueSBidXR0b24gZWxlbWVudHMgd2l0aGluIGZvcm0gZmllbGRzICovXHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIGJ1dHRvbixcclxuICAgICAgICAgICAgLm1hdC1tZGMtZm9ybS1maWVsZCBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBTdHlsZSBmb3IgUERGIGNvbnZlcnRlZCBpbnB1dCBkaXZzICovXHJcbiAgICAgICAgICAgIC5wZGYtY29udmVydGVkLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDE1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogRW5zdXJlIGRhdGUgaW5wdXRzIGFyZSB2aXNpYmxlIGFuZCBwcm9wZXJseSBzdHlsZWQgKi9cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSxcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRpbWVcIl0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBBZGRpdGlvbmFsIHRhcmdldGluZyBmb3IgQW5ndWxhciBNYXRlcmlhbCBjb21wb25lbnRzICovXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgsXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1zdWZmaXggKixcclxuICAgICAgICAgICAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1jb250YWluZXIsXHJcbiAgICAgICAgICAgIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtY29udGFpbmVyICoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1gKVxyXG4gICAgICAgIGNsb25lZERvYy5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBBTEwgc3R5bGVzIGZyb20gdGhlIGNsb25lZCBkb2N1bWVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbW92ZUFsbFN0eWxlc0Zyb21Eb2N1bWVudChkb2M6IERvY3VtZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9jKVxyXG4gICAgICAgIC8vIFJlbW92ZSBzdHlsZSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgZGF0YS1wZGYtb25seSBhdHRyaWJ1dGVcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnc3R5bGU6bm90KFtkYXRhLXBkZi1vbmx5XSknKTtcclxuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiBzdHlsZS5yZW1vdmUoKSk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbGluayBlbGVtZW50cyB3aXRoIHN0eWxlc2hlZXRzIHRoYXQgZG9uJ3QgaGF2ZSBkYXRhLXBkZi1vbmx5IGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIGNvbnN0IGxpbmtzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXTpub3QoW2RhdGEtcGRmLW9ubHldKSwgbGlua1tyZWw9XCJwcmVsb2FkXCJdW2FzPVwic3R5bGVcIl06bm90KFtkYXRhLXBkZi1vbmx5XSknKTtcclxuICAgICAgICAvLyBsaW5rcy5mb3JFYWNoKGxpbmsgPT4gbGluay5yZW1vdmUoKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsaW5rcyB0byByZW1vdmVcIiwgbGlua3MpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBzdHlsZSBhdHRyaWJ1dGVzIGZyb20gQUxMIGVsZW1lbnRzXHJcbiAgICAgICAgLy8gY29uc3QgYWxsRWxlbWVudHMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnKicpO1xyXG4gICAgICAgIC8vIGFsbEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgLy8gICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8gUmVtb3ZlIEFuZ3VsYXIgYXR0cmlidXRlc1xyXG4gICAgICAgIC8vICAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChhdHRyLm5hbWUuaW5jbHVkZXMoJ19uZ2NvbnRlbnQnKSB8fFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGF0dHIubmFtZS5pbmNsdWRlcygnX25naG9zdCcpIHx8XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYXR0ci5uYW1lLnN0YXJ0c1dpdGgoJ25nLScpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyBSZW1vdmUgcHJvYmxlbWF0aWMgQ1NTIGNsYXNzZXNcclxuICAgICAgICAvLyAgICAgY29uc3QgY2xhc3NMaXN0ID0gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgLy8gICAgIGNsYXNzTGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5pc1Byb2JsZW1hdGljQ2xhc3MoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGFueSByZW1haW5pbmcgQ1NTIGltcG9ydHMgb3IgZXh0ZXJuYWwgcmVmZXJlbmNlc1xyXG4gICAgICAgIC8vIGNvbnN0IGhlYWQgPSBkb2MuaGVhZDtcclxuICAgICAgICAvLyBpZiAoaGVhZCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBtZXRhU3R5bGVzID0gaGVhZC5xdWVyeVNlbGVjdG9yQWxsKCdtZXRhLCBiYXNlJyk7XHJcbiAgICAgICAgLy8gICAgIG1ldGFTdHlsZXMuZm9yRWFjaChtZXRhID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGh0dHBFcXVpdiA9IG1ldGEuZ2V0QXR0cmlidXRlKCdodHRwLWVxdWl2Jyk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoaHR0cEVxdWl2ICYmIGh0dHBFcXVpdi50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC1zdHlsZS10eXBlJykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG1ldGEucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICogQ2hlY2sgaWYgYSBDU1MgY2xhc3MgaXMgcHJvYmxlbWF0aWMgZm9yIFBERiBnZW5lcmF0aW9uXHJcbiAqL1xyXG4gICAgcHJpdmF0ZSBpc1Byb2JsZW1hdGljQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBwcm9ibGVtYXRpY1ByZWZpeGVzID0gW1xyXG4gICAgICAgICAgICAnbWF0LScsICdtZC0nLCAnbWRjLScsICAgICAgICAgICAvLyBBbmd1bGFyIE1hdGVyaWFsXHJcbiAgICAgICAgICAgICdib290c3RyYXAtJywgJ2J0bi0nLCAnZm9ybS0nLCAgIC8vIEJvb3RzdHJhcFxyXG4gICAgICAgICAgICAnY29udGFpbmVyJywgJ3JvdycsICdjb2wtJywgICAgICAvLyBHcmlkIHN5c3RlbXNcclxuICAgICAgICAgICAgJ2QtJywgJ3AtJywgJ20tJywgJ3RleHQtJywgICAgICAgLy8gVXRpbGl0eSBjbGFzc2VzXHJcbiAgICAgICAgICAgICduZy0nLCAnY2RrLScsICAgICAgICAgICAgICAgICAgIC8vIEFuZ3VsYXIgQ0RLXHJcbiAgICAgICAgICAgICdmYS0nLCAnZmFzLScsICdmYXItJywgICAgICAgICAgIC8vIEZvbnQgQXdlc29tZVxyXG4gICAgICAgICAgICAndWktJywgJ2FudC0nLCAnZWwtJyAgICAgICAgICAgICAvLyBPdGhlciBVSSBmcmFtZXdvcmtzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2JsZW1hdGljUHJlZml4ZXMuc29tZShwcmVmaXggPT4gY2xhc3NOYW1lLnN0YXJ0c1dpdGgocHJlZml4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzIGZvcm0gZWxlbWVudHMgdG8gbWFrZSB0aGVpciB2YWx1ZXMgdmlzaWJsZSBpbiBQREZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzRm9ybUVsZW1lbnRzKGNsb25lZENvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG9yaWdpbmFsU2hhZG93Um9vdDogU2hhZG93Um9vdCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFByb2Nlc3MgaW5wdXQgZWxlbWVudHNcclxuICAgICAgICBjb25zdCBvcmlnaW5hbElucHV0cyA9IG9yaWdpbmFsU2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGNsb25lZElucHV0cyA9IGNsb25lZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBvcmlnaW5hbElucHV0cy5mb3JFYWNoKChvcmlnaW5hbElucHV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9uZWRJbnB1dCA9IGNsb25lZElucHV0c1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChjbG9uZWRJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzSW5wdXRFbGVtZW50KG9yaWdpbmFsSW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCwgY2xvbmVkSW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyB0ZXh0YXJlYSBlbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dGFyZWFzID0gb3JpZ2luYWxTaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgY29uc3QgY2xvbmVkVGV4dGFyZWFzID0gY2xvbmVkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgICAgIG9yaWdpbmFsVGV4dGFyZWFzLmZvckVhY2goKG9yaWdpbmFsVGV4dGFyZWEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFRleHRhcmVhID0gY2xvbmVkVGV4dGFyZWFzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGNsb25lZFRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NUZXh0YXJlYUVsZW1lbnQob3JpZ2luYWxUZXh0YXJlYSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50LCBjbG9uZWRUZXh0YXJlYSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIHNlbGVjdCBlbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2VsZWN0cyA9IG9yaWdpbmFsU2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgICAgICBjb25zdCBjbG9uZWRTZWxlY3RzID0gY2xvbmVkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBvcmlnaW5hbFNlbGVjdHMuZm9yRWFjaCgob3JpZ2luYWxTZWxlY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFNlbGVjdCA9IGNsb25lZFNlbGVjdHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoY2xvbmVkU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTZWxlY3RFbGVtZW50KG9yaWdpbmFsU2VsZWN0IGFzIEhUTUxTZWxlY3RFbGVtZW50LCBjbG9uZWRTZWxlY3QgYXMgSFRNTFNlbGVjdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzIGluZGl2aWR1YWwgaW5wdXQgZWxlbWVudHMgLSBSZXBsYWNlIHdpdGggZGl2IHdoaWxlIGtlZXBpbmcgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByb2Nlc3NJbnB1dEVsZW1lbnQob3JpZ2luYWxJbnB1dDogSFRNTElucHV0RWxlbWVudCwgY2xvbmVkSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSBvcmlnaW5hbElucHV0LnR5cGUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxyXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICBjYXNlICd0ZWwnOlxyXG4gICAgICAgICAgICBjYXNlICd1cmwnOlxyXG4gICAgICAgICAgICBjYXNlICdzZWFyY2gnOlxyXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBpbnB1dCB3aXRoIGRpdiB3aGlsZSBwcmVzZXJ2aW5nIGNsYXNzZXMgYW5kIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VJbnB1dFdpdGhEaXYoY2xvbmVkSW5wdXQsIG9yaWdpbmFsSW5wdXQudmFsdWUsIG9yaWdpbmFsSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcclxuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbElucHV0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoVmlzdWFsSW5kaWNhdG9yKGNsb25lZElucHV0LCB0cnVlLCBpbnB1dFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VXaXRoVmlzdWFsSW5kaWNhdG9yKGNsb25lZElucHV0LCBmYWxzZSwgaW5wdXRUeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgICAgY2FzZSAnZGF0ZXRpbWUtbG9jYWwnOlxyXG4gICAgICAgICAgICBjYXNlICd0aW1lJzpcclxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgZGF0ZSBpbnB1dHMgd2l0aCBkaXYgd2hpbGUgcHJlc2VydmluZyBjbGFzc2VzXHJcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZUlucHV0V2l0aERpdihjbG9uZWRJbnB1dCwgb3JpZ2luYWxJbnB1dC52YWx1ZSwgb3JpZ2luYWxJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZUlucHV0V2l0aERpdihjbG9uZWRJbnB1dCwgJycsIG9yaWdpbmFsSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdoaWRkZW4nOlxyXG4gICAgICAgICAgICAgICAgLy8gS2VlcCBoaWRkZW4gaW5wdXRzIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBhbGwgb3RoZXIgaW5wdXQgdHlwZXMgd2l0aCBkaXZcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZUlucHV0V2l0aERpdihjbG9uZWRJbnB1dCwgb3JpZ2luYWxJbnB1dC52YWx1ZSwgb3JpZ2luYWxJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzIHRleHRhcmVhIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJvY2Vzc1RleHRhcmVhRWxlbWVudChvcmlnaW5hbFRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50LCBjbG9uZWRUZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGNsb25lZFRleHRhcmVhLnRleHRDb250ZW50ID0gb3JpZ2luYWxUZXh0YXJlYS52YWx1ZTtcclxuICAgICAgICBjbG9uZWRUZXh0YXJlYS5zdHlsZS5jb2xvciA9ICcjMDAwJztcclxuICAgICAgICBjbG9uZWRUZXh0YXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZic7XHJcblxyXG4gICAgICAgIC8vIEFsdGVybmF0aXZlbHksIHJlcGxhY2Ugd2l0aCBhIGRpdiB0byBlbnN1cmUgdGV4dCBpcyB2aXNpYmxlXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGV4dGFyZWEudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aFRleHREaXYoY2xvbmVkVGV4dGFyZWEsIG9yaWdpbmFsVGV4dGFyZWEudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3Mgc2VsZWN0IGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJvY2Vzc1NlbGVjdEVsZW1lbnQob3JpZ2luYWxTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50LCBjbG9uZWRTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ29weSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICBBcnJheS5mcm9tKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMpLmZvckVhY2goKG9yaWdpbmFsT3B0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9uZWRPcHRpb24gPSBjbG9uZWRTZWxlY3Qub3B0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChjbG9uZWRPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNsb25lZE9wdGlvbi5zZWxlY3RlZCA9IG9yaWdpbmFsT3B0aW9uLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlcGxhY2Ugd2l0aCB2aXNpYmxlIHRleHRcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSBvcmlnaW5hbFNlbGVjdC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IEFycmF5LmZyb20ob3JpZ2luYWxTZWxlY3Quc2VsZWN0ZWRPcHRpb25zKS5tYXAob3B0aW9uID0+IG9wdGlvbi50ZXh0KS5qb2luKCcsICcpXHJcbiAgICAgICAgICAgIDogJyc7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZFRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlV2l0aFRleHRTcGFuKGNsb25lZFNlbGVjdCwgc2VsZWN0ZWRUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVwbGFjZVdpdGhWaXN1YWxJbmRpY2F0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGlzQ2hlY2tlZDogYm9vbGVhbiwgaW5wdXRUeXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcInBkZi1keW5hbWljLXZpc3VhbC1pbmRpY2F0b3JcIik7XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IGNvbW1vbiBzdHlsZXNcclxuICAgICAgICBPYmplY3QuYXNzaWduKHNwYW4uc3R5bGUsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTFweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzExcHgnLFxyXG4gICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzJiMmIyYmZmJyxcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc0cHgnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcycHgnLFxyXG4gICAgICAgICAgICBmbGV4U2hyaW5rOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICBzcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAvLyBzcGFuLnN0eWxlLm91dGxpbmUgPSAnMXB4IHNvbGlkICMwNTRkODUnO1xyXG4gICAgICAgICAgICBzcGFuLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzA1NGQ4NSc7XHJcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDc4ZDQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlPy5yZXBsYWNlQ2hpbGQoc3BhbiwgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlIGlucHV0IGVsZW1lbnQgd2l0aCBkaXYgd2hpbGUgcHJlc2VydmluZyBjbGFzc2VzIGFuZCBhdHRyaWJ1dGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVwbGFjZUlucHV0V2l0aERpdihpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsIHRleHQ6IHN0cmluZywgb3JpZ2luYWxJbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAvLyBDb3B5IGFsbCBjbGFzc2VzIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsSW5wdXQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBvcmlnaW5hbElucHV0LmNsYXNzTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvcHkgcmVsZXZhbnQgYXR0cmlidXRlcyAoZXhjbHVkaW5nIGZvcm0tc3BlY2lmaWMgb25lcylcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzVG9Db3B5ID0gWydpZCcsICdkYXRhLSonLCAnYXJpYS0qJywgJ3JvbGUnXTtcclxuICAgICAgICBBcnJheS5mcm9tKG9yaWdpbmFsSW5wdXQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNUb0NvcHkuc29tZShwYXR0ZXJuID0+XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuLmVuZHNXaXRoKCcqJykgPyBhdHRyLm5hbWUuc3RhcnRzV2l0aChwYXR0ZXJuLnNsaWNlKDAsIC0xKSkgOiBhdHRyLm5hbWUgPT09IHBhdHRlcm5cclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgdGV4dCBjb250ZW50XHJcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gdGV4dCA/IHRleHQgOiAnLS0nO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBjbGFzcyB0byBpZGVudGlmeSBQREYtY29udmVydGVkIGVsZW1lbnRzXHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3BkZi1jb252ZXJ0ZWQtaW5wdXQnKTtcclxuXHJcbiAgICAgICAgLy8gQXBwbHkgYmFzaWMgc3R5bGluZyB0byBtYWludGFpbiB2aXN1YWwgY29uc2lzdGVuY3lcclxuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3JpZ2luYWxJbnB1dCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkaXYuc3R5bGUsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogY29tcHV0ZWRTdHlsZS5wYWRkaW5nIHx8ICc4cHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgZm9udFNpemU6IGNvbXB1dGVkU3R5bGUuZm9udFNpemUgfHwgJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBjb21wdXRlZFN0eWxlLmZvbnRGYW1pbHkgfHwgJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBjb21wdXRlZFN0eWxlLmZvbnRXZWlnaHQgfHwgJ25vcm1hbCcsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIC8vIG1pbkhlaWdodDogY29tcHV0ZWRTdHlsZS5oZWlnaHQgfHwgJ2F1dG8nLFxyXG4gICAgICAgICAgICB3aWR0aDogY29tcHV0ZWRTdHlsZS53aWR0aCB8fCAnYXV0bycsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcwICFpbXBvcnRhbnQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIGlucHV0IGVsZW1lbnQgd2l0aCB0aGUgZGl2XHJcbiAgICAgICAgaWYgKGlucHV0RWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChkaXYsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZSBmb3JtIGVsZW1lbnQgd2l0aCB0ZXh0IHNwYW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXBsYWNlV2l0aFRleHRTcGFuKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcInBkZi1keW5hbWljLXNwYW5cIik7XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzcGFuLnN0eWxlLCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmZmZmZmZicsXHJcbiAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmZmZicsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb21wdXRlZFN0eWxlLmZvbnRTaXplLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBjb21wdXRlZFN0eWxlLmZvbnRGYW1pbHksXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogJzEwMHB4J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChzcGFuLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2UgdGV4dGFyZWEgd2l0aCBkaXZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXBsYWNlV2l0aFRleHREaXYoZWxlbWVudDogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuXHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwZGYtZHluYW1pYy10ZXh0LWRpdlwiKTtcclxuXHJcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gdGV4dCA/IHRleHQgOiAnLS0nO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKGRpdi5zdHlsZSwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjlmOWY5JyxcclxuICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgZm9udFNpemU6IGNvbXB1dGVkU3R5bGUuZm9udFNpemUsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGNvbXB1dGVkU3R5bGUuZm9udEZhbWlseSxcclxuICAgICAgICAgICAgLy8gbWluSGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCcsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXHJcbiAgICAgICAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjZmZmZmZmJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChkaXYsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgUERGIHdpdGggYWR2YW5jZWQgc2VhcmNoYWJsZSBoZWFkZXIgdXNpbmcgaGVhZGVyRWxlbWVudElkXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWR2YW5jZWRTZWFyY2hhYmxlUERGKHNoYWRvd1Jvb3Q6IGFueSwgZmlsZU5hbWU6IHN0cmluZywgYWN0aW9uVHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gR2V0IGhlYWRlciBhbmQgbWFpbiBjb250ZW50IGVsZW1lbnRzXHJcbiAgICAgICAgLy8gVXNlIENTUy5lc2NhcGUgZm9yIElEcyB0aGF0IHN0YXJ0IHdpdGggbnVtYmVycyBvciBjb250YWluIHNwZWNpYWwgY2hhcmFjdGVyc1xyXG4gICAgICAgIGNvbnN0IGVzY2FwZWRJZCA9IENTUy5lc2NhcGUodGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuaGVhZGVyRWxlbWVudElkKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXNjYXBlZElkfWApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gdGhpcy5wcmVwYXJlQ29udGVudEZvclBERihzaGFkb3dSb290KTtcclxuXHJcbiAgICAgICAgaWYgKCFoZWFkZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSGVhZGVyIGVsZW1lbnQgd2l0aCBJRCAnJHt0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5oZWFkZXJFbGVtZW50SWR9JyBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBZHZhbmNlZFBERihoZWFkZXJFbGVtZW50LCBtYWluQ29udGVudCwgZmlsZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgUERGIHdpdGggYWR2YW5jZWQgc2VhcmNoYWJsZSBoZWFkZXIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGdlbmVyYXRlQWR2YW5jZWRQREYoaGVhZGVyRWxlbWVudDogSFRNTEVsZW1lbnQsIG1haW5Db250ZW50OiBIVE1MRWxlbWVudCwgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuY3JlYXRlUERGRG9jdW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgcGFnZVdpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpblRvcCA9IDQ1O1xyXG4gICAgICAgICAgICBjb25zdCBtYXJnaW5Cb3R0b20gPSAyMDtcclxuICAgICAgICAgICAgY29uc3QgbWFyZ2luTGVmdCA9IDE1O1xyXG4gICAgICAgICAgICBjb25zdCBtYXJnaW5SaWdodCA9IDEwO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJMaW5lR2FwID0gMzsgLy8gR2FwIGJldHdlZW4gaGVhZGVyIExpbmUgYW5kIGhlYWRlciBhbmQgY29udGVudFxyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBhZHZhbmNlZCBoZWFkZXIgY29udGVudFxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gdGhpcy5leHRyYWN0QWR2YW5jZWRIZWFkZXJDb250ZW50KGhlYWRlckVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyBoZWFkZXIgaW1hZ2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEltYWdlcyA9IGF3YWl0IHRoaXMucHJvY2Vzc0hlYWRlckltYWdlcyhoZWFkZXJDb250ZW50LmltYWdlcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBGdW5jdGlvbiB0byBhZGQgYWR2YW5jZWQgc2VhcmNoYWJsZSBoZWFkZXIgdG8gZWFjaCBwYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IGFkZEFkdmFuY2VkU2VhcmNoYWJsZUhlYWRlciA9IChwYWdlTnVtOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSGVhZGVyIGJhY2tncm91bmRcclxuICAgICAgICAgICAgICAgIGRvYy5zZXRGaWxsQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBkb2MucmVjdCgwLCAwLCBwYWdlV2lkdGgsIDMwLCAnRicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhlYWRlciBib3JkZXJcclxuICAgICAgICAgICAgICAgIGRvYy5zZXRMaW5lV2lkdGgoMC41KTtcclxuICAgICAgICAgICAgICAgIGRvYy5zZXREcmF3Q29sb3IoMjI1LCAyMjgsIDIyOCk7XHJcbiAgICAgICAgICAgICAgICBkb2MubGluZSgwLCAobWFyZ2luVG9wIC0gaGVhZGVyTGluZUdhcCksIHBhZ2VXaWR0aCwgKG1hcmdpblRvcCAtIGhlYWRlckxpbmVHYXApKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgaW1hZ2VzIG9uIHRoZSBsZWZ0IHNpZGVcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZVhQb3NpdGlvbiA9IG1hcmdpbkxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VZUG9zaXRpb24gPSA4O1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkSW1hZ2VzLmZvckVhY2goKGltZzogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltZy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hZGRJbWFnZShpbWcuZGF0YSwgJ1BORycsIGltYWdlWFBvc2l0aW9uIC0gNSwgaW1hZ2VZUG9zaXRpb24sIDM1LCAxNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlWFBvc2l0aW9uICs9IDQwOyAvLyBTcGFjZSBiZXR3ZWVuIGltYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGludmlzaWJsZSBzZWFyY2hhYmxlIGFsdCB0ZXh0IGZvciBhY2Nlc3NpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltZy5hbHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTaXplKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2V0VGV4dENvbG9yKDI1NSwgMjU1LCAyNTUpOyAvLyBXaGl0ZSB0ZXh0IChpbnZpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy50ZXh0KGltZy5hbHQsIGltYWdlWFBvc2l0aW9uIC0gMzUsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2V0VGV4dENvbG9yKDAsIDAsIDApOyAvLyBSZXNldCB0byBibGFja1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0ZXh0IHN0YXJ0aW5nIHBvc2l0aW9uIChhZnRlciBpbWFnZXMpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0U3RhcnRYID0gaW1hZ2VYUG9zaXRpb24gKyAxMDsgLy8gMTBtbSBzcGFjZSBhZnRlciBsYXN0IGltYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhUZXh0V2lkdGggPSBwYWdlV2lkdGggLSB0ZXh0U3RhcnRYIC0gbWFyZ2luUmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHNlYXJjaGFibGUgdGV4dCBlbGVtZW50cyBvbiB0aGUgcmlnaHQgc2lkZSAocmlnaHQtYWxpZ25lZClcclxuICAgICAgICAgICAgICAgIGxldCB5UG9zaXRpb24gPSAxMFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyQ29udGVudC50ZXh0RWxlbWVudHMuZm9yRWFjaCgodGV4dEVsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IGluZGV4ID09PSAwID8gMTIgOiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb250V2VpZ2h0ID0gaW5kZXggPT09IDAgPyAnYm9sZCcgOiAnbm9ybWFsJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTaXplKGZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udCgnUXVpY2tzYW5kJywgZm9udFdlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLnNldFRleHRDb2xvcigwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGxvbmcgdGV4dCBieSB3cmFwcGluZyB3aXRoIGF2YWlsYWJsZSB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gZG9jLnNwbGl0VGV4dFRvU2l6ZSh0ZXh0RWwudGV4dCwgbWF4VGV4dFdpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGluZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGxpbmU6IHN0cmluZywgbGluZUluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJpZ2h0IGFsaWduIHRoZSB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MudGV4dChsaW5lLCBwYWdlV2lkdGggLSBtYXJnaW5SaWdodCwgeVBvc2l0aW9uICsgKGxpbmVJbmRleCAqIChmb250U2l6ZSA9PT0gMTIgPyA4IDogNikpLCB7IGFsaWduOiAncmlnaHQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uICs9IGxpbmVzLmxlbmd0aCAqIChmb250U2l6ZSA9PT0gMTIgPyA4IDogNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmlnaHQgYWxpZ24gdGhlIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnRleHQobGluZXMsIHBhZ2VXaWR0aCAtIG1hcmdpblJpZ2h0LCB5UG9zaXRpb24sIHsgYWxpZ246ICdyaWdodCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbiArPSBmb250U2l6ZSA9PT0gMTIgPyA4IDogNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgaW5pdGlhbCBoZWFkZXJcclxuICAgICAgICAgICAgYWRkQWR2YW5jZWRTZWFyY2hhYmxlSGVhZGVyKDEsIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgUERGIHdpdGggbWFpbiBjb250ZW50XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGRmV2lkdGhNbSA9IDIxMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsUHggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFyZ2luUHggPSA1O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNhYmxlUHggPSB0b3RhbFB4IC0gbWFyZ2luUHggKiAyOyAvLyA5ODBweFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVGYWN0b3I6IGFueSA9IChwZGZXaWR0aE1tIC8gdXNhYmxlUHggLSAwLjAxKS50b0ZpeGVkKDIpIHx8IDAuMjE7IC8vIOKJiCAwLjIxNDNcclxuXHJcbiAgICAgICAgICAgICAgICBkb2MuaHRtbChtYWluQ29udGVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHg6IG1hcmdpbkxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogbWFyZ2luVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwYWdlV2lkdGggLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IDgwMCwgKi9cclxuICAgICAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1BhZ2luZzogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFyZ2luOiBbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFttYXJnaW5Ub3AsIG1hcmdpblB4LCBtYXJnaW5Cb3R0b20sIG1hcmdpblB4XSxcclxuICAgICAgICAgICAgICAgICAgICBodG1sMmNhbnZhczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NjYWxlOiAwLjIxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogc2NhbGVGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNPUlM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VGFpbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ1JJVElDQUw6IElnbm9yZSBBTEwgZXh0ZXJuYWwgc3R5bGVzaGVldHMgYW5kIGdsb2JhbCBzdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogaWdub3JlRWxlbWVudHM6IChlbGVtZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBBTEwgc3R5bGUgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdTVFlMRScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGRmLW9ubHknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgQUxMIGxpbmsgZWxlbWVudHMgd2l0aCBzdHlsZXNoZWV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0xJTksnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ3N0eWxlc2hlZXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wZGYtb25seScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBlbGVtZW50cyB3aXRoIGdsb2JhbCBmcmFtZXdvcmsgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNHbG9iYWxDbGFzc2VzID0gY2xhc3NMaXN0LnNvbWUoY2xhc3NOYW1lID0+IHRoaXMuaXNQcm9ibGVtYXRpY0NsYXNzKGNsYXNzTmFtZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYXNHbG9iYWxDbGFzc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNsb25lOiAoY2xvbmVkRG9jOiBEb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXN0b21WaWV3cG9ydChjbG9uZWREb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2xvbmVkRG9jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsU3R5bGVzRnJvbURvY3VtZW50KGNsb25lZERvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuaGFuY2VDbG9uZWREb2N1bWVudChjbG9uZWREb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHBkZjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBwZGYuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGhlYWRlcnMgdG8gYWxsIHBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRmLnNldFBhZ2UoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRBZHZhbmNlZFNlYXJjaGFibGVIZWFkZXIoaSwgdG90YWxQYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBQREYgbWV0YWRhdGEgZm9yIHNlYXJjaGFiaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGRmLnNldFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGAke2ZpbGVOYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdJbmFkZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogYCR7ZmlsZU5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiBgJHtmaWxlTmFtZX0sIHBkZmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiAnSW5hZGV2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQREZBY3Rpb24ocGRmLCAnZG93bmxvYWQnLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBhZHZhbmNlZCBzZWFyY2hhYmxlIFBERjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q3VzdG9tVmlld3BvcnQoZG9jOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IGRvYy5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpO1xyXG4gICAgICAgIGlmICh2aWV3cG9ydCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgY3VzdG9tIHZpZXdwb3J0IGZvciBQREYgZ2VuZXJhdGlvblxyXG4gICAgICAgICAgICB2aWV3cG9ydC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnd2lkdGg9MTAwMCwgaW5pdGlhbC1zY2FsZT0xLjAsIHNocmluay10by1maXQ9bm8sIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vLCBtaW5pbXVtLXNjYWxlPTEuMCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdmlld3BvcnQgbWV0YSB0YWcgaWYgbm9uZSBleGlzdHNcclxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGRvYy5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XHJcbiAgICAgICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0Jyk7XHJcbiAgICAgICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3dpZHRoPTEwMDAsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0PW5vLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubywgbWluaW11bS1zY2FsZT0xLjAnKTtcclxuICAgICAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobWV0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCBhZHZhbmNlZCBjb250ZW50IGZyb20gaGVhZGVyIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBleHRyYWN0QWR2YW5jZWRIZWFkZXJDb250ZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYW55IHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0ge1xyXG4gICAgICAgICAgICB0ZXh0RWxlbWVudHM6IFtdLFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCB0ZXh0IG5vZGVzIHdpdGggdGhlaXIgc3R5bGluZyBjb250ZXh0IHVzaW5nIFRyZWVXYWxrZXJcclxuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxyXG4gICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBub2RlOiBOb2RlIHwgbnVsbDtcclxuICAgICAgICB3aGlsZSAobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHRDb250ZW50Py50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoY29udGVudC50ZXh0RWxlbWVudHMgYXMgYW55W10pLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRTdHlsZS5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGNvbXB1dGVkU3R5bGUuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGNvbXB1dGVkU3R5bGUuZm9udFdlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IGltYWdlcyB3aXRoIHRoZWlyIG1ldGFkYXRhXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcclxuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW1nLnNyYykge1xyXG4gICAgICAgICAgICAgICAgKGNvbnRlbnQuaW1hZ2VzIGFzIGFueVtdKS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGltZy5zcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBpbWcuYWx0IHx8ICdIZWFkZXIgSW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWcud2lkdGggfHwgaW1nLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodCB8fCBpbWcub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgaGVhZGVyIGltYWdlcyBmb3IgUERGIGluY2x1c2lvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHByb2Nlc3NIZWFkZXJJbWFnZXMoaW1hZ2VzOiBhbnlbXSk6IFByb21pc2U8YW55W10+IHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWQ6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaW1nSW5mbyBvZiBpbWFnZXMpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFVcmwgPSBhd2FpdCB0aGlzLmNvbnZlcnRBbmRDb21wcmVzc0ltYWdlKGltZ0luZm8uc3JjLCAxNDAsIDUwLCAwLjkpO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBpbWdJbmZvLmFsdCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW1nSW5mby53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGltZ0luZm8uaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IHByb2Nlc3MgaGVhZGVyIGltYWdlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciBmb3IgZmFpbGVkIGltYWdlc1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBpbWdJbmZvLmFsdCB8fCAnSW1hZ2Ugbm90IGF2YWlsYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltZ0luZm8ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWdJbmZvLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9jZXNzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydEFuZENvbXByZXNzSW1hZ2UodXJsOiBzdHJpbmcsIG1heFdpZHRoID0gODAwLCBtYXhIZWlnaHQgPSA4MDAsIHF1YWxpdHkgPSAwLjcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnQW5vbnltb3VzJztcclxuXHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY29tcHJlc3NlZERhdGFVcmwgfSA9IHRoaXMucHJvY2Vzc0ltYWdlQ29tcHJlc3Npb24oaW1nLCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBxdWFsaXR5LCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tcHJlc3NlZERhdGFVcmwpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoZXJyKSA9PiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHVybDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NJbWFnZUNvbXByZXNzaW9uKFxyXG4gICAgICAgIGltZzogSFRNTEltYWdlRWxlbWVudCxcclxuICAgICAgICBtYXhXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgIG1heEhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHF1YWxpdHk6IG51bWJlcixcclxuICAgICAgICB1cmw6IHN0cmluZ1xyXG4gICAgKTogeyBjb21wcmVzc2VkRGF0YVVybDogc3RyaW5nIH0ge1xyXG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltZztcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBzaXplIHdoaWxlIHByZXNlcnZpbmcgYXNwZWN0IHJhdGlvXHJcbiAgICAgICAgaWYgKHdpZHRoID4gbWF4V2lkdGggfHwgaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gTWF0aC5taW4obWF4V2lkdGggLyB3aWR0aCwgbWF4SGVpZ2h0IC8gaGVpZ2h0KTtcclxuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCAqIHJhdGlvO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgKiByYXRpbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuXHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRm9ybWF0ID0gdGhpcy5nZXRJbWFnZUZvcm1hdCh1cmwpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxGb3JtYXQgPT09ICdwbmcnIHx8IHRoaXMuaGFzVHJhbnNwYXJlbmN5KGNhbnZhcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY29tcHJlc3NlZERhdGFVcmw6IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzV2l0aEJhY2tncm91bmQoY2FudmFzLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY29tcHJlc3NlZERhdGFVcmw6IHRlbXBDYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJywgcXVhbGl0eSkgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDYW52YXMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ2FudmFzV2l0aEJhY2tncm91bmQoc291cmNlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgdGVtcENhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBDdHggPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJykhO1xyXG5cclxuICAgICAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcclxuICAgICAgICB0ZW1wQ3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRlbXBDdHguZHJhd0ltYWdlKHNvdXJjZUNhbnZhcywgMCwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW1hZ2VGb3JtYXQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHVybC5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiBleHRlbnNpb24gfHwgJ3BuZyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYXNUcmFuc3BhcmVuY3koY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGlmICghY3R4KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBwaXhlbCBoYXMgYWxwaGEgY2hhbm5lbCBsZXNzIHRoYW4gMjU1ICh0cmFuc3BhcmVudClcclxuICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPCAyNTUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogU3R5bGVzIHJlbGF0ZWQgaGVscGVyIGZ1bmN0aW9ucyAqL1xyXG4gICAgcHJpdmF0ZSByZW1vdmVTdHlsZVRhZ3MoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3Q7XHJcbiAgICAgICAgaWYgKCFzaGFkb3dSb290KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgPHN0eWxlPiB0YWdzIGZyb20gcHJvamVjdGVkIGNvbnRlbnQgRVhDRVBUIGludGVudGlvbmFsbHkgbG9hZGVkIG9uZXNcclxuICAgICAgICBjb25zdCBzdHlsZVRhZ3MgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGVUYWdzLmZvckVhY2goc3R5bGVUYWcgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN0eWxlVGFnLmhhc0F0dHJpYnV0ZSgnZGF0YS1wZGYtb25seScpKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYWxsIDxsaW5rPiB0YWdzIHdpdGggc3R5bGVzaGVldHMgRVhDRVBUIGludGVudGlvbmFsbHkgbG9hZGVkIG9uZXNcclxuICAgICAgICBjb25zdCBsaW5rVGFncyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XHJcbiAgICAgICAgbGlua1RhZ3MuZm9yRWFjaChsaW5rVGFnID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsaW5rVGFnLmhhc0F0dHJpYnV0ZSgnZGF0YS1wZGYtb25seScpKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rVGFnLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFsc28gY2hlY2sgc3BlY2lmaWNhbGx5IGluIHRoZSBoZWFkIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBoZWFkRWxlbWVudCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaGVhZCcpO1xyXG4gICAgICAgIGlmIChoZWFkRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkU3R5bGVzID0gaGVhZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGU6bm90KFtkYXRhLXBkZi1vbmx5XSknKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZExpbmtzID0gaGVhZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdOm5vdChbZGF0YS1wZGYtb25seV0pJyk7XHJcblxyXG4gICAgICAgICAgICBoZWFkU3R5bGVzLmZvckVhY2goc3R5bGUgPT4gc3R5bGUucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICBoZWFkTGlua3MuZm9yRWFjaChsaW5rID0+IGxpbmsucmVtb3ZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNb25pdG9yIHN0eWxlIGNoYW5nZXMgd2l0aGluIHRoZSBzaGFkb3cgRE9NXHJcbiAgICBwcml2YXRlIHNldHVwU3R5bGVNb25pdG9yaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zaGFkb3dSb290O1xyXG4gICAgICAgIGlmICghc2hhZG93Um9vdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZSBhcyBFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVtb3ZlIHN0eWxlL2xpbmsgdGFncyB0aGF0IGFyZSBOT1QgaW50ZW50aW9uYWxseSBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdTVFlMRScgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXBkZi1vbmx5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdMSU5LJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ3N0eWxlc2hlZXQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXBkZi1vbmx5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBuZXN0ZWQgc3R5bGUgdGFncyAoZXhjbHVkaW5nIGludGVudGlvbmFsbHkgbG9hZGVkIG9uZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRTdHlsZXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlOm5vdChbZGF0YS1wZGYtb25seV0pLCBsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl06bm90KFtkYXRhLXBkZi1vbmx5XSknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHN0eWxlLnJlbW92ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoc2hhZG93Um9vdCwge1xyXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIGFuIGV4dGVybmFsIHN0eWxlc2hlZXQgaW50byB0aGUgc2hhZG93IERPTVxyXG4gICAgcHJpdmF0ZSBsb2FkRXh0ZXJuYWxTdHlsZXNoZWV0KGNzc1BhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY3NzUGF0aCB8fCB0aGlzLmlzU3R5bGVzaGVldEFscmVhZHlMb2FkZWQoY3NzUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3Q7XHJcbiAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2hhZG93IERPTSBub3QgYXZhaWxhYmxlIGZvciBsb2FkaW5nIHN0eWxlc2hlZXQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgaGVhZCBlbGVtZW50IGluc2lkZSB0aGUgc2hhZG93IERPTVxyXG4gICAgICAgIGxldCBoZWFkRWxlbWVudCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaGVhZCcpO1xyXG5cclxuICAgICAgICAvLyBJZiBoZWFkIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdFxyXG4gICAgICAgIGlmICghaGVhZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaGVhZEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2hlYWQnKTtcclxuICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcclxuICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShodG1sRWxlbWVudCwgaGVhZEVsZW1lbnQsIGh0bWxFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gaHRtbCBlbGVtZW50LCBhcHBlbmQgdG8gc2hhZG93IHJvb3RcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2hhZG93Um9vdCwgaGVhZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobGluaywgJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobGluaywgJ3R5cGUnLCAndGV4dC9jc3MnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShsaW5rLCAnaHJlZicsIGNzc1BhdGgpO1xyXG4gICAgICAgIC8vIElNUE9SVEFOVDogTWFyayBhcyBpbnRlbnRpb25hbGx5IGxvYWRlZCB0byBwcmV2ZW50IHJlbW92YWxcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShsaW5rLCAnZGF0YS1wZGYtb25seScsICd0cnVlJyk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZCB0byB0aGUgaGVhZCBlbGVtZW50IGluc3RlYWQgb2Ygc2hhZG93IHJvb3RcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGhlYWRFbGVtZW50LCBsaW5rKTtcclxuICAgICAgICB0aGlzLmxvYWRlZFN0eWxlc2hlZXRzLnB1c2gobGluayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1N0eWxlc2hlZXRBbHJlYWR5TG9hZGVkKGNzc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zaGFkb3dSb290O1xyXG4gICAgICAgIGlmICghc2hhZG93Um9vdCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aXRoaW4gc2hhZG93IERPTSdzIGhlYWQgdGFnXHJcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcclxuICAgICAgICBpZiAoIWhlYWRFbGVtZW50KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW2hyZWY9XCIke2Nzc1BhdGh9XCJdYCkgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhbkdsb2JhbFN0eWxlUmVmZXJlbmNlcyhjb250YWluZXI6IFNoYWRvd1Jvb3QpOiB2b2lkIHtcclxuICAgICAgICAvLyBSZW1vdmUgYW55IGVsZW1lbnRzIHRoYXQgbWlnaHQgYmUgcHVsbGluZyBpbiBleHRlcm5hbCBzdHlsZXNcclxuICAgICAgICBjb25zdCBlbGVtZW50c1dpdGhTdHlsZVJlZnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW3N0eWxlXSwgW2NsYXNzKj1cIm1hdC1cIl0sIFtjbGFzcyo9XCJib290c3RyYXAtXCJdLCBbY2xhc3MqPVwiYnRuLVwiXScpO1xyXG4gICAgICAgIGVsZW1lbnRzV2l0aFN0eWxlUmVmcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJvYmxlbWF0aWMgY2xhc3Nlc1xyXG4gICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2xhc3NMaXN0KTtcclxuICAgICAgICAgICAgY2xhc3NMaXN0LmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aCgnbWF0LScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnN0YXJ0c1dpdGgoJ2Jvb3RzdHJhcC0nKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZS5zdGFydHNXaXRoKCdidG4tJykgfHxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUuc3RhcnRzV2l0aCgnZm9ybS0nKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZS5zdGFydHNXaXRoKCdjb250YWluZXInKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZS5zdGFydHNXaXRoKCdyb3cnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZS5zdGFydHNXaXRoKCdjb2wtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIEhUTUwgcHJldmlldyBpbiBhIG5ldyB0YWIgYmVmb3JlIFBERiBnZW5lcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3Blbkh0bWxQcmV2aWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zaGFkb3dSb290O1xyXG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignU2hhZG93IERPTSBub3QgYXZhaWxhYmxlIGZvciBIVE1MIHByZXZpZXcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgY29udGVudCBmb3IgcHJldmlldyAoc2FtZSBhcyBQREYgcHJlcGFyYXRpb24pXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdDb250ZW50ID0gdGhpcy5wcmVwYXJlQ29udGVudEZvclBERihzaGFkb3dSb290KTtcclxuIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBjb21wbGV0ZSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxEb2N1bWVudCA9IHRoaXMuY3JlYXRlUHJldmlld0h0bWxEb2N1bWVudChwcmV2aWV3Q29udGVudCk7XHJcbiBcclxuICAgICAgICAgICAgLy8gT3BlbiBpbiBuZXcgdGFiXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIGlmIChuZXdXaW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIG5ld1dpbmRvdy5kb2N1bWVudC53cml0ZShodG1sRG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbmV3V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XHJcbiBcclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsOiBTZXQgd2luZG93IHRpdGxlXHJcbiAgICAgICAgICAgICAgICBuZXdXaW5kb3cuZG9jdW1lbnQudGl0bGUgPSB0aGlzLnBkZkZpbGVOYW1lLnJlcGxhY2UoJy5wZGYnLCAnJykgKyAnIC0gUHJldmlldyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBvcGVuIHByZXZpZXcgd2luZG93LiBQbGVhc2UgY2hlY2sgcG9wdXAgYmxvY2tlciBzZXR0aW5ncy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9wZW5pbmcgSFRNTCBwcmV2aWV3OicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29tcGxldGUgSFRNTCBkb2N1bWVudCBmb3IgcHJldmlld1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVByZXZpZXdIdG1sRG9jdW1lbnQoY29udGVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIEdldCBoZWFkZXIgY29udGVudCBpZiBhdmFpbGFibGVcclxuICAgICAgICBsZXQgaGVhZGVySHRtbCA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5oZWFkZXJFbGVtZW50SWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZXNjYXBlZElkID0gQ1NTLmVzY2FwZSh0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5oZWFkZXJFbGVtZW50SWQpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXNjYXBlZElkfWApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVySHRtbCA9IHRoaXMuY3JlYXRlSGVhZGVyUHJldmlld0h0bWwoaGVhZGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICAvLyBDcmVhdGUgY29tcGxldGUgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgIGNvbnN0IGh0bWxEb2N1bWVudCA9IGBcclxuICAgICAgICAgICAgPCFET0NUWVBFIGh0bWw+XHJcbiAgICAgICAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTEwMDAsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0PW5vLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubywgbWluaW11bS1zY2FsZT0xLjBcIiBzdHlsZT1cInRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+JHt0aGlzLnBkZkZpbGVOYW1lLnJlcGxhY2UoJy5wZGYnLCAnJyl9IC0gUHJldmlldzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnBkZlN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjEwbW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2hlYWRlckh0bWwgPyBgPGRpdiBjbGFzcz1cImhlYWRlci1zZWN0aW9uXCI+JHtoZWFkZXJIdG1sfTwvZGl2PmAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Y29udGVudC5pbm5lckhUTUx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L2h0bWw+XHJcbiAgICAgICAgYDtcclxuIFxyXG4gICAgICAgIHJldHVybiBodG1sRG9jdW1lbnQ7XHJcbiAgICB9XHJcbiBcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGhlYWRlciBIVE1MIGZvciBwcmV2aWV3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlSGVhZGVyUHJldmlld0h0bWwoaGVhZGVyRWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIENsb25lIHRoZSBoZWFkZXIgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGNsb25lZEhlYWRlciA9IGhlYWRlckVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gXHJcbiAgICAgICAgLy8gUHJvY2VzcyBhbnkgZm9ybSBlbGVtZW50cyBpbiB0aGUgaGVhZGVyXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzRm9ybUVsZW1lbnRzKGNsb25lZEhlYWRlciwgaGVhZGVyRWxlbWVudC5nZXRSb290Tm9kZSgpIGFzIFNoYWRvd1Jvb3QpO1xyXG4gXHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGhlYWRlciBjb250ZW50XHJcbiAgICAgICAgdGhpcy5jbGVhbkRhdGVQaWNrZXJFbGVtZW50cyhjbG9uZWRIZWFkZXIpO1xyXG4gXHJcbiAgICAgICAgcmV0dXJuIGNsb25lZEhlYWRlci5pbm5lckhUTUw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIjxkaXYgY2xhc3M9XCJjb250ZW50LXByb2plY3Rpb24tY29udGFpbmVyIGNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidmlld3BvcnQtd3JhcHBlciB7e2NvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucz8ud3JhcHBlckNsYXNzfX1cIj5cclxuICAgICAgICA8IS0tIE1haW4gY29udGVudCBwcm9qZWN0aW9uIChkZWZhdWx0IHNsb3QpIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLW1haW5cIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==