import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-af",
  template: `
    <div class='card-af' (click)="onCardSelect()" *ngIf="inputData">
    <div class="success">
    <p>{{inputData.title}}</p>
    <img [src]="inputData.img" imgAlt="" >
    <p>{{inputData.name}}</p>
</div>
    </div>
  `,
  styles: [
    `
      .card-af {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-between;
        padding-bottom: 50px;
      }
      .card-af > div {
        margin: 10px;
        text-align: center;
      }
      .success p {
        text-align: center;
        line-height: 24px;
      }
    `
  ]
})
export class CardAfComponent implements OnInit {
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
