import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dff-card-z",
  templateUrl: "./card-z.component.html",
  styleUrls: ["./card-z.component.css"]
})
export class CardZComponent implements OnInit {
  @Input()
  dir;
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
  @Input()
  margin = "0px";
  @Input()
  padding = "0px";

  constructor() {}

  ngOnInit() {}

  direction(val: string) {
    if (val) {
      console.log(val);
      let data = val.indexOf("left") > -1 ? "left" : null;
      console.log(data);
      data = !data && val.indexOf("right") > -1 ? "right" : data;
      console.log(data);
      switch (data) {
        case "left":
          return "flex-start";
        case "right":
          return "flex-end";
        default:
          return "center";
      }
    }
  }

  align(val: string) {
    if (val) {
      let data = val.indexOf("top") > -1 ? "top" : null;
      data = !data && val.indexOf("bottom") > -1 ? "bottom" : data;
      switch (data) {
        case "top":
          return "flex-start";
        case "bottom":
          return "flex-end";
        default:
          return "center";
      }
    }
  }
}
