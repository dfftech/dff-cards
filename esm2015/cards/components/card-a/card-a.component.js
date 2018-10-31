/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from "@angular/core";
export class CardAComponent {
    constructor() {
        this.dir = "card-a-column";
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
        switch (val) {
            case "left":
                return "card-a-row";
            case "right":
                return "card-a-row-reverse";
            case "top":
                return "card-a-column";
            case "bottom":
                return "card-a-column-reverse";
            default:
                return "card-a-column";
        }
    }
}
CardAComponent.decorators = [
    { type: Component, args: [{
                selector: "dff-card-a",
                template: "<div [class]=\"direction(dir)\">\n  <ng-content select=\"dff-card-i\"></ng-content>\n  <ng-content select=\"i\"></ng-content>\n  <ng-content select=\"div\"></ng-content>\n</div>",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [".card-a-column,.card-a-column-reverse,.card-a-row,.card-a-row-reverse{display:flex;overflow:hidden;margin-bottom:2px!important;min-height:100px;align-items:center;justify-content:center;height:200px;position:relative}.card-a-row{flex-direction:row}.card-a-row-reverse{flex-direction:row-reverse}.card-a-column{flex-direction:column}.card-a-column-reverse{flex-direction:column-reverse}:host ::ng-deep .card-a-row-reverse>*,:host ::ng-deep .card-a-row>*{flex:1 1}"]
            }] }
];
/** @nocollapse */
CardAComponent.ctorParameters = () => [];
CardAComponent.propDecorators = {
    dir: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardAComponent.prototype.dir;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1hL2NhcmQtYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTVFLE1BQU07SUFHSjttQkFEYyxlQUFlO0tBQ2I7Ozs7SUFFaEIsUUFBUSxNQUFLOzs7OztJQUViLFNBQVMsQ0FBQyxHQUFXO1FBQ25CLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLE1BQU07Z0JBQ1QsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN0QixLQUFLLE9BQU87Z0JBQ1YsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1lBQzlCLEtBQUssS0FBSztnQkFDUixNQUFNLENBQUMsZUFBZSxDQUFDO1lBQ3pCLEtBQUssUUFBUTtnQkFDWCxNQUFNLENBQUMsdUJBQXVCLENBQUM7WUFDakM7Z0JBQ0UsTUFBTSxDQUFDLGVBQWUsQ0FBQztTQUMxQjtLQUNGOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw2TEFBc0M7Z0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROzthQUMxQzs7Ozs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtYS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1hLmNvbXBvbmVudC5jc3NcIl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkXG59KVxuZXhwb3J0IGNsYXNzIENhcmRBQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZGlyOiBzdHJpbmcgPSBcImNhcmQtYS1jb2x1bW5cIjtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBkaXJlY3Rpb24odmFsOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcmV0dXJuIFwiY2FyZC1hLXJvd1wiO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHJldHVybiBcImNhcmQtYS1yb3ctcmV2ZXJzZVwiO1xuICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICByZXR1cm4gXCJjYXJkLWEtY29sdW1uXCI7XG4gICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIHJldHVybiBcImNhcmQtYS1jb2x1bW4tcmV2ZXJzZVwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiY2FyZC1hLWNvbHVtblwiO1xuICAgIH1cbiAgfVxufVxuIl19