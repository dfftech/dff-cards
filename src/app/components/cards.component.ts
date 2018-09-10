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

    <dff-card-t shadow="true" bg="#fefdf1" >
      <h2> Testing </h2>
    </dff-card-t>
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
  secureImg(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  ngOnInit() {}
}
