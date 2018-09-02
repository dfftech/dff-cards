import { Component } from "@angular/core";

@Component({
  selector: "dff-root",
  template: `

  <h5>{{title}}  </h5>
  <nav>
    <a routerLink="/card-a" routerLinkActive="active">card-a</a>
    &nbsp; &nbsp;
    <a routerLink="/card-b" routerLinkActive="active">card-b</a>
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
