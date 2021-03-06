/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LazyLoadImageDirective } from './lazyload-image.directive';
export class LazyLoadImageModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eWxvYWQtaW1hZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbGF6eWxvYWQtaW1hZ2UvIiwic291cmNlcyI6WyJzcmMvbGF6eWxvYWQtaW1hZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU9wRSxNQUFNOzs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBc0I7UUFDbkMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO1NBQ3ZELENBQUM7S0FDSDs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXp5bG9hZC1pbWFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTW9kdWxlT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMYXp5TG9hZEltYWdlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0xhenlMb2FkSW1hZ2VEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIExhenlMb2FkSW1hZ2VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBNb2R1bGVPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnb3B0aW9ucycsIHVzZVZhbHVlOiBvcHRpb25zIH1dXG4gICAgfTtcbiAgfVxufVxuIl19