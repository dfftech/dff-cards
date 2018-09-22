import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dff-card-z",
  templateUrl: "./card-z.component.html",
  styleUrls: ["./card-z.component.css"]
})
export class CardZComponent implements OnInit {
  @Input()
  align;
  @Input()
  bg;
  @Input()
  shadow = false;
  @Input()
  maxWidth = "100%";
  @Input()
  height = "auto";
  @Input()
  radius = "0px";

  constructor() {}

  ngOnInit() {}

  AlignItems(val: string) {
    switch (val) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "top":
        return "flex-start";
      case "bottom":
        return "flex-end";
      default:
        return "center";
    }
  }
}
