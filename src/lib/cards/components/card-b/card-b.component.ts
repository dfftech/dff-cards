import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dff-card-b",
  templateUrl: "./card-b.component.html",
  styleUrls: ["./card-b.component.css"]
})
export class CardBComponent implements OnInit {
  @Input()
  img: string;
  @Input()
  video: string;
  @Input()
  height: string = "100%";
  @Input()
  dir: string = "center center";

  constructor() {}

  ngOnInit() {}

  direction(val: string) {
    if (val) {
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
