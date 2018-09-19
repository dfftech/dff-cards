import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo01",
  templateUrl: "./card-demo01.component.html",
  styleUrls: ["./card-demo01.component.css"]
})
export class CardDemo01Component implements OnInit {
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
}
