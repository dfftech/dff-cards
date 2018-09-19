import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrismModule } from "@ngx-prism/core";
import { AppComponent } from "./app.component";
import {
  DffCardsModule,
  CardAModule,
  CardBModule,
  CardCModule
} from "../lib/public_api";
// import { CardAComponent } from "./components/card-a.component";
// import { CardBComponent } from "./components/card-b.component";
import { CardCComponent } from "./components/card-c.component";
import { PrettyPrintPipe } from "./pipe/PrettyPrintPipe";
import { CardsComponent } from "./components/cards.component";
import { CardDemo01Component } from "./components/card-demo01/card-demo01.component";
import { CardDemo02Component } from "./components/card-demo02/card-demo02.component";
import { CardDemo03Component } from "./components/card-demo03/card-demo03.component";
import { CardDemo04Component } from "./components/card-demo04/card-demo04.component";
import { CardDemo05Component } from "./components/card-demo05/card-demo05.component";
import { CardDemo06Component } from "./components/card-demo06/card-demo06.component";
import { CardDemo07Component } from "./components/card-demo07/card-demo07.component";
import { CardDemo08Component } from "./components/card-demo08/card-demo08.component";
import { CardDemo09Component } from "./components/card-demo09/card-demo09.component";
import { CardDemo10Component } from "./components/card-demo10/card-demo10.component";
import { CardDemo11Component } from "./components/card-demo11/card-demo11.component";
import { CardDemo12Component } from "./components/card-demo12/card-demo12.component";
import { CardDemo13Component } from "./components/card-demo13/card-demo13.component";
import { CardDemo14Component } from "./components/card-demo14/card-demo14.component";
import { CardDemo15Component } from "./components/card-demo15/card-demo15.component";
import { CardDemo16Component } from "./components/card-demo16/card-demo16.component";
import { CardDemo17Component } from "./components/card-demo17/card-demo17.component";
import { CardDemo18Component } from "./components/card-demo18/card-demo18.component";
import { CardDemo19Component } from "./components/card-demo19/card-demo19.component";
import { CardDemo20Component } from "./components/card-demo20/card-demo20.component";
import { CardDemo21Component } from "./components/card-demo21/card-demo21.component";
import { CardDemo22Component } from "./components/card-demo22/card-demo22.component";
import { CardDemo23Component } from "./components/card-demo23/card-demo23.component";
import { CardDemo24Component } from "./components/card-demo24/card-demo24.component";
import { CardDemo25Component } from "./components/card-demo25/card-demo25.component";
import { CardDemo26Component } from "./components/card-demo26/card-demo26.component";
import { CardDemo27Component } from "./components/card-demo27/card-demo27.component";
import { CardDemo28Component } from "./components/card-demo28/card-demo28.component";
import { CardDemo29Component } from "./components/card-demo29/card-demo29.component";
import { CardDemo30Component } from "./components/card-demo30/card-demo30.component";
import { CardDemo31Component } from "./components/card-demo31/card-demo31.component";
import { CardDemo32Component } from "./components/card-demo32/card-demo32.component";
import { CardDemo33Component } from "./components/card-demo33/card-demo33.component";
import { CardDemo34Component } from "./components/card-demo34/card-demo34.component";
import { CardDemo35Component } from "./components/card-demo35/card-demo35.component";
import { CardDemo36Component } from "./components/card-demo36/card-demo36.component";
import { CardDemo37Component } from "./components/card-demo37/card-demo37.component";
import { CardDemo38Component } from "./components/card-demo38/card-demo38.component";
import { CardDemo39Component } from "./components/card-demo39/card-demo39.component";
import { CardDemo40Component } from "./components/card-demo40/card-demo40.component";
import { CardDemo41Component } from "./components/card-demo41/card-demo41.component";
import { CardDemo42Component } from "./components/card-demo42/card-demo42.component";
import { CardDemo43Component } from "./components/card-demo43/card-demo43.component";
import { CardDemo44Component } from "./components/card-demo44/card-demo44.component";
import { CardDemo45Component } from "./components/card-demo45/card-demo45.component";
import { CardDemo46Component } from "./components/card-demo46/card-demo46.component";
import { CardDemo47Component } from "./components/card-demo47/card-demo47.component";
import { CardDemo48Component } from "./components/card-demo48/card-demo48.component";

