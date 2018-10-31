/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var CardZComponent = /** @class */ (function () {
    function CardZComponent() {
        this.shadow = false;
        this.maxWidth = "100%";
        this.height = "auto";
        this.radius = "0px";
        this.margin = "0px";
        this.padding = "0px";
    }
    /**
     * @return {?}
     */
    CardZComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    CardZComponent.prototype.direction = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            console.log(val);
            /** @type {?} */
            var data = val.indexOf("left") > -1 ? "left" : null;
            console.log(data);
            data = !data && val.indexOf("right") > -1 ? "right" : data;
            console.log(data);
            switch (data) {
                case "left":
                    return "flex-start";
                case "right":
                    return "flex-end";
                default:
                    return "center";
            }
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CardZComponent.prototype.align = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            /** @type {?} */
            var data = val.indexOf("top") > -1 ? "top" : null;
            data = !data && val.indexOf("bottom") > -1 ? "bottom" : data;
            switch (data) {
                case "top":
                    return "flex-start";
                case "bottom":
                    return "flex-end";
                default:
                    return "center";
            }
        }
    };
    CardZComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-z",
                    template: "<div [style.margin]=\"margin\">\r\n  <div [class]=\"shadow ? 'card-z-shadow' : 'card-z'\" [style.background-color]=\"bg\" [style.maxWidth]=\"maxWidth\"\r\n    [style.height]=\"height\" [style.borderRadius]=\"radius\" [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\r\n    <span [style.padding]=\"padding\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n\r\n  </div>\r\n</div>",
                    styles: [".card-z,.card-z-shadow{display:flex;width:100%;margin-bottom:2px!important;min-height:48px;align-items:center;justify-content:center;overflow:hidden;position:relative}.card-z-shadow{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}"]
                }] }
    ];
    /** @nocollapse */
    CardZComponent.ctorParameters = function () { return []; };
    CardZComponent.propDecorators = {
        dir: [{ type: Input }],
        bg: [{ type: Input }],
        shadow: [{ type: Input }],
        maxWidth: [{ type: Input }],
        height: [{ type: Input }],
        radius: [{ type: Input }],
        margin: [{ type: Input }],
        padding: [{ type: Input }]
    };
    return CardZComponent;
}());
export { CardZComponent };
if (false) {
    /** @type {?} */
    CardZComponent.prototype.dir;
    /** @type {?} */
    CardZComponent.prototype.bg;
    /** @type {?} */
    CardZComponent.prototype.shadow;
    /** @type {?} */
    CardZComponent.prototype.maxWidth;
    /** @type {?} */
    CardZComponent.prototype.height;
    /** @type {?} */
    CardZComponent.prototype.radius;
    /** @type {?} */
    CardZComponent.prototype.margin;
    /** @type {?} */
    CardZComponent.prototype.padding;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC16LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC16L2NhcmQtei5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXlCdkQ7c0JBWlMsS0FBSzt3QkFFSCxNQUFNO3NCQUVSLE1BQU07c0JBRU4sS0FBSztzQkFFTCxLQUFLO3VCQUVKLEtBQUs7S0FFQzs7OztJQUVoQixpQ0FBUTs7O0lBQVIsZUFBYTs7Ozs7SUFFYixrQ0FBUzs7OztJQUFULFVBQVUsR0FBVztRQUNuQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDakIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssTUFBTTtvQkFDVCxNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUN0QixLQUFLLE9BQU87b0JBQ1YsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDcEI7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNuQjtTQUNGO0tBQ0Y7Ozs7O0lBRUQsOEJBQUs7Ozs7SUFBTCxVQUFNLEdBQVc7UUFDZixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztZQUNSLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3RCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssS0FBSztvQkFDUixNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUN0QixLQUFLLFFBQVE7b0JBQ1gsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDcEI7b0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNuQjtTQUNGO0tBQ0Y7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHVhQUFzQzs7aUJBRXZDOzs7OztzQkFFRSxLQUFLO3FCQUVMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7O3lCQXRCUjs7U0FPYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLXpcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtei5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLXouY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZFpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlyO1xyXG4gIEBJbnB1dCgpXHJcbiAgYmc7XHJcbiAgQElucHV0KClcclxuICBzaGFkb3cgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIG1heFdpZHRoID0gXCIxMDAlXCI7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQgPSBcImF1dG9cIjtcclxuICBASW5wdXQoKVxyXG4gIHJhZGl1cyA9IFwiMHB4XCI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW4gPSBcIjBweFwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZyA9IFwiMHB4XCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBkaXJlY3Rpb24odmFsOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc29sZS5sb2codmFsKTtcclxuICAgICAgbGV0IGRhdGEgPSB2YWwuaW5kZXhPZihcImxlZnRcIikgPiAtMSA/IFwibGVmdFwiIDogbnVsbDtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGRhdGEgPSAhZGF0YSAmJiB2YWwuaW5kZXhPZihcInJpZ2h0XCIpID4gLTEgPyBcInJpZ2h0XCIgOiBkYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcclxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGlnbih2YWw6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHZhbC5pbmRleE9mKFwidG9wXCIpID4gLTEgPyBcInRvcFwiIDogbnVsbDtcclxuICAgICAgZGF0YSA9ICFkYXRhICYmIHZhbC5pbmRleE9mKFwiYm90dG9tXCIpID4gLTEgPyBcImJvdHRvbVwiIDogZGF0YTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xyXG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==