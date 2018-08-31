import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-gp',
  template: `
    <div class='card-gp'>
      card-gp works!
    </div>
  `,
  styles: [`.card-gp{}`]
})
export class CardGpComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}