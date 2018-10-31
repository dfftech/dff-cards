import { Component, Input, ViewEncapsulation, Output, EventEmitter, ContentChild, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardAComponent = /** @class */ (function () {
    function CardAComponent() {
        this.dir = "card-a-column";
    }
    /**
     * @return {?}
     */
    CardAComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    CardAComponent.prototype.direction = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
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
    };
    CardAComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-a",
                    template: "<div [class]=\"direction(dir)\">\n  <ng-content select=\"dff-card-i\"></ng-content>\n  <ng-content select=\"i\"></ng-content>\n  <ng-content select=\"div\"></ng-content>\n</div>",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [".card-a-column,.card-a-column-reverse,.card-a-row,.card-a-row-reverse{display:flex;overflow:hidden;margin-bottom:2px!important;min-height:100px;align-items:center;justify-content:center;height:200px;position:relative}.card-a-row{flex-direction:row}.card-a-row-reverse{flex-direction:row-reverse}.card-a-column{flex-direction:column}.card-a-column-reverse{flex-direction:column-reverse}:host ::ng-deep .card-a-row-reverse>*,:host ::ng-deep .card-a-row>*{flex:1 1}"]
                }] }
    ];
    /** @nocollapse */
    CardAComponent.ctorParameters = function () { return []; };
    CardAComponent.propDecorators = {
        dir: [{ type: Input }]
    };
    return CardAComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardBComponent = /** @class */ (function () {
    function CardBComponent() {
        this.height = "100%";
        this.dir = "center center";
    }
    /**
     * @return {?}
     */
    CardBComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    CardBComponent.prototype.direction = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            /** @type {?} */
            var data = val.indexOf("left") > -1 ? "left" : null;
            data = !data && val.indexOf("right") > -1 ? "right" : data;
            switch (data) {
                case "left":
                    return "flex-start";
                case "right":
                    return "flex-end";
                default:
                    return "center";
            }
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CardBComponent.prototype.align = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            /** @type {?} */
            var data = val.indexOf("top") > -1 ? "top" : null;
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
    };
    CardBComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-b",
                    template: "<div class=\"card-b\" [style.height]=\"height\">\n  <div class='landing'>\n    <img *ngIf=\"img\" class=\"bgiv\" [src]=\"img\">\n    <video *ngIf=\"video\" autoplay='true' loop='true' muted='true' poster='' [src]='video' class=\"bgiv\"></video>\n    <div class='dim'></div>\n    <div class='text' [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>",
                    styles: [":host{overflow:hidden;position:relative}.card-b{height:100vh;width:100%;margin:0;color:#fff;position:relative;overflow:hidden}.card-b .landing{height:100%;width:100%;overflow:hidden}.card-b .landing .bgiv{height:100%;width:100%;position:absolute;top:0;left:0;z-index:-2;-o-object-fit:cover;object-fit:cover}.card-b .landing .dim{height:100%;width:100%;opacity:.5;position:absolute;top:0;left:0;z-index:-1;background-color:#000}.card-b .text{height:100%;justify-content:center;align-items:center;display:flex}"]
                }] }
    ];
    /** @nocollapse */
    CardBComponent.ctorParameters = function () { return []; };
    CardBComponent.propDecorators = {
        img: [{ type: Input }],
        video: [{ type: Input }],
        height: [{ type: Input }],
        dir: [{ type: Input }]
    };
    return CardBComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardDComponent = /** @class */ (function () {
    function CardDComponent() {
    }
    /**
     * @return {?}
     */
    CardDComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardDComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-d',
                    template: "<p>\n  card-d works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardDComponent.ctorParameters = function () { return []; };
    return CardDComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardEComponent = /** @class */ (function () {
    function CardEComponent() {
        this.color = "#778899";
        this.outputEmitter = new EventEmitter();
        if (!this.inputData) {
            this.inputData = {};
        }
    }
    /**
     * @return {?}
     */
    CardEComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CardEComponent.prototype.clickOnSubmit = /**
     * @return {?}
     */
    function () {
        this.outputEmitter.emit(this.inputData);
    };
    CardEComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-e",
                    template: "<div class=\"card-e\">\n  <header>CONTACT FORM</header>\n  <form id=\"form\" class=\"topBefore\" novalidate autocomplete='off'>\n    <input id=\"name\" type=\"text\" placeholder=\"NAME\" required class=\"question\" [(ngModel)]=\"inputData.name\" maxlength=\"50\"\n      [ngModelOptions]=\"{standalone: true}\">\n    <input id=\"email\" type=\"email\" placeholder=\"E-MAIL\" required class=\"question\" [(ngModel)]=\"inputData.email\"\n      maxlength=\"50\" [ngModelOptions]=\"{standalone: true}\">\n    <input id=\"mobile\" type=\"number\" placeholder=\"MOBILE\" required class=\"question\" [(ngModel)]=\"inputData.mobile\"\n      maxlength=\"15\" [ngModelOptions]=\"{standalone: true}\">\n    <textarea id=\"message\" type=\"text\" placeholder=\"MESSAGE\" required class=\"question\" [(ngModel)]=\"inputData.message\"\n      maxlength=\"500\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n    <input id=\"submit\" type=\"submit\" value=\"SUBMIT\" (click)=\"clickOnSubmit()\">\n  </form>\n</div>",
                    styles: [".question{border-bottom:1px solid #2f4f4f}.question:invalid{border-bottom:1px solid red}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:#bbb5af}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#aca49c;font-size:.875em}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#aca49c;font-size:.875em}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#aca49c;font-size:.875em}input::placeholder,textarea::placeholder{color:#aca49c;font-size:.875em}input:focus::-webkit-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus:-ms-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus::-ms-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus::placeholder,textarea::focus:placeholder{color:#bbb5af}input::-ms-placeholder,textarea::-ms-placeholder{color:#aca49c;font-size:.875em}input:focus::-ms-placeholder,textarea:focus::-ms-placeholder{color:#bbb5af}input:hover:focus::-webkit-input-placeholder,textarea:hover:focus::-webkit-input-placeholder{color:#cbc6c1}input:hover:focus:-ms-input-placeholder,textarea:hover:focus:-ms-input-placeholder{color:#cbc6c1}input:hover:focus::-ms-input-placeholder,textarea:hover:focus::-ms-input-placeholder{color:#cbc6c1}input:hover:focus::placeholder,textarea:hover:focus::placeholder{color:#cbc6c1}input:hover::-webkit-input-placeholder,textarea:hover::-webkit-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover:-ms-input-placeholder,textarea:hover:-ms-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover::-ms-input-placeholder,textarea:hover::-ms-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover::placeholder,textarea:hover::placeholder{color:#2f4f4f;font-size:.875em}input:hover:focus::-ms-placeholder,textarea:hover::focus:-ms-placeholder{color:#cbc6c1}header{position:relative;margin:25px 0;font-size:1.3em;text-align:center;letter-spacing:7px}#form{position:relative;text-align:center}input{font-size:.875em;width:100%;height:50px;padding:0 0 0 15px;background:0 0;outline:0;color:#726659;border:1px solid #f1f5f9;border-bottom:none;transition:.3s ease-in-out;-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-ms-transition:all .3s ease-in-out}input:hover,textarea:hover{background:#f1f5f9;color:#2f4f4f}textarea{font-family:Lato,sans-serif;width:100%;max-width:100%;height:110px;max-height:110px;padding:15px 0 15px 15px;background:0 0;outline:0;color:#726659;font-size:.875em!important;border:1px solid #f1f5f9;transition:.3s ease-in-out;-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-ms-transition:all .3s ease-in-out}#submit{width:48%;padding:0;margin:0;font-size:.875em;outline:0;cursor:pointer;border:2px solid #f1f5f9;border-top:none;color:#f1f5f9;background-color:#778899}#submit:hover{color:#f1f5f9;background-color:#6495ed}.card-e input.question:valid~input[type=submit],textarea.question:valid~input[type=submit]{display:show}.card-e input.question:invalid~input[type=submit],textarea.question:invalid~input[type=submit]{display:none}"]
                }] }
    ];
    /** @nocollapse */
    CardEComponent.ctorParameters = function () { return []; };
    CardEComponent.propDecorators = {
        inputData: [{ type: Input }],
        color: [{ type: Input }],
        outputEmitter: [{ type: Output }]
    };
    return CardEComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardGComponent = /** @class */ (function () {
    function CardGComponent() {
    }
    /**
     * @return {?}
     */
    CardGComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardGComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-g',
                    template: "<p>\n  card-g works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardGComponent.ctorParameters = function () { return []; };
    return CardGComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardHComponent = /** @class */ (function () {
    function CardHComponent() {
    }
    /**
     * @return {?}
     */
    CardHComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardHComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-h',
                    template: "<p>\n  card-h works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardHComponent.ctorParameters = function () { return []; };
    return CardHComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardIComponent = /** @class */ (function () {
    function CardIComponent() {
        this.borderRadius = "0%";
        this.src = "data:image/gif;base64,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";
    }
    /**
     * @return {?}
     */
    CardIComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CardIComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-i",
                    template: "<div class=\"card-i\">\n  <div class=\"img-box\" [style.borderRadius]=\"borderRadius\">\n    <img [src]=src />\n  </div>\n</div>",
                    styles: [":host{overflow:hidden;position:relative}.card-i{overflow:hidden;position:relative}.card-i .img-box{width:100%;height:auto;margin:0 auto;overflow:hidden;background:0 0;border-radius:0}.card-i .img-box img{position:relative;height:auto;left:50%;top:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}"]
                }] }
    ];
    /** @nocollapse */
    CardIComponent.ctorParameters = function () { return []; };
    CardIComponent.propDecorators = {
        borderRadius: [{ type: Input }],
        src: [{ type: Input }]
    };
    return CardIComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardJComponent = /** @class */ (function () {
    function CardJComponent() {
    }
    /**
     * @return {?}
     */
    CardJComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardJComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-j',
                    template: "<p>\n  card-j works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardJComponent.ctorParameters = function () { return []; };
    return CardJComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardKComponent = /** @class */ (function () {
    function CardKComponent() {
    }
    /**
     * @return {?}
     */
    CardKComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardKComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-k',
                    template: "<p>\n  card-k works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardKComponent.ctorParameters = function () { return []; };
    return CardKComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardMComponent = /** @class */ (function () {
    function CardMComponent() {
    }
    /**
     * @return {?}
     */
    CardMComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardMComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-m',
                    template: "<p>\n  card-m works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardMComponent.ctorParameters = function () { return []; };
    return CardMComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardNComponent = /** @class */ (function () {
    function CardNComponent() {
    }
    /**
     * @return {?}
     */
    CardNComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardNComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-n',
                    template: "<p>\n  card-n works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardNComponent.ctorParameters = function () { return []; };
    return CardNComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardOComponent = /** @class */ (function () {
    function CardOComponent() {
    }
    /**
     * @return {?}
     */
    CardOComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardOComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-o',
                    template: "<p>\n  card-o works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardOComponent.ctorParameters = function () { return []; };
    return CardOComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardPComponent = /** @class */ (function () {
    function CardPComponent() {
    }
    /**
     * @return {?}
     */
    CardPComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CardPComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-p",
                    template: "<div class=\"card-p\" [style.height]=\"height\">\n  <div class=\"parallax-img\" style.backgroundImage=\"url({{img}})\"></div>\n  <div class=\"header-content\">\n    <ng-content select=\"h2\"></ng-content>\n  </div>\n  <div class=\"contentContainer\">\n    <ng-content select=\"div\"></ng-content>\n  </div>\n</div>\n<p>\n  asdfasdfa\n  asdfasdfaasd\n  fa\n  sdf\n  asd\n</p>\n\n<p>\n  asdfasdfa\n  asdfasdfaasd\n  fa\n  sdf\n  asd\n</p>\n\n<p>\n  asdfasdfa\n  asdfasdfaasd\n  fa\n  sdf\n  asd\n</p>",
                    styles: [".card-p{-webkit-perspective:1px;perspective:1px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;height:100vh;overflow-x:hidden;overflow-y:scroll}.card-p .parallax-img{display:flex;flex:1 0 auto;position:relative;z-index:-1;height:100vh;justify-content:center;align-items:center;-webkit-transform:translateZ(-1px) scale(2);transform:translateZ(-1px) scale(2);background-image:none;background-color:#fae4d8}.card-p .header-content{padding:8% 5%;text-align:center}.card-p .contentContainer{position:relative;display:block;background-color:#fff;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    CardPComponent.ctorParameters = function () { return []; };
    CardPComponent.propDecorators = {
        img: [{ type: Input }],
        height: [{ type: Input }]
    };
    return CardPComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardQComponent = /** @class */ (function () {
    function CardQComponent() {
    }
    /**
     * @return {?}
     */
    CardQComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardQComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-q',
                    template: "<p>\n  card-q works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardQComponent.ctorParameters = function () { return []; };
    return CardQComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardRComponent = /** @class */ (function () {
    function CardRComponent() {
    }
    /**
     * @return {?}
     */
    CardRComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardRComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-r',
                    template: "<p>\n  card-r works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardRComponent.ctorParameters = function () { return []; };
    return CardRComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardSComponent = /** @class */ (function () {
    function CardSComponent() {
        this.aheight = "200px";
        this.awidth = "320px";
    }
    /**
     * @return {?}
     */
    CardSComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CardSComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-s",
                    template: "<div class=\"card-s\">\r\n  <main>\r\n    <ng-content select=\"main\"></ng-content>\r\n  </main>\r\n\r\n  <aside [style.height]=\"aheight\" [style.width]=\"awidth\">\r\n    <ng-content select=\"aside\"></ng-content>\r\n  </aside>\r\n</div>",
                    styles: [".card-s{display:flex;justify-content:space-between;height:calc(100vh - 90px)}.card-s>aside{overflow:auto;position:-webkit-sticky;position:sticky;top:5%}.card-s>main{width:100%;display:flex;flex-direction:column}@media (max-width:767px){.card-s>aside{display:none!important}}"]
                }] }
    ];
    /** @nocollapse */
    CardSComponent.ctorParameters = function () { return []; };
    CardSComponent.propDecorators = {
        aheight: [{ type: Input }],
        awidth: [{ type: Input }]
    };
    return CardSComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardUComponent = /** @class */ (function () {
    function CardUComponent() {
    }
    /**
     * @return {?}
     */
    CardUComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardUComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-u',
                    template: "<p>\n  card-u works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardUComponent.ctorParameters = function () { return []; };
    return CardUComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardVComponent = /** @class */ (function () {
    function CardVComponent() {
    }
    /**
     * @return {?}
     */
    CardVComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardVComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-v',
                    template: "<p>\n  card-v works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardVComponent.ctorParameters = function () { return []; };
    return CardVComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardWComponent = /** @class */ (function () {
    function CardWComponent() {
    }
    /**
     * @return {?}
     */
    CardWComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardWComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-w',
                    template: "<p>\n  card-w works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardWComponent.ctorParameters = function () { return []; };
    return CardWComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardXComponent = /** @class */ (function () {
    function CardXComponent() {
    }
    /**
     * @return {?}
     */
    CardXComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardXComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-x',
                    template: "<p>\n  card-x works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardXComponent.ctorParameters = function () { return []; };
    return CardXComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardYComponent = /** @class */ (function () {
    function CardYComponent() {
    }
    /**
     * @return {?}
     */
    CardYComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardYComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dff-card-y',
                    template: "<p>\n  card-y works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CardYComponent.ctorParameters = function () { return []; };
    return CardYComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardZComponent = /** @class */ (function () {
    function CardZComponent() {
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
    CardZComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @return {?}
     */
    CardZComponent.prototype.direction = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            console.log(val);
            /** @type {?} */
            var data = val.indexOf("left") > -1 ? "left" : null;
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CardZComponent.prototype.align = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            /** @type {?} */
            var data = val.indexOf("top") > -1 ? "top" : null;
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
    };
    CardZComponent.decorators = [
        { type: Component, args: [{
                    selector: "dff-card-z",
                    template: "<div [style.margin]=\"margin\">\r\n  <div [class]=\"shadow ? 'card-z-shadow' : 'card-z'\" [style.background-color]=\"bg\" [style.maxWidth]=\"maxWidth\"\r\n    [style.height]=\"height\" [style.borderRadius]=\"radius\" [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\r\n    <span [style.padding]=\"padding\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n\r\n  </div>\r\n</div>",
                    styles: [".card-z,.card-z-shadow{display:flex;width:100%;margin-bottom:2px!important;min-height:48px;align-items:center;justify-content:center;overflow:hidden;position:relative}.card-z-shadow{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}"]
                }] }
    ];
    /** @nocollapse */
    CardZComponent.ctorParameters = function () { return []; };
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
    return CardZComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DffCardsModule = /** @class */ (function () {
    function DffCardsModule() {
    }
    DffCardsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [
                        CardAComponent,
                        CardBComponent,
                        CardCComponent,
                        CardDComponent,
                        CardEComponent,
                        CardFComponent,
                        CardGComponent,
                        CardHComponent,
                        CardIComponent,
                        CardJComponent,
                        CardKComponent,
                        CardLComponent,
                        CardMComponent,
                        CardNComponent,
                        CardOComponent,
                        CardPComponent,
                        CardQComponent,
                        CardRComponent,
                        CardSComponent,
                        CardTComponent,
                        CardUComponent,
                        CardVComponent,
                        CardWComponent,
                        CardXComponent,
                        CardYComponent,
                        CardZComponent
                    ],
                    exports: [
                        CardAComponent,
                        CardBComponent,
                        CardCComponent,
                        CardDComponent,
                        CardEComponent,
                        CardFComponent,
                        CardGComponent,
                        CardHComponent,
                        CardIComponent,
                        CardJComponent,
                        CardKComponent,
                        CardLComponent,
                        CardMComponent,
                        CardNComponent,
                        CardOComponent,
                        CardPComponent,
                        CardQComponent,
                        CardRComponent,
                        CardSComponent,
                        CardTComponent,
                        CardUComponent,
                        CardVComponent,
                        CardWComponent,
                        CardXComponent,
                        CardYComponent,
                        CardZComponent
                    ]
                },] }
    ];
    return DffCardsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DffCardsModule, CardAComponent as ɵa, CardBComponent as ɵb, CardCComponent as ɵc, CardDComponent as ɵd, CardEComponent as ɵe, CardFComponent as ɵf, CardGComponent as ɵg, CardHComponent as ɵh, CardIComponent as ɵi, CardJComponent as ɵj, CardKComponent as ɵk, CardLComponent as ɵl, CardMComponent as ɵm, CardNComponent as ɵn, CardOComponent as ɵo, CardPComponent as ɵp, CardQComponent as ɵq, CardRComponent as ɵr, CardSComponent as ɵs, CardTComponent as ɵt, CardUComponent as ɵu, CardVComponent as ɵv, CardWComponent as ɵw, CardXComponent as ɵx, CardYComponent as ɵy, CardZComponent as ɵz };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZmLWNhcmRzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWEvY2FyZC1hLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1iL2NhcmQtYi5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtYy9jYXJkLWMuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWQvY2FyZC1kLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1lL2NhcmQtZS5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtZi9jYXJkLWYuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWcvY2FyZC1nLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1oL2NhcmQtaC5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtaS9jYXJkLWkuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWovY2FyZC1qLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1rL2NhcmQtay5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtbC9jYXJkLWwuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLW0vY2FyZC1tLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1uL2NhcmQtbi5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtby9jYXJkLW8uY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLXAvY2FyZC1wLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1xL2NhcmQtcS5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtci9jYXJkLXIuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLXMvY2FyZC1zLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC10L2NhcmQtdC5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtdS9jYXJkLXUuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLXYvY2FyZC12LmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC13L2NhcmQtdy5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQteC9jYXJkLXguY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLXkvY2FyZC15LmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC16L2NhcmQtei5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jYXJkcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1hXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1hLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWEuY29tcG9uZW50LmNzc1wiXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWRcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBkaXI6IHN0cmluZyA9IFwiY2FyZC1hLWNvbHVtblwiO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGRpcmVjdGlvbih2YWw6IHN0cmluZykge1xuICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICByZXR1cm4gXCJjYXJkLWEtcm93XCI7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuIFwiY2FyZC1hLXJvdy1yZXZlcnNlXCI7XG4gICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIHJldHVybiBcImNhcmQtYS1jb2x1bW5cIjtcbiAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgcmV0dXJuIFwiY2FyZC1hLWNvbHVtbi1yZXZlcnNlXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJjYXJkLWEtY29sdW1uXCI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtYlwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1iLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtYi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBpbWc6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHZpZGVvOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IHN0cmluZyA9IFwiMTAwJVwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlyOiBzdHJpbmcgPSBcImNlbnRlciBjZW50ZXJcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIGRpcmVjdGlvbih2YWw6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHZhbC5pbmRleE9mKFwibGVmdFwiKSA+IC0xID8gXCJsZWZ0XCIgOiBudWxsO1xyXG4gICAgICBkYXRhID0gIWRhdGEgJiYgdmFsLmluZGV4T2YoXCJyaWdodFwiKSA+IC0xID8gXCJyaWdodFwiIDogZGF0YTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcclxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGlnbih2YWw6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHZhbC5pbmRleE9mKFwidG9wXCIpID4gLTEgPyBcInRvcFwiIDogbnVsbDtcclxuICAgICAgZGF0YSA9ICFkYXRhICYmIHZhbC5pbmRleE9mKFwiYm90dG9tXCIpID4gLTEgPyBcImJvdHRvbVwiIDogZGF0YTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xyXG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtY1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1jLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtYy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBidXR0b25CZzogc3RyaW5nID0gXCJ3aGl0ZVwiO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBpbWc6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBkaXI6IGFueSA9IFwibGVmdFwiO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvdXRwdXRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBvdXRwdXREYXRhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBvbkNhcmRTZWxlY3QoKSB7XHJcbiAgICB0aGlzLm91dHB1dEVtaXR0ZXIuZW1pdCh0aGlzLm91dHB1dERhdGEpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC1kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZERDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGlucHV0RGF0YTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBhbnkgPSBcIiM3Nzg4OTlcIjtcblxuICBAT3V0cHV0KClcbiAgb3V0cHV0RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghdGhpcy5pbnB1dERhdGEpIHtcbiAgICAgIHRoaXMuaW5wdXREYXRhID0ge307XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGNsaWNrT25TdWJtaXQoKSB7XG4gICAgdGhpcy5vdXRwdXRFbWl0dGVyLmVtaXQodGhpcy5pbnB1dERhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLWZcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLWYuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtZi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgaW5wdXREYXRhOiBhbnk7XG5cbiAgQE91dHB1dCgpXG4gIG91dHB1dEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXREYXRhKSB7XG4gICAgICB0aGlzLmlucHV0RGF0YSA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBjbGlja09uU3VibWl0KCkge1xuICAgIHRoaXMub3V0cHV0RW1pdHRlci5lbWl0KHRoaXMuaW5wdXREYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRHQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLWgnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1oLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1oLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtaVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtaS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1pLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZElDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBib3JkZXJSYWRpdXM6IHN0cmluZyA9IFwiMCVcIjtcbiAgQElucHV0KClcbiAgc3JjOiBzdHJpbmcgPVxuICAgIFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQY0FBQUFBQUFFQkFRSUNBZ01EQXdRRUJBVUZCUVlHQmdjSEJ3Z0lDQWtKQ1FvS0Nnc0xDd3dNREEwTkRRNE9EZzhQRHhBUUVCRVJFUklTRWhNVEV4UVVGQlVWRlJZV0ZoY1hGeGdZR0JrWkdSb2FHaHNiR3h3Y0hCMGRIUjRlSGg4Zkh5QWdJQ0VoSVNJaUlpTWpJeVFrSkNVbEpTWW1KaWNuSnlnb0tDa3BLU29xS2lzckt5d3NMQzB0TFM0dUxpOHZMekF3TURFeE1USXlNak16TXpRME5EVTFOVFkyTmpjM056ZzRPRGs1T1RvNk9qczdPenc4UEQwOVBUNCtQajgvUDBCQVFFRkJRVUpDUWtORFEwUkVSRVZGUlVaR1JrZEhSMGhJU0VsSlNVcEtTa3RMUzB4TVRFMU5UVTVPVGs5UFQxQlFVRkZSVVZKU1VsTlRVMVJVVkZWVlZWWldWbGRYVjFoWVdGbFpXVnBhV2x0YlcxeGNYRjFkWFY1ZVhsOWZYMkJnWUdGaFlXSmlZbU5qWTJSa1pHVmxaV1ptWm1kbloyaG9hR2xwYVdwcWFtdHJhMnhzYkcxdGJXNXVibTl2YjNCd2NIRnhjWEp5Y25OemMzUjBkSFYxZFhaMmRuZDNkM2g0ZUhsNWVYcDZlbnQ3ZTN4OGZIMTlmWDUrZm45L2Y0R0JnWUtDZ29PRGc0U0VoSVdGaFlhR2hvZUhoNGlJaUltSmlZcUtpb3VMaTR5TWpJMk5qWTZPam8rUGo1Q1FrSkdSa1pLU2twT1RrNVNVbEpXVmxaYVdscGVYbDVpWW1KbVptWnFhbXB1Ym01eWNuSjJkblo2ZW5wK2ZuNkNnb0tHaG9hS2lvcU9qbzZTa3BLV2xwYWFtcHFlbnA2aW9xS21wcWFxcXFxdXJxNnlzcksydHJhNnVycSt2cjdDd3NMR3hzYkt5c3JPenM3UzB0TFcxdGJhMnRyZTN0N2k0dUxtNXVicTZ1cnU3dTd5OHZMMjl2YjYrdnIrL3Y4REF3TUhCd2NMQ3dzUER3OFRFeE1YRnhjYkd4c2ZIeDhqSXlNbkp5Y3JLeXN2THk4ek16TTNOemM3T3pzL1B6OURRME5IUjBkTFMwdFBUMDlUVTFOWFYxZGJXMXRmWDE5alkyTm5aMmRyYTJ0dmIyOXpjM04zZDNkN2UzdC9mMytEZzRPSGg0ZUxpNHVQajQrVGs1T1hsNWVibTV1Zm41K2pvNk9ucDZlcnE2dXZyNit6czdPM3Q3ZTd1N3UvdjcvRHc4UEh4OGZMeTh2UHo4L1QwOVBYMTlmYjI5dmYzOS9qNCtQbjUrZnI2K3Z2NysvejgvUDM5L2Y3Ky92Ly8vLy8vL3lIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCtRUUpCUUQvQUN3QUFBQUFFQUFRQUFBSTJBRC9DZnpuTGhrN2dmdm00UnZJa0JzVUNYcnk4UUlEaE1xcWhRUHZqUkd3SUpDc0Z5VWlCTGlRakdHM0VDUk1tY3VVYkp3dktVeThNYndXd2xNL2ZmTUU4dnVHelo1QWZlclljYUhHOEorOVdsZXNET3YzS1lhbllOYUsvdlAzTEVVSlpWd0FtTkYzVCtxL2ZuVUNyT2tUb01zK3IvejRGUUl3QkpvSkVNajhTVDBuVEpVSlBQMTZIVUhTU2w1UmMxN0loY3Y1TDE0MGF2a0UybHNZckFRemh2SGVVT20xemxzbmM4YUFXSURHOEp1SkFCSmd6T0RVS1VPQUkvQVk3bnZWQkVZU1UvWUFJWmhoekt1OWRmWGtucFBsVGE3QWdBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkzZ0QvQ2Z6bjc5cWdPdUlHS2xSNHJJV0FBNjcwaWRQV3p0L0NlbElPeEVpempNNEpEams2M1JQb3p4ODRGSGJNMlVNVmlWRVBBZzllL1lPWFNGSzNMZWIrOGFNbmNCeVZEYXYrM1ZyUWdWcXJmQXZwYVpPRzd4K29BVDNlMWV1MzBOd2dQK1ArOVdyUXBPbENnZDltVEdrSDc0cUphbDhGOWp1VG9OVy9jRy9rZUxPb01GOCtMUUFJL2VzSFRobzd1aVI5ZFhzeDROSS9hRE9XYkJONFQ5Ky9lbW1nU1RJRDdoOHlEQUoyWUVvRmFoNjlUeWFrOWRzbk1OOG9HaE04ZkVHV1NBa0VIZXdXOWtQbjdGbzlYd3dBYUdBRk9LMjRNV1Ira1I0WUVBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkxUUQvQ1JUb3J4dWpNSTdvRFZ3NFVCcU9BUUE4YkdQNGI5ODJkUG5JVkdpaUJWRTRaOVlVQ3NSVlFzcTNKN0hzNVNzR2hzU0dLYzM4NWNzQ2dJZzNVZnYrOFJzM3J0Y1BBVGpDeWVQQklOWStkeFNSYlVoQUt4K1dEOTBvVm56bkNVKzVmN1pPRUpOcTd4T3NmQUwxb1ZJRVR5cTFHYkQ4MWZzRXFwdzlxZTFtSktGSExRT0VXdjRZM3RzWGJVTUtjKzJTQktqeHE1MDVzUDUyY1VNamdFZFphbEVxaU5naUt4OC9hVktvZ1pFZ3FaOUFlYzZHYlNNbEowMktKZkxNR1JPNXNKd0tBQUZFOEpJNjBGNmhKVzZTZVY0WUVBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkzQUQvQ1J6NHp4NHlVN2JXRVJTb3IxZ3dmZTNjVUNDZ2dJMCtndjVXWWZBUVRkSUhJVGN3NU5sSDhKMFBBVUN1NFNGR3I5MnladFhjK1JPb2pZTUxhL091emRUWFN3MEtJTGI0L1JOM0lzL01tZi84OWF2M1NZSUhZZi8wd1JHRWRLRzlLUURHeEdNMnpSSzhoZi80NVp1MG9Jc2pDbm5tNVFON0w5VTBYTjBJQmNEUkRxekFVR3J1L1pObVlvRWxlMVVIZ2dKeDdWKy9YRDVJckpsRlQyQTZlT3llUERBbTBCODdaOGVleWRzSERoQTJNd1pLZk1OWXFVU1JMVEhlZUZ1UmdCREpnZjNzR0FpZ0FNcTNmYmhLeFFPYjd0UWpXWFhCQmdRQUlma0VDUVVBL3dBc0FBQUFBQkFBRUFBQUNOUUEvd244eDA2Wk80SDc2T1VieUREYkVnbDg5aDB6RXdUTHE0VUQ3WFVSOE9DUXNSZ2FGZ0M0Y0l5aHRnNHJacldqVk9zYXJDSkN0REdjOXVHVXYzenNCUExEMWt3ZVFuZm9xbUJqK08vZXJpdE1mUFZibGVOVHJxRkUvVlZyWVlKWkdnQmM4T0VqS3RBZm5nQnNGZ21vb28vclAzNzhEQUVnZ3MxRkNHWm0wZjF5WlFLUFAySk5vTkR5eVpBZEdIRGcrTXB6Qm0xcjBZWE1TZ2hqaUc1TGsxem1wR2xTTjgwSmhHSXpPd0NBa0tKRnFGY2lCUEJReHpDZktpWXluTGpLUjBuQmlsMytvdHBqWjA5Z08xclorZzBNQ0FBaCtRUUpCUUQvQUN3QUFBQUFFQUFRQUFBSTNnRC9DZnpYYjFxZk8rVUdLbFFvTEVXQUE2LzRvZXZtenQvQ2VVd1M3S0J6TGRHTER6dEM0Uk5va1pzSlFPenlwZUpqQjRZQUNLLyswYU8weWRvVmRmLzJ0ZXZuTDVzUkM2YitEWXZBd1prcWZRdnBSVU5tN3g4ckF6UFUyYk9vTUIwaU9kMytHWk9RNU43Q2dlUndPR2szNzR1S2JWOEY5bXVqSUNZNU9udkFVUjJZTDk4V0FJVnlXbU8yYnU0L2Y3Njh5UmlBNlI4d0VrV3dXY1MzNzErK09Nc21rUW4zcnhjRkFUVWFaZnBVTDE4ckU4bjZJZjJIRDFRTkN5SEtSTnUweGNLTGhBcjdwWlBHN1Y2ekNnQW1mT3FYZHFBNk5GcG81Vk1ZRUFBaCtRUUpCUUQvQUN3QUFBQUFFQUFRQUFBSTF3RC9DUlRvVDVzaExvL3NEVnc0OE5rTUFRQkFjR1A0cjU4NGR2aThaTGlDNXBFNmJOdnFEU1RtSW9zMkpiank4V3VHcG9RSEs5RDg4VE1Ub0FjMlVmeis2Y3RXVFZXTUFEekkyVE9pNEpRK2VBejk4YUtBWU5ZK01SKzZVZnkzajkyak4rTCs4V3JCYkNvK1VxVkU2bFFWS2Q3VWJUTk0rWHVuU05JNHNRemY0VGhDTDVrRUI3SDhNYnkzVDFxSEZlaldHUWtBdzFZNWMvb0UvdEttUmdBUHBOU29ZQUJScFpZK2Y5eXlRQk1qWVZJL2dmT21LUk5uaTlDZUdVRGNsU3NHZDZDN0hBQUNhSGlsZCtxL2ZJbUVpUG0xajJGQUFDSDVCQWtGQVA4QUxBQUFBQUFRQUJBQUFBalhBUDhKSFBpUEhyRlFzdFlSRk1qdldiSjk2OUJFR0lBQXpyNkZ1RUNRb0haSWhCSWhIdlR3SXpndlNRQWMwdVlvdXlmUDJyWnY4Z2FDRTZIQ1dUeHNBdlBsSXFQaUNLNlI1bGJ3NmZmUG4wQi8rZGdwWXZDaDJEOTlkQjR0SEJqUENBQTA2WGcxMnhSdmFqOThneEJzNmNQZ2pUeDhVL08xUWdZckc2QUFOTlJORmFnS0RMMS8wVTRrVUNUUDZNSlRIS0w5NjhlTHlBZ3ZzK3dKVkFldjNSUUl4NDYrby9aTTI3MSs1d3hkUTJQQUJMaUZxR0JRVWFQRFRMY1ZDUXBkSE9ndlVBRUFCb1pjMjFlclZNeUY2RHdOS25WdWJrQUFJZmtFQ1FVQS93QXNBQUFBQUJBQUVBQUFDTmdBL3duOEY0OWFQSUg2NU9FYnlEQWNGZ3lGOWcwTHcwT0txb1VEOGFVWnNBRFJMaGNmSGdTNGtJemh0eEVvVUtWN3RLc2JMeWhFdGpHOFJrS1Z2M3p0QlBZVHQrMmVRSHprekhINXh2QWZQVmRXdEJqcjF5bkZJMTB5aS9ZYkZnS0ZNek1Bck56eldmUWZ2ek1CNGlnUzRBUmpVWDc4N2dBNG9pM0dobUQrdXJMNzlRbUVIWC9LcWlSNU5hOG9QRERYdUIzOFYrOGF0bndDN3lHT1ppSVhRM2h2dUJ4cnQ4MVR1bWxSSUFoam1PM0RTQmt3TnMwYUlhREhPb2I1UkFsSklTU1VQVW9LV1BDS3k5Q2ZQSFB5NHJLcnBhM2Z3SUFBSWZrRUNRVUEvd0FzQUFBQUFCQUFFQUFBQ05vQS93bjg1MjhibzBMcEJpcFV1RXpHQUFXMzlwWEx0cTdmd25wVUVNaGdNODNQaWcwMk50a1QySy9mdHhXQzBOMGJCZWdQamdFUFhQMkxGOGpRdEREdS91MTc1ODlmT0NrWFZQMzc1Y0RDTVZmN0xuSnJObkpWQVJqbzZGbFVDSzVtdVgvSktBaWh0M0JnTlJWWTN0VXpNd0phVjRIN3RDaVE5US9kSGpuaC9DM1VaODhKQUVYLytvbXoxcTdyTUdvb0NIVDZ4MnhHbFhFQzhTWFZkeWRZSWpEaC92V0tRRUNJcGxLaDZPV2JaU0lZdjN3QzcxVmFBV0VERjJlZXRtQm9JVzRodjNISXBORnJaZ0ZBaFZCVHo3WkZ3NlVXNklFQkFRQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkxUUQvQ1JUb0w5eWtOSjN3RFZ3NGtCb1BBZ0JNaUdQNGo5ODFjZm5LYUlqQ0JSSTZhdGZtRGZ4RjRnaTFLTDd3NlN2MlpjUUdLTXo4OFNzRDRNWTBWUDMrN2RPV1RWWU9BVGZDM1R1Q1FGUytkeFNQYVVoQWl4K2FETllvL3RNWHoxS2NjditJc2ZBbGRSNG5YUW9yeG1va1Q2b3lHTFArMGZNMEN0MDlxZWRVTkttbmJFSUZZQlR6N1ROV2dVVzZjejBDOEFpMjdwdytnY1dzY1FrQVJKNi9aVWdrZ0xnaVMxOUJMc1d1Uk1Ea1Q2QTdaTUM2NVRMazV3YU9kT0tFMWFQWURnZUFBQnRVZFpiNkR4OGlJbU9BN1dNWUVBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkyd0QvQ1J6NDd4NnpWcjdnRVJTNHp4Z3VmTzNnV0REUVlBKy9oYlk0WERpMnlBUVNIQm9FOVNOSVQwbUFHY3YyU0xQbkRsbzFiZkQ4Q1J4SG9rUXllTm9FNXJNVkJvV1FXZnYrcVlzQnA1OC9tZi84NlhOSDZRRUhZUC80OGVtRGRHRzlLQURFdkdOMlRaTzhoVkgxUFVMUUpSQ0ZRUFh5Z2FXbjZob3NibllDQ0lrSFZtQ2xPZmorSWZQUUFKTzlxZ01uZ2NnV0ZSYU9FR1pvMVJQWURwNjVJUkdXQ2ZTWGJsa3liZmY4cldQMFRBc0JGT0VXb3FKUjVjMFBMdFJJS0ZCMGNhQS9Qd1VBSFBnQlRWK3NVdlBBcHZ0RUNOVTV3QUlEQWdBN1wiO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC1qJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtai5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtai5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWsuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRLQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBDb250ZW50Q2hpbGRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtbFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1sLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtbC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkTENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICB0eXBlOiBzdHJpbmcgPSBcImZsZXhcIjtcclxuICBASW5wdXQoKVxyXG4gIG1pbkZpbGw6IHN0cmluZyA9IFwiMzAwcHhcIjtcclxuICBASW5wdXQoKVxyXG4gIGlucHV0RGF0YTogYW55W10gPSBbXTtcclxuICBASW5wdXQoKVxyXG4gIGdhcDogc3RyaW5nID0gXCI0XCI7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoXCJpdGVtVGVtcGxcIilcclxuICBpdGVtVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlucHV0RGF0YSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRNQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC1vJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLXBcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLXAuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtcC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRQQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgaW1nOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhlaWdodDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC1xJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtcS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtcS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRSQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1zXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLXMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1zLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRTQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGFoZWlnaHQ6IHN0cmluZyA9IFwiMjAwcHhcIjtcclxuXHJcbiAgQElucHV0KClcclxuICBhd2lkdGg6IHN0cmluZyA9IFwiMzIwcHhcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRUQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgYWxpZ247XG4gIEBJbnB1dCgpXG4gIGJnO1xuICBASW5wdXQoKVxuICBzaGFkb3cgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbWF4V2lkdGggPSBcIjEwMCVcIjtcbiAgQElucHV0KClcbiAgaGVpZ2h0ID0gXCJhdXRvXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBBbGlnbkl0ZW1zKHZhbDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh2YWwpIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICByZXR1cm4gXCJmbGV4LWVuZFwiO1xuICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XG4gICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLXUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC11LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC11LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkVUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC12JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtdi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtdycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRXQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLXgnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC14LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC14LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkWENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC15JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQteS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQteS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLXpcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtei5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLXouY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZFpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlyO1xyXG4gIEBJbnB1dCgpXHJcbiAgYmc7XHJcbiAgQElucHV0KClcclxuICBzaGFkb3cgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIG1heFdpZHRoID0gXCIxMDAlXCI7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQgPSBcImF1dG9cIjtcclxuICBASW5wdXQoKVxyXG4gIHJhZGl1cyA9IFwiMHB4XCI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW4gPSBcIjBweFwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZyA9IFwiMHB4XCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBkaXJlY3Rpb24odmFsOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgY29uc29sZS5sb2codmFsKTtcclxuICAgICAgbGV0IGRhdGEgPSB2YWwuaW5kZXhPZihcImxlZnRcIikgPiAtMSA/IFwibGVmdFwiIDogbnVsbDtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGRhdGEgPSAhZGF0YSAmJiB2YWwuaW5kZXhPZihcInJpZ2h0XCIpID4gLTEgPyBcInJpZ2h0XCIgOiBkYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcclxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGlnbih2YWw6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBsZXQgZGF0YSA9IHZhbC5pbmRleE9mKFwidG9wXCIpID4gLTEgPyBcInRvcFwiIDogbnVsbDtcclxuICAgICAgZGF0YSA9ICFkYXRhICYmIHZhbC5pbmRleE9mKFwiYm90dG9tXCIpID4gLTEgPyBcImJvdHRvbVwiIDogZGF0YTtcclxuICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xyXG4gICAgICAgIGNhc2UgXCJib3R0b21cIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtZW5kXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImNlbnRlclwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDYXJkQUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1hL2NhcmQtYS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRCQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWIvY2FyZC1iLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZENDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtYy9jYXJkLWMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkRENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1kL2NhcmQtZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRFQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWUvY2FyZC1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZEZDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtZi9jYXJkLWYuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkR0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1nL2NhcmQtZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRIQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWgvY2FyZC1oLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZElDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtaS9jYXJkLWkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkSkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1qL2NhcmQtai5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRLQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWsvY2FyZC1rLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZExDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtbC9jYXJkLWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkTUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1tL2NhcmQtbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmROQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLW4vY2FyZC1uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZE9Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtby9jYXJkLW8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkUENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1wL2NhcmQtcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRRQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLXEvY2FyZC1xLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtci9jYXJkLXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkU0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1zL2NhcmQtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRUQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLXQvY2FyZC10LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtdS9jYXJkLXUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkVkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC12L2NhcmQtdi5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRXQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLXcvY2FyZC13LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFhDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQteC9jYXJkLXguY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkWUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC15L2NhcmQteS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRaQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLXovY2FyZC16LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhcmRBQ29tcG9uZW50LFxuICAgIENhcmRCQ29tcG9uZW50LFxuICAgIENhcmRDQ29tcG9uZW50LFxuICAgIENhcmREQ29tcG9uZW50LFxuICAgIENhcmRFQ29tcG9uZW50LFxuICAgIENhcmRGQ29tcG9uZW50LFxuICAgIENhcmRHQ29tcG9uZW50LFxuICAgIENhcmRIQ29tcG9uZW50LFxuICAgIENhcmRJQ29tcG9uZW50LFxuICAgIENhcmRKQ29tcG9uZW50LFxuICAgIENhcmRLQ29tcG9uZW50LFxuICAgIENhcmRMQ29tcG9uZW50LFxuICAgIENhcmRNQ29tcG9uZW50LFxuICAgIENhcmROQ29tcG9uZW50LFxuICAgIENhcmRPQ29tcG9uZW50LFxuICAgIENhcmRQQ29tcG9uZW50LFxuICAgIENhcmRRQ29tcG9uZW50LFxuICAgIENhcmRSQ29tcG9uZW50LFxuICAgIENhcmRTQ29tcG9uZW50LFxuICAgIENhcmRUQ29tcG9uZW50LFxuICAgIENhcmRVQ29tcG9uZW50LFxuICAgIENhcmRWQ29tcG9uZW50LFxuICAgIENhcmRXQ29tcG9uZW50LFxuICAgIENhcmRYQ29tcG9uZW50LFxuICAgIENhcmRZQ29tcG9uZW50LFxuICAgIENhcmRaQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXJkQUNvbXBvbmVudCxcbiAgICBDYXJkQkNvbXBvbmVudCxcbiAgICBDYXJkQ0NvbXBvbmVudCxcbiAgICBDYXJkRENvbXBvbmVudCxcbiAgICBDYXJkRUNvbXBvbmVudCxcbiAgICBDYXJkRkNvbXBvbmVudCxcbiAgICBDYXJkR0NvbXBvbmVudCxcbiAgICBDYXJkSENvbXBvbmVudCxcbiAgICBDYXJkSUNvbXBvbmVudCxcbiAgICBDYXJkSkNvbXBvbmVudCxcbiAgICBDYXJkS0NvbXBvbmVudCxcbiAgICBDYXJkTENvbXBvbmVudCxcbiAgICBDYXJkTUNvbXBvbmVudCxcbiAgICBDYXJkTkNvbXBvbmVudCxcbiAgICBDYXJkT0NvbXBvbmVudCxcbiAgICBDYXJkUENvbXBvbmVudCxcbiAgICBDYXJkUUNvbXBvbmVudCxcbiAgICBDYXJkUkNvbXBvbmVudCxcbiAgICBDYXJkU0NvbXBvbmVudCxcbiAgICBDYXJkVENvbXBvbmVudCxcbiAgICBDYXJkVUNvbXBvbmVudCxcbiAgICBDYXJkVkNvbXBvbmVudCxcbiAgICBDYXJkV0NvbXBvbmVudCxcbiAgICBDYXJkWENvbXBvbmVudCxcbiAgICBDYXJkWUNvbXBvbmVudCxcbiAgICBDYXJkWkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERmZkNhcmRzTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQVdFO21CQURjLGVBQWU7S0FDYjs7OztJQUVoQixpQ0FBUTs7O0lBQVIsZUFBYTs7Ozs7SUFFYixrQ0FBUzs7OztJQUFULFVBQVUsR0FBVztRQUNuQixRQUFRLEdBQUc7WUFDVCxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxZQUFZLENBQUM7WUFDdEIsS0FBSyxPQUFPO2dCQUNWLE9BQU8sb0JBQW9CLENBQUM7WUFDOUIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssUUFBUTtnQkFDWCxPQUFPLHVCQUF1QixDQUFDO1lBQ2pDO2dC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QUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxjQUFjO3FCQUNmO2lCQUNGOzt5QkF4RkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==