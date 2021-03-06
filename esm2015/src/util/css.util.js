/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export const /** @type {?} */ cssClassNames = {
    loaded: 'ng-lazyloaded',
    loading: 'ng-lazyloading',
    failed: 'ng-failed-lazyloaded',
};
/**
 * @param {?} element
 * @param {?} cssClassName
 * @return {?}
 */
export function removeCssClassName(element, cssClassName) {
    element.className = element.className.replace(cssClassName, '');
}
/**
 * @param {?} element
 * @param {?} cssClassName
 * @return {?}
 */
export function addCssClassName(element, cssClassName) {
    if (!element.className.includes(cssClassName)) {
        element.className += ` ${cssClassName}`;
    }
}
/**
 * @param {?} element
 * @param {?} cssClassName
 * @return {?}
 */
export function hasCssClassName(element, cssClassName) {
    return element.className && element.className.includes(cssClassName);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYXp5bG9hZC1pbWFnZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2Nzcy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLENBQUMsdUJBQU0sYUFBYSxHQUFHO0lBQ3pCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsTUFBTSxFQUFFLHNCQUFzQjtDQUNqQyxDQUFDOzs7Ozs7QUFFRixNQUFNLDZCQUE2QixPQUEwQyxFQUFFLFlBQW9CO0lBQy9GLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ25FOzs7Ozs7QUFFRCxNQUFNLDBCQUEwQixPQUEwQyxFQUFFLFlBQW9CO0lBQzVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUMzQztDQUNKOzs7Ozs7QUFFRCxNQUFNLDBCQUEwQixPQUEwQyxFQUFFLFlBQW9CO0lBQzVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQ3hFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNzc0NsYXNzTmFtZXMgPSB7XG4gICAgbG9hZGVkOiAnbmctbGF6eWxvYWRlZCcsXG4gICAgbG9hZGluZzogJ25nLWxhenlsb2FkaW5nJyxcbiAgICBmYWlsZWQ6ICduZy1mYWlsZWQtbGF6eWxvYWRlZCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ3NzQ2xhc3NOYW1lKGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCwgY3NzQ2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoY3NzQ2xhc3NOYW1lLCAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDc3NDbGFzc05hbWUoZWxlbWVudDogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50LCBjc3NDbGFzc05hbWU6IHN0cmluZykge1xuICAgIGlmICghZWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoY3NzQ2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICR7Y3NzQ2xhc3NOYW1lfWA7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQ3NzQ2xhc3NOYW1lKGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCwgY3NzQ2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoY3NzQ2xhc3NOYW1lKTtcbn1cbiJdfQ==