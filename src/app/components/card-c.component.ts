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
    width: "",
    summary:
      "The JOSU Product is a skill matching job portal platform for students, employers and colleges. Employers can add jobs and find a right match for the positions using JOSU. Students can find a right place to work with their skill set and can even undergo trainings in new advanced technologies to increase the scope of finding best job in the market. Colleges can collaborate with Digital Lync and place their students in top MNC’s after proper training in required skill set.",
    img:
      "https://www.digital-lync.com/assets/images/courses/devopscourse/project-digital-lync.png",
    imgAlt: "DevOps"
  };
}
