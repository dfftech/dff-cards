/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
var CardFComponent = /** @class */ (function () {
    function CardFComponent() {
        this.outputEmitter = new EventEmitter();
        if (!this.inputData) {
            this.inputData = {};
        }
    }
    /**
     * @return {?}
     */
    CardFComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CardFComponent.prototype.clickOnSubmit = /**
     * @return {?}
     */
    function () {
        this.outputEmitter.emit(this.inputData);
    };
    CardFComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-f",
                    template: "<div class=\"card-f\">\r\n\r\n  <form novalidate autocomplete='off'>\r\n    <input type=\"text\" name=\"name\" class=\"question\" id=\"name\" required autocomplete=\"off\" [(ngModel)]=\"inputData.name\"\r\n      maxlength=\"50\" />\r\n    <label for=\"name\"><span>Name</span></label>\r\n    <br />\r\n    <input type=\"text\" name=\"mobile\" class=\"question\" id=\"mobile\" required autocomplete=\"off\" [(ngModel)]=\"inputData.mobile\"\r\n      maxlength=\"15\" />\r\n    <label for=\"mobile\"><span>Mobile</span></label>\r\n    <br />\r\n    <input type=\"text\" name=\"email\" class=\"question\" id=\"email\" required autocomplete=\"off\" [(ngModel)]=\"inputData.email\"\r\n      maxlength=\"50\" />\r\n    <label for=\"email\"><span>E-mail</span></label>\r\n    <br />\r\n    <textarea name=\"message\" rows=\"3\" class=\"question\" id=\"msg\" required autocomplete=\"off\" [(ngModel)]=\"inputData.message\"\r\n      maxlength=\"500\"></textarea>\r\n    <label for=\"msg\"><span>Message?</span></label>\r\n    <input type=\"submit\" value=\"Submit!\" (click)=\"clickOnSubmit()\" />\r\n  </form>\r\n\r\n</div>",
                    styles: [":host{width:100%;text-align:left;padding:16px}.card-f input,.card-f label,.card-f span,.card-f textarea{display:block;margin:10px;padding:5px;border:none;font-size:22px}.card-f input:focus,.card-f textarea:focus{outline:0}.card-f input.question,.card-f textarea.question{font-size:19px;font-weight:300;border-radius:2px;margin:0;border:none;width:100%;background:rgba(0,0,0,0);transition:padding-top .2s,margin-top .2s;overflow-x:hidden}.card-f input.question+label,.card-f textarea.question+label{display:block;position:relative;white-space:nowrap;padding:0;margin:0;width:40%;border-top:1px solid red;transition:width .4s;height:0}.card-f input.question:focus+label,.card-f textarea.question:focus+label{width:100%}.card-f input.question:focus,.card-f input.question:valid{padding-top:35px}.card-f textarea.question:focus,.card-f textarea.question:valid{margin-top:35px}.card-f input.question:focus+label>span,.card-f input.question:valid+label>span{top:-70px;font-size:22px;color:#333}.card-f textarea.question:focus+label>span,.card-f textarea.question:valid+label>span{top:-110px;font-size:22px;color:#333}.card-f input.question:valid+label,.card-f textarea.question:valid+label{border-color:green}.card-f input.question:invalid,.card-f textarea.question:invalid{box-shadow:none}.card-f input.question+label>span,.card-f textarea.question+label>span{font-weight:300;margin:0;position:absolute;color:#8f8f8f;font-size:28px;top:-39px;left:0;z-index:-1;transition:top .2s,font-size .2s,color .2s}.card-f input[type=submit]{transition:opacity .2s,background .2s;display:block;opacity:0;margin:10px 0 0;padding:10px;cursor:pointer;border:1px solid green;border-radius:25px;min-width:25%;color:green}.card-f input[type=submit]:hover{background:#eee}.card-f input[type=submit]:active{background:#999}.card-f input.question:valid~input[type=submit],textarea.question:valid~input[type=submit]{-webkit-animation:1s forwards appear;animation:1s forwards appear}.card-f input.question:invalid~input[type=submit],textarea.question:invalid~input[type=submit]{display:none}@-webkit-keyframes appear{100%{opacity:1}}@keyframes appear{100%{opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    CardFComponent.ctorParameters = function () { return []; };
    CardFComponent.propDecorators = {
        inputData: [{ type: Input }],
        outputEmitter: [{ type: Output }]
    };
    return CardFComponent;
}());
export { CardFComponent };
if (false) {
    /** @type {?} */
    CardFComponent.prototype.inputData;
    /** @type {?} */
    CardFComponent.prototype.outputEmitter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1mL2NhcmQtZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBYTdFOzZCQURtQyxJQUFJLFlBQVksRUFBRTtRQUVuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7SUFFRCxpQ0FBUTs7O0lBQVIsZUFBYTs7OztJQUViLHNDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6Qzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsc21DQUFzQzs7aUJBRXZDOzs7Ozs0QkFFRSxLQUFLO2dDQUdMLE1BQU07O3lCQVhUOztTQU9hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLWZcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLWYuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtZi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgaW5wdXREYXRhOiBhbnk7XG5cbiAgQE91dHB1dCgpXG4gIG91dHB1dEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXREYXRhKSB7XG4gICAgICB0aGlzLmlucHV0RGF0YSA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBjbGlja09uU3VibWl0KCkge1xuICAgIHRoaXMub3V0cHV0RW1pdHRlci5lbWl0KHRoaXMuaW5wdXREYXRhKTtcbiAgfVxufVxuIl19