/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { scrollPreset } from './scroll-preset';
/**
 * @template E
 * @param {?=} options
 * @return {?}
 */
export function cretateHooks(options) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxhenlsb2FkLWltYWdlLyIsInNvdXJjZXMiOlsic3JjL2hvb2tzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBRy9DLE1BQU0sdUJBQTBCLE9BQTBCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxZQUFZLENBQUM7S0FDdkI7SUFDRCxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4QztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDdEM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNmLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxRQUFRLEVBQWhCLENBQWdCLENBQUM7U0FDL0IsT0FBTyxDQUFDLFVBQUEsR0FBRztRQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0lBQ1AsTUFBTSxtQkFBQyxLQUFxQixFQUFDO0NBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2Nyb2xsUHJlc2V0IH0gZnJvbSAnLi9zY3JvbGwtcHJlc2V0JztcbmltcG9ydCB7IEhvb2tTZXQsIE1vZHVsZU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZXRhdGVIb29rczxFPihvcHRpb25zPzogTW9kdWxlT3B0aW9uczxFPik6IEhvb2tTZXQ8YW55PiB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxQcmVzZXQ7XG4gICAgfVxuICAgIGNvbnN0IGhvb2tzID0ge307XG4gICAgaWYgKG9wdGlvbnMucHJlc2V0KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaG9va3MsIG9wdGlvbnMucHJlc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGhvb2tzLCBzY3JvbGxQcmVzZXQpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdwcmVzZXQnKVxuICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaG9va3Nba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGhvb2tzIGFzIEhvb2tTZXQ8YW55Pjtcbn1cbiJdfQ==