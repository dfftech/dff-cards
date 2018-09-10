import { Component, OnInit } from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

@Component({
  selector: "dff-cards",
  template: `
  <div align="center">
    <dff-card-t>
      <h2> Testing </h2>
    </dff-card-t>

    <dff-card-t shadow="true" bg="#fefdf1" maxWidth="100%">
      <h2> {{title}} </h2>
    </dff-card-t>

    <dff-card-l [inputData] = "dataList" [gap]="4" > 
      <ng-template let-ele #item> 
      <dff-card-t shadow="true" bg="#fefdf1" dir="left">
            <h3 style="margin: 8px"> {{ele}} </h3>
            </dff-card-t>
      </ng-template>

       
  
    </dff-card-l>
  </div>
  `,
  styles: [
    `
      .dff-cards {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      .dff-cards > * {
        width: 100%;
        justify-content: center;
      }
    `
  ]
})
export class CardsComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  title = "Application ";
  secureImg(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }
  dataList: any[] = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  ngOnInit() {}
}
