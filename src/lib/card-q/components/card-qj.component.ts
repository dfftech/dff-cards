import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-qj',
  template: `
    <div class='card-qj'>
      card-qj works!
    </div>
  `,
  styles: [`.card-qj{}`]
})
export class CardQjComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}