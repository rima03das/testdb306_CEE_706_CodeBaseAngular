import { DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { ModalRendererComponent } from '../components/modal-renderer/modal-renderer.component';
export class SessionTimeoutUtil {
    idle;
    keepalive;
    router;
    dialog;
    wfeStepLoaderService;
    appDataService;
    apiDataService;
    idleState = 'Not started.';
    timedOut = false;
    lastPing = null;
    title = 'angular-idle-timeout';
    i = 0;
    constructor(idle, keepalive, router, dialog, wfeStepLoaderService, appDataService, apiDataService) {
        this.idle = idle;
        this.keepalive = keepalive;
        this.router = router;
        this.dialog = dialog;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        // Lets check the path everytime the route changes, reset the idle timer.
        this.router.events.subscribe((val) => {
            if (!this.timedOut) {
                this.reset(); // Restart idle tracking on route change
                // console.log('Timer Reset on route change: ', this.idleState);
            }
        });
        //  FIXED: Sync session timeout across tabs using localStorage for cross-tab communication
        window.addEventListener("storage", (event) => {
            if (event.key === "lastActivity" && !this.timedOut) {
                this.reset();
                // console.log('Timer Reset from cross-tab activity: ', this.idleState);
            }
        });
        //  FIXED: Detect tab switching - continue tracking when tab becomes visible
        document.addEventListener("visibilitychange", () => {
            if (!document.hidden && !this.timedOut) {
                // Tab became visible - reset timer and resume tracking
                this.updateLastActivity();
                this.reset();
                // console.log('Timer Reset on tab focus: ', this.idleState);
            }
            // Don't stop idle when tab becomes hidden - let it continue in background
        });
        // this.sessionTimeout();
    }
    sessionTimeout() {
        const seconds = Number(window.sessionStorage.getItem('SessionTimeOut'));
        const SessionModalTimeOut = window.sessionStorage.getItem('SessionModalTimeOut') ? Number(window.sessionStorage.getItem('SessionModalTimeOut')) : 8;
        const SessionModalStepId = window.sessionStorage.getItem('SessionModalStepId') ? window.sessionStorage.getItem('SessionModalStepId') : '';
        const LogoutModalStepId = window.sessionStorage.getItem('LogoutModalStepId') ? window.sessionStorage.getItem('LogoutModalStepId') : '';
        // console.log('seconds', seconds, this.idleState);
        if (seconds !== null && seconds !== 0) {
            // sets an idle timeout of 5 seconds, for testing purposes.
            this.idle.setIdle(seconds - SessionModalTimeOut);
            // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
            this.idle.setTimeout(SessionModalTimeOut);
            // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
            this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
            this.idle.onIdleEnd.subscribe(() => {
                this.idleState = 'No longer idle.';
                this.updateLastActivity(); // Update cross-tab activity tracker
                this.reset();
                this.i = 0;
            });
            if (this.i === 0) {
                this.idle.onTimeout.subscribe(() => {
                    this.idleState = 'Timed out!';
                    this.timedOut = true;
                    // console.log(this.idleState);
                    // this.dialog.closeAll();
                    // clear the session here
                    window.sessionStorage.clear();
                    // Show Modal Here
                    /* const initialState = {
                        title: 'Session Timed Out !!!',
                        body: 'Your session is timed out. Please re-login',
                        buttonName: 'OK',
                        navigationLink: '/'
                    }; */
                    // this.bsModalRef = this.modalService.show(this.modalRenderer, {initialState});
                    if (LogoutModalStepId == '') {
                        alert('Your session is timed out. Please re-login');
                    }
                    else {
                        this.wfeStepLoaderService.loadStepById(LogoutModalStepId).subscribe((data) => {
                            if (data !== undefined) {
                                this.dialog.closeAll();
                                this.router.navigateByUrl(data.tid);
                                // this.openDialog(data);
                            }
                        });
                    }
                    // clear all the session data as well as akita store data
                    // window.sessionStorage.clear();
                    this.wfeStepLoaderService.stepDataStore = {};
                    this.wfeStepLoaderService.blockDataStore = {};
                    this.appDataService.removeAllAppData();
                    this.apiDataService.removeAllApiData();
                    if (LogoutModalStepId == '') {
                        // navigate to default step
                        this.navigate();
                    }
                });
                this.i++;
            }
            // this.idle.onIdleStart.pipe(first()).subscribe(() => {
            this.idle.onIdleStart.subscribe(() => {
                // console.log('Idle Start');
                // Check if there's been activity in other tabs before showing idle modal
                if (this.checkCrossTabActivity()) {
                    // console.log('Activity detected in other tab, resetting timer');
                    this.reset();
                    return;
                }
                // this.dialog.closeAll();
                this.idleState = 'You\'ve gone idle!';
                // console.log(this.idleState)
                if (SessionModalStepId != '') {
                    this.wfeStepLoaderService.loadStepById(SessionModalStepId).subscribe((data) => {
                        if (data !== undefined) {
                            setTimeout(() => {
                                // console.log("User has been idle for max timeout - 5 mins");
                                this.openDialog(data);
                            }, 0);
                        }
                    });
                }
            });
            this.idle.onTimeoutWarning.subscribe((countdown) => {
                this.idleState = 'You will time out in ' + countdown + ' seconds!';
                // console.log(this.idleState);
            });
            // sets the ping interval to 15 seconds
            this.keepalive.interval(15);
            this.keepalive.onPing.subscribe(() => {
                this.lastPing = new Date();
                this.updateLastActivity(); // Update cross-tab activity on ping
            });
            // Initialize cross-tab activity tracking
            this.updateLastActivity();
            this.reset();
        }
    }
    openDialog(data) {
        if (!this.dialog.getDialogById(`stepModal-${data.tid}`)) {
            this.dialog.closeAll();
            this.dialog.open(ModalRendererComponent, { data: { stepId: data.tid, startSession: false }, id: `stepModal-${data.tid}`, panelClass: `stepModal-${data.tid}` });
        }
    }
    reset() {
        // if (this.timedOut) {
        //   return;
        // }
        this.updateLastActivity(); // Update cross-tab activity tracker
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }
    /**
     * Update last activity timestamp for cross-tab synchronization
     */
    updateLastActivity() {
        sessionStorage.setItem('lastActivity', Date.now().toString());
    }
    /**
     * Check if there's been recent activity in other tabs
     */
    checkCrossTabActivity() {
        const lastActivity = sessionStorage.getItem('lastActivity');
        if (lastActivity) {
            const timeDiff = Date.now() - parseInt(lastActivity);
            const seconds = Number(window.sessionStorage.getItem('SessionTimeOut'));
            const SessionModalTimeOut = Number(window.sessionStorage.getItem('SessionModalTimeOut')) || 8;
            // If activity was within the idle threshold, consider it recent
            return timeDiff < (seconds - SessionModalTimeOut) * 1000;
        }
        return false;
    }
    /**
     * function that navigates to default step
     */
    navigate(flag = true) {
        const stepMap = localStorage.getItem('CEE_ROUTE_MAP');
        if (stepMap) {
            const defaultStepData = Object.values(this.wfeStepLoaderService.sequenceDataMap)[0];
            let url = null;
            if (localStorage.getItem('navigateStepName') === 'true') {
                url = JSON.parse(stepMap)[defaultStepData.sequence[0].tid];
            }
            else {
                url = `/wfe/step/${defaultStepData.sequence[0].tid}`;
            }
            // CI-1118:  Force redirection to refresh the session storage data.
            if (flag) {
                window.location.href = url;
            }
        }
        else {
            console.error('Step Data Not Found !!!');
            this.router.navigateByUrl('/');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi10aW1lb3V0LXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvdXRpbHMvc2Vzc2lvbi10aW1lb3V0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFRLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBTS9GLE1BQU0sT0FBTyxrQkFBa0I7SUFRZjtJQUNBO0lBQ0E7SUFDQTtJQUNEO0lBQ0M7SUFDQTtJQWJaLFNBQVMsR0FBRyxjQUFjLENBQUM7SUFDM0IsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixRQUFRLEdBQVUsSUFBSSxDQUFDO0lBQ3ZCLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRU4sWUFDWSxJQUFVLEVBQ1YsU0FBb0IsRUFDcEIsTUFBYyxFQUNkLE1BQWlCLEVBQ2xCLG9CQUEwQyxFQUN6QyxjQUE4QixFQUM5QixjQUE4QjtRQU45QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ3pDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FB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QzlCO1NBQ0o7YUFBTTtZQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElkbGUsIERFRkFVTFRfSU5URVJSVVBUU09VUkNFUyB9IGZyb20gJ0BuZy1pZGxlL2NvcmUnO1xyXG5pbXBvcnQgeyBLZWVwYWxpdmUgfSBmcm9tICdAbmctaWRsZS9rZWVwYWxpdmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2RhbFJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC1yZW5kZXJlci9tb2RhbC1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblRpbWVvdXRVdGlsIHtcclxuICAgIGlkbGVTdGF0ZSA9ICdOb3Qgc3RhcnRlZC4nO1xyXG4gICAgdGltZWRPdXQgPSBmYWxzZTtcclxuICAgIGxhc3RQaW5nPzogRGF0ZSA9IG51bGw7XHJcbiAgICB0aXRsZSA9ICdhbmd1bGFyLWlkbGUtdGltZW91dCc7XHJcbiAgICBpID0gMDtcclxuIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBpZGxlOiBJZGxlLFxyXG4gICAgICAgIHByaXZhdGUga2VlcGFsaXZlOiBLZWVwYWxpdmUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIC8vIExldHMgY2hlY2sgdGhlIHBhdGggZXZlcnl0aW1lIHRoZSByb3V0ZSBjaGFuZ2VzLCByZXNldCB0aGUgaWRsZSB0aW1lci5cclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVkT3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7IC8vIFJlc3RhcnQgaWRsZSB0cmFja2luZyBvbiByb3V0ZSBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaW1lciBSZXNldCBvbiByb3V0ZSBjaGFuZ2U6ICcsIHRoaXMuaWRsZVN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gXHJcbiAgICAgICAgLy8gIEZJWEVEOiBTeW5jIHNlc3Npb24gdGltZW91dCBhY3Jvc3MgdGFicyB1c2luZyBsb2NhbFN0b3JhZ2UgZm9yIGNyb3NzLXRhYiBjb21tdW5pY2F0aW9uXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcImxhc3RBY3Rpdml0eVwiICYmICF0aGlzLnRpbWVkT3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVGltZXIgUmVzZXQgZnJvbSBjcm9zcy10YWIgYWN0aXZpdHk6ICcsIHRoaXMuaWRsZVN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gXHJcbiAgICAgICAgLy8gIEZJWEVEOiBEZXRlY3QgdGFiIHN3aXRjaGluZyAtIGNvbnRpbnVlIHRyYWNraW5nIHdoZW4gdGFiIGJlY29tZXMgdmlzaWJsZVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgIXRoaXMudGltZWRPdXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRhYiBiZWNhbWUgdmlzaWJsZSAtIHJlc2V0IHRpbWVyIGFuZCByZXN1bWUgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdEFjdGl2aXR5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVGltZXIgUmVzZXQgb24gdGFiIGZvY3VzOiAnLCB0aGlzLmlkbGVTdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRG9uJ3Qgc3RvcCBpZGxlIHdoZW4gdGFiIGJlY29tZXMgaGlkZGVuIC0gbGV0IGl0IGNvbnRpbnVlIGluIGJhY2tncm91bmRcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnNlc3Npb25UaW1lb3V0KCk7XHJcbiAgICB9XHJcbiBcclxuICAgIHNlc3Npb25UaW1lb3V0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBOdW1iZXIod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1Nlc3Npb25UaW1lT3V0JykpO1xyXG4gICAgICAgIGNvbnN0IFNlc3Npb25Nb2RhbFRpbWVPdXQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnU2Vzc2lvbk1vZGFsVGltZU91dCcpID8gTnVtYmVyKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdTZXNzaW9uTW9kYWxUaW1lT3V0JykpIDogODtcclxuICAgICAgICBjb25zdCBTZXNzaW9uTW9kYWxTdGVwSWQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnU2Vzc2lvbk1vZGFsU3RlcElkJykgPyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnU2Vzc2lvbk1vZGFsU3RlcElkJykgOiAnJztcclxuICAgICAgICBjb25zdCBMb2dvdXRNb2RhbFN0ZXBJZCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdMb2dvdXRNb2RhbFN0ZXBJZCcpID8gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0xvZ291dE1vZGFsU3RlcElkJykgOiAnJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2Vjb25kcycsIHNlY29uZHMsIHRoaXMuaWRsZVN0YXRlKTtcclxuICAgICAgICBpZiAoc2Vjb25kcyAhPT0gbnVsbCAmJiBzZWNvbmRzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHNldHMgYW4gaWRsZSB0aW1lb3V0IG9mIDUgc2Vjb25kcywgZm9yIHRlc3RpbmcgcHVycG9zZXMuXHJcbiAgICAgICAgICAgIHRoaXMuaWRsZS5zZXRJZGxlKHNlY29uZHMgLSBTZXNzaW9uTW9kYWxUaW1lT3V0KTtcclxuICAgICAgICAgICAgLy8gc2V0cyBhIHRpbWVvdXQgcGVyaW9kIG9mIDUgc2Vjb25kcy4gYWZ0ZXIgMTAgc2Vjb25kcyBvZiBpbmFjdGl2aXR5LCB0aGUgdXNlciB3aWxsIGJlIGNvbnNpZGVyZWQgdGltZWQgb3V0LlxyXG4gICAgICAgICAgICB0aGlzLmlkbGUuc2V0VGltZW91dChTZXNzaW9uTW9kYWxUaW1lT3V0KTtcclxuICAgICAgICAgICAgLy8gc2V0cyB0aGUgZGVmYXVsdCBpbnRlcnJ1cHRzLCBpbiB0aGlzIGNhc2UsIHRoaW5ncyBsaWtlIGNsaWNrcywgc2Nyb2xscywgdG91Y2hlcyB0byB0aGUgZG9jdW1lbnRcclxuICAgICAgICAgICAgdGhpcy5pZGxlLnNldEludGVycnVwdHMoREVGQVVMVF9JTlRFUlJVUFRTT1VSQ0VTKTtcclxuICAgICAgICAgICAgdGhpcy5pZGxlLm9uSWRsZUVuZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlU3RhdGUgPSAnTm8gbG9uZ2VyIGlkbGUuJztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdEFjdGl2aXR5KCk7IC8vIFVwZGF0ZSBjcm9zcy10YWIgYWN0aXZpdHkgdHJhY2tlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlLm9uVGltZW91dC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZVN0YXRlID0gJ1RpbWVkIG91dCEnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZWRPdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaWRsZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRpYWxvZy5jbG9zZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBzZXNzaW9uIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IE1vZGFsIEhlcmVcclxuICAgICAgICAgICAgICAgICAgICAvKiBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2Vzc2lvbiBUaW1lZCBPdXQgISEhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJ1lvdXIgc2Vzc2lvbiBpcyB0aW1lZCBvdXQuIFBsZWFzZSByZS1sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbk5hbWU6ICdPSycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25MaW5rOiAnLydcclxuICAgICAgICAgICAgICAgICAgICB9OyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYnNNb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3codGhpcy5tb2RhbFJlbmRlcmVyLCB7aW5pdGlhbFN0YXRlfSk7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTG9nb3V0TW9kYWxTdGVwSWQgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdXIgc2Vzc2lvbiBpcyB0aW1lZCBvdXQuIFBsZWFzZSByZS1sb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkU3RlcEJ5SWQoTG9nb3V0TW9kYWxTdGVwSWQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGRhdGEudGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm9wZW5EaWFsb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFsbCB0aGUgc2Vzc2lvbiBkYXRhIGFzIHdlbGwgYXMgYWtpdGEgc3RvcmUgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2Uuc3RlcERhdGFTdG9yZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuYmxvY2tEYXRhU3RvcmUgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnJlbW92ZUFsbEFwcERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnJlbW92ZUFsbEFwaURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTG9nb3V0TW9kYWxTdGVwSWQgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmF2aWdhdGUgdG8gZGVmYXVsdCBzdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgLy8gdGhpcy5pZGxlLm9uSWRsZVN0YXJ0LnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pZGxlLm9uSWRsZVN0YXJ0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSWRsZSBTdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSdzIGJlZW4gYWN0aXZpdHkgaW4gb3RoZXIgdGFicyBiZWZvcmUgc2hvd2luZyBpZGxlIG1vZGFsXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0Nyb3NzVGFiQWN0aXZpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBY3Rpdml0eSBkZXRlY3RlZCBpbiBvdGhlciB0YWIsIHJlc2V0dGluZyB0aW1lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVTdGF0ZSA9ICdZb3VcXCd2ZSBnb25lIGlkbGUhJztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaWRsZVN0YXRlKVxyXG4gICAgICAgICAgICAgICAgaWYgKFNlc3Npb25Nb2RhbFN0ZXBJZCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZFN0ZXBCeUlkKFNlc3Npb25Nb2RhbFN0ZXBJZCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJVc2VyIGhhcyBiZWVuIGlkbGUgZm9yIG1heCB0aW1lb3V0IC0gNSBtaW5zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gXHJcbiAgICAgICAgICAgIHRoaXMuaWRsZS5vblRpbWVvdXRXYXJuaW5nLnN1YnNjcmliZSgoY291bnRkb3duKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkbGVTdGF0ZSA9ICdZb3Ugd2lsbCB0aW1lIG91dCBpbiAnICsgY291bnRkb3duICsgJyBzZWNvbmRzISc7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlkbGVTdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gXHJcbiAgICAgICAgICAgIC8vIHNldHMgdGhlIHBpbmcgaW50ZXJ2YWwgdG8gMTUgc2Vjb25kc1xyXG4gICAgICAgICAgICB0aGlzLmtlZXBhbGl2ZS5pbnRlcnZhbCgxNSk7XHJcbiBcclxuICAgICAgICAgICAgdGhpcy5rZWVwYWxpdmUub25QaW5nLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQaW5nID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdEFjdGl2aXR5KCk7IC8vIFVwZGF0ZSBjcm9zcy10YWIgYWN0aXZpdHkgb24gcGluZ1xyXG4gICAgICAgICAgICB9KTtcclxuIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGNyb3NzLXRhYiBhY3Rpdml0eSB0cmFja2luZ1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3RBY3Rpdml0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlbkRpYWxvZyhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlhbG9nLmdldERpYWxvZ0J5SWQoYHN0ZXBNb2RhbC0ke2RhdGEudGlkfWApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oXHJcbiAgICAgICAgICAgICAgICBNb2RhbFJlbmRlcmVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgeyBkYXRhOiB7IHN0ZXBJZDogZGF0YS50aWQsIHN0YXJ0U2Vzc2lvbjogZmFsc2UgfSwgaWQ6IGBzdGVwTW9kYWwtJHtkYXRhLnRpZH1gLCBwYW5lbENsYXNzOiBgc3RlcE1vZGFsLSR7ZGF0YS50aWR9YCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuIFxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMudGltZWRPdXQpIHtcclxuICAgICAgICAvLyAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVMYXN0QWN0aXZpdHkoKTsgLy8gVXBkYXRlIGNyb3NzLXRhYiBhY3Rpdml0eSB0cmFja2VyXHJcbiAgICAgICAgdGhpcy5pZGxlLndhdGNoKCk7XHJcbiAgICAgICAgdGhpcy5pZGxlU3RhdGUgPSAnU3RhcnRlZC4nO1xyXG4gICAgICAgIHRoaXMudGltZWRPdXQgPSBmYWxzZTtcclxuICAgIH1cclxuIFxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgbGFzdCBhY3Rpdml0eSB0aW1lc3RhbXAgZm9yIGNyb3NzLXRhYiBzeW5jaHJvbml6YXRpb25cclxuICAgICAqL1xyXG4gICAgdXBkYXRlTGFzdEFjdGl2aXR5KCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhc3RBY3Rpdml0eScsIERhdGUubm93KCkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiBcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlcmUncyBiZWVuIHJlY2VudCBhY3Rpdml0eSBpbiBvdGhlciB0YWJzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tDcm9zc1RhYkFjdGl2aXR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGxhc3RBY3Rpdml0eSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhc3RBY3Rpdml0eScpO1xyXG4gICAgICAgIGlmIChsYXN0QWN0aXZpdHkpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZURpZmYgPSBEYXRlLm5vdygpIC0gcGFyc2VJbnQobGFzdEFjdGl2aXR5KTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE51bWJlcih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnU2Vzc2lvblRpbWVPdXQnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IFNlc3Npb25Nb2RhbFRpbWVPdXQgPSBOdW1iZXIod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1Nlc3Npb25Nb2RhbFRpbWVPdXQnKSkgfHwgODtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIElmIGFjdGl2aXR5IHdhcyB3aXRoaW4gdGhlIGlkbGUgdGhyZXNob2xkLCBjb25zaWRlciBpdCByZWNlbnRcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVEaWZmIDwgKHNlY29uZHMgLSBTZXNzaW9uTW9kYWxUaW1lT3V0KSAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgICAgXHJcbiBcclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBuYXZpZ2F0ZXMgdG8gZGVmYXVsdCBzdGVwXHJcbiAgICAgKi9cclxuICAgIG5hdmlnYXRlKGZsYWcgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3Qgc3RlcE1hcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDRUVfUk9VVEVfTUFQJyk7XHJcbiAgICAgICAgaWYgKHN0ZXBNYXApIHtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFN0ZXBEYXRhID0gT2JqZWN0LnZhbHVlcyh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnNlcXVlbmNlRGF0YU1hcClbMF07XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hdmlnYXRlU3RlcE5hbWUnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBKU09OLnBhcnNlKHN0ZXBNYXApW2RlZmF1bHRTdGVwRGF0YS5zZXF1ZW5jZVswXS50aWRdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gYC93ZmUvc3RlcC8ke2RlZmF1bHRTdGVwRGF0YS5zZXF1ZW5jZVswXS50aWR9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ0ktMTExODogIEZvcmNlIHJlZGlyZWN0aW9uIHRvIHJlZnJlc2ggdGhlIHNlc3Npb24gc3RvcmFnZSBkYXRhLlxyXG4gICAgICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTdGVwIERhdGEgTm90IEZvdW5kICEhIScpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiBcclxuICJdfQ==