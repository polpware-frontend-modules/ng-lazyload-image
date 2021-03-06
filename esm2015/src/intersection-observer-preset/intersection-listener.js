/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { empty, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isWindowDefined } from '../util';
const /** @type {?} */ observers = new WeakMap();
const /** @type {?} */ intersectionSubject = new Subject();
/**
 * @param {?} entrys
 * @return {?}
 */
function loadingCallback(entrys) {
    entrys.forEach(entry => intersectionSubject.next(entry));
}
export const /** @type {?} */ getIntersectionObserver = (attributes) => {
    if (!attributes.scrollContainer && !isWindowDefined()) {
        return empty();
    }
    const /** @type {?} */ options = {
        root: attributes.scrollContainer
    };
    if (attributes.offset) {
        options.rootMargin = `${attributes.offset}px`;
    }
    const /** @type {?} */ scrollContainer = attributes.scrollContainer || window;
    let /** @type {?} */ observer = observers.get(scrollContainer);
    if (!observer) {
        observer = new IntersectionObserver(loadingCallback, options);
        observers.set(scrollContainer, observer);
    }
    observer.observe(attributes.element);
    return Observable.create(obs => {
        const /** @type {?} */ subscription = intersectionSubject.pipe(filter(entry => entry.target === attributes.element)).subscribe(obs);
        return () => {
            subscription.unsubscribe();
            observer.unobserve(attributes.element);
        };
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLWxpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvaW50ZXJzZWN0aW9uLW9ic2VydmVyLXByZXNldC9pbnRlcnNlY3Rpb24tbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU8xQyx1QkFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQXNDLENBQUM7QUFFcEUsdUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQTZCLENBQUM7Ozs7O0FBRXJFLHlCQUF5QixNQUFtQztJQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDMUQ7QUFFRCxNQUFNLENBQUMsdUJBQU0sdUJBQXVCLEdBQUcsQ0FBQyxVQUFzQixFQUFFLEVBQUU7SUFDaEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjtJQUVELHVCQUFNLE9BQU8sR0FBb0I7UUFDL0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyxlQUFlO0tBQ2pDLENBQUM7SUFDRixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDO0tBQy9DO0lBRUQsdUJBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO0lBRTdELHFCQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNkLFFBQVEsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMxQztJQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzdCLHVCQUFNLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkgsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNWLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQixRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QyxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVtcHR5LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNXaW5kb3dEZWZpbmVkIH0gZnJvbSAnLi4vdXRpbCc7XG5cbnR5cGUgT2JzZXJ2ZXJPcHRpb25zID0ge1xuICByb290PzogRWxlbWVudDtcbiAgcm9vdE1hcmdpbj86IHN0cmluZztcbn07XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBXZWFrTWFwPEVsZW1lbnQgfCB7fSwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI+KCk7XG5cbmNvbnN0IGludGVyc2VjdGlvblN1YmplY3QgPSBuZXcgU3ViamVjdDxJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5PigpO1xuXG5mdW5jdGlvbiBsb2FkaW5nQ2FsbGJhY2soZW50cnlzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pIHtcbiAgZW50cnlzLmZvckVhY2goZW50cnkgPT4gaW50ZXJzZWN0aW9uU3ViamVjdC5uZXh0KGVudHJ5KSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbnRlcnNlY3Rpb25PYnNlcnZlciA9IChhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzKSA9PiB7XG4gIGlmICghYXR0cmlidXRlcy5zY3JvbGxDb250YWluZXIgJiYgIWlzV2luZG93RGVmaW5lZCgpKSB7XG4gICAgcmV0dXJuIGVtcHR5KCk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zOiBPYnNlcnZlck9wdGlvbnMgPSB7XG4gICAgcm9vdDogYXR0cmlidXRlcy5zY3JvbGxDb250YWluZXJcbiAgfTtcbiAgaWYgKGF0dHJpYnV0ZXMub2Zmc2V0KSB7XG4gICAgb3B0aW9ucy5yb290TWFyZ2luID0gYCR7YXR0cmlidXRlcy5vZmZzZXR9cHhgO1xuICB9XG5cbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gYXR0cmlidXRlcy5zY3JvbGxDb250YWluZXIgfHwgd2luZG93O1xuXG4gIGxldCBvYnNlcnZlciA9IG9ic2VydmVycy5nZXQoc2Nyb2xsQ29udGFpbmVyKTtcblxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIobG9hZGluZ0NhbGxiYWNrLCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KHNjcm9sbENvbnRhaW5lciwgb2JzZXJ2ZXIpO1xuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShhdHRyaWJ1dGVzLmVsZW1lbnQpO1xuXG4gIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnMgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGludGVyc2VjdGlvblN1YmplY3QucGlwZShmaWx0ZXIoZW50cnkgPT4gZW50cnkudGFyZ2V0ID09PSBhdHRyaWJ1dGVzLmVsZW1lbnQpKS5zdWJzY3JpYmUob2JzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoYXR0cmlidXRlcy5lbGVtZW50KTtcbiAgICB9O1xuICB9KTtcbn07XG4iXX0=