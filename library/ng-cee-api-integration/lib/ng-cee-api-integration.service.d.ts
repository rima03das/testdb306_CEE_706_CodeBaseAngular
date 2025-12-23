import { HttpClient } from '@angular/common/http';
import { SharedEventsServiceService, EventResponseHandlerService } from '@ng/cee-core';
import * as i0 from "@angular/core";
export declare class NgCeeApiIntegrationService {
    private sharedEventsService;
    private eventResponseHandler;
    private http;
    private downloadType;
    private MimeTypeMap;
    private subscription;
    constructor(sharedEventsService: SharedEventsServiceService, eventResponseHandler: EventResponseHandlerService, http: HttpClient);
    init(): void;
    /**
     * function that emits back the api response for a particular api
     * @param response the response object
     * @param res the response
     * @param isEvent if the handler is called from an event
     * @param success if the api res is success
     */
    private emitDataToCee;
    /**
     * CEE internal API Service that hits the api
     * @param apiConfigData the api config data for the handler
     * via internal libraries of CEE
     */
    private ceeApiService;
    private getCookie;
    private ceeParallelApiService;
    private formRequestBody;
    destroySubscription(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgCeeApiIntegrationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgCeeApiIntegrationService>;
}
export interface RefreshAccessToken {
    oldApiConfigData: object;
}
