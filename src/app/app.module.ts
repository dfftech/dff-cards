import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { CardAModule, CardBModule, CardCModule } from "../lib/public_api";
import { CardAComponent } from "./components/card-a.component";
import { CardBComponent } from "./components/card-b.component";
import { CardCComponent } from "./components/card-c.component";
import { PrettyPrintPipe } from "./pipe/PrettyPrintPipe";

const appRoutes: Routes = [
  { path: "", component: CardAComponent },
  { path: "card-a", component: CardAComponent },
  { path: "card-b", component: CardBComponent },
  { path: "card-c", component: CardCComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardAComponent,
    CardBComponent,
    CardCComponent,
    PrettyPrintPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CardAModule,
    CardBModule,
    CardCModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
