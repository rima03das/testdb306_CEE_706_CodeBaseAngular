export class FlatUnflat {
    appDataService;
    flattenedJSON = {};
    constructor(appDataService) {
        this.appDataService = appDataService;
    }
    // Create Request Body according to step data and blocks data
    createRequestBodyonStepBlockData(requestBody, stepId) {
        const obj = {};
        /** store the app data in the request body */
        this.appDataService.getAllStepDataWithApiKey(stepId).subscribe(results => {
            for (const data of results) {
                obj[data.apiKey] = data.value;
            }
        });
        return obj;
    }
    // Parse the json and create the nested structure
    createNestedObject(obj, type = "") {
        // console.log(obj);
        let flattened;
        if (type == "repeatable") {
            flattened = this.flattenRepeatableBlock(obj);
        }
        else {
            flattened = this.flatten(obj);
        }
        if (flattened === undefined) {
            flattened = obj;
        }
        return flattened;
    }
    // Code flattening function
    // responseFlattener = (function (isArray, wrapped) {
    //   return function (table) {
    //     return reduce("", {}, table);
    //   };
    //   function reduce(path, accumulator, table) {
    //     if (isArray(table)) {
    //       var length = table.length;
    //       if (length) {
    //         var index = 0;
    //         while (index < length) {
    //           var property = path + "[]", item = table[index++];
    //           if (wrapped(item) !== item) accumulator[property] = item;
    //           else reduce(property, accumulator, item);
    //         }
    //       } else accumulator[path] = table;
    //     } else {
    //       var empty = true;
    //       if (path) {
    //         for (var property in table) {
    //           var item = table[property], property = path + "." + property, empty = false;
    //           if (wrapped(item) !== item) accumulator[property] = item;
    //           else reduce(property, accumulator, item);
    //         }
    //       } else {
    //         for (var property in table) {
    //           var item = table[property], empty = false;
    //           if (wrapped(item) !== item) accumulator[property] = item;
    //           else reduce(property, accumulator, item);
    //         }
    //       }
    //       if (empty) accumulator[path] = table;
    //     }
    //     return accumulator;
    //   }
    // }(Array.isArray, Object));
    /**
     * Code for flattening the response
     * @param data
     */
    flattenJSON(data) {
        this.flattenedJSON = {};
        return this.recurse(data, '');
    }
    recurse(cur, prop) {
        if (Object(cur) !== cur) {
            this.flattenedJSON[prop] = cur;
        }
        else if (Array.isArray(cur)) {
            // tslint:disable-next-line: no-var-keyword
            for (var i = 0, l = cur.length; i < l; i++) {
                this.recurse(cur[i], prop + '[' + i + ']');
            }
            if (l === 0) {
                this.flattenedJSON[prop] = [];
            }
        }
        else {
            let isEmpty = true;
            // tslint:disable-next-line: forin
            for (const p in cur) {
                isEmpty = false;
                this.recurse(cur[p], prop ? prop + '.' + p : p);
            }
            if (isEmpty && prop) {
                this.flattenedJSON[prop] = {};
            }
        }
        return this.flattenedJSON;
    }
    flatten(table) {
        var result = {};
        for (var path in table) {
            var cursor = result, length = path.length, property = "", index = 0;
            while (index < length) {
                var char = path.charAt(index);
                if (char === "[") {
                    var start = index + 1, end = path.indexOf("]", start), cursor = cursor[property] = cursor[property] || [], property = path.slice(start, end), index = end + 1;
                }
                else {
                    var cursor = cursor[property] = cursor[property] || {}, start = char === "." ? index + 1 : index, bracket = path.indexOf("[", start), dot = path.indexOf(".", start);
                    if (bracket < 0 && dot < 0)
                        var end = index = length;
                    else if (bracket < 0)
                        var end = index = dot;
                    else if (dot < 0)
                        var end = index = bracket;
                    else
                        var end = index = bracket < dot ? bracket : dot;
                    var property = path.slice(start, end);
                }
            }
            cursor[property] = table[path];
        }
        // Helper function to deep clone an object/array to avoid read-only property issues
        const deepClone = (obj) => {
            if (obj === null || typeof obj !== 'object') {
                return obj;
            }
            if (Array.isArray(obj)) {
                return obj.map(item => deepClone(item));
            }
            const cloned = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    cloned[key] = deepClone(obj[key]);
                }
            }
            return cloned;
        };
        // Process arrays to handle gaps and empty elements
        const processArrays = (obj) => {
            for (const key in obj) {
                if (Array.isArray(obj[key])) {
                    // Create a new array instead of modifying the original
                    const filteredArray = obj[key].filter(item => item !== null && item !== undefined);
                    // Deep clone the filtered array to avoid read-only issues
                    obj[key] = deepClone(filteredArray);
                    // Recursively process nested arrays/objects
                    obj[key].forEach(item => {
                        if (item && typeof item === 'object') {
                            processArrays(item);
                        }
                    });
                }
                else if (obj[key] && typeof obj[key] === 'object') {
                    // Deep clone nested objects to avoid read-only issues
                    obj[key] = deepClone(obj[key]);
                    processArrays(obj[key]);
                }
            }
        };
        // Deep clone the result before processing to avoid read-only property issues
        const clonedResult = deepClone(result['']);
        processArrays(clonedResult);
        return clonedResult;
    }
    flattenRepeatableBlock(input) {
        const result = {};
        for (const key in input) {
            if (input.hasOwnProperty(key)) {
                const parts = key.split('.');
                let current = result;
                for (let i = 0; i < parts.length; i++) {
                    const part = parts[i];
                    if (part.includes('[')) {
                        const [arrayKey, index] = part.split(/\[|\]/g).filter(Boolean);
                        current[arrayKey] = current[arrayKey] || {};
                        current = current[arrayKey];
                        current[index] = current[index] || {};
                        current = current[index];
                    }
                    else {
                        if (i === parts.length - 1) {
                            current[part] = input[key];
                        }
                        else {
                            current[part] = current[part] || {};
                            current = current[part];
                        }
                    }
                }
            }
        }
        return result;
    }
    ;
    parseDotNotation(str, val, obj) {
        let currentObj = obj;
        const keys = str.split('|');
        let i;
        const l = Math.max(1, keys.length - 1);
        let key;
        for (i = 0; i < l; ++i) {
            key = keys[i];
            currentObj[key] = currentObj[key] || {};
            currentObj = currentObj[key];
        }
        currentObj[keys[i]] = val;
        delete obj[str];
    }
    parseDotNotationArray(str, val, obj) {
        let currentObj = obj;
        const keys = str.split('.');
        let i;
        const l = Math.max(1, keys.length - 1);
        let key;
        for (i = 0; i < l; ++i) {
            key = keys[i];
            currentObj[key] = currentObj[key] || {};
            currentObj = currentObj[key];
        }
        currentObj[keys[i]] = val;
        delete obj[str];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC11bmZsYXQtanNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi91dGlscy9mbGF0LXVuZmxhdC1qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxVQUFVO0lBR2I7SUFGVCxhQUFhLEdBQVcsRUFBRSxDQUFDO0lBQzNCLFlBQ1MsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUU1Qyw2REFBNkQ7SUFDN0QsZ0NBQWdDLENBQUMsV0FBVyxFQUFFLE1BQU87UUFDcEQsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hFLEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO2dCQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDOUI7UUFDRixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUVELGlEQUFpRDtJQUNqRCxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFDLEVBQUU7UUFDOUIsb0JBQW9CO1FBQ3BCLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBRyxJQUFJLElBQUksWUFBWSxFQUFDO1lBQ3ZCLFNBQVMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNOLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFF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Q0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLEdBQUcsQ0FBQztRQUVSLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMxQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQscUJBQXFCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ2xDLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLEdBQUcsQ0FBQztRQUVSLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMxQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGbGF0VW5mbGF0IHtcclxuXHRmbGF0dGVuZWRKU09OOiBvYmplY3QgPSB7fTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcblx0Ly8gQ3JlYXRlIFJlcXVlc3QgQm9keSBhY2NvcmRpbmcgdG8gc3RlcCBkYXRhIGFuZCBibG9ja3MgZGF0YVxyXG5cdGNyZWF0ZVJlcXVlc3RCb2R5b25TdGVwQmxvY2tEYXRhKHJlcXVlc3RCb2R5LCBzdGVwSWQ/KSB7XHJcblx0XHRjb25zdCBvYmogPSB7fTtcclxuXHRcdC8qKiBzdG9yZSB0aGUgYXBwIGRhdGEgaW4gdGhlIHJlcXVlc3QgYm9keSAqL1xyXG5cdFx0dGhpcy5hcHBEYXRhU2VydmljZS5nZXRBbGxTdGVwRGF0YVdpdGhBcGlLZXkoc3RlcElkKS5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XHJcblx0XHRcdGZvciAoY29uc3QgZGF0YSBvZiByZXN1bHRzKSB7XHJcblx0XHRcdFx0b2JqW2RhdGEuYXBpS2V5XSA9IGRhdGEudmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9iajtcclxuXHR9XHJcblxyXG5cdC8vIFBhcnNlIHRoZSBqc29uIGFuZCBjcmVhdGUgdGhlIG5lc3RlZCBzdHJ1Y3R1cmVcclxuXHRjcmVhdGVOZXN0ZWRPYmplY3Qob2JqLCB0eXBlPVwiXCIpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKG9iaik7XHJcblx0XHRsZXQgZmxhdHRlbmVkO1xyXG5cdFx0aWYodHlwZSA9PSBcInJlcGVhdGFibGVcIil7XHJcblx0XHRcdGZsYXR0ZW5lZCA9IHRoaXMuZmxhdHRlblJlcGVhdGFibGVCbG9jayhvYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZmxhdHRlbmVkID0gdGhpcy5mbGF0dGVuKG9iaik7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChmbGF0dGVuZWQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRmbGF0dGVuZWQgPSBvYmo7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmxhdHRlbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIENvZGUgZmxhdHRlbmluZyBmdW5jdGlvblxyXG5cdC8vIHJlc3BvbnNlRmxhdHRlbmVyID0gKGZ1bmN0aW9uIChpc0FycmF5LCB3cmFwcGVkKSB7XHJcblx0Ly8gICByZXR1cm4gZnVuY3Rpb24gKHRhYmxlKSB7XHJcblx0Ly8gICAgIHJldHVybiByZWR1Y2UoXCJcIiwge30sIHRhYmxlKTtcclxuXHQvLyAgIH07XHJcblx0Ly8gICBmdW5jdGlvbiByZWR1Y2UocGF0aCwgYWNjdW11bGF0b3IsIHRhYmxlKSB7XHJcblx0Ly8gICAgIGlmIChpc0FycmF5KHRhYmxlKSkge1xyXG5cdC8vICAgICAgIHZhciBsZW5ndGggPSB0YWJsZS5sZW5ndGg7XHJcblx0Ly8gICAgICAgaWYgKGxlbmd0aCkge1xyXG5cdC8vICAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuXHQvLyAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG5cdC8vICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBwYXRoICsgXCJbXVwiLCBpdGVtID0gdGFibGVbaW5kZXgrK107XHJcblx0Ly8gICAgICAgICAgIGlmICh3cmFwcGVkKGl0ZW0pICE9PSBpdGVtKSBhY2N1bXVsYXRvcltwcm9wZXJ0eV0gPSBpdGVtO1xyXG5cdC8vICAgICAgICAgICBlbHNlIHJlZHVjZShwcm9wZXJ0eSwgYWNjdW11bGF0b3IsIGl0ZW0pO1xyXG5cdC8vICAgICAgICAgfVxyXG5cdC8vICAgICAgIH0gZWxzZSBhY2N1bXVsYXRvcltwYXRoXSA9IHRhYmxlO1xyXG5cdC8vICAgICB9IGVsc2Uge1xyXG5cdC8vICAgICAgIHZhciBlbXB0eSA9IHRydWU7XHJcblx0Ly8gICAgICAgaWYgKHBhdGgpIHtcclxuXHQvLyAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRhYmxlKSB7XHJcblx0Ly8gICAgICAgICAgIHZhciBpdGVtID0gdGFibGVbcHJvcGVydHldLCBwcm9wZXJ0eSA9IHBhdGggKyBcIi5cIiArIHByb3BlcnR5LCBlbXB0eSA9IGZhbHNlO1xyXG5cdC8vICAgICAgICAgICBpZiAod3JhcHBlZChpdGVtKSAhPT0gaXRlbSkgYWNjdW11bGF0b3JbcHJvcGVydHldID0gaXRlbTtcclxuXHQvLyAgICAgICAgICAgZWxzZSByZWR1Y2UocHJvcGVydHksIGFjY3VtdWxhdG9yLCBpdGVtKTtcclxuXHQvLyAgICAgICAgIH1cclxuXHQvLyAgICAgICB9IGVsc2Uge1xyXG5cdC8vICAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGFibGUpIHtcclxuXHQvLyAgICAgICAgICAgdmFyIGl0ZW0gPSB0YWJsZVtwcm9wZXJ0eV0sIGVtcHR5ID0gZmFsc2U7XHJcblx0Ly8gICAgICAgICAgIGlmICh3cmFwcGVkKGl0ZW0pICE9PSBpdGVtKSBhY2N1bXVsYXRvcltwcm9wZXJ0eV0gPSBpdGVtO1xyXG5cdC8vICAgICAgICAgICBlbHNlIHJlZHVjZShwcm9wZXJ0eSwgYWNjdW11bGF0b3IsIGl0ZW0pO1xyXG5cdC8vICAgICAgICAgfVxyXG5cdC8vICAgICAgIH1cclxuXHQvLyAgICAgICBpZiAoZW1wdHkpIGFjY3VtdWxhdG9yW3BhdGhdID0gdGFibGU7XHJcblx0Ly8gICAgIH1cclxuXHQvLyAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xyXG5cdC8vICAgfVxyXG5cdC8vIH0oQXJyYXkuaXNBcnJheSwgT2JqZWN0KSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvZGUgZm9yIGZsYXR0ZW5pbmcgdGhlIHJlc3BvbnNlXHJcblx0ICogQHBhcmFtIGRhdGFcclxuXHQgKi9cclxuXHRmbGF0dGVuSlNPTihkYXRhKSB7XHJcblx0XHR0aGlzLmZsYXR0ZW5lZEpTT04gPSB7fTtcclxuXHRcdHJldHVybiB0aGlzLnJlY3Vyc2UoZGF0YSwgJycpO1xyXG5cdH1cclxuXHJcblx0cmVjdXJzZShjdXIsIHByb3ApIHtcclxuXHRcdGlmIChPYmplY3QoY3VyKSAhPT0gY3VyKSB7XHJcblx0XHRcdHRoaXMuZmxhdHRlbmVkSlNPTltwcm9wXSA9IGN1cjtcclxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdmFyLWtleXdvcmRcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSBjdXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5yZWN1cnNlKGN1cltpXSwgcHJvcCArICdbJyArIGkgKyAnXScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChsID09PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5mbGF0dGVuZWRKU09OW3Byb3BdID0gW107XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBpc0VtcHR5ID0gdHJ1ZTtcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmb3JpblxyXG5cdFx0XHRmb3IgKGNvbnN0IHAgaW4gY3VyKSB7XHJcblx0XHRcdFx0aXNFbXB0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMucmVjdXJzZShjdXJbcF0sIHByb3AgPyBwcm9wICsgJy4nICsgcCA6IHApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpc0VtcHR5ICYmIHByb3ApIHtcclxuXHRcdFx0XHR0aGlzLmZsYXR0ZW5lZEpTT05bcHJvcF0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZmxhdHRlbmVkSlNPTjtcclxuXHR9XHJcblxyXG5cdGZsYXR0ZW4odGFibGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcGF0aCBpbiB0YWJsZSkge1xyXG4gICAgICAgICAgICB2YXIgY3Vyc29yOiBhbnkgPSByZXN1bHQsIGxlbmd0aCA9IHBhdGgubGVuZ3RoLCBwcm9wZXJ0eSA9IFwiXCIsIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhciA9IHBhdGguY2hhckF0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSBcIltcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gcGF0aC5pbmRleE9mKFwiXVwiLCBzdGFydCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IGN1cnNvcltwcm9wZXJ0eV0gPSBjdXJzb3JbcHJvcGVydHldIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHBhdGguc2xpY2Uoc3RhcnQsIGVuZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gZW5kICsgMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IGN1cnNvcltwcm9wZXJ0eV0gPSBjdXJzb3JbcHJvcGVydHldIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGNoYXIgPT09IFwiLlwiID8gaW5kZXggKyAxIDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYWNrZXQgPSBwYXRoLmluZGV4T2YoXCJbXCIsIHN0YXJ0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90ID0gcGF0aC5pbmRleE9mKFwiLlwiLCBzdGFydCk7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnJhY2tldCA8IDAgJiYgZG90IDwgMCkgdmFyIGVuZCA9IGluZGV4ID0gbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJyYWNrZXQgPCAwKSB2YXIgZW5kID0gaW5kZXggPSBkb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZG90IDwgMCkgdmFyIGVuZCA9IGluZGV4ID0gYnJhY2tldDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHZhciBlbmQgPSBpbmRleCA9IGJyYWNrZXQgPCBkb3QgPyBicmFja2V0IDogZG90O1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJzb3JbcHJvcGVydHldID0gdGFibGVbcGF0aF07XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGRlZXAgY2xvbmUgYW4gb2JqZWN0L2FycmF5IHRvIGF2b2lkIHJlYWQtb25seSBwcm9wZXJ0eSBpc3N1ZXNcclxuICAgICAgICBjb25zdCBkZWVwQ2xvbmUgPSAob2JqOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmoubWFwKGl0ZW0gPT4gZGVlcENsb25lKGl0ZW0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjbG9uZWQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lZFtrZXldID0gZGVlcENsb25lKG9ialtrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xyXG4gICAgICAgIH07XHJcbiBcclxuICAgICAgICAvLyBQcm9jZXNzIGFycmF5cyB0byBoYW5kbGUgZ2FwcyBhbmQgZW1wdHkgZWxlbWVudHNcclxuICAgICAgICBjb25zdCBwcm9jZXNzQXJyYXlzID0gKG9iajogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGFycmF5IGluc3RlYWQgb2YgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBvYmpba2V5XS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsICYmIGl0ZW0gIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVlcCBjbG9uZSB0aGUgZmlsdGVyZWQgYXJyYXkgdG8gYXZvaWQgcmVhZC1vbmx5IGlzc3Vlc1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gZGVlcENsb25lKGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHByb2Nlc3MgbmVzdGVkIGFycmF5cy9vYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzQXJyYXlzKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9ialtrZXldICYmIHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZWVwIGNsb25lIG5lc3RlZCBvYmplY3RzIHRvIGF2b2lkIHJlYWQtb25seSBpc3N1ZXNcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGRlZXBDbG9uZShvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0FycmF5cyhvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gRGVlcCBjbG9uZSB0aGUgcmVzdWx0IGJlZm9yZSBwcm9jZXNzaW5nIHRvIGF2b2lkIHJlYWQtb25seSBwcm9wZXJ0eSBpc3N1ZXNcclxuICAgICAgICBjb25zdCBjbG9uZWRSZXN1bHQgPSBkZWVwQ2xvbmUocmVzdWx0WycnXSk7XHJcbiAgICAgICAgcHJvY2Vzc0FycmF5cyhjbG9uZWRSZXN1bHQpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNsb25lZFJlc3VsdDtcclxuICAgIH1cclxuXHJcblx0ZmxhdHRlblJlcGVhdGFibGVCbG9jayhpbnB1dDogYW55KXtcclxuXHRcdGNvbnN0IHJlc3VsdDogYW55PSB7fTtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIGlucHV0KSB7XHJcblx0XHRcdGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdCAgY29uc3QgcGFydHMgPSBrZXkuc3BsaXQoJy4nKTtcclxuXHRcdFx0ICBsZXQgY3VycmVudCA9IHJlc3VsdDtcclxuXHRcdFxyXG5cdFx0XHQgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBwYXJ0ID0gcGFydHNbaV07XHJcblx0XHRcclxuXHRcdFx0XHRpZiAocGFydC5pbmNsdWRlcygnWycpKSB7XHJcblx0XHRcdFx0ICBjb25zdCBbYXJyYXlLZXksIGluZGV4XSA9IHBhcnQuc3BsaXQoL1xcW3xcXF0vZykuZmlsdGVyKEJvb2xlYW4pO1xyXG5cdFx0XHRcdCAgY3VycmVudFthcnJheUtleV0gPSBjdXJyZW50W2FycmF5S2V5XSB8fCB7fTtcclxuXHRcdFx0XHQgIGN1cnJlbnQgPSBjdXJyZW50W2FycmF5S2V5XTtcclxuXHRcdFx0XHQgIGN1cnJlbnRbaW5kZXhdID0gY3VycmVudFtpbmRleF0gfHwge307XHJcblx0XHRcdFx0ICBjdXJyZW50ID0gY3VycmVudFtpbmRleF07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQgIGlmIChpID09PSBwYXJ0cy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRjdXJyZW50W3BhcnRdID0gaW5wdXRba2V5XTtcclxuXHRcdFx0XHQgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjdXJyZW50W3BhcnRdID0gY3VycmVudFtwYXJ0XSB8fCB7fTtcclxuXHRcdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xyXG5cdFx0XHRcdCAgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0ICB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0cGFyc2VEb3ROb3RhdGlvbihzdHIsIHZhbCwgb2JqKSB7XHJcblx0XHRsZXQgY3VycmVudE9iaiA9IG9iajtcclxuXHRcdGNvbnN0IGtleXMgPSBzdHIuc3BsaXQoJ3wnKTtcclxuXHRcdGxldCBpO1xyXG5cdFx0Y29uc3QgbCA9IE1hdGgubWF4KDEsIGtleXMubGVuZ3RoIC0gMSk7XHJcblx0XHRsZXQga2V5O1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBsOyArK2kpIHtcclxuXHRcdFx0a2V5ID0ga2V5c1tpXTtcclxuXHRcdFx0Y3VycmVudE9ialtrZXldID0gY3VycmVudE9ialtrZXldIHx8IHt9O1xyXG5cdFx0XHRjdXJyZW50T2JqID0gY3VycmVudE9ialtrZXldO1xyXG5cdFx0fVxyXG5cclxuXHRcdGN1cnJlbnRPYmpba2V5c1tpXV0gPSB2YWw7XHJcblx0XHRkZWxldGUgb2JqW3N0cl07XHJcblx0fVxyXG5cclxuXHRwYXJzZURvdE5vdGF0aW9uQXJyYXkoc3RyLCB2YWwsIG9iaikge1xyXG5cdFx0bGV0IGN1cnJlbnRPYmogPSBvYmo7XHJcblx0XHRjb25zdCBrZXlzID0gc3RyLnNwbGl0KCcuJyk7XHJcblx0XHRsZXQgaTtcclxuXHRcdGNvbnN0IGwgPSBNYXRoLm1heCgxLCBrZXlzLmxlbmd0aCAtIDEpO1xyXG5cdFx0bGV0IGtleTtcclxuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgKytpKSB7XHJcblx0XHRcdGtleSA9IGtleXNbaV07XHJcblx0XHRcdGN1cnJlbnRPYmpba2V5XSA9IGN1cnJlbnRPYmpba2V5XSB8fCB7fTtcclxuXHRcdFx0Y3VycmVudE9iaiA9IGN1cnJlbnRPYmpba2V5XTtcclxuXHRcdH1cclxuXHJcblx0XHRjdXJyZW50T2JqW2tleXNbaV1dID0gdmFsO1xyXG5cdFx0ZGVsZXRlIG9ialtzdHJdO1xyXG5cdH1cclxufVxyXG4iXX0=