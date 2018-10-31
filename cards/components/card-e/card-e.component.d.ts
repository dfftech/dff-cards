import { OnInit, EventEmitter } from "@angular/core";
export declare class CardEComponent implements OnInit {
    inputData: any;
    color: any;
    outputEmitter: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    clickOnSubmit(): void;
}
