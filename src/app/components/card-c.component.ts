import { Component, OnInit } from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

@Component({
  selector: "dff-card-c",
  template: `
  <div style="boder: 1px solid #ccc">
    <h2> card-ca </h2>
    <p> {{cardCaData | json }} </p>
    <dff-card-ca [inputData]="cardCaData"></dff-card-ca>
  </div>


  <div style="boder: 1px solid #ccc">
  <h2> card-cb </h2>
  <p> {{cardCbData | json }} </p>
  <dff-card-cb [inputData]="cardCbData"></dff-card-cb>
</div>

  `,
  styles: []
})
export class CardCComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  secureImg(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  ngOnInit() {}

  cardCaData = {
    name: "card-ca",
    height: "400px",
    summary:
      "The JOSU Product is a skill matching job portal platform for students, employers and colleges. Employers can add jobs and find a right match for the positions using JOSU. Students can find a right place to work with their skill set and can even undergo trainings in new advanced technologies to increase the scope of finding best job in the market. Colleges can collaborate with Digital Lync and place their students in top MNC’s after proper training in required skill set.",
    img:
      "https://www.digital-lync.com/assets/images/courses/devopscourse/project-digital-lync.png",
    imgAlt: "DevOps"
  };
  cardCbData = {
    height: "400px",
    pList: ["Python Developer", "Flask Developer"],
    hList: [
      "It has revealed that the Python programming language is presently the most popular language for Data Scientists, Software Engineer, Research Analyst and Software Developer.",
      "Upon successful completion of the course, candidates can choose their career as"
    ],

    img:
      "https://www.digital-lync.com/assets/images/courses/devopscourse/project-digital-lync.png",
    imgAlt: "DevOps"
  };
}
