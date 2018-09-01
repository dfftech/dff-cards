import { Component } from "@angular/core";

@Component({
  selector: "dff-root",
  template: `
    <dff-card-aa [inputData]="cardAaData"></dff-card-aa>
    <dff-card-ab [inputData]="cardAbData"></dff-card-ab>
  `,
  styles: [``]
})
export class AppComponent {
  title = "dff-cards";
  cardAaData = {
    img: "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg",
    name: "card-aa",
    height: "300px",
    bg: "blue",
    summary:
      " abcd def ghtasdf ads asdf as dfa sd fa sd fa sdfasdfasdfas asdfasdfasd.",
    data: {
      id: 1
    }
  };
  cardAbData = {
    name: "card-ab.",
    summary:
      "Upon successful completion of the course, candidates can choose their career as:",
    img:
      "https://digital-lync.com/assets/images/courses/devopscourse/linux-digital-lync.svg",
    imgAlt: "DevOps"
  };
}
