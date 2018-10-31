import { OnInit } from "@angular/core";
export declare class CardBComponent implements OnInit {
    img: string;
    video: string;
    height: string;
    dir: string;
    constructor();
    ngOnInit(): void;
    direction(val: string): "flex-start" | "flex-end" | "center";
    align(val: string): "flex-start" | "flex-end" | "center";
}
