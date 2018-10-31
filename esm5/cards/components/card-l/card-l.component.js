/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ContentChild } from "@angular/core";
var CardLComponent = /** @class */ (function () {
    function CardLComponent() {
        // console.log(this.inputData);
        this.type = "flex";
        this.minFill = "300px";
        this.inputData = [];
        this.gap = "4";
    }
    /**
     * @return {?}
     */
    CardLComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CardLComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-l",
                    template: "<div class=\"card-l\">\n  <div [class]=\"type == 'flex' ? 'flex-wrapper' : 'grid-wrapper'\">\n    <div class=\"box\" *ngFor=\"let item of inputData\" [style.padding]=\"gap+'px'\">\n      <ng-content select=\"item\" *ngTemplateOutlet=\"itemTmpl, context: { $implicit: item }\"></ng-content>\n    </div>\n  </div>\n</div>",
                    styles: [".card-l{position:relative}.card-l .flex-wrapper{width:100%;display:flex;flex-wrap:wrap}.card-l .flex-wrapper .box{flex-grow:1;flex-basis:300px}.card-l .grid-wrapper{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}"]
                }] }
    ];
    /** @nocollapse */
    CardLComponent.ctorParameters = function () { return []; };
    CardLComponent.propDecorators = {
        type: [{ type: Input }],
        minFill: [{ type: Input }],
        inputData: [{ type: Input }],
        gap: [{ type: Input }],
        itemTmpl: [{ type: ContentChild, args: ["itemTempl",] }]
    };
    return CardLComponent;
}());
export { CardLComponent };
if (false) {
    /** @type {?} */
    CardLComponent.prototype.type;
    /** @type {?} */
    CardLComponent.prototype.minFill;
    /** @type {?} */
    CardLComponent.prototype.inputData;
    /** @type {?} */
    CardLComponent.prototype.gap;
    /** @type {?} */
    CardLComponent.prototype.itemTmpl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1sL2NhcmQtbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7O0lBb0JyQjs7b0JBWGUsTUFBTTt1QkFFSCxPQUFPO3lCQUVOLEVBQUU7bUJBRVAsR0FBRztLQU9oQjs7OztJQUVELGlDQUFROzs7SUFBUixlQUFhOztnQkF0QmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwyVUFBc0M7O2lCQUV2Qzs7Ozs7dUJBRUUsS0FBSzswQkFFTCxLQUFLOzRCQUVMLEtBQUs7c0JBRUwsS0FBSzsyQkFHTCxZQUFZLFNBQUMsV0FBVzs7eUJBdkIzQjs7U0FhYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIENvbnRlbnRDaGlsZFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1sXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLWwuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1sLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRMQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHR5cGU6IHN0cmluZyA9IFwiZmxleFwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluRmlsbDogc3RyaW5nID0gXCIzMDBweFwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW5wdXREYXRhOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2FwOiBzdHJpbmcgPSBcIjRcIjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChcIml0ZW1UZW1wbFwiKVxyXG4gIGl0ZW1UbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5wdXREYXRhKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=