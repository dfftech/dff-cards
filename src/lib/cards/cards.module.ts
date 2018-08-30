import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAaComponent } from './components/card-aa.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardAaComponent],
  exports:[CardAaComponent]
})
export class CardsModule { }
