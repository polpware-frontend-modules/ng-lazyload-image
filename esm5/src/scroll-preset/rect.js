/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Rect = /** @class */ (function () {
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
export { Rect };
function Rect_tsickle_Closure_declarations() {
    /** @type {?} */
    Rect.empty;
    /** @type {?} */
    Rect.prototype.left;
    /** @type {?} */
    Rect.prototype.top;
    /** @type {?} */
    Rect.prototype.right;
    /** @type {?} */
    Rect.prototype.bottom;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxhenlsb2FkLWltYWdlLyIsInNvdXJjZXMiOlsic3JjL3Njcm9sbC1wcmVzZXQvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQVFFLGNBQVksSUFBWSxFQUFFLEdBQVcsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7OztJQUVNLGdCQUFXOzs7O0lBQWxCLFVBQW1CLE9BQW9CO1FBQ3JDLDBDQUFRLGNBQUksRUFBRSxZQUFHLEVBQUUsZ0JBQUssRUFBRSxrQkFBTSxDQUFxQztRQUVyRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0tBQ0Y7Ozs7O0lBRU0sZUFBVTs7OztJQUFqQixVQUFrQixPQUFlO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hFOzs7OztJQUVELHNCQUFPOzs7O0lBQVAsVUFBUSxTQUFpQjtRQUN2QixJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztLQUMxQjs7Ozs7SUFFRCw2QkFBYzs7OztJQUFkLFVBQWUsSUFBVTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQzdHOzs7OztJQUVELGtDQUFtQjs7OztJQUFuQixVQUFvQixJQUFVO1FBQzVCLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjtLQUNGO2lCQWxEb0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2VBRDNDOztTQUFhLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmVjdCB7XG4gIHN0YXRpYyBlbXB0eTogUmVjdCA9IG5ldyBSZWN0KDAsIDAsIDAsIDApO1xuXG4gIGxlZnQ6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBSZWN0IHtcbiAgICBjb25zdCB7IGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChsZWZ0ID09PSAwICYmIHRvcCA9PT0gMCAmJiByaWdodCA9PT0gMCAmJiBib3R0b20gPT09IDApIHtcbiAgICAgIHJldHVybiBSZWN0LmVtcHR5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFJlY3QobGVmdCwgdG9wLCByaWdodCwgYm90dG9tKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpbmRvdyhfd2luZG93OiBXaW5kb3cpOiBSZWN0IHtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwgMCwgX3dpbmRvdy5pbm5lcldpZHRoLCBfd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG4gIGluZmxhdGUoaW5mbGF0ZUJ5OiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZnQgLT0gaW5mbGF0ZUJ5O1xuICAgIHRoaXMudG9wIC09IGluZmxhdGVCeTtcbiAgICB0aGlzLnJpZ2h0ICs9IGluZmxhdGVCeTtcbiAgICB0aGlzLmJvdHRvbSArPSBpbmZsYXRlQnk7XG4gIH1cblxuICBpbnRlcnNlY3RzV2l0aChyZWN0OiBSZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlY3QubGVmdCA8IHRoaXMucmlnaHQgJiYgdGhpcy5sZWZ0IDwgcmVjdC5yaWdodCAmJiByZWN0LnRvcCA8IHRoaXMuYm90dG9tICYmIHRoaXMudG9wIDwgcmVjdC5ib3R0b207XG4gIH1cblxuICBnZXRJbnRlcnNlY3Rpb25XaXRoKHJlY3Q6IFJlY3QpOiBSZWN0IHtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcCk7XG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgaWYgKHJpZ2h0ID49IGxlZnQgJiYgYm90dG9tID49IHRvcCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWN0KGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBSZWN0LmVtcHR5O1xuICAgIH1cbiAgfVxufVxuIl19