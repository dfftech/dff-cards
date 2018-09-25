import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "dff-card-s",
  templateUrl: "./card-s.component.html",
  styleUrls: ["./card-s.component.css"]
})
export class CardSComponent implements OnInit {
  @Input()
  aheight: string = "200px";

  @Input()
  awidth: string = "320px";

  constructor() {}

  ngOnInit() {}
}
