import { Component } from "@angular/core";

@Component({
  selector: "dff-root",
  template: `

  <h5>{{title}}  </h5>
  <nav>
  <a routerLink="/cards" routerLinkActive="active">cards</a>
  &nbsp; &nbsp;
    <a routerLink="/card-1" routerLinkActive="active">card-1</a>
    &nbsp; &nbsp;
    <a routerLink="/card-2" routerLinkActive="active">card-2</a>
    &nbsp; &nbsp;
    <a routerLink="/card-3" routerLinkActive="active">card-3</a>
  </nav>
<hr/>
<router-outlet></router-outlet>






  `,
  styles: [``]
})
export class AppComponent {
  title = "dff-cards";

  constructor() {}
}
