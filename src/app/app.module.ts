import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { CardAModule, CardBModule } from "../lib/public_api";
import { CardAComponent } from "./components/card-a.component";
import { CardBComponent } from "./components/card-b.component";

const appRoutes: Routes = [
  { path: "", component: CardAComponent },
  { path: "card-a", component: CardAComponent },
  { path: "card-b", component: CardBComponent }
];

@NgModule({
  declarations: [AppComponent, CardAComponent, CardBComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CardAModule,
    CardBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
