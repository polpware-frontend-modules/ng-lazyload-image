/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
export function isWindowDefined() {
    return typeof window !== 'undefined';
}
/**
 * @param {?} element
 * @return {?}
 */
export function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
/**
 * @param {?} element
 * @return {?}
 */
export function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
/**
 * @param {?} element
 * @param {?} imagePath
 * @param {?} useSrcset
 * @return {?}
 */
export function setImage(element, imagePath, useSrcset) {
    if (isImageElement(element)) {
        if (useSrcset) {
            element.srcset = imagePath;
        }
        else {
            element.src = imagePath;
        }
    }
    else {
        element.style.backgroundImage = "url('" + imagePath + "')";
    }
    return element;
}
/**
 * @param {?} attrName
 * @return {?}
 */
function setSources(attrName) {
    return function (image) {
        var /** @type {?} */ sources = image.parentElement.getElementsByTagName('source');
        for (var /** @type {?} */ i = 0; i < sources.length; i++) {
            var /** @type {?} */ attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                sources[i].srcset = attrValue;
            }
        }
    };
}
var /** @type {?} */ setSourcesToDefault = setSources('defaultImage');
export var /** @type {?} */ setSourcesToLazy = setSources('lazyLoad');
var /** @type {?} */ setSourcesToError = setSources('errorImage');
/**
 * @param {?} setSourcesFn
 * @return {?}
 */
function setImageAndSources(setSourcesFn) {
    return function (element, imagePath, useSrcset) {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
export var /** @type {?} */ setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
export var /** @type {?} */ setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
export var /** @type {?} */ setImageAndSourcesToError = setImageAndSources(setSourcesToError);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxhenlsb2FkLWltYWdlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTTtJQUNKLE1BQU0sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7Q0FDdEM7Ozs7O0FBRUQsTUFBTSwyQkFBMkIsT0FBMEM7SUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDO0NBQ3JHOzs7OztBQUVELE1BQU0seUJBQXlCLE9BQTBDO0lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQztDQUNqRDs7Ozs7OztBQUVELE1BQU0sbUJBQW1CLE9BQTBDLEVBQUUsU0FBaUIsRUFBRSxTQUFrQjtJQUN4RyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUM1QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDekI7S0FDRjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsVUFBUSxTQUFTLE9BQUksQ0FBQztLQUN2RDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7Q0FDaEI7Ozs7O0FBRUQsb0JBQW9CLFFBQWdCO0lBQ2xDLE1BQU0sQ0FBQyxVQUFDLEtBQXVCO1FBQzdCLHFCQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxxQkFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBQy9CO1NBQ0Y7S0FDRixDQUFDO0NBQ0g7QUFFRCxxQkFBTSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdkQsTUFBTSxDQUFDLHFCQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2RCxxQkFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7O0FBRW5ELDRCQUE0QixZQUErQztJQUN6RSxNQUFNLENBQUMsVUFBQyxPQUEwQyxFQUFFLFNBQWlCLEVBQUUsU0FBa0I7UUFDdkYsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7UUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDekM7S0FDRixDQUFDO0NBQ0g7QUFFRCxNQUFNLENBQUMscUJBQU0sMkJBQTJCLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuRixNQUFNLENBQUMscUJBQU0sd0JBQXdCLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM3RSxNQUFNLENBQUMscUJBQU0seUJBQXlCLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvd0RlZmluZWQoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hpbGRPZlBpY3R1cmUoZWxlbWVudDogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBCb29sZWFuKGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3BpY3R1cmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW1hZ2VFbGVtZW50KGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTEltYWdlRWxlbWVudCB7XG4gIHJldHVybiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbWcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW1hZ2UoZWxlbWVudDogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50LCBpbWFnZVBhdGg6IHN0cmluZywgdXNlU3Jjc2V0OiBib29sZWFuKSB7XG4gIGlmIChpc0ltYWdlRWxlbWVudChlbGVtZW50KSkge1xuICAgIGlmICh1c2VTcmNzZXQpIHtcbiAgICAgIGVsZW1lbnQuc3Jjc2V0ID0gaW1hZ2VQYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNyYyA9IGltYWdlUGF0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlUGF0aH0nKWA7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldFNvdXJjZXMoYXR0ck5hbWU6IHN0cmluZykge1xuICByZXR1cm4gKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc291cmNlcyA9IGltYWdlLnBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXR0clZhbHVlID0gc291cmNlc1tpXS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgaWYgKGF0dHJWYWx1ZSkge1xuICAgICAgICBzb3VyY2VzW2ldLnNyY3NldCA9IGF0dHJWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IHNldFNvdXJjZXNUb0RlZmF1bHQgPSBzZXRTb3VyY2VzKCdkZWZhdWx0SW1hZ2UnKTtcbmV4cG9ydCBjb25zdCBzZXRTb3VyY2VzVG9MYXp5ID0gc2V0U291cmNlcygnbGF6eUxvYWQnKTtcbmNvbnN0IHNldFNvdXJjZXNUb0Vycm9yID0gc2V0U291cmNlcygnZXJyb3JJbWFnZScpO1xuXG5mdW5jdGlvbiBzZXRJbWFnZUFuZFNvdXJjZXMoc2V0U291cmNlc0ZuOiAoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHZvaWQpIHtcbiAgcmV0dXJuIChlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQsIGltYWdlUGF0aDogc3RyaW5nLCB1c2VTcmNzZXQ6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoaXNJbWFnZUVsZW1lbnQoZWxlbWVudCkgJiYgaXNDaGlsZE9mUGljdHVyZShlbGVtZW50KSkge1xuICAgICAgc2V0U291cmNlc0ZuKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoaW1hZ2VQYXRoKSB7XG4gICAgICBzZXRJbWFnZShlbGVtZW50LCBpbWFnZVBhdGgsIHVzZVNyY3NldCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3Qgc2V0SW1hZ2VBbmRTb3VyY2VzVG9EZWZhdWx0ID0gc2V0SW1hZ2VBbmRTb3VyY2VzKHNldFNvdXJjZXNUb0RlZmF1bHQpO1xuZXhwb3J0IGNvbnN0IHNldEltYWdlQW5kU291cmNlc1RvTGF6eSA9IHNldEltYWdlQW5kU291cmNlcyhzZXRTb3VyY2VzVG9MYXp5KTtcbmV4cG9ydCBjb25zdCBzZXRJbWFnZUFuZFNvdXJjZXNUb0Vycm9yID0gc2V0SW1hZ2VBbmRTb3VyY2VzKHNldFNvdXJjZXNUb0Vycm9yKTtcbiJdfQ==