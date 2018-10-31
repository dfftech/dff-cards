/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var CardBComponent = /** @class */ (function () {
    function CardBComponent() {
        this.height = "100%";
        this.dir = "center center";
    }
    /**
     * @return {?}
     */
    CardBComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    CardBComponent.prototype.direction = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            /** @type {?} */
            var data = val.indexOf("left") > -1 ? "left" : null;
            data = !data && val.indexOf("right") > -1 ? "right" : data;
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
    CardBComponent.prototype.align = /**
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
    CardBComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-b",
                    template: "<div class=\"card-b\" [style.height]=\"height\">\n  <div class='landing'>\n    <img *ngIf=\"img\" class=\"bgiv\" [src]=\"img\">\n    <video *ngIf=\"video\" autoplay='true' loop='true' muted='true' poster='' [src]='video' class=\"bgiv\"></video>\n    <div class='dim'></div>\n    <div class='text' [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>",
                    styles: [":host{overflow:hidden;position:relative}.card-b{height:100vh;width:100%;margin:0;color:#fff;position:relative;overflow:hidden}.card-b .landing{height:100%;width:100%;overflow:hidden}.card-b .landing .bgiv{height:100%;width:100%;position:absolute;top:0;left:0;z-index:-2;-o-object-fit:cover;object-fit:cover}.card-b .landing .dim{height:100%;width:100%;opacity:.5;position:absolute;top:0;left:0;z-index:-1;background-color:#000}.card-b .text{height:100%;justify-content:center;align-items:center;display:flex}"]
                }] }
    ];
    /** @nocollapse */
    CardBComponent.ctorParameters = function () { return []; };
    CardBComponent.propDecorators = {
        img: [{ type: Input }],
        video: [{ type: Input }],
        height: [{ type: Input }],
        dir: [{ type: Input }]
    };
    return CardBComponent;
}());
export { CardBComponent };
if (false) {
    /** @type {?} */
    CardBComponent.prototype.img;
    /** @type {?} */
    CardBComponent.prototype.video;
    /** @type {?} */
    CardBComponent.prototype.height;
    /** @type {?} */
    CardBComponent.prototype.dir;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1iLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1iL2NhcmQtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWlCdkQ7c0JBSmlCLE1BQU07bUJBRVQsZUFBZTtLQUViOzs7O0lBRWhCLGlDQUFROzs7SUFBUixlQUFhOzs7OztJQUViLGtDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQ1IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxNQUFNO29CQUNULE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3RCLEtBQUssT0FBTztvQkFDVixNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNwQjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ25CO1NBQ0Y7S0FDRjs7Ozs7SUFFRCw4QkFBSzs7OztJQUFMLFVBQU0sR0FBVztRQUNmLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQ1IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxLQUFLO29CQUNSLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3RCLEtBQUssUUFBUTtvQkFDWCxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNwQjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ25CO1NBQ0Y7S0FDRjs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZ2NBQXNDOztpQkFFdkM7Ozs7O3NCQUVFLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLO3NCQUVMLEtBQUs7O3lCQWRSOztTQU9hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtYlwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1iLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtYi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBpbWc6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHZpZGVvOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IHN0cmluZyA9IFwiMTAwJVwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlyOiBzdHJpbmcgPSBcImNlbnRlciBjZW50ZXJcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIGRpcmVjdGlvbih2YWw6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHZhbC5pbmRleE9mKFwibGVmdFwiKSA+IC0xID8gXCJsZWZ0XCIgOiBudWxsO1xyXG4gICAgICBkYXRhID0gIWRhdGEgJiYgdmFsLmluZGV4T2YoXCJyaWdodFwiKSA+IC0xID8gXCJyaWdodFwiIDogZGF0YTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcclxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGlnbih2YWw6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHZhbC5pbmRleE9mKFwidG9wXCIpID4gLTEgPyBcInRvcFwiIDogbnVsbDtcclxuICAgICAgZGF0YSA9ICFkYXRhICYmIHZhbC5pbmRleE9mKFwiYm90dG9tXCIpID4gLTEgPyBcImJvdHRvbVwiIDogZGF0YTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xyXG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==