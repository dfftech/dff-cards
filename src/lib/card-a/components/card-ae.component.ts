import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-ae",
  template: `
    <div [class]='dir == "left" ? "card-ae" : "card-ae-reverse"' (click)="onCardSelect()" *ngIf="inputData">
    <div   [style.borderLeft]=" dir == 'left' ?  '2px solid ' + inputData.borderColor : '' " [style.borderRight]=" dir == 'right' ?  '2px solid ' + inputData.borderColor : '' " >
    <img [src]="inputData.img" alt="" [style.height]="inputData.height" style="padding:1em"> 
    </div>
    <div>
      <h3>{{inputData.name}}</h3>
      <hr style="margin: 8px 0px"/>
      <p *ngFor="let pitem of inputData.pList">{{pitem}}</p>
    </div>
    </div>
  `,
  styles: [
    `.card-ae{
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    flex-direction:row;

   
  }
  .card-ae > * {
    text-align: center;
  }
  .card-ae-reverse{
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    flex-direction:row-reverse;
  
  }
  .card-ae-reverse > * {
    text-align: center;
  }
  .card-ae h3 {
    margin: 0px;
    font-weight: 500;
    text-align: center;
  }
  .card-ae p {
    line-height: 20px;
    text-align: center;
  }
  }
  `
  ]
})
export class CardAeComponent implements OnInit {
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
