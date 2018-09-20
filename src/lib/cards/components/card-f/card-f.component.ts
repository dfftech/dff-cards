import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-f",
  templateUrl: "./card-f.component.html",
  styleUrls: ["./card-f.component.css"]
})
export class CardFComponent implements OnInit {
  @Input()
  inputData: any;

  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {
    if (!this.inputData) {
      this.inputData = {};
    }
  }

  ngOnInit() {}

  clickOnSubmit() {
    this.outputEmitter.emit(this.inputData);
  }
}
