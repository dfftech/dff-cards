/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
export class CardEComponent {
    constructor() {
        this.color = "#778899";
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
CardEComponent.decorators = [
    { type: Component, args: [{
                selector: "dff-card-e",
                template: "<div class=\"card-e\">\n  <header>CONTACT FORM</header>\n  <form id=\"form\" class=\"topBefore\" novalidate autocomplete='off'>\n    <input id=\"name\" type=\"text\" placeholder=\"NAME\" required class=\"question\" [(ngModel)]=\"inputData.name\" maxlength=\"50\"\n      [ngModelOptions]=\"{standalone: true}\">\n    <input id=\"email\" type=\"email\" placeholder=\"E-MAIL\" required class=\"question\" [(ngModel)]=\"inputData.email\"\n      maxlength=\"50\" [ngModelOptions]=\"{standalone: true}\">\n    <input id=\"mobile\" type=\"number\" placeholder=\"MOBILE\" required class=\"question\" [(ngModel)]=\"inputData.mobile\"\n      maxlength=\"15\" [ngModelOptions]=\"{standalone: true}\">\n    <textarea id=\"message\" type=\"text\" placeholder=\"MESSAGE\" required class=\"question\" [(ngModel)]=\"inputData.message\"\n      maxlength=\"500\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n    <input id=\"submit\" type=\"submit\" value=\"SUBMIT\" (click)=\"clickOnSubmit()\">\n  </form>\n</div>",
                styles: [".question{border-bottom:1px solid #2f4f4f}.question:invalid{border-bottom:1px solid red}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:#bbb5af}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#aca49c;font-size:.875em}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#aca49c;font-size:.875em}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#aca49c;font-size:.875em}input::placeholder,textarea::placeholder{color:#aca49c;font-size:.875em}input:focus::-webkit-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus:-ms-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus::-ms-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus::placeholder,textarea::focus:placeholder{color:#bbb5af}input::-ms-placeholder,textarea::-ms-placeholder{color:#aca49c;font-size:.875em}input:focus::-ms-placeholder,textarea:focus::-ms-placeholder{color:#bbb5af}input:hover:focus::-webkit-input-placeholder,textarea:hover:focus::-webkit-input-placeholder{color:#cbc6c1}input:hover:focus:-ms-input-placeholder,textarea:hover:focus:-ms-input-placeholder{color:#cbc6c1}input:hover:focus::-ms-input-placeholder,textarea:hover:focus::-ms-input-placeholder{color:#cbc6c1}input:hover:focus::placeholder,textarea:hover:focus::placeholder{color:#cbc6c1}input:hover::-webkit-input-placeholder,textarea:hover::-webkit-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover:-ms-input-placeholder,textarea:hover:-ms-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover::-ms-input-placeholder,textarea:hover::-ms-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover::placeholder,textarea:hover::placeholder{color:#2f4f4f;font-size:.875em}input:hover:focus::-ms-placeholder,textarea:hover::focus:-ms-placeholder{color:#cbc6c1}header{position:relative;margin:25px 0;font-size:1.3em;text-align:center;letter-spacing:7px}#form{position:relative;text-align:center}input{font-size:.875em;width:100%;height:50px;padding:0 0 0 15px;background:0 0;outline:0;color:#726659;border:1px solid #f1f5f9;border-bottom:none;transition:.3s ease-in-out;-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-ms-transition:all .3s ease-in-out}input:hover,textarea:hover{background:#f1f5f9;color:#2f4f4f}textarea{font-family:Lato,sans-serif;width:100%;max-width:100%;height:110px;max-height:110px;padding:15px 0 15px 15px;background:0 0;outline:0;color:#726659;font-size:.875em!important;border:1px solid #f1f5f9;transition:.3s ease-in-out;-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-ms-transition:all .3s ease-in-out}#submit{width:48%;padding:0;margin:0;font-size:.875em;outline:0;cursor:pointer;border:2px solid #f1f5f9;border-top:none;color:#f1f5f9;background-color:#778899}#submit:hover{color:#f1f5f9;background-color:#6495ed}.card-e input.question:valid~input[type=submit],textarea.question:valid~input[type=submit]{display:show}.card-e input.question:invalid~input[type=submit],textarea.question:invalid~input[type=submit]{display:none}"]
            }] }
];
/** @nocollapse */
CardEComponent.ctorParameters = () => [];
CardEComponent.propDecorators = {
    inputData: [{ type: Input }],
    color: [{ type: Input }],
    outputEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CardEComponent.prototype.inputData;
    /** @type {?} */
    CardEComponent.prototype.color;
    /** @type {?} */
    CardEComponent.prototype.outputEmitter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1lL2NhcmQtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTTtJQVNKO3FCQUphLFNBQVM7NkJBR2EsSUFBSSxZQUFZLEVBQUU7UUFFbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsUUFBUSxNQUFLOzs7O0lBRWIsYUFBYTtRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6Qzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsdS9CQUFzQzs7YUFFdkM7Ozs7O3dCQUVFLEtBQUs7b0JBR0wsS0FBSzs0QkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGlucHV0RGF0YTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBhbnkgPSBcIiM3Nzg4OTlcIjtcblxuICBAT3V0cHV0KClcbiAgb3V0cHV0RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghdGhpcy5pbnB1dERhdGEpIHtcbiAgICAgIHRoaXMuaW5wdXREYXRhID0ge307XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGNsaWNrT25TdWJtaXQoKSB7XG4gICAgdGhpcy5vdXRwdXRFbWl0dGVyLmVtaXQodGhpcy5pbnB1dERhdGEpO1xuICB9XG59XG4iXX0=