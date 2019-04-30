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
export class LazyLoadImageDirective {
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?=} options
     */
    constructor(el, ngZone, options) {
        this.onLoad = new EventEmitter();
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new ReplaySubject();
        this.hooks = cretateHooks(options);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Disable lazy load image in server side
        if (!isWindowDefined()) {
            return null;
        }
        this.ngZone.runOutsideAngular(() => {
            this.scrollSubscription = this.propertyChanges$.pipe(tap(attributes => this.hooks.setup(attributes)), switchMap(attributes => this.hooks.getObservable(attributes).pipe(lazyLoadImage(this.hooks, attributes)))).subscribe(success => this.onLoad.emit({
                element: this.elementRef,
                success: success
            }));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        [this.scrollSubscription]
            .filter(subscription => subscription && !subscription.isUnsubscribed)
            .forEach(subscription => subscription.unsubscribe());
    }
}
LazyLoadImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lazyLoad]'
            },] }
];
/** @nocollapse */
LazyLoadImageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['options',] }] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxvYWQtaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvbGF6eWxvYWQtaW1hZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUgsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7OztBQVV6QyxNQUFNOzs7Ozs7SUFlRixZQUFZLEVBQWMsRUFBRSxNQUFjLEVBQWlDLE9BQXVCO3NCQVAvQyxJQUFJLFlBQVksRUFBRTtRQVFqRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN0Qzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDdEMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ25DLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDbEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMxQyxDQUFDLENBQUM7S0FDTjs7OztJQUVELGtCQUFrQjs7UUFFZCxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDL0MsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDNUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUN4QixPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQUMsQ0FBQztTQUNQLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsV0FBVztRQUNQLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7YUFDcEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDNUQ7OztZQTNESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7YUFDekI7Ozs7WUF4QkcsVUFBVTtZQUlWLE1BQU07NENBb0N1QyxRQUFRLFlBQUksTUFBTSxTQUFDLFNBQVM7Ozt3QkFkeEUsS0FBSyxTQUFDLFVBQVU7MkJBQ2hCLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGNyZXRhdGVIb29rcyB9IGZyb20gJy4vaG9va3MtZmFjdG9yeSc7XG5pbXBvcnQgeyBsYXp5TG9hZEltYWdlIH0gZnJvbSAnLi9sYXp5bG9hZC1pbWFnZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBIb29rU2V0LCBNb2R1bGVPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBpc1dpbmRvd0RlZmluZWQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPbkxvYWRlZFBheWxvYWQge1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW4sXG4gICAgZWxlbWVudDogRWxlbWVudFJlZlxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tsYXp5TG9hZF0nXG59KVxuZXhwb3J0IGNsYXNzIExhenlMb2FkSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCdsYXp5TG9hZCcpIGxhenlJbWFnZTsgICAvLyBUaGUgaW1hZ2UgdG8gYmUgbGF6eSBsb2FkZWRcbiAgICBASW5wdXQoKSBkZWZhdWx0SW1hZ2U6IHN0cmluZzsgIC8vIFRoZSBpbWFnZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIGxhenlJbWFnZSBpcyBsb2FkZWRcbiAgICBASW5wdXQoKSBlcnJvckltYWdlOiBzdHJpbmc7ICAgIC8vIFRoZSBpbWFnZSB0byBiZSBkaXNwbGF5ZWQgaWYgbGF6eUltYWdlIGxvYWQgZmFpbHNcbiAgICBASW5wdXQoKSBzY3JvbGxUYXJnZXQ6IGFueTsgICAgIC8vIFNjcm9sbCBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgaW1hZ2UgYW5kIGVtaXRzIHNjb2xsIGV2ZW50c1xuICAgIEBJbnB1dCgpIHNjcm9sbE9ic2VydmFibGU7ICAgICAgLy8gUGFzcyB5b3VyIG93biBzY3JvbGwgZW1pdHRlclxuICAgIEBJbnB1dCgpIG9mZnNldDogbnVtYmVyOyAgICAgICAgLy8gVGhlIG51bWJlciBvZiBweCBhIGltYWdlIHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlIGl0IGlzIGluIHZpZXcgcG9ydFxuICAgIEBJbnB1dCgpIHVzZVNyY3NldDogYm9vbGVhbjsgICAgLy8gV2hldGhlciBzcmNzZXQgYXR0cmlidXRlIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2Ygc3JjXG4gICAgQE91dHB1dCgpIG9uTG9hZDogRXZlbnRFbWl0dGVyPElPbkxvYWRlZFBheWxvYWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBDYWxsYmFjayB3aGVuIGFuIGltYWdlIGlzIGxvYWRlZFxuICAgIHByaXZhdGUgcHJvcGVydHlDaGFuZ2VzJDogUmVwbGF5U3ViamVjdDxBdHRyaWJ1dGVzPjtcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZTtcbiAgICBwcml2YXRlIHNjcm9sbFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIGhvb2tzOiBIb29rU2V0PGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIEBPcHRpb25hbCgpIEBJbmplY3QoJ29wdGlvbnMnKSBvcHRpb25zPzogTW9kdWxlT3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbDtcbiAgICAgICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XG4gICAgICAgIHRoaXMucHJvcGVydHlDaGFuZ2VzJCA9IG5ldyBSZXBsYXlTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMuaG9va3MgPSBjcmV0YXRlSG9va3Mob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHlDaGFuZ2VzJC5uZXh0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgaW1hZ2VQYXRoOiB0aGlzLmxhenlJbWFnZSxcbiAgICAgICAgICAgIGRlZmF1bHRJbWFnZVBhdGg6IHRoaXMuZGVmYXVsdEltYWdlLFxuICAgICAgICAgICAgZXJyb3JJbWFnZVBhdGg6IHRoaXMuZXJyb3JJbWFnZSxcbiAgICAgICAgICAgIHVzZVNyY3NldDogdGhpcy51c2VTcmNzZXQsXG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0IHwgMCxcbiAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lcjogdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgICAgICBzY3JvbGxPYnNlcnZhYmxlOiB0aGlzLnNjcm9sbE9ic2VydmFibGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAvLyBEaXNhYmxlIGxhenkgbG9hZCBpbWFnZSBpbiBzZXJ2ZXIgc2lkZVxuICAgICAgICBpZiAoIWlzV2luZG93RGVmaW5lZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsU3Vic2NyaXB0aW9uID0gdGhpcy5wcm9wZXJ0eUNoYW5nZXMkLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKGF0dHJpYnV0ZXMgPT4gdGhpcy5ob29rcy5zZXR1cChhdHRyaWJ1dGVzKSksXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKGF0dHJpYnV0ZXMgPT4gdGhpcy5ob29rcy5nZXRPYnNlcnZhYmxlKGF0dHJpYnV0ZXMpLnBpcGUobGF6eUxvYWRJbWFnZSh0aGlzLmhvb2tzLCBhdHRyaWJ1dGVzKSkpXG4gICAgICAgICAgICApLnN1YnNjcmliZShzdWNjZXNzID0+IHRoaXMub25Mb2FkLmVtaXQoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBbdGhpcy5zY3JvbGxTdWJzY3JpcHRpb25dXG4gICAgICAgICAgICAuZmlsdGVyKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24gJiYgIXN1YnNjcmlwdGlvbi5pc1Vuc3Vic2NyaWJlZClcbiAgICAgICAgICAgIC5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19