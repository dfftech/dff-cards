import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-ca",
  template: `
  <div [class]='dir == "left" ? "card-ca" : "card-ca-reverse"' (click)="onCardSelect()"  *ngIf="inputData">
    <div class="ibox">
      <img [src]="inputData.img" alt="inputData.imgAlt" [style.width]="inputData.width" >    
    </div>
    <div class="box" >
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
        flex: 50%;
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
        flex: 50%;
        text-align: center;
      }
      .card-ca h3,
      .card-ca-reverse h3 {
        padding: 1em;
        font-weight: 500;
      }
      .card-ca p,
      .card-ca-reverse p {
        line-height: 24px;
        padding: 0.5em;
        text-align: left;
      }
      .ibox img {
        height: auto;
        width: 100%;
        max-width: 300px;
      }
      @media screen and (max-width: 500px) {
        .card-ca {
          flex-direction: column;
        }
        .card-ca-reverse {
          flex-direction: column;
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
