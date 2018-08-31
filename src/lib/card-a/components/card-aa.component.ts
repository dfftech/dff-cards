import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-aa",
  template: `
    <div class='card-aa' [style.height]="inputData.height" (click)="onCardSelect()">
      <div class="img-box">
        <img [src]="inputData.img">
      </div>
      <div class="box">
          <h3 style="text-align: center">{{inputData.name}}</h3>
          <p>{{inputData.summary}}
      </div>
    </div>
  `,
  styles: [
    `
      .card-aa {
        background: transparent;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        cursor: pointer;
      }
      .img-box {
        width: 100%;
        height: auto;
        margin: 0 auto;
        overflow: hidden;
        background: transparent;
      }
      .img-box img {
        position: relative;
        height: auto;
        left: 50%;
        -moz-transform: translate(-50%);
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
      }

      .card-aa .box {
        position: relative;
        bottom: 0px;
        width: 100%;
        height: 100px;
      }
      .card-aa .box p {
        font-size: 12px;
        text-align: center;
      }
      .card-aa .box h3 {
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
      }
    `
  ]
})
export class CardAaComponent implements OnInit {
  @Input()
  inputData: any = {};
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
