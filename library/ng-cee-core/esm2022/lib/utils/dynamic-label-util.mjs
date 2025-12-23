import { SetAPICallbackData } from './set-api-callback-data-util';
import { CommonUtil } from './common-util';
import moment from 'moment-timezone';
import { getCurrencySymbol } from '@angular/common';
// import { conformToMask } from 'angular2-text-mask';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../models/api-data/api-data.service";
import * as i2 from "../models/app-data/app-data.service";
export class DynamicLabelUtil {
    apiDataService;
    appDataService;
    setAPIKeyUtil;
    commonUtil;
    constructor(apiDataService, appDataService) {
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.commonUtil = new CommonUtil();
    }
    extractApiKeys(sentence) {
        const keys = sentence.match(new RegExp(/\%(.*?)\%/g));
        return keys;
    }
    /**
     * function that returns the proper value of the text that is set to dynamic
     * @param values the field data
     * @param data the api calling data
     */
    getDynamicValue(values, data, useSecondaryApiKey = false) {
        let obj = values;
        for (const key of ['field_label', 'tooltip', 'placeholder_text', 'possible_values', 'expandTitle', 'collapseTitle', 'additional_parameters']) {
            if (!obj[key] && !obj[key + '_config']) {
                continue;
            }
            const dynamicData = this.checkIfDynamic(key, obj, data, useSecondaryApiKey);
            obj = { ...obj, ...dynamicData };
        }
        // ABSOLUTE FINAL CLEANUP: Remove ALL || delimiters AND convert newlines for ALL processed fields
        for (const key of ['field_label', 'tooltip', 'placeholder_text', 'possible_values', 'expandTitle', 'collapseTitle']) {
            if (obj[key] && typeof obj[key] === 'string') {
                // Remove || delimiters
                if (obj[key].includes('||')) {
                    //console.log('🔥 ABSOLUTE FINAL CLEANUP - Found || in', key, ':', obj[key].substring(0, 100) + (obj[key].length > 100 ? '...' : ''));
                    obj[key] = obj[key].replaceAll('||', '');
                    //console.log('🔥 ABSOLUTE FINAL CLEANUP - Cleaned', key, ':', obj[key].substring(0, 100) + (obj[key].length > 100 ? '...' : ''));
                }
                // ENSURE NEWLINES ARE CONVERTED - This is a safety net for ALL dynamic content
                if (obj[key].includes('\\n') || obj[key].includes('\n')) {
                    //console.log('🔄 ABSOLUTE FINAL NEWLINE CONVERSION - Found newlines in', key, ':', obj[key].substring(0, 100) + (obj[key].length > 100 ? '...' : ''));
                    obj[key] = this.convertNewlinesToBreaks(obj[key]);
                    //console.log('🔄 ABSOLUTE FINAL NEWLINE CONVERSION - Result:', obj[key].substring(0, 100) + (obj[key].length > 100 ? '...' : ''));
                    // Add visual marker to help debug
                    obj[key] = '🔄NEWLINES_CONVERTED: ' + obj[key];
                }
            }
        }
        return obj;
    }
    checkIfDynamic(key, fieldObj, apiData, useSecondaryApiKey = false) {
        // check for config key
        const configKey = key + '_config';
        fieldObj = {
            ...fieldObj, ...{
                [configKey]: fieldObj[configKey] || fieldObj[key]
            }
        };
        if (key === "additional_parameters" && fieldObj[key].length > 0) {
            let dynamicValue;
            fieldObj[key].forEach(x => {
                if (x.parameter_type === "CEE_table_cell_values") {
                    dynamicValue = x.value;
                    if (dynamicValue?.includes('((dynamic))')) {
                        dynamicValue = this.setDynamicKeysValue(dynamicValue, apiData);
                    }
                    if (dynamicValue.includes('?') && dynamicValue.includes(':') && !dynamicValue.includes('https://') && !dynamicValue.includes('http://')) {
                        if (dynamicValue.includes('||')) {
                            const regex = /\|\|/g;
                            dynamicValue = dynamicValue.replace(regex, '|-|');
                        }
                        const dynamicValueArr = dynamicValue.split('||');
                        let evauatedValArr = [];
                        dynamicValueArr.forEach((val) => {
                            val = this.recursiveFunc(val).split("\n").join("<br/>");
                            evauatedValArr.push((val.includes('?') && val.includes(':')) ? eval(val) : val);
                        });
                        dynamicValue = evauatedValArr.join('');
                    }
                }
            });
            // GLOBAL CLEANUP: Remove ALL || delimiters from the final result regardless of source
            if (dynamicValue && typeof dynamicValue === 'string' && dynamicValue.includes('||')) {
                //console.log('🧽 GLOBAL CLEANUP (additional_parameters) - Before removing ALL || delimiters:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
                dynamicValue = dynamicValue.replaceAll('||', '');
                //console.log('🧽 GLOBAL CLEANUP (additional_parameters) - After removing ALL || delimiters:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
            }
            //dynamicValue = dynamicValue.replaceAll('||','');
            return { [key]: fieldObj[configKey], [configKey]: dynamicValue };
        }
        else {
            let dynamicValue = fieldObj[key];
            // configKey = fieldObj[configKey] ? configKey : key;
            if ((Array.isArray(fieldObj[configKey]) &&
                fieldObj[configKey].join('').includes('((dynamic))')) ||
                (fieldObj[configKey] && fieldObj[configKey].includes('((dynamic))'))) {
                dynamicValue = this.setDynamicKeysValue(fieldObj[configKey], apiData);
                // ALWAYS CONVERT NEWLINES - This should happen for ALL dynamic content, not just ternary
                dynamicValue = this.convertNewlinesToBreaks(dynamicValue);
                // console.log('🔄 MAIN PATH NEWLINE CONVERSION - Result:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
                // console.log('🔄 MAIN PATH - Contains <br>:', dynamicValue.includes('<br>'));
                // console.log('🔍 DYNAMIC VALUE DEBUG - After setDynamicKeysValue:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
                // console.log('🔍 CONDITION CHECK - Contains ||:', dynamicValue.includes('||'));
                // console.log('🔍 CONDITION CHECK - Contains ?:', dynamicValue.includes('?'));
                // console.log('🔍 CONDITION CHECK - Contains ::', dynamicValue.includes(':'));
                // && !dynamicValue.includes('https://') && !dynamicValue.includes('http://')
                if (dynamicValue.includes('||') && dynamicValue.includes('?') && dynamicValue.includes(':')) {
                    // console.log('🎯 ENTERING TERNARY PROCESSING BLOCK');
                    // console.log(dynamicValue);
                    const dynamicValueArr = dynamicValue.split('||');
                    let evauatedValArr = [];
                    dynamicValueArr.forEach((val, i) => {
                        if (useSecondaryApiKey && i === 0) {
                            return;
                        }
                        // Normalize the string - replace any line breaks with <br> and &nbsp;
                        val = this.convertNewlinesToBreaks(val.trim());
                        // CRITICAL: Remove delimiters from the ENTIRE expression first
                        // console.log('🧹 BEFORE delimiter cleanup:', val.substring(0, 100) + (val.length > 100 ? '...' : ''));
                        val = this.cleanAllDelimiters(val);
                        // console.log('🧹 AFTER delimiter cleanup:', val.substring(0, 100) + (val.length > 100 ? '...' : ''));
                        try {
                            // Check if this is a conditional expression that needs evaluation
                            // console.log('🔍 Checking if ternary:', val.substring(0, 100) + (val.length > 100 ? '...' : ''));
                            // console.log('   Has ?:', val.includes('?'));
                            // console.log('   Has ::', val.includes(':'));
                            // console.log('   Has ? with spaces:', val.includes(' ? '));
                            // console.log('   Has : with spaces:', val.includes(' : '));
                            if (val.includes('?') && val.includes(':')) {
                                // console.log('🔧 Processing ternary expression (flexible matching):', val.substring(0, 100) + (val.length > 100 ? '...' : ''));
                                const result = this.evaluateTernaryExpression(val);
                                // console.log('✅ Ternary result:', result);
                                evauatedValArr.push(result);
                            }
                            else {
                                // console.log('➡️ Not a ternary, adding as-is');
                                evauatedValArr.push(val);
                            }
                        }
                        catch (error) {
                            console.error("Error evaluating expression:", val, error);
                            // Fall back to the original value if evaluation fails
                            evauatedValArr.push(val);
                        }
                    });
                    dynamicValue = evauatedValArr.join('');
                    // FINAL CLEANUP: Remove any remaining delimiters from the final result
                    // console.log('🧽 FINAL CLEANUP - Before removing delimiters:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
                    dynamicValue = dynamicValue.replaceAll('||', '');
                    // console.log('🧽 FINAL CLEANUP - After removing delimiters:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
                }
                // console.log(dynamicValue);
            }
            // GLOBAL CLEANUP: Remove ALL || delimiters from the final result regardless of source
            if (dynamicValue && typeof dynamicValue === 'string' && dynamicValue.includes('||')) {
                // console.log('🧽 GLOBAL CLEANUP - Before removing ALL || delimiters:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
                dynamicValue = dynamicValue.replaceAll('||', '');
                // console.log('🧽 GLOBAL CLEANUP - After removing ALL || delimiters:', dynamicValue.substring(0, 100) + (dynamicValue.length > 100 ? '...' : ''));
            }
            //dynamicValue = dynamicValue.replaceAll('||','');
            return { [key]: dynamicValue, [configKey]: fieldObj[configKey] };
        }
    }
    convertNewlinesToBreaks(text) {
        if (!text)
            return text;
        // console.log('🔄 NEWLINE CONVERSION - Input:', text.substring(0, 100) + (text.length > 100 ? '...' : ''));
        // console.log('🔄 NEWLINE CONVERSION - Contains \\n:', text.includes('\\n'));
        // console.log('🔄 NEWLINE CONVERSION - Contains actual newlines:', text.includes('\n'));
        const result = text
            // Convert actual newlines
            .replace(/(?:\r\n|\r|\n)/g, '<br>')
            // Convert literal escaped newlines
            .replace(/\\n/g, '<br>')
            .replace(/\\r/g, '<br>')
            // Convert tabs (actual and escaped)
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
            .replace(/\\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        // console.log('🔄 NEWLINE CONVERSION - Result:', result.substring(0, 100) + (result.length > 100 ? '...' : ''));
        // console.log('🔄 NEWLINE CONVERSION - Contains <br>:', result.includes('<br>'));
        return result;
    }
    recursiveFunc(val) {
        let init = val.indexOf('(');
        let fin = val.indexOf(')');
        let expression = val.substr(init + 1, fin - init - 1);
        let evaluatedVal = this.evaluateExpression(expression);
        val = val.replaceAll('(' + expression + ')', evaluatedVal);
        if (val.includes('DATE_COMPAIR')) {
            val = this.recursiveFunc(val);
        }
        return val;
    }
    evaluateExpression(val) {
        if (val.includes('DATE_COMPAIR')) {
            let vArr = val.split('?');
            let valArr = vArr[0].split('|');
            if (valArr[0] == 'DATE_COMPAIR') {
                val = this.compairDates(valArr);
            }
        }
        return val;
    }
    compairDates(valArr) {
        let result = false;
        if (valArr.length == 4) {
            if (valArr[0] == 'DATE_COMPAIR') {
                if (valArr[1].trim() == 'CURR_DATE') {
                    valArr[1] = moment(new Date());
                }
                else {
                    valArr[1] = moment(new Date(valArr[1]));
                }
                if (valArr[3].trim() == 'CURR_DATE') {
                    valArr[3] = moment(new Date());
                }
                else {
                    valArr[3] = moment(new Date(valArr[3]));
                }
                switch (valArr[2].trim()) {
                    case '==':
                        result = valArr[1].isSame(valArr[3], 'day') ? true : false;
                        break;
                    case '>':
                        result = valArr[1].isAfter(valArr[3]) ? true : false;
                        break;
                    case '<':
                        result = valArr[1].isBefore(valArr[3]) ? true : false;
                        break;
                    default:
                        result = (valArr[1] == valArr[3]) ? true : false;
                        break;
                }
            }
        }
        return result;
    }
    setDynamicKeysValue(fieldValue, apiData) {
        if (Array.isArray(fieldValue)) {
            const arr = [];
            for (const singleVal of fieldValue) {
                if (singleVal.includes('((dynamic))')) {
                    const dynamicKeys = this.extractApiKeys(singleVal.split('((dynamic))')[1]);
                    // console.log(dynamicKeys);
                    arr.push(this.getSentence(dynamicKeys, singleVal, apiData).replace('((dynamic))', ''));
                }
                else {
                    arr.push(singleVal);
                }
            }
            return arr;
        }
        else {
            const dynamicKeys = this.extractApiKeys(fieldValue.split('((dynamic))')[1]);
            // Support for multiple response key in dynamic labels with '|'
            dynamicKeys.forEach((apiKey, i) => {
                if (apiKey.includes('|')) {
                    apiKey = apiKey.replaceAll('%', '');
                    let apiKeyArr = apiKey.split('|');
                    var dataFound = false;
                    apiKeyArr.forEach((keyPart, index) => {
                        console.log('Key Part:', keyPart);
                        if (this.checkHandlerDataExists(keyPart.split('##')[0].trim(), keyPart) && !dataFound) {
                            fieldValue = fieldValue.replaceAll(dynamicKeys[i], '%' + keyPart + '%');
                            dynamicKeys[i] = '%' + keyPart + '%';
                            dataFound = true;
                            return this.getSentence(dynamicKeys, fieldValue, apiData).replace('((dynamic))', '');
                        }
                    });
                }
            });
            // console.log(dynamicKeys);
            return this.getSentence(dynamicKeys, fieldValue, apiData).replace('((dynamic))', '');
        }
    }
    // /**
    //  * get the sentence
    //  * @param values the field data
    //  * @param data  then api call back data
    //  */
    // private getDynamicSentence(field, key, data) {
    //     // field = JSON.parse(JSON.stringify(field));
    //     // let config_key: any;
    //     // let sentence: any;
    //     // let linked_api_keys = [];
    //     // let final_array_values = [];
    //     // let new_sentence_val: string;
    //     // config_key = key + '_config';
    //     // sentence = (field[config_key]) ? field[config_key] : field[key];
    //     // // console.log('has Key', field[config_key], key);
    //     // field[config_key] = sentence;
    //     // if (Array.isArray(sentence)) {
    //     //     // field[key + '_config'] = sentence;
    //     //     sentence.map(sentence_val => {
    //     //         if (typeof sentence_val == 'string' && sentence_val.startsWith('((dynamic))')) {
    //     //             var keys = this.extractApiKeys(sentence_val, '.*%(.*)%.*', linked_api_keys);
    //     //             sentence_val = this.getSentence(keys, sentence_val, data);
    //     //             new_sentence_val = sentence_val.replace('((dynamic))', '');
    //     //             final_array_values.push(new_sentence_val);
    //     //         } else {
    //     //             final_array_values.push(sentence_val);
    //     //         }
    //     //     });
    //     //     field[key] = final_array_values;
    //     //     // field = { ...field, ...{ [key]: final_array_values } };
    //     // } else {
    //     //     if (typeof sentence == 'string' && sentence.startsWith('((dynamic))')) {
    //     //         // console.log(field[config_key]);
    //     //         var keys = this.extractApiKeys(sentence, '.*%(.*)%.*', linked_api_keys);
    //     //         sentence = this.getSentence(keys, sentence, data);
    //     //         // console.log('After', field[key]);
    //     //         field[key] = sentence.replace('((dynamic))', '');
    //     //         // console.log('Before', field[key]);
    //     //         // console.log('values', values);
    //     //     }
    //     // }
    //     // console.log(field);
    //     // return field;
    // }
    /**
     * get the sentence
     * @param apiKey the api key string
     * @param data then api call back data
     */
    getSentence(keys, sentence, data) {
        if (keys && keys.length > 0) {
            keys.forEach((apiKey, i) => {
                apiKey = apiKey.split('%')[1];
                const formats = apiKey.split(':::').map(str => str.trim());
                let keyValue = this.returnKeyValue(formats[0].trim(), data);
                if (apiKey.includes(':::') && formats.length > 1) {
                    formats.shift(); // first one is api key
                    keyValue = this.returnFormattedValue(keyValue, formats.shift(), formats);
                }
                if (!keyValue) {
                    keyValue = this.appDataService.getFieldDataByApiKey(apiKey, 'request');
                }
                sentence = sentence.replaceAll('%' + apiKey + '%', keyValue !== undefined ? keyValue : '');
            });
        }
        return sentence;
    }
    /**
     * function returns formatted/transformed data
     * @param defaultValue: any
     * @param transformType: string the method to transform
     * @param format: Array<string> the formats for ex: date requires 1 format
     * whereas currency can have more than one formats one for the country code
     * and another for the number of digits after decimal places
     */
    returnFormattedValue(defaultValue, transformType, format) {
        let keyValue = typeof defaultValue === 'number' ? defaultValue.toString() : defaultValue;
        switch (transformType.toLowerCase()) {
            case 'datetime':
            case 'date':
                const tzName = moment.tz.guess();
                // Handle array values first
                if (Array.isArray(keyValue)) {
                    keyValue = keyValue.length > 0 ? keyValue[0] : '';
                }
                // Convert to string to ensure we can use string methods
                keyValue = String(keyValue);
                if (!keyValue.includes(' ') && !keyValue.includes('-') && !keyValue.includes('/')) {
                    keyValue = Number(keyValue);
                }
                keyValue = keyValue && keyValue != '' ? moment(this.commonUtil.adjustTZ(new Date(keyValue))).tz(tzName).format(format[0]) : '';
                break;
            case 'time':
                if (!keyValue.includes(' ') && !keyValue.includes('-') && !keyValue.includes('/') && !keyValue.includes(':')) {
                    keyValue = Number(keyValue);
                }
                if (keyValue && String(keyValue).includes(':')) {
                    keyValue = moment(keyValue, format[0]).format(format[0]);
                }
                else {
                    keyValue = moment(new Date(keyValue)).format(format[0]);
                }
                break;
            case 'currency':
            case 'curr':
                // TODO: use Intl format for currency
                const num = Number(keyValue);
                if (!isNaN(num)) {
                    keyValue = `${getCurrencySymbol(format[0], 'narrow')}` +
                        `${Number(keyValue).toFixed(Number(format[1])).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
                }
                break;
            case 'mask':
                keyValue = this.getMaskedInputValue(keyValue, format[0]);
                break;
            case 'masklabel':
                keyValue = this.getMaskedOutputValueforLabel(keyValue, format[0]);
                break;
            case 'masknumberlimit':
                let formatsMask = format[0].split('|');
                keyValue = this.commonUtil.getMaskedData(keyValue, formatsMask[0], formatsMask[1], formatsMask[2], formatsMask[3], formatsMask[4]);
                break;
            case 'thousand_separator':
                keyValue = keyValue && keyValue != '' ? this.commonUtil.formatNumber(keyValue) : '';
                break;
            default:
                console.error(`Pipe Failed, Value: ${JSON.stringify({ valueToTransForm: defaultValue, type: transformType, format })}`);
                break;
        }
        return keyValue;
    }
    getMaskedOutputValueforLabel(inputValue, mask) {
        const maskData = [];
        const apiData = inputValue.split('');
        let index = 0;
        mask.split('').forEach(element => {
            element == 'X' ? maskData.push(apiData[index++]) : maskData.push(element);
        });
        if (inputValue && maskData && maskData.length > 0) {
            return maskData.join('');
        }
        return inputValue;
    }
    getMaskedInputValue(inputValue, mask) {
        const maskData = [];
        mask.split('').forEach(element => {
            element == 'X' ? maskData.push(/[0-9a-zA-Z]/) : element == '0' ? maskData.push(/\d/) : maskData.push(element);
        });
        if (inputValue && maskData && maskData.length > 0) {
            const convertData = this.conformToMask(inputValue, maskData);
            return convertData.conformedValue;
        }
        return inputValue;
    }
    // ######### This is a substitute function for masking, need to test ##########
    conformToMask(rawValue, mask) {
        let conformedValue = '';
        let rawIndex = 0;
        for (let i = 0; i < mask.length; i++) {
            const maskChar = mask[i];
            if (rawIndex >= rawValue.length) {
                break; // Stop if we've reached the end of the input value    
            }
            const rawChar = rawValue[rawIndex];
            if (maskChar === '9' && /\d/.test(rawChar)) {
                conformedValue += rawChar;
                rawIndex++;
            }
            else if (maskChar === 'A' && /[a-zA-Z]/.test(rawChar)) {
                conformedValue += rawChar;
                rawIndex++;
            }
            else {
                conformedValue += maskChar;
            }
        }
        return { 'conformedValue': conformedValue };
    }
    /**
     * the api key that is set to dynamic
     * @param apiKey the api key string
     * @param data then api call back data
     */
    returnKeyValue(apiKey, data) {
        return this.setAPIKeyUtil.isSingleApiKey || this.setAPIKeyUtil.setApiCallBackData(apiKey, data) !== null ?
            this.setAPIKeyUtil.setApiCallBackData(apiKey, data) : this.setAPIKeyUtil.setApiCallBackData(apiKey, this.setAPIKeyUtil.returnValueFromApiStoreUsingHandlerName(apiKey)) !== null ? this.setAPIKeyUtil.setApiCallBackData(apiKey, this.setAPIKeyUtil.returnValueFromApiStoreUsingHandlerName(apiKey)) : '';
    }
    /**
     * Aggressively clean all delimiters from a string
     */
    cleanAllDelimiters(input) {
        if (!input)
            return input;
        // console.log('🧽 CLEAN DELIMITERS - Input (length:', input.length, '):', input);
        let cleanResult = input.trim();
        // Handle the most common pattern: ||...|| (regardless of internal quotes)
        if (cleanResult.startsWith("||") && cleanResult.endsWith("||")) {
            cleanResult = cleanResult.substring(2, cleanResult.length - 2);
            // console.log('🧽 CLEAN DELIMITERS - Removed ||...|| pattern, result:', cleanResult.substring(0, 100) + (cleanResult.length > 100 ? '...' : ''));
        }
        else {
            // Fallback: aggressive delimiter removal for other patterns
            let previousResult = '';
            let iterations = 0;
            // Keep cleaning until no more changes occur or max iterations reached
            while (cleanResult !== previousResult && iterations < 10) {
                previousResult = cleanResult;
                iterations++;
                // console.log(`🧽 CLEAN DELIMITERS - Iteration ${iterations}:`, cleanResult.substring(0, 50) + (cleanResult.length > 50 ? '...' : ''));
                // Remove all delimiter patterns - more aggressive
                cleanResult = cleanResult.replace(/^\|\|+/g, ''); // Remove || from start
                cleanResult = cleanResult.replace(/\|\|+$/g, ''); // Remove || from end  
                cleanResult = cleanResult.replace(/^\|+/g, ''); // Remove | from start
                cleanResult = cleanResult.replace(/\|+$/g, ''); // Remove | from end
                // Trim whitespace
                cleanResult = cleanResult.trim();
                // Handle edge cases where the entire content is just delimiters
                if (cleanResult === '||' || cleanResult === '|' || cleanResult === '||||' || cleanResult === '') {
                    if (cleanResult === '')
                        break;
                    cleanResult = '';
                    break;
                }
            }
        }
        // Final trim and safety check
        cleanResult = cleanResult.trim();
        // console.log('🧽 CLEAN DELIMITERS - Final result (length:', cleanResult.length, '):', cleanResult.substring(0, 100) + (cleanResult.length > 100 ? '...' : ''));
        return cleanResult;
    }
    /**
     * Safely evaluate ternary expressions without using eval()
     * Handles the format: 'condition' == 'value' ? trueResult : falseResult
     */
    evaluateTernaryExpression(expression) {
        try {
            // Find the question mark and the CORRECT colon for ternary operator
            const questionIndex = expression.indexOf('?');
            if (questionIndex === -1) {
                return expression;
            }
            // Find the ternary colon by looking for pattern: ? value : value
            // We need to find the colon that's part of the ternary, not in the content
            let colonIndex = -1;
            // Look for colons after the question mark
            const afterQuestion = expression.substring(questionIndex + 1);
            // Strategy: Look for colon that has quotes around the values (typical ternary pattern)
            // Pattern: ? 'value' : 'value' or ? '-' : 'value'
            const ternaryPattern = /\?\s*['"][^'"]*['"]\s*:\s*['"][^'"]*['"]|\?\s*['"][^'"]*['"]\s*:\s*[^'"]+$|\?\s*[^'"]+\s*:\s*['"][^'"]*['"]/;
            const match = expression.match(ternaryPattern);
            if (match) {
                // Find the colon in the matched pattern
                const matchStart = expression.indexOf(match[0]);
                const matchPart = match[0];
                const colonInMatch = matchPart.lastIndexOf(':');
                colonIndex = matchStart + colonInMatch;
            }
            else {
                // Fallback: find the last colon that comes after the question mark
                // and is likely to be the ternary colon (not inside quotes)
                const searchStart = questionIndex + 1;
                let tempIndex = searchStart;
                while (tempIndex < expression.length) {
                    const char = expression[tempIndex];
                    if (char === ':') {
                        // Check if this colon is likely the ternary colon
                        // by ensuring it's not inside quotes or part of the content
                        const beforeColon = expression.substring(questionIndex + 1, tempIndex).trim();
                        const afterColon = expression.substring(tempIndex + 1).trim();
                        // If both parts look like values (start with quotes or are short), this might be our colon
                        if ((beforeColon.startsWith("'") || beforeColon.startsWith('"') || beforeColon === '-') &&
                            (afterColon.startsWith("'") || afterColon.startsWith('"'))) {
                            colonIndex = tempIndex;
                            break;
                        }
                    }
                    tempIndex++;
                }
            }
            if (colonIndex === -1 || questionIndex >= colonIndex) {
                return expression;
            }
            // Extract the condition, true value, and false value
            const conditionPart = expression.substring(0, questionIndex).trim();
            let trueValue = expression.substring(questionIndex + 1, colonIndex).trim();
            let falseValue = expression.substring(colonIndex + 1).trim();
            // Clean quotes from the values (delimiters already removed at expression level)
            trueValue = trueValue.replace(/^['"]|['"]$/g, '').trim();
            falseValue = falseValue.replace(/^['"]|['"]$/g, '').trim();
            // Parse the condition - looking for patterns like 'value' == '' or 'value' != '' or 'value' == 'something'
            let isConditionTrue = false;
            // Handle != '' pattern
            if (conditionPart.includes(" != ''") || conditionPart.includes(' != ""')) {
                // Extract the value before != ''
                const value = conditionPart.split(' != ')[0].replace(/^['"]|['"]$/g, '').trim();
                isConditionTrue = value !== '' && value !== null && value !== undefined;
            }
            // Handle == '' pattern
            else if (conditionPart.includes(" == ''") || conditionPart.includes(' == ""')) {
                // Extract the value before == ''
                const value = conditionPart.split(' == ')[0].replace(/^['"]|['"]$/g, '').trim();
                isConditionTrue = value === '' || value === null || value === undefined;
            }
            // Handle other != patterns
            else if (conditionPart.includes(' != ')) {
                const parts = conditionPart.split(' != ');
                const leftValue = parts[0].replace(/^['"]|['"]$/g, '').trim();
                const rightValue = parts[1].replace(/^['"]|['"]$/g, '').trim();
                isConditionTrue = leftValue !== rightValue;
            }
            // Handle other == patterns
            else if (conditionPart.includes(' == ')) {
                const parts = conditionPart.split(' == ');
                const leftValue = parts[0].replace(/^['"]|['"]$/g, '').trim();
                const rightValue = parts[1].replace(/^['"]|['"]$/g, '').trim();
                isConditionTrue = leftValue === rightValue;
            }
            // Return the appropriate value based on condition (values are already cleaned)
            const result = isConditionTrue ? trueValue : falseValue;
            // // Handle formatting - convert both literal \n and actual newlines to <br> tags for HTML display
            // let finalResult = result.replace(/\\n/g, '<br>'); // Convert literal \n
            // finalResult = finalResult.replace(/\n/g, '<br>'); // Convert actual newlines
            return result;
        }
        catch (error) {
            return expression; // Return original if parsing fails
        }
    }
    /**
     * Check if handler data exists in the API data of Akita store
     * @param handlerName - The name of the handler to check for
     * @param apiKey - Optional specific API key to check within the handler data
     * @returns boolean - true if handler data exists, false otherwise
     */
    checkHandlerDataExists(handlerName, apiKey) {
        try {
            // Get all API store data
            const apiStoreData = this.apiDataService.getAllApiStoreData();
            if (!apiStoreData || apiStoreData.length === 0) {
                return false;
            }
            // Check if handler exists in the store
            const handlerData = apiStoreData.find(item => item.apiKey === handlerName ||
                item.id === handlerName ||
                this.commonUtil.getHandlerName(item.id) === handlerName);
            if (!handlerData) {
                return false;
            }
            // If no specific apiKey provided, just check if handler exists with data
            if (!apiKey) {
                return handlerData.value !== null && handlerData.value !== undefined;
            }
            // If specific apiKey provided, check if it exists in the handler's value
            if (handlerData.value && typeof handlerData.value === 'object') {
                return handlerData.value.hasOwnProperty(apiKey) &&
                    handlerData.value[apiKey] !== null &&
                    handlerData.value[apiKey] !== undefined;
            }
            return false;
        }
        catch (error) {
            console.error('Error checking handler data existence:', error);
            return false;
        }
    }
    /**
     * Get handler data from the API data of Akita store
     * @param handlerName - The name of the handler to retrieve data for
     * @param apiKey - Optional specific API key to retrieve from the handler data
     * @returns any - The handler data or specific API key data, null if not found
     */
    getHandlerData(handlerName, apiKey) {
        try {
            // Get all API store data
            const apiStoreData = this.apiDataService.getAllApiStoreData();
            if (!apiStoreData || apiStoreData.length === 0) {
                return null;
            }
            // Find handler data in the store
            const handlerData = apiStoreData.find(item => item.apiKey === handlerName ||
                item.id === handlerName ||
                this.commonUtil.getHandlerName(item.id) === handlerName);
            if (!handlerData) {
                return null;
            }
            // If no specific apiKey provided, return the entire handler value
            if (!apiKey) {
                return handlerData.value;
            }
            // If specific apiKey provided, return that specific data
            if (handlerData.value && typeof handlerData.value === 'object') {
                return handlerData.value[apiKey] || null;
            }
            return null;
        }
        catch (error) {
            console.error('Error retrieving handler data:', error);
            return null;
        }
    }
    /**
     * Check if multiple handler data keys exist in the API data of Akita store
     * @param handlerName - The name of the handler to check
     * @param apiKeys - Array of API keys to check for existence
     * @returns object - Object with each API key and its existence status
     */
    checkMultipleHandlerDataExists(handlerName, apiKeys) {
        const result = {};
        try {
            for (const apiKey of apiKeys) {
                result[apiKey] = this.checkHandlerDataExists(handlerName, apiKey);
            }
        }
        catch (error) {
            console.error('Error checking multiple handler data existence:', error);
            // Initialize all keys as false in case of error
            apiKeys.forEach(key => result[key] = false);
        }
        return result;
    }
    static ɵfac = function DynamicLabelUtil_Factory(t) { return new (t || DynamicLabelUtil)(i0.ɵɵinject(i1.ApiDataService), i0.ɵɵinject(i2.AppDataService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DynamicLabelUtil, factory: DynamicLabelUtil.ɵfac, providedIn: 'any' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicLabelUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'any',
            }]
    }], () => [{ type: i1.ApiDataService }, { type: i2.AppDataService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYWJlbC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3V0aWxzL2R5bmFtaWMtbGFiZWwtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELHNEQUFzRDtBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFJZDtJQUNBO0lBSkgsYUFBYSxDQUFxQjtJQUMxQyxVQUFVLENBQWE7SUFDdkIsWUFDVyxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNELGNBQWMsQ0FBQyxRQUFnQjtRQUMzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxlQUFlLENBQUMsTUFBVyxFQUFFLElBQVUsRUFBRSxxQkFBOEIsS0FBSztRQUN4RSxJQUFJLEdBQUcs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QUUsS0FBSzthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi9zZXQtYXBpLWNhbGxiYWNrLWRhdGEtdXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW5jeVN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbi8vIGltcG9ydCB7IGNvbmZvcm1Ub01hc2sgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdhbnknLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0xhYmVsVXRpbCB7XHJcbiAgICBwcml2YXRlIHNldEFQSUtleVV0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNldEFQSUtleVV0aWwgPSBuZXcgU2V0QVBJQ2FsbGJhY2tEYXRhKGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgfVxyXG4gICAgZXh0cmFjdEFwaUtleXMoc2VudGVuY2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBzZW50ZW5jZS5tYXRjaChuZXcgUmVnRXhwKC9cXCUoLio/KVxcJS9nKSk7XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcHJvcGVyIHZhbHVlIG9mIHRoZSB0ZXh0IHRoYXQgaXMgc2V0IHRvIGR5bmFtaWNcclxuICAgICAqIEBwYXJhbSB2YWx1ZXMgdGhlIGZpZWxkIGRhdGFcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBhcGkgY2FsbGluZyBkYXRhXHJcbiAgICAgKi9cclxuICAgIGdldER5bmFtaWNWYWx1ZSh2YWx1ZXM6IGFueSwgZGF0YT86IGFueSwgdXNlU2Vjb25kYXJ5QXBpS2V5OiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgIGxldCBvYmogPSB2YWx1ZXM7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgWydmaWVsZF9sYWJlbCcsICd0b29sdGlwJywgJ3BsYWNlaG9sZGVyX3RleHQnLCAncG9zc2libGVfdmFsdWVzJywgJ2V4cGFuZFRpdGxlJywgJ2NvbGxhcHNlVGl0bGUnLCAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzJ10pIHtcclxuICAgICAgICAgICAgaWYgKCFvYmpba2V5XSAmJiAhb2JqW2tleSArICdfY29uZmlnJ10pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNEYXRhID0gdGhpcy5jaGVja0lmRHluYW1pYyhrZXksIG9iaiwgZGF0YSwgdXNlU2Vjb25kYXJ5QXBpS2V5KTtcclxuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIC4uLmR5bmFtaWNEYXRhIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFCU09MVVRFIEZJTkFMIENMRUFOVVA6IFJlbW92ZSBBTEwgfHwgZGVsaW1pdGVycyBBTkQgY29udmVydCBuZXdsaW5lcyBmb3IgQUxMIHByb2Nlc3NlZCBmaWVsZHNcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBbJ2ZpZWxkX2xhYmVsJywgJ3Rvb2x0aXAnLCAncGxhY2Vob2xkZXJfdGV4dCcsICdwb3NzaWJsZV92YWx1ZXMnLCAnZXhwYW5kVGl0bGUnLCAnY29sbGFwc2VUaXRsZSddKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmpba2V5XSAmJiB0eXBlb2Ygb2JqW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgfHwgZGVsaW1pdGVyc1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ialtrZXldLmluY2x1ZGVzKCd8fCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn8J+UpSBBQlNPTFVURSBGSU5BTCBDTEVBTlVQIC0gRm91bmQgfHwgaW4nLCBrZXksICc6Jywgb2JqW2tleV0uc3Vic3RyaW5nKDAsIDEwMCkgKyAob2JqW2tleV0ubGVuZ3RoID4gMTAwID8gJy4uLicgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gb2JqW2tleV0ucmVwbGFjZUFsbCgnfHwnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn8J+UpSBBQlNPTFVURSBGSU5BTCBDTEVBTlVQIC0gQ2xlYW5lZCcsIGtleSwgJzonLCBvYmpba2V5XS5zdWJzdHJpbmcoMCwgMTAwKSArIChvYmpba2V5XS5sZW5ndGggPiAxMDAgPyAnLi4uJyA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEVOU1VSRSBORVdMSU5FUyBBUkUgQ09OVkVSVEVEIC0gVGhpcyBpcyBhIHNhZmV0eSBuZXQgZm9yIEFMTCBkeW5hbWljIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGlmIChvYmpba2V5XS5pbmNsdWRlcygnXFxcXG4nKSB8fCBvYmpba2V5XS5pbmNsdWRlcygnXFxuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCfwn5SEIEFCU09MVVRFIEZJTkFMIE5FV0xJTkUgQ09OVkVSU0lPTiAtIEZvdW5kIG5ld2xpbmVzIGluJywga2V5LCAnOicsIG9ialtrZXldLnN1YnN0cmluZygwLCAxMDApICsgKG9ialtrZXldLmxlbmd0aCA+IDEwMCA/ICcuLi4nIDogJycpKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHRoaXMuY29udmVydE5ld2xpbmVzVG9CcmVha3Mob2JqW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ/CflIQgQUJTT0xVVEUgRklOQUwgTkVXTElORSBDT05WRVJTSU9OIC0gUmVzdWx0OicsIG9ialtrZXldLnN1YnN0cmluZygwLCAxMDApICsgKG9ialtrZXldLmxlbmd0aCA+IDEwMCA/ICcuLi4nIDogJycpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHZpc3VhbCBtYXJrZXIgdG8gaGVscCBkZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gJ/CflIRORVdMSU5FU19DT05WRVJURUQ6ICcgKyBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tJZkR5bmFtaWMoa2V5LCBmaWVsZE9iaiwgYXBpRGF0YSwgdXNlU2Vjb25kYXJ5QXBpS2V5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAvLyBjaGVjayBmb3IgY29uZmlnIGtleVxyXG4gICAgICAgIGNvbnN0IGNvbmZpZ0tleSA9IGtleSArICdfY29uZmlnJztcclxuICAgICAgICBmaWVsZE9iaiA9IHtcclxuICAgICAgICAgICAgLi4uZmllbGRPYmosIC4uLntcclxuICAgICAgICAgICAgICAgIFtjb25maWdLZXldOiBmaWVsZE9ialtjb25maWdLZXldIHx8IGZpZWxkT2JqW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJhZGRpdGlvbmFsX3BhcmFtZXRlcnNcIiAmJiBmaWVsZE9ialtrZXldLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGR5bmFtaWNWYWx1ZTtcclxuICAgICAgICAgICAgZmllbGRPYmpba2V5XS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHgucGFyYW1ldGVyX3R5cGUgPT09IFwiQ0VFX3RhYmxlX2NlbGxfdmFsdWVzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljVmFsdWUgPSB4LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkeW5hbWljVmFsdWU/LmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNWYWx1ZSA9IHRoaXMuc2V0RHluYW1pY0tleXNWYWx1ZShkeW5hbWljVmFsdWUsIGFwaURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCc/JykgJiYgZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCc6JykgJiYgIWR5bmFtaWNWYWx1ZS5pbmNsdWRlcygnaHR0cHM6Ly8nKSAmJiAhZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCdodHRwOi8vJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCd8fCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gL1xcfFxcfC9nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY1ZhbHVlPSBkeW5hbWljVmFsdWUucmVwbGFjZShyZWdleCwgJ3wtfCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHluYW1pY1ZhbHVlQXJyID0gZHluYW1pY1ZhbHVlLnNwbGl0KCd8fCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZhdWF0ZWRWYWxBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY1ZhbHVlQXJyLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWN1cnNpdmVGdW5jKHZhbCkuc3BsaXQoXCJcXG5cIikuam9pbihcIjxici8+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhdWF0ZWRWYWxBcnIucHVzaCgodmFsLmluY2x1ZGVzKCc/JykgJiYgdmFsLmluY2x1ZGVzKCc6JykpID8gZXZhbCh2YWwpIDogdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY1ZhbHVlID0gZXZhdWF0ZWRWYWxBcnIuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gR0xPQkFMIENMRUFOVVA6IFJlbW92ZSBBTEwgfHwgZGVsaW1pdGVycyBmcm9tIHRoZSBmaW5hbCByZXN1bHQgcmVnYXJkbGVzcyBvZiBzb3VyY2VcclxuICAgICAgICAgICAgaWYgKGR5bmFtaWNWYWx1ZSAmJiB0eXBlb2YgZHluYW1pY1ZhbHVlID09PSAnc3RyaW5nJyAmJiBkeW5hbWljVmFsdWUuaW5jbHVkZXMoJ3x8JykpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ/Cfp70gR0xPQkFMIENMRUFOVVAgKGFkZGl0aW9uYWxfcGFyYW1ldGVycykgLSBCZWZvcmUgcmVtb3ZpbmcgQUxMIHx8IGRlbGltaXRlcnM6JywgZHluYW1pY1ZhbHVlLnN1YnN0cmluZygwLCAxMDApICsgKGR5bmFtaWNWYWx1ZS5sZW5ndGggPiAxMDAgPyAnLi4uJyA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljVmFsdWUgPSBkeW5hbWljVmFsdWUucmVwbGFjZUFsbCgnfHwnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCfwn6e9IEdMT0JBTCBDTEVBTlVQIChhZGRpdGlvbmFsX3BhcmFtZXRlcnMpIC0gQWZ0ZXIgcmVtb3ZpbmcgQUxMIHx8IGRlbGltaXRlcnM6JywgZHluYW1pY1ZhbHVlLnN1YnN0cmluZygwLCAxMDApICsgKGR5bmFtaWNWYWx1ZS5sZW5ndGggPiAxMDAgPyAnLi4uJyA6ICcnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vZHluYW1pY1ZhbHVlID0gZHluYW1pY1ZhbHVlLnJlcGxhY2VBbGwoJ3x8JywnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IFtrZXldOiBmaWVsZE9ialtjb25maWdLZXldLCBbY29uZmlnS2V5XTogZHluYW1pY1ZhbHVlIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGR5bmFtaWNWYWx1ZSA9IGZpZWxkT2JqW2tleV07XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZ0tleSA9IGZpZWxkT2JqW2NvbmZpZ0tleV0gPyBjb25maWdLZXkgOiBrZXk7XHJcbiAgICAgICAgICAgIGlmICgoQXJyYXkuaXNBcnJheShmaWVsZE9ialtjb25maWdLZXldKSAmJlxyXG4gICAgICAgICAgICAgICAgZmllbGRPYmpbY29uZmlnS2V5XS5qb2luKCcnKS5pbmNsdWRlcygnKChkeW5hbWljKSknKSkgfHxcclxuICAgICAgICAgICAgICAgIChmaWVsZE9ialtjb25maWdLZXldICYmIGZpZWxkT2JqW2NvbmZpZ0tleV0uaW5jbHVkZXMoJygoZHluYW1pYykpJykpKSB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljVmFsdWUgPSB0aGlzLnNldER5bmFtaWNLZXlzVmFsdWUoZmllbGRPYmpbY29uZmlnS2V5XSwgYXBpRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFMV0FZUyBDT05WRVJUIE5FV0xJTkVTIC0gVGhpcyBzaG91bGQgaGFwcGVuIGZvciBBTEwgZHluYW1pYyBjb250ZW50LCBub3QganVzdCB0ZXJuYXJ5XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljVmFsdWUgPSB0aGlzLmNvbnZlcnROZXdsaW5lc1RvQnJlYWtzKGR5bmFtaWNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+UhCBNQUlOIFBBVEggTkVXTElORSBDT05WRVJTSU9OIC0gUmVzdWx0OicsIGR5bmFtaWNWYWx1ZS5zdWJzdHJpbmcoMCwgMTAwKSArIChkeW5hbWljVmFsdWUubGVuZ3RoID4gMTAwID8gJy4uLicgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ/CflIQgTUFJTiBQQVRIIC0gQ29udGFpbnMgPGJyPjonLCBkeW5hbWljVmFsdWUuaW5jbHVkZXMoJzxicj4nKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn5SNIERZTkFNSUMgVkFMVUUgREVCVUcgLSBBZnRlciBzZXREeW5hbWljS2V5c1ZhbHVlOicsIGR5bmFtaWNWYWx1ZS5zdWJzdHJpbmcoMCwgMTAwKSArIChkeW5hbWljVmFsdWUubGVuZ3RoID4gMTAwID8gJy4uLicgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ/CflI0gQ09ORElUSU9OIENIRUNLIC0gQ29udGFpbnMgfHw6JywgZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCd8fCcpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn5SNIENPTkRJVElPTiBDSEVDSyAtIENvbnRhaW5zID86JywgZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCc/JykpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ/CflI0gQ09ORElUSU9OIENIRUNLIC0gQ29udGFpbnMgOjonLCBkeW5hbWljVmFsdWUuaW5jbHVkZXMoJzonKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vICYmICFkeW5hbWljVmFsdWUuaW5jbHVkZXMoJ2h0dHBzOi8vJykgJiYgIWR5bmFtaWNWYWx1ZS5pbmNsdWRlcygnaHR0cDovLycpXHJcbiAgICAgICAgICAgICAgICBpZihkeW5hbWljVmFsdWUuaW5jbHVkZXMoJ3x8JykgJiYgZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCc/JykgJiYgZHluYW1pY1ZhbHVlLmluY2x1ZGVzKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+OryBFTlRFUklORyBURVJOQVJZIFBST0NFU1NJTkcgQkxPQ0snKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkeW5hbWljVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNWYWx1ZUFyciA9IGR5bmFtaWNWYWx1ZS5zcGxpdCgnfHwnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZhdWF0ZWRWYWxBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljVmFsdWVBcnIuZm9yRWFjaCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VTZWNvbmRhcnlBcGlLZXkgJiYgaSA9PT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHN0cmluZyAtIHJlcGxhY2UgYW55IGxpbmUgYnJlYWtzIHdpdGggPGJyPiBhbmQgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuY29udmVydE5ld2xpbmVzVG9CcmVha3ModmFsLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDUklUSUNBTDogUmVtb3ZlIGRlbGltaXRlcnMgZnJvbSB0aGUgRU5USVJFIGV4cHJlc3Npb24gZmlyc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ/Cfp7kgQkVGT1JFIGRlbGltaXRlciBjbGVhbnVwOicsIHZhbC5zdWJzdHJpbmcoMCwgMTAwKSArICh2YWwubGVuZ3RoID4gMTAwID8gJy4uLicgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLmNsZWFuQWxsRGVsaW1pdGVycyh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+nuSBBRlRFUiBkZWxpbWl0ZXIgY2xlYW51cDonLCB2YWwuc3Vic3RyaW5nKDAsIDEwMCkgKyAodmFsLmxlbmd0aCA+IDEwMCA/ICcuLi4nIDogJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgY29uZGl0aW9uYWwgZXhwcmVzc2lvbiB0aGF0IG5lZWRzIGV2YWx1YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn5SNIENoZWNraW5nIGlmIHRlcm5hcnk6JywgdmFsLnN1YnN0cmluZygwLCAxMDApICsgKHZhbC5sZW5ndGggPiAxMDAgPyAnLi4uJyA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnICAgSGFzID86JywgdmFsLmluY2x1ZGVzKCc/JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJyAgIEhhcyA6OicsIHZhbC5pbmNsdWRlcygnOicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcgICBIYXMgPyB3aXRoIHNwYWNlczonLCB2YWwuaW5jbHVkZXMoJyA/ICcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcgICBIYXMgOiB3aXRoIHNwYWNlczonLCB2YWwuaW5jbHVkZXMoJyA6ICcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmluY2x1ZGVzKCc/JykgJiYgdmFsLmluY2x1ZGVzKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+UpyBQcm9jZXNzaW5nIHRlcm5hcnkgZXhwcmVzc2lvbiAoZmxleGlibGUgbWF0Y2hpbmcpOicsIHZhbC5zdWJzdHJpbmcoMCwgMTAwKSArICh2YWwubGVuZ3RoID4gMTAwID8gJy4uLicgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVUZXJuYXJ5RXhwcmVzc2lvbih2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfinIUgVGVybmFyeSByZXN1bHQ6JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmF1YXRlZFZhbEFyci5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfinqHvuI8gTm90IGEgdGVybmFyeSwgYWRkaW5nIGFzLWlzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhdWF0ZWRWYWxBcnIucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGV2YWx1YXRpbmcgZXhwcmVzc2lvbjpcIiwgdmFsLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGYWxsIGJhY2sgdG8gdGhlIG9yaWdpbmFsIHZhbHVlIGlmIGV2YWx1YXRpb24gZmFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YXVhdGVkVmFsQXJyLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1ZhbHVlID0gZXZhdWF0ZWRWYWxBcnIuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRklOQUwgQ0xFQU5VUDogUmVtb3ZlIGFueSByZW1haW5pbmcgZGVsaW1pdGVycyBmcm9tIHRoZSBmaW5hbCByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+nvSBGSU5BTCBDTEVBTlVQIC0gQmVmb3JlIHJlbW92aW5nIGRlbGltaXRlcnM6JywgZHluYW1pY1ZhbHVlLnN1YnN0cmluZygwLCAxMDApICsgKGR5bmFtaWNWYWx1ZS5sZW5ndGggPiAxMDAgPyAnLi4uJyA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1ZhbHVlID0gZHluYW1pY1ZhbHVlLnJlcGxhY2VBbGwoJ3x8JywnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ/Cfp70gRklOQUwgQ0xFQU5VUCAtIEFmdGVyIHJlbW92aW5nIGRlbGltaXRlcnM6JywgZHluYW1pY1ZhbHVlLnN1YnN0cmluZygwLCAxMDApICsgKGR5bmFtaWNWYWx1ZS5sZW5ndGggPiAxMDAgPyAnLi4uJyA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkeW5hbWljVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHTE9CQUwgQ0xFQU5VUDogUmVtb3ZlIEFMTCB8fCBkZWxpbWl0ZXJzIGZyb20gdGhlIGZpbmFsIHJlc3VsdCByZWdhcmRsZXNzIG9mIHNvdXJjZVxyXG4gICAgICAgICAgICBpZiAoZHluYW1pY1ZhbHVlICYmIHR5cGVvZiBkeW5hbWljVmFsdWUgPT09ICdzdHJpbmcnICYmIGR5bmFtaWNWYWx1ZS5pbmNsdWRlcygnfHwnKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ/Cfp70gR0xPQkFMIENMRUFOVVAgLSBCZWZvcmUgcmVtb3ZpbmcgQUxMIHx8IGRlbGltaXRlcnM6JywgZHluYW1pY1ZhbHVlLnN1YnN0cmluZygwLCAxMDApICsgKGR5bmFtaWNWYWx1ZS5sZW5ndGggPiAxMDAgPyAnLi4uJyA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljVmFsdWUgPSBkeW5hbWljVmFsdWUucmVwbGFjZUFsbCgnfHwnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+nvSBHTE9CQUwgQ0xFQU5VUCAtIEFmdGVyIHJlbW92aW5nIEFMTCB8fCBkZWxpbWl0ZXJzOicsIGR5bmFtaWNWYWx1ZS5zdWJzdHJpbmcoMCwgMTAwKSArIChkeW5hbWljVmFsdWUubGVuZ3RoID4gMTAwID8gJy4uLicgOiAnJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2R5bmFtaWNWYWx1ZSA9IGR5bmFtaWNWYWx1ZS5yZXBsYWNlQWxsKCd8fCcsJycpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBba2V5XTogZHluYW1pY1ZhbHVlLCBbY29uZmlnS2V5XTogZmllbGRPYmpbY29uZmlnS2V5XSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY29udmVydE5ld2xpbmVzVG9CcmVha3ModGV4dCkge1xyXG4gICAgICAgIGlmICghdGV4dCkgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ/CflIQgTkVXTElORSBDT05WRVJTSU9OIC0gSW5wdXQ6JywgdGV4dC5zdWJzdHJpbmcoMCwgMTAwKSArICh0ZXh0Lmxlbmd0aCA+IDEwMCA/ICcuLi4nIDogJycpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+UhCBORVdMSU5FIENPTlZFUlNJT04gLSBDb250YWlucyBcXFxcbjonLCB0ZXh0LmluY2x1ZGVzKCdcXFxcbicpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+UhCBORVdMSU5FIENPTlZFUlNJT04gLSBDb250YWlucyBhY3R1YWwgbmV3bGluZXM6JywgdGV4dC5pbmNsdWRlcygnXFxuJykpO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHRcclxuICAgICAgICAgICAgLy8gQ29udmVydCBhY3R1YWwgbmV3bGluZXNcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLCAnPGJyPicpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IGxpdGVyYWwgZXNjYXBlZCBuZXdsaW5lc1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXG4vZywgJzxicj4nKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXHIvZywgJzxicj4nKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ29udmVydCB0YWJzIChhY3R1YWwgYW5kIGVzY2FwZWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHQvZywgJyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcdC9nLCAnJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn5SEIE5FV0xJTkUgQ09OVkVSU0lPTiAtIFJlc3VsdDonLCByZXN1bHQuc3Vic3RyaW5nKDAsIDEwMCkgKyAocmVzdWx0Lmxlbmd0aCA+IDEwMCA/ICcuLi4nIDogJycpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+UhCBORVdMSU5FIENPTlZFUlNJT04gLSBDb250YWlucyA8YnI+OicsIHJlc3VsdC5pbmNsdWRlcygnPGJyPicpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHJlY3Vyc2l2ZUZ1bmModmFsKSB7XHJcbiAgICAgICAgbGV0IGluaXQgPSB2YWwuaW5kZXhPZignKCcpO1xyXG4gICAgICAgIGxldCBmaW4gPSB2YWwuaW5kZXhPZignKScpO1xyXG4gICAgICAgIGxldCBleHByZXNzaW9uID0gdmFsLnN1YnN0cihpbml0KzEsZmluLWluaXQtMSk7XHJcbiAgICAgICAgbGV0IGV2YWx1YXRlZFZhbCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xyXG4gICAgICAgIHZhbCA9IHZhbC5yZXBsYWNlQWxsKCcoJytleHByZXNzaW9uKycpJywgZXZhbHVhdGVkVmFsKVxyXG4gICAgICAgIGlmKHZhbC5pbmNsdWRlcygnREFURV9DT01QQUlSJykpIHtcclxuICAgICAgICAgICAgdmFsID0gdGhpcy5yZWN1cnNpdmVGdW5jKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBldmFsdWF0ZUV4cHJlc3Npb24odmFsKSB7XHJcbiAgICAgICAgaWYodmFsLmluY2x1ZGVzKCdEQVRFX0NPTVBBSVInKSkge1xyXG4gICAgICAgICAgICBsZXQgdkFyciA9IHZhbC5zcGxpdCgnPycpO1xyXG4gICAgICAgICAgICBsZXQgdmFsQXJyID0gdkFyclswXS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICBpZih2YWxBcnJbMF0gPT0gJ0RBVEVfQ09NUEFJUicpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuY29tcGFpckRhdGVzKHZhbEFycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBhaXJEYXRlcyh2YWxBcnIpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7IFxyXG4gICAgICAgIGlmKHZhbEFyci5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICBpZih2YWxBcnJbMF0gPT0gJ0RBVEVfQ09NUEFJUicpIHtcclxuICAgICAgICAgICAgICAgIGlmKHZhbEFyclsxXS50cmltKCk9PSdDVVJSX0RBVEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsQXJyWzFdID0gbW9tZW50KG5ldyBEYXRlKCkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbEFyclsxXSA9IG1vbWVudChuZXcgRGF0ZSh2YWxBcnJbMV0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodmFsQXJyWzNdLnRyaW0oKT09J0NVUlJfREFURScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxBcnJbM10gPSBtb21lbnQobmV3IERhdGUoKSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsQXJyWzNdID0gbW9tZW50KG5ldyBEYXRlKHZhbEFyclszXSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2godmFsQXJyWzJdLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJz09JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsQXJyWzFdLmlzU2FtZSh2YWxBcnJbM10sICdkYXknKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbEFyclsxXS5pc0FmdGVyKHZhbEFyclszXSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWxBcnJbMV0uaXNCZWZvcmUodmFsQXJyWzNdKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHZhbEFyclsxXSA9PSB2YWxBcnJbM10pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RHluYW1pY0tleXNWYWx1ZShmaWVsZFZhbHVlLCBhcGlEYXRhKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2luZ2xlVmFsIG9mIGZpZWxkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaW5nbGVWYWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeW5hbWljS2V5cyA9IHRoaXMuZXh0cmFjdEFwaUtleXMoc2luZ2xlVmFsLnNwbGl0KCcoKGR5bmFtaWMpKScpWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkeW5hbWljS2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2godGhpcy5nZXRTZW50ZW5jZShkeW5hbWljS2V5cywgc2luZ2xlVmFsLCBhcGlEYXRhKS5yZXBsYWNlKCcoKGR5bmFtaWMpKScsICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHNpbmdsZVZhbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNLZXlzID0gdGhpcy5leHRyYWN0QXBpS2V5cyhmaWVsZFZhbHVlLnNwbGl0KCcoKGR5bmFtaWMpKScpWzFdKTtcclxuICAgICAgICAgICAgLy8gU3VwcG9ydCBmb3IgbXVsdGlwbGUgcmVzcG9uc2Uga2V5IGluIGR5bmFtaWMgbGFiZWxzIHdpdGggJ3wnXHJcbiAgICAgICAgICAgIGR5bmFtaWNLZXlzLmZvckVhY2goKGFwaUtleSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYXBpS2V5LmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXkgPSBhcGlLZXkucmVwbGFjZUFsbCgnJScsJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcGlLZXlBcnIgPSBhcGlLZXkuc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5QXJyLmZvckVhY2goKGtleVBhcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLZXkgUGFydDonLCBrZXlQYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja0hhbmRsZXJEYXRhRXhpc3RzKGtleVBhcnQuc3BsaXQoJyMjJylbMF0udHJpbSgpLCBrZXlQYXJ0KSAmJiAhZGF0YUZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gZmllbGRWYWx1ZS5yZXBsYWNlQWxsKGR5bmFtaWNLZXlzW2ldLCAnJScra2V5UGFydCsnJScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY0tleXNbaV0gPSAnJScra2V5UGFydCsnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VudGVuY2UoZHluYW1pY0tleXMsIGZpZWxkVmFsdWUsIGFwaURhdGEpLnJlcGxhY2UoJygoZHluYW1pYykpJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkeW5hbWljS2V5cyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNlbnRlbmNlKGR5bmFtaWNLZXlzLCBmaWVsZFZhbHVlLCBhcGlEYXRhKS5yZXBsYWNlKCcoKGR5bmFtaWMpKScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBnZXQgdGhlIHNlbnRlbmNlXHJcbiAgICAvLyAgKiBAcGFyYW0gdmFsdWVzIHRoZSBmaWVsZCBkYXRhXHJcbiAgICAvLyAgKiBAcGFyYW0gZGF0YSAgdGhlbiBhcGkgY2FsbCBiYWNrIGRhdGFcclxuICAgIC8vICAqL1xyXG4gICAgLy8gcHJpdmF0ZSBnZXREeW5hbWljU2VudGVuY2UoZmllbGQsIGtleSwgZGF0YSkge1xyXG4gICAgLy8gICAgIC8vIGZpZWxkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWVsZCkpO1xyXG4gICAgLy8gICAgIC8vIGxldCBjb25maWdfa2V5OiBhbnk7XHJcbiAgICAvLyAgICAgLy8gbGV0IHNlbnRlbmNlOiBhbnk7XHJcbiAgICAvLyAgICAgLy8gbGV0IGxpbmtlZF9hcGlfa2V5cyA9IFtdO1xyXG4gICAgLy8gICAgIC8vIGxldCBmaW5hbF9hcnJheV92YWx1ZXMgPSBbXTtcclxuICAgIC8vICAgICAvLyBsZXQgbmV3X3NlbnRlbmNlX3ZhbDogc3RyaW5nO1xyXG4gICAgLy8gICAgIC8vIGNvbmZpZ19rZXkgPSBrZXkgKyAnX2NvbmZpZyc7XHJcbiAgICAvLyAgICAgLy8gc2VudGVuY2UgPSAoZmllbGRbY29uZmlnX2tleV0pID8gZmllbGRbY29uZmlnX2tleV0gOiBmaWVsZFtrZXldO1xyXG4gICAgLy8gICAgIC8vIC8vIGNvbnNvbGUubG9nKCdoYXMgS2V5JywgZmllbGRbY29uZmlnX2tleV0sIGtleSk7XHJcbiAgICAvLyAgICAgLy8gZmllbGRbY29uZmlnX2tleV0gPSBzZW50ZW5jZTtcclxuICAgIC8vICAgICAvLyBpZiAoQXJyYXkuaXNBcnJheShzZW50ZW5jZSkpIHtcclxuICAgIC8vICAgICAvLyAgICAgLy8gZmllbGRba2V5ICsgJ19jb25maWcnXSA9IHNlbnRlbmNlO1xyXG4gICAgLy8gICAgIC8vICAgICBzZW50ZW5jZS5tYXAoc2VudGVuY2VfdmFsID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGlmICh0eXBlb2Ygc2VudGVuY2VfdmFsID09ICdzdHJpbmcnICYmIHNlbnRlbmNlX3ZhbC5zdGFydHNXaXRoKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLmV4dHJhY3RBcGlLZXlzKHNlbnRlbmNlX3ZhbCwgJy4qJSguKiklLionLCBsaW5rZWRfYXBpX2tleXMpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIHNlbnRlbmNlX3ZhbCA9IHRoaXMuZ2V0U2VudGVuY2Uoa2V5cywgc2VudGVuY2VfdmFsLCBkYXRhKTtcclxuICAgIC8vICAgICAvLyAgICAgICAgICAgICBuZXdfc2VudGVuY2VfdmFsID0gc2VudGVuY2VfdmFsLnJlcGxhY2UoJygoZHluYW1pYykpJywgJycpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIGZpbmFsX2FycmF5X3ZhbHVlcy5wdXNoKG5ld19zZW50ZW5jZV92YWwpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAvLyAgICAgICAgICAgICBmaW5hbF9hcnJheV92YWx1ZXMucHVzaChzZW50ZW5jZV92YWwpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICAvLyAgICAgZmllbGRba2V5XSA9IGZpbmFsX2FycmF5X3ZhbHVlcztcclxuICAgIC8vICAgICAvLyAgICAgLy8gZmllbGQgPSB7IC4uLmZpZWxkLCAuLi57IFtrZXldOiBmaW5hbF9hcnJheV92YWx1ZXMgfSB9O1xyXG4gICAgLy8gICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgLy8gICAgIGlmICh0eXBlb2Ygc2VudGVuY2UgPT0gJ3N0cmluZycgJiYgc2VudGVuY2Uuc3RhcnRzV2l0aCgnKChkeW5hbWljKSknKSkge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coZmllbGRbY29uZmlnX2tleV0pO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgdmFyIGtleXMgPSB0aGlzLmV4dHJhY3RBcGlLZXlzKHNlbnRlbmNlLCAnLiolKC4qKSUuKicsIGxpbmtlZF9hcGlfa2V5cyk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBzZW50ZW5jZSA9IHRoaXMuZ2V0U2VudGVuY2Uoa2V5cywgc2VudGVuY2UsIGRhdGEpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FmdGVyJywgZmllbGRba2V5XSk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBmaWVsZFtrZXldID0gc2VudGVuY2UucmVwbGFjZSgnKChkeW5hbWljKSknLCAnJyk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnQmVmb3JlJywgZmllbGRba2V5XSk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsdWVzJywgdmFsdWVzKTtcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIH1cclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhmaWVsZCk7XHJcbiAgICAvLyAgICAgLy8gcmV0dXJuIGZpZWxkO1xyXG4gICAgLy8gfVxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgdGhlIHNlbnRlbmNlXHJcbiAgICAgKiBAcGFyYW0gYXBpS2V5IHRoZSBhcGkga2V5IHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlbiBhcGkgY2FsbCBiYWNrIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRTZW50ZW5jZShrZXlzLCBzZW50ZW5jZSwgZGF0YSkge1xyXG4gICAgICAgIGlmIChrZXlzICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goKGFwaUtleSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBpS2V5ID0gYXBpS2V5LnNwbGl0KCclJylbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRzID0gYXBpS2V5LnNwbGl0KCc6OjonKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleVZhbHVlID0gdGhpcy5yZXR1cm5LZXlWYWx1ZShmb3JtYXRzWzBdLnRyaW0oKSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXBpS2V5LmluY2x1ZGVzKCc6OjonKSAmJiBmb3JtYXRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRzLnNoaWZ0KCk7IC8vIGZpcnN0IG9uZSBpcyBhcGkga2V5XHJcbiAgICAgICAgICAgICAgICAgICAga2V5VmFsdWUgPSB0aGlzLnJldHVybkZvcm1hdHRlZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0cy5zaGlmdCgpLCBmb3JtYXRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgha2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlBcGlLZXkoYXBpS2V5LCAncmVxdWVzdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VudGVuY2UgPSBzZW50ZW5jZS5yZXBsYWNlQWxsKCclJyArIGFwaUtleSArICclJywga2V5VmFsdWUgIT09IHVuZGVmaW5lZCA/IGtleVZhbHVlIDogJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbnRlbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyBmb3JtYXR0ZWQvdHJhbnNmb3JtZWQgZGF0YVxyXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZTogYW55XHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtVHlwZTogc3RyaW5nIHRoZSBtZXRob2QgdG8gdHJhbnNmb3JtXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0OiBBcnJheTxzdHJpbmc+IHRoZSBmb3JtYXRzIGZvciBleDogZGF0ZSByZXF1aXJlcyAxIGZvcm1hdFxyXG4gICAgICogd2hlcmVhcyBjdXJyZW5jeSBjYW4gaGF2ZSBtb3JlIHRoYW4gb25lIGZvcm1hdHMgb25lIGZvciB0aGUgY291bnRyeSBjb2RlXHJcbiAgICAgKiBhbmQgYW5vdGhlciBmb3IgdGhlIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgZGVjaW1hbCBwbGFjZXNcclxuICAgICAqL1xyXG4gICAgcmV0dXJuRm9ybWF0dGVkVmFsdWUoZGVmYXVsdFZhbHVlOiBhbnksIHRyYW5zZm9ybVR5cGU6IHN0cmluZywgZm9ybWF0OiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgbGV0IGtleVZhbHVlID0gdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ251bWJlcicgPyBkZWZhdWx0VmFsdWUudG9TdHJpbmcoKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHRyYW5zZm9ybVR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlICdkYXRldGltZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHpOYW1lID0gbW9tZW50LnR6Lmd1ZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYXJyYXkgdmFsdWVzIGZpcnN0XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IGtleVZhbHVlLmxlbmd0aCA+IDAgPyBrZXlWYWx1ZVswXSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBzdHJpbmcgdG8gZW5zdXJlIHdlIGNhbiB1c2Ugc3RyaW5nIG1ldGhvZHNcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0gU3RyaW5nKGtleVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICgha2V5VmFsdWUuaW5jbHVkZXMoJyAnKSAmJiAha2V5VmFsdWUuaW5jbHVkZXMoJy0nKSAmJiAha2V5VmFsdWUuaW5jbHVkZXMoJy8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVZhbHVlID0gTnVtYmVyKGtleVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0ga2V5VmFsdWUgJiYga2V5VmFsdWUgIT0gJycgPyBtb21lbnQodGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGtleVZhbHVlKSkpLnR6KHR6TmFtZSkuZm9ybWF0KGZvcm1hdFswXSkgOiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0aW1lJzpcclxuICAgICAgICAgICAgICAgIGlmICgha2V5VmFsdWUuaW5jbHVkZXMoJyAnKSAmJiAha2V5VmFsdWUuaW5jbHVkZXMoJy0nKSAmJiAha2V5VmFsdWUuaW5jbHVkZXMoJy8nKSAmJiAha2V5VmFsdWUuaW5jbHVkZXMoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVZhbHVlID0gTnVtYmVyKGtleVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChrZXlWYWx1ZSAmJiBTdHJpbmcoa2V5VmFsdWUpLmluY2x1ZGVzKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IG1vbWVudChrZXlWYWx1ZSwgZm9ybWF0WzBdKS5mb3JtYXQoZm9ybWF0WzBdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5VmFsdWUgPSBtb21lbnQobmV3IERhdGUoa2V5VmFsdWUpKS5mb3JtYXQoZm9ybWF0WzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjdXJyZW5jeSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2N1cnInOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogdXNlIEludGwgZm9ybWF0IGZvciBjdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKGtleVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVZhbHVlID0gYCR7Z2V0Q3VycmVuY3lTeW1ib2woZm9ybWF0WzBdLCAnbmFycm93Jyl9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke051bWJlcihrZXlWYWx1ZSkudG9GaXhlZChOdW1iZXIoZm9ybWF0WzFdKSkucmVwbGFjZSgvXFxkKD89KFxcZHszfSkrXFwuKS9nLCAnJCYsJyl9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXNrJzpcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0gdGhpcy5nZXRNYXNrZWRJbnB1dFZhbHVlKGtleVZhbHVlLCBmb3JtYXRbMF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hc2tsYWJlbCc6XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IHRoaXMuZ2V0TWFza2VkT3V0cHV0VmFsdWVmb3JMYWJlbChrZXlWYWx1ZSwgZm9ybWF0WzBdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtYXNrbnVtYmVybGltaXQnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHNNYXNrID0gZm9ybWF0WzBdLnNwbGl0KCd8JylcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0gdGhpcy5jb21tb25VdGlsLmdldE1hc2tlZERhdGEoa2V5VmFsdWUsIGZvcm1hdHNNYXNrWzBdLCBmb3JtYXRzTWFza1sxXSwgZm9ybWF0c01hc2tbMl0sIGZvcm1hdHNNYXNrWzNdLCBmb3JtYXRzTWFza1s0XSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndGhvdXNhbmRfc2VwYXJhdG9yJzpcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0ga2V5VmFsdWUgJiYga2V5VmFsdWUgIT0gJycgPyB0aGlzLmNvbW1vblV0aWwuZm9ybWF0TnVtYmVyKGtleVZhbHVlKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBQaXBlIEZhaWxlZCwgVmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkoeyB2YWx1ZVRvVHJhbnNGb3JtOiBkZWZhdWx0VmFsdWUsIHR5cGU6IHRyYW5zZm9ybVR5cGUsIGZvcm1hdCB9KX1gKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFza2VkT3V0cHV0VmFsdWVmb3JMYWJlbChpbnB1dFZhbHVlLCBtYXNrKSB7XHJcbiAgICAgICAgY29uc3QgbWFza0RhdGEgPSBbXTtcclxuICAgICAgICBjb25zdCBhcGlEYXRhID0gaW5wdXRWYWx1ZS5zcGxpdCgnJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBtYXNrLnNwbGl0KCcnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50ID09ICdYJyA/IG1hc2tEYXRhLnB1c2goYXBpRGF0YVtpbmRleCsrXSkgOiBtYXNrRGF0YS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbnB1dFZhbHVlICYmIG1hc2tEYXRhICYmIG1hc2tEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1hc2tEYXRhLmpvaW4oJycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hc2tlZElucHV0VmFsdWUoaW5wdXRWYWx1ZSwgbWFzaykge1xyXG4gICAgICAgIGNvbnN0IG1hc2tEYXRhID0gW107XHJcbiAgICAgICAgbWFzay5zcGxpdCgnJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudCA9PSAnWCcgPyBtYXNrRGF0YS5wdXNoKC9bMC05YS16QS1aXS8pIDogZWxlbWVudCA9PSAnMCcgPyBtYXNrRGF0YS5wdXNoKC9cXGQvKSA6IG1hc2tEYXRhLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgJiYgbWFza0RhdGEgJiYgbWFza0RhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0RGF0YSA9IHRoaXMuY29uZm9ybVRvTWFzayhpbnB1dFZhbHVlLCBtYXNrRGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb252ZXJ0RGF0YS5jb25mb3JtZWRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIyMjIyMjIyMjIFRoaXMgaXMgYSBzdWJzdGl0dXRlIGZ1bmN0aW9uIGZvciBtYXNraW5nLCBuZWVkIHRvIHRlc3QgIyMjIyMjIyMjI1xyXG4gICAgY29uZm9ybVRvTWFzayhyYXdWYWx1ZSwgbWFzaykge1xyXG4gICAgICAgIGxldCBjb25mb3JtZWRWYWx1ZSA9ICcnOyBsZXQgcmF3SW5kZXggPSAwOyBmb3IgKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbWFza0NoYXIgPSBtYXNrW2ldOyBpZiAocmF3SW5kZXggPj0gcmF3VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgIC8vIFN0b3AgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBpbnB1dCB2YWx1ZSAgICBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgY29uc3QgcmF3Q2hhciA9IHJhd1ZhbHVlW3Jhd0luZGV4XTsgXHJcbiAgICAgICAgICAgIGlmIChtYXNrQ2hhciA9PT0gJzknICYmIC9cXGQvLnRlc3QocmF3Q2hhcikpIHsgXHJcbiAgICAgICAgICAgICAgICBjb25mb3JtZWRWYWx1ZSArPSByYXdDaGFyOyByYXdJbmRleCsrOyBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXNrQ2hhciA9PT0gJ0EnICYmIC9bYS16QS1aXS8udGVzdChyYXdDaGFyKSkgeyBcclxuICAgICAgICAgICAgICAgIGNvbmZvcm1lZFZhbHVlICs9IHJhd0NoYXI7IHJhd0luZGV4Kys7IFxyXG4gICAgICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgICAgICAgIGNvbmZvcm1lZFZhbHVlICs9IG1hc2tDaGFyOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gcmV0dXJuIHsnY29uZm9ybWVkVmFsdWUnOiBjb25mb3JtZWRWYWx1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgYXBpIGtleSB0aGF0IGlzIHNldCB0byBkeW5hbWljXHJcbiAgICAgKiBAcGFyYW0gYXBpS2V5IHRoZSBhcGkga2V5IHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlbiBhcGkgY2FsbCBiYWNrIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5LZXlWYWx1ZShhcGlLZXksIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRBUElLZXlVdGlsLmlzU2luZ2xlQXBpS2V5IHx8IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoYXBpS2V5LCBkYXRhKSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoYXBpS2V5LCBkYXRhKSA6IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoYXBpS2V5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBUElLZXlVdGlsLnJldHVyblZhbHVlRnJvbUFwaVN0b3JlVXNpbmdIYW5kbGVyTmFtZShhcGlLZXkpKSAhPT0gbnVsbCA/IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoYXBpS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QVBJS2V5VXRpbC5yZXR1cm5WYWx1ZUZyb21BcGlTdG9yZVVzaW5nSGFuZGxlck5hbWUoYXBpS2V5KSkgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFnZ3Jlc3NpdmVseSBjbGVhbiBhbGwgZGVsaW1pdGVycyBmcm9tIGEgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYW5BbGxEZWxpbWl0ZXJzKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghaW5wdXQpIHJldHVybiBpbnB1dDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+nvSBDTEVBTiBERUxJTUlURVJTIC0gSW5wdXQgKGxlbmd0aDonLCBpbnB1dC5sZW5ndGgsICcpOicsIGlucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2xlYW5SZXN1bHQgPSBpbnB1dC50cmltKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBtb3N0IGNvbW1vbiBwYXR0ZXJuOiB8fC4uLnx8IChyZWdhcmRsZXNzIG9mIGludGVybmFsIHF1b3RlcylcclxuICAgICAgICBpZiAoY2xlYW5SZXN1bHQuc3RhcnRzV2l0aChcInx8XCIpICYmIGNsZWFuUmVzdWx0LmVuZHNXaXRoKFwifHxcIikpIHtcclxuICAgICAgICAgICAgY2xlYW5SZXN1bHQgPSBjbGVhblJlc3VsdC5zdWJzdHJpbmcoMiwgY2xlYW5SZXN1bHQubGVuZ3RoIC0gMik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn6e9IENMRUFOIERFTElNSVRFUlMgLSBSZW1vdmVkIHx8Li4ufHwgcGF0dGVybiwgcmVzdWx0OicsIGNsZWFuUmVzdWx0LnN1YnN0cmluZygwLCAxMDApICsgKGNsZWFuUmVzdWx0Lmxlbmd0aCA+IDEwMCA/ICcuLi4nIDogJycpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjazogYWdncmVzc2l2ZSBkZWxpbWl0ZXIgcmVtb3ZhbCBmb3Igb3RoZXIgcGF0dGVybnNcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzUmVzdWx0ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25zID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEtlZXAgY2xlYW5pbmcgdW50aWwgbm8gbW9yZSBjaGFuZ2VzIG9jY3VyIG9yIG1heCBpdGVyYXRpb25zIHJlYWNoZWRcclxuICAgICAgICAgICAgd2hpbGUgKGNsZWFuUmVzdWx0ICE9PSBwcmV2aW91c1Jlc3VsdCAmJiBpdGVyYXRpb25zIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0ID0gY2xlYW5SZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zKys7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGDwn6e9IENMRUFOIERFTElNSVRFUlMgLSBJdGVyYXRpb24gJHtpdGVyYXRpb25zfTpgLCBjbGVhblJlc3VsdC5zdWJzdHJpbmcoMCwgNTApICsgKGNsZWFuUmVzdWx0Lmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGRlbGltaXRlciBwYXR0ZXJucyAtIG1vcmUgYWdncmVzc2l2ZVxyXG4gICAgICAgICAgICAgICAgY2xlYW5SZXN1bHQgPSBjbGVhblJlc3VsdC5yZXBsYWNlKC9eXFx8XFx8Ky9nLCAnJyk7IC8vIFJlbW92ZSB8fCBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgICAgICBjbGVhblJlc3VsdCA9IGNsZWFuUmVzdWx0LnJlcGxhY2UoL1xcfFxcfCskL2csICcnKTsgLy8gUmVtb3ZlIHx8IGZyb20gZW5kICBcclxuICAgICAgICAgICAgICAgIGNsZWFuUmVzdWx0ID0gY2xlYW5SZXN1bHQucmVwbGFjZSgvXlxcfCsvZywgJycpOyAvLyBSZW1vdmUgfCBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgICAgICBjbGVhblJlc3VsdCA9IGNsZWFuUmVzdWx0LnJlcGxhY2UoL1xcfCskL2csICcnKTsgLy8gUmVtb3ZlIHwgZnJvbSBlbmRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVHJpbSB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgICAgICBjbGVhblJlc3VsdCA9IGNsZWFuUmVzdWx0LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVkZ2UgY2FzZXMgd2hlcmUgdGhlIGVudGlyZSBjb250ZW50IGlzIGp1c3QgZGVsaW1pdGVyc1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVzdWx0ID09PSAnfHwnIHx8IGNsZWFuUmVzdWx0ID09PSAnfCcgfHwgY2xlYW5SZXN1bHQgPT09ICd8fHx8JyB8fCBjbGVhblJlc3VsdCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZXN1bHQgPT09ICcnKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjbGVhblJlc3VsdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZpbmFsIHRyaW0gYW5kIHNhZmV0eSBjaGVja1xyXG4gICAgICAgIGNsZWFuUmVzdWx0ID0gY2xlYW5SZXN1bHQudHJpbSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn6e9IENMRUFOIERFTElNSVRFUlMgLSBGaW5hbCByZXN1bHQgKGxlbmd0aDonLCBjbGVhblJlc3VsdC5sZW5ndGgsICcpOicsIGNsZWFuUmVzdWx0LnN1YnN0cmluZygwLCAxMDApICsgKGNsZWFuUmVzdWx0Lmxlbmd0aCA+IDEwMCA/ICcuLi4nIDogJycpKTtcclxuICAgICAgICByZXR1cm4gY2xlYW5SZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYWZlbHkgZXZhbHVhdGUgdGVybmFyeSBleHByZXNzaW9ucyB3aXRob3V0IHVzaW5nIGV2YWwoKVxyXG4gICAgICogSGFuZGxlcyB0aGUgZm9ybWF0OiAnY29uZGl0aW9uJyA9PSAndmFsdWUnID8gdHJ1ZVJlc3VsdCA6IGZhbHNlUmVzdWx0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZXZhbHVhdGVUZXJuYXJ5RXhwcmVzc2lvbihleHByZXNzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBxdWVzdGlvbiBtYXJrIGFuZCB0aGUgQ09SUkVDVCBjb2xvbiBmb3IgdGVybmFyeSBvcGVyYXRvclxyXG4gICAgICAgICAgICBjb25zdCBxdWVzdGlvbkluZGV4ID0gZXhwcmVzc2lvbi5pbmRleE9mKCc/Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocXVlc3Rpb25JbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSB0ZXJuYXJ5IGNvbG9uIGJ5IGxvb2tpbmcgZm9yIHBhdHRlcm46ID8gdmFsdWUgOiB2YWx1ZVxyXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGZpbmQgdGhlIGNvbG9uIHRoYXQncyBwYXJ0IG9mIHRoZSB0ZXJuYXJ5LCBub3QgaW4gdGhlIGNvbnRlbnRcclxuICAgICAgICAgICAgbGV0IGNvbG9uSW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgICAgIC8vIExvb2sgZm9yIGNvbG9ucyBhZnRlciB0aGUgcXVlc3Rpb24gbWFya1xyXG4gICAgICAgICAgICBjb25zdCBhZnRlclF1ZXN0aW9uID0gZXhwcmVzc2lvbi5zdWJzdHJpbmcocXVlc3Rpb25JbmRleCArIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gU3RyYXRlZ3k6IExvb2sgZm9yIGNvbG9uIHRoYXQgaGFzIHF1b3RlcyBhcm91bmQgdGhlIHZhbHVlcyAodHlwaWNhbCB0ZXJuYXJ5IHBhdHRlcm4pXHJcbiAgICAgICAgICAgIC8vIFBhdHRlcm46ID8gJ3ZhbHVlJyA6ICd2YWx1ZScgb3IgPyAnLScgOiAndmFsdWUnXHJcbiAgICAgICAgICAgIGNvbnN0IHRlcm5hcnlQYXR0ZXJuID0gL1xcP1xccypbJ1wiXVteJ1wiXSpbJ1wiXVxccyo6XFxzKlsnXCJdW14nXCJdKlsnXCJdfFxcP1xccypbJ1wiXVteJ1wiXSpbJ1wiXVxccyo6XFxzKlteJ1wiXSskfFxcP1xccypbXidcIl0rXFxzKjpcXHMqWydcIl1bXidcIl0qWydcIl0vO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGV4cHJlc3Npb24ubWF0Y2godGVybmFyeVBhdHRlcm4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb2xvbiBpbiB0aGUgbWF0Y2hlZCBwYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFN0YXJ0ID0gZXhwcmVzc2lvbi5pbmRleE9mKG1hdGNoWzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoUGFydCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb25Jbk1hdGNoID0gbWF0Y2hQYXJ0Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBjb2xvbkluZGV4ID0gbWF0Y2hTdGFydCArIGNvbG9uSW5NYXRjaDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrOiBmaW5kIHRoZSBsYXN0IGNvbG9uIHRoYXQgY29tZXMgYWZ0ZXIgdGhlIHF1ZXN0aW9uIG1hcmtcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpcyBsaWtlbHkgdG8gYmUgdGhlIHRlcm5hcnkgY29sb24gKG5vdCBpbnNpZGUgcXVvdGVzKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoU3RhcnQgPSBxdWVzdGlvbkluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wSW5kZXggPSBzZWFyY2hTdGFydDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0ZW1wSW5kZXggPCBleHByZXNzaW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBleHByZXNzaW9uW3RlbXBJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGNvbG9uIGlzIGxpa2VseSB0aGUgdGVybmFyeSBjb2xvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBieSBlbnN1cmluZyBpdCdzIG5vdCBpbnNpZGUgcXVvdGVzIG9yIHBhcnQgb2YgdGhlIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlQ29sb24gPSBleHByZXNzaW9uLnN1YnN0cmluZyhxdWVzdGlvbkluZGV4ICsgMSwgdGVtcEluZGV4KS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyQ29sb24gPSBleHByZXNzaW9uLnN1YnN0cmluZyh0ZW1wSW5kZXggKyAxKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBib3RoIHBhcnRzIGxvb2sgbGlrZSB2YWx1ZXMgKHN0YXJ0IHdpdGggcXVvdGVzIG9yIGFyZSBzaG9ydCksIHRoaXMgbWlnaHQgYmUgb3VyIGNvbG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmVmb3JlQ29sb24uc3RhcnRzV2l0aChcIidcIikgfHwgYmVmb3JlQ29sb24uc3RhcnRzV2l0aCgnXCInKSB8fCBiZWZvcmVDb2xvbiA9PT0gJy0nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFmdGVyQ29sb24uc3RhcnRzV2l0aChcIidcIikgfHwgYWZ0ZXJDb2xvbi5zdGFydHNXaXRoKCdcIicpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb25JbmRleCA9IHRlbXBJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29sb25JbmRleCA9PT0gLTEgfHwgcXVlc3Rpb25JbmRleCA+PSBjb2xvbkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgY29uZGl0aW9uLCB0cnVlIHZhbHVlLCBhbmQgZmFsc2UgdmFsdWVcclxuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uUGFydCA9IGV4cHJlc3Npb24uc3Vic3RyaW5nKDAsIHF1ZXN0aW9uSW5kZXgpLnRyaW0oKTtcclxuICAgICAgICAgICAgbGV0IHRydWVWYWx1ZSA9IGV4cHJlc3Npb24uc3Vic3RyaW5nKHF1ZXN0aW9uSW5kZXggKyAxLCBjb2xvbkluZGV4KS50cmltKCk7XHJcbiAgICAgICAgICAgIGxldCBmYWxzZVZhbHVlID0gZXhwcmVzc2lvbi5zdWJzdHJpbmcoY29sb25JbmRleCArIDEpLnRyaW0oKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYW4gcXVvdGVzIGZyb20gdGhlIHZhbHVlcyAoZGVsaW1pdGVycyBhbHJlYWR5IHJlbW92ZWQgYXQgZXhwcmVzc2lvbiBsZXZlbClcclxuICAgICAgICAgICAgdHJ1ZVZhbHVlID0gdHJ1ZVZhbHVlLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgZmFsc2VWYWx1ZSA9IGZhbHNlVmFsdWUucmVwbGFjZSgvXlsnXCJdfFsnXCJdJC9nLCAnJykudHJpbSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBjb25kaXRpb24gLSBsb29raW5nIGZvciBwYXR0ZXJucyBsaWtlICd2YWx1ZScgPT0gJycgb3IgJ3ZhbHVlJyAhPSAnJyBvciAndmFsdWUnID09ICdzb21ldGhpbmcnXHJcbiAgICAgICAgICAgIGxldCBpc0NvbmRpdGlvblRydWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSAhPSAnJyBwYXR0ZXJuXHJcbiAgICAgICAgICAgIGlmIChjb25kaXRpb25QYXJ0LmluY2x1ZGVzKFwiICE9ICcnXCIpIHx8IGNvbmRpdGlvblBhcnQuaW5jbHVkZXMoJyAhPSBcIlwiJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHZhbHVlIGJlZm9yZSAhPSAnJ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb25kaXRpb25QYXJ0LnNwbGl0KCcgIT0gJylbMF0ucmVwbGFjZSgvXlsnXCJdfFsnXCJdJC9nLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaXNDb25kaXRpb25UcnVlID0gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGFuZGxlID09ICcnIHBhdHRlcm5cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29uZGl0aW9uUGFydC5pbmNsdWRlcyhcIiA9PSAnJ1wiKSB8fCBjb25kaXRpb25QYXJ0LmluY2x1ZGVzKCcgPT0gXCJcIicpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSB2YWx1ZSBiZWZvcmUgPT0gJydcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29uZGl0aW9uUGFydC5zcGxpdCgnID09ICcpWzBdLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uVHJ1ZSA9IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciAhPSBwYXR0ZXJuc1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjb25kaXRpb25QYXJ0LmluY2x1ZGVzKCcgIT0gJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gY29uZGl0aW9uUGFydC5zcGxpdCgnICE9ICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdFZhbHVlID0gcGFydHNbMF0ucmVwbGFjZSgvXlsnXCJdfFsnXCJdJC9nLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRWYWx1ZSA9IHBhcnRzWzFdLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlzQ29uZGl0aW9uVHJ1ZSA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgPT0gcGF0dGVybnNcclxuICAgICAgICAgICAgZWxzZSBpZiAoY29uZGl0aW9uUGFydC5pbmNsdWRlcygnID09ICcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGNvbmRpdGlvblBhcnQuc3BsaXQoJyA9PSAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRWYWx1ZSA9IHBhcnRzWzBdLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0VmFsdWUgPSBwYXJ0c1sxXS5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpc0NvbmRpdGlvblRydWUgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgYXBwcm9wcmlhdGUgdmFsdWUgYmFzZWQgb24gY29uZGl0aW9uICh2YWx1ZXMgYXJlIGFscmVhZHkgY2xlYW5lZClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaXNDb25kaXRpb25UcnVlID8gdHJ1ZVZhbHVlIDogZmFsc2VWYWx1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAvLyBIYW5kbGUgZm9ybWF0dGluZyAtIGNvbnZlcnQgYm90aCBsaXRlcmFsIFxcbiBhbmQgYWN0dWFsIG5ld2xpbmVzIHRvIDxicj4gdGFncyBmb3IgSFRNTCBkaXNwbGF5XHJcbiAgICAgICAgICAgIC8vIGxldCBmaW5hbFJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9cXFxcbi9nLCAnPGJyPicpOyAvLyBDb252ZXJ0IGxpdGVyYWwgXFxuXHJcbiAgICAgICAgICAgIC8vIGZpbmFsUmVzdWx0ID0gZmluYWxSZXN1bHQucmVwbGFjZSgvXFxuL2csICc8YnI+Jyk7IC8vIENvbnZlcnQgYWN0dWFsIG5ld2xpbmVzXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247IC8vIFJldHVybiBvcmlnaW5hbCBpZiBwYXJzaW5nIGZhaWxzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgaGFuZGxlciBkYXRhIGV4aXN0cyBpbiB0aGUgQVBJIGRhdGEgb2YgQWtpdGEgc3RvcmVcclxuICAgICAqIEBwYXJhbSBoYW5kbGVyTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBoYW5kbGVyIHRvIGNoZWNrIGZvclxyXG4gICAgICogQHBhcmFtIGFwaUtleSAtIE9wdGlvbmFsIHNwZWNpZmljIEFQSSBrZXkgdG8gY2hlY2sgd2l0aGluIHRoZSBoYW5kbGVyIGRhdGFcclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gLSB0cnVlIGlmIGhhbmRsZXIgZGF0YSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBjaGVja0hhbmRsZXJEYXRhRXhpc3RzKGhhbmRsZXJOYW1lOiBzdHJpbmcsIGFwaUtleT86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIEdldCBhbGwgQVBJIHN0b3JlIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgYXBpU3RvcmVEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBbGxBcGlTdG9yZURhdGEoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghYXBpU3RvcmVEYXRhIHx8IGFwaVN0b3JlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaGFuZGxlciBleGlzdHMgaW4gdGhlIHN0b3JlXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gYXBpU3RvcmVEYXRhLmZpbmQoaXRlbSA9PiBcclxuICAgICAgICAgICAgICAgIGl0ZW0uYXBpS2V5ID09PSBoYW5kbGVyTmFtZSB8fCBcclxuICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT09IGhhbmRsZXJOYW1lIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUoaXRlbS5pZCkgPT09IGhhbmRsZXJOYW1lXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhbmRsZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIG5vIHNwZWNpZmljIGFwaUtleSBwcm92aWRlZCwganVzdCBjaGVjayBpZiBoYW5kbGVyIGV4aXN0cyB3aXRoIGRhdGFcclxuICAgICAgICAgICAgaWYgKCFhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyRGF0YS52YWx1ZSAhPT0gbnVsbCAmJiBoYW5kbGVyRGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBzcGVjaWZpYyBhcGlLZXkgcHJvdmlkZWQsIGNoZWNrIGlmIGl0IGV4aXN0cyBpbiB0aGUgaGFuZGxlcidzIHZhbHVlXHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyRGF0YS52YWx1ZSAmJiB0eXBlb2YgaGFuZGxlckRhdGEudmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlckRhdGEudmFsdWUuaGFzT3duUHJvcGVydHkoYXBpS2V5KSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyRGF0YS52YWx1ZVthcGlLZXldICE9PSBudWxsICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJEYXRhLnZhbHVlW2FwaUtleV0gIT09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGhhbmRsZXIgZGF0YSBleGlzdGVuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGhhbmRsZXIgZGF0YSBmcm9tIHRoZSBBUEkgZGF0YSBvZiBBa2l0YSBzdG9yZVxyXG4gICAgICogQHBhcmFtIGhhbmRsZXJOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGhhbmRsZXIgdG8gcmV0cmlldmUgZGF0YSBmb3JcclxuICAgICAqIEBwYXJhbSBhcGlLZXkgLSBPcHRpb25hbCBzcGVjaWZpYyBBUEkga2V5IHRvIHJldHJpZXZlIGZyb20gdGhlIGhhbmRsZXIgZGF0YVxyXG4gICAgICogQHJldHVybnMgYW55IC0gVGhlIGhhbmRsZXIgZGF0YSBvciBzcGVjaWZpYyBBUEkga2V5IGRhdGEsIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICAgKi9cclxuICAgIGdldEhhbmRsZXJEYXRhKGhhbmRsZXJOYW1lOiBzdHJpbmcsIGFwaUtleT86IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gR2V0IGFsbCBBUEkgc3RvcmUgZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBhcGlTdG9yZURhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFsbEFwaVN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFhcGlTdG9yZURhdGEgfHwgYXBpU3RvcmVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZpbmQgaGFuZGxlciBkYXRhIGluIHRoZSBzdG9yZVxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyRGF0YSA9IGFwaVN0b3JlRGF0YS5maW5kKGl0ZW0gPT4gXHJcbiAgICAgICAgICAgICAgICBpdGVtLmFwaUtleSA9PT0gaGFuZGxlck5hbWUgfHwgXHJcbiAgICAgICAgICAgICAgICBpdGVtLmlkID09PSBoYW5kbGVyTmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGl0ZW0uaWQpID09PSBoYW5kbGVyTmFtZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYW5kbGVyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIG5vIHNwZWNpZmljIGFwaUtleSBwcm92aWRlZCwgcmV0dXJuIHRoZSBlbnRpcmUgaGFuZGxlciB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoIWFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBzcGVjaWZpYyBhcGlLZXkgcHJvdmlkZWQsIHJldHVybiB0aGF0IHNwZWNpZmljIGRhdGFcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXJEYXRhLnZhbHVlICYmIHR5cGVvZiBoYW5kbGVyRGF0YS52YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyRGF0YS52YWx1ZVthcGlLZXldIHx8IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgaGFuZGxlciBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgbXVsdGlwbGUgaGFuZGxlciBkYXRhIGtleXMgZXhpc3QgaW4gdGhlIEFQSSBkYXRhIG9mIEFraXRhIHN0b3JlXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlck5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgaGFuZGxlciB0byBjaGVja1xyXG4gICAgICogQHBhcmFtIGFwaUtleXMgLSBBcnJheSBvZiBBUEkga2V5cyB0byBjaGVjayBmb3IgZXhpc3RlbmNlXHJcbiAgICAgKiBAcmV0dXJucyBvYmplY3QgLSBPYmplY3Qgd2l0aCBlYWNoIEFQSSBrZXkgYW5kIGl0cyBleGlzdGVuY2Ugc3RhdHVzXHJcbiAgICAgKi9cclxuICAgIGNoZWNrTXVsdGlwbGVIYW5kbGVyRGF0YUV4aXN0cyhoYW5kbGVyTmFtZTogc3RyaW5nLCBhcGlLZXlzOiBzdHJpbmdbXSk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhcGlLZXkgb2YgYXBpS2V5cykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2FwaUtleV0gPSB0aGlzLmNoZWNrSGFuZGxlckRhdGFFeGlzdHMoaGFuZGxlck5hbWUsIGFwaUtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBtdWx0aXBsZSBoYW5kbGVyIGRhdGEgZXhpc3RlbmNlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBhbGwga2V5cyBhcyBmYWxzZSBpbiBjYXNlIG9mIGVycm9yXHJcbiAgICAgICAgICAgIGFwaUtleXMuZm9yRWFjaChrZXkgPT4gcmVzdWx0W2tleV0gPSBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIl19