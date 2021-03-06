/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { startWith } from 'rxjs/operators';
import { sharedPreset } from '../shared-preset/preset';
import { isWindowDefined } from '../util';
import { Rect } from './rect';
import { getScrollListener } from './scroll-listener';
export var /** @type {?} */ isVisible = function (_a, getWindow) {
    var element = _a.element, offset = _a.offset, scrollContainer = _a.scrollContainer;
    if (getWindow === void 0) { getWindow = function () { return window; }; }
    var /** @type {?} */ elementBounds = Rect.fromElement(element);
    if (elementBounds === Rect.empty) {
        return false;
    }
    var /** @type {?} */ windowBounds = Rect.fromWindow(getWindow());
    elementBounds.inflate(offset);
    if (scrollContainer) {
        var /** @type {?} */ scrollContainerBounds = Rect.fromElement(scrollContainer);
        var /** @type {?} */ intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
        return elementBounds.intersectsWith(intersection);
    }
    else {
        return elementBounds.intersectsWith(windowBounds);
    }
};
var /** @type {?} */ getObservable = function (attributes) {
    if (attributes.scrollObservable) {
        return attributes.scrollObservable.pipe(startWith(''));
    }
    if (attributes.scrollContainer) {
        return getScrollListener(attributes.scrollContainer);
    }
    return getScrollListener(isWindowDefined() ? window : undefined);
};
var ɵ0 = getObservable;
export var /** @type {?} */ scrollPreset = Object.assign({}, sharedPreset, {
    isVisible: isVisible,
    getObservable: getObservable
});
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvc2Nyb2xsLXByZXNldC9wcmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXRELE1BQU0sQ0FBQyxxQkFBTSxTQUFTLEdBQXVCLFVBQUMsRUFBb0MsRUFBRSxTQUF3QjtRQUE1RCxvQkFBTyxFQUFFLGtCQUFNLEVBQUUsb0NBQWU7SUFBSSwwQkFBQSxFQUFBLDBCQUFrQixPQUFBLE1BQU0sRUFBTixDQUFNO0lBQzFHLHFCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFDRCxxQkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFOUIsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNwQixxQkFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hFLHFCQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNuRDtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDbkQ7Q0FDRixDQUFDO0FBRUYscUJBQU0sYUFBYSxHQUFvQyxVQUFDLFVBQXNCO0lBQzVFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7SUFDRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3REO0lBQ0QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0NBQ2xFLENBQUM7O0FBRUYsTUFBTSxDQUFDLHFCQUFNLFlBQVksR0FBNEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFO0lBQ25GLFNBQVMsV0FBQTtJQUNULGFBQWEsZUFBQTtDQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNoYXJlZFByZXNldCB9IGZyb20gJy4uL3NoYXJlZC1wcmVzZXQvcHJlc2V0JztcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIEdldE9ic2VydmFibGVGbiwgSG9va1NldCwgSXNWaXNpYmxlRm4gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc1dpbmRvd0RlZmluZWQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuL3JlY3QnO1xuaW1wb3J0IHsgZ2V0U2Nyb2xsTGlzdGVuZXIgfSBmcm9tICcuL3Njcm9sbC1saXN0ZW5lcic7XG5cbmV4cG9ydCBjb25zdCBpc1Zpc2libGU6IElzVmlzaWJsZUZuPEV2ZW50PiA9ICh7IGVsZW1lbnQsIG9mZnNldCwgc2Nyb2xsQ29udGFpbmVyIH0sIGdldFdpbmRvdyA9ICgpID0+IHdpbmRvdykgPT4ge1xuICBjb25zdCBlbGVtZW50Qm91bmRzID0gUmVjdC5mcm9tRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKGVsZW1lbnRCb3VuZHMgPT09IFJlY3QuZW1wdHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgd2luZG93Qm91bmRzID0gUmVjdC5mcm9tV2luZG93KGdldFdpbmRvdygpKTtcbiAgZWxlbWVudEJvdW5kcy5pbmZsYXRlKG9mZnNldCk7XG5cbiAgaWYgKHNjcm9sbENvbnRhaW5lcikge1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lckJvdW5kcyA9IFJlY3QuZnJvbUVsZW1lbnQoc2Nyb2xsQ29udGFpbmVyKTtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBzY3JvbGxDb250YWluZXJCb3VuZHMuZ2V0SW50ZXJzZWN0aW9uV2l0aCh3aW5kb3dCb3VuZHMpO1xuICAgIHJldHVybiBlbGVtZW50Qm91bmRzLmludGVyc2VjdHNXaXRoKGludGVyc2VjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCb3VuZHMuaW50ZXJzZWN0c1dpdGgod2luZG93Qm91bmRzKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0T2JzZXJ2YWJsZTogR2V0T2JzZXJ2YWJsZUZuPEV2ZW50IHwgU3RyaW5nPiA9IChhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzKSA9PiB7XG4gIGlmIChhdHRyaWJ1dGVzLnNjcm9sbE9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5zY3JvbGxPYnNlcnZhYmxlLnBpcGUoc3RhcnRXaXRoKCcnKSk7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExpc3RlbmVyKGF0dHJpYnV0ZXMuc2Nyb2xsQ29udGFpbmVyKTtcbiAgfVxuICByZXR1cm4gZ2V0U2Nyb2xsTGlzdGVuZXIoaXNXaW5kb3dEZWZpbmVkKCkgPyB3aW5kb3cgOiB1bmRlZmluZWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbFByZXNldDogSG9va1NldDxFdmVudCB8IFN0cmluZz4gPSBPYmplY3QuYXNzaWduKHt9LCBzaGFyZWRQcmVzZXQsIHtcbiAgaXNWaXNpYmxlLFxuICBnZXRPYnNlcnZhYmxlXG59KTtcbiJdfQ==