import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CeeInitServiceService {
    http;
    appConfigData;
    customErrors;
    apiConfigData;
    constructor(http) {
        this.http = http;
    }
    async initConfigurationJSON() {
        if (!this.getAppConfigData) {
            const appConfigData = await this.http.get('assets/jsons/app_config.json?hash=' + Date.now()).toPromise();
            for (const singleRes of Object.keys(appConfigData)) {
                if (singleRes === 'API_TYPE') {
                    if ((appConfigData[singleRes] === 'INTERNAL' || appConfigData[singleRes] === 'EXTERNAL') && !this.getApiConfigData) {
                        window.localStorage.setItem('hash_api_key', 'true');
                        const apiConfig = await this.http.get('assets/jsons/api_config.json').toPromise();
                        let apiConfigData = {};
                        (apiConfig.config || []).forEach((obj) => apiConfigData = { ...apiConfigData, ...{ [obj['id']]: obj } });
                        // try {
                        //     //marge API JOIN data
                        //     const apiJoin: any = await this.http.get('assets/jsons/api_join.json').toPromise();
                        //     // let apiJoinData = {};
                        //     (apiJoin.config || []).forEach((obj) => {
                        //         if (apiConfigData[obj['id']]) {
                        //             apiConfigData[obj['id']] = { ...apiConfigData[obj['id']], ...obj }
                        //         }
                        //     });
                        // } catch (error) {
                        // }
                        // locally caching the api config data
                        this.setApiConfigData = apiConfigData;
                        window.localStorage.setItem('API_CONFIG', JSON.stringify(apiConfigData));
                    }
                    else {
                        window.localStorage.removeItem('hash_api_key');
                        window.localStorage.removeItem('API_CONFIG');
                    }
                }
                if (singleRes === 'customErrorSteps' && !this.customErrors) {
                    this.customErrors = await this.http.get('assets/jsons/custom_errors_config.json').toPromise();
                }
                window.localStorage.setItem(singleRes, typeof (appConfigData[singleRes]) === 'string' ?
                    appConfigData[singleRes] :
                    JSON.stringify(appConfigData[singleRes]));
            }
            // caching the app config data
            this.setAppConfigData = appConfigData;
        }
        return this.getAppConfigData;
    }
    get getApiConfigData() {
        return this.apiConfigData;
    }
    set setApiConfigData(data) {
        this.apiConfigData = data;
    }
    get getAppConfigData() {
        return this.appConfigData;
    }
    set setAppConfigData(data) {
        this.appConfigData = data;
    }
    static ɵfac = function CeeInitServiceService_Factory(t) { return new (t || CeeInitServiceService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CeeInitServiceService, factory: CeeInitServiceService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeInitServiceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWluaXQtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3NlcnZpY2VzL2NlZS1pbml0LXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLHFCQUFxQjtJQU1WO0lBSnBCLGFBQWEsQ0FBTTtJQUNuQixZQUFZLENBQU07SUFDbEIsYUFBYSxDQUFNO0lBRW5CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLEtBQUssQ0FBQyxxQkFBcUI7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN4QixNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pHLEtBQUssTUFBTSxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFO29CQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFVBQVUsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ2hILE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDcEQsTUFBTSxTQUFTLEdBQVEsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUN2RixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBQ3ZCLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLGFBQWEsR0FBRyxFQUFFLEdBQUcsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDekcsUUFBUTt3QkFDUiw0QkFBNEI7d0JBQzVCLDBGQUEwRjt3QkFDMUYsK0JBQStCO3dCQUMvQixnREFBZ0Q7d0JBQ2hELDBDQUEwQzt3QkFDMUMsaUZBQWlGO3dCQUNqRixZQUFZO3dCQUNaLFVBQVU7d0JBRVYsb0JBQW9CO3dCQUVwQixJQUFJO3dCQUNKLHNDQUFzQzt3QkFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQzt3QkFDdEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztxQkFDNUU7eUJBQU07d0JBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUNoRDtpQkFDSjtnQkFDRCxJQUFJLFNBQVMsS0FBSyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNqRztnQkFDRCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDdkIsU0FBUyxFQUNULE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQztvQkFDNUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRDtZQUNELDhCQUE4QjtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksZ0JBQWdCLENBQUMsSUFBSTtRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDOytFQXBFUSxxQkFBcUI7Z0VBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRmxCLE1BQU07O2lGQUVULHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENlZUluaXRTZXJ2aWNlU2VydmljZSB7XHJcblxyXG4gICAgYXBwQ29uZmlnRGF0YTogYW55O1xyXG4gICAgY3VzdG9tRXJyb3JzOiBhbnk7XHJcbiAgICBhcGlDb25maWdEYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBhc3luYyBpbml0Q29uZmlndXJhdGlvbkpTT04oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldEFwcENvbmZpZ0RhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgYXBwQ29uZmlnRGF0YSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoJ2Fzc2V0cy9qc29ucy9hcHBfY29uZmlnLmpzb24/aGFzaD0nICsgRGF0ZS5ub3coKSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2luZ2xlUmVzIG9mIE9iamVjdC5rZXlzKGFwcENvbmZpZ0RhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2luZ2xlUmVzID09PSAnQVBJX1RZUEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhcHBDb25maWdEYXRhW3NpbmdsZVJlc10gPT09ICdJTlRFUk5BTCcgfHwgYXBwQ29uZmlnRGF0YVtzaW5nbGVSZXNdID09PSAnRVhURVJOQUwnKSAmJiAhdGhpcy5nZXRBcGlDb25maWdEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGFzaF9hcGlfa2V5JywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpQ29uZmlnOiBhbnkgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KCdhc3NldHMvanNvbnMvYXBpX2NvbmZpZy5qc29uJykudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcGlDb25maWdEYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhcGlDb25maWcuY29uZmlnIHx8IFtdKS5mb3JFYWNoKChvYmopID0+IGFwaUNvbmZpZ0RhdGEgPSB7IC4uLmFwaUNvbmZpZ0RhdGEsIC4uLnsgW29ialsnaWQnXV06IG9iaiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9tYXJnZSBBUEkgSk9JTiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBhcGlKb2luOiBhbnkgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KCdhc3NldHMvanNvbnMvYXBpX2pvaW4uanNvbicpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gbGV0IGFwaUpvaW5EYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoYXBpSm9pbi5jb25maWcgfHwgW10pLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChhcGlDb25maWdEYXRhW29ialsnaWQnXV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXBpQ29uZmlnRGF0YVtvYmpbJ2lkJ11dID0geyAuLi5hcGlDb25maWdEYXRhW29ialsnaWQnXV0sIC4uLm9iaiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhbGx5IGNhY2hpbmcgdGhlIGFwaSBjb25maWcgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFwaUNvbmZpZ0RhdGEgPSBhcGlDb25maWdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FQSV9DT05GSUcnLCBKU09OLnN0cmluZ2lmeShhcGlDb25maWdEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdoYXNoX2FwaV9rZXknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdBUElfQ09ORklHJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZVJlcyA9PT0gJ2N1c3RvbUVycm9yU3RlcHMnICYmICF0aGlzLmN1c3RvbUVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tRXJyb3JzID0gYXdhaXQgdGhpcy5odHRwLmdldCgnYXNzZXRzL2pzb25zL2N1c3RvbV9lcnJvcnNfY29uZmlnLmpzb24nKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVSZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIChhcHBDb25maWdEYXRhW3NpbmdsZVJlc10pID09PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbmZpZ0RhdGFbc2luZ2xlUmVzXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGFwcENvbmZpZ0RhdGFbc2luZ2xlUmVzXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhY2hpbmcgdGhlIGFwcCBjb25maWcgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLnNldEFwcENvbmZpZ0RhdGEgPSBhcHBDb25maWdEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcHBDb25maWdEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRBcGlDb25maWdEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNvbmZpZ0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNldEFwaUNvbmZpZ0RhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYXBpQ29uZmlnRGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldEFwcENvbmZpZ0RhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwQ29uZmlnRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0QXBwQ29uZmlnRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hcHBDb25maWdEYXRhID0gZGF0YTtcclxuICAgIH1cclxufVxyXG4iXX0=