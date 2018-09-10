import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dff-card-t",
  templateUrl: "./card-t.component.html",
  styleUrls: ["./card-t.component.css"]
})
export class CardTComponent implements OnInit {
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
  jc = "center";
  constructor() {}

  ngOnInit() {}

  direction(val: string) {
    console.log(this.dir);
    switch (this.dir) {
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
