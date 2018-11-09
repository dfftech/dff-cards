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

  getHtmlContent1() {
    return `
    <dff-card-l [inputData]="dataList" [gap]="4" type="grid">
      <ng-template let-ele #itemTempl>
        <div style="display: flex">
          <dff-card-c [img]="ele.img" height="200px" dir="top">
            <h2>{{ ele.name }}</h2>
          </dff-card-c>
        </div>
      </ng-template>
    </dff-card-l>

    `;
  }
}
