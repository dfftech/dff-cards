import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo06",
  templateUrl: "./card-demo06.component.html",
  styleUrls: ["./card-demo06.component.css"]
})
export class CardDemo06Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  inputData = {};
  outputEmitter($event: any) {
    console.log($event);
  }

  htmlContent1 =
    ' <dff-card-e [(inputData)]="inputData" (outputEmitter)="outputEmitter($event)"></dff-card-e>';
}
