/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class CardZComponent {
    constructor() {
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
    ngOnInit() { }
    /**
     * @param {?} val
     * @return {?}
     */
    direction(val) {
        if (val) {
            console.log(val);
            /** @type {?} */
            let data = val.indexOf("left") > -1 ? "left" : null;
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
CardZComponent.decorators = [
    { type: Component, args: [{
                selector: "dff-card-z",
                template: "<div [style.margin]=\"margin\">\r\n  <div [class]=\"shadow ? 'card-z-shadow' : 'card-z'\" [style.background-color]=\"bg\" [style.maxWidth]=\"maxWidth\"\r\n    [style.height]=\"height\" [style.borderRadius]=\"radius\" [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\r\n    <span [style.padding]=\"padding\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n\r\n  </div>\r\n</div>",
                styles: [".card-z,.card-z-shadow{display:flex;width:100%;margin-bottom:2px!important;min-height:48px;align-items:center;justify-content:center;overflow:hidden;position:relative}.card-z-shadow{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}"]
            }] }
];
/** @nocollapse */
CardZComponent.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC16LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC16L2NhcmQtei5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU07SUFrQko7c0JBWlMsS0FBSzt3QkFFSCxNQUFNO3NCQUVSLE1BQU07c0JBRU4sS0FBSztzQkFFTCxLQUFLO3VCQUVKLEtBQUs7S0FFQzs7OztJQUVoQixRQUFRLE1BQUs7Ozs7O0lBRWIsU0FBUyxDQUFDLEdBQVc7UUFDbkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ2pCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLE1BQU07b0JBQ1QsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDdEIsS0FBSyxPQUFPO29CQUNWLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3BCO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDbkI7U0FDRjtLQUNGOzs7OztJQUVELEtBQUssQ0FBQyxHQUFXO1FBQ2YsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7WUFDUixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDN0QsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLEtBQUs7b0JBQ1IsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDdEIsS0FBSyxRQUFRO29CQUNYLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3BCO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDbkI7U0FDRjtLQUNGOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix1YUFBc0M7O2FBRXZDOzs7OztrQkFFRSxLQUFLO2lCQUVMLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO3NCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtelwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC16LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtei5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkWkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBkaXI7XHJcbiAgQElucHV0KClcclxuICBiZztcclxuICBASW5wdXQoKVxyXG4gIHNoYWRvdyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4V2lkdGggPSBcIjEwMCVcIjtcclxuICBASW5wdXQoKVxyXG4gIGhlaWdodCA9IFwiYXV0b1wiO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmFkaXVzID0gXCIwcHhcIjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nID0gXCIwcHhcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIGRpcmVjdGlvbih2YWw6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICBsZXQgZGF0YSA9IHZhbC5pbmRleE9mKFwibGVmdFwiKSA+IC0xID8gXCJsZWZ0XCIgOiBudWxsO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgZGF0YSA9ICFkYXRhICYmIHZhbC5pbmRleE9mKFwicmlnaHRcIikgPiAtMSA/IFwicmlnaHRcIiA6IGRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzd2l0Y2ggKGRhdGEpIHtcclxuICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xyXG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1lbmRcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsaWduKHZhbDogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGxldCBkYXRhID0gdmFsLmluZGV4T2YoXCJ0b3BcIikgPiAtMSA/IFwidG9wXCIgOiBudWxsO1xyXG4gICAgICBkYXRhID0gIWRhdGEgJiYgdmFsLmluZGV4T2YoXCJib3R0b21cIikgPiAtMSA/IFwiYm90dG9tXCIgOiBkYXRhO1xyXG4gICAgICBzd2l0Y2ggKGRhdGEpIHtcclxuICAgICAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XHJcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1lbmRcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19