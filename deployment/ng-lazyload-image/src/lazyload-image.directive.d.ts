import { AfterContentInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy } from '@angular/core';
import { ModuleOptions } from './types';
export interface IOnLoadedPayload {
    success: boolean;
    element: ElementRef;
}
export declare class LazyLoadImageDirective implements OnChanges, AfterContentInit, OnDestroy {
    lazyImage: any;
    defaultImage: string;
    errorImage: string;
    scrollTarget: any;
    scrollObservable: any;
    offset: number;
    useSrcset: boolean;
    onLoad: EventEmitter<IOnLoadedPayload>;
    private propertyChanges$;
    private elementRef;
    private ngZone;
    private scrollSubscription;
    private hooks;
    constructor(el: ElementRef, ngZone: NgZone, options?: ModuleOptions);
    ngOnChanges(): void;
    ngAfterContentInit(): any;
    ngOnDestroy(): void;
}
