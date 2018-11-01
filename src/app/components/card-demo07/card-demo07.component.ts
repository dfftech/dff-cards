import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo07",
  templateUrl: "./card-demo07.component.html",
  styleUrls: ["./card-demo07.component.css"]
})
export class CardDemo07Component implements OnInit {
  htmlContent1: string;
  constructor() {}

  ngOnInit() {}

  getHtmlContent1() {
    return `
    <dff-card-m>
      <ul>
        <li>
          <a href='#'> <i class="fa fa-user"> Home</a>
        </li>
        <li>
          <a href='#'> <i class="fa fa-user"> </i>About</a>
        </li>
        <li>
          <a href='#'> <i class="fa fa-user"> </i>Work</a>
        </li>
      </ul>
    </dff-card-m>
    `;
  }
}
