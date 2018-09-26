import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-e",
  templateUrl: "./card-e.component.html",
  styleUrls: ["./card-e.component.css"]
})
export class CardEComponent implements OnInit {
  @Input()
  inputData: any;

  @Input()
  color: any = "#778899";

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
