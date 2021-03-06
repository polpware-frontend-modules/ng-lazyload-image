/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var /** @type {?} */ cssClassNames = {
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
        element.className += " " + cssClassName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYXp5bG9hZC1pbWFnZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2Nzcy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLENBQUMscUJBQU0sYUFBYSxHQUFHO0lBQ3pCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsTUFBTSxFQUFFLHNCQUFzQjtDQUNqQyxDQUFDOzs7Ozs7QUFFRixNQUFNLDZCQUE2QixPQUEwQyxFQUFFLFlBQW9CO0lBQy9GLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ25FOzs7Ozs7QUFFRCxNQUFNLDBCQUEwQixPQUEwQyxFQUFFLFlBQW9CO0lBQzVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxTQUFTLElBQUksTUFBSSxZQUFjLENBQUM7S0FDM0M7Q0FDSjs7Ozs7O0FBRUQsTUFBTSwwQkFBMEIsT0FBMEMsRUFBRSxZQUFvQjtJQUM1RixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUN4RSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjc3NDbGFzc05hbWVzID0ge1xuICAgIGxvYWRlZDogJ25nLWxhenlsb2FkZWQnLFxuICAgIGxvYWRpbmc6ICduZy1sYXp5bG9hZGluZycsXG4gICAgZmFpbGVkOiAnbmctZmFpbGVkLWxhenlsb2FkZWQnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNzc0NsYXNzTmFtZShlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQsIGNzc0NsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKGNzc0NsYXNzTmFtZSwgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ3NzQ2xhc3NOYW1lKGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCwgY3NzQ2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKGNzc0NsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2Nzc0NsYXNzTmFtZX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Nzc0NsYXNzTmFtZShlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQsIGNzc0NsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKGNzc0NsYXNzTmFtZSk7XG59XG4iXX0=