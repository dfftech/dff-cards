import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-m",
  templateUrl: "./card-m.component.html",
  styleUrls: ["./card-m.component.css"]
})
export class CardMComponent implements OnInit {
  toggle: boolean;
  constructor() {}

  ngOnInit() {}

  changeToggle() {
    this.toggle = !this.toggle;
  }
}
