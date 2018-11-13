import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo01",
  templateUrl: "./card-demo01.component.html",
  styleUrls: ["./card-demo01.component.css"]
})
export class CardDemo01Component implements OnInit {
  img = "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg";
  constructor() {}
  interpolate = { language: "language interpolated" };
  ngOnInit() {}

  htmlContent1 = `
    <dff-card-z> 
      <h2> 
        <i class="fa fa-user"></i> 
      </h2>
    </dff-card-z>
  `;

  htmlContent2 = `
    <dff-card-z shadow=true dir="left" padding="0px 20px">
      <h2> <i class="fa fa-user"></i> </h2>
    </dff-card-z>
  `;
}
