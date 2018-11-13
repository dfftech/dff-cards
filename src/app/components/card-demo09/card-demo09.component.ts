import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo09",
  templateUrl: "./card-demo09.component.html",
  styleUrls: ["./card-demo09.component.css"]
})
export class CardDemo09Component implements OnInit {
  constructor() {}
  img = "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg";
  ngOnInit() {}

  htmlContent1 = `
    <dff-card-a >
      <i class="fa fa-user"></i>
      <div>Sample text</div>
    </dff-card-a>
  `;

  htmlContent2 = `
    <dff-card-a dir="right">
      <i class="fa fa-user"></i>
      <div>Sample text</div>
    </dff-card-a>
  `;

  htmlContent3 = `
    <dff-card-a dir="left">
      <dff-card-i [img]="img"></i>
      <div>Sample text</div>
    </dff-card-a>
  `;
}
