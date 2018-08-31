import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-xe',
  template: `
    <div class='card-xe'>
      card-xe works!
    </div>
  `,
  styles: [`.card-xe{}`]
})
export class CardXeComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}