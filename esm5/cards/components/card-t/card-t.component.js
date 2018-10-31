/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var CardTComponent = /** @class */ (function () {
    function CardTComponent() {
        this.shadow = false;
        this.maxWidth = "100%";
        this.height = "auto";
    }
    /**
     * @return {?}
     */
    CardTComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    CardTComponent.prototype.AlignItems = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
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
    };
    CardTComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-t",
                    template: "<div [class]=\"shadow ? 'card-t-shadow' : 'card-t'\" [style.background-color]=\"bg\" [style.maxWidth]=\"maxWidth\"\n  [style.height]=\"height\" [style.justifyContent]=AlignItems(align)>\n  <ng-content></ng-content>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardTComponent.ctorParameters = function () { return []; };
    CardTComponent.propDecorators = {
        align: [{ type: Input }],
        bg: [{ type: Input }],
        shadow: [{ type: Input }],
        maxWidth: [{ type: Input }],
        height: [{ type: Input }]
    };
    return CardTComponent;
}());
export { CardTComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC10L2NhcmQtdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQW1CdkQ7c0JBTlMsS0FBSzt3QkFFSCxNQUFNO3NCQUVSLE1BQU07S0FFQzs7OztJQUVoQixpQ0FBUTs7O0lBQVIsZUFBYTs7Ozs7SUFFYixtQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSyxNQUFNO2dCQUNULE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDdEIsS0FBSyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEIsS0FBSyxLQUFLO2dCQUNSLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDdEIsS0FBSyxRQUFRO2dCQUNYLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEI7Z0JBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQjtLQUNGOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwwT0FBc0M7O2lCQUV2Qzs7Ozs7d0JBRUUsS0FBSztxQkFFTCxLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSzt5QkFFTCxLQUFLOzt5QkFoQlI7O1NBT2EsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC10XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC10LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkVENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGFsaWduO1xuICBASW5wdXQoKVxuICBiZztcbiAgQElucHV0KClcbiAgc2hhZG93ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1heFdpZHRoID0gXCIxMDAlXCI7XG4gIEBJbnB1dCgpXG4gIGhlaWdodCA9IFwiYXV0b1wiO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgQWxpZ25JdGVtcyh2YWw6IHN0cmluZykge1xuICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuIFwiZmxleC1lbmRcIjtcbiAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xuICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICByZXR1cm4gXCJmbGV4LWVuZFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XG4gICAgfVxuICB9XG59XG4iXX0=