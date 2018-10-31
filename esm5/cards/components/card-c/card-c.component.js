/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
var CardCComponent = /** @class */ (function () {
    function CardCComponent() {
        this.buttonBg = "white";
        this.dir = "left";
        this.outputEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CardCComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CardCComponent.prototype.onCardSelect = /**
     * @return {?}
     */
    function () {
        this.outputEmitter.emit(this.outputData);
    };
    CardCComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-c",
                    template: "<div [class]='dir == \"left\" ? \"card-c\" : \"card-c-reverse\"'>\r\n  <div class=\"ibox\">\r\n    <dff-card-i [src]=\"img\"> </dff-card-i>\r\n  </div>\r\n  <div class=\"box\">\r\n    <ng-content></ng-content>\r\n    <button *ngIf=\"buttonText\" [style.backgroundColor]=\"buttonBg\" (click)=\"onCardSelect()\"> {{buttonText}}</button>\r\n  </div>\r\n</div>",
                    styles: [":host{overflow:hidden;max-width:100%}.card-c{display:flex;position:relative;align-items:center;align-content:space-between;justify-content:space-around;flex-direction:row;padding:1em}.card-c button,.card-c-reverse button{height:35px;border-radius:20px;background-color:#1b5683;color:#fff;width:150px;font-size:16px;cursor:pointer}.card-c>*{flex:50%;text-align:center;overflow:hidden}.card-c-reverse{display:flex;align-items:center;align-content:space-between;justify-content:space-around;padding:1em;flex-direction:row-reverse}.card-c-reverse>*{flex:50%;text-align:center}s .card-c .ibox img{height:auto;width:100%;max-width:300px}@media screen and (max-width:500px){.card-c,.card-c-reverse{flex-direction:column}}"]
                }] }
    ];
    /** @nocollapse */
    CardCComponent.ctorParameters = function () { return []; };
    CardCComponent.propDecorators = {
        buttonBg: [{ type: Input }],
        buttonText: [{ type: Input }],
        img: [{ type: Input }],
        dir: [{ type: Input }],
        outputEmitter: [{ type: Output }],
        outputData: [{ type: Input }]
    };
    return CardCComponent;
}());
export { CardCComponent };
if (false) {
    /** @type {?} */
    CardCComponent.prototype.buttonBg;
    /** @type {?} */
    CardCComponent.prototype.buttonText;
    /** @type {?} */
    CardCComponent.prototype.img;
    /** @type {?} */
    CardCComponent.prototype.dir;
    /** @type {?} */
    CardCComponent.prototype.outputEmitter;
    /** @type {?} */
    CardCComponent.prototype.outputData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1jLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1jL2NhcmQtYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBMEI3RTt3QkFqQm1CLE9BQU87bUJBU2YsTUFBTTs2QkFHa0IsSUFBSSxZQUFZLEVBQUU7S0FLckM7Ozs7SUFFaEIsaUNBQVE7OztJQUFSLGVBQWE7Ozs7SUFFYixxQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDMUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGdYQUFzQzs7aUJBRXZDOzs7OzsyQkFFRSxLQUFLOzZCQUdMLEtBQUs7c0JBR0wsS0FBSztzQkFHTCxLQUFLO2dDQUdMLE1BQU07NkJBR04sS0FBSzs7eUJBdkJSOztTQU9hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLWNcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtYy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uQmc6IHN0cmluZyA9IFwid2hpdGVcIjtcclxuXHJcbiAgQElucHV0KClcclxuICBidXR0b25UZXh0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaW1nOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlyOiBhbnkgPSBcImxlZnRcIjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb3V0cHV0RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3V0cHV0RGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgb25DYXJkU2VsZWN0KCkge1xyXG4gICAgdGhpcy5vdXRwdXRFbWl0dGVyLmVtaXQodGhpcy5vdXRwdXREYXRhKTtcclxuICB9XHJcbn1cclxuIl19