/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { empty, Observable } from 'rxjs';
import { sampleTime, share, startWith } from 'rxjs/operators';
import { isWindowDefined } from '../util';
var /** @type {?} */ scrollListeners = new WeakMap();
/**
 * @param {?} obs
 * @param {?=} scheduler
 * @return {?}
 */
export function sampleObservable(obs, scheduler) {
    return obs.pipe(sampleTime(100, scheduler), share(), startWith(''));
}
// Only create one scroll listener per target and share the observable.
// Typical, there will only be one observable per application
export var /** @type {?} */ getScrollListener = function (scrollTarget) {
    if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
        if (isWindowDefined()) {
            console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
        }
        return empty();
    }
    if (scrollListeners.has(scrollTarget)) {
        return scrollListeners.get(scrollTarget);
    }
    var /** @type {?} */ srollEvent = Observable.create(function (observer) {
        var /** @type {?} */ eventName = 'scroll';
        var /** @type {?} */ handler = function (event) { return observer.next(event); };
        var /** @type {?} */ options = { passive: true, capture: false };
        scrollTarget.addEventListener(eventName, handler, options);
        return function () { return scrollTarget.removeEventListener(eventName, handler, options); };
    });
    var /** @type {?} */ listener = sampleObservable(srollEvent);
    scrollListeners.set(scrollTarget, listener);
    return listener;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWxpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvc2Nyb2xsLXByZXNldC9zY3JvbGwtbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFMUMscUJBQU0sZUFBZSxHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDOzs7Ozs7QUFFNUQsTUFBTSwyQkFBMkIsR0FBb0IsRUFBRSxTQUFlO0lBQ3BFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEVBQzFCLEtBQUssRUFBRSxFQUNQLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FDZCxDQUFDO0NBQ0g7OztBQUlELE1BQU0sQ0FBQyxxQkFBTSxpQkFBaUIsR0FBRyxVQUFDLFlBQVk7SUFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksT0FBTyxZQUFZLENBQUMsZ0JBQWdCLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RSxFQUFFLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLEdBQUcseURBQXlELENBQUMsQ0FBQztTQUNuSDtRQUNELE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjtJQUNELEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzFDO0lBRUQscUJBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1FBQzNDLHFCQUFNLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDM0IscUJBQU0sT0FBTyxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztRQUM5QyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNsRCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsY0FBTSxPQUFBLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUE3RCxDQUE2RCxDQUFDO0tBQzVFLENBQUMsQ0FBQztJQUVILHFCQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsUUFBUSxDQUFDO0NBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbXB0eSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2FtcGxlVGltZSwgc2hhcmUsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGlzV2luZG93RGVmaW5lZCB9IGZyb20gJy4uL3V0aWwnO1xuXG5jb25zdCBzY3JvbGxMaXN0ZW5lcnMgPSBuZXcgV2Vha01hcDxhbnksIE9ic2VydmFibGU8YW55Pj4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhbXBsZU9ic2VydmFibGUob2JzOiBPYnNlcnZhYmxlPGFueT4sIHNjaGVkdWxlcj86IGFueSkge1xuICByZXR1cm4gb2JzLnBpcGUoXG4gICAgc2FtcGxlVGltZSgxMDAsIHNjaGVkdWxlciksXG4gICAgc2hhcmUoKSxcbiAgICBzdGFydFdpdGgoJycpXG4gICk7XG59XG5cbi8vIE9ubHkgY3JlYXRlIG9uZSBzY3JvbGwgbGlzdGVuZXIgcGVyIHRhcmdldCBhbmQgc2hhcmUgdGhlIG9ic2VydmFibGUuXG4vLyBUeXBpY2FsLCB0aGVyZSB3aWxsIG9ubHkgYmUgb25lIG9ic2VydmFibGUgcGVyIGFwcGxpY2F0aW9uXG5leHBvcnQgY29uc3QgZ2V0U2Nyb2xsTGlzdGVuZXIgPSAoc2Nyb2xsVGFyZ2V0KTogT2JzZXJ2YWJsZTxFdmVudCB8IFN0cmluZz4gPT4ge1xuICBpZiAoIXNjcm9sbFRhcmdldCB8fCB0eXBlb2Ygc2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoaXNXaW5kb3dEZWZpbmVkKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignYGFkZEV2ZW50TGlzdGVuZXJgIG9uICcgKyBzY3JvbGxUYXJnZXQgKyAnIChzY3JvbGxUYXJnZXQpIGlzIG5vdCBhIGZ1bmN0aW9uLiBTa2lwcGluZyB0aGlzIHRhcmdldCcpO1xuICAgIH1cbiAgICByZXR1cm4gZW1wdHkoKTtcbiAgfVxuICBpZiAoc2Nyb2xsTGlzdGVuZXJzLmhhcyhzY3JvbGxUYXJnZXQpKSB7XG4gICAgcmV0dXJuIHNjcm9sbExpc3RlbmVycy5nZXQoc2Nyb2xsVGFyZ2V0KTtcbiAgfVxuXG4gIGNvbnN0IHNyb2xsRXZlbnQgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgY29uc3QgZXZlbnROYW1lID0gJ3Njcm9sbCc7XG4gICAgY29uc3QgaGFuZGxlciA9IGV2ZW50ID0+IG9ic2VydmVyLm5leHQoZXZlbnQpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH07XG4gICAgc2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gc2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfSk7XG5cbiAgY29uc3QgbGlzdGVuZXIgPSBzYW1wbGVPYnNlcnZhYmxlKHNyb2xsRXZlbnQpO1xuICBzY3JvbGxMaXN0ZW5lcnMuc2V0KHNjcm9sbFRhcmdldCwgbGlzdGVuZXIpO1xuICByZXR1cm4gbGlzdGVuZXI7XG59O1xuIl19