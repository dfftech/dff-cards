import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dff-card-i",
  templateUrl: "./card-i.component.html",
  styleUrls: ["./card-i.component.css"]
})
export class CardIComponent implements OnInit {
  @Input()
  borderRadius: string = "0%";
  @Input()
  src: string =
    "data:image/gif;base64,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";

  constructor() {}

  ngOnInit() {}
}
