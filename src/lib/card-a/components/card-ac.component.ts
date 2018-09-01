import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-ac',
  template: `
    <div [class]='dir == "left" ? "card-ac" : "card-ac-reverse"' (click)="onCardSelect()" [style.height]="inputData.height" *ngIf="inputData">
    <div>
      <img [src]="inputData.img" alt="">    
    </div>
    <div class="box">
        <h3>{{inputData.name}} </h3>
        <p> {{inputData.summary}}</p>
    </div>

    </div>
  `,
  styles: [`.card-ac{
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    flex-direction:row;
    padding: 1em;                   
  }
  .card-ac > * {
    text-align: center;
  }

  .card-ac-reverse{
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    padding: 1em;    
    flex-direction:row-reverse;
  }
  .card-ac-reverse > * {
    text-align: center;
  }  
  @media screen and (max-width: 480px) {
    .card-ac{
      flex-direction: column-reverse;
    }
    .card-ac-reverse{
      flex-direction: column-reverse;
    }
  }

  `]
})
export class CardAcComponent implements OnInit {
  @Input() dir: any = "left";
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}