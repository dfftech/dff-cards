import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo08",
  templateUrl: "./card-demo08.component.html",
  styleUrls: ["./card-demo08.component.css"]
})
export class CardDemo08Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  video: string =
    "https://s3.ap-south-1.amazonaws.com/tagbyair-vid/final+(1).mp4";
  img: string = "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg";
  getHtmlContent1() {
    return `
           <dff-card-b [video]="video" height="100vh" dir="center center">
              <h1> Sample text</h1>
            </dff-card-b>
    `;
  }
}
