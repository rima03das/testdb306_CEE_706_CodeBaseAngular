import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class WebworkerService {
    // tslint:disable-next-line
    workerFunctionToUrlMap = new WeakMap();
    promiseToWorkerMap = new WeakMap();
    /**
     * <p>Method that runs the given function with the given data.</p>
     * @param workerFunction function to run on the web worker context.
     * @param data data to pass to the web worker context. <b>IMPORTANT</b>:
     * the function must be self-contained, meaning that no external functions or
     * libraries can be passed through this parameter.
     */
    run(workerFunction, data) {
        const url = this.getOrCreateWorkerUrl(workerFunction);
        return this.runUrl(url, data);
    }
    /**
     * <p>Method that runs the given <i>ObjectURL</i> with the given data.</p>
     * @param url <i>ObjectURL</i> to run on the web worker context.
     * @param data data to pass to the web worker context. <b>IMPORTANT</b>:
     * the function must be self-contained, meaning that no external functions or
     * libraries can be passed through this parameter.
     */
    runUrl(url, data) {
        const worker = new Worker(url);
        const promise = this.createPromiseForWorker(worker, data);
        const promiseCleaner = this.createPromiseCleaner(promise);
        this.promiseToWorkerMap.set(promise, worker);
        promise.then(promiseCleaner).catch(promiseCleaner);
        return promise;
    }
    // tslint:disable
    /**
     * <p>Method that terminates the given <i>Promise</i> and removes it from the
     * internal service maps.</p>
     * @param promise promise to terminate.
     */
    terminate(promise) {
        return this.removePromise(promise);
    }
    /**
     * <p>Method that retrieves the <i>web worker</i> to which the given <i>Promise</i>
     * belongs to.
     * @param promise promise whose <i>web worker</i> we want to find.
     */
    getWorker(promise) {
        return this.promiseToWorkerMap.get(promise);
    }
    // tslint:enable
    /**
     * <p>Method that handles the promise creation for the given <i>web worker</i> with
     * the given input data.</p>
     * @param worker worker for which the promise will be created.
     * @param data data that will be passed into the worker object.
     */
    createPromiseForWorker(worker, data) {
        return new Promise((resolve, reject) => {
            worker.addEventListener('message', (event) => resolve(event.data));
            worker.addEventListener('error', reject);
            worker.postMessage(data);
        });
    }
    // tslint:disable
    /**
     * <p>Method that allocates a <i>web worker</i> <i>ObjectURL</i> for the given function.
     * It's used to create caches for the <i>(function, workerUrl)</i> pairs in order to avoid
     * creating the urls more than once.</p>
     * @param fn function whose worker we want to allocate.
     */
    getOrCreateWorkerUrl(fn) {
        if (!this.workerFunctionToUrlMap.has(fn)) {
            const url = this.createWorkerUrl(fn);
            this.workerFunctionToUrlMap.set(fn, url);
            return url;
        }
        return this.workerFunctionToUrlMap.get(fn);
    }
    /**
     * <p>Method that creates a <i>web worker</i> <i>ObjectURL</i> from the given
     * <i>Function</i> object.</p>
     * @param resolve function the <i>web worker</i> will run.
     */
    createWorkerUrl(resolve) {
        const resolveString = resolve.toString();
        // The template is basically an addEventListener attachment that creates a
        // closure (IIFE*) with the provided function and invokes it with the provided
        // data.
        // * IIFE stands for immediately Immediately-Invoked Function Expression
        // Removed the postMessage from this template in order to allow worker functions
        // to use asynchronous functions and resolve whenever they need to.
        const webWorkerTemplate = `
            self.addEventListener('message', function(e) {
                ((${resolveString})(e.data));
            });
        `;
        const blob = new Blob([webWorkerTemplate], { type: 'text/javascript' });
        return URL.createObjectURL(blob);
    }
    // tslint:enable
    /**
     * <p>Method that creates a function that removes the given promise from the
     * service context.</p>
     * @param promise promise the cleaner function will be created for.
     */
    createPromiseCleaner(promise) {
        return (event) => {
            this.removePromise(promise);
            return event;
        };
    }
    /**
     * <p>Method that removes the given promise from the service context.
     * It also terminates the associated worker in case it exists.</p>
     * @param promise promise to be removed from the service context.
     */
    removePromise(promise) {
        const worker = this.promiseToWorkerMap.get(promise);
        if (worker) {
            worker.terminate();
        }
        this.promiseToWorkerMap.delete(promise);
        return promise;
    }
    static ɵfac = function WebworkerService_Factory(t) { return new (t || WebworkerService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WebworkerService, factory: WebworkerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WebworkerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXdvcmtlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3NlcnZpY2VzL3dlYi13b3JrZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLDJCQUEyQjtJQUNuQixzQkFBc0IsR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztJQUN6RCxrQkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztJQUVqRTs7Ozs7O09BTUc7SUFDSSxHQUFHLENBQUksY0FBaUMsRUFBRSxJQUFVO1FBQ3pELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsR0FBVyxFQUFFLElBQVU7UUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbkQsT0FB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amVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV2Vid29ya2VyU2VydmljZSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgcHJpdmF0ZSB3b3JrZXJGdW5jdGlvblRvVXJsTWFwID0gbmV3IFdlYWtNYXA8RnVuY3Rpb24sIHN0cmluZz4oKTtcclxuICBwcml2YXRlIHByb21pc2VUb1dvcmtlck1hcCA9IG5ldyBXZWFrTWFwPFByb21pc2U8YW55PiwgV29ya2VyPigpO1xyXG5cclxuICAvKipcclxuICAgKiA8cD5NZXRob2QgdGhhdCBydW5zIHRoZSBnaXZlbiBmdW5jdGlvbiB3aXRoIHRoZSBnaXZlbiBkYXRhLjwvcD5cclxuICAgKiBAcGFyYW0gd29ya2VyRnVuY3Rpb24gZnVuY3Rpb24gdG8gcnVuIG9uIHRoZSB3ZWIgd29ya2VyIGNvbnRleHQuXHJcbiAgICogQHBhcmFtIGRhdGEgZGF0YSB0byBwYXNzIHRvIHRoZSB3ZWIgd29ya2VyIGNvbnRleHQuIDxiPklNUE9SVEFOVDwvYj46XHJcbiAgICogdGhlIGZ1bmN0aW9uIG11c3QgYmUgc2VsZi1jb250YWluZWQsIG1lYW5pbmcgdGhhdCBubyBleHRlcm5hbCBmdW5jdGlvbnMgb3JcclxuICAgKiBsaWJyYXJpZXMgY2FuIGJlIHBhc3NlZCB0aHJvdWdoIHRoaXMgcGFyYW1ldGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBydW48VD4od29ya2VyRnVuY3Rpb246IChpbnB1dDogYW55KSA9PiBULCBkYXRhPzogYW55KTogUHJvbWlzZTxUPiB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldE9yQ3JlYXRlV29ya2VyVXJsKHdvcmtlckZ1bmN0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLnJ1blVybCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogPHA+TWV0aG9kIHRoYXQgcnVucyB0aGUgZ2l2ZW4gPGk+T2JqZWN0VVJMPC9pPiB3aXRoIHRoZSBnaXZlbiBkYXRhLjwvcD5cclxuICAgKiBAcGFyYW0gdXJsIDxpPk9iamVjdFVSTDwvaT4gdG8gcnVuIG9uIHRoZSB3ZWIgd29ya2VyIGNvbnRleHQuXHJcbiAgICogQHBhcmFtIGRhdGEgZGF0YSB0byBwYXNzIHRvIHRoZSB3ZWIgd29ya2VyIGNvbnRleHQuIDxiPklNUE9SVEFOVDwvYj46XHJcbiAgICogdGhlIGZ1bmN0aW9uIG11c3QgYmUgc2VsZi1jb250YWluZWQsIG1lYW5pbmcgdGhhdCBubyBleHRlcm5hbCBmdW5jdGlvbnMgb3JcclxuICAgKiBsaWJyYXJpZXMgY2FuIGJlIHBhc3NlZCB0aHJvdWdoIHRoaXMgcGFyYW1ldGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBydW5VcmwodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcih1cmwpO1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuY3JlYXRlUHJvbWlzZUZvcldvcmtlcih3b3JrZXIsIGRhdGEpO1xyXG4gICAgY29uc3QgcHJvbWlzZUNsZWFuZXIgPSB0aGlzLmNyZWF0ZVByb21pc2VDbGVhbmVyKHByb21pc2UpO1xyXG5cclxuICAgIHRoaXMucHJvbWlzZVRvV29ya2VyTWFwLnNldChwcm9taXNlLCB3b3JrZXIpO1xyXG5cclxuICAgIHByb21pc2UudGhlbihwcm9taXNlQ2xlYW5lcikuY2F0Y2gocHJvbWlzZUNsZWFuZXIpO1xyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGVcclxuICAvKipcclxuICAgKiA8cD5NZXRob2QgdGhhdCB0ZXJtaW5hdGVzIHRoZSBnaXZlbiA8aT5Qcm9taXNlPC9pPiBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZVxyXG4gICAqIGludGVybmFsIHNlcnZpY2UgbWFwcy48L3A+XHJcbiAgICogQHBhcmFtIHByb21pc2UgcHJvbWlzZSB0byB0ZXJtaW5hdGUuXHJcbiAgICovXHJcbiAgcHVibGljIHRlcm1pbmF0ZTxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVQcm9taXNlKHByb21pc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogPHA+TWV0aG9kIHRoYXQgcmV0cmlldmVzIHRoZSA8aT53ZWIgd29ya2VyPC9pPiB0byB3aGljaCB0aGUgZ2l2ZW4gPGk+UHJvbWlzZTwvaT5cclxuICAgKiBiZWxvbmdzIHRvLlxyXG4gICAqIEBwYXJhbSBwcm9taXNlIHByb21pc2Ugd2hvc2UgPGk+d2ViIHdvcmtlcjwvaT4gd2Ugd2FudCB0byBmaW5kLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRXb3JrZXIocHJvbWlzZTogUHJvbWlzZTxhbnk+KTogV29ya2VyIHtcclxuICAgIHJldHVybiB0aGlzLnByb21pc2VUb1dvcmtlck1hcC5nZXQocHJvbWlzZSk7XHJcbiAgfVxyXG4gIC8vIHRzbGludDplbmFibGVcclxuXHJcbiAgLyoqXHJcbiAgICogPHA+TWV0aG9kIHRoYXQgaGFuZGxlcyB0aGUgcHJvbWlzZSBjcmVhdGlvbiBmb3IgdGhlIGdpdmVuIDxpPndlYiB3b3JrZXI8L2k+IHdpdGhcclxuICAgKiB0aGUgZ2l2ZW4gaW5wdXQgZGF0YS48L3A+XHJcbiAgICogQHBhcmFtIHdvcmtlciB3b3JrZXIgZm9yIHdoaWNoIHRoZSBwcm9taXNlIHdpbGwgYmUgY3JlYXRlZC5cclxuICAgKiBAcGFyYW0gZGF0YSBkYXRhIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgd29ya2VyIG9iamVjdC5cclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZVByb21pc2VGb3JXb3JrZXI8VD4od29ya2VyOiBXb3JrZXIsIGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHJlc29sdmUoZXZlbnQuZGF0YSkpO1xyXG4gICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCByZWplY3QpO1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlXHJcbiAgLyoqXHJcbiAgICogPHA+TWV0aG9kIHRoYXQgYWxsb2NhdGVzIGEgPGk+d2ViIHdvcmtlcjwvaT4gPGk+T2JqZWN0VVJMPC9pPiBmb3IgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gICAqIEl0J3MgdXNlZCB0byBjcmVhdGUgY2FjaGVzIGZvciB0aGUgPGk+KGZ1bmN0aW9uLCB3b3JrZXJVcmwpPC9pPiBwYWlycyBpbiBvcmRlciB0byBhdm9pZFxyXG4gICAqIGNyZWF0aW5nIHRoZSB1cmxzIG1vcmUgdGhhbiBvbmNlLjwvcD5cclxuICAgKiBAcGFyYW0gZm4gZnVuY3Rpb24gd2hvc2Ugd29ya2VyIHdlIHdhbnQgdG8gYWxsb2NhdGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRPckNyZWF0ZVdvcmtlclVybChmbjogRnVuY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLndvcmtlckZ1bmN0aW9uVG9VcmxNYXAuaGFzKGZuKSkge1xyXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLmNyZWF0ZVdvcmtlclVybChmbik7XHJcbiAgICAgIHRoaXMud29ya2VyRnVuY3Rpb25Ub1VybE1hcC5zZXQoZm4sIHVybCk7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy53b3JrZXJGdW5jdGlvblRvVXJsTWFwLmdldChmbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA8cD5NZXRob2QgdGhhdCBjcmVhdGVzIGEgPGk+d2ViIHdvcmtlcjwvaT4gPGk+T2JqZWN0VVJMPC9pPiBmcm9tIHRoZSBnaXZlblxyXG4gICAqIDxpPkZ1bmN0aW9uPC9pPiBvYmplY3QuPC9wPlxyXG4gICAqIEBwYXJhbSByZXNvbHZlIGZ1bmN0aW9uIHRoZSA8aT53ZWIgd29ya2VyPC9pPiB3aWxsIHJ1bi5cclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZVdvcmtlclVybChyZXNvbHZlOiBGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICBjb25zdCByZXNvbHZlU3RyaW5nID0gcmVzb2x2ZS50b1N0cmluZygpO1xyXG4gICAgLy8gVGhlIHRlbXBsYXRlIGlzIGJhc2ljYWxseSBhbiBhZGRFdmVudExpc3RlbmVyIGF0dGFjaG1lbnQgdGhhdCBjcmVhdGVzIGFcclxuICAgIC8vIGNsb3N1cmUgKElJRkUqKSB3aXRoIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBhbmQgaW52b2tlcyBpdCB3aXRoIHRoZSBwcm92aWRlZFxyXG4gICAgLy8gZGF0YS5cclxuICAgIC8vICogSUlGRSBzdGFuZHMgZm9yIGltbWVkaWF0ZWx5IEltbWVkaWF0ZWx5LUludm9rZWQgRnVuY3Rpb24gRXhwcmVzc2lvblxyXG4gICAgLy8gUmVtb3ZlZCB0aGUgcG9zdE1lc3NhZ2UgZnJvbSB0aGlzIHRlbXBsYXRlIGluIG9yZGVyIHRvIGFsbG93IHdvcmtlciBmdW5jdGlvbnNcclxuICAgIC8vIHRvIHVzZSBhc3luY2hyb25vdXMgZnVuY3Rpb25zIGFuZCByZXNvbHZlIHdoZW5ldmVyIHRoZXkgbmVlZCB0by5cclxuICAgIGNvbnN0IHdlYldvcmtlclRlbXBsYXRlID0gYFxyXG4gICAgICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAoKCR7cmVzb2x2ZVN0cmluZ30pKGUuZGF0YSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBgO1xyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt3ZWJXb3JrZXJUZW1wbGF0ZV0sIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSk7XHJcbiAgICByZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICB9XHJcbiAgLy8gdHNsaW50OmVuYWJsZVxyXG5cclxuICAvKipcclxuICAgKiA8cD5NZXRob2QgdGhhdCBjcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBnaXZlbiBwcm9taXNlIGZyb20gdGhlXHJcbiAgICogc2VydmljZSBjb250ZXh0LjwvcD5cclxuICAgKiBAcGFyYW0gcHJvbWlzZSBwcm9taXNlIHRoZSBjbGVhbmVyIGZ1bmN0aW9uIHdpbGwgYmUgY3JlYXRlZCBmb3IuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcm9taXNlQ2xlYW5lcjxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogKGlucHV0OiBhbnkpID0+IFQge1xyXG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZVByb21pc2UocHJvbWlzZSk7XHJcbiAgICAgIHJldHVybiBldmVudDtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA8cD5NZXRob2QgdGhhdCByZW1vdmVzIHRoZSBnaXZlbiBwcm9taXNlIGZyb20gdGhlIHNlcnZpY2UgY29udGV4dC5cclxuICAgKiBJdCBhbHNvIHRlcm1pbmF0ZXMgdGhlIGFzc29jaWF0ZWQgd29ya2VyIGluIGNhc2UgaXQgZXhpc3RzLjwvcD5cclxuICAgKiBAcGFyYW0gcHJvbWlzZSBwcm9taXNlIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgc2VydmljZSBjb250ZXh0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlUHJvbWlzZTxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgICBjb25zdCB3b3JrZXIgPSB0aGlzLnByb21pc2VUb1dvcmtlck1hcC5nZXQocHJvbWlzZSk7XHJcbiAgICBpZiAod29ya2VyKSB7XHJcbiAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJvbWlzZVRvV29ya2VyTWFwLmRlbGV0ZShwcm9taXNlKTtcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxufSJdfQ==