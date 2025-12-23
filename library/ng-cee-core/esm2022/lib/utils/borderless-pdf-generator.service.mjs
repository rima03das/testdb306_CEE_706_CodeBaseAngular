import { Injectable, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-form-processor.service";
export class BorderlessPDFGeneratorService {
    pdfFormProcessor;
    constructor(pdfFormProcessor) {
        this.pdfFormProcessor = pdfFormProcessor;
    }
    /**
     * Generate PDF without form element borders
     */
    async generateBorderlessPDF(element, options = {}) {
        const targetElement = element instanceof ElementRef ? element.nativeElement : element;
        if (!targetElement) {
            throw new Error('Target element not found for PDF generation');
        }
        // Process element to remove form borders
        const processedElement = this.pdfFormProcessor.processContentForPDF(targetElement);
        // Create PDF with optimized config
        const pdfConfig = {
            ...this.pdfFormProcessor.getOptimizedJsPDFConfig(),
            ...options.pdfConfig
        };
        const pdf = new jsPDF(pdfConfig);
        // Set document properties
        if (options.title || options.author || options.subject) {
            pdf.setProperties({
                title: options.title || 'Document',
                author: options.author || 'Generated PDF',
                subject: options.subject || 'PDF Document',
                keywords: options.keywords || 'pdf, borderless, jsPDF'
            });
        }
        // Temporarily append to body for processing
        document.body.appendChild(processedElement);
        processedElement.style.position = 'absolute';
        processedElement.style.left = '-9999px';
        processedElement.style.backgroundColor = '#fff';
        processedElement.style.padding = options.padding || '20px';
        processedElement.style.width = options.width || '210mm';
        try {
            await new Promise((resolve, reject) => {
                pdf.html(processedElement, {
                    ...pdfConfig,
                    windowWidth: options.windowWidth || 1024,
                    width: options.contentWidth || 180,
                    autoPaging: 'text',
                    pageBreak: {
                        mode: ['css', 'avoid-all', 'legacy'],
                        avoid: ['.avoid-page-break', '.pdf-input-replacement', '.pdf-checkbox-replacement']
                    },
                    callback: (doc) => {
                        try {
                            // Add header and footer if provided
                            if (options.header || options.footer) {
                                this.addHeaderFooter(doc, options.header, options.footer);
                            }
                            // Handle different actions
                            this.handlePDFAction(doc, options.action || 'download', options.fileName || 'document.pdf');
                            resolve();
                        }
                        catch (error) {
                            reject(error);
                        }
                    },
                    x: options.x || 15,
                    y: options.y || 15,
                    margin: options.margin || [15, 15, 15, 15]
                });
            });
        }
        finally {
            // Clean up
            if (document.body.contains(processedElement)) {
                document.body.removeChild(processedElement);
            }
        }
    }
    /**
     * Generate PDF from multiple elements without borders
     */
    async generateMultiElementPDF(elements, options = {}) {
        if (!elements || elements.length === 0) {
            throw new Error('No elements provided for PDF generation');
        }
        // Create a container for all elements
        const container = document.createElement('div');
        container.style.width = '100%';
        container.style.backgroundColor = '#fff';
        // Process each element and add to container
        for (const element of elements) {
            const targetElement = element instanceof ElementRef ? element.nativeElement : element;
            if (targetElement) {
                const processedElement = this.pdfFormProcessor.processContentForPDF(targetElement);
                container.appendChild(processedElement);
                // Add page break between elements if specified
                if (options.pageBreakBetweenElements) {
                    const pageBreak = document.createElement('div');
                    pageBreak.style.pageBreakAfter = 'always';
                    pageBreak.style.height = '1px';
                    container.appendChild(pageBreak);
                }
            }
        }
        // Generate PDF from the container
        await this.generateBorderlessPDF(container, options);
    }
    /**
     * Quick method to generate PDF without any borders - simplified API
     */
    async quickBorderlessPDF(element, fileName = 'document.pdf', action = 'download') {
        await this.generateBorderlessPDF(element, {
            fileName,
            action,
            title: fileName.replace('.pdf', ''),
            padding: '15px',
            margin: [10, 10, 10, 10]
        });
    }
    /**
     * Add header and footer to PDF
     */
    addHeaderFooter(doc, header, footer) {
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            // Add header
            if (header) {
                doc.setFontSize(header.fontSize || 10);
                doc.setTextColor(header.color || 100);
                if (header.text) {
                    doc.text(header.text, header.x || (doc.internal.pageSize.getWidth() / 2), header.y || 15, {
                        align: header.align || 'center'
                    });
                }
                if (header.line) {
                    doc.line(10, header.lineY || 20, doc.internal.pageSize.getWidth() - 10, header.lineY || 20);
                }
            }
            // Add footer
            if (footer) {
                doc.setFontSize(footer.fontSize || 8);
                doc.setTextColor(footer.color || 100);
                if (footer.line) {
                    doc.line(10, doc.internal.pageSize.getHeight() - 20, doc.internal.pageSize.getWidth() - 10, doc.internal.pageSize.getHeight() - 20);
                }
                if (footer.pageNumbers) {
                    doc.text(`Page ${i} of ${totalPages}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
                }
                if (footer.text) {
                    doc.text(footer.text, footer.x || 15, footer.y || (doc.internal.pageSize.getHeight() - 10), {
                        align: footer.align || 'left'
                    });
                }
                if (footer.date) {
                    doc.text(`Generated: ${new Date().toLocaleDateString()}`, doc.internal.pageSize.getWidth() - 15, doc.internal.pageSize.getHeight() - 10, { align: 'right' });
                }
            }
        }
    }
    /**
     * Handle different PDF actions
     */
    handlePDFAction(doc, action, fileName) {
        switch (action) {
            case 'download':
                doc.save(fileName);
                break;
            case 'print':
                doc.autoPrint();
                const printBlob = doc.output('blob');
                const printUrl = URL.createObjectURL(printBlob);
                window.open(printUrl, '_blank');
                setTimeout(() => URL.revokeObjectURL(printUrl), 1000);
                break;
            case 'preview':
                const previewBlob = doc.output('blob');
                const previewUrl = URL.createObjectURL(previewBlob);
                window.open(previewUrl, '_blank');
                setTimeout(() => URL.revokeObjectURL(previewUrl), 1000);
                break;
            default:
                console.warn('Unknown PDF action:', action);
                doc.save(fileName);
        }
    }
    static ɵfac = function BorderlessPDFGeneratorService_Factory(t) { return new (t || BorderlessPDFGeneratorService)(i0.ɵɵinject(i1.PDFFormProcessor)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BorderlessPDFGeneratorService, factory: BorderlessPDFGeneratorService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BorderlessPDFGeneratorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.PDFFormProcessor }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVybGVzcy1wZGYtZ2VuZXJhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvdXRpbHMvYm9yZGVybGVzcy1wZGYtZ2VuZXJhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sQ0FBQzs7O0FBTTlCLE1BQU0sT0FBTyw2QkFBNkI7SUFFcEI7SUFBcEIsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTFEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLHFCQUFxQixDQUN6QixPQUFpQyxFQUNqQyxVQUFnQyxFQUFFO1FBRWxDLE1BQU0sYUFBYSxHQUFHLE9BQU8sWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUV0RixJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtRQUVELHlDQUF5QztRQUN6QyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuRixtQ0FBbUM7UUFDbkMsTUFBTSxTQUFTLEdBQUc7WUFDaEIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUU7WUFDbEQsR0FBRyxPQUFPLENBQUMsU0FBUztTQUNyQixDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7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LENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdEQsTUFBTTtZQUVSLEtBQUssU0FBUztnQkFDWixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDbEMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELE1BQU07WUFFUjtnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzt1RkF2T1UsNkJBQTZCO2dFQUE3Qiw2QkFBNkIsV0FBN0IsNkJBQTZCLG1CQUY1QixNQUFNOztpRkFFUCw2QkFBNkI7Y0FIekMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBqc1BERiB9IGZyb20gJ2pzcGRmJztcclxuaW1wb3J0IHsgUERGRm9ybVByb2Nlc3NvciB9IGZyb20gJy4vcGRmLWZvcm0tcHJvY2Vzc29yLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9yZGVybGVzc1BERkdlbmVyYXRvclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBkZkZvcm1Qcm9jZXNzb3I6IFBERkZvcm1Qcm9jZXNzb3IpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIFBERiB3aXRob3V0IGZvcm0gZWxlbWVudCBib3JkZXJzXHJcbiAgICovXHJcbiAgYXN5bmMgZ2VuZXJhdGVCb3JkZXJsZXNzUERGKFxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmLFxyXG4gICAgb3B0aW9uczogQm9yZGVybGVzc1BERk9wdGlvbnMgPSB7fVxyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudC5uYXRpdmVFbGVtZW50IDogZWxlbWVudDtcclxuICAgIFxyXG4gICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFyZ2V0IGVsZW1lbnQgbm90IGZvdW5kIGZvciBQREYgZ2VuZXJhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc3MgZWxlbWVudCB0byByZW1vdmUgZm9ybSBib3JkZXJzXHJcbiAgICBjb25zdCBwcm9jZXNzZWRFbGVtZW50ID0gdGhpcy5wZGZGb3JtUHJvY2Vzc29yLnByb2Nlc3NDb250ZW50Rm9yUERGKHRhcmdldEVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgUERGIHdpdGggb3B0aW1pemVkIGNvbmZpZ1xyXG4gICAgY29uc3QgcGRmQ29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnBkZkZvcm1Qcm9jZXNzb3IuZ2V0T3B0aW1pemVkSnNQREZDb25maWcoKSxcclxuICAgICAgLi4ub3B0aW9ucy5wZGZDb25maWdcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHBkZiA9IG5ldyBqc1BERihwZGZDb25maWcpO1xyXG5cclxuICAgIC8vIFNldCBkb2N1bWVudCBwcm9wZXJ0aWVzXHJcbiAgICBpZiAob3B0aW9ucy50aXRsZSB8fCBvcHRpb25zLmF1dGhvciB8fCBvcHRpb25zLnN1YmplY3QpIHtcclxuICAgICAgcGRmLnNldFByb3BlcnRpZXMoe1xyXG4gICAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlIHx8ICdEb2N1bWVudCcsXHJcbiAgICAgICAgYXV0aG9yOiBvcHRpb25zLmF1dGhvciB8fCAnR2VuZXJhdGVkIFBERicsXHJcbiAgICAgICAgc3ViamVjdDogb3B0aW9ucy5zdWJqZWN0IHx8ICdQREYgRG9jdW1lbnQnLFxyXG4gICAgICAgIGtleXdvcmRzOiBvcHRpb25zLmtleXdvcmRzIHx8ICdwZGYsIGJvcmRlcmxlc3MsIGpzUERGJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZW1wb3JhcmlseSBhcHBlbmQgdG8gYm9keSBmb3IgcHJvY2Vzc2luZ1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9jZXNzZWRFbGVtZW50KTtcclxuICAgIHByb2Nlc3NlZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgcHJvY2Vzc2VkRWxlbWVudC5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xyXG4gICAgcHJvY2Vzc2VkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgICBwcm9jZXNzZWRFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgfHwgJzIwcHgnO1xyXG4gICAgcHJvY2Vzc2VkRWxlbWVudC5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgJzIxMG1tJztcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgcGRmLmh0bWwocHJvY2Vzc2VkRWxlbWVudCwge1xyXG4gICAgICAgICAgLi4ucGRmQ29uZmlnLFxyXG4gICAgICAgICAgd2luZG93V2lkdGg6IG9wdGlvbnMud2luZG93V2lkdGggfHwgMTAyNCxcclxuICAgICAgICAgIHdpZHRoOiBvcHRpb25zLmNvbnRlbnRXaWR0aCB8fCAxODAsXHJcbiAgICAgICAgICBhdXRvUGFnaW5nOiAndGV4dCcsXHJcbiAgICAgICAgICBwYWdlQnJlYWs6IHsgXHJcbiAgICAgICAgICAgIG1vZGU6IFsnY3NzJywgJ2F2b2lkLWFsbCcsICdsZWdhY3knXSxcclxuICAgICAgICAgICAgYXZvaWQ6IFsnLmF2b2lkLXBhZ2UtYnJlYWsnLCAnLnBkZi1pbnB1dC1yZXBsYWNlbWVudCcsICcucGRmLWNoZWNrYm94LXJlcGxhY2VtZW50J11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYWxsYmFjazogKGRvYzoganNQREYpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAvLyBBZGQgaGVhZGVyIGFuZCBmb290ZXIgaWYgcHJvdmlkZWRcclxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXIgfHwgb3B0aW9ucy5mb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGVhZGVyRm9vdGVyKGRvYywgb3B0aW9ucy5oZWFkZXIsIG9wdGlvbnMuZm9vdGVyKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBkaWZmZXJlbnQgYWN0aW9uc1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUERGQWN0aW9uKGRvYywgb3B0aW9ucy5hY3Rpb24gfHwgJ2Rvd25sb2FkJywgb3B0aW9ucy5maWxlTmFtZSB8fCAnZG9jdW1lbnQucGRmJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB4OiBvcHRpb25zLnggfHwgMTUsXHJcbiAgICAgICAgICB5OiBvcHRpb25zLnkgfHwgMTUsXHJcbiAgICAgICAgICBtYXJnaW46IG9wdGlvbnMubWFyZ2luIHx8IFsxNSwgMTUsIDE1LCAxNV1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAvLyBDbGVhbiB1cFxyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhwcm9jZXNzZWRFbGVtZW50KSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocHJvY2Vzc2VkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIFBERiBmcm9tIG11bHRpcGxlIGVsZW1lbnRzIHdpdGhvdXQgYm9yZGVyc1xyXG4gICAqL1xyXG4gIGFzeW5jIGdlbmVyYXRlTXVsdGlFbGVtZW50UERGKFxyXG4gICAgZWxlbWVudHM6IChIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYpW10sXHJcbiAgICBvcHRpb25zOiBCb3JkZXJsZXNzUERGT3B0aW9ucyA9IHt9XHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIWVsZW1lbnRzIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnRzIHByb3ZpZGVkIGZvciBQREYgZ2VuZXJhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgYWxsIGVsZW1lbnRzXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcblxyXG4gICAgLy8gUHJvY2VzcyBlYWNoIGVsZW1lbnQgYW5kIGFkZCB0byBjb250YWluZXJcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xyXG4gICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZEVsZW1lbnQgPSB0aGlzLnBkZkZvcm1Qcm9jZXNzb3IucHJvY2Vzc0NvbnRlbnRGb3JQREYodGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2Nlc3NlZEVsZW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFkZCBwYWdlIGJyZWFrIGJldHdlZW4gZWxlbWVudHMgaWYgc3BlY2lmaWVkXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucGFnZUJyZWFrQmV0d2VlbkVsZW1lbnRzKSB7XHJcbiAgICAgICAgICBjb25zdCBwYWdlQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIHBhZ2VCcmVhay5zdHlsZS5wYWdlQnJlYWtBZnRlciA9ICdhbHdheXMnO1xyXG4gICAgICAgICAgcGFnZUJyZWFrLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xyXG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VCcmVhayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgUERGIGZyb20gdGhlIGNvbnRhaW5lclxyXG4gICAgYXdhaXQgdGhpcy5nZW5lcmF0ZUJvcmRlcmxlc3NQREYoY29udGFpbmVyLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFF1aWNrIG1ldGhvZCB0byBnZW5lcmF0ZSBQREYgd2l0aG91dCBhbnkgYm9yZGVycyAtIHNpbXBsaWZpZWQgQVBJXHJcbiAgICovXHJcbiAgYXN5bmMgcXVpY2tCb3JkZXJsZXNzUERGKFxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmLFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyA9ICdkb2N1bWVudC5wZGYnLFxyXG4gICAgYWN0aW9uOiAnZG93bmxvYWQnIHwgJ3ByZXZpZXcnIHwgJ3ByaW50JyA9ICdkb3dubG9hZCdcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IHRoaXMuZ2VuZXJhdGVCb3JkZXJsZXNzUERGKGVsZW1lbnQsIHtcclxuICAgICAgZmlsZU5hbWUsXHJcbiAgICAgIGFjdGlvbixcclxuICAgICAgdGl0bGU6IGZpbGVOYW1lLnJlcGxhY2UoJy5wZGYnLCAnJyksXHJcbiAgICAgIHBhZGRpbmc6ICcxNXB4JyxcclxuICAgICAgbWFyZ2luOiBbMTAsIDEwLCAxMCwgMTBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBoZWFkZXIgYW5kIGZvb3RlciB0byBQREZcclxuICAgKi9cclxuICBwcml2YXRlIGFkZEhlYWRlckZvb3RlcihcclxuICAgIGRvYzoganNQREYsIFxyXG4gICAgaGVhZGVyPzogUERGSGVhZGVyRm9vdGVyQ29uZmlnLCBcclxuICAgIGZvb3Rlcj86IFBERkhlYWRlckZvb3RlckNvbmZpZ1xyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IChkb2MgYXMgYW55KS5pbnRlcm5hbC5nZXROdW1iZXJPZlBhZ2VzKCk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICBkb2Muc2V0UGFnZShpKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBoZWFkZXJcclxuICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShoZWFkZXIuZm9udFNpemUgfHwgMTApO1xyXG4gICAgICAgIGRvYy5zZXRUZXh0Q29sb3IoaGVhZGVyLmNvbG9yIHx8IDEwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGhlYWRlci50ZXh0KSB7XHJcbiAgICAgICAgICBkb2MudGV4dChoZWFkZXIudGV4dCwgaGVhZGVyLnggfHwgKChkb2MgYXMgYW55KS5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRXaWR0aCgpIC8gMiksIGhlYWRlci55IHx8IDE1LCB7IFxyXG4gICAgICAgICAgICBhbGlnbjogaGVhZGVyLmFsaWduIHx8ICdjZW50ZXInIFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChoZWFkZXIubGluZSkge1xyXG4gICAgICAgICAgZG9jLmxpbmUoMTAsIGhlYWRlci5saW5lWSB8fCAyMCwgKGRvYyBhcyBhbnkpLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAxMCwgaGVhZGVyLmxpbmVZIHx8IDIwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBmb290ZXJcclxuICAgICAgaWYgKGZvb3Rlcikge1xyXG4gICAgICAgIGRvYy5zZXRGb250U2l6ZShmb290ZXIuZm9udFNpemUgfHwgOCk7XHJcbiAgICAgICAgZG9jLnNldFRleHRDb2xvcihmb290ZXIuY29sb3IgfHwgMTAwKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZm9vdGVyLmxpbmUpIHtcclxuICAgICAgICAgIGRvYy5saW5lKDEwLCAoZG9jIGFzIGFueSkuaW50ZXJuYWwucGFnZVNpemUuZ2V0SGVpZ2h0KCkgLSAyMCwgKGRvYyBhcyBhbnkpLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAxMCwgKGRvYyBhcyBhbnkpLmludGVybmFsLnBhZ2VTaXplLmdldEhlaWdodCgpIC0gMjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoZm9vdGVyLnBhZ2VOdW1iZXJzKSB7XHJcbiAgICAgICAgICBkb2MudGV4dChcclxuICAgICAgICAgICAgYFBhZ2UgJHtpfSBvZiAke3RvdGFsUGFnZXN9YCwgXHJcbiAgICAgICAgICAgIChkb2MgYXMgYW55KS5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRXaWR0aCgpIC8gMiwgXHJcbiAgICAgICAgICAgIChkb2MgYXMgYW55KS5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRIZWlnaHQoKSAtIDEwLCBcclxuICAgICAgICAgICAgeyBhbGlnbjogJ2NlbnRlcicgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGZvb3Rlci50ZXh0KSB7XHJcbiAgICAgICAgICBkb2MudGV4dChmb290ZXIudGV4dCwgZm9vdGVyLnggfHwgMTUsIGZvb3Rlci55IHx8ICgoZG9jIGFzIGFueSkuaW50ZXJuYWwucGFnZVNpemUuZ2V0SGVpZ2h0KCkgLSAxMCksIHsgXHJcbiAgICAgICAgICAgIGFsaWduOiBmb290ZXIuYWxpZ24gfHwgJ2xlZnQnIFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChmb290ZXIuZGF0ZSkge1xyXG4gICAgICAgICAgZG9jLnRleHQoXHJcbiAgICAgICAgICAgIGBHZW5lcmF0ZWQ6ICR7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1gLCBcclxuICAgICAgICAgICAgKGRvYyBhcyBhbnkpLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAxNSwgXHJcbiAgICAgICAgICAgIChkb2MgYXMgYW55KS5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRIZWlnaHQoKSAtIDEwLCBcclxuICAgICAgICAgICAgeyBhbGlnbjogJ3JpZ2h0JyB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIGRpZmZlcmVudCBQREYgYWN0aW9uc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlUERGQWN0aW9uKGRvYzoganNQREYsIGFjdGlvbjogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICBjYXNlICdkb3dubG9hZCc6XHJcbiAgICAgICAgZG9jLnNhdmUoZmlsZU5hbWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICBjYXNlICdwcmludCc6XHJcbiAgICAgICAgZG9jLmF1dG9QcmludCgpO1xyXG4gICAgICAgIGNvbnN0IHByaW50QmxvYiA9IGRvYy5vdXRwdXQoJ2Jsb2InKTtcclxuICAgICAgICBjb25zdCBwcmludFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocHJpbnRCbG9iKTtcclxuICAgICAgICB3aW5kb3cub3BlbihwcmludFVybCwgJ19ibGFuaycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTChwcmludFVybCksIDEwMDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICBjYXNlICdwcmV2aWV3JzpcclxuICAgICAgICBjb25zdCBwcmV2aWV3QmxvYiA9IGRvYy5vdXRwdXQoJ2Jsb2InKTtcclxuICAgICAgICBjb25zdCBwcmV2aWV3VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChwcmV2aWV3QmxvYik7XHJcbiAgICAgICAgd2luZG93Lm9wZW4ocHJldmlld1VybCwgJ19ibGFuaycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTChwcmV2aWV3VXJsKSwgMTAwMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdVbmtub3duIFBERiBhY3Rpb246JywgYWN0aW9uKTtcclxuICAgICAgICBkb2Muc2F2ZShmaWxlTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbnRlcmZhY2VzIGZvciB0eXBlIHNhZmV0eVxyXG5leHBvcnQgaW50ZXJmYWNlIEJvcmRlcmxlc3NQREZPcHRpb25zIHtcclxuICBmaWxlTmFtZT86IHN0cmluZztcclxuICBhY3Rpb24/OiAnZG93bmxvYWQnIHwgJ3ByZXZpZXcnIHwgJ3ByaW50JztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBhdXRob3I/OiBzdHJpbmc7XHJcbiAgc3ViamVjdD86IHN0cmluZztcclxuICBrZXl3b3Jkcz86IHN0cmluZztcclxuICBwYWRkaW5nPzogc3RyaW5nO1xyXG4gIHdpZHRoPzogc3RyaW5nO1xyXG4gIGNvbnRlbnRXaWR0aD86IG51bWJlcjtcclxuICB3aW5kb3dXaWR0aD86IG51bWJlcjtcclxuICB4PzogbnVtYmVyO1xyXG4gIHk/OiBudW1iZXI7XHJcbiAgbWFyZ2luPzogbnVtYmVyW107XHJcbiAgaGVhZGVyPzogUERGSGVhZGVyRm9vdGVyQ29uZmlnO1xyXG4gIGZvb3Rlcj86IFBERkhlYWRlckZvb3RlckNvbmZpZztcclxuICBwYWdlQnJlYWtCZXR3ZWVuRWxlbWVudHM/OiBib29sZWFuO1xyXG4gIHBkZkNvbmZpZz86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQREZIZWFkZXJGb290ZXJDb25maWcge1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgeD86IG51bWJlcjtcclxuICB5PzogbnVtYmVyO1xyXG4gIGxpbmVZPzogbnVtYmVyO1xyXG4gIGZvbnRTaXplPzogbnVtYmVyO1xyXG4gIGNvbG9yPzogbnVtYmVyO1xyXG4gIGFsaWduPzogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xyXG4gIGxpbmU/OiBib29sZWFuO1xyXG4gIHBhZ2VOdW1iZXJzPzogYm9vbGVhbjtcclxuICBkYXRlPzogYm9vbGVhbjtcclxufVxyXG4iXX0=