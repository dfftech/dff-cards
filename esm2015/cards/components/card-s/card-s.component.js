/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class CardSComponent {
    constructor() {
        this.aheight = "200px";
        this.awidth = "320px";
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CardSComponent.decorators = [
    { type: Component, args: [{
                selector: "dff-card-s",
                template: "<div class=\"card-s\">\r\n  <main>\r\n    <ng-content select=\"main\"></ng-content>\r\n  </main>\r\n\r\n  <aside [style.height]=\"aheight\" [style.width]=\"awidth\">\r\n    <ng-content select=\"aside\"></ng-content>\r\n  </aside>\r\n</div>",
                styles: [".card-s{display:flex;justify-content:space-between;height:calc(100vh - 90px)}.card-s>aside{overflow:auto;position:-webkit-sticky;position:sticky;top:5%}.card-s>main{width:100%;display:flex;flex-direction:column}@media (max-width:767px){.card-s>aside{display:none!important}}"]
            }] }
];
/** @nocollapse */
CardSComponent.ctorParameters = () => [];
CardSComponent.propDecorators = {
    aheight: [{ type: Input }],
    awidth: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardSComponent.prototype.aheight;
    /** @type {?} */
    CardSComponent.prototype.awidth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1zL2NhcmQtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU07SUFPSjt1QkFMa0IsT0FBTztzQkFHUixPQUFPO0tBRVI7Ozs7SUFFaEIsUUFBUSxNQUFLOzs7WUFkZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDJQQUFzQzs7YUFFdkM7Ozs7O3NCQUVFLEtBQUs7cUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1zXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLXMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1zLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRTQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGFoZWlnaHQ6IHN0cmluZyA9IFwiMjAwcHhcIjtcclxuXHJcbiAgQElucHV0KClcclxuICBhd2lkdGg6IHN0cmluZyA9IFwiMzIwcHhcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19