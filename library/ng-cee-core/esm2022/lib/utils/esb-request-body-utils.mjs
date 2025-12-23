import { SessionKeyUtil } from './session-key-util';
export class ESBRequestBodyUtil {
    apiDataService;
    constructor(apiDataService) {
        this.apiDataService = apiDataService;
        this.sessionKeyUtil = new SessionKeyUtil();
    }
    getESBRequestBody() {
        const bodyObj = {};
        const sessionData = sessionStorage;
        for (const key in sessionData) {
            if (typeof (sessionData[key]) !== 'function') {
                bodyObj[this.sessionKeyUtil.getApiKeyFromSessionKey(key)] = sessionData[key];
            }
        }
        /** store the api data in the request body */
        this.apiDataService.getAllApiData().subscribe(results => {
            for (const data of results) {
                bodyObj[data.apiKey] = data.value;
            }
        });
        return bodyObj;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNiLXJlcXVlc3QtYm9keS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi91dGlscy9lc2ItcmVxdWVzdC1ib2R5LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdwRCxNQUFNLE9BQU8sa0JBQWtCO0lBR1Y7SUFBcEIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUM7UUFDbkMsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7WUFDOUIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3RTtTQUNEO1FBRUQsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZELEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO2dCQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbEM7UUFDRixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb25LZXlVdGlsIH0gZnJvbSAnLi9zZXNzaW9uLWtleS11dGlsJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRVNCUmVxdWVzdEJvZHlVdGlsIHtcclxuXHJcblx0ZGVjbGFyZSBzZXNzaW9uS2V5VXRpbDogU2Vzc2lvbktleVV0aWw7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuc2Vzc2lvbktleVV0aWwgPSBuZXcgU2Vzc2lvbktleVV0aWwoKTtcclxuXHR9XHJcblxyXG5cdGdldEVTQlJlcXVlc3RCb2R5KCkge1xyXG5cdFx0Y29uc3QgYm9keU9iaiA9IHt9O1xyXG5cdFx0Y29uc3Qgc2Vzc2lvbkRhdGEgPSBzZXNzaW9uU3RvcmFnZTtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHNlc3Npb25EYXRhKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgKHNlc3Npb25EYXRhW2tleV0pICE9PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0Ym9keU9ialt0aGlzLnNlc3Npb25LZXlVdGlsLmdldEFwaUtleUZyb21TZXNzaW9uS2V5KGtleSldID0gc2Vzc2lvbkRhdGFba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBzdG9yZSB0aGUgYXBpIGRhdGEgaW4gdGhlIHJlcXVlc3QgYm9keSAqL1xyXG5cdFx0dGhpcy5hcGlEYXRhU2VydmljZS5nZXRBbGxBcGlEYXRhKCkuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xyXG5cdFx0XHRmb3IgKGNvbnN0IGRhdGEgb2YgcmVzdWx0cykge1xyXG5cdFx0XHRcdGJvZHlPYmpbZGF0YS5hcGlLZXldID0gZGF0YS52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGJvZHlPYmo7XHJcblx0fVxyXG59XHJcbiJdfQ==