import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo03",
  templateUrl: "./card-demo03.component.html",
  styleUrls: ["./card-demo03.component.css"]
})
export class CardDemo03Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  getHtmlContent1() {
    return `
    
      <dff-card-c img="https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg" height="300px" dir="left">
        <h2> <i class="fa fa-user"></i> Sample Text </h2>
      </dff-card-c>
 
    `;
  }
}
