import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, NgModule } from '@angular/core';
import { Observable, empty, of, ReplaySubject, Subject } from 'rxjs';
import { sampleTime, share, startWith, catchError, filter, map, mergeMap, take, tap, switchMap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ cssClassNames = {
    loaded: 'ng-lazyloaded',
    loading: 'ng-lazyloading',
    failed: 'ng-failed-lazyloaded',
};
/**
 * @param {?} element
 * @param {?} cssClassName
 * @return {?}
 */
function removeCssClassName(element, cssClassName) {
    element.className = element.className.replace(cssClassName, '');
}
/**
 * @param {?} element
 * @param {?} cssClassName
 * @return {?}
 */
function addCssClassName(element, cssClassName) {
    if (!element.className.includes(cssClassName)) {
        element.className += ` ${cssClassName}`;
    }
}
/**
 * @param {?} element
 * @param {?} cssClassName
 * @return {?}
 */
function hasCssClassName(element, cssClassName) {
    return element.className && element.className.includes(cssClassName);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function isWindowDefined() {
    return typeof window !== 'undefined';
}
/**
 * @param {?} element
 * @return {?}
 */
function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
/**
 * @param {?} element
 * @return {?}
 */
function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
/**
 * @param {?} element
 * @param {?} imagePath
 * @param {?} useSrcset
 * @return {?}
 */
function setImage(element, imagePath, useSrcset) {
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
const /** @type {?} */ setSourcesToLazy = setSources('lazyLoad');
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
const /** @type {?} */ setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
const /** @type {?} */ setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
const /** @type {?} */ setImageAndSourcesToError = setImageAndSources(setSourcesToError);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ end = ({ element }) => addCssClassName(element, cssClassNames.loaded);
const /** @type {?} */ loadImage = ({ element, useSrcset, imagePath }) => {
    let /** @type {?} */ img;
    if (isImageElement(element) && isChildOfPicture(element)) {
        const /** @type {?} */ parentClone = /** @type {?} */ (element.parentNode.cloneNode(true));
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
    return Observable.create(observer => {
        img.onload = () => {
            observer.next(imagePath);
            observer.complete();
        };
        img.onerror = err => {
            observer.error(null);
        };
    });
};
const /** @type {?} */ setErrorImage = ({ element, errorImagePath, useSrcset }) => {
    setImageAndSourcesToError(element, errorImagePath, useSrcset);
    addCssClassName(element, cssClassNames.failed);
};
const /** @type {?} */ setLoadedImage = ({ element, imagePath, useSrcset }) => {
    setImageAndSourcesToLazy(element, imagePath, useSrcset);
};
const /** @type {?} */ setup = ({ element, defaultImagePath, useSrcset }) => {
    setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);
    if (hasCssClassName(element, cssClassNames.loaded)) {
        removeCssClassName(element, cssClassNames.loaded);
    }
};
const /** @type {?} */ sharedPreset = {
    finally: end,
    loadImage,
    setErrorImage,
    setLoadedImage,
    setup
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Rect {
    /**
     * @param {?} left
     * @param {?} top
     * @param {?} right
     * @param {?} bottom
     */
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static fromElement(element) {
        const { left, top, right, bottom } = element.getBoundingClientRect();
        if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
        }
        else {
            return new Rect(left, top, right, bottom);
        }
    }
    /**
     * @param {?} _window
     * @return {?}
     */
    static fromWindow(_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    }
    /**
     * @param {?} inflateBy
     * @return {?}
     */
    inflate(inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    intersectsWith(rect) {
        return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    getIntersectionWith(rect) {
        const /** @type {?} */ left = Math.max(this.left, rect.left);
        const /** @type {?} */ top = Math.max(this.top, rect.top);
        const /** @type {?} */ right = Math.min(this.right, rect.right);
        const /** @type {?} */ bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        else {
            return Rect.empty;
        }
    }
}
Rect.empty = new Rect(0, 0, 0, 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ scrollListeners = new WeakMap();
/**
 * @param {?} obs
 * @param {?=} scheduler
 * @return {?}
 */
function sampleObservable(obs, scheduler) {
    return obs.pipe(sampleTime(100, scheduler), share(), startWith(''));
}
// Only create one scroll listener per target and share the observable.
// Typical, there will only be one observable per application
const /** @type {?} */ getScrollListener = (scrollTarget) => {
    if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
        if (isWindowDefined()) {
            console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
        }
        return empty();
    }
    if (scrollListeners.has(scrollTarget)) {
        return scrollListeners.get(scrollTarget);
    }
    const /** @type {?} */ srollEvent = Observable.create(observer => {
        const /** @type {?} */ eventName = 'scroll';
        const /** @type {?} */ handler = event => observer.next(event);
        const /** @type {?} */ options = { passive: true, capture: false };
        scrollTarget.addEventListener(eventName, handler, options);
        return () => scrollTarget.removeEventListener(eventName, handler, options);
    });
    const /** @type {?} */ listener = sampleObservable(srollEvent);
    scrollListeners.set(scrollTarget, listener);
    return listener;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ isVisible = ({ element, offset, scrollContainer }, getWindow = () => window) => {
    const /** @type {?} */ elementBounds = Rect.fromElement(element);
    if (elementBounds === Rect.empty) {
        return false;
    }
    const /** @type {?} */ windowBounds = Rect.fromWindow(getWindow());
    elementBounds.inflate(offset);
    if (scrollContainer) {
        const /** @type {?} */ scrollContainerBounds = Rect.fromElement(scrollContainer);
        const /** @type {?} */ intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
        return elementBounds.intersectsWith(intersection);
    }
    else {
        return elementBounds.intersectsWith(windowBounds);
    }
};
const /** @type {?} */ getObservable = (attributes) => {
    if (attributes.scrollObservable) {
        return attributes.scrollObservable.pipe(startWith(''));
    }
    if (attributes.scrollContainer) {
        return getScrollListener(attributes.scrollContainer);
    }
    return getScrollListener(isWindowDefined() ? window : undefined);
};
const /** @type {?} */ scrollPreset = Object.assign({}, sharedPreset, {
    isVisible,
    getObservable
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template E
 * @param {?=} options
 * @return {?}
 */
function cretateHooks(options) {
    if (!options) {
        return scrollPreset;
    }
    const /** @type {?} */ hooks = {};
    if (options.preset) {
        Object.assign(hooks, options.preset);
    }
    else {
        Object.assign(hooks, scrollPreset);
    }
    Object.keys(options)
        .filter(key => key !== 'preset')
        .forEach(key => {
        hooks[key] = options[key];
    });
    return /** @type {?} */ (hooks);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template E
 * @param {?} hookSet
 * @param {?} attributes
 * @return {?}
 */
function lazyLoadImage(hookSet, attributes) {
    return (scrollObservable) => {
        return scrollObservable.pipe(filter(event => hookSet.isVisible({
            element: attributes.element,
            event: event,
            offset: attributes.offset,
            scrollContainer: attributes.scrollContainer
        })), take(1), mergeMap(() => hookSet.loadImage(attributes)), tap(imagePath => hookSet.setLoadedImage({
            element: attributes.element,
            imagePath,
            useSrcset: attributes.useSrcset
        })), map(() => true), catchError(() => {
            hookSet.setErrorImage(attributes);
            return of(false);
        }), tap(() => hookSet.finally(attributes)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LazyLoadImageDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LazyLoadImageModule {
    /**
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: LazyLoadImageModule,
            providers: [{ provide: 'options', useValue: options }]
        };
    }
}
LazyLoadImageModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LazyLoadImageDirective],
                exports: [LazyLoadImageDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ observers = new WeakMap();
const /** @type {?} */ intersectionSubject = new Subject();
/**
 * @param {?} entrys
 * @return {?}
 */
function loadingCallback(entrys) {
    entrys.forEach(entry => intersectionSubject.next(entry));
}
const /** @type {?} */ getIntersectionObserver = (attributes) => {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ isVisible$1 = ({ event }) => {
    return event.isIntersecting;
};
const /** @type {?} */ getObservable$1 = (attributes, _getInterObserver = getIntersectionObserver) => {
    if (attributes.scrollObservable) {
        return attributes.scrollObservable;
    }
    return _getInterObserver(attributes);
};
const /** @type {?} */ intersectionObserverPreset = Object.assign({}, sharedPreset, {
    isVisible: isVisible$1,
    getObservable: getObservable$1
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export default LazyLoadImageModule;
export { LazyLoadImageDirective, LazyLoadImageModule, intersectionObserverPreset, scrollPreset };

//# sourceMappingURL=ng-lazyload-image.js.map