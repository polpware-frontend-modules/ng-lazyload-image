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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxhenlsb2FkLWltYWdlLyIsInNvdXJjZXMiOlsic3JjL2hvb2tzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBRy9DLE1BQU0sdUJBQTBCLE9BQTBCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxZQUFZLENBQUM7S0FDdkI7SUFDRCx1QkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4QztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDdEM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUM7U0FDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3QixDQUFDLENBQUM7SUFDUCxNQUFNLG1CQUFDLEtBQXFCLEVBQUM7Q0FDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzY3JvbGxQcmVzZXQgfSBmcm9tICcuL3Njcm9sbC1wcmVzZXQnO1xuaW1wb3J0IHsgSG9va1NldCwgTW9kdWxlT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JldGF0ZUhvb2tzPEU+KG9wdGlvbnM/OiBNb2R1bGVPcHRpb25zPEU+KTogSG9va1NldDxhbnk+IHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbFByZXNldDtcbiAgICB9XG4gICAgY29uc3QgaG9va3MgPSB7fTtcbiAgICBpZiAob3B0aW9ucy5wcmVzZXQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihob29rcywgb3B0aW9ucy5wcmVzZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaG9va3MsIHNjcm9sbFByZXNldCk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ3ByZXNldCcpXG4gICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBob29rc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gaG9va3MgYXMgSG9va1NldDxhbnk+O1xufVxuIl19