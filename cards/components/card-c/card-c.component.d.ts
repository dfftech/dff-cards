import { OnInit, EventEmitter } from "@angular/core";
export declare class CardCComponent implements OnInit {
    buttonBg: string;
    buttonText: string;
    img: string;
    dir: any;
    outputEmitter: EventEmitter<any>;
    outputData: any;
    constructor();
    ngOnInit(): void;
    onCardSelect(): void;
}
