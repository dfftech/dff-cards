import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-ad",
  template: `
  <div class='card-ad' [style.height]="inputData.height" (click)="onCardSelect()" *ngIf="inputData">
  <div class="img-box">
    <img [src]="inputData.img">
  </div>
  <div class="box">
      <h3 >{{inputData.name}}</h3>
      <div class="actions">
        <div style="float:left; display: flex; align-items: center;">
          <img class="icons" [src]="inputData.views.img"><span>{{inputData.views.count}}</span>
        </div>
        <div style="float:right; display: flex; align-items: center;">
          <img class="icons" [src]="inputData.share.img"><span>{{inputData.share.count}}</span>
        </div>
      </div>
  </div>
</div>
  `,
  styles: [
    `
      .card-ad {
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

      .card-ad .box {
        position: relative;
        bottom: 0px;
        width: 100%;
        height: 100px;
      }
      .card-ad h3 {
        margin: 0px;
        padding: 1em 0;
        font-weight: 500;
        text-align: center;
      }
      .card-ad p {
        line-height: 24px;
        padding: 0.5em;
        text-align: center;
      }

      .card-ad .box .actions {
        padding: 20px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .card-ad .box .icons {
        padding: 4px;
        height: 14px;
        width: 14px;
      }
    `
  ]
})
export class CardAdComponent implements OnInit {
  @Input()
  inputData: any = {};
  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter();

  @Input()
  dir: string = "left";
  constructor() {}
  ngOnInit() {}
  onCardSelect() {
    if (this.inputData && this.inputData.data) {
      this.outputEmitter.emit(this.inputData.data);
    }
  }
}
