import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-ac',
  template: `
    <div [class]='dir == "left" ? "card-ac" : "card-ac-reverse"' (click)="onCardSelect()"  *ngIf="inputData">
    <div class="ibox">
      <img [src]="inputData.img" alt="inputData.imgAlt" [style.height]="inputData.height" >    
    </div>
    <div class="box">
        <h3>{{inputData.name}} </h3>
        <p> {{inputData.summary}}</p>
    </div>

    </div>
  `,
  styles: [`.card-ac{
    display: flex;
    position: relative;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    flex-direction:row;
    padding: 1em;                   
  }
  .card-ac > * {
    text-align: center;
  }
  .img-box {
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    background: transparent;
  }
  .img-box img {
    position: absolute;
    height: 300px;
    left: 50%;
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
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
    .ibox img{
      height:200px;
      width:200px;
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