import * as moment from 'moment';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
export class CommonUtil {
    constructor() { }
    getValue(data) {
        if (typeof (data) === 'string') {
            const value = data.split('||');
            if (value.length > 1) {
                return value[1];
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    getTitlesOptions(data) {
        if (typeof (data) === 'string') {
            const value = data.split('||');
            if (value.length > 2) {
                return value[2];
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    getDescriptionOptions(data) {
        if (typeof (data) === 'string') {
            const value = data.split('||');
            if (value.length > 3) {
                return value[3];
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    getID(data) {
        if (typeof (data) === 'string') {
            const value = data.split('||');
            if (value.length > 1) {
                return value[0].trim();
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    /**
     * function that returns the handler name from the key that is concatenated with ## handler name
     * @param data basically the api key example handlerName##key
     */
    getHandlerName(data) {
        if (typeof (data) === 'string') {
            const value = data.split('##');
            if (value.length > 1) {
                return value[0].trim();
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    /**
     * function that returns the api key from the key that is concatenated with ## handler name
     * @param data basically the api key example handlerName##key
     */
    getAPIKey(data) {
        if (typeof (data) === 'string') {
            const value = data.split('##');
            if (value.length > 1) {
                return value[1].trim();
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    getPossibleId(data) {
        if (typeof (data) === 'string') {
            const array = data.split('||');
            if (array.length > 1) {
                return array[0].trim();
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    getPossibleValue(data) {
        if (typeof (data) === 'string') {
            const array = data.split('||');
            if (array.length > 1) {
                return array[1].trim();
            }
            else {
                return data;
            }
        }
        else {
            return data;
        }
    }
    implodeClassName(data) {
        if (data) {
            return String(data).split(',').map(s => s.trim()).join(' ');
        }
        else {
            return '';
        }
    }
    blockBootstrapProcess(blockData) {
        if (localStorage.getItem('is_bootstrap') === 'true') {
            if (blockData.block_fields) {
                for (let i = 0; i < blockData.block_fields.length; i++) {
                    const field = blockData.block_fields[i];
                    if (field.field_style) {
                        if (blockData.block_style && blockData.block_style.bootstrap_class_name && !field.field_style.bootstrap_class_name) {
                            field.field_style.bootstrap_class_name = blockData.block_style.bootstrap_class_name;
                        }
                        field.field_style.bootstrap_class_name = this.implodeClassName(field.field_style.bootstrap_class_name);
                        field.field_style.custom_class_name = this.implodeClassName(field.field_style.custom_class_name);
                    }
                }
            }
            if (blockData.block_style) {
                blockData.block_style.custom_class_name = this.implodeClassName(blockData.block_style.custom_class_name);
            }
        }
        return blockData;
    }
    bootstrapColClass(data, isBootstrap = false, templateClass = '', bootstrapConditionalOutput = true) {
        if (data) {
            return bootstrapConditionalOutput ? data : (isBootstrap ? 'col-12' : '');
        }
        else {
            return templateClass ? templateClass : (isBootstrap ? 'col-12' : '');
        }
    }
    /**
     * function to validate date string with multiple format
     * @param dateString input date string
     * @param dateFormat date format to validate
     */
    isValidDateStr(dateString, dateFormat = 'MM/DD/YYYY', withTime = false) {
        if (dateString.hasOwnProperty('date')) {
            return true;
        }
        let dfregx = dateFormat
            .replace(/\//g, '\\/')
            .replace(/\-/g, '\\-')
            .replace(/\ /g, '\\ ')
            .replace('MM', '\\d{1,2}')
            .replace('M', '\\d{1,2}')
            .replace('DD', '\\d{1,2}')
            .replace('D', '\\d{1,2}')
            .replace('YYYY', '\\d{4}')
            .replace('YY', '\\d{2}');
        if (withTime) {
            dfregx = dfregx.replace('HH', '\\d{2}')
                .replace('H', '\\d{1,2}')
                .replace('hh', '\\d{2}')
                .replace('h', '\\d{1,2}')
                .replace('mm', '\\d{2}')
                .replace('m', '\\d{1,2}')
                .replace('ss', '\\d{2}')
                .replace('s', '\\d{1,2}')
                .replace('A', '(AM|PM)')
                .replace('a', '(am|pm)');
        }
        let dateRegex = new RegExp(dfregx);
        // First check for the pattern
        if (!dateRegex.test(dateString))
            return false;
        // Parse the date parts to integers
        var partFormats = dateFormat.split(dateFormat.match(/[\/\-\ ]/gm)[0]);
        var parts = !Array.isArray(dateString) ? dateString.split(dateFormat.match(/[\/\-\ ]/gm)[0]) : dateString[0].split(dateFormat.match(/[\/\-\ ]/gm)[0]);
        var day = parseInt(parts[partFormats.findIndex(v => v === 'DD')], 10);
        var month = parseInt(parts[partFormats.findIndex(v => v === 'MM')], 10);
        var year = parseInt(parts[partFormats.findIndex(v => v === 'YYYY')], 10);
        // Check the ranges of month and year
        if (year < 1000 || year > 3000 || month == 0 || month > 12)
            return false;
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Adjust for leap years
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;
        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    }
    ;
    /**
     * function to validate time string with multiple format
     * @param dateString input date string
     * @param dateFormat date format to validate
     */
    isValidTimeStr(timeString, dateFormat = 'h:mm A') {
        let timeRegex = new RegExp(dateFormat
            .replace(/\ /g, '\\ ')
            .replace('HH', '\\d{2}')
            .replace('H', '\\d{1,2}')
            .replace('hh', '\\d{2}')
            .replace('h', '\\d{1,2}')
            .replace('mm', '\\d{2}')
            .replace('m', '\\d{1,2}')
            .replace('ss', '\\d{2}')
            .replace('s', '\\d{1,2}')
            .replace('A', '(AM|PM)')
            .replace('a', '(am|pm)'));
        // First check for the pattern
        if (!timeRegex.test(timeString))
            return false;
        else
            return true;
    }
    ;
    /**
     * function to parse time with multiple format
     * @param timeString input time string
     * @param dateFormat date format to return
     */
    parseTime(timeString, dateFormat) {
        var d = new Date();
        if (!timeString || typeof timeString !== 'string') {
            return '';
        }
        var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p|P?)/);
        d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
        d.setMinutes(parseInt(time[2]) || 0);
        return moment.default(d.toISOString()).format(dateFormat);
    }
    escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    setFilterKeys(dataSource, fKeys) {
        fKeys = fKeys.filter(str => str);
        dataSource.filterPredicate = (data, filter) => {
            // for (const col in data) {
            //     if ((fKeys.length === 0 || fKeys.includes(col)) && data[col].toString().toLowerCase().indexOf(filter) != -1) {
            //         found = true;
            //     }
            // }
            return this.setFilterPredicateInner(data, filter, fKeys);
        };
    }
    setFilterPredicateInner(data, filter, fKeys, found = false) {
        for (const col in data) {
            if (Array.isArray(data[col])) {
                for (const innerRow of data[col]) {
                    if (this.setFilterPredicateInner(innerRow, filter, fKeys, found)) {
                        found = true;
                    }
                }
            }
            else {
                if ((fKeys.length === 0 || fKeys.includes(col)) && data[col].toString().toLowerCase().indexOf(filter) != -1) {
                    found = true;
                }
            }
        }
        return found;
    }
    isValidDate(d) {
        return d instanceof Date && !isNaN(d.getDate());
    }
    // public adjustTZ(dateTime: Date) {
    //     if (this.isValidDate(dateTime) && dateTime.getTimezoneOffset() > 0) {
    //         let dtString = new Date(dateTime.toISOString().slice(0, 10));
    //         dtString.setMinutes(dtString.getMinutes() + dtString.getTimezoneOffset());
    //         return dtString;
    //     }
    //     return dateTime;
    // }
    adjustTZ(dateTime) {
        if (this.isValidDate(dateTime)) {
            // Convert the given date to the user's local time zone
            const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            // Get the local time in ISO format and create a new Date object
            const localTimeString = dateTime.toLocaleString('en-US', { timeZone: userTimeZone });
            return new Date(localTimeString);
        }
        return dateTime;
    }
    // public adjustTZ(dateTime: Date) {
    //     console.log('dateTime')
    //     if (this.isValidDate(dateTime) && dateTime.getTimezoneOffset() > 0) {
    //         //let dtString = new Date(dateTime.toISOString().slice(0, 10));
    //         let dtString = new Date(dateTime.toISOString());
    //         //dtString.setMinutes(dtString.getMinutes() + dtString.getTimezoneOffset());
    //        // dtString.setMinutes(dtString.getMinutes());
    //         return dtString;
    //     }
    //     return dateTime;
    // }
    /**
     * the api key that is set to dynamic
     * @param maskstr the api key string
     * @param maskpostion then position you want mask
     * @param mask the character of masking
     * @param masknum then number character you want to mask
     * @param extraTitle the optional extra title
     * @param extraTitlePosition then option extra title position
     */
    getMaskedData(maskstr, maskpostion, mask, masknum, extraTitle, extraTitlePosition) {
        let str;
        if (extraTitle && extraTitlePosition) {
            if (extraTitlePosition == "s") {
                str = extraTitle + maskstr;
            }
            if (extraTitlePosition == "e") {
                str = maskstr + extraTitle;
            }
        }
        else {
            str = maskstr;
        }
        let strippedStr = str?.replace(/\s+/g, '');
        let maskedStr;
        if (maskpostion === 'end') {
            maskedStr = strippedStr?.slice(0, -masknum) + mask?.repeat(masknum);
        }
        if (maskpostion === 'start') {
            maskedStr = mask?.repeat(masknum) + strippedStr?.slice(masknum);
        }
        if (maskpostion === 'both') {
            let maskedStr2 = mask?.repeat(masknum) + strippedStr?.slice(masknum);
            maskedStr = maskedStr2?.slice(0, -masknum) + mask?.repeat(masknum);
        }
        if (maskpostion === 'all') {
            maskedStr = mask?.repeat(str.length) + strippedStr?.slice(masknum.length);
        }
        let outputStr = '';
        let j = 0;
        for (let i = 0; i < str?.length; i++) {
            if (str[i] === ' ') {
                outputStr += ' ';
            }
            else {
                outputStr += maskedStr[j];
                j++;
            }
        }
        return outputStr;
    }
    setAppConfigValue(arg0) {
        if (typeof arg0 === 'object') {
            if (Array.isArray(arg0)) {
                for (let i = 0; i < arg0.length; i++) {
                    arg0[i] = this.setAppConfigValue(arg0[i]);
                }
            }
            else {
                for (const arg1 in arg0) {
                    arg0[arg1] = this.setAppConfigValue(arg0[arg1]);
                }
            }
        }
        else if (typeof arg0 === 'string') {
            const reg = /\${.+}/g;
            let matchArg;
            while ((matchArg = reg.exec(arg0)) !== null) {
                const matchArgValue = matchArg[0].replace('${', '').replace('}', '');
                const matchArgValueData = localStorage.getItem(matchArgValue);
                if (matchArgValueData) {
                    arg0 = arg0.replace('${' + matchArgValue + '}', matchArgValueData);
                }
            }
        }
        return arg0;
    }
    // *************************************************
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
    async getBase64ImageFromUrl(imageUrl) {
        var res = await fetch(imageUrl);
        var blob = await res.blob();
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                resolve(reader.result);
            }, false);
            reader.onerror = () => {
                return reject(this);
            };
            reader.readAsDataURL(blob);
        });
    }
    async processZipFile(AttachmentFiles) {
        const zip = new JSZip();
        for (const attachmentFile of AttachmentFiles) {
            if (attachmentFile.url) {
                const result = await this.getBase64ImageFromUrl(attachmentFile.url);
                const base64result = result.split(',')[1];
                zip.file(attachmentFile.name, base64result, { base64: true });
            }
        }
        zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, Date.now() + ".zip");
        });
    }
    /**
     * Extracts the last two values from a given string.
     *
     * @param str - The input string
     * @param delimiter - The delimiter string
     *
     * @returns An object containing two properties. If the extraction fails returns `null`.
     */
    extractLastValues(str, delimiter) {
        const regex = new RegExp(`\\${delimiter}(\\d+)\\${delimiter}(\\d+)$`);
        // const regex = /\$(\d+)\$(\d+)$/;
        const match = str.match(regex);
        if (match) {
            const a = match[1];
            const b = match[2];
            return { a, b };
        }
        return null;
    }
    /**
     * Extracts the lastvalue from a given string.
     *
     * @param str - The input string
     * @param delimiter - The delimiter string
     *
     * @returns An object containing two properties. If the extraction fails returns `null`.
     */
    extractLastValue(str, delimiter) {
        // const regex = /\$(\d+)$/;
        const regex = new RegExp(`\\${delimiter}(\\d+)$`);
        const match = str.match(regex);
        if (match) {
            return match[1];
        }
        return null;
    }
    /**
    * Find indices from a given string `unique_id` and substitute [*] in key with indices once by one.
    *
    * @param key - The string in which to replace [*] with indices
    * @param unique_id - The string in which to search indices.
    * @param delimiter - The delimiter string
    *
    * @returns A new string with all instances of `key` replaced by asterisks.
    */
    findIndicesAndSubstituteStars(key, unique_id, delimiter) {
        const result = this.extractLastValues(unique_id, delimiter);
        if (result != null) {
            key = this.substituteAlternateStars(key, result.a, result.b);
        }
        else {
            const ind = this.extractLastValue(unique_id, delimiter);
            if (ind != null) {
                key = this.substituteAllStars(key, ind);
            }
        }
        return key;
    }
    /**
     * Replaces all occurrences of [*] with the string `i` in the string `str`.
     *
     * @param str - The input string in which substitutions are to be made.
     * @param i - The character to be replaced by asterisks [*].
     * @param delimiter - The delimiter string
     *
     * @returns A new string with all instances of `i` replaced by asterisks.
     */
    substituteAllStars(str, i) {
        const pattern = '\\[\\*\\]';
        const result = str.replace(new RegExp(pattern, 'g'), `[${i}]`);
        return result;
    }
    /**
     * Substitutes alternating stars in a string with [*].
     *
     * @param str - The string in which substitutions are to be made.
     * @param i - The character to replace with first search of [*].
     * @param j - The character to replace with second search of [*].
     * @returns A new string with alternating replacements of `i` by asterisks and `j` unchanged.
     */
    substituteAlternateStars(str, i, j) {
        let result = '';
        let insidePercent = false;
        let toggle = true;
        let tempSegment = '';
        // iterate through each character in the string
        for (let k = 0; k < str.length; k++) {
            const char = str[k];
            if (char === '%' && !insidePercent) {
                // start of a %...% block
                insidePercent = true;
                result += char;
            }
            else if (char === '%' && insidePercent) {
                // end of a %...% block
                insidePercent = false;
                result += tempSegment + char;
                tempSegment = ''; // Clear tempSegment for the next block
            }
            else if (insidePercent) {
                // inside a %...% block, so handle replacements
                if (char === '[' && str[k + 1] === '*' && str[k + 2] === ']') {
                    tempSegment += `[${toggle ? i : j}]`; // Add the replacement
                    toggle = !toggle; // Alternate between i and j
                    k += 2; // Skip "]"
                }
                else {
                    tempSegment += char; // non [*] characters in the segment
                }
            }
            else {
                // outside of %...% blocks, append the character
                result += char;
            }
        }
        return result;
    }
    // ****************** MatDialog in Dialog (StepModal) *******************************
    /**
     * Search dialog in DOM and find the stepModal if exist
     *
     * @returns StepModal html element if found else undefined
     */
    getStepModalDialogIfExist() {
        const dialogElements = document.getElementsByTagName('dialog');
        for (let i = 0; i < dialogElements.length; i++) {
            const dialog = dialogElements[i];
            if (dialog.id.includes("stepModal-")) {
                return dialog;
            }
        }
    }
    /**
     * Find and move the MatDialog in DOM from body to stepModal if exists.
     * cdk-overlay-container is used to find the MatDialog
     *
     * @returns StepModal html element if found else undefined
     */
    moveMatDialogToStepModalIfExist() {
        let stepModal = this.getStepModalDialogIfExist();
        if (stepModal) {
            const dialogContainer = document.querySelector('.cdk-overlay-container');
            if (dialogContainer) {
                stepModal.appendChild(dialogContainer);
            }
        }
    }
    /**
     * Move the MatDialog in DOM from stepModal to body if exists.
     * cdk-overlay-container is used to find the MatDialog.
     *
     * @returns StepModal html element if found else undefined
     */
    moveMatDialogToBody() {
        let stepModal = this.getStepModalDialogIfExist();
        const body = document.getElementsByTagName('body');
        if (stepModal && body && body.length > 0) {
            const dialogContainer = document.querySelector('.cdk-overlay-container');
            if (dialogContainer) {
                body[0].appendChild(dialogContainer);
            }
        }
    }
    // Custom function to format large numbers without losing precision
    formatNumber(value) {
        if (!value)
            return '';
        const stringValue = String(value);
        // Prevent JavaScript from modifying numbers by keeping them as a string
        return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvdXRpbHMvY29tbW9uLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFcEMsTUFBTSxPQUFPLFVBQVU7SUFDbkIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUSxDQUFDLElBQVM7UUFDZCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBUztRQUN0QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7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QUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEosSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekUscUNBQXFDO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDdEQsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRW5FLHdCQUF3QjtRQUN4QixJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFD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LENBQUM7WUFDekUsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pCLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDMUM7U0FDSjtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG1CQUFtQjtRQUNmLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFHLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3pFLElBQUksZUFBZSxFQUFFO2dCQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLFlBQVksQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLHdFQUF3RTtRQUN4RSxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIGFzIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uVXRpbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGdldFZhbHVlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEuc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZXNPcHRpb25zKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEuc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbMl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjcmlwdGlvbk9wdGlvbnMoZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YS5zcGxpdCgnfHwnKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVszXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldElEKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEuc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGhhbmRsZXIgbmFtZSBmcm9tIHRoZSBrZXkgdGhhdCBpcyBjb25jYXRlbmF0ZWQgd2l0aCAjIyBoYW5kbGVyIG5hbWVcclxuICAgICAqIEBwYXJhbSBkYXRhIGJhc2ljYWxseSB0aGUgYXBpIGtleSBleGFtcGxlIGhhbmRsZXJOYW1lIyNrZXlcclxuICAgICAqL1xyXG4gICAgZ2V0SGFuZGxlck5hbWUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YS5zcGxpdCgnIyMnKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVswXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYXBpIGtleSBmcm9tIHRoZSBrZXkgdGhhdCBpcyBjb25jYXRlbmF0ZWQgd2l0aCAjIyBoYW5kbGVyIG5hbWVcclxuICAgICAqIEBwYXJhbSBkYXRhIGJhc2ljYWxseSB0aGUgYXBpIGtleSBleGFtcGxlIGhhbmRsZXJOYW1lIyNrZXlcclxuICAgICAqL1xyXG4gICAgZ2V0QVBJS2V5KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGEuc3BsaXQoJyMjJyk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zc2libGVJZChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIChkYXRhKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBkYXRhLnNwbGl0KCd8fCcpO1xyXG4gICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5WzBdLnRyaW0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc3NpYmxlVmFsdWUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZGF0YS5zcGxpdCgnfHwnKTtcclxuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbXBsb2RlQ2xhc3NOYW1lKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoZGF0YSkuc3BsaXQoJywnKS5tYXAocyA9PiBzLnRyaW0oKSkuam9pbignICcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmxvY2tCb290c3RyYXBQcm9jZXNzKGJsb2NrRGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIGlmIChibG9ja0RhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrRGF0YS5ibG9ja19maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGJsb2NrRGF0YS5ibG9ja19maWVsZHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0RhdGEuYmxvY2tfc3R5bGUgJiYgYmxvY2tEYXRhLmJsb2NrX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lICYmICFmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUgPSBibG9ja0RhdGEuYmxvY2tfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUgPSB0aGlzLmltcGxvZGVDbGFzc05hbWUoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSA9IHRoaXMuaW1wbG9kZUNsYXNzTmFtZShmaWVsZC5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChibG9ja0RhdGEuYmxvY2tfc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YS5ibG9ja19zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSA9IHRoaXMuaW1wbG9kZUNsYXNzTmFtZShibG9ja0RhdGEuYmxvY2tfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBibG9ja0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYm9vdHN0cmFwQ29sQ2xhc3MoZGF0YTogYW55LCBpc0Jvb3RzdHJhcDogYm9vbGVhbiA9IGZhbHNlLCB0ZW1wbGF0ZUNsYXNzOiBzdHJpbmcgPSAnJywgYm9vdHN0cmFwQ29uZGl0aW9uYWxPdXRwdXQ6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJvb3RzdHJhcENvbmRpdGlvbmFsT3V0cHV0ID8gZGF0YSA6IChpc0Jvb3RzdHJhcCA/ICdjb2wtMTInIDogJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUNsYXNzID8gdGVtcGxhdGVDbGFzcyA6IChpc0Jvb3RzdHJhcCA/ICdjb2wtMTInIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIGRhdGUgc3RyaW5nIHdpdGggbXVsdGlwbGUgZm9ybWF0XHJcbiAgICAgKiBAcGFyYW0gZGF0ZVN0cmluZyBpbnB1dCBkYXRlIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGRhdGVGb3JtYXQgZGF0ZSBmb3JtYXQgdG8gdmFsaWRhdGVcclxuICAgICAqL1xyXG4gICAgaXNWYWxpZERhdGVTdHIoZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnTU0vREQvWVlZWScsIHdpdGhUaW1lID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoZGF0ZVN0cmluZy5oYXNPd25Qcm9wZXJ0eSgnZGF0ZScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGZyZWd4ID0gZGF0ZUZvcm1hdFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwvL2csICdcXFxcLycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJ1xcXFwtJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcIC9nLCAnXFxcXCAnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnTU0nLCAnXFxcXGR7MSwyfScpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdNJywgJ1xcXFxkezEsMn0nKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnREQnLCAnXFxcXGR7MSwyfScpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdEJywgJ1xcXFxkezEsMn0nKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnWVlZWScsICdcXFxcZHs0fScpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdZWScsICdcXFxcZHsyfScpO1xyXG4gICAgICAgIGlmICh3aXRoVGltZSkge1xyXG4gICAgICAgICAgICBkZnJlZ3ggPSBkZnJlZ3gucmVwbGFjZSgnSEgnLCAnXFxcXGR7Mn0nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ0gnLCAnXFxcXGR7MSwyfScpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnaGgnLCAnXFxcXGR7Mn0nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2gnLCAnXFxcXGR7MSwyfScpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnbW0nLCAnXFxcXGR7Mn0nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ20nLCAnXFxcXGR7MSwyfScpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnc3MnLCAnXFxcXGR7Mn0nKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3MnLCAnXFxcXGR7MSwyfScpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnQScsICcoQU18UE0pJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhJywgJyhhbXxwbSknKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKGRmcmVneCk7XHJcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgZm9yIHRoZSBwYXR0ZXJuXHJcbiAgICAgICAgaWYgKCFkYXRlUmVnZXgudGVzdChkYXRlU3RyaW5nKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBQYXJzZSB0aGUgZGF0ZSBwYXJ0cyB0byBpbnRlZ2Vyc1xyXG4gICAgICAgIHZhciBwYXJ0Rm9ybWF0cyA9IGRhdGVGb3JtYXQuc3BsaXQoZGF0ZUZvcm1hdC5tYXRjaCgvW1xcL1xcLVxcIF0vZ20pWzBdKTtcclxuICAgICAgICB2YXIgcGFydHMgPSAhQXJyYXkuaXNBcnJheShkYXRlU3RyaW5nKSA/IGRhdGVTdHJpbmcuc3BsaXQoZGF0ZUZvcm1hdC5tYXRjaCgvW1xcL1xcLVxcIF0vZ20pWzBdKSA6IGRhdGVTdHJpbmdbMF0uc3BsaXQoZGF0ZUZvcm1hdC5tYXRjaCgvW1xcL1xcLVxcIF0vZ20pWzBdKTtcclxuXHJcbiAgICAgICAgdmFyIGRheSA9IHBhcnNlSW50KHBhcnRzW3BhcnRGb3JtYXRzLmZpbmRJbmRleCh2ID0+IHYgPT09ICdERCcpXSwgMTApO1xyXG4gICAgICAgIHZhciBtb250aCA9IHBhcnNlSW50KHBhcnRzW3BhcnRGb3JtYXRzLmZpbmRJbmRleCh2ID0+IHYgPT09ICdNTScpXSwgMTApO1xyXG4gICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQocGFydHNbcGFydEZvcm1hdHMuZmluZEluZGV4KHYgPT4gdiA9PT0gJ1lZWVknKV0sIDEwKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJhbmdlcyBvZiBtb250aCBhbmQgeWVhclxyXG4gICAgICAgIGlmICh5ZWFyIDwgMTAwMCB8fCB5ZWFyID4gMzAwMCB8fCBtb250aCA9PSAwIHx8IG1vbnRoID4gMTIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIG1vbnRoTGVuZ3RoID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgZm9yIGxlYXAgeWVhcnNcclxuICAgICAgICBpZiAoeWVhciAlIDQwMCA9PSAwIHx8ICh5ZWFyICUgMTAwICE9IDAgJiYgeWVhciAlIDQgPT0gMCkpXHJcbiAgICAgICAgICAgIG1vbnRoTGVuZ3RoWzFdID0gMjk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHRoZSByYW5nZSBvZiB0aGUgZGF5XHJcbiAgICAgICAgcmV0dXJuIGRheSA+IDAgJiYgZGF5IDw9IG1vbnRoTGVuZ3RoW21vbnRoIC0gMV07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gdmFsaWRhdGUgdGltZSBzdHJpbmcgd2l0aCBtdWx0aXBsZSBmb3JtYXRcclxuICAgICAqIEBwYXJhbSBkYXRlU3RyaW5nIGlucHV0IGRhdGUgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCBkYXRlIGZvcm1hdCB0byB2YWxpZGF0ZVxyXG4gICAgICovXHJcbiAgICBpc1ZhbGlkVGltZVN0cih0aW1lU3RyaW5nOiBzdHJpbmcsIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdoOm1tIEEnKSB7XHJcbiAgICAgICAgbGV0IHRpbWVSZWdleCA9IG5ldyBSZWdFeHAoZGF0ZUZvcm1hdFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwgL2csICdcXFxcICcpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdISCcsICdcXFxcZHsyfScpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdIJywgJ1xcXFxkezEsMn0nKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnaGgnLCAnXFxcXGR7Mn0nKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnaCcsICdcXFxcZHsxLDJ9JylcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ21tJywgJ1xcXFxkezJ9JylcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ20nLCAnXFxcXGR7MSwyfScpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdzcycsICdcXFxcZHsyfScpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCdzJywgJ1xcXFxkezEsMn0nKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgnQScsICcoQU18UE0pJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ2EnLCAnKGFtfHBtKScpXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBGaXJzdCBjaGVjayBmb3IgdGhlIHBhdHRlcm5cclxuICAgICAgICBpZiAoIXRpbWVSZWdleC50ZXN0KHRpbWVTdHJpbmcpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byBwYXJzZSB0aW1lIHdpdGggbXVsdGlwbGUgZm9ybWF0XHJcbiAgICAgKiBAcGFyYW0gdGltZVN0cmluZyBpbnB1dCB0aW1lIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGRhdGVGb3JtYXQgZGF0ZSBmb3JtYXQgdG8gcmV0dXJuXHJcbiAgICAgKi9cclxuICAgIHBhcnNlVGltZSh0aW1lU3RyaW5nLCBkYXRlRm9ybWF0KSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGlmICghdGltZVN0cmluZyB8fCB0eXBlb2YgdGltZVN0cmluZyAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGltZSA9IHRpbWVTdHJpbmcubWF0Y2goLyhcXGQrKSg/OjooXFxkXFxkKSk/XFxzKihwfFA/KS8pO1xyXG4gICAgICAgIGQuc2V0SG91cnMocGFyc2VJbnQodGltZVsxXSkgKyAodGltZVszXSA/IDEyIDogMCkpO1xyXG4gICAgICAgIGQuc2V0TWludXRlcyhwYXJzZUludCh0aW1lWzJdKSB8fCAwKTtcclxuICAgICAgICByZXR1cm4gbW9tZW50LmRlZmF1bHQoZC50b0lTT1N0cmluZygpKS5mb3JtYXQoZGF0ZUZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXNjYXBlUmVnRXhwID0gc3RyID0+IHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpXHJcblxyXG4gICAgc2V0RmlsdGVyS2V5cyhkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PiwgZktleXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgZktleXMgPSBmS2V5cy5maWx0ZXIoc3RyID0+IHN0cik7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSAoZGF0YTogRWxlbWVudCwgZmlsdGVyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgLy8gZm9yIChjb25zdCBjb2wgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKChmS2V5cy5sZW5ndGggPT09IDAgfHwgZktleXMuaW5jbHVkZXMoY29sKSkgJiYgZGF0YVtjb2xdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgIT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0RmlsdGVyUHJlZGljYXRlSW5uZXIoZGF0YSwgZmlsdGVyLCBmS2V5cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEZpbHRlclByZWRpY2F0ZUlubmVyKGRhdGEsIGZpbHRlciwgZktleXMsIGZvdW5kID0gZmFsc2UpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFbY29sXSkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJSb3cgb2YgZGF0YVtjb2xdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0RmlsdGVyUHJlZGljYXRlSW5uZXIoaW5uZXJSb3csIGZpbHRlciwgZktleXMsIGZvdW5kKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKChmS2V5cy5sZW5ndGggPT09IDAgfHwgZktleXMuaW5jbHVkZXMoY29sKSkgJiYgZGF0YVtjb2xdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNWYWxpZERhdGUoZCkge1xyXG4gICAgICAgIHJldHVybiBkIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4oZC5nZXREYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBhZGp1c3RUWihkYXRlVGltZTogRGF0ZSkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmlzVmFsaWREYXRlKGRhdGVUaW1lKSAmJiBkYXRlVGltZS5nZXRUaW1lem9uZU9mZnNldCgpID4gMCkge1xyXG4gICAgLy8gICAgICAgICBsZXQgZHRTdHJpbmcgPSBuZXcgRGF0ZShkYXRlVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XHJcbiAgICAvLyAgICAgICAgIGR0U3RyaW5nLnNldE1pbnV0ZXMoZHRTdHJpbmcuZ2V0TWludXRlcygpICsgZHRTdHJpbmcuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBkdFN0cmluZztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGRhdGVUaW1lO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBhZGp1c3RUWihkYXRlVGltZTogRGF0ZSk6IERhdGUge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWREYXRlKGRhdGVUaW1lKSkge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBnaXZlbiBkYXRlIHRvIHRoZSB1c2VyJ3MgbG9jYWwgdGltZSB6b25lXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJUaW1lWm9uZSA9IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGxvY2FsIHRpbWUgaW4gSVNPIGZvcm1hdCBhbmQgY3JlYXRlIGEgbmV3IERhdGUgb2JqZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVGltZVN0cmluZyA9IGRhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgdGltZVpvbmU6IHVzZXJUaW1lWm9uZSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGxvY2FsVGltZVN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRlVGltZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gcHVibGljIGFkanVzdFRaKGRhdGVUaW1lOiBEYXRlKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2RhdGVUaW1lJylcclxuICAgIC8vICAgICBpZiAodGhpcy5pc1ZhbGlkRGF0ZShkYXRlVGltZSkgJiYgZGF0ZVRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSA+IDApIHtcclxuICAgIC8vICAgICAgICAgLy9sZXQgZHRTdHJpbmcgPSBuZXcgRGF0ZShkYXRlVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XHJcbiAgICAvLyAgICAgICAgIGxldCBkdFN0cmluZyA9IG5ldyBEYXRlKGRhdGVUaW1lLnRvSVNPU3RyaW5nKCkpO1xyXG4gICAgLy8gICAgICAgICAvL2R0U3RyaW5nLnNldE1pbnV0ZXMoZHRTdHJpbmcuZ2V0TWludXRlcygpICsgZHRTdHJpbmcuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XHJcbiAgICAvLyAgICAgICAgLy8gZHRTdHJpbmcuc2V0TWludXRlcyhkdFN0cmluZy5nZXRNaW51dGVzKCkpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gZHRTdHJpbmc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBkYXRlVGltZTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgYXBpIGtleSB0aGF0IGlzIHNldCB0byBkeW5hbWljXHJcbiAgICAgKiBAcGFyYW0gbWFza3N0ciB0aGUgYXBpIGtleSBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBtYXNrcG9zdGlvbiB0aGVuIHBvc2l0aW9uIHlvdSB3YW50IG1hc2tcclxuICAgICAqIEBwYXJhbSBtYXNrIHRoZSBjaGFyYWN0ZXIgb2YgbWFza2luZ1xyXG4gICAgICogQHBhcmFtIG1hc2tudW0gdGhlbiBudW1iZXIgY2hhcmFjdGVyIHlvdSB3YW50IHRvIG1hc2tcclxuICAgICAqIEBwYXJhbSBleHRyYVRpdGxlIHRoZSBvcHRpb25hbCBleHRyYSB0aXRsZSBcclxuICAgICAqIEBwYXJhbSBleHRyYVRpdGxlUG9zaXRpb24gdGhlbiBvcHRpb24gZXh0cmEgdGl0bGUgcG9zaXRpb25cclxuICAgICAqL1xyXG5cclxuICAgIGdldE1hc2tlZERhdGEobWFza3N0ciwgbWFza3Bvc3Rpb24sIG1hc2ssIG1hc2tudW0sIGV4dHJhVGl0bGU/LCBleHRyYVRpdGxlUG9zaXRpb24/KXtcclxuICAgICAgICBsZXQgc3RyO1xyXG4gICAgICAgIGlmKGV4dHJhVGl0bGUgJiYgZXh0cmFUaXRsZVBvc2l0aW9uKXtcclxuICAgICAgICAgICAgaWYoZXh0cmFUaXRsZVBvc2l0aW9uID09IFwic1wiKXtcclxuICAgICAgICAgICAgICAgIHN0ciA9IGV4dHJhVGl0bGUgKyBtYXNrc3RyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGV4dHJhVGl0bGVQb3NpdGlvbiA9PSBcImVcIil7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBtYXNrc3RyICsgZXh0cmFUaXRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IG1hc2tzdHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RyaXBwZWRTdHIgPSBzdHI/LnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gICAgICAgIGxldCBtYXNrZWRTdHI7XHJcbiAgICAgICAgaWYobWFza3Bvc3Rpb24gPT09ICdlbmQnKXtcclxuICAgICAgICAgICAgbWFza2VkU3RyID0gc3RyaXBwZWRTdHI/LnNsaWNlKDAsIC1tYXNrbnVtKSArIG1hc2s/LnJlcGVhdChtYXNrbnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWFza3Bvc3Rpb24gPT09ICdzdGFydCcpe1xyXG4gICAgICAgICAgICBtYXNrZWRTdHIgPSBtYXNrPy5yZXBlYXQobWFza251bSkgKyBzdHJpcHBlZFN0cj8uc2xpY2UobWFza251bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1hc2twb3N0aW9uID09PSAnYm90aCcpe1xyXG4gICAgICAgICAgICBsZXQgbWFza2VkU3RyMiA9IG1hc2s/LnJlcGVhdChtYXNrbnVtKSArIHN0cmlwcGVkU3RyPy5zbGljZShtYXNrbnVtKTtcclxuICAgICAgICAgICAgbWFza2VkU3RyID0gbWFza2VkU3RyMj8uc2xpY2UoMCwgLW1hc2tudW0pICsgbWFzaz8ucmVwZWF0KG1hc2tudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtYXNrcG9zdGlvbiA9PT0gJ2FsbCcpe1xyXG4gICAgICAgICAgICBtYXNrZWRTdHIgPSBtYXNrPy5yZXBlYXQoc3RyLmxlbmd0aCkgKyBzdHJpcHBlZFN0cj8uc2xpY2UobWFza251bS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3V0cHV0U3RyID0gJyc7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyPy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dFN0ciArPSAnICc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRTdHIgKz0gbWFza2VkU3RyW2pdO1xyXG4gICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXRTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXBwQ29uZmlnVmFsdWUoYXJnMDogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmcwID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcwKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmcwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJnMFtpXSA9IHRoaXMuc2V0QXBwQ29uZmlnVmFsdWUoYXJnMFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFyZzEgaW4gYXJnMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZzBbYXJnMV0gPSB0aGlzLnNldEFwcENvbmZpZ1ZhbHVlKGFyZzBbYXJnMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcwID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjb25zdCByZWcgPSAvXFwkey4rfS9nO1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hBcmc7XHJcbiAgICAgICAgICAgIHdoaWxlICgobWF0Y2hBcmcgPSByZWcuZXhlYyhhcmcwKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoQXJnVmFsdWUgPSBtYXRjaEFyZ1swXS5yZXBsYWNlKCckeycsICcnKS5yZXBsYWNlKCd9JywgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hBcmdWYWx1ZURhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShtYXRjaEFyZ1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaEFyZ1ZhbHVlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZzAgPSBhcmcwLnJlcGxhY2UoJyR7JyttYXRjaEFyZ1ZhbHVlKyd9JywgbWF0Y2hBcmdWYWx1ZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmcwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIHJldHVybkFjY2Vzc1Rva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYCR7dGhpcy5nZXRDb29raWUoJ2hlYWRlclBheWxvYWQnKX0uJHt0aGlzLmdldENvb2tpZSgnc2lnbmF0dXJlJyl9YFxyXG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGNvbnN0IGNhTGVuOiBudW1iZXIgPSBjYS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgY29va2llTmFtZSA9IGAke25hbWV9PWA7XHJcbiAgICAgICAgbGV0IGM6IHN0cmluZztcclxuICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xyXG4gICAgICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csICcnKTtcclxuICAgICAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRCYXNlNjRJbWFnZUZyb21VcmwoaW1hZ2VVcmwpIHtcclxuICAgICAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwpO1xyXG4gICAgICAgIHZhciBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVhZGVyICA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHRoaXMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByb2Nlc3NaaXBGaWxlKEF0dGFjaG1lbnRGaWxlcykge1xyXG4gICAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgYXR0YWNobWVudEZpbGUgb2YgQXR0YWNobWVudEZpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChhdHRhY2htZW50RmlsZS51cmwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICBhd2FpdCB0aGlzLmdldEJhc2U2NEltYWdlRnJvbVVybChhdHRhY2htZW50RmlsZS51cmwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0cmVzdWx0ID0gKCByZXN1bHQgYXMgc3RyaW5nKS5zcGxpdCgnLCcpWzFdO1xyXG4gICAgICAgICAgICAgICAgemlwLmZpbGUoYXR0YWNobWVudEZpbGUubmFtZSwgYmFzZTY0cmVzdWx0LCB7YmFzZTY0OnRydWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB6aXAuZ2VuZXJhdGVBc3luYyh7dHlwZTpcImJsb2JcIn0pLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICAgICAgICBzYXZlQXMoY29udGVudCwgRGF0ZS5ub3coKSArIFwiLnppcFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3RzIHRoZSBsYXN0IHR3byB2YWx1ZXMgZnJvbSBhIGdpdmVuIHN0cmluZy4gXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHN0ciAtIFRoZSBpbnB1dCBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBUaGUgZGVsaW1pdGVyIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHR3byBwcm9wZXJ0aWVzLiBJZiB0aGUgZXh0cmFjdGlvbiBmYWlscyByZXR1cm5zIGBudWxsYC5cclxuICAgICAqL1xyXG4gICAgZXh0cmFjdExhc3RWYWx1ZXMoc3RyOiBzdHJpbmcsIGRlbGltaXRlcjogc3RyaW5nKTogeyBhOiBzdHJpbmc7IGI6IHN0cmluZyB9IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcJHtkZWxpbWl0ZXJ9KFxcXFxkKylcXFxcJHtkZWxpbWl0ZXJ9KFxcXFxkKykkYCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVnZXggPSAvXFwkKFxcZCspXFwkKFxcZCspJC87XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2gocmVnZXgpO1xyXG4gICBcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IG1hdGNoWzFdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gbWF0Y2hbMl07XHJcbiAgICAgICAgICAgIHJldHVybiB7IGEsIGIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0cyB0aGUgbGFzdHZhbHVlIGZyb20gYSBnaXZlbiBzdHJpbmcuIFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzdHIgLSBUaGUgaW5wdXQgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gZGVsaW1pdGVyIC0gVGhlIGRlbGltaXRlciBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0d28gcHJvcGVydGllcy4gSWYgdGhlIGV4dHJhY3Rpb24gZmFpbHMgcmV0dXJucyBgbnVsbGAuXHJcbiAgICAgKi9cclxuICAgIGV4dHJhY3RMYXN0VmFsdWUoc3RyOiBzdHJpbmcsIGRlbGltaXRlcjogc3RyaW5nKTogIHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlZ2V4ID0gL1xcJChcXGQrKSQvO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXCR7ZGVsaW1pdGVyfShcXFxcZCspJGApO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKHJlZ2V4KTtcclxuICAgXHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEZpbmQgaW5kaWNlcyBmcm9tIGEgZ2l2ZW4gc3RyaW5nIGB1bmlxdWVfaWRgIGFuZCBzdWJzdGl0dXRlIFsqXSBpbiBrZXkgd2l0aCBpbmRpY2VzIG9uY2UgYnkgb25lLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGtleSAtIFRoZSBzdHJpbmcgaW4gd2hpY2ggdG8gcmVwbGFjZSBbKl0gd2l0aCBpbmRpY2VzXHJcbiAgICAqIEBwYXJhbSB1bmlxdWVfaWQgLSBUaGUgc3RyaW5nIGluIHdoaWNoIHRvIHNlYXJjaCBpbmRpY2VzLlxyXG4gICAgKiBAcGFyYW0gZGVsaW1pdGVyIC0gVGhlIGRlbGltaXRlciBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgbmV3IHN0cmluZyB3aXRoIGFsbCBpbnN0YW5jZXMgb2YgYGtleWAgcmVwbGFjZWQgYnkgYXN0ZXJpc2tzLlxyXG4gICAgKi9cclxuICAgIGZpbmRJbmRpY2VzQW5kU3Vic3RpdHV0ZVN0YXJzKGtleTogc3RyaW5nLCB1bmlxdWVfaWQ6IHN0cmluZywgZGVsaW1pdGVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZXh0cmFjdExhc3RWYWx1ZXModW5pcXVlX2lkLCBkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHRoaXMuc3Vic3RpdHV0ZUFsdGVybmF0ZVN0YXJzKGtleSwgcmVzdWx0LmEsIHJlc3VsdC5iKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZCA9IHRoaXMuZXh0cmFjdExhc3RWYWx1ZSh1bmlxdWVfaWQsIGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIGlmKGluZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnN1YnN0aXR1dGVBbGxTdGFycyhrZXksIGluZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2VzIGFsbCBvY2N1cnJlbmNlcyBvZiBbKl0gd2l0aCB0aGUgc3RyaW5nIGBpYCBpbiB0aGUgc3RyaW5nIGBzdHJgLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzdHIgLSBUaGUgaW5wdXQgc3RyaW5nIGluIHdoaWNoIHN1YnN0aXR1dGlvbnMgYXJlIHRvIGJlIG1hZGUuXHJcbiAgICAgKiBAcGFyYW0gaSAtIFRoZSBjaGFyYWN0ZXIgdG8gYmUgcmVwbGFjZWQgYnkgYXN0ZXJpc2tzIFsqXS5cclxuICAgICAqIEBwYXJhbSBkZWxpbWl0ZXIgLSBUaGUgZGVsaW1pdGVyIHN0cmluZ1xyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBzdHJpbmcgd2l0aCBhbGwgaW5zdGFuY2VzIG9mIGBpYCByZXBsYWNlZCBieSBhc3Rlcmlza3MuXHJcbiAgICAgKi9cclxuICAgIHN1YnN0aXR1dGVBbGxTdGFycyhzdHI6IHN0cmluZywgaTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gJ1xcXFxbXFxcXCpcXFxcXSc7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpLCBgWyR7aX1dYCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1YnN0aXR1dGVzIGFsdGVybmF0aW5nIHN0YXJzIGluIGEgc3RyaW5nIHdpdGggWypdLiBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3RyIC0gVGhlIHN0cmluZyBpbiB3aGljaCBzdWJzdGl0dXRpb25zIGFyZSB0byBiZSBtYWRlLlxyXG4gICAgICogQHBhcmFtIGkgLSBUaGUgY2hhcmFjdGVyIHRvIHJlcGxhY2Ugd2l0aCBmaXJzdCBzZWFyY2ggb2YgWypdLlxyXG4gICAgICogQHBhcmFtIGogLSBUaGUgY2hhcmFjdGVyIHRvIHJlcGxhY2Ugd2l0aCBzZWNvbmQgc2VhcmNoIG9mIFsqXS5cclxuICAgICAqIEByZXR1cm5zIEEgbmV3IHN0cmluZyB3aXRoIGFsdGVybmF0aW5nIHJlcGxhY2VtZW50cyBvZiBgaWAgYnkgYXN0ZXJpc2tzIGFuZCBgamAgdW5jaGFuZ2VkLiAgICAgXHJcbiAgICAgKi9cclxuICAgIHN1YnN0aXR1dGVBbHRlcm5hdGVTdGFycyhzdHI6IHN0cmluZywgaTogc3RyaW5nLCBqOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICBsZXQgaW5zaWRlUGVyY2VudCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0ZW1wU2VnbWVudCA9ICcnO1xyXG4gICAgICBcclxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggZWFjaCBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZ1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3RyLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBzdHJba107XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnJScgJiYgIWluc2lkZVBlcmNlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IG9mIGEgJS4uLiUgYmxvY2tcclxuICAgICAgICAgICAgICAgIGluc2lkZVBlcmNlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJyUnICYmIGluc2lkZVBlcmNlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVuZCBvZiBhICUuLi4lIGJsb2NrXHJcbiAgICAgICAgICAgICAgICBpbnNpZGVQZXJjZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGVtcFNlZ21lbnQgKyBjaGFyO1xyXG4gICAgICAgICAgICAgICAgdGVtcFNlZ21lbnQgPSAnJzsgLy8gQ2xlYXIgdGVtcFNlZ21lbnQgZm9yIHRoZSBuZXh0IGJsb2NrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5zaWRlUGVyY2VudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaW5zaWRlIGEgJS4uLiUgYmxvY2ssIHNvIGhhbmRsZSByZXBsYWNlbWVudHNcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnWycgJiYgc3RyW2sgKyAxXSA9PT0gJyonICYmIHN0cltrICsgMl0gPT09ICddJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTZWdtZW50ICs9IGBbJHt0b2dnbGUgPyBpIDogan1dYDsgLy8gQWRkIHRoZSByZXBsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA9ICF0b2dnbGU7IC8vIEFsdGVybmF0ZSBiZXR3ZWVuIGkgYW5kIGpcclxuICAgICAgICAgICAgICAgICAgICBrICs9IDI7IC8vIFNraXAgXCJdXCJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFNlZ21lbnQgKz0gY2hhcjsgLy8gbm9uIFsqXSBjaGFyYWN0ZXJzIGluIHRoZSBzZWdtZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdXRzaWRlIG9mICUuLi4lIGJsb2NrcywgYXBwZW5kIHRoZSBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKioqKioqKioqKioqKioqKioqIE1hdERpYWxvZyBpbiBEaWFsb2cgKFN0ZXBNb2RhbCkgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggZGlhbG9nIGluIERPTSBhbmQgZmluZCB0aGUgc3RlcE1vZGFsIGlmIGV4aXN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgU3RlcE1vZGFsIGh0bWwgZWxlbWVudCBpZiBmb3VuZCBlbHNlIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBnZXRTdGVwTW9kYWxEaWFsb2dJZkV4aXN0KCkge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ0VsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpYWxvZycpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlhbG9nRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nID0gZGlhbG9nRWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIGlmKGRpYWxvZy5pZC5pbmNsdWRlcyhcInN0ZXBNb2RhbC1cIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaWFsb2c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIGFuZCBtb3ZlIHRoZSBNYXREaWFsb2cgaW4gRE9NIGZyb20gYm9keSB0byBzdGVwTW9kYWwgaWYgZXhpc3RzLlxyXG4gICAgICogY2RrLW92ZXJsYXktY29udGFpbmVyIGlzIHVzZWQgdG8gZmluZCB0aGUgTWF0RGlhbG9nXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgU3RlcE1vZGFsIGh0bWwgZWxlbWVudCBpZiBmb3VuZCBlbHNlIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBtb3ZlTWF0RGlhbG9nVG9TdGVwTW9kYWxJZkV4aXN0KCkge1xyXG4gICAgICAgIGxldCBzdGVwTW9kYWwgPSB0aGlzLmdldFN0ZXBNb2RhbERpYWxvZ0lmRXhpc3QoKTtcclxuICAgICAgICBpZihzdGVwTW9kYWwpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBpZiAoZGlhbG9nQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwTW9kYWwuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdmUgdGhlIE1hdERpYWxvZyBpbiBET00gZnJvbSBzdGVwTW9kYWwgdG8gYm9keSBpZiBleGlzdHMuXHJcbiAgICAgKiBjZGstb3ZlcmxheS1jb250YWluZXIgaXMgdXNlZCB0byBmaW5kIHRoZSBNYXREaWFsb2cuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgU3RlcE1vZGFsIGh0bWwgZWxlbWVudCBpZiBmb3VuZCBlbHNlIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBtb3ZlTWF0RGlhbG9nVG9Cb2R5KCkge1xyXG4gICAgICAgIGxldCBzdGVwTW9kYWwgPSB0aGlzLmdldFN0ZXBNb2RhbERpYWxvZ0lmRXhpc3QoKTtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcclxuICAgICAgICBpZihzdGVwTW9kYWwgJiYgYm9keSAmJiBib2R5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBpZiAoZGlhbG9nQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBib2R5WzBdLmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3VzdG9tIGZ1bmN0aW9uIHRvIGZvcm1hdCBsYXJnZSBudW1iZXJzIHdpdGhvdXQgbG9zaW5nIHByZWNpc2lvblxyXG4gICAgZm9ybWF0TnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gUHJldmVudCBKYXZhU2NyaXB0IGZyb20gbW9kaWZ5aW5nIG51bWJlcnMgYnkga2VlcGluZyB0aGVtIGFzIGEgc3RyaW5nXHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1ZhbHVlLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XHJcbiAgICB9XHJcbn1cclxuIl19