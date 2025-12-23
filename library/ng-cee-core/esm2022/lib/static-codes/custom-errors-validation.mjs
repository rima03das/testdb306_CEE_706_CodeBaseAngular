export class CustomErrorsValidation {
    ceeMessages;
    customMessages;
    messages = {};
    constructor(ceeMessages, customMessages) {
        this.ceeMessages = ceeMessages;
        this.customMessages = customMessages;
        // get the message JSON and set it from custom_errors_validation
        this.messages = customMessages;
    }
    /**
     * function that reads the json object gets the user input and the field ID
     * and returns error messages based on the field if configured
     * in the src/assets/config/error_message_config.json
     * and if the the stepID matches the stepId that is given in the
     * array of customErrorMessage in the src/assets/app_config.json
     * @param fieldId the field unique ID for repeatable block field unique ID is the appDataId
     * it should look similar to <stepID>$<fieldId>$<Index>
     * @param value the user input in the following field
     */
    getMessages(fieldId, value) {
        // console.log(messages[fieldId]);
        if (!this.messages || (this.messages && !this.messages[fieldId])) {
            return [];
        }
        let multipleMessages = {};
        for (const message of Object.keys(this.messages[fieldId].errors)) {
            multipleMessages = {
                ...multipleMessages,
                ...this.switchMessages(message, this.messages[fieldId].errors[message], value)
            };
        }
        if (!Object.keys(multipleMessages).length) {
            return [];
        }
        const msgs = Object.values(multipleMessages);
        if (this.messages[fieldId].type === 'single') {
            return msgs[0];
        }
        else {
            return msgs.reduce((acc, item) => {
                return [...acc, ...item];
            }, []);
        }
    }
    // function that checks the type of the messages
    // test the value based on the type and
    // finally returns the message object based on the validation
    // if all the validation satisfies it return empty object
    switchMessages(type, data, fieldValue) {
        let obj = {};
        switch (type.toLowerCase()) {
            case 'mandatory':
                data.messages.forEach(mObj => {
                    if ((mObj.value === fieldValue) === mObj.displayOn) {
                        obj = this.storeObj(obj, data, mObj);
                    }
                });
                return this.returnProperData(obj, data);
            case 'regex':
                if (fieldValue) {
                    data.messages.forEach(mObj => {
                        const regex = new RegExp(mObj.value);
                        const test = regex.test(fieldValue);
                        // displayOn is needed to check if the message needs to be 
                        // shown when the condition gets satisfied or not
                        // default value should true
                        if (test === mObj.displayOn) {
                            obj = this.storeObj(obj, data, mObj);
                        }
                    });
                }
                return this.returnProperData(obj, data);
            case 'minlength':
                if (fieldValue) {
                    data.messages.forEach(mObj => {
                        if (fieldValue.length <= mObj.value === mObj.displayOn) {
                            obj = this.storeObj(obj, data, mObj);
                        }
                    });
                }
                return this.returnProperData(obj, data);
            case 'maxlength':
                if (fieldValue) {
                    data.messages.forEach(mObj => {
                        if (fieldValue.length >= mObj.value === mObj.displayOn) {
                            obj = this.storeObj(obj, data, mObj);
                        }
                    });
                }
                return this.returnProperData(obj, data);
            default:
                return {};
        }
    }
    /**
     * private function check if the the data is present in the object
     * @param finalObject the final object that needs to be returned back
     * @param messageData the whole message data
     * @param currObj the current validation message that is checked
     */
    storeObj(finalObject, messageData, currObj) {
        if (!finalObject[messageData.priority]) {
            finalObject[messageData.priority] = [];
        }
        // it should return the cee error object map not the error object;
        finalObject[messageData.priority].push(this.returnCEEMessageObject(currObj.messageId));
        return finalObject;
    }
    /**
     * function returns the data one th basis of the data present in the object
     * if the priority object is has length 0 then it will return
     * empty object else it will return priority object
     * @param finalObject the final object that needs to be returned back
     * @param messageData the whole message data
     */
    returnProperData(finalObject, messageData) {
        if (finalObject[messageData.priority] && Object.keys(finalObject[messageData.priority]).length) {
            return finalObject;
        }
        else {
            return {};
        }
    }
    // TODO
    /**
     * function returns the CEE Message object that is configured in the CEE Portal
     * and by mapping through the message Id
     * @param messageId the message ID
     */
    returnCEEMessageObject(messageId) {
        if (this.ceeMessages[messageId]) {
            return this.ceeMessages[messageId];
        }
        return {
            color: '',
            message_text: ''
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVycm9ycy12YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3N0YXRpYy1jb2Rlcy9jdXN0b20tZXJyb3JzLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxPQUFPLHNCQUFzQjtJQUlYO0lBQXFCO0lBRmpDLFFBQVEsR0FBUSxFQUFFLENBQUM7SUFFM0IsWUFBb0IsV0FBVyxFQUFVLGNBQWM7UUFBbkMsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBQTtRQUNuRCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUN0QixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQzlELE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMxQixLQUFLLE1BQU0sT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5RCxnQkFBZ0IsR0FBRztnQkFDZixHQUFHLGdCQUFnQjtnQkFDbkIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUM7YUFD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QUMsQ0FBQztTQUN0QztRQUNELE9BQU87WUFDSCxLQUFLLEVBQUUsRUFBRTtZQUNULFlBQVksRUFBRSxFQUFFO1NBQ25CLENBQUM7SUFDTixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIEN1c3RvbUVycm9yc1ZhbGlkYXRpb24ge1xyXG5cclxuICAgIHByaXZhdGUgbWVzc2FnZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2VlTWVzc2FnZXMsIHByaXZhdGUgY3VzdG9tTWVzc2FnZXMpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIG1lc3NhZ2UgSlNPTiBhbmQgc2V0IGl0IGZyb20gY3VzdG9tX2Vycm9yc192YWxpZGF0aW9uXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IGN1c3RvbU1lc3NhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCByZWFkcyB0aGUganNvbiBvYmplY3QgZ2V0cyB0aGUgdXNlciBpbnB1dCBhbmQgdGhlIGZpZWxkIElEXHJcbiAgICAgKiBhbmQgcmV0dXJucyBlcnJvciBtZXNzYWdlcyBiYXNlZCBvbiB0aGUgZmllbGQgaWYgY29uZmlndXJlZFxyXG4gICAgICogaW4gdGhlIHNyYy9hc3NldHMvY29uZmlnL2Vycm9yX21lc3NhZ2VfY29uZmlnLmpzb25cclxuICAgICAqIGFuZCBpZiB0aGUgdGhlIHN0ZXBJRCBtYXRjaGVzIHRoZSBzdGVwSWQgdGhhdCBpcyBnaXZlbiBpbiB0aGVcclxuICAgICAqIGFycmF5IG9mIGN1c3RvbUVycm9yTWVzc2FnZSBpbiB0aGUgc3JjL2Fzc2V0cy9hcHBfY29uZmlnLmpzb25cclxuICAgICAqIEBwYXJhbSBmaWVsZElkIHRoZSBmaWVsZCB1bmlxdWUgSUQgZm9yIHJlcGVhdGFibGUgYmxvY2sgZmllbGQgdW5pcXVlIElEIGlzIHRoZSBhcHBEYXRhSWQgXHJcbiAgICAgKiBpdCBzaG91bGQgbG9vayBzaW1pbGFyIHRvIDxzdGVwSUQ+JDxmaWVsZElkPiQ8SW5kZXg+XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHVzZXIgaW5wdXQgaW4gdGhlIGZvbGxvd2luZyBmaWVsZFxyXG4gICAgICovXHJcbiAgICBnZXRNZXNzYWdlcyhmaWVsZElkLCB2YWx1ZSk6IGFueSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVzc2FnZXNbZmllbGRJZF0pO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlcyB8fCAodGhpcy5tZXNzYWdlcyAmJiAhdGhpcy5tZXNzYWdlc1tmaWVsZElkXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbXVsdGlwbGVNZXNzYWdlcyA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzW2ZpZWxkSWRdLmVycm9ycykpIHtcclxuICAgICAgICAgICAgbXVsdGlwbGVNZXNzYWdlcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLm11bHRpcGxlTWVzc2FnZXMsXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN3aXRjaE1lc3NhZ2VzKG1lc3NhZ2UsIHRoaXMubWVzc2FnZXNbZmllbGRJZF0uZXJyb3JzW21lc3NhZ2VdLCB2YWx1ZSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhtdWx0aXBsZU1lc3NhZ2VzKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtc2dzID0gT2JqZWN0LnZhbHVlcyhtdWx0aXBsZU1lc3NhZ2VzKTtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlc1tmaWVsZElkXS50eXBlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnc1swXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNncy5yZWR1Y2UoKGFjYzogQXJyYXk8YW55PiwgaXRlbTogQXJyYXk8YW55PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIC4uLml0ZW1dO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIHRoZSB0eXBlIG9mIHRoZSBtZXNzYWdlc1xyXG4gICAgLy8gdGVzdCB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIHR5cGUgYW5kXHJcbiAgICAvLyBmaW5hbGx5IHJldHVybnMgdGhlIG1lc3NhZ2Ugb2JqZWN0IGJhc2VkIG9uIHRoZSB2YWxpZGF0aW9uXHJcbiAgICAvLyBpZiBhbGwgdGhlIHZhbGlkYXRpb24gc2F0aXNmaWVzIGl0IHJldHVybiBlbXB0eSBvYmplY3RcclxuICAgIHByaXZhdGUgc3dpdGNoTWVzc2FnZXModHlwZSwgZGF0YSwgZmllbGRWYWx1ZSkge1xyXG4gICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlICdtYW5kYXRvcnknOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5tZXNzYWdlcy5mb3JFYWNoKG1PYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobU9iai52YWx1ZSA9PT0gZmllbGRWYWx1ZSkgPT09IG1PYmouZGlzcGxheU9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHRoaXMuc3RvcmVPYmoob2JqLCBkYXRhLCBtT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJldHVyblByb3BlckRhdGEob2JqLCBkYXRhKTtcclxuICAgICAgICAgICAgY2FzZSAncmVnZXgnOlxyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1lc3NhZ2VzLmZvckVhY2gobU9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChtT2JqLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHJlZ2V4LnRlc3QoZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXlPbiBpcyBuZWVkZWQgdG8gY2hlY2sgaWYgdGhlIG1lc3NhZ2UgbmVlZHMgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3duIHdoZW4gdGhlIGNvbmRpdGlvbiBnZXRzIHNhdGlzZmllZCBvciBub3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBzaG91bGQgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCA9PT0gbU9iai5kaXNwbGF5T24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHRoaXMuc3RvcmVPYmoob2JqLCBkYXRhLCBtT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuUHJvcGVyRGF0YShvYmosIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbWlubGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tZXNzYWdlcy5mb3JFYWNoKG1PYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZS5sZW5ndGggPD0gbU9iai52YWx1ZSA9PT0gbU9iai5kaXNwbGF5T24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHRoaXMuc3RvcmVPYmoob2JqLCBkYXRhLCBtT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuUHJvcGVyRGF0YShvYmosIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbWF4bGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tZXNzYWdlcy5mb3JFYWNoKG1PYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZS5sZW5ndGggPj0gbU9iai52YWx1ZSA9PT0gbU9iai5kaXNwbGF5T24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHRoaXMuc3RvcmVPYmoob2JqLCBkYXRhLCBtT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuUHJvcGVyRGF0YShvYmosIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHByaXZhdGUgZnVuY3Rpb24gY2hlY2sgaWYgdGhlIHRoZSBkYXRhIGlzIHByZXNlbnQgaW4gdGhlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGZpbmFsT2JqZWN0IHRoZSBmaW5hbCBvYmplY3QgdGhhdCBuZWVkcyB0byBiZSByZXR1cm5lZCBiYWNrXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZURhdGEgdGhlIHdob2xlIG1lc3NhZ2UgZGF0YVxyXG4gICAgICogQHBhcmFtIGN1cnJPYmogdGhlIGN1cnJlbnQgdmFsaWRhdGlvbiBtZXNzYWdlIHRoYXQgaXMgY2hlY2tlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0b3JlT2JqKGZpbmFsT2JqZWN0LCBtZXNzYWdlRGF0YSwgY3Vyck9iaikge1xyXG4gICAgICAgIGlmICghZmluYWxPYmplY3RbbWVzc2FnZURhdGEucHJpb3JpdHldKSB7XHJcbiAgICAgICAgICAgIGZpbmFsT2JqZWN0W21lc3NhZ2VEYXRhLnByaW9yaXR5XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpdCBzaG91bGQgcmV0dXJuIHRoZSBjZWUgZXJyb3Igb2JqZWN0IG1hcCBub3QgdGhlIGVycm9yIG9iamVjdDtcclxuICAgICAgICBmaW5hbE9iamVjdFttZXNzYWdlRGF0YS5wcmlvcml0eV0ucHVzaChcclxuICAgICAgICAgICAgdGhpcy5yZXR1cm5DRUVNZXNzYWdlT2JqZWN0KGN1cnJPYmoubWVzc2FnZUlkKSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyB0aGUgZGF0YSBvbmUgdGggYmFzaXMgb2YgdGhlIGRhdGEgcHJlc2VudCBpbiB0aGUgb2JqZWN0XHJcbiAgICAgKiBpZiB0aGUgcHJpb3JpdHkgb2JqZWN0IGlzIGhhcyBsZW5ndGggMCB0aGVuIGl0IHdpbGwgcmV0dXJuXHJcbiAgICAgKiBlbXB0eSBvYmplY3QgZWxzZSBpdCB3aWxsIHJldHVybiBwcmlvcml0eSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBmaW5hbE9iamVjdCB0aGUgZmluYWwgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgcmV0dXJuZWQgYmFja1xyXG4gICAgICogQHBhcmFtIG1lc3NhZ2VEYXRhIHRoZSB3aG9sZSBtZXNzYWdlIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5Qcm9wZXJEYXRhKGZpbmFsT2JqZWN0LCBtZXNzYWdlRGF0YSkge1xyXG4gICAgICAgIGlmIChmaW5hbE9iamVjdFttZXNzYWdlRGF0YS5wcmlvcml0eV0gJiYgT2JqZWN0LmtleXMoZmluYWxPYmplY3RbbWVzc2FnZURhdGEucHJpb3JpdHldKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsT2JqZWN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIHRoZSBDRUUgTWVzc2FnZSBvYmplY3QgdGhhdCBpcyBjb25maWd1cmVkIGluIHRoZSBDRUUgUG9ydGFsXHJcbiAgICAgKiBhbmQgYnkgbWFwcGluZyB0aHJvdWdoIHRoZSBtZXNzYWdlIElkXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZUlkIHRoZSBtZXNzYWdlIElEXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmV0dXJuQ0VFTWVzc2FnZU9iamVjdChtZXNzYWdlSWQpIHtcclxuICAgICAgICBpZiAodGhpcy5jZWVNZXNzYWdlc1ttZXNzYWdlSWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNlZU1lc3NhZ2VzW21lc3NhZ2VJZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnJyxcclxuICAgICAgICAgICAgbWVzc2FnZV90ZXh0OiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=