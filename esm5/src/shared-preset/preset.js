/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Observable } from 'rxjs';
import { cssClassNames, hasCssClassName, removeCssClassName, addCssClassName, isImageElement, isChildOfPicture, setSourcesToLazy, setImage, setImageAndSourcesToError, setImageAndSourcesToLazy, setImageAndSourcesToDefault, } from '../util';
var /** @type {?} */ end = function (_a) {
    var element = _a.element;
    return addCssClassName(element, cssClassNames.loaded);
};
var ɵ0 = end;
export var /** @type {?} */ loadImage = function (_a) {
    var element = _a.element, useSrcset = _a.useSrcset, imagePath = _a.imagePath;
    var /** @type {?} */ img;
    if (isImageElement(element) && isChildOfPicture(element)) {
        var /** @type {?} */ parentClone = /** @type {?} */ (element.parentNode.cloneNode(true));
        img = parentClone.getElementsByTagName('img')[0];
        setSourcesToLazy(img);
        setImage(img, imagePath, useSrcset);
    }
    else {
        img = new Image();
        if (isImageElement(element) && element.sizes) {
            img.sizes = element.sizes;
        }
        if (useSrcset) {
            img.srcset = imagePath;
        }
        else {
            img.src = imagePath;
        }
    }
    return Observable.create(function (observer) {
        img.onload = function () {
            observer.next(imagePath);
            observer.complete();
        };
        img.onerror = function (err) {
            observer.error(null);
        };
    });
};
var /** @type {?} */ setErrorImage = function (_a) {
    var element = _a.element, errorImagePath = _a.errorImagePath, useSrcset = _a.useSrcset;
    setImageAndSourcesToError(element, errorImagePath, useSrcset);
    addCssClassName(element, cssClassNames.failed);
};
var ɵ1 = setErrorImage;
var /** @type {?} */ setLoadedImage = function (_a) {
    var element = _a.element, imagePath = _a.imagePath, useSrcset = _a.useSrcset;
    setImageAndSourcesToLazy(element, imagePath, useSrcset);
};
var ɵ2 = setLoadedImage;
var /** @type {?} */ setup = function (_a) {
    var element = _a.element, defaultImagePath = _a.defaultImagePath, useSrcset = _a.useSrcset;
    setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);
    if (hasCssClassName(element, cssClassNames.loaded)) {
        removeCssClassName(element, cssClassNames.loaded);
    }
};
var ɵ3 = setup;
export var /** @type {?} */ sharedPreset = {
    finally: end,
    loadImage: loadImage,
    setErrorImage: setErrorImage,
    setLoadedImage: setLoadedImage,
    setup: setup
};
export { ɵ0, ɵ1, ɵ2, ɵ3 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvc2hhcmVkLXByZXNldC9wcmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUNMLGFBQWEsRUFDYixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QiwyQkFBMkIsR0FDNUIsTUFBTSxTQUFTLENBQUM7QUFTakIscUJBQU0sR0FBRyxHQUFjLFVBQUMsRUFBVztRQUFULG9CQUFPO0lBQU8sT0FBQSxlQUFlLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFBOUMsQ0FBOEMsQ0FBQzs7QUFFdkYsTUFBTSxDQUFDLHFCQUFNLFNBQVMsR0FBZ0IsVUFBQyxFQUFpQztRQUEvQixvQkFBTyxFQUFFLHdCQUFTLEVBQUUsd0JBQVM7SUFDcEUscUJBQUksR0FBcUIsQ0FBQztJQUMxQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELHFCQUFNLFdBQVcscUJBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUF1QixDQUFBLENBQUM7UUFDN0UsR0FBRyxHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNyQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN4QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDckI7S0FDRjtJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTtRQUMvQixHQUFHLENBQUMsTUFBTSxHQUFHO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckIsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQSxHQUFHO1lBQ2YsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QixDQUFDO0tBQ0gsQ0FBQyxDQUFDO0NBQ0osQ0FBQztBQUVGLHFCQUFNLGFBQWEsR0FBb0IsVUFBQyxFQUFzQztRQUFwQyxvQkFBTyxFQUFFLGtDQUFjLEVBQUUsd0JBQVM7SUFDMUUseUJBQXlCLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RCxlQUFlLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNoRCxDQUFDOztBQUVGLHFCQUFNLGNBQWMsR0FBcUIsVUFBQyxFQUFpQztRQUEvQixvQkFBTyxFQUFFLHdCQUFTLEVBQUUsd0JBQVM7SUFDdkUsd0JBQXdCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztDQUN6RCxDQUFDOztBQUVGLHFCQUFNLEtBQUssR0FBWSxVQUFDLEVBQXdDO1FBQXRDLG9CQUFPLEVBQUUsc0NBQWdCLEVBQUUsd0JBQVM7SUFDNUQsMkJBQTJCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWxFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ25EO0NBQ0YsQ0FBQzs7QUFFRixNQUFNLENBQUMscUJBQU0sWUFBWSxHQUFHO0lBQzFCLE9BQU8sRUFBRSxHQUFHO0lBQ1osU0FBUyxXQUFBO0lBQ1QsYUFBYSxlQUFBO0lBQ2IsY0FBYyxnQkFBQTtJQUNkLEtBQUssT0FBQTtDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjc3NDbGFzc05hbWVzLFxuICBoYXNDc3NDbGFzc05hbWUsXG4gIHJlbW92ZUNzc0NsYXNzTmFtZSxcbiAgYWRkQ3NzQ2xhc3NOYW1lLFxuICBpc0ltYWdlRWxlbWVudCxcbiAgaXNDaGlsZE9mUGljdHVyZSxcbiAgc2V0U291cmNlc1RvTGF6eSxcbiAgc2V0SW1hZ2UsXG4gIHNldEltYWdlQW5kU291cmNlc1RvRXJyb3IsXG4gIHNldEltYWdlQW5kU291cmNlc1RvTGF6eSxcbiAgc2V0SW1hZ2VBbmRTb3VyY2VzVG9EZWZhdWx0LFxufSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7XG4gIEZpbmFsbHlGbixcbiAgTG9hZEltYWdlRm4sXG4gIFNldEVycm9ySW1hZ2VGbixcbiAgU2V0TG9hZGVkSW1hZ2VGbixcbiAgU2V0dXBGblxufSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGVuZDogRmluYWxseUZuID0gKHsgZWxlbWVudCB9KSA9PiBhZGRDc3NDbGFzc05hbWUoZWxlbWVudCwgY3NzQ2xhc3NOYW1lcy5sb2FkZWQpO1xuXG5leHBvcnQgY29uc3QgbG9hZEltYWdlOiBMb2FkSW1hZ2VGbiA9ICh7IGVsZW1lbnQsIHVzZVNyY3NldCwgaW1hZ2VQYXRoIH0pID0+IHtcbiAgbGV0IGltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgaWYgKGlzSW1hZ2VFbGVtZW50KGVsZW1lbnQpICYmIGlzQ2hpbGRPZlBpY3R1cmUoZWxlbWVudCkpIHtcbiAgICBjb25zdCBwYXJlbnRDbG9uZSA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTFBpY3R1cmVFbGVtZW50O1xuICAgIGltZyA9IHBhcmVudENsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcbiAgICBzZXRTb3VyY2VzVG9MYXp5KGltZyk7XG4gICAgc2V0SW1hZ2UoaW1nLCBpbWFnZVBhdGgsIHVzZVNyY3NldCk7XG4gIH0gZWxzZSB7XG4gICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaWYgKGlzSW1hZ2VFbGVtZW50KGVsZW1lbnQpICYmIGVsZW1lbnQuc2l6ZXMpIHtcbiAgICAgIGltZy5zaXplcyA9IGVsZW1lbnQuc2l6ZXM7XG4gICAgfVxuICAgIGlmICh1c2VTcmNzZXQpIHtcbiAgICAgIGltZy5zcmNzZXQgPSBpbWFnZVBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltZy5zcmMgPSBpbWFnZVBhdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dChpbWFnZVBhdGgpO1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9O1xuICAgIGltZy5vbmVycm9yID0gZXJyID0+IHtcbiAgICAgIG9ic2VydmVyLmVycm9yKG51bGwpO1xuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0RXJyb3JJbWFnZTogU2V0RXJyb3JJbWFnZUZuID0gKHsgZWxlbWVudCwgZXJyb3JJbWFnZVBhdGgsIHVzZVNyY3NldCB9KSA9PiB7XG4gIHNldEltYWdlQW5kU291cmNlc1RvRXJyb3IoZWxlbWVudCwgZXJyb3JJbWFnZVBhdGgsIHVzZVNyY3NldCk7XG4gIGFkZENzc0NsYXNzTmFtZShlbGVtZW50LCBjc3NDbGFzc05hbWVzLmZhaWxlZCk7XG59O1xuXG5jb25zdCBzZXRMb2FkZWRJbWFnZTogU2V0TG9hZGVkSW1hZ2VGbiA9ICh7IGVsZW1lbnQsIGltYWdlUGF0aCwgdXNlU3Jjc2V0IH0pID0+IHtcbiAgc2V0SW1hZ2VBbmRTb3VyY2VzVG9MYXp5KGVsZW1lbnQsIGltYWdlUGF0aCwgdXNlU3Jjc2V0KTtcbn07XG5cbmNvbnN0IHNldHVwOiBTZXR1cEZuID0gKHsgZWxlbWVudCwgZGVmYXVsdEltYWdlUGF0aCwgdXNlU3Jjc2V0IH0pID0+IHtcbiAgc2V0SW1hZ2VBbmRTb3VyY2VzVG9EZWZhdWx0KGVsZW1lbnQsIGRlZmF1bHRJbWFnZVBhdGgsIHVzZVNyY3NldCk7XG5cbiAgaWYgKGhhc0Nzc0NsYXNzTmFtZShlbGVtZW50LCBjc3NDbGFzc05hbWVzLmxvYWRlZCkpIHtcbiAgICByZW1vdmVDc3NDbGFzc05hbWUoZWxlbWVudCwgY3NzQ2xhc3NOYW1lcy5sb2FkZWQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2hhcmVkUHJlc2V0ID0ge1xuICBmaW5hbGx5OiBlbmQsXG4gIGxvYWRJbWFnZSxcbiAgc2V0RXJyb3JJbWFnZSxcbiAgc2V0TG9hZGVkSW1hZ2UsXG4gIHNldHVwXG59O1xuIl19