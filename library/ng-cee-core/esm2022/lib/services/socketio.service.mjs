import { ApplicationRef, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import * as i0 from "@angular/core";
import * as i1 from "ngx-socket-io";
import * as i2 from "./event-response-handler.service";
import * as i3 from "./wfe-step-loader.service";
export class SocketioService {
    socket;
    eventResponseHandler;
    wfeStepLoaderService;
    config = {
        url: '',
        options: {
            transports: ["websocket"],
            path: ''
        }
    };
    dataSocketDetails = [];
    constructor(socket, eventResponseHandler, wfeStepLoaderService) {
        this.socket = socket;
        this.eventResponseHandler = eventResponseHandler;
        this.wfeStepLoaderService = wfeStepLoaderService;
        setTimeout(() => {
            // console.log("Setting: ", localStorage.getItem('socket_settings'))
            if (localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 0) {
                this.dataSocketDetails = localStorage.getItem('socket_settings') && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] && JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'].length > 0 ? JSON.parse(localStorage.getItem('socket_settings'))['dataSocketDetails'] : [];
                this.dataSocketDetails.forEach((val, index) => {
                    this.socketConnect(val, index);
                });
            }
            else {
                for (let i = this.dataSocketDetails.length; i < 5; i++) {
                    this.socketDisconnect(i);
                }
            }
        }, 200);
    }
    socketConnect(socketDetails, index) {
        this.config['url'] = socketDetails['dataSocketUrl'] ? socketDetails['dataSocketUrl'] : '';
        this.config['options']['transports'] = socketDetails['dataSocketOptions'] && socketDetails['dataSocketOptions']['transports'] ? socketDetails['dataSocketOptions']['transports'] : '';
        this.config['options']['path'] = socketDetails['dataSocketOptions'] && socketDetails['dataSocketOptions']['path'] ? socketDetails['dataSocketOptions']['path'] : '';
        if (typeof this.config === 'object' && this.config !== null && this.config['url'] && this.config['url'] != "") {
            let accessToken = this.returnAccessToken();
            if (accessToken) {
                this.config['options']['auth'] = { token: accessToken };
                this.socket = new Socket(this.config, new ApplicationRef());
                this.socket.on('disconnect', () => {
                    console.log('user disconnected');
                });
                this.socket.on('connect_error', function (err) {
                    if (typeof console !== "undefined" && console !== null) {
                        if (err && typeof (err) == 'string' && err == 'Invalid namespace') {
                            console.warn("Attempted to connect to invalid namespace");
                        }
                        else {
                            try {
                                let errorObj = JSON.parse(err.message);
                                switch (Number(errorObj['status'])) {
                                    case 500:
                                        console.log("Error 500: ", errorObj['message']);
                                        break;
                                    case 401:
                                        console.log("Error 401: ", errorObj['message']);
                                        break;
                                    case 404:
                                        console.log("Error 404: ", errorObj['message']);
                                        break;
                                    case 400:
                                        console.log("Error 400: ", errorObj['message']);
                                        break;
                                    default:
                                        console.log("Error " + errorObj['status'] + ": ", errorObj['message']);
                                        break;
                                }
                            }
                            catch (error) {
                            }
                        }
                    }
                });
            }
        }
    }
    returnAccessToken() {
        const accessToken = `${this.getCookie('headerPayload')}.${this.getCookie('signature')}`;
        return accessToken;
    }
    getCookie(name) {
        const ca = document.cookie.split(';');
        const caLen = ca.length;
        const cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
    socketDisconnect(index) {
        this.socket.disconnect();
    }
    ngOnDestroy() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }
    listenToTheSocket(stepId, wfeEventListHandler) {
        // console.log("dataSocketDetails: ",this.dataSocketDetails)
        this.dataSocketDetails.forEach((socketDetails, index) => {
            if (socketDetails['dataSocketUrl'] && socketDetails['dataSocketUrl'] != '') {
                // console.log("socketDetails: ",socketDetails['dataSocketUrl']);   
                this.getMessage(stepId, wfeEventListHandler, socketDetails, index);
            }
        });
    }
    getMessage(stepId, wfeEventListHandler, socketDetails, index) {
        if (!Array.isArray(socketDetails['dataSocketChannel'])) {
            socketDetails['dataSocketChannel'] = [socketDetails['dataSocketChannel']];
        }
        socketDetails['dataSocketChannel'].forEach((channel, number) => {
            this.socket.fromEvent(channel).subscribe((data) => {
                // console.log("Auth Error: ", data)
                // Socket Data Emit on Akita
                const response = {
                    handler: socketDetails['dataSocketHandler'][number],
                    response: data,
                    event_success: true,
                    storageType: localStorage.getItem('storageType'),
                    statusCode: 0
                };
                this.eventResponseHandler.emitAPIDATA(response);
                // Event Callback on Socket Data Emit
                this.wfeStepLoaderService.loadStepById(window['currentStepId'] ? window['currentStepId'] : stepId).subscribe((data) => {
                    let eventList = data.event_list.filter(event => event.event_name === 'OnSocketEmit');
                    if (eventList.length > 0) {
                        for (const event of JSON.parse(JSON.stringify(eventList))) {
                            // console.log("event event: ",event)
                            let socketHandler = event['event_params'][0]['invoke_event_config']['additional_parameters'].filter(function (el) { return el.parameter_type == 'SocketChannel'; }).length > 0 ? event['event_params'][0]['invoke_event_config']['additional_parameters'].filter(function (el) { return el.parameter_type == 'SocketChannel'; })[0].value : '';
                            if (event.isDefault === true && socketHandler === socketDetails['dataSocketHandler'][number]) {
                                // console.log("event event: ",event)
                                wfeEventListHandler.switchEventDisplayType(event, eventList, {}, true);
                            }
                        }
                    }
                });
            });
        });
    }
    static ɵfac = function SocketioService_Factory(t) { return new (t || SocketioService)(i0.ɵɵinject(i1.Socket), i0.ɵɵinject(i2.EventResponseHandlerService), i0.ɵɵinject(i3.WfeStepLoaderService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SocketioService, factory: SocketioService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SocketioService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.Socket }, { type: i2.EventResponseHandlerService }, { type: i3.WfeStepLoaderService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0aW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9zZXJ2aWNlcy9zb2NrZXRpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0sZUFBZSxDQUFDOzs7OztBQU92RCxNQUFNLE9BQU8sZUFBZTtJQVVoQjtJQUNBO0lBQ0Q7SUFYVCxNQUFNLEdBQW1CO1FBQ3ZCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsT0FBTyxFQUFFO1lBQ1AsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ3pCLElBQUksRUFBRSxFQUFFO1NBQ1Q7S0FDRixDQUFDO0lBQ0YsaUJBQWlCLEdBQVEsRUFBRSxDQUFDO0lBQzVCLFlBQ1UsTUFBYyxFQUNkLG9CQUFpRCxFQUNsRCxvQkFBMEM7UUFGekMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDbEQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUVqRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2Qsb0VBQW9FO1lBQ3BFLElBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDN00sSUFBSSxDQUFDLGlC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QUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0NBQzVGLHFDQUFxQztnQ0FDckMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7NkJBQ3hFO3lCQUNKO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7eUVBbkpVLGVBQWU7Z0VBQWYsZUFBZSxXQUFmLGVBQWUsbUJBRmQsTUFBTTs7aUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNvY2tldCwgU29ja2V0SW9Db25maWcgfSBmcm9tICduZ3gtc29ja2V0LWlvJztcclxuaW1wb3J0IHsgRXZlbnRSZXNwb25zZUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudC1yZXNwb25zZS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4vd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ja2V0aW9TZXJ2aWNlIHtcclxuICBjb25maWc6IFNvY2tldElvQ29uZmlnID0ge1xyXG4gICAgdXJsOiAnJyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgdHJhbnNwb3J0czogW1wid2Vic29ja2V0XCJdLFxyXG4gICAgICBwYXRoOiAnJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZGF0YVNvY2tldERldGFpbHM6IGFueSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzb2NrZXQ6IFNvY2tldCxcclxuICAgIHByaXZhdGUgZXZlbnRSZXNwb25zZUhhbmRsZXI6IEV2ZW50UmVzcG9uc2VIYW5kbGVyU2VydmljZSxcclxuICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJTZXR0aW5nOiBcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVxyXG4gICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvY2tldF9zZXR0aW5ncycpKVsnZGF0YVNvY2tldERldGFpbHMnXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU29ja2V0RGV0YWlscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSAmJiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10gJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJykpWydkYXRhU29ja2V0RGV0YWlscyddLmxlbmd0aCA+IDAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb2NrZXRfc2V0dGluZ3MnKSlbJ2RhdGFTb2NrZXREZXRhaWxzJ10gOiBbXTtcclxuICAgICAgICB0aGlzLmRhdGFTb2NrZXREZXRhaWxzLmZvckVhY2goKHZhbCxpbmRleCk9PntcclxuICAgICAgICAgIHRoaXMuc29ja2V0Q29ubmVjdCh2YWwsaW5kZXgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gdGhpcy5kYXRhU29ja2V0RGV0YWlscy5sZW5ndGg7IGk8NTsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLnNvY2tldERpc2Nvbm5lY3QoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LDIwMCk7XHJcbiAgfVxyXG5cclxuICBzb2NrZXRDb25uZWN0KHNvY2tldERldGFpbHMsaW5kZXgpIHtcclxuICAgIHRoaXMuY29uZmlnWyd1cmwnXSA9IHNvY2tldERldGFpbHNbJ2RhdGFTb2NrZXRVcmwnXSA/IHNvY2tldERldGFpbHNbJ2RhdGFTb2NrZXRVcmwnXSA6ICcnO1xyXG4gICAgdGhpcy5jb25maWdbJ29wdGlvbnMnXVsndHJhbnNwb3J0cyddID0gc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldE9wdGlvbnMnXSAmJiBzb2NrZXREZXRhaWxzWydkYXRhU29ja2V0T3B0aW9ucyddWyd0cmFuc3BvcnRzJ10gPyBzb2NrZXREZXRhaWxzWydkYXRhU29ja2V0T3B0aW9ucyddWyd0cmFuc3BvcnRzJ10gOiAnJztcclxuICAgIHRoaXMuY29uZmlnWydvcHRpb25zJ11bJ3BhdGgnXSA9IHNvY2tldERldGFpbHNbJ2RhdGFTb2NrZXRPcHRpb25zJ10gJiYgc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldE9wdGlvbnMnXVsncGF0aCddID8gc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldE9wdGlvbnMnXVsncGF0aCddIDogJyc7XHJcbiAgICBpZih0eXBlb2YgdGhpcy5jb25maWcgPT09ICdvYmplY3QnICYmIHRoaXMuY29uZmlnICE9PSBudWxsICYmIHRoaXMuY29uZmlnWyd1cmwnXSAmJiB0aGlzLmNvbmZpZ1sndXJsJ10gIT0gXCJcIikge1xyXG4gICAgICBsZXQgYWNjZXNzVG9rZW4gPSB0aGlzLnJldHVybkFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgIGlmKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdbJ29wdGlvbnMnXVsnYXV0aCddID0geyB0b2tlbjogYWNjZXNzVG9rZW4gfTtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBTb2NrZXQodGhpcy5jb25maWcsIG5ldyBBcHBsaWNhdGlvblJlZigpKVxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGVyciAmJiB0eXBlb2YoZXJyKT09J3N0cmluZycgJiYgZXJyID09ICdJbnZhbGlkIG5hbWVzcGFjZScpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBdHRlbXB0ZWQgdG8gY29ubmVjdCB0byBpbnZhbGlkIG5hbWVzcGFjZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yT2JqID0gSlNPTi5wYXJzZShlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goTnVtYmVyKGVycm9yT2JqWydzdGF0dXMnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgY2FzZSA1MDA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgNTAwOiBcIixlcnJvck9ialsnbWVzc2FnZSddKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIDQwMTogXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciA0MDE6IFwiLGVycm9yT2JqWydtZXNzYWdlJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDA0OiBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDQwNDogXCIsZXJyb3JPYmpbJ21lc3NhZ2UnXSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSA0MDA6IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgNDAwOiBcIixlcnJvck9ialsnbWVzc2FnZSddKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiK2Vycm9yT2JqWydzdGF0dXMnXStcIjogXCIsZXJyb3JPYmpbJ21lc3NhZ2UnXSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmV0dXJuQWNjZXNzVG9rZW4oKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGAke3RoaXMuZ2V0Q29va2llKCdoZWFkZXJQYXlsb2FkJyl9LiR7dGhpcy5nZXRDb29raWUoJ3NpZ25hdHVyZScpfWBcclxuICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29va2llKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2E6IEFycmF5PHN0cmluZz4gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGNvbnN0IGNhTGVuOiBudW1iZXIgPSBjYS5sZW5ndGg7XHJcbiAgICBjb25zdCBjb29raWVOYW1lID0gYCR7bmFtZX09YDtcclxuICAgIGxldCBjOiBzdHJpbmc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYUxlbjsgaSArPSAxKSB7XHJcbiAgICAgIGMgPSBjYVtpXS5yZXBsYWNlKC9eXFxzKy9nLCAnJyk7XHJcbiAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcoY29va2llTmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgc29ja2V0RGlzY29ubmVjdChpbmRleCkge1xyXG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcclxuICAgICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLnNvY2tldCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGxpc3RlblRvVGhlU29ja2V0KHN0ZXBJZCwgd2ZlRXZlbnRMaXN0SGFuZGxlcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhU29ja2V0RGV0YWlsczogXCIsdGhpcy5kYXRhU29ja2V0RGV0YWlscylcclxuICAgIHRoaXMuZGF0YVNvY2tldERldGFpbHMuZm9yRWFjaCgoc29ja2V0RGV0YWlscyxpbmRleCkgPT4ge1xyXG4gICAgICBpZihzb2NrZXREZXRhaWxzWydkYXRhU29ja2V0VXJsJ10gJiYgc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldFVybCddICE9ICcnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb2NrZXREZXRhaWxzOiBcIixzb2NrZXREZXRhaWxzWydkYXRhU29ja2V0VXJsJ10pOyAgIFxyXG4gICAgICAgIHRoaXMuZ2V0TWVzc2FnZShzdGVwSWQsIHdmZUV2ZW50TGlzdEhhbmRsZXIsIHNvY2tldERldGFpbHMsIGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldE1lc3NhZ2Uoc3RlcElkLCB3ZmVFdmVudExpc3RIYW5kbGVyLCBzb2NrZXREZXRhaWxzLCBpbmRleCkge1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldENoYW5uZWwnXSkpIHtcclxuICAgICAgc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldENoYW5uZWwnXSA9IFsgc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldENoYW5uZWwnXSBdO1xyXG4gICAgfVxyXG4gICAgc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldENoYW5uZWwnXS5mb3JFYWNoKChjaGFubmVsLG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnNvY2tldC5mcm9tRXZlbnQoY2hhbm5lbCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkF1dGggRXJyb3I6IFwiLCBkYXRhKVxyXG4gICAgICAgICAgLy8gU29ja2V0IERhdGEgRW1pdCBvbiBBa2l0YVxyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IHNvY2tldERldGFpbHNbJ2RhdGFTb2NrZXRIYW5kbGVyJ11bbnVtYmVyXSxcclxuICAgICAgICAgICAgcmVzcG9uc2U6IGRhdGEsXHJcbiAgICAgICAgICAgIGV2ZW50X3N1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIHN0b3JhZ2VUeXBlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmFnZVR5cGUnKSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogMFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuZXZlbnRSZXNwb25zZUhhbmRsZXIuZW1pdEFQSURBVEEocmVzcG9uc2UpO1xyXG4gICAgICAgICAgLy8gRXZlbnQgQ2FsbGJhY2sgb24gU29ja2V0IERhdGEgRW1pdFxyXG4gICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkU3RlcEJ5SWQod2luZG93WydjdXJyZW50U3RlcElkJ10/IHdpbmRvd1snY3VycmVudFN0ZXBJZCddIDogc3RlcElkKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnRMaXN0ID0gZGF0YS5ldmVudF9saXN0LmZpbHRlcihldmVudCA9PiBldmVudC5ldmVudF9uYW1lID09PSAnT25Tb2NrZXRFbWl0Jyk7XHJcbiAgICAgICAgICAgIGlmIChldmVudExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmVudExpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV2ZW50IGV2ZW50OiBcIixldmVudClcclxuICAgICAgICAgICAgICAgICAgbGV0IHNvY2tldEhhbmRsZXIgPSBldmVudFsnZXZlbnRfcGFyYW1zJ11bMF1bJ2ludm9rZV9ldmVudF9jb25maWcnXVsnYWRkaXRpb25hbF9wYXJhbWV0ZXJzJ10uZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwucGFyYW1ldGVyX3R5cGUgPT0gJ1NvY2tldENoYW5uZWwnIH0pLmxlbmd0aCA+IDAgPyBldmVudFsnZXZlbnRfcGFyYW1zJ11bMF1bJ2ludm9rZV9ldmVudF9jb25maWcnXVsnYWRkaXRpb25hbF9wYXJhbWV0ZXJzJ10uZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwucGFyYW1ldGVyX3R5cGUgPT0gJ1NvY2tldENoYW5uZWwnIH0pWzBdLnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5pc0RlZmF1bHQgPT09IHRydWUgJiYgc29ja2V0SGFuZGxlciA9PT0gc29ja2V0RGV0YWlsc1snZGF0YVNvY2tldEhhbmRsZXInXVtudW1iZXJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJldmVudCBldmVudDogXCIsZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgd2ZlRXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCBldmVudExpc3QsIHt9LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==