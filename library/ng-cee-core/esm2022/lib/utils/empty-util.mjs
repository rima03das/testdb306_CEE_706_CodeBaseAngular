export class EmptyUtil {
    /**
     * This function checks empty be it array, string , null ,undefined
     * add or remove cases if needed
     * @param value any
     */
    isEmpty(value) {
        if (Array.isArray(value)) {
            if (value.length > 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            switch (value) {
                case '':
                case null:
                case false:
                case undefined:
                case typeof (value) == 'undefined':
                    return true;
                default:
                    return false;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi91dGlscy9lbXB0eS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxTQUFTO0lBQ2xCOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsS0FBSztRQUNULElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRztZQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQzthQUNoQjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7YUFBTTtZQUVILFFBQVEsS0FBSyxFQUFFO2dCQUNYLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssSUFBSSxDQUFDO2dCQUNWLEtBQUssS0FBSyxDQUFDO2dCQUNYLEtBQUssU0FBUyxDQUFDO2dCQUNmLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVc7b0JBQzlCLE9BQU8sSUFBSSxDQUFDO2dCQUNoQjtvQkFDSSxPQUFPLEtBQUssQ0FBQzthQUNwQjtTQUNKO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVtcHR5VXRpbCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGVtcHR5IGJlIGl0IGFycmF5LCBzdHJpbmcgLCBudWxsICx1bmRlZmluZWRcclxuICAgICAqIGFkZCBvciByZW1vdmUgY2FzZXMgaWYgbmVlZGVkXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgYW55XHJcbiAgICAgKi9cclxuICAgIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBudWxsOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgKHZhbHVlKSA9PSAndW5kZWZpbmVkJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==