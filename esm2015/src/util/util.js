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
        element.style.backgroundImage = `url('${imagePath}')`;
    }
    return element;
}
/**
 * @param {?} attrName
 * @return {?}
 */
function setSources(attrName) {
    return (image) => {
        const /** @type {?} */ sources = image.parentElement.getElementsByTagName('source');
        for (let /** @type {?} */ i = 0; i < sources.length; i++) {
            const /** @type {?} */ attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                sources[i].srcset = attrValue;
            }
        }
    };
}
const /** @type {?} */ setSourcesToDefault = setSources('defaultImage');
export const /** @type {?} */ setSourcesToLazy = setSources('lazyLoad');
const /** @type {?} */ setSourcesToError = setSources('errorImage');
/**
 * @param {?} setSourcesFn
 * @return {?}
 */
function setImageAndSources(setSourcesFn) {
    return (element, imagePath, useSrcset) => {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
export const /** @type {?} */ setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
export const /** @type {?} */ setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
export const /** @type {?} */ setImageAndSourcesToError = setImageAndSources(setSourcesToError);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxhenlsb2FkLWltYWdlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTTtJQUNKLE1BQU0sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7Q0FDdEM7Ozs7O0FBRUQsTUFBTSwyQkFBMkIsT0FBMEM7SUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDO0NBQ3JHOzs7OztBQUVELE1BQU0seUJBQXlCLE9BQTBDO0lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQztDQUNqRDs7Ozs7OztBQUVELE1BQU0sbUJBQW1CLE9BQTBDLEVBQUUsU0FBaUIsRUFBRSxTQUFrQjtJQUN4RyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUM1QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDekI7S0FDRjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsUUFBUSxTQUFTLElBQUksQ0FBQztLQUN2RDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7Q0FDaEI7Ozs7O0FBRUQsb0JBQW9CLFFBQWdCO0lBQ2xDLE1BQU0sQ0FBQyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtRQUNqQyx1QkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEMsdUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUMvQjtTQUNGO0tBQ0YsQ0FBQztDQUNIO0FBRUQsdUJBQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyx1QkFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkQsdUJBQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7OztBQUVuRCw0QkFBNEIsWUFBK0M7SUFDekUsTUFBTSxDQUFDLENBQUMsT0FBMEMsRUFBRSxTQUFpQixFQUFFLFNBQWtCLEVBQUUsRUFBRTtRQUMzRixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN6QztLQUNGLENBQUM7Q0FDSDtBQUVELE1BQU0sQ0FBQyx1QkFBTSwyQkFBMkIsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ25GLE1BQU0sQ0FBQyx1QkFBTSx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdFLE1BQU0sQ0FBQyx1QkFBTSx5QkFBeUIsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzV2luZG93RGVmaW5lZCgpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaGlsZE9mUGljdHVyZShlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIEJvb2xlYW4oZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncGljdHVyZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbWFnZUVsZW1lbnQoZWxlbWVudDogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxEaXZFbGVtZW50KTogZWxlbWVudCBpcyBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ltZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbWFnZShlbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQsIGltYWdlUGF0aDogc3RyaW5nLCB1c2VTcmNzZXQ6IGJvb2xlYW4pIHtcbiAgaWYgKGlzSW1hZ2VFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgaWYgKHVzZVNyY3NldCkge1xuICAgICAgZWxlbWVudC5zcmNzZXQgPSBpbWFnZVBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3JjID0gaW1hZ2VQYXRoO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1hZ2VQYXRofScpYDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0U291cmNlcyhhdHRyTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzb3VyY2VzID0gaW1hZ2UucGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhdHRyVmFsdWUgPSBzb3VyY2VzW2ldLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICBpZiAoYXR0clZhbHVlKSB7XG4gICAgICAgIHNvdXJjZXNbaV0uc3Jjc2V0ID0gYXR0clZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuY29uc3Qgc2V0U291cmNlc1RvRGVmYXVsdCA9IHNldFNvdXJjZXMoJ2RlZmF1bHRJbWFnZScpO1xuZXhwb3J0IGNvbnN0IHNldFNvdXJjZXNUb0xhenkgPSBzZXRTb3VyY2VzKCdsYXp5TG9hZCcpO1xuY29uc3Qgc2V0U291cmNlc1RvRXJyb3IgPSBzZXRTb3VyY2VzKCdlcnJvckltYWdlJyk7XG5cbmZ1bmN0aW9uIHNldEltYWdlQW5kU291cmNlcyhzZXRTb3VyY2VzRm46IChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4gdm9pZCkge1xuICByZXR1cm4gKGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudCwgaW1hZ2VQYXRoOiBzdHJpbmcsIHVzZVNyY3NldDogYm9vbGVhbikgPT4ge1xuICAgIGlmIChpc0ltYWdlRWxlbWVudChlbGVtZW50KSAmJiBpc0NoaWxkT2ZQaWN0dXJlKGVsZW1lbnQpKSB7XG4gICAgICBzZXRTb3VyY2VzRm4oZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChpbWFnZVBhdGgpIHtcbiAgICAgIHNldEltYWdlKGVsZW1lbnQsIGltYWdlUGF0aCwgdXNlU3Jjc2V0KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBzZXRJbWFnZUFuZFNvdXJjZXNUb0RlZmF1bHQgPSBzZXRJbWFnZUFuZFNvdXJjZXMoc2V0U291cmNlc1RvRGVmYXVsdCk7XG5leHBvcnQgY29uc3Qgc2V0SW1hZ2VBbmRTb3VyY2VzVG9MYXp5ID0gc2V0SW1hZ2VBbmRTb3VyY2VzKHNldFNvdXJjZXNUb0xhenkpO1xuZXhwb3J0IGNvbnN0IHNldEltYWdlQW5kU291cmNlc1RvRXJyb3IgPSBzZXRJbWFnZUFuZFNvdXJjZXMoc2V0U291cmNlc1RvRXJyb3IpO1xuIl19