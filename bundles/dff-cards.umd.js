(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('dff-cards', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['dff-cards'] = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardAComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-a",
                        template: "<div [class]=\"direction(dir)\">\n  <ng-content select=\"dff-card-i\"></ng-content>\n  <ng-content select=\"i\"></ng-content>\n  <ng-content select=\"div\"></ng-content>\n</div>",
                        encapsulation: core.ViewEncapsulation.Emulated,
                        styles: [".card-a-column,.card-a-column-reverse,.card-a-row,.card-a-row-reverse{display:flex;overflow:hidden;margin-bottom:2px!important;min-height:100px;align-items:center;justify-content:center;height:200px;position:relative}.card-a-row{flex-direction:row}.card-a-row-reverse{flex-direction:row-reverse}.card-a-column{flex-direction:column}.card-a-column-reverse{flex-direction:column-reverse}:host ::ng-deep .card-a-row-reverse>*,:host ::ng-deep .card-a-row>*{flex:1 1}"]
                    }] }
        ];
        /** @nocollapse */
        CardAComponent.ctorParameters = function () { return []; };
        CardAComponent.propDecorators = {
            dir: [{ type: core.Input }]
        };
        return CardAComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardBComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-b",
                        template: "<div class=\"card-b\" [style.height]=\"height\">\n  <div class='landing'>\n    <img *ngIf=\"img\" class=\"bgiv\" [src]=\"img\">\n    <video *ngIf=\"video\" autoplay='true' loop='true' muted='true' poster='' [src]='video' class=\"bgiv\"></video>\n    <div class='dim'></div>\n    <div class='text' [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>",
                        styles: [":host{overflow:hidden;position:relative}.card-b{height:100vh;width:100%;margin:0;color:#fff;position:relative;overflow:hidden}.card-b .landing{height:100%;width:100%;overflow:hidden}.card-b .landing .bgiv{height:100%;width:100%;position:absolute;top:0;left:0;z-index:-2;-o-object-fit:cover;object-fit:cover}.card-b .landing .dim{height:100%;width:100%;opacity:.5;position:absolute;top:0;left:0;z-index:-1;background-color:#000}.card-b .text{height:100%;justify-content:center;align-items:center;display:flex}"]
                    }] }
        ];
        /** @nocollapse */
        CardBComponent.ctorParameters = function () { return []; };
        CardBComponent.propDecorators = {
            img: [{ type: core.Input }],
            video: [{ type: core.Input }],
            height: [{ type: core.Input }],
            dir: [{ type: core.Input }]
        };
        return CardBComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardCComponent = (function () {
        function CardCComponent() {
            this.buttonBg = "white";
            this.dir = "left";
            this.outputEmitter = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: "dff-card-c",
                        template: "<div [class]='dir == \"left\" ? \"card-c\" : \"card-c-reverse\"'>\r\n  <div class=\"ibox\">\r\n    <dff-card-i [src]=\"img\"> </dff-card-i>\r\n  </div>\r\n  <div class=\"box\">\r\n    <ng-content></ng-content>\r\n    <button *ngIf=\"buttonText\" [style.backgroundColor]=\"buttonBg\" (click)=\"onCardSelect()\"> {{buttonText}}</button>\r\n  </div>\r\n</div>",
                        styles: [":host{overflow:hidden;max-width:100%}.card-c{display:flex;position:relative;align-items:center;align-content:space-between;justify-content:space-around;flex-direction:row;padding:1em}.card-c button,.card-c-reverse button{height:35px;border-radius:20px;background-color:#1b5683;color:#fff;width:150px;font-size:16px;cursor:pointer}.card-c>*{flex:50%;text-align:center;overflow:hidden}.card-c-reverse{display:flex;align-items:center;align-content:space-between;justify-content:space-around;padding:1em;flex-direction:row-reverse}.card-c-reverse>*{flex:50%;text-align:center}s .card-c .ibox img{height:auto;width:100%;max-width:300px}@media screen and (max-width:500px){.card-c,.card-c-reverse{flex-direction:column}}"]
                    }] }
        ];
        /** @nocollapse */
        CardCComponent.ctorParameters = function () { return []; };
        CardCComponent.propDecorators = {
            buttonBg: [{ type: core.Input }],
            buttonText: [{ type: core.Input }],
            img: [{ type: core.Input }],
            dir: [{ type: core.Input }],
            outputEmitter: [{ type: core.Output }],
            outputData: [{ type: core.Input }]
        };
        return CardCComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardDComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardEComponent = (function () {
        function CardEComponent() {
            this.color = "#778899";
            this.outputEmitter = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: "dff-card-e",
                        template: "<div class=\"card-e\">\n  <header>CONTACT FORM</header>\n  <form id=\"form\" class=\"topBefore\" novalidate autocomplete='off'>\n    <input id=\"name\" type=\"text\" placeholder=\"NAME\" required class=\"question\" [(ngModel)]=\"inputData.name\" maxlength=\"50\"\n      [ngModelOptions]=\"{standalone: true}\">\n    <input id=\"email\" type=\"email\" placeholder=\"E-MAIL\" required class=\"question\" [(ngModel)]=\"inputData.email\"\n      maxlength=\"50\" [ngModelOptions]=\"{standalone: true}\">\n    <input id=\"mobile\" type=\"number\" placeholder=\"MOBILE\" required class=\"question\" [(ngModel)]=\"inputData.mobile\"\n      maxlength=\"15\" [ngModelOptions]=\"{standalone: true}\">\n    <textarea id=\"message\" type=\"text\" placeholder=\"MESSAGE\" required class=\"question\" [(ngModel)]=\"inputData.message\"\n      maxlength=\"500\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n    <input id=\"submit\" type=\"submit\" value=\"SUBMIT\" (click)=\"clickOnSubmit()\">\n  </form>\n</div>",
                        styles: [".question{border-bottom:1px solid #2f4f4f}.question:invalid{border-bottom:1px solid red}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:#bbb5af}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#aca49c;font-size:.875em}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#aca49c;font-size:.875em}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#aca49c;font-size:.875em}input::placeholder,textarea::placeholder{color:#aca49c;font-size:.875em}input:focus::-webkit-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus:-ms-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus::-ms-input-placeholder,textarea::focus:placeholder{color:#bbb5af}input:focus::placeholder,textarea::focus:placeholder{color:#bbb5af}input::-ms-placeholder,textarea::-ms-placeholder{color:#aca49c;font-size:.875em}input:focus::-ms-placeholder,textarea:focus::-ms-placeholder{color:#bbb5af}input:hover:focus::-webkit-input-placeholder,textarea:hover:focus::-webkit-input-placeholder{color:#cbc6c1}input:hover:focus:-ms-input-placeholder,textarea:hover:focus:-ms-input-placeholder{color:#cbc6c1}input:hover:focus::-ms-input-placeholder,textarea:hover:focus::-ms-input-placeholder{color:#cbc6c1}input:hover:focus::placeholder,textarea:hover:focus::placeholder{color:#cbc6c1}input:hover::-webkit-input-placeholder,textarea:hover::-webkit-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover:-ms-input-placeholder,textarea:hover:-ms-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover::-ms-input-placeholder,textarea:hover::-ms-input-placeholder{color:#2f4f4f;font-size:.875em}input:hover::placeholder,textarea:hover::placeholder{color:#2f4f4f;font-size:.875em}input:hover:focus::-ms-placeholder,textarea:hover::focus:-ms-placeholder{color:#cbc6c1}header{position:relative;margin:25px 0;font-size:1.3em;text-align:center;letter-spacing:7px}#form{position:relative;text-align:center}input{font-size:.875em;width:100%;height:50px;padding:0 0 0 15px;background:0 0;outline:0;color:#726659;border:1px solid #f1f5f9;border-bottom:none;transition:.3s ease-in-out;-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-ms-transition:all .3s ease-in-out}input:hover,textarea:hover{background:#f1f5f9;color:#2f4f4f}textarea{font-family:Lato,sans-serif;width:100%;max-width:100%;height:110px;max-height:110px;padding:15px 0 15px 15px;background:0 0;outline:0;color:#726659;font-size:.875em!important;border:1px solid #f1f5f9;transition:.3s ease-in-out;-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-ms-transition:all .3s ease-in-out}#submit{width:48%;padding:0;margin:0;font-size:.875em;outline:0;cursor:pointer;border:2px solid #f1f5f9;border-top:none;color:#f1f5f9;background-color:#778899}#submit:hover{color:#f1f5f9;background-color:#6495ed}.card-e input.question:valid~input[type=submit],textarea.question:valid~input[type=submit]{display:show}.card-e input.question:invalid~input[type=submit],textarea.question:invalid~input[type=submit]{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        CardEComponent.ctorParameters = function () { return []; };
        CardEComponent.propDecorators = {
            inputData: [{ type: core.Input }],
            color: [{ type: core.Input }],
            outputEmitter: [{ type: core.Output }]
        };
        return CardEComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardFComponent = (function () {
        function CardFComponent() {
            this.outputEmitter = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: "dff-card-f",
                        template: "<div class=\"card-f\">\r\n\r\n  <form novalidate autocomplete='off'>\r\n    <input type=\"text\" name=\"name\" class=\"question\" id=\"name\" required autocomplete=\"off\" [(ngModel)]=\"inputData.name\"\r\n      maxlength=\"50\" />\r\n    <label for=\"name\"><span>Name</span></label>\r\n    <br />\r\n    <input type=\"text\" name=\"mobile\" class=\"question\" id=\"mobile\" required autocomplete=\"off\" [(ngModel)]=\"inputData.mobile\"\r\n      maxlength=\"15\" />\r\n    <label for=\"mobile\"><span>Mobile</span></label>\r\n    <br />\r\n    <input type=\"text\" name=\"email\" class=\"question\" id=\"email\" required autocomplete=\"off\" [(ngModel)]=\"inputData.email\"\r\n      maxlength=\"50\" />\r\n    <label for=\"email\"><span>E-mail</span></label>\r\n    <br />\r\n    <textarea name=\"message\" rows=\"3\" class=\"question\" id=\"msg\" required autocomplete=\"off\" [(ngModel)]=\"inputData.message\"\r\n      maxlength=\"500\"></textarea>\r\n    <label for=\"msg\"><span>Message?</span></label>\r\n    <input type=\"submit\" value=\"Submit!\" (click)=\"clickOnSubmit()\" />\r\n  </form>\r\n\r\n</div>",
                        styles: [":host{width:100%;text-align:left;padding:16px}.card-f input,.card-f label,.card-f span,.card-f textarea{display:block;margin:10px;padding:5px;border:none;font-size:22px}.card-f input:focus,.card-f textarea:focus{outline:0}.card-f input.question,.card-f textarea.question{font-size:19px;font-weight:300;border-radius:2px;margin:0;border:none;width:100%;background:rgba(0,0,0,0);transition:padding-top .2s,margin-top .2s;overflow-x:hidden}.card-f input.question+label,.card-f textarea.question+label{display:block;position:relative;white-space:nowrap;padding:0;margin:0;width:40%;border-top:1px solid red;transition:width .4s;height:0}.card-f input.question:focus+label,.card-f textarea.question:focus+label{width:100%}.card-f input.question:focus,.card-f input.question:valid{padding-top:35px}.card-f textarea.question:focus,.card-f textarea.question:valid{margin-top:35px}.card-f input.question:focus+label>span,.card-f input.question:valid+label>span{top:-70px;font-size:22px;color:#333}.card-f textarea.question:focus+label>span,.card-f textarea.question:valid+label>span{top:-110px;font-size:22px;color:#333}.card-f input.question:valid+label,.card-f textarea.question:valid+label{border-color:green}.card-f input.question:invalid,.card-f textarea.question:invalid{box-shadow:none}.card-f input.question+label>span,.card-f textarea.question+label>span{font-weight:300;margin:0;position:absolute;color:#8f8f8f;font-size:28px;top:-39px;left:0;z-index:-1;transition:top .2s,font-size .2s,color .2s}.card-f input[type=submit]{transition:opacity .2s,background .2s;display:block;opacity:0;margin:10px 0 0;padding:10px;cursor:pointer;border:1px solid green;border-radius:25px;min-width:25%;color:green}.card-f input[type=submit]:hover{background:#eee}.card-f input[type=submit]:active{background:#999}.card-f input.question:valid~input[type=submit],textarea.question:valid~input[type=submit]{-webkit-animation:1s forwards appear;animation:1s forwards appear}.card-f input.question:invalid~input[type=submit],textarea.question:invalid~input[type=submit]{display:none}@-webkit-keyframes appear{100%{opacity:1}}@keyframes appear{100%{opacity:1}}"]
                    }] }
        ];
        /** @nocollapse */
        CardFComponent.ctorParameters = function () { return []; };
        CardFComponent.propDecorators = {
            inputData: [{ type: core.Input }],
            outputEmitter: [{ type: core.Output }]
        };
        return CardFComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardGComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardHComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardIComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-i",
                        template: "<div class=\"card-i\">\n  <div class=\"img-box\" [style.borderRadius]=\"borderRadius\">\n    <img [src]=src />\n  </div>\n</div>",
                        styles: [":host{overflow:hidden;position:relative}.card-i{overflow:hidden;position:relative}.card-i .img-box{width:100%;height:auto;margin:0 auto;overflow:hidden;background:0 0;border-radius:0}.card-i .img-box img{position:relative;height:auto;left:50%;top:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}"]
                    }] }
        ];
        /** @nocollapse */
        CardIComponent.ctorParameters = function () { return []; };
        CardIComponent.propDecorators = {
            borderRadius: [{ type: core.Input }],
            src: [{ type: core.Input }]
        };
        return CardIComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardJComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardKComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardLComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-l",
                        template: "<div class=\"card-l\">\n  <div [class]=\"type == 'flex' ? 'flex-wrapper' : 'grid-wrapper'\">\n    <div class=\"box\" *ngFor=\"let item of inputData\" [style.padding]=\"gap+'px'\">\n      <ng-content select=\"item\" *ngTemplateOutlet=\"itemTmpl, context: { $implicit: item }\"></ng-content>\n    </div>\n  </div>\n</div>",
                        styles: [".card-l{position:relative}.card-l .flex-wrapper{width:100%;display:flex;flex-wrap:wrap}.card-l .flex-wrapper .box{flex-grow:1;flex-basis:300px}.card-l .grid-wrapper{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}"]
                    }] }
        ];
        /** @nocollapse */
        CardLComponent.ctorParameters = function () { return []; };
        CardLComponent.propDecorators = {
            type: [{ type: core.Input }],
            minFill: [{ type: core.Input }],
            inputData: [{ type: core.Input }],
            gap: [{ type: core.Input }],
            itemTmpl: [{ type: core.ContentChild, args: ["itemTempl",] }]
        };
        return CardLComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardMComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardNComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardOComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardPComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-p",
                        template: "<div class=\"card-p\" [style.height]=\"height\">\n  <div class=\"parallax-img\" style.backgroundImage=\"url({{img}})\"></div>\n  <div class=\"header-content\">\n    <ng-content select=\"h2\"></ng-content>\n  </div>\n  <div class=\"contentContainer\">\n    <ng-content select=\"div\"></ng-content>\n  </div>\n</div>\n<p>\n  asdfasdfa\n  asdfasdfaasd\n  fa\n  sdf\n  asd\n</p>\n\n<p>\n  asdfasdfa\n  asdfasdfaasd\n  fa\n  sdf\n  asd\n</p>\n\n<p>\n  asdfasdfa\n  asdfasdfaasd\n  fa\n  sdf\n  asd\n</p>",
                        styles: [".card-p{-webkit-perspective:1px;perspective:1px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;height:100vh;overflow-x:hidden;overflow-y:scroll}.card-p .parallax-img{display:flex;flex:1 0 auto;position:relative;z-index:-1;height:100vh;justify-content:center;align-items:center;-webkit-transform:translateZ(-1px) scale(2);transform:translateZ(-1px) scale(2);background-image:none;background-color:#fae4d8}.card-p .header-content{padding:8% 5%;text-align:center}.card-p .contentContainer{position:relative;display:block;background-color:#fff;z-index:1}"]
                    }] }
        ];
        /** @nocollapse */
        CardPComponent.ctorParameters = function () { return []; };
        CardPComponent.propDecorators = {
            img: [{ type: core.Input }],
            height: [{ type: core.Input }]
        };
        return CardPComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardQComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardRComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardSComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-s",
                        template: "<div class=\"card-s\">\r\n  <main>\r\n    <ng-content select=\"main\"></ng-content>\r\n  </main>\r\n\r\n  <aside [style.height]=\"aheight\" [style.width]=\"awidth\">\r\n    <ng-content select=\"aside\"></ng-content>\r\n  </aside>\r\n</div>",
                        styles: [".card-s{display:flex;justify-content:space-between;height:calc(100vh - 90px)}.card-s>aside{overflow:auto;position:-webkit-sticky;position:sticky;top:5%}.card-s>main{width:100%;display:flex;flex-direction:column}@media (max-width:767px){.card-s>aside{display:none!important}}"]
                    }] }
        ];
        /** @nocollapse */
        CardSComponent.ctorParameters = function () { return []; };
        CardSComponent.propDecorators = {
            aheight: [{ type: core.Input }],
            awidth: [{ type: core.Input }]
        };
        return CardSComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardTComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-t",
                        template: "<div [class]=\"shadow ? 'card-t-shadow' : 'card-t'\" [style.background-color]=\"bg\" [style.maxWidth]=\"maxWidth\"\n  [style.height]=\"height\" [style.justifyContent]=AlignItems(align)>\n  <ng-content></ng-content>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CardTComponent.ctorParameters = function () { return []; };
        CardTComponent.propDecorators = {
            align: [{ type: core.Input }],
            bg: [{ type: core.Input }],
            shadow: [{ type: core.Input }],
            maxWidth: [{ type: core.Input }],
            height: [{ type: core.Input }]
        };
        return CardTComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardUComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardVComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardWComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardXComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardYComponent = (function () {
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
            { type: core.Component, args: [{
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
    var CardZComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: "dff-card-z",
                        template: "<div [style.margin]=\"margin\">\r\n  <div [class]=\"shadow ? 'card-z-shadow' : 'card-z'\" [style.background-color]=\"bg\" [style.maxWidth]=\"maxWidth\"\r\n    [style.height]=\"height\" [style.borderRadius]=\"radius\" [style.justifyContent]=\"direction(dir)\" [style.alignItems]=\"align(dir)\">\r\n    <span [style.padding]=\"padding\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n\r\n  </div>\r\n</div>",
                        styles: [".card-z,.card-z-shadow{display:flex;width:100%;margin-bottom:2px!important;min-height:48px;align-items:center;justify-content:center;overflow:hidden;position:relative}.card-z-shadow{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}"]
                    }] }
        ];
        /** @nocollapse */
        CardZComponent.ctorParameters = function () { return []; };
        CardZComponent.propDecorators = {
            dir: [{ type: core.Input }],
            bg: [{ type: core.Input }],
            shadow: [{ type: core.Input }],
            maxWidth: [{ type: core.Input }],
            height: [{ type: core.Input }],
            radius: [{ type: core.Input }],
            margin: [{ type: core.Input }],
            padding: [{ type: core.Input }]
        };
        return CardZComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DffCardsModule = (function () {
        function DffCardsModule() {
        }
        DffCardsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
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

    exports.DffCardsModule = DffCardsModule;
    exports.ɵa = CardAComponent;
    exports.ɵb = CardBComponent;
    exports.ɵc = CardCComponent;
    exports.ɵd = CardDComponent;
    exports.ɵe = CardEComponent;
    exports.ɵf = CardFComponent;
    exports.ɵg = CardGComponent;
    exports.ɵh = CardHComponent;
    exports.ɵi = CardIComponent;
    exports.ɵj = CardJComponent;
    exports.ɵk = CardKComponent;
    exports.ɵl = CardLComponent;
    exports.ɵm = CardMComponent;
    exports.ɵn = CardNComponent;
    exports.ɵo = CardOComponent;
    exports.ɵp = CardPComponent;
    exports.ɵq = CardQComponent;
    exports.ɵr = CardRComponent;
    exports.ɵs = CardSComponent;
    exports.ɵt = CardTComponent;
    exports.ɵu = CardUComponent;
    exports.ɵv = CardVComponent;
    exports.ɵw = CardWComponent;
    exports.ɵx = CardXComponent;
    exports.ɵy = CardYComponent;
    exports.ɵz = CardZComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZmLWNhcmRzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1hL2NhcmQtYS5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtYi9jYXJkLWIuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWMvY2FyZC1jLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1kL2NhcmQtZC5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtZS9jYXJkLWUuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWYvY2FyZC1mLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1nL2NhcmQtZy5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtaC9jYXJkLWguY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWkvY2FyZC1pLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1qL2NhcmQtai5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtay9jYXJkLWsuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLWwvY2FyZC1sLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1tL2NhcmQtbS5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtbi9jYXJkLW4uY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLW8vY2FyZC1vLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1wL2NhcmQtcC5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtcS9jYXJkLXEuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLXIvY2FyZC1yLmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC1zL2NhcmQtcy5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtdC9jYXJkLXQuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLXUvY2FyZC11LmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC12L2NhcmQtdi5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtdy9jYXJkLXcuY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY29tcG9uZW50cy9jYXJkLXgvY2FyZC14LmNvbXBvbmVudC50cyIsIm5nOi8vZGZmLWNhcmRzL2NhcmRzL2NvbXBvbmVudHMvY2FyZC15L2NhcmQteS5jb21wb25lbnQudHMiLCJuZzovL2RmZi1jYXJkcy9jYXJkcy9jb21wb25lbnRzL2NhcmQtei9jYXJkLXouY29tcG9uZW50LnRzIiwibmc6Ly9kZmYtY2FyZHMvY2FyZHMvY2FyZHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtYS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1hLmNvbXBvbmVudC5jc3NcIl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkXG59KVxuZXhwb3J0IGNsYXNzIENhcmRBQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZGlyOiBzdHJpbmcgPSBcImNhcmQtYS1jb2x1bW5cIjtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBkaXJlY3Rpb24odmFsOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcmV0dXJuIFwiY2FyZC1hLXJvd1wiO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHJldHVybiBcImNhcmQtYS1yb3ctcmV2ZXJzZVwiO1xuICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICByZXR1cm4gXCJjYXJkLWEtY29sdW1uXCI7XG4gICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIHJldHVybiBcImNhcmQtYS1jb2x1bW4tcmV2ZXJzZVwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiY2FyZC1hLWNvbHVtblwiO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLWJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtYi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZEJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB2aWRlbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0OiBzdHJpbmcgPSBcIjEwMCVcIjtcclxuICBASW5wdXQoKVxyXG4gIGRpcjogc3RyaW5nID0gXCJjZW50ZXIgY2VudGVyXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBkaXJlY3Rpb24odmFsOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgbGV0IGRhdGEgPSB2YWwuaW5kZXhPZihcImxlZnRcIikgPiAtMSA/IFwibGVmdFwiIDogbnVsbDtcclxuICAgICAgZGF0YSA9ICFkYXRhICYmIHZhbC5pbmRleE9mKFwicmlnaHRcIikgPiAtMSA/IFwicmlnaHRcIiA6IGRhdGE7XHJcbiAgICAgIHN3aXRjaCAoZGF0YSkge1xyXG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XHJcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LWVuZFwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxpZ24odmFsOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgbGV0IGRhdGEgPSB2YWwuaW5kZXhPZihcInRvcFwiKSA+IC0xID8gXCJ0b3BcIiA6IG51bGw7XHJcbiAgICAgIGRhdGEgPSAhZGF0YSAmJiB2YWwuaW5kZXhPZihcImJvdHRvbVwiKSA+IC0xID8gXCJib3R0b21cIiA6IGRhdGE7XHJcbiAgICAgIHN3aXRjaCAoZGF0YSkge1xyXG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcclxuICAgICAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LWVuZFwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLWNcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtYy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZENDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uQmc6IHN0cmluZyA9IFwid2hpdGVcIjtcclxuXHJcbiAgQElucHV0KClcclxuICBidXR0b25UZXh0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaW1nOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlyOiBhbnkgPSBcImxlZnRcIjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb3V0cHV0RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3V0cHV0RGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgb25DYXJkU2VsZWN0KCkge1xyXG4gICAgdGhpcy5vdXRwdXRFbWl0dGVyLmVtaXQodGhpcy5vdXRwdXREYXRhKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmREQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBpbnB1dERhdGE6IGFueTtcblxuICBASW5wdXQoKVxuICBjb2xvcjogYW55ID0gXCIjNzc4ODk5XCI7XG5cbiAgQE91dHB1dCgpXG4gIG91dHB1dEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXREYXRhKSB7XG4gICAgICB0aGlzLmlucHV0RGF0YSA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBjbGlja09uU3VibWl0KCkge1xuICAgIHRoaXMub3V0cHV0RW1pdHRlci5lbWl0KHRoaXMuaW5wdXREYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1mXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1mLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWYuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGlucHV0RGF0YTogYW55O1xuXG4gIEBPdXRwdXQoKVxuICBvdXRwdXRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RGF0YSkge1xuICAgICAgdGhpcy5pbnB1dERhdGEgPSB7fTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgY2xpY2tPblN1Ym1pdCgpIHtcbiAgICB0aGlzLm91dHB1dEVtaXR0ZXIuZW1pdCh0aGlzLmlucHV0RGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkR0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC1oJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLWlcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLWkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtaS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRJQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgYm9yZGVyUmFkaXVzOiBzdHJpbmcgPSBcIjAlXCI7XG4gIEBJbnB1dCgpXG4gIHNyYzogc3RyaW5nID1cbiAgICBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBQVFBUGNBQUFBQUFBRUJBUUlDQWdNREF3UUVCQVVGQlFZR0JnY0hCd2dJQ0FrSkNRb0tDZ3NMQ3d3TURBME5EUTRPRGc4UER4QVFFQkVSRVJJU0VoTVRFeFFVRkJVVkZSWVdGaGNYRnhnWUdCa1pHUm9hR2hzYkd4d2NIQjBkSFI0ZUhoOGZIeUFnSUNFaElTSWlJaU1qSXlRa0pDVWxKU1ltSmljbkp5Z29LQ2twS1NvcUtpc3JLeXdzTEMwdExTNHVMaTh2THpBd01ERXhNVEl5TWpNek16UTBORFUxTlRZMk5qYzNOemc0T0RrNU9UbzZPanM3T3p3OFBEMDlQVDQrUGo4L1AwQkFRRUZCUVVKQ1FrTkRRMFJFUkVWRlJVWkdSa2RIUjBoSVNFbEpTVXBLU2t0TFMweE1URTFOVFU1T1RrOVBUMUJRVUZGUlVWSlNVbE5UVTFSVVZGVlZWVlpXVmxkWFYxaFlXRmxaV1ZwYVdsdGJXMXhjWEYxZFhWNWVYbDlmWDJCZ1lHRmhZV0ppWW1OalkyUmtaR1ZsWldabVptZG5aMmhvYUdscGFXcHFhbXRyYTJ4c2JHMXRiVzV1Ym05dmIzQndjSEZ4Y1hKeWNuTnpjM1IwZEhWMWRYWjJkbmQzZDNoNGVIbDVlWHA2ZW50N2UzeDhmSDE5Zlg1K2ZuOS9mNEdCZ1lLQ2dvT0RnNFNFaElXRmhZYUdob2VIaDRpSWlJbUppWXFLaW91TGk0eU1qSTJOalk2T2pvK1BqNUNRa0pHUmtaS1NrcE9UazVTVWxKV1ZsWmFXbHBlWGw1aVltSm1abVpxYW1wdWJtNXljbkoyZG5aNmVucCtmbjZDZ29LR2hvYUtpb3FPam82U2twS1dscGFhbXBxZW5wNmlvcUttcHFhcXFxcXVycTZ5c3JLMnRyYTZ1cnErdnI3Q3dzTEd4c2JLeXNyT3pzN1MwdExXMXRiYTJ0cmUzdDdpNHVMbTV1YnE2dXJ1N3U3eTh2TDI5dmI2K3ZyKy92OERBd01IQndjTEN3c1BEdzhURXhNWEZ4Y2JHeHNmSHg4akl5TW5KeWNyS3lzdkx5OHpNek0zTnpjN096cy9QejlEUTBOSFIwZExTMHRQVDA5VFUxTlhWMWRiVzF0ZlgxOWpZMk5uWjJkcmEydHZiMjl6YzNOM2QzZDdlM3QvZjMrRGc0T0hoNGVMaTR1UGo0K1RrNU9YbDVlYm01dWZuNStqbzZPbnA2ZXJxNnV2cjYrenM3TzN0N2U3dTd1L3Y3L0R3OFBIeDhmTHk4dlB6OC9UMDlQWDE5ZmIyOXZmMzkvajQrUG41K2ZyNit2djcrL3o4L1AzOS9mNysvdi8vLy8vLy95SC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkyQUQvQ2Z6bkxoazdnZnZtNFJ2SWtCc1VDWHJ5OFFJRGhNcXFoUVB2alJHd0lKQ3NGeVVpQkxpUWpHRzNFQ1JNbWN1VWJKd3ZLVXk4TWJ3V3dsTS9mZk1FOHZ1R3paNUFmZXJZY2FIRzhKKzlXbGVzRE92M0tZYW5ZTmFLL3ZQM0xFVUpaVndBbU5GM1QrcS9mblVDck9rVG9NcytyL3o0RlFJd0JKb0pFTWo4U1QwblRKVUpQUDE2SFVIU1NsNVJjMTdJaGN2NUwxNDBhdmtFMmxzWXJBUXpodkhlVU9tMXpsc25jOGFBV0lERzhKdUpBQkpnek9EVUtVT0FJL0FZN252VkJFWVNVL1lBSVpoaHpLdTlkZlhrbnBQbFRhN0FnQUFoK1FRSkJRRC9BQ3dBQUFBQUVBQVFBQUFJM2dEL0Nmem43OXFnT3VJR0tsUjRySVdBQTY3MGlkUFd6dC9DZWxJT3hFaXpqTTRKRGprNjNSUG96eDg0RkhiTTJVTVZpVkVQQWc5ZS9ZT1hTRkszTGViKzhhTW5jQnlWRGF2KzNWclFnVnFyZkF2cGFaT0c3eCtvQVQzZTFldTMwTndnUCtQKzlXclFwT2xDZ2Q5bVRHa0g3NHFKYWw4RjlqdVRvTlcvY0cva2VMT29NRjgrTFFBSS9lc0hUaG83dWlSOWRYc3g0TkkvYURPV2JCTjRUOSsvZW1tZ1NUSUQ3aDh5REFKMllFb0ZhaDY5VHlhazlkc25NTjhvR2hNOGZFR1dTQWtFSGV3VzlrUG43Rm85WHd3QWFHQUZPSzI0TVdSK2tSNFlFQUFoK1FRSkJRRC9BQ3dBQUFBQUVBQVFBQUFJMVFEL0NSVG9yeHVqTUk3b0RWdzRVQnFPQVFBOGJHUDRiOTgyZFBuSVZHaWlCVkU0WjlZVUNzUlZRc3EzSjdIczVTc0doc1NHS2MzODVjc0NnSWczVWZ2KzhSczNydGNQQVRqQ3llUEJJTlkrZHhTUmJVaEFLeCtXRDkwb1Zuem5DVSs1ZjdaT0VKTnE3eE9zZkFMMW9WSUVUeXExR2JEODFmc0VxcHc5cWUxbUpLRkhMUU9FV3Y0WTN0c1hiVU1LYysyU0JLanhxNTA1c1A1MmNVTWpnRWRaYWxFcWlOZ2lLeDgvYVZLb2daRWdxWjlBZWM2R2JTTWxKMDJLSmZMTUdSTzVzSndLQUFGRThKSTYwRjZoSlc2U2VWNFlFQUFoK1FRSkJRRC9BQ3dBQUFBQUVBQVFBQUFJM0FEL0NSejR6eDR5VTdiV0VSU29yMWd3ZmUzY1VDQ2dnSTArZ3Y1V1lmQVFUZElISVRjdzVObEg4SjBQQVVDdTRTRkdyOTJ5WnRYYytST29qWU1MYS9PdXpkVFhTdzBLSUxiNC9STjNJcy9NbWYvODlhdjNTWUlIWWYvMHdSR0VkS0c5S1FER3hHTTJ6Uks4aGYvNDVadTBvSXNqQ25ubTVRTjdMOVUwWE4wSUJjRFJEcXpBVUdydS9aTm1Zb0VsZTFVSGdnSng3VisvWEQ1SXJKbEZUMkE2ZU95ZVBEQW0wQjg3WjhlZXlkc0hEaEEyTXdaS2ZNTllxVVNSTFRIZWVGdVJnQkRKZ2Yzc0dBaWdBTXEzZmJoS3hRT2I3dFFqV1hYQkJnUUFJZmtFQ1FVQS93QXNBQUFBQUJBQUVBQUFDTlFBL3duOHgwNlpPNEg3Nk9VYnlERGJFZ2w4OWgwekV3VExxNFVEN1hVUjhPQ1FzUmdhRmdDNGNJeWh0ZzRyWnJXalZPc2FyQ0pDdERHYzl1R1V2M3pzQlBMRDFrd2VRbmZvcW1CaitPL2VyaXRNZlBWYmxlTlRycUZFL1ZWcllZSlpHZ0JjOE9Fakt0QWZuZ0JzRmdtb29vL3JQMzc4REFFZ2dzMUZDR1ptMGYxeVpRS1BQMkpOb05EeXlaQWRHSERnK01wekJtMXIwWVhNU2doamlHNUxrMXptcEdsU044MEpoR0l6T3dDQWtLSkZxRmNpQlBCUXh6Q2ZLaVl5bkxqS1IwbkJpbDMrb3RwalowOWdPMXJaK2cwTUNBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkzZ0QvQ2Z6WGIxcWZPK1VHS2xRb0xFV0FBNi80b2V2bXp0L0NlVXdTN0tCekxkR0xEenRDNFJOb2tac0pRT3p5cGVKakI0WUFDSy8rMGFPMHlkb1ZkZi8ydGV2bkw1c1JDNmIrRFl2QXdaa3FmUXZwUlVObTd4OHJBelBVMmJPb01CMGlPZDMrR1pPUTVON0NnZVJ3T0drMzc0dUtiVjhGOW11aklDWTVPbnZBVVIyWUw5OFdBSVZ5V21PMmJ1NC9mNzY4eVJpQTZSOHdFa1d3V2NTMzcxKytPTXNta1FuM3J4Y0ZBVFVhWmZwVUwxOHJFOG42SWYySEQxUU5DeUhLUk51MHhjS0xoQXI3cFpQRzdWNnpDZ0FtZk9xWGRxQTZORnBvNVZNWUVBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkxd0QvQ1JUb1Q1c2hMby9zRFZ3NDhOa01BUUJBY0dQNHI1ODRkdmk4WkxpQzVwRTZiTnZxRFNUbUlvczJKYmp5OFd1R3BvUUhLOUQ4OFRNVG9BYzJVZnorNmN0V1RWV01BRHpJMlRPaTRKUStlQXo5OGFLQVlOWStNUis2VWZ5M2o5MmpOK0wrOFdyQmJDbytVcVZFNmxRVktkN1ViVE5NK1h1blNOSTRzUXpmNFRoQ0w1a0VCN0g4TWJ5M1QxcUhGZWpXR1FrQXcxWTVjL29FL3RLbVJnQVBwTlNvWUFCUnBaWStmOXl5UUJNallWSS9nZk9tS1JObmk5Q2VHVURjbFNzR2Q2QzdIQUFDYUhpbGQrcS9mSW1FaVBtMWoyRkFBQ0g1QkFrRkFQOEFMQUFBQUFBUUFCQUFBQWpYQVA4SkhQaVBIckZRc3RZUkZNanZXYko5NjlCRUdJQUF6cjZGdUVDUW9IWkloQkloSHZUd0l6Z3ZTUUFjMHVZb3V5ZlAyclp2OGdhQ0U2SENXVHhzQXZQbElxUGlDSzZSNWxidzZmZlBuMEIvK2RncFl2Q2gyRDk5ZEI0dEhCalBDQUEwNlhnMTJ4UnZhajk4Z3hCczZjUGdqVHg4VS9PMVFnWXJHNkFBTk5STkZhZ0tETDEvMFU0a1VDVFA2TUpUSEtMOTY4ZUx5QWd2cyt3SlZBZXYzUlFJeDQ2K28vWk0yNzErNXd4ZFEyUEFCTGlGcUdCUVVhUERUTGNWQ1FwZEhPZ3ZVQUVBQm9aYzIxZXJWTXlGNkR3TktuVnVia0FBSWZrRUNRVUEvd0FzQUFBQUFCQUFFQUFBQ05nQS93bjhGNDlhUElINjVPRWJ5REFjRmd5RjlnMEx3ME9LcW9VRDhhVVpzQURSTGhjZkhnUzRrSXpodHhFb1VLVjd0S3NiTHloRXRqRzhSa0tWdjN6dEJQWVR0KzJlUUh6a3pISDV4dkFmUFZkV3RCanIxeW5GSTEweWkvWWJGZ0tGTXpNQXJOenpXZlFmdnpNQjRpZ1M0QVJqVVg3ODdnQTRvaTNHaG1EK3VyTDc5UW1FSFgvS3FpUjVOYThvUEREWHVCMzhWKzhhdG53Qzd5R09aaUlYUTNodnVCeHJ0ODFUdW1sUklBaGptTzNEU0Jrd05zMGFJYURIT29iNVJBbEpJU1NVUFVvS1dQQ0t5OUNmUEhQeTRyS3JwYTNmd0lBQUlma0VDUVVBL3dBc0FBQUFBQkFBRUFBQUNOb0Evd244NTI4Ym8wTHBCaXBVdUV6R0FBVzM5cFhMdHE3ZnducFVFTWhnTTgzUGlnMDJOdGtUMksvZnR4V0MwTjBiQmVnUGpnRVBYUDJMRjhqUXRERHUvdTE3NTg5Zk9Da1hWUDM3NWNEQ01WZjdMbkpyTm5KVkFSam82RmxVQ0s1bXVYL0pLQWlodDNCZ05SVlkzdFV6TXdKYVY0SDd0Q2lROVEvZEhqbmgvQzNVWjg4SkFFWC8rb216MXE3ck1Hb29DSFQ2eDJ4R2xYRUM4U1hWZHlkWUlqRGgvdldLUUVDSXBsS2g2T1diWlNJWXYzd0M3MVZhQVdFREYyZWV0bUJvSVc0aHYzSElwTkZyWmdGQWhWQlR6N1pGdzZVVzZJRUJBUUFoK1FRSkJRRC9BQ3dBQUFBQUVBQVFBQUFJMVFEL0NSVG9MOXlrTkozd0RWdzRrQm9QQWdCTWlHUDRqOTgxY2ZuS2FJakNCUkk2YXRmbURmeEY0Z2kxS0w3dzZTdjJaY1FHS016ODhTc0Q0TVkwVlAzKzdkT1dUVllPQVRmQzNUdUNRRlMrZHhTUGFVaEFpeCthRE5Zby90TVh6MUtjY3YrSXNmQWxkUjRuWFFvcnhtb2tUNm95R0xQKzBmTTBDdDA5cWVkVU5LbW5iRUlGWUJUejdUTldnVVc2Y3owQzhBaTI3cHcrZ2NXc2NRa0FSSjYvWlVna2dMZ2lTMTlCTHNXdVJNRGtUNkE3Wk1DNjVUTGs1d2FPZE9LRTFhUFlEZ2VBQUJ0VWRaYjZEeDhpSW1PQTdXTVlFQUFoK1FRSkJRRC9BQ3dBQUFBQUVBQVFBQUFJMndEL0NSejQ3eDZ6VnI3Z0VSUzR6eGd1Zk8zZ1dERFFZQSsvaGJZNFhEaTJ5QVFTSEJvRTlTTklUMG1BR2N2MlNMUG5EbG8xYmZEOENSeEhva1F5ZU5vRTVyTVZCb1dRV2Z2K3FZc0JwNTgvbWYvODZYTkg2UUVIWVAvNDhlbURkR0c5S0FERXZHTjJUWk84aFZIMVBVTFFKUkNGUVBYeWdhV242aG9zYm5ZQ0NJa0hWbUNsT2ZqK0lmUFFBSk85cWdNbmdjZ1dGUmFPRUdabzFSUFlEcDY1SVJHV0NmU1hibGt5YmZmOHJXUDBUQXNCRk9FV29xSlI1YzBQTHRSSUtGQjBjYUEvUHdVQUhQZ0JUVitzVXZQQXB2dEVDTlU1d0FJREFnQTdcIjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtaicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWouY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWouY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRKQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLWsnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1rLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkS0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgQ29udGVudENoaWxkXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRmZi1jYXJkLWxcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLWwuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZExDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgdHlwZTogc3RyaW5nID0gXCJmbGV4XCI7XHJcbiAgQElucHV0KClcclxuICBtaW5GaWxsOiBzdHJpbmcgPSBcIjMwMHB4XCI7XHJcbiAgQElucHV0KClcclxuICBpbnB1dERhdGE6IGFueVtdID0gW107XHJcbiAgQElucHV0KClcclxuICBnYXA6IHN0cmluZyA9IFwiNFwiO1xyXG5cclxuICBAQ29udGVudENoaWxkKFwiaXRlbVRlbXBsXCIpXHJcbiAgaXRlbVRtcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5pbnB1dERhdGEpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1tLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1tLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC1uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLW8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRPQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC1wXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1wLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLXAuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkUENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGltZzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoZWlnaHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtcScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLXEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXEuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRRQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC1yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkUkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC1zLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2NhcmQtcy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkU0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBhaGVpZ2h0OiBzdHJpbmcgPSBcIjIwMHB4XCI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXdpZHRoOiBzdHJpbmcgPSBcIjMyMHB4XCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkZmYtY2FyZC10XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2FyZC10LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jYXJkLXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkVENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGFsaWduO1xuICBASW5wdXQoKVxuICBiZztcbiAgQElucHV0KClcbiAgc2hhZG93ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1heFdpZHRoID0gXCIxMDAlXCI7XG4gIEBJbnB1dCgpXG4gIGhlaWdodCA9IFwiYXV0b1wiO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgQWxpZ25JdGVtcyh2YWw6IHN0cmluZykge1xuICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuIFwiZmxleC1lbmRcIjtcbiAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgcmV0dXJuIFwiZmxleC1zdGFydFwiO1xuICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICByZXR1cm4gXCJmbGV4LWVuZFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC11JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtdS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQtdS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQtdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXYuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRWQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RmZi1jYXJkLXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC13LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC13LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkV0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZmYtY2FyZC14JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQteC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQteC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGZmLWNhcmQteScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRZQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJkZmYtY2FyZC16XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLXouY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC16LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRaQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIGRpcjtcclxuICBASW5wdXQoKVxyXG4gIGJnO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hhZG93ID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBtYXhXaWR0aCA9IFwiMTAwJVwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgQElucHV0KClcclxuICByYWRpdXMgPSBcIjBweFwiO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luID0gXCIwcHhcIjtcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmcgPSBcIjBweFwiO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgZGlyZWN0aW9uKHZhbDogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgIGxldCBkYXRhID0gdmFsLmluZGV4T2YoXCJsZWZ0XCIpID4gLTEgPyBcImxlZnRcIiA6IG51bGw7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBkYXRhID0gIWRhdGEgJiYgdmFsLmluZGV4T2YoXCJyaWdodFwiKSA+IC0xID8gXCJyaWdodFwiIDogZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHN3aXRjaCAoZGF0YSkge1xyXG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LXN0YXJ0XCI7XHJcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LWVuZFwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxpZ24odmFsOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgbGV0IGRhdGEgPSB2YWwuaW5kZXhPZihcInRvcFwiKSA+IC0xID8gXCJ0b3BcIiA6IG51bGw7XHJcbiAgICAgIGRhdGEgPSAhZGF0YSAmJiB2YWwuaW5kZXhPZihcImJvdHRvbVwiKSA+IC0xID8gXCJib3R0b21cIiA6IGRhdGE7XHJcbiAgICAgIHN3aXRjaCAoZGF0YSkge1xyXG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcclxuICAgICAgICAgIHJldHVybiBcImZsZXgtc3RhcnRcIjtcclxuICAgICAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgICByZXR1cm4gXCJmbGV4LWVuZFwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ2FyZEFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtYS9jYXJkLWEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkQkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1iL2NhcmQtYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRDQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWMvY2FyZC1jLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZERDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtZC9jYXJkLWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkRUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1lL2NhcmQtZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRGQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWYvY2FyZC1mLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZEdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtZy9jYXJkLWcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkSENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1oL2NhcmQtaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRJQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWkvY2FyZC1pLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZEpDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtai9jYXJkLWouY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkS0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1rL2NhcmQtay5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRMQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLWwvY2FyZC1sLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZE1Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtbS9jYXJkLW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkTkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1uL2NhcmQtbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRPQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLW8vY2FyZC1vLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtcC9jYXJkLXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkUUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC1xL2NhcmQtcS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRSQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLXIvY2FyZC1yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtcy9jYXJkLXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkVENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC10L2NhcmQtdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRVQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLXUvY2FyZC11LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFZDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQtdi9jYXJkLXYuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkV0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC13L2NhcmQtdy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRYQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkLXgvY2FyZC14LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFlDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NhcmQteS9jYXJkLXkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkWkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZC16L2NhcmQtei5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXJkQUNvbXBvbmVudCxcbiAgICBDYXJkQkNvbXBvbmVudCxcbiAgICBDYXJkQ0NvbXBvbmVudCxcbiAgICBDYXJkRENvbXBvbmVudCxcbiAgICBDYXJkRUNvbXBvbmVudCxcbiAgICBDYXJkRkNvbXBvbmVudCxcbiAgICBDYXJkR0NvbXBvbmVudCxcbiAgICBDYXJkSENvbXBvbmVudCxcbiAgICBDYXJkSUNvbXBvbmVudCxcbiAgICBDYXJkSkNvbXBvbmVudCxcbiAgICBDYXJkS0NvbXBvbmVudCxcbiAgICBDYXJkTENvbXBvbmVudCxcbiAgICBDYXJkTUNvbXBvbmVudCxcbiAgICBDYXJkTkNvbXBvbmVudCxcbiAgICBDYXJkT0NvbXBvbmVudCxcbiAgICBDYXJkUENvbXBvbmVudCxcbiAgICBDYXJkUUNvbXBvbmVudCxcbiAgICBDYXJkUkNvbXBvbmVudCxcbiAgICBDYXJkU0NvbXBvbmVudCxcbiAgICBDYXJkVENvbXBvbmVudCxcbiAgICBDYXJkVUNvbXBvbmVudCxcbiAgICBDYXJkVkNvbXBvbmVudCxcbiAgICBDYXJkV0NvbXBvbmVudCxcbiAgICBDYXJkWENvbXBvbmVudCxcbiAgICBDYXJkWUNvbXBvbmVudCxcbiAgICBDYXJkWkNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FyZEFDb21wb25lbnQsXG4gICAgQ2FyZEJDb21wb25lbnQsXG4gICAgQ2FyZENDb21wb25lbnQsXG4gICAgQ2FyZERDb21wb25lbnQsXG4gICAgQ2FyZEVDb21wb25lbnQsXG4gICAgQ2FyZEZDb21wb25lbnQsXG4gICAgQ2FyZEdDb21wb25lbnQsXG4gICAgQ2FyZEhDb21wb25lbnQsXG4gICAgQ2FyZElDb21wb25lbnQsXG4gICAgQ2FyZEpDb21wb25lbnQsXG4gICAgQ2FyZEtDb21wb25lbnQsXG4gICAgQ2FyZExDb21wb25lbnQsXG4gICAgQ2FyZE1Db21wb25lbnQsXG4gICAgQ2FyZE5Db21wb25lbnQsXG4gICAgQ2FyZE9Db21wb25lbnQsXG4gICAgQ2FyZFBDb21wb25lbnQsXG4gICAgQ2FyZFFDb21wb25lbnQsXG4gICAgQ2FyZFJDb21wb25lbnQsXG4gICAgQ2FyZFNDb21wb25lbnQsXG4gICAgQ2FyZFRDb21wb25lbnQsXG4gICAgQ2FyZFVDb21wb25lbnQsXG4gICAgQ2FyZFZDb21wb25lbnQsXG4gICAgQ2FyZFdDb21wb25lbnQsXG4gICAgQ2FyZFhDb21wb25lbnQsXG4gICAgQ2FyZFlDb21wb25lbnQsXG4gICAgQ2FyZFpDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEZmZDYXJkc01vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiSW5wdXQiLCJFdmVudEVtaXR0ZXIiLCJPdXRwdXQiLCJDb250ZW50Q2hpbGQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFXRTt1QkFEYyxlQUFlO1NBQ2I7Ozs7UUFFaEIsaUNBQVE7OztZQUFSLGVBQWE7Ozs7O1FBRWIsa0NBQVM7Ozs7WUFBVCxVQUFVLEdBQVc7Z0JBQ25CLFFBQVEsR0FBRztvQkFDVCxLQUFLLE1BQU07d0JBQ1QsT0FBTyxZQUFZLENB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