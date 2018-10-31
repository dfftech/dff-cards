import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo02",
  templateUrl: "./card-demo02.component.html",
  styleUrls: ["./card-demo02.component.css"]
})
export class CardDemo02Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  htmlContent1 = `
    <dff-card-f [(inputData)]="inputData" (outputEmitter)="outputEmitter($event)"> </dff-card-f>
  `;
}
