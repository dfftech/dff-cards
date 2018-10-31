import { OnInit } from "@angular/core";
export declare class CardZComponent implements OnInit {
    dir: any;
    bg: any;
    shadow: boolean;
    maxWidth: string;
    height: string;
    radius: string;
    margin: string;
    padding: string;
    constructor();
    ngOnInit(): void;
    direction(val: string): "flex-start" | "flex-end" | "center";
    align(val: string): "flex-start" | "flex-end" | "center";
}
