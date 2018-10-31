/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
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
export { CardIComponent };
if (false) {
    /** @type {?} */
    CardIComponent.prototype.borderRadius;
    /** @type {?} */
    CardIComponent.prototype.src;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1pLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RmZi1jYXJkcy8iLCJzb3VyY2VzIjpbImNhcmRzL2NvbXBvbmVudHMvY2FyZC1pL2NhcmQtaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWN2RDs0QkFMdUIsSUFBSTttQkFHekIsZ3lKQUFneUo7S0FFbHhKOzs7O0lBRWhCLGlDQUFROzs7SUFBUixlQUFhOztnQkFkZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLDRJQUFzQzs7aUJBRXZDOzs7OzsrQkFFRSxLQUFLO3NCQUVMLEtBQUs7O3lCQVZSOztTQU9hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZGZmLWNhcmQtaVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtaS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2FyZC1pLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZElDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBib3JkZXJSYWRpdXM6IHN0cmluZyA9IFwiMCVcIjtcbiAgQElucHV0KClcbiAgc3JjOiBzdHJpbmcgPVxuICAgIFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQY0FBQUFBQUFFQkFRSUNBZ01EQXdRRUJBVUZCUVlHQmdjSEJ3Z0lDQWtKQ1FvS0Nnc0xDd3dNREEwTkRRNE9EZzhQRHhBUUVCRVJFUklTRWhNVEV4UVVGQlVWRlJZV0ZoY1hGeGdZR0JrWkdSb2FHaHNiR3h3Y0hCMGRIUjRlSGg4Zkh5QWdJQ0VoSVNJaUlpTWpJeVFrSkNVbEpTWW1KaWNuSnlnb0tDa3BLU29xS2lzckt5d3NMQzB0TFM0dUxpOHZMekF3TURFeE1USXlNak16TXpRME5EVTFOVFkyTmpjM056ZzRPRGs1T1RvNk9qczdPenc4UEQwOVBUNCtQajgvUDBCQVFFRkJRVUpDUWtORFEwUkVSRVZGUlVaR1JrZEhSMGhJU0VsSlNVcEtTa3RMUzB4TVRFMU5UVTVPVGs5UFQxQlFVRkZSVVZKU1VsTlRVMVJVVkZWVlZWWldWbGRYVjFoWVdGbFpXVnBhV2x0YlcxeGNYRjFkWFY1ZVhsOWZYMkJnWUdGaFlXSmlZbU5qWTJSa1pHVmxaV1ptWm1kbloyaG9hR2xwYVdwcWFtdHJhMnhzYkcxdGJXNXVibTl2YjNCd2NIRnhjWEp5Y25OemMzUjBkSFYxZFhaMmRuZDNkM2g0ZUhsNWVYcDZlbnQ3ZTN4OGZIMTlmWDUrZm45L2Y0R0JnWUtDZ29PRGc0U0VoSVdGaFlhR2hvZUhoNGlJaUltSmlZcUtpb3VMaTR5TWpJMk5qWTZPam8rUGo1Q1FrSkdSa1pLU2twT1RrNVNVbEpXVmxaYVdscGVYbDVpWW1KbVptWnFhbXB1Ym01eWNuSjJkblo2ZW5wK2ZuNkNnb0tHaG9hS2lvcU9qbzZTa3BLV2xwYWFtcHFlbnA2aW9xS21wcWFxcXFxdXJxNnlzcksydHJhNnVycSt2cjdDd3NMR3hzYkt5c3JPenM3UzB0TFcxdGJhMnRyZTN0N2k0dUxtNXVicTZ1cnU3dTd5OHZMMjl2YjYrdnIrL3Y4REF3TUhCd2NMQ3dzUER3OFRFeE1YRnhjYkd4c2ZIeDhqSXlNbkp5Y3JLeXN2THk4ek16TTNOemM3T3pzL1B6OURRME5IUjBkTFMwdFBUMDlUVTFOWFYxZGJXMXRmWDE5alkyTm5aMmRyYTJ0dmIyOXpjM04zZDNkN2UzdC9mMytEZzRPSGg0ZUxpNHVQajQrVGs1T1hsNWVibTV1Zm41K2pvNk9ucDZlcnE2dXZyNit6czdPM3Q3ZTd1N3UvdjcvRHc4UEh4OGZMeTh2UHo4L1QwOVBYMTlmYjI5dmYzOS9qNCtQbjUrZnI2K3Z2NysvejgvUDM5L2Y3Ky92Ly8vLy8vL3lIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCtRUUpCUUQvQUN3QUFBQUFFQUFRQUFBSTJBRC9DZnpuTGhrN2dmdm00UnZJa0JzVUNYcnk4UUlEaE1xcWhRUHZqUkd3SUpDc0Z5VWlCTGlRakdHM0VDUk1tY3VVYkp3dktVeThNYndXd2xNL2ZmTUU4dnVHelo1QWZlclljYUhHOEorOVdsZXNET3YzS1lhbllOYUsvdlAzTEVVSlpWd0FtTkYzVCtxL2ZuVUNyT2tUb01zK3IvejRGUUl3QkpvSkVNajhTVDBuVEpVSlBQMTZIVUhTU2w1UmMxN0loY3Y1TDE0MGF2a0UybHNZckFRemh2SGVVT20xemxzbmM4YUFXSURHOEp1SkFCSmd6T0RVS1VPQUkvQVk3bnZWQkVZU1UvWUFJWmhoekt1OWRmWGtucFBsVGE3QWdBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkzZ0QvQ2Z6bjc5cWdPdUlHS2xSNHJJV0FBNjcwaWRQV3p0L0NlbElPeEVpempNNEpEams2M1JQb3p4ODRGSGJNMlVNVmlWRVBBZzllL1lPWFNGSzNMZWIrOGFNbmNCeVZEYXYrM1ZyUWdWcXJmQXZwYVpPRzd4K29BVDNlMWV1MzBOd2dQK1ArOVdyUXBPbENnZDltVEdrSDc0cUphbDhGOWp1VG9OVy9jRy9rZUxPb01GOCtMUUFJL2VzSFRobzd1aVI5ZFhzeDROSS9hRE9XYkJONFQ5Ky9lbW1nU1RJRDdoOHlEQUoyWUVvRmFoNjlUeWFrOWRzbk1OOG9HaE04ZkVHV1NBa0VIZXdXOWtQbjdGbzlYd3dBYUdBRk9LMjRNV1Ira1I0WUVBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkxUUQvQ1JUb3J4dWpNSTdvRFZ3NFVCcU9BUUE4YkdQNGI5ODJkUG5JVkdpaUJWRTRaOVlVQ3NSVlFzcTNKN0hzNVNzR2hzU0dLYzM4NWNzQ2dJZzNVZnYrOFJzM3J0Y1BBVGpDeWVQQklOWStkeFNSYlVoQUt4K1dEOTBvVm56bkNVKzVmN1pPRUpOcTd4T3NmQUwxb1ZJRVR5cTFHYkQ4MWZzRXFwdzlxZTFtSktGSExRT0VXdjRZM3RzWGJVTUtjKzJTQktqeHE1MDVzUDUyY1VNamdFZFphbEVxaU5naUt4OC9hVktvZ1pFZ3FaOUFlYzZHYlNNbEowMktKZkxNR1JPNXNKd0tBQUZFOEpJNjBGNmhKVzZTZVY0WUVBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkzQUQvQ1J6NHp4NHlVN2JXRVJTb3IxZ3dmZTNjVUNDZ2dJMCtndjVXWWZBUVRkSUhJVGN3NU5sSDhKMFBBVUN1NFNGR3I5MnladFhjK1JPb2pZTUxhL091emRUWFN3MEtJTGI0L1JOM0lzL01tZi84OWF2M1NZSUhZZi8wd1JHRWRLRzlLUURHeEdNMnpSSzhoZi80NVp1MG9Jc2pDbm5tNVFON0w5VTBYTjBJQmNEUkRxekFVR3J1L1pObVlvRWxlMVVIZ2dKeDdWKy9YRDVJckpsRlQyQTZlT3llUERBbTBCODdaOGVleWRzSERoQTJNd1pLZk1OWXFVU1JMVEhlZUZ1UmdCREpnZjNzR0FpZ0FNcTNmYmhLeFFPYjd0UWpXWFhCQmdRQUlma0VDUVVBL3dBc0FBQUFBQkFBRUFBQUNOUUEvd244eDA2Wk80SDc2T1VieUREYkVnbDg5aDB6RXdUTHE0VUQ3WFVSOE9DUXNSZ2FGZ0M0Y0l5aHRnNHJacldqVk9zYXJDSkN0REdjOXVHVXYzenNCUExEMWt3ZVFuZm9xbUJqK08vZXJpdE1mUFZibGVOVHJxRkUvVlZyWVlKWkdnQmM4T0VqS3RBZm5nQnNGZ21vb28vclAzNzhEQUVnZ3MxRkNHWm0wZjF5WlFLUFAySk5vTkR5eVpBZEdIRGcrTXB6Qm0xcjBZWE1TZ2hqaUc1TGsxem1wR2xTTjgwSmhHSXpPd0NBa0tKRnFGY2lCUEJReHpDZktpWXluTGpLUjBuQmlsMytvdHBqWjA5Z08xclorZzBNQ0FBaCtRUUpCUUQvQUN3QUFBQUFFQUFRQUFBSTNnRC9DZnpYYjFxZk8rVUdLbFFvTEVXQUE2LzRvZXZtenQvQ2VVd1M3S0J6TGRHTER6dEM0Uk5va1pzSlFPenlwZUpqQjRZQUNLLyswYU8weWRvVmRmLzJ0ZXZuTDVzUkM2YitEWXZBd1prcWZRdnBSVU5tN3g4ckF6UFUyYk9vTUIwaU9kMytHWk9RNU43Q2dlUndPR2szNzR1S2JWOEY5bXVqSUNZNU9udkFVUjJZTDk4V0FJVnlXbU8yYnU0L2Y3Njh5UmlBNlI4d0VrV3dXY1MzNzErK09Nc21rUW4zcnhjRkFUVWFaZnBVTDE4ckU4bjZJZjJIRDFRTkN5SEtSTnUweGNLTGhBcjdwWlBHN1Y2ekNnQW1mT3FYZHFBNk5GcG81Vk1ZRUFBaCtRUUpCUUQvQUN3QUFBQUFFQUFRQUFBSTF3RC9DUlRvVDVzaExvL3NEVnc0OE5rTUFRQkFjR1A0cjU4NGR2aThaTGlDNXBFNmJOdnFEU1RtSW9zMkpiank4V3VHcG9RSEs5RDg4VE1Ub0FjMlVmeis2Y3RXVFZXTUFEekkyVE9pNEpRK2VBejk4YUtBWU5ZK01SKzZVZnkzajkyak4rTCs4V3JCYkNvK1VxVkU2bFFWS2Q3VWJUTk0rWHVuU05JNHNRemY0VGhDTDVrRUI3SDhNYnkzVDFxSEZlaldHUWtBdzFZNWMvb0UvdEttUmdBUHBOU29ZQUJScFpZK2Y5eXlRQk1qWVZJL2dmT21LUk5uaTlDZUdVRGNsU3NHZDZDN0hBQUNhSGlsZCtxL2ZJbUVpUG0xajJGQUFDSDVCQWtGQVA4QUxBQUFBQUFRQUJBQUFBalhBUDhKSFBpUEhyRlFzdFlSRk1qdldiSjk2OUJFR0lBQXpyNkZ1RUNRb0haSWhCSWhIdlR3SXpndlNRQWMwdVlvdXlmUDJyWnY4Z2FDRTZIQ1dUeHNBdlBsSXFQaUNLNlI1bGJ3NmZmUG4wQi8rZGdwWXZDaDJEOTlkQjR0SEJqUENBQTA2WGcxMnhSdmFqOThneEJzNmNQZ2pUeDhVL08xUWdZckc2QUFOTlJORmFnS0RMMS8wVTRrVUNUUDZNSlRIS0w5NjhlTHlBZ3ZzK3dKVkFldjNSUUl4NDYrby9aTTI3MSs1d3hkUTJQQUJMaUZxR0JRVWFQRFRMY1ZDUXBkSE9ndlVBRUFCb1pjMjFlclZNeUY2RHdOS25WdWJrQUFJZmtFQ1FVQS93QXNBQUFBQUJBQUVBQUFDTmdBL3duOEY0OWFQSUg2NU9FYnlEQWNGZ3lGOWcwTHcwT0txb1VEOGFVWnNBRFJMaGNmSGdTNGtJemh0eEVvVUtWN3RLc2JMeWhFdGpHOFJrS1Z2M3p0QlBZVHQrMmVRSHprekhINXh2QWZQVmRXdEJqcjF5bkZJMTB5aS9ZYkZnS0ZNek1Bck56eldmUWZ2ek1CNGlnUzRBUmpVWDc4N2dBNG9pM0dobUQrdXJMNzlRbUVIWC9LcWlSNU5hOG9QRERYdUIzOFYrOGF0bndDN3lHT1ppSVhRM2h2dUJ4cnQ4MVR1bWxSSUFoam1PM0RTQmt3TnMwYUlhREhPb2I1UkFsSklTU1VQVW9LV1BDS3k5Q2ZQSFB5NHJLcnBhM2Z3SUFBSWZrRUNRVUEvd0FzQUFBQUFCQUFFQUFBQ05vQS93bjg1MjhibzBMcEJpcFV1RXpHQUFXMzlwWEx0cTdmd25wVUVNaGdNODNQaWcwMk50a1QySy9mdHhXQzBOMGJCZWdQamdFUFhQMkxGOGpRdEREdS91MTc1ODlmT0NrWFZQMzc1Y0RDTVZmN0xuSnJObkpWQVJqbzZGbFVDSzVtdVgvSktBaWh0M0JnTlJWWTN0VXpNd0phVjRIN3RDaVE5US9kSGpuaC9DM1VaODhKQUVYLytvbXoxcTdyTUdvb0NIVDZ4MnhHbFhFQzhTWFZkeWRZSWpEaC92V0tRRUNJcGxLaDZPV2JaU0lZdjN3QzcxVmFBV0VERjJlZXRtQm9JVzRodjNISXBORnJaZ0ZBaFZCVHo3WkZ3NlVXNklFQkFRQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkxUUQvQ1JUb0w5eWtOSjN3RFZ3NGtCb1BBZ0JNaUdQNGo5ODFjZm5LYUlqQ0JSSTZhdGZtRGZ4RjRnaTFLTDd3NlN2MlpjUUdLTXo4OFNzRDRNWTBWUDMrN2RPV1RWWU9BVGZDM1R1Q1FGUytkeFNQYVVoQWl4K2FETllvL3RNWHoxS2NjditJc2ZBbGRSNG5YUW9yeG1va1Q2b3lHTFArMGZNMEN0MDlxZWRVTkttbmJFSUZZQlR6N1ROV2dVVzZjejBDOEFpMjdwdytnY1dzY1FrQVJKNi9aVWdrZ0xnaVMxOUJMc1d1Uk1Ea1Q2QTdaTUM2NVRMazV3YU9kT0tFMWFQWURnZUFBQnRVZFpiNkR4OGlJbU9BN1dNWUVBQWgrUVFKQlFEL0FDd0FBQUFBRUFBUUFBQUkyd0QvQ1J6NDd4NnpWcjdnRVJTNHp4Z3VmTzNnV0REUVlBKy9oYlk0WERpMnlBUVNIQm9FOVNOSVQwbUFHY3YyU0xQbkRsbzFiZkQ4Q1J4SG9rUXllTm9FNXJNVkJvV1FXZnYrcVlzQnA1OC9tZi84NlhOSDZRRUhZUC80OGVtRGRHRzlLQURFdkdOMlRaTzhoVkgxUFVMUUpSQ0ZRUFh5Z2FXbjZob3NibllDQ0lrSFZtQ2xPZmorSWZQUUFKTzlxZ01uZ2NnV0ZSYU9FR1pvMVJQWURwNjVJUkdXQ2ZTWGJsa3liZmY4cldQMFRBc0JGT0VXb3FKUjVjMFBMdFJJS0ZCMGNhQS9Qd1VBSFBnQlRWK3NVdlBBcHZ0RUNOVTV3QUlEQWdBN1wiO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=