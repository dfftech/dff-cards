import { Component } from "@angular/core";

@Component({
  selector: "dff-root",
  template: `
    <dff-card-aa [inputData]="cardAaData"></dff-card-aa>
  `,
  styles: [
    `
      h2 {
        font-size: 1em !important;
        -webkit-margin-before: 0em !important;
        -webkit-margin-after: 0em !important;
        -webkit-margin-start: 0px !important;
        -webkit-margin-end: 0px !important;
      }
    `
  ]
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
}
