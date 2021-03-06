/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, take, tap } from 'rxjs/operators';
/**
 * @template E
 * @param {?} hookSet
 * @param {?} attributes
 * @return {?}
 */
export function lazyLoadImage(hookSet, attributes) {
    return function (scrollObservable) {
        return scrollObservable.pipe(filter(function (event) {
            return hookSet.isVisible({
                element: attributes.element,
                event: event,
                offset: attributes.offset,
                scrollContainer: attributes.scrollContainer
            });
        }), take(1), mergeMap(function () { return hookSet.loadImage(attributes); }), tap(function (imagePath) {
            return hookSet.setLoadedImage({
                element: attributes.element,
                imagePath: imagePath,
                useSrcset: attributes.useSrcset
            });
        }), map(function () { return true; }), catchError(function () {
            hookSet.setErrorImage(attributes);
            return of(false);
        }), tap(function () { return hookSet.finally(attributes); }));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxvYWQtaW1hZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1sYXp5bG9hZC1pbWFnZS8iLCJzb3VyY2VzIjpbInNyYy9sYXp5bG9hZC1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUc5RSxNQUFNLHdCQUEyQixPQUFtQixFQUFFLFVBQXNCO0lBQzFFLE1BQU0sQ0FBQyxVQUFDLGdCQUErQjtRQUNyQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUMxQixNQUFNLENBQUMsVUFBQSxLQUFLO1lBQ1YsT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNoQixPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU87Z0JBQzNCLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtnQkFDekIsZUFBZSxFQUFFLFVBQVUsQ0FBQyxlQUFlO2FBQzVDLENBQUM7UUFMRixDQUtFLENBQ0gsRUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUE3QixDQUE2QixDQUFDLEVBQzdDLEdBQUcsQ0FBQyxVQUFBLFNBQVM7WUFDWCxPQUFBLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTztnQkFDM0IsU0FBUyxXQUFBO2dCQUNULFNBQVMsRUFBRSxVQUFVLENBQUMsU0FBUzthQUNoQyxDQUFDO1FBSkYsQ0FJRSxDQUNILEVBQ0QsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLEVBQ2YsVUFBVSxDQUFDO1lBQ1QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCLENBQUMsRUFDRixHQUFHLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FDdkMsQ0FBQztLQUNILENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgbWVyZ2VNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIEhvb2tTZXQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxhenlMb2FkSW1hZ2U8RT4oaG9va1NldDogSG9va1NldDxFPiwgYXR0cmlidXRlczogQXR0cmlidXRlcykge1xuICByZXR1cm4gKHNjcm9sbE9ic2VydmFibGU6IE9ic2VydmFibGU8RT4pID0+IHtcbiAgICByZXR1cm4gc2Nyb2xsT2JzZXJ2YWJsZS5waXBlKFxuICAgICAgZmlsdGVyKGV2ZW50ID0+XG4gICAgICAgIGhvb2tTZXQuaXNWaXNpYmxlKHtcbiAgICAgICAgICBlbGVtZW50OiBhdHRyaWJ1dGVzLmVsZW1lbnQsXG4gICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIG9mZnNldDogYXR0cmlidXRlcy5vZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyOiBhdHRyaWJ1dGVzLnNjcm9sbENvbnRhaW5lclxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBtZXJnZU1hcCgoKSA9PiBob29rU2V0LmxvYWRJbWFnZShhdHRyaWJ1dGVzKSksXG4gICAgICB0YXAoaW1hZ2VQYXRoID0+XG4gICAgICAgIGhvb2tTZXQuc2V0TG9hZGVkSW1hZ2Uoe1xuICAgICAgICAgIGVsZW1lbnQ6IGF0dHJpYnV0ZXMuZWxlbWVudCxcbiAgICAgICAgICBpbWFnZVBhdGgsXG4gICAgICAgICAgdXNlU3Jjc2V0OiBhdHRyaWJ1dGVzLnVzZVNyY3NldFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIG1hcCgoKSA9PiB0cnVlKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICBob29rU2V0LnNldEVycm9ySW1hZ2UoYXR0cmlidXRlcyk7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIHRhcCgoKSA9PiBob29rU2V0LmZpbmFsbHkoYXR0cmlidXRlcykpXG4gICAgKTtcbiAgfTtcbn1cbiJdfQ==