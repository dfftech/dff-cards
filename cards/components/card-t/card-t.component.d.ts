import { OnInit } from "@angular/core";
export declare class CardTComponent implements OnInit {
    align: any;
    bg: any;
    shadow: boolean;
    maxWidth: string;
    height: string;
    constructor();
    ngOnInit(): void;
    AlignItems(val: string): "flex-start" | "flex-end" | "center";
}
