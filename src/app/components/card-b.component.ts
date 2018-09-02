import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dff-card-b",
  template: `
  <h2> card-ba </h2>
  <p> {{cardBaData | json }} </p>
  <dff-card-ba [inputData]="cardBaData"></dff-card-ba>

  <h2> card-bb </h2>
  <p> {{cardBbData | json }} </p>
  <dff-card-bb [inputData]="cardBbData"></dff-card-bb>

  <h2> card-bc </h2>
  <p> {{cardBcData | json }} </p>
  <dff-card-bc [inputData]="cardBcData"></dff-card-bc>

  <h2> card-bd </h2>
  <p> {{cardBdData | json }} </p>
  <dff-card-bd [inputData]="cardBdData"></dff-card-bd>
  `,
  styles: []
})
export class CardBComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cardBaData = {
    title: "banner",
    subTitle: "Classroom & Online",
    video:
      "https://s3.ap-south-1.amazonaws.com/dl-web-assets/Digital_Lync_Landing_Page_Video.mp4",
    videoPoster:
      "https://s3.ap-south-1.amazonaws.com/dl-web-assets/Digital_Lync_Landing_Page_Video.mp4"
  };

  cardBbData = {
    title: "banner",
    img:
      "https://d38y6a0t4hqpxx.cloudfront.net/images/devops-cover-digital-lync.png"
  };

  cardBcData = {
    title: "Events at Digital Lync.",
    img:
      "https://d38y6a0t4hqpxx.cloudfront.net/images/data-science-digital-lync.png",
    summary:
      "Talk to industry leaders and know real facts. Clear your queries and walk out with a career decision.Do attend our workshops and seminars. Let us meet up!"
  };
}
