export class SaveFieldValueUtil {
    constructor() { }
    saveListofFieldValues(apiKey, fieldValue, fieldData) {
        const fieldTypeList = [
            'Checkbox',
            'radio',
            'Switch'
        ];
        if (fieldData.additional_parameters && fieldData.unique_id === apiKey && fieldTypeList.includes(fieldData.field_type)) {
            for (const addParam of fieldData.additional_parameters) {
                const { parameter_type, value } = addParam;
                if (parameter_type && parameter_type === 'SaveFields') {
                    if (fieldValue === '1' || fieldValue === 'true') {
                        // go ahead and save it to the local storage
                        localStorage.setItem('saveFieldList', value);
                        return true;
                    }
                    else {
                        // check if there is any unique id to saved in local storgae
                        // then clean it
                        localStorage.removeItem('saveFieldList');
                        return false;
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1maWVsZC12YWx1ZS11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3V0aWxzL3NhdmUtZmllbGQtdmFsdWUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sa0JBQWtCO0lBQzlCLGdCQUFnQixDQUFDO0lBRWpCLHFCQUFxQixDQUFDLE1BQWMsRUFBRSxVQUFrQixFQUFFLFNBQWM7UUFDdkUsTUFBTSxhQUFhLEdBQUc7WUFDckIsVUFBVTtZQUNWLE9BQU87WUFDUCxRQUFRO1NBQ1IsQ0FBQztRQUNGLElBQUksU0FBUyxDQUFDLHFCQUFxQixJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssTUFBTSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RILEtBQUssTUFBTSxRQUFRLElBQUksU0FBUyxDQUFDLHFCQUFxQixFQUFFO2dCQUN2RCxNQUFNLEVBQ0wsY0FBYyxFQUNkLEtBQUssRUFDTCxHQUFHLFFBQVEsQ0FBQztnQkFDYixJQUFJLGNBQWMsSUFBSSxjQUFjLEtBQUssWUFBWSxFQUFFO29CQUN0RCxJQUFJLFVBQVUsS0FBSyxHQUFHLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTt3QkFDaEQsNENBQTRDO3dCQUM1QyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDN0MsT0FBTyxJQUFJLENBQUM7cUJBQ1o7eUJBQU07d0JBQ04sNERBQTREO3dCQUM1RCxnQkFBZ0I7d0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3pDLE9BQU8sS0FBSyxDQUFDO3FCQUNiO2lCQUNEO2FBQ0Q7U0FDRDtJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTYXZlRmllbGRWYWx1ZVV0aWwge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdHNhdmVMaXN0b2ZGaWVsZFZhbHVlcyhhcGlLZXk6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nLCBmaWVsZERhdGE6IGFueSkge1xyXG5cdFx0Y29uc3QgZmllbGRUeXBlTGlzdCA9IFtcclxuXHRcdFx0J0NoZWNrYm94JyxcclxuXHRcdFx0J3JhZGlvJyxcclxuXHRcdFx0J1N3aXRjaCdcclxuXHRcdF07XHJcblx0XHRpZiAoZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiBmaWVsZERhdGEudW5pcXVlX2lkID09PSBhcGlLZXkgJiYgZmllbGRUeXBlTGlzdC5pbmNsdWRlcyhmaWVsZERhdGEuZmllbGRfdHlwZSkpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBhZGRQYXJhbSBvZiBmaWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0cGFyYW1ldGVyX3R5cGUsXHJcblx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdH0gPSBhZGRQYXJhbTtcclxuXHRcdFx0XHRpZiAocGFyYW1ldGVyX3R5cGUgJiYgcGFyYW1ldGVyX3R5cGUgPT09ICdTYXZlRmllbGRzJykge1xyXG5cdFx0XHRcdFx0aWYgKGZpZWxkVmFsdWUgPT09ICcxJyB8fCBmaWVsZFZhbHVlID09PSAndHJ1ZScpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ28gYWhlYWQgYW5kIHNhdmUgaXQgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NhdmVGaWVsZExpc3QnLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlcmUgaXMgYW55IHVuaXF1ZSBpZCB0byBzYXZlZCBpbiBsb2NhbCBzdG9yZ2FlXHJcblx0XHRcdFx0XHRcdC8vIHRoZW4gY2xlYW4gaXRcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NhdmVGaWVsZExpc3QnKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=