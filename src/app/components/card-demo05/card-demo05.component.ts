import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-demo05",
  templateUrl: "./card-demo05.component.html",
  styleUrls: ["./card-demo05.component.css"]
})
export class CardDemo05Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  dataList = [
    {
      name: "abce",
      img: "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg"
    },
    {
      name: "asdfasd",
      img: "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg"
    },
    {
      name: "asdfasdf",
      img: "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg"
    }
  ];
}
