import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-c",
  templateUrl: "./card-c.component.html",
  styleUrls: ["./card-c.component.css"]
})
export class CardCComponent implements OnInit {
  @Input()
  buttonBg: string = "white";

  @Input()
  buttonText: string;

  @Input()
  img: string;

  @Input()
  dir: any = "top";

  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter();

  @Input()
  outputData: any;

  @Input()
  height: string = "200px";

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.outputEmitter.emit(this.outputData);
  }
}
