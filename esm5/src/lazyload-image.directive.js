/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { cretateHooks } from './hooks-factory';
import { lazyLoadImage } from './lazyload-image';
import { isWindowDefined } from './util';
/**
 * @record
 */
export function IOnLoadedPayload() { }
function IOnLoadedPayload_tsickle_Closure_declarations() {
    /** @type {?} */
    IOnLoadedPayload.prototype.success;
    /** @type {?} */
    IOnLoadedPayload.prototype.element;
}
var LazyLoadImageDirective = /** @class */ (function () {
    function LazyLoadImageDirective(el, ngZone, options) {
        this.onLoad = new EventEmitter();
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new ReplaySubject();
        this.hooks = cretateHooks(options);
    }
    /**
     * @return {?}
     */
    LazyLoadImageDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset | 0,
            scrollContainer: this.scrollTarget,
            scrollObservable: this.scrollObservable
        });
    };
    /**
     * @return {?}
     */
    LazyLoadImageDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Disable lazy load image in server side
        if (!isWindowDefined()) {
            return null;
        }
        this.ngZone.runOutsideAngular(function () {
            _this.scrollSubscription = _this.propertyChanges$.pipe(tap(function (attributes) { return _this.hooks.setup(attributes); }), switchMap(function (attributes) { return _this.hooks.getObservable(attributes).pipe(lazyLoadImage(_this.hooks, attributes)); })).subscribe(function (success) { return _this.onLoad.emit({
                element: _this.elementRef,
                success: success
            }); });
        });
    };
    /**
     * @return {?}
     */
    LazyLoadImageDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        [this.scrollSubscription]
            .filter(function (subscription) { return subscription && !subscription.isUnsubscribed; })
            .forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    LazyLoadImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lazyLoad]'
                },] }
    ];
    /** @nocollapse */
    LazyLoadImageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['options',] }] }
    ]; };
    LazyLoadImageDirective.propDecorators = {
        lazyImage: [{ type: Input, args: ['lazyLoad',] }],
        defaultImage: [{ type: Input }],
        errorImage: [{ type: Input }],
        scrollTarget: [{ type: Input }],
        scrollObservable: [{ type: Input }],
        offset: [{ type: Input }],
        useSrcset: [{ type: Input }],
        onLoad: [{ type: Output }]
    };
    return LazyLoadImageDirective;
}());
export { LazyLoadImageDirective };
function LazyLoadImageDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    LazyLoadImageDirective.prototype.lazyImage;
    /** @type {?} */
    LazyLoadImageDirective.prototype.defaultImage;
    /** @type {?} */
    LazyLoadImageDirective.prototype.errorImage;
    /** @type {?} */
    LazyLoadImageDirective.prototype.scrollTarget;
    /** @type {?} */
    LazyLoadImageDirective.prototype.scrollObservable;
    /** @type {?} */
    LazyLoadImageDirective.prototype.offset;
    /** @type {?} */
    LazyLoadImageDirective.prototype.useSrcset;
    /** @type {?} */
    LazyLoadImageDirective.prototype.onLoad;
    /** @type {?} */
    LazyLoadImageDirective.prototype.propertyChanges$;
    /** @type {?} */
    LazyLoadImageDirective.prototype.elementRef;
    /** @type {?} */
    LazyLoadImageDirective.prototype.ngZone;
    /** @type {?} */
    LazyLoadImageDirective.prototype.scrollSubscription;
    /** @type {?} */
    LazyLoadImageDirective.prototype.hooks;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxvYWQtaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvbGF6eWxvYWQtaW1hZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUgsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7SUF5QnJDLGdDQUFZLEVBQWMsRUFBRSxNQUFjLEVBQWlDLE9BQXVCO3NCQVAvQyxJQUFJLFlBQVksRUFBRTtRQVFqRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN0Qzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN0QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDbkMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3ZCLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNsQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsbURBQWtCOzs7SUFBbEI7UUFBQSxpQkFlQzs7UUFiRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQzFCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxFQUMvQyxTQUFTLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBaEYsQ0FBZ0YsQ0FBQyxDQUM1RyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNwQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxPQUFPO2FBQ25CLENBQUMsRUFIcUIsQ0FHckIsQ0FBQyxDQUFDO1NBQ1AsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUNwQixNQUFNLENBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUE1QyxDQUE0QyxDQUFDO2FBQ3BFLE9BQU8sQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0tBQzVEOztnQkEzREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO2lCQUN6Qjs7OztnQkF4QkcsVUFBVTtnQkFJVixNQUFNO2dEQW9DdUMsUUFBUSxZQUFJLE1BQU0sU0FBQyxTQUFTOzs7NEJBZHhFLEtBQUssU0FBQyxVQUFVOytCQUNoQixLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzttQ0FDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxNQUFNOztpQ0FwQ1g7O1NBNEJhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIE5nWm9uZSxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9wdGlvbmFsLFxuICAgIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY3JldGF0ZUhvb2tzIH0gZnJvbSAnLi9ob29rcy1mYWN0b3J5JztcbmltcG9ydCB7IGxhenlMb2FkSW1hZ2UgfSBmcm9tICcuL2xhenlsb2FkLWltYWdlJztcbmltcG9ydCB7IEF0dHJpYnV0ZXMsIEhvb2tTZXQsIE1vZHVsZU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGlzV2luZG93RGVmaW5lZCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9uTG9hZGVkUGF5bG9hZCB7XG4gICAgc3VjY2VzczogYm9vbGVhbixcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2xhenlMb2FkXSdcbn0pXG5leHBvcnQgY2xhc3MgTGF6eUxvYWRJbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoJ2xhenlMb2FkJykgbGF6eUltYWdlOyAgIC8vIFRoZSBpbWFnZSB0byBiZSBsYXp5IGxvYWRlZFxuICAgIEBJbnB1dCgpIGRlZmF1bHRJbWFnZTogc3RyaW5nOyAgLy8gVGhlIGltYWdlIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgbGF6eUltYWdlIGlzIGxvYWRlZFxuICAgIEBJbnB1dCgpIGVycm9ySW1hZ2U6IHN0cmluZzsgICAgLy8gVGhlIGltYWdlIHRvIGJlIGRpc3BsYXllZCBpZiBsYXp5SW1hZ2UgbG9hZCBmYWlsc1xuICAgIEBJbnB1dCgpIHNjcm9sbFRhcmdldDogYW55OyAgICAgLy8gU2Nyb2xsIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBpbWFnZSBhbmQgZW1pdHMgc2NvbGwgZXZlbnRzXG4gICAgQElucHV0KCkgc2Nyb2xsT2JzZXJ2YWJsZTsgICAgICAvLyBQYXNzIHlvdXIgb3duIHNjcm9sbCBlbWl0dGVyXG4gICAgQElucHV0KCkgb2Zmc2V0OiBudW1iZXI7ICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIHB4IGEgaW1hZ2Ugc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgaXQgaXMgaW4gdmlldyBwb3J0XG4gICAgQElucHV0KCkgdXNlU3Jjc2V0OiBib29sZWFuOyAgICAvLyBXaGV0aGVyIHNyY3NldCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiBzcmNcbiAgICBAT3V0cHV0KCkgb25Mb2FkOiBFdmVudEVtaXR0ZXI8SU9uTG9hZGVkUGF5bG9hZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIENhbGxiYWNrIHdoZW4gYW4gaW1hZ2UgaXMgbG9hZGVkXG4gICAgcHJpdmF0ZSBwcm9wZXJ0eUNoYW5nZXMkOiBSZXBsYXlTdWJqZWN0PEF0dHJpYnV0ZXM+O1xuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lO1xuICAgIHByaXZhdGUgc2Nyb2xsU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgaG9va3M6IEhvb2tTZXQ8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgQE9wdGlvbmFsKCkgQEluamVjdCgnb3B0aW9ucycpIG9wdGlvbnM/OiBNb2R1bGVPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsO1xuICAgICAgICB0aGlzLm5nWm9uZSA9IG5nWm9uZTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUNoYW5nZXMkID0gbmV3IFJlcGxheVN1YmplY3QoKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IGNyZXRhdGVIb29rcyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUNoYW5nZXMkLm5leHQoe1xuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBpbWFnZVBhdGg6IHRoaXMubGF6eUltYWdlLFxuICAgICAgICAgICAgZGVmYXVsdEltYWdlUGF0aDogdGhpcy5kZWZhdWx0SW1hZ2UsXG4gICAgICAgICAgICBlcnJvckltYWdlUGF0aDogdGhpcy5lcnJvckltYWdlLFxuICAgICAgICAgICAgdXNlU3Jjc2V0OiB0aGlzLnVzZVNyY3NldCxcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQgfCAwLFxuICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyOiB0aGlzLnNjcm9sbFRhcmdldCxcbiAgICAgICAgICAgIHNjcm9sbE9ic2VydmFibGU6IHRoaXMuc2Nyb2xsT2JzZXJ2YWJsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIC8vIERpc2FibGUgbGF6eSBsb2FkIGltYWdlIGluIHNlcnZlciBzaWRlXG4gICAgICAgIGlmICghaXNXaW5kb3dEZWZpbmVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxTdWJzY3JpcHRpb24gPSB0aGlzLnByb3BlcnR5Q2hhbmdlcyQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoYXR0cmlidXRlcyA9PiB0aGlzLmhvb2tzLnNldHVwKGF0dHJpYnV0ZXMpKSxcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoYXR0cmlidXRlcyA9PiB0aGlzLmhvb2tzLmdldE9ic2VydmFibGUoYXR0cmlidXRlcykucGlwZShsYXp5TG9hZEltYWdlKHRoaXMuaG9va3MsIGF0dHJpYnV0ZXMpKSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKHN1Y2Nlc3MgPT4gdGhpcy5vbkxvYWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIFt0aGlzLnNjcm9sbFN1YnNjcmlwdGlvbl1cbiAgICAgICAgICAgIC5maWx0ZXIoc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbiAmJiAhc3Vic2NyaXB0aW9uLmlzVW5zdWJzY3JpYmVkKVxuICAgICAgICAgICAgLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=