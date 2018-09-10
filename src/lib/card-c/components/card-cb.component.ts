import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-cb",
  template: `
  <div [class]='dir == "left" ? "card-cb" : "card-cb-reverse"' (click)="onCardSelect()"  *ngIf="inputData">
  <div class="ibox">
    <img [src]="inputData.img" alt="inputData.imgAlt" [style.width]="inputData.width" >    
  </div>
  <div class="box" *ngIf="inputData.hList && inputData.pList">
      <h3 *ngFor="let hitem of inputData.hList">{{hitem}} </h3>
      <ul>
      <li *ngFor="let pitem of inputData.pList"> {{pitem}} </li>
      </ul>
      <button *ngIf="inputData.button" [style.background-color]="inputData.button.bg" (click)="onCardSelect()"> {{inputData.button.text}}</button>
  </div>

  </div>
  `,
  styles: [
    `
      .card-cb {
        display: flex;
        position: relative;
        align-items: center;
        align-content: space-between;
        justify-content: space-around;
        flex-direction: row;
        padding: 1em;
      }
      .card-cb button,
      .card-cb-reverse button {
        height: 35px;
        border-radius: 20px;
        background-color: #1b5683;
        color: #fff;
        width: 150px;
        font-size: 16px;
        cursor: pointer;
      }
      .card-cb > * {
        flex: 50%;
        text-align: center;
      }
      .card-cb-reverse {
        display: flex;
        align-items: center;
        align-content: space-between;
        justify-content: space-around;
        padding: 1em;
        flex-direction: row-reverse;
      }
      .card-cb-reverse > * {
        flex: 50%;
        text-align: center;
      }
      .card-cb h3,
      .card-cb-reverse h3 {
        padding: 0.5em 1em;
        font-weight: 500;
        text-align: left;
      }
      .card-cb li,
      .card-cb-reverse li {
        padding: 0.5em;
        text-align: left;
      }
      .ibox img {
        height: auto;
        width: 100%;
        max-width: 300px;
      }
      @media screen and (max-width: 500px) {
        .card-cb {
          flex-direction: column;
        }
        .card-cb-reverse {
          flex-direction: column;
        }
      }
    `
  ]
})
export class CardCbComponent implements OnInit {
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
