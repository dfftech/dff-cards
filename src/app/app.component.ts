import { Component } from "@angular/core";

@Component({
  selector: "dff-root",
  template: `
  
    <dff-card-bc [inputData]="cardBcData"></dff-card-bc>
  `,
  styles: [`
  
  `]
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


  cardBaData = {
    title: "banner",
    subTitle:"Classroom & Online",
    video:"https://s3.ap-south-1.amazonaws.com/dl-web-assets/Digital_Lync_Landing_Page_Video.mp4",
    videoPoster:"https://s3.ap-south-1.amazonaws.com/dl-web-assets/Digital_Lync_Landing_Page_Video.mp4"
  };

  cardBbData = {
    title: "banner",
    img:"https://d38y6a0t4hqpxx.cloudfront.net/images/devops-cover-digital-lync.png",
    video:"https://www.youtube.com/watch?v=JQmAn9eNtNI&t=12s"
  };

  cardBcData = {
    title: "Events at Digital Lync.",
    img:"https://d38y6a0t4hqpxx.cloudfront.net/images/data-science-digital-lync.png",
    description:"Talk to industry leaders and know real facts. Clear your queries and walk out with a career decision.Do attend our workshops and seminars. Let us meet up!",
    video:"https://www.youtube.com/watch?v=JQmAn9eNtNI&t=12s"
  };
}
