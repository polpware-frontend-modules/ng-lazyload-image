/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { empty, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isWindowDefined } from '../util';
var /** @type {?} */ observers = new WeakMap();
var /** @type {?} */ intersectionSubject = new Subject();
/**
 * @param {?} entrys
 * @return {?}
 */
function loadingCallback(entrys) {
    entrys.forEach(function (entry) { return intersectionSubject.next(entry); });
}
export var /** @type {?} */ getIntersectionObserver = function (attributes) {
    if (!attributes.scrollContainer && !isWindowDefined()) {
        return empty();
    }
    var /** @type {?} */ options = {
        root: attributes.scrollContainer
    };
    if (attributes.offset) {
        options.rootMargin = attributes.offset + "px";
    }
    var /** @type {?} */ scrollContainer = attributes.scrollContainer || window;
    var /** @type {?} */ observer = observers.get(scrollContainer);
    if (!observer) {
        observer = new IntersectionObserver(loadingCallback, options);
        observers.set(scrollContainer, observer);
    }
    observer.observe(attributes.element);
    return Observable.create(function (obs) {
        var /** @type {?} */ subscription = intersectionSubject.pipe(filter(function (entry) { return entry.target === attributes.element; })).subscribe(obs);
        return function () {
            subscription.unsubscribe();
            observer.unobserve(attributes.element);
        };
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLWxpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvaW50ZXJzZWN0aW9uLW9ic2VydmVyLXByZXNldC9pbnRlcnNlY3Rpb24tbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU8xQyxxQkFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQXNDLENBQUM7QUFFcEUscUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQTZCLENBQUM7Ozs7O0FBRXJFLHlCQUF5QixNQUFtQztJQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7Q0FDMUQ7QUFFRCxNQUFNLENBQUMscUJBQU0sdUJBQXVCLEdBQUcsVUFBQyxVQUFzQjtJQUM1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCO0lBRUQscUJBQU0sT0FBTyxHQUFvQjtRQUMvQixJQUFJLEVBQUUsVUFBVSxDQUFDLGVBQWU7S0FDakMsQ0FBQztJQUNGLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxVQUFVLEdBQU0sVUFBVSxDQUFDLE1BQU0sT0FBSSxDQUFDO0tBQy9DO0lBRUQscUJBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO0lBRTdELHFCQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNkLFFBQVEsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMxQztJQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRztRQUMxQixxQkFBTSxZQUFZLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLE9BQU8sRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ILE1BQU0sQ0FBQztZQUNMLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQixRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QyxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVtcHR5LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNXaW5kb3dEZWZpbmVkIH0gZnJvbSAnLi4vdXRpbCc7XG5cbnR5cGUgT2JzZXJ2ZXJPcHRpb25zID0ge1xuICByb290PzogRWxlbWVudDtcbiAgcm9vdE1hcmdpbj86IHN0cmluZztcbn07XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBXZWFrTWFwPEVsZW1lbnQgfCB7fSwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI+KCk7XG5cbmNvbnN0IGludGVyc2VjdGlvblN1YmplY3QgPSBuZXcgU3ViamVjdDxJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5PigpO1xuXG5mdW5jdGlvbiBsb2FkaW5nQ2FsbGJhY2soZW50cnlzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pIHtcbiAgZW50cnlzLmZvckVhY2goZW50cnkgPT4gaW50ZXJzZWN0aW9uU3ViamVjdC5uZXh0KGVudHJ5KSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbnRlcnNlY3Rpb25PYnNlcnZlciA9IChhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzKSA9PiB7XG4gIGlmICghYXR0cmlidXRlcy5zY3JvbGxDb250YWluZXIgJiYgIWlzV2luZG93RGVmaW5lZCgpKSB7XG4gICAgcmV0dXJuIGVtcHR5KCk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zOiBPYnNlcnZlck9wdGlvbnMgPSB7XG4gICAgcm9vdDogYXR0cmlidXRlcy5zY3JvbGxDb250YWluZXJcbiAgfTtcbiAgaWYgKGF0dHJpYnV0ZXMub2Zmc2V0KSB7XG4gICAgb3B0aW9ucy5yb290TWFyZ2luID0gYCR7YXR0cmlidXRlcy5vZmZzZXR9cHhgO1xuICB9XG5cbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gYXR0cmlidXRlcy5zY3JvbGxDb250YWluZXIgfHwgd2luZG93O1xuXG4gIGxldCBvYnNlcnZlciA9IG9ic2VydmVycy5nZXQoc2Nyb2xsQ29udGFpbmVyKTtcblxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIobG9hZGluZ0NhbGxiYWNrLCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KHNjcm9sbENvbnRhaW5lciwgb2JzZXJ2ZXIpO1xuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShhdHRyaWJ1dGVzLmVsZW1lbnQpO1xuXG4gIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnMgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGludGVyc2VjdGlvblN1YmplY3QucGlwZShmaWx0ZXIoZW50cnkgPT4gZW50cnkudGFyZ2V0ID09PSBhdHRyaWJ1dGVzLmVsZW1lbnQpKS5zdWJzY3JpYmUob2JzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoYXR0cmlidXRlcy5lbGVtZW50KTtcbiAgICB9O1xuICB9KTtcbn07XG4iXX0=