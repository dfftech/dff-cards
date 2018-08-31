import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-jq',
  template: `
    <div class='card-jq'>
      card-jq works!
    </div>
  `,
  styles: [`.card-jq{}`]
})
export class CardJqComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}