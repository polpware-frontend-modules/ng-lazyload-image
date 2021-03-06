/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class Rect {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWxhenlsb2FkLWltYWdlLyIsInNvdXJjZXMiOlsic3JjL3Njcm9sbC1wcmVzZXQvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTs7Ozs7OztJQVFKLFlBQVksSUFBWSxFQUFFLEdBQVcsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7OztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBb0I7UUFDckMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRXJFLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7S0FDRjs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQWU7UUFDL0IsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDaEU7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQWlCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO0tBQzFCOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFVO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDN0c7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBVTtRQUM1Qix1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1Qyx1QkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6Qyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyx1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7S0FDRjs7YUFsRG9CLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgc3RhdGljIGVtcHR5OiBSZWN0ID0gbmV3IFJlY3QoMCwgMCwgMCwgMCk7XG5cbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFJlY3Qge1xuICAgIGNvbnN0IHsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKGxlZnQgPT09IDAgJiYgdG9wID09PSAwICYmIHJpZ2h0ID09PSAwICYmIGJvdHRvbSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFJlY3QuZW1wdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUmVjdChsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2luZG93KF93aW5kb3c6IFdpbmRvdyk6IFJlY3Qge1xuICAgIHJldHVybiBuZXcgUmVjdCgwLCAwLCBfd2luZG93LmlubmVyV2lkdGgsIF93aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgaW5mbGF0ZShpbmZsYXRlQnk6IG51bWJlcikge1xuICAgIHRoaXMubGVmdCAtPSBpbmZsYXRlQnk7XG4gICAgdGhpcy50b3AgLT0gaW5mbGF0ZUJ5O1xuICAgIHRoaXMucmlnaHQgKz0gaW5mbGF0ZUJ5O1xuICAgIHRoaXMuYm90dG9tICs9IGluZmxhdGVCeTtcbiAgfVxuXG4gIGludGVyc2VjdHNXaXRoKHJlY3Q6IFJlY3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVjdC5sZWZ0IDwgdGhpcy5yaWdodCAmJiB0aGlzLmxlZnQgPCByZWN0LnJpZ2h0ICYmIHJlY3QudG9wIDwgdGhpcy5ib3R0b20gJiYgdGhpcy50b3AgPCByZWN0LmJvdHRvbTtcbiAgfVxuXG4gIGdldEludGVyc2VjdGlvbldpdGgocmVjdDogUmVjdCk6IFJlY3Qge1xuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCh0aGlzLmxlZnQsIHJlY3QubGVmdCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgodGhpcy50b3AsIHJlY3QudG9wKTtcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKHRoaXMucmlnaHQsIHJlY3QucmlnaHQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHRoaXMuYm90dG9tLCByZWN0LmJvdHRvbSk7XG5cbiAgICBpZiAocmlnaHQgPj0gbGVmdCAmJiBib3R0b20gPj0gdG9wKSB7XG4gICAgICByZXR1cm4gbmV3IFJlY3QobGVmdCwgdG9wLCByaWdodCwgYm90dG9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlY3QuZW1wdHk7XG4gICAgfVxuICB9XG59XG4iXX0=