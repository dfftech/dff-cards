import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CardAModule, CardBModule } from "../lib/public_api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardAModule, CardBModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
