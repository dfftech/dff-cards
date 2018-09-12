import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dff-card-p",
  templateUrl: "./card-p.component.html",
  styleUrls: ["./card-p.component.css"]
})
export class CardPComponent implements OnInit {
  @Input()
  img: string;
  @Input()
  height: string;

  constructor() {}

  ngOnInit() {}
}
