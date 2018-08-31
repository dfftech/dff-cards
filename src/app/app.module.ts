import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardAModule } from '../lib/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
