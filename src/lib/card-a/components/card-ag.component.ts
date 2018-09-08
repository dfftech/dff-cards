import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-ag',
  template: `
    <div class='card-ag' (click)="onCardSelect()" *ngIf="inputData">
    <img [src]="inputData.img" alt="inputData.imgAlt" [style.height]="inputData.size" [style.width]="inputData.size">
    </div>
  `,
  styles: [`
  .card-ag{
    display: flex;
    flex-wrap: wrap;;
  justify-content: center;
  align-content: space-between;
  padding-bottom: 50px;
  padding-top:50px
  }
  .card-ag > div {
    margin: 10px;
    text-align: center;
    line-height: 60px;
  }
 .card-ag img{
   
 }
  `]
})
export class CardAgComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}