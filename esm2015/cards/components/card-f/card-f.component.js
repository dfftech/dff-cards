/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
export class CardFComponent {
    constructor() {
        this.outputEmitter = new EventEmitter();
        if (!this.inputData) {
            this.inputData = {};
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    clickOnSubmit() {
        this.outputEmitter.emit(this.inputData);
    }
}
CardFComponent.decorators = [
    { type: Component, args: [{
                selector: "dff-card-f",
                template: "<div class=\"card-f\">\r\n\r\n  <form novalidate autocomplete='off'>\r\n    <input type=\"text\" name=\"name\" class=\"question\" id=\"name\" required autocomplete=\"off\" [(ngModel)]=\"inputData.name\"\r\n      maxlength=\"50\" />\r\n    <label for=\"name\"><span>Name</span></label>\r\n    <br />\r\n    <input type=\"text\" name=\"mobile\" class=\"question\" id=\"mobile\" required autocomplete=\"off\" [(ngModel)]=\"inputData.mobile\"\r\n      maxlength=\"15\" />\r\n    <label for=\"mobile\"><span>Mobile</span></label>\r\n    <br />\r\n    <input type=\"text\" name=\"email\" class=\"question\" id=\"email\" required autocomplete=\"off\" [(ngModel)]=\"inputData.email\"\r\n      maxlength=\"50\" />\r\n    <label for=\"email\"><span>E-mail</span></label>\r\n    <br />\r\n    <textarea name=\"message\" rows=\"3\" class=\"question\" id=\"msg\" required autocomplete=\"off\" [(ngModel)]=\"inputData.message\"\r\n      maxlength=\"500\"></textarea>\r\n    <label for=\"msg\"><span>Message?</span></label>\r\n    <input type=\"submit\" value=\"Submit!\" (click)=\"clickOnSubmit()\" />\r\n  </form>\r\n\r\n</div>",
                styles: [":host{width:100%;text-align:left;padding:16px}.card-f input,.card-f label,.card-f span,.card-f textarea{display:block;margin:10px;padding:5px;border:none;font-size:22px}.card-f input:focus,.card-f textarea:focus{outline:0}.card-f input.question,.card-f textarea.question{font-size:19px;font-weight:300;border-radius:2px;margin:0;border:none;width:100%;background:rgba(0,0,0,0);transition:padding-top .2s,margin-top .2s;overflow-x:hidden}.card-f input.question+label,.card-f textarea.question+label{display:block;position:relative;white-space:nowrap;padding:0;margin:0;width:40%;border-top:1px solid red;transition:width .4s;height:0}.card-f input.question:focus+label,.card-f textarea.question:focus+label{width:100%}.card-f input.question:focus,.card-f input.question:valid{padding-top:35px}.card-f textarea.question:focus,.card-f textarea.question:valid{margin-top:35px}.card-f input.question:focus+label>span,.card-f input.question:valid+label>span{top:-70px;font-size:22px;color:#333}.card-f textarea.question:focus+label>span,.card-f textarea.question:valid+label>span{top:-110px;font-size:22px;color:#333}.card-f input.question:valid+label,.card-f textarea.question:valid+label{border-color:green}.card-f input.question:invalid,.card-f textarea.question:invalid{box-shadow:none}.card-f input.question+label>span,.card-f textarea.question+label>span{font-weight:300;margin:0;position:absolute;color:#8f8f8f;font-size:28px;top:-39px;left:0;z-index:-1;transition:top .2s,font-size .2s,color .2s}.card-f input[type=submit]{transition:opacity .2s,background .2s;display:block;opacity:0;margin:10px 0 0;padding:10px;cursor:pointer;border:1px solid green;border-radius:25px;min-width:25%;color:green}.card-f input[type=submit]:hover{background:#eee}.card-f input[type=submit]:active{background:#999}.card-f input.question:valid~input[type=submit],textarea.question:valid~input[type=submit]{-webkit-animation:1s forwards appear;animation:1s forwards appear}.card-f input.question:invalid~input[type=submit],textarea.question:invalid~input[type=submit]{display:none}@-webkit-keyframes appear{100%{opacity:1}}@keyframes appear{100%{opacity:1}}"]
            }] }
];
/** @nocollapse */
CardFComponent.ctorParameters = () => [];
CardFComponent.propDecorators = {
    inputData: [{ type: Input }],
    outputEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CardFComponent.prototype.inputData;
    /** @type {?} */
    CardFComponent.prototype.outputEmitter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1mL2NhcmQtZi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTTtJQU1KOzZCQURtQyxJQUFJLFlBQVksRUFBRTtRQUVuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7SUFFRCxRQUFRLE1BQUs7Ozs7SUFFYixhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixzbUNBQXNDOzthQUV2Qzs7Ozs7d0JBRUUsS0FBSzs0QkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1mXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1mLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWYuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGlucHV0RGF0YTogYW55O1xuXG4gIEBPdXRwdXQoKVxuICBvdXRwdXRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RGF0YSkge1xuICAgICAgdGhpcy5pbnB1dERhdGEgPSB7fTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgY2xpY2tPblN1Ym1pdCgpIHtcbiAgICB0aGlzLm91dHB1dEVtaXR0ZXIuZW1pdCh0aGlzLmlucHV0RGF0YSk7XG4gIH1cbn1cbiJdfQ==