const appRoutes: Routes = [
  { path: "", component: CardsComponent },
  // { path: "card-a", component: CardAComponent },
  // { path: "card-b", component: CardBComponent },
  // { path: "card-c", component: CardCComponent }

  { path: "card-demo01", component: CardDemo01Component },
  { path: "card-demo02", component: CardDemo02Component },
  { path: "card-demo03", component: CardDemo03Component },
  { path: "card-demo04", component: CardDemo04Component },
  { path: "card-demo05", component: CardDemo05Component },
  { path: "card-demo06", component: CardDemo06Component },
  { path: "card-demo07", component: CardDemo07Component },
  { path: "card-demo08", component: CardDemo08Component },
  { path: "card-demo09", component: CardDemo09Component },
  { path: "card-demo10", component: CardDemo10Component },
  { path: "card-demo11", component: CardDemo11Component },
  { path: "card-demo12", component: CardDemo12Component },
  { path: "card-demo13", component: CardDemo13Component },
  { path: "card-demo14", component: CardDemo14Component },
  { path: "card-demo15", component: CardDemo15Component },
  { path: "card-demo16", component: CardDemo16Component },
  { path: "card-demo17", component: CardDemo17Component },
  { path: "card-demo18", component: CardDemo18Component },
  { path: "card-demo19", component: CardDemo19Component },
  { path: "card-demo20", component: CardDemo20Component },
  { path: "card-demo21", component: CardDemo21Component },
  { path: "card-demo22", component: CardDemo22Component },
  { path: "card-demo23", component: CardDemo23Component },
  { path: "card-demo24", component: CardDemo24Component },
  { path: "card-demo25", component: CardDemo25Component },
  { path: "card-demo26", component: CardDemo26Component },
  { path: "card-demo27", component: CardDemo27Component },
  { path: "card-demo28", component: CardDemo28Component },
  { path: "card-demo29", component: CardDemo29Component },
  { path: "card-demo30", component: CardDemo30Component },
  { path: "card-demo31", component: CardDemo31Component },
  { path: "card-demo32", component: CardDemo32Component },
  { path: "card-demo33", component: CardDemo33Component },
  { path: "card-demo34", component: CardDemo34Component },
  { path: "card-demo35", component: CardDemo35Component },
  { path: "card-demo36", component: CardDemo36Component },
  { path: "card-demo37", component: CardDemo37Component },
  { path: "card-demo38", component: CardDemo38Component },
  { path: "card-demo39", component: CardDemo39Component },
  { path: "card-demo40", component: CardDemo40Component },
  { path: "card-demo41", component: CardDemo41Component },
  { path: "card-demo42", component: CardDemo42Component },
  { path: "card-demo43", component: CardDemo43Component },
  { path: "card-demo44", component: CardDemo44Component },
  { path: "card-demo45", component: CardDemo45Component },
  { path: "card-demo46", component: CardDemo46Component },
  { path: "card-demo47", component: CardDemo47Component },
  { path: "card-demo48", component: CardDemo48Component }
];

@NgModule({
  declarations: [
    AppComponent,
    // CardAComponent,
    // CardBComponent,
    // CardCComponent,
    PrettyPrintPipe,
    CardsComponent,
    CardDemo01Component,
    CardDemo02Component,
    CardDemo03Component,
    CardDemo04Component,
    CardDemo05Component,
    CardDemo06Component,
    CardDemo07Component,
    CardDemo08Component,
    CardDemo09Component,
    CardDemo10Component,
    CardDemo11Component,
    CardDemo12Component,
    CardDemo13Component,
    CardDemo14Component,
    CardDemo15Component,
    CardDemo16Component,
    CardDemo17Component,
    CardDemo18Component,
    CardDemo19Component,
    CardDemo20Component,
    CardDemo21Component,
    CardDemo22Component,
    CardDemo23Component,
    CardDemo24Component,
    CardDemo25Component,
    CardDemo26Component,
    CardDemo27Component,
    CardDemo28Component,
    CardDemo29Component,
    CardDemo30Component,
    CardDemo31Component,
    CardDemo32Component,
    CardDemo33Component,
    CardDemo34Component,
    CardDemo35Component,
    CardDemo36Component,
    CardDemo37Component,
    CardDemo38Component,
    CardDemo39Component,
    CardDemo40Component,
    CardDemo41Component,
    CardDemo42Component,
    CardDemo43Component,
    CardDemo44Component,
    CardDemo45Component,
    CardDemo46Component,
    CardDemo47Component,
    CardDemo48Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PrismModule,
    DffCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
