import { OnInit, TemplateRef } from "@angular/core";
export declare class CardLComponent implements OnInit {
    type: string;
    minFill: string;
    inputData: any[];
    gap: string;
    itemTmpl: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
}
