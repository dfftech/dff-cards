import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "dff-card-a",
  templateUrl: "./card-a.component.html",
  styleUrls: ["./card-a.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardAComponent implements OnInit {
  @Input()
  dir: string = "card-a-column";

  @Input()
  height: string = "200px";
  constructor() {}

  ngOnInit() {}

  direction(val: string) {
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
  }
}
