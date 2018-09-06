import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-ac",
  template: `
ac
  `,
  styles: [``]
})
export class CardAcComponent implements OnInit {
  @Input()
  dir: any = "left";
  @Input()
  inputData;
  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onCardSelect() {
    if (this.inputData && this.inputData.data) {
      this.outputEmitter.emit(this.inputData.data);
    }
  }
}
