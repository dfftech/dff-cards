/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class CardTComponent {
    constructor() {
        this.shadow = false;
        this.maxWidth = "100%";
        this.height = "auto";
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} val
     * @return {?}
     */
    AlignItems(val) {
        switch (val) {
            case "left":
                return "flex-start";
            case "right":
                return "flex-end";
            case "top":
                return "flex-start";
            case "bottom":
                return "flex-end";
            default:
                return "center";
        }
    }
}
CardTComponent.decorators = [
    { type: Component, args: [{
                selector: "dff-card-t",
                template: "<div [class]=\"shadow ? 'card-t-shadow' : 'card-t'\" [style.background-color]=\"bg\" [style.maxWidth]=\"maxWidth\"\n  [style.height]=\"height\" [style.justifyContent]=AlignItems(align)>\n  <ng-content></ng-content>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
CardTComponent.ctorParameters = () => [];
CardTComponent.propDecorators = {
    align: [{ type: Input }],
    bg: [{ type: Input }],
    shadow: [{ type: Input }],
    maxWidth: [{ type: Input }],
    height: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardTComponent.prototype.align;
    /** @type {?} */
    CardTComponent.prototype.bg;
    /** @type {?} */
    CardTComponent.prototype.shadow;
    /** @type {?} */
    CardTComponent.prototype.maxWidth;
    /** @type {?} */
    CardTComponent.prototype.height;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC10L2NhcmQtdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU07SUFZSjtzQkFOUyxLQUFLO3dCQUVILE1BQU07c0JBRVIsTUFBTTtLQUVDOzs7O0lBRWhCLFFBQVEsTUFBSzs7Ozs7SUFFYixVQUFVLENBQUMsR0FBVztRQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSyxNQUFNO2dCQUNULE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDdEIsS0FBSyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEIsS0FBSyxLQUFLO2dCQUNSLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDdEIsS0FBSyxRQUFRO2dCQUNYLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEI7Z0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQjtLQUNGOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwwT0FBc0M7O2FBRXZDOzs7OztvQkFFRSxLQUFLO2lCQUVMLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLO3FCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC10LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBhbGlnbjtcbiAgQElucHV0KClcbiAgYmc7XG4gIEBJbnB1dCgpXG4gIHNoYWRvdyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBtYXhXaWR0aCA9IFwiMTAwJVwiO1xuICBASW5wdXQoKVxuICBoZWlnaHQgPSBcImF1dG9cIjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIEFsaWduSXRlbXModmFsOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XG4gICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcbiAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgcmV0dXJuIFwiZmxleC1lbmRcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcImNlbnRlclwiO1xuICAgIH1cbiAgfVxufVxuIl19