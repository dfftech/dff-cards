/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class CardBComponent {
    constructor() {
        this.height = "100%";
        this.dir = "center center";
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} val
     * @return {?}
     */
    direction(val) {
        if (val) {
            /** @type {?} */
            let data = val.indexOf("left") > -1 ? "left" : null;
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    align(val) {
        if (val) {
            /** @type {?} */
            let data = val.indexOf("top") > -1 ? "top" : null;
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
    }
}
CardBComponent.decorators = [
    { type: Component, args: [{
                selector: "dff-card-b",
                template: "<div class=\"card-b\" [style.height]=\"height\">\n  <div class='landing'>\n    <img *ngIf=\"img\" class=\"bgiv\" [src]=\"img\">\n    <video *ngIf=\"video\" autoplay='true' loop='true' muted='true' poster='' [src]='video' class=\"bgiv\"></video>\n    <div class='dim'></div>\n    <div class='text' [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>",
                styles: [":host{overflow:hidden;position:relative}.card-b{height:100vh;width:100%;margin:0;color:#fff;position:relative;overflow:hidden}.card-b .landing{height:100%;width:100%;overflow:hidden}.card-b .landing .bgiv{height:100%;width:100%;position:absolute;top:0;left:0;z-index:-2;-o-object-fit:cover;object-fit:cover}.card-b .landing .dim{height:100%;width:100%;opacity:.5;position:absolute;top:0;left:0;z-index:-1;background-color:#000}.card-b .text{height:100%;justify-content:center;align-items:center;display:flex}"]
            }] }
];
/** @nocollapse */
CardBComponent.ctorParameters = () => [];
CardBComponent.propDecorators = {
    img: [{ type: Input }],
    video: [{ type: Input }],
    height: [{ type: Input }],
    dir: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1iLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1iL2NhcmQtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU07SUFVSjtzQkFKaUIsTUFBTTttQkFFVCxlQUFlO0tBRWI7Ozs7SUFFaEIsUUFBUSxNQUFLOzs7OztJQUViLFNBQVMsQ0FBQyxHQUFXO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQ1IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxNQUFNO29CQUNULE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3RCLEtBQUssT0FBTztvQkFDVixNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNwQjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ25CO1NBQ0Y7S0FDRjs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBVztRQUNmLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQ1IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxLQUFLO29CQUNSLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3RCLEtBQUssUUFBUTtvQkFDWCxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNwQjtvQkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ25CO1NBQ0Y7S0FDRjs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsZ2NBQXNDOzthQUV2Qzs7Ozs7a0JBRUUsS0FBSztvQkFFTCxLQUFLO3FCQUVMLEtBQUs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1iXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLWIuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1iLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRCQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGltZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmlkZW86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGhlaWdodDogc3RyaW5nID0gXCIxMDAlXCI7XHJcbiAgQElucHV0KClcclxuICBkaXI6IHN0cmluZyA9IFwiY2VudGVyIGNlbnRlclwiO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgZGlyZWN0aW9uKHZhbDogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGxldCBkYXRhID0gdmFsLmluZGV4T2YoXCJsZWZ0XCIpID4gLTEgPyBcImxlZnRcIiA6IG51bGw7XHJcbiAgICAgIGRhdGEgPSAhZGF0YSAmJiB2YWwuaW5kZXhPZihcInJpZ2h0XCIpID4gLTEgPyBcInJpZ2h0XCIgOiBkYXRhO1xyXG4gICAgICBzd2l0Y2ggKGRhdGEpIHtcclxuICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xyXG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1lbmRcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsaWduKHZhbDogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGxldCBkYXRhID0gdmFsLmluZGV4T2YoXCJ0b3BcIikgPiAtMSA/IFwidG9wXCIgOiBudWxsO1xyXG4gICAgICBkYXRhID0gIWRhdGEgJiYgdmFsLmluZGV4T2YoXCJib3R0b21cIikgPiAtMSA/IFwiYm90dG9tXCIgOiBkYXRhO1xyXG4gICAgICBzd2l0Y2ggKGRhdGEpIHtcclxuICAgICAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XHJcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1lbmRcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19