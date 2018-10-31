import { OnInit } from "@angular/core";
export declare class CardAComponent implements OnInit {
    dir: string;
    constructor();
    ngOnInit(): void;
    direction(val: string): "card-a-column" | "card-a-row" | "card-a-row-reverse" | "card-a-column-reverse";
}
