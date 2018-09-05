import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-ca",
  template: `
  <div [class]='dir == "left" ? "card-ca" : "card-ca-reverse"' (click)="onCardSelect()"  *ngIf="inputData">
  <div class="ibox">
    <img [src]="inputData.img" alt="inputData.imgAlt" [style.height]="inputData.height" >    
  </div>
  <div class="box" [style.width]="inputData.width">
      <h3>{{inputData.name}} </h3>
      <p> {{inputData.summary}}</p>
  </div>

  </div>
  `,
  styles: [
    `
      .card-ca {
        display: flex;
        position: relative;
        align-items: center;
        align-content: space-between;
        justify-content: space-around;
        flex-direction: row;
        padding: 1em;
      }
      .card-ca > * {
        text-align: center;
      }
      .card-ca-reverse {
        display: flex;
        align-items: center;
        align-content: space-between;
        justify-content: space-around;
        padding: 1em;
        flex-direction: row-reverse;
      }
      .card-ca-reverse > * {
        text-align: center;
      }
      .card-ca h3 {
        padding: 1em 0;
        font-weight: 500;
      }
      .card-ca p {
        line-height: 24px;
        padding: 0.5em;
        text-align: left;
      }
      @media screen and (max-width: 500px) {
        .card-ca {
          flex-direction: column-reverse;
        }
        .ibox img {
          height: 200px;
          width: 200px;
        }
        .card-ca-reverse {
          flex-direction: column-reverse;
        }
      }
    `
  ]
})
export class CardCaComponent implements OnInit {
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
