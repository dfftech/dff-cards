import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-fd',
  template: `
    <div class='card-fd'>
      card-fd works!
    </div>
  `,
  styles: [`.card-fd{}`]
})
export class CardFdComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}