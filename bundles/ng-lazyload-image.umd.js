(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-lazyload-image', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['ng-lazyload-image'] = {}),global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ cssClassNames = {
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
            element.className += " " + cssClassName;
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
            element.style.backgroundImage = "url('" + imagePath + "')";
        }
        return element;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    function setSources(attrName) {
        return function (image) {
            var /** @type {?} */ sources = image.parentElement.getElementsByTagName('source');
            for (var /** @type {?} */ i = 0; i < sources.length; i++) {
                var /** @type {?} */ attrValue = sources[i].getAttribute(attrName);
                if (attrValue) {
                    sources[i].srcset = attrValue;
                }
            }
        };
    }
    var /** @type {?} */ setSourcesToDefault = setSources('defaultImage');
    var /** @type {?} */ setSourcesToLazy = setSources('lazyLoad');
    var /** @type {?} */ setSourcesToError = setSources('errorImage');
    /**
     * @param {?} setSourcesFn
     * @return {?}
     */
    function setImageAndSources(setSourcesFn) {
        return function (element, imagePath, useSrcset) {
            if (isImageElement(element) && isChildOfPicture(element)) {
                setSourcesFn(element);
            }
            if (imagePath) {
                setImage(element, imagePath, useSrcset);
            }
        };
    }
    var /** @type {?} */ setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
    var /** @type {?} */ setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
    var /** @type {?} */ setImageAndSourcesToError = setImageAndSources(setSourcesToError);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ end = function (_a) {
        var element = _a.element;
        return addCssClassName(element, cssClassNames.loaded);
    };
    var /** @type {?} */ loadImage = function (_a) {
        var element = _a.element, useSrcset = _a.useSrcset, imagePath = _a.imagePath;
        var /** @type {?} */ img;
        if (isImageElement(element) && isChildOfPicture(element)) {
            var /** @type {?} */ parentClone = (element.parentNode.cloneNode(true));
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
        return rxjs.Observable.create(function (observer) {
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
    var /** @type {?} */ setLoadedImage = function (_a) {
        var element = _a.element, imagePath = _a.imagePath, useSrcset = _a.useSrcset;
        setImageAndSourcesToLazy(element, imagePath, useSrcset);
    };
    var /** @type {?} */ setup = function (_a) {
        var element = _a.element, defaultImagePath = _a.defaultImagePath, useSrcset = _a.useSrcset;
        setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);
        if (hasCssClassName(element, cssClassNames.loaded)) {
            removeCssClassName(element, cssClassNames.loaded);
        }
    };
    var /** @type {?} */ sharedPreset = {
        finally: end,
        loadImage: loadImage,
        setErrorImage: setErrorImage,
        setLoadedImage: setLoadedImage,
        setup: setup
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Rect = (function () {
        function Rect(left, top, right, bottom) {
            this.left = left;
            this.top = top;
            this.right = right;
            this.bottom = bottom;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        Rect.fromElement = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                var _a = element.getBoundingClientRect(), left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom;
                if (left === 0 && top === 0 && right === 0 && bottom === 0) {
                    return Rect.empty;
                }
                else {
                    return new Rect(left, top, right, bottom);
                }
            };
        /**
         * @param {?} _window
         * @return {?}
         */
        Rect.fromWindow = /**
         * @param {?} _window
         * @return {?}
         */
            function (_window) {
                return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
            };
        /**
         * @param {?} inflateBy
         * @return {?}
         */
        Rect.prototype.inflate = /**
         * @param {?} inflateBy
         * @return {?}
         */
            function (inflateBy) {
                this.left -= inflateBy;
                this.top -= inflateBy;
                this.right += inflateBy;
                this.bottom += inflateBy;
            };
        /**
         * @param {?} rect
         * @return {?}
         */
        Rect.prototype.intersectsWith = /**
         * @param {?} rect
         * @return {?}
         */
            function (rect) {
                return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
            };
        /**
         * @param {?} rect
         * @return {?}
         */
        Rect.prototype.getIntersectionWith = /**
         * @param {?} rect
         * @return {?}
         */
            function (rect) {
                var /** @type {?} */ left = Math.max(this.left, rect.left);
                var /** @type {?} */ top = Math.max(this.top, rect.top);
                var /** @type {?} */ right = Math.min(this.right, rect.right);
                var /** @type {?} */ bottom = Math.min(this.bottom, rect.bottom);
                if (right >= left && bottom >= top) {
                    return new Rect(left, top, right, bottom);
                }
                else {
                    return Rect.empty;
                }
            };
        Rect.empty = new Rect(0, 0, 0, 0);
        return Rect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ scrollListeners = new WeakMap();
    /**
     * @param {?} obs
     * @param {?=} scheduler
     * @return {?}
     */
    function sampleObservable(obs, scheduler) {
        return obs.pipe(operators.sampleTime(100, scheduler), operators.share(), operators.startWith(''));
    }
    // Only create one scroll listener per target and share the observable.
    // Typical, there will only be one observable per application
    var /** @type {?} */ getScrollListener = function (scrollTarget) {
        if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
            if (isWindowDefined()) {
                console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
            }
            return rxjs.empty();
        }
        if (scrollListeners.has(scrollTarget)) {
            return scrollListeners.get(scrollTarget);
        }
        var /** @type {?} */ srollEvent = rxjs.Observable.create(function (observer) {
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ isVisible = function (_a, getWindow) {
        var element = _a.element, offset = _a.offset, scrollContainer = _a.scrollContainer;
        if (getWindow === void 0) {
            getWindow = function () { return window; };
        }
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
            return attributes.scrollObservable.pipe(operators.startWith(''));
        }
        if (attributes.scrollContainer) {
            return getScrollListener(attributes.scrollContainer);
        }
        return getScrollListener(isWindowDefined() ? window : undefined);
    };
    var /** @type {?} */ scrollPreset = Object.assign({}, sharedPreset, {
        isVisible: isVisible,
        getObservable: getObservable
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
        var /** @type {?} */ hooks = {};
        if (options.preset) {
            Object.assign(hooks, options.preset);
        }
        else {
            Object.assign(hooks, scrollPreset);
        }
        Object.keys(options)
            .filter(function (key) { return key !== 'preset'; })
            .forEach(function (key) {
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
        return function (scrollObservable) {
            return scrollObservable.pipe(operators.filter(function (event) {
                return hookSet.isVisible({
                    element: attributes.element,
                    event: event,
                    offset: attributes.offset,
                    scrollContainer: attributes.scrollContainer
                });
            }), operators.take(1), operators.mergeMap(function () { return hookSet.loadImage(attributes); }), operators.tap(function (imagePath) {
                return hookSet.setLoadedImage({
                    element: attributes.element,
                    imagePath: imagePath,
                    useSrcset: attributes.useSrcset
                });
            }), operators.map(function () { return true; }), operators.catchError(function () {
                hookSet.setErrorImage(attributes);
                return rxjs.of(false);
            }), operators.tap(function () { return hookSet.finally(attributes); }));
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LazyLoadImageDirective = (function () {
        function LazyLoadImageDirective(el, ngZone, options) {
            this.onLoad = new core.EventEmitter();
            this.elementRef = el;
            this.ngZone = ngZone;
            this.propertyChanges$ = new rxjs.ReplaySubject();
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
                    _this.scrollSubscription = _this.propertyChanges$.pipe(operators.tap(function (attributes) { return _this.hooks.setup(attributes); }), operators.switchMap(function (attributes) { return _this.hooks.getObservable(attributes).pipe(lazyLoadImage(_this.hooks, attributes)); })).subscribe(function (success) {
                        return _this.onLoad.emit({
                            element: _this.elementRef,
                            success: success
                        });
                    });
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
            { type: core.Directive, args: [{
                        selector: '[lazyLoad]'
                    },] }
        ];
        /** @nocollapse */
        LazyLoadImageDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.NgZone },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: ['options',] }] }
            ];
        };
        LazyLoadImageDirective.propDecorators = {
            lazyImage: [{ type: core.Input, args: ['lazyLoad',] }],
            defaultImage: [{ type: core.Input }],
            errorImage: [{ type: core.Input }],
            scrollTarget: [{ type: core.Input }],
            scrollObservable: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            useSrcset: [{ type: core.Input }],
            onLoad: [{ type: core.Output }]
        };
        return LazyLoadImageDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LazyLoadImageModule = (function () {
        function LazyLoadImageModule() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        LazyLoadImageModule.forRoot = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                return {
                    ngModule: LazyLoadImageModule,
                    providers: [{ provide: 'options', useValue: options }]
                };
            };
        LazyLoadImageModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [LazyLoadImageDirective],
                        exports: [LazyLoadImageDirective]
                    },] }
        ];
        return LazyLoadImageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ observers = new WeakMap();
    var /** @type {?} */ intersectionSubject = new rxjs.Subject();
    /**
     * @param {?} entrys
     * @return {?}
     */
    function loadingCallback(entrys) {
        entrys.forEach(function (entry) { return intersectionSubject.next(entry); });
    }
    var /** @type {?} */ getIntersectionObserver = function (attributes) {
        if (!attributes.scrollContainer && !isWindowDefined()) {
            return rxjs.empty();
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
        return rxjs.Observable.create(function (obs) {
            var /** @type {?} */ subscription = intersectionSubject.pipe(operators.filter(function (entry) { return entry.target === attributes.element; })).subscribe(obs);
            return function () {
                subscription.unsubscribe();
                observer.unobserve(attributes.element);
            };
        });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ isVisible$1 = function (_a) {
        var event = _a.event;
        return event.isIntersecting;
    };
    var /** @type {?} */ getObservable$1 = function (attributes, _getInterObserver) {
        if (_getInterObserver === void 0) {
            _getInterObserver = getIntersectionObserver;
        }
        if (attributes.scrollObservable) {
            return attributes.scrollObservable;
        }
        return _getInterObserver(attributes);
    };
    var /** @type {?} */ intersectionObserverPreset = Object.assign({}, sharedPreset, {
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

    exports.LazyLoadImageDirective = LazyLoadImageDirective;
    exports.LazyLoadImageModule = LazyLoadImageModule;
    exports.intersectionObserverPreset = intersectionObserverPreset;
    exports.scrollPreset = scrollPreset;
    exports.default = LazyLoadImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-lazyload-image.umd.js.map