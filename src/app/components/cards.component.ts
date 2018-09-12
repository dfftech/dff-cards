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
 
    <dff-card-b [video]="vedioCover" height="500px" dir="right bottom">
      <h2> {{title}} </h2>
    </dff-card-b>
    <dff-card-t>
      <h2>  <i class="fa fa-user"></i>    </h2>
    </dff-card-t>

    <dff-card-t shadow="true" bg="#fefdf1" maxWidth="100%">
      <h2> {{title}} </h2>
    </dff-card-t>

    <dff-card-t shadow="true" bg="#fefdf1" align="center">
      <div style="width: 25%">
        <dff-card-a dir="left" >
          <dff-card-i [src]="imgCover" > </dff-card-i>
          <div #text>
            <h3> {{title}} </h3>
            <p> tesing products</p>
            <p> tesing products</p>
            <p> tesing products</p>
          </div>
        </dff-card-a>
      </div>

      <div style="width: 25%">
        <dff-card-a dir="right">
        <i class="fa fa-user" style="color: red "></i> 
        <div #text>
          <h3> {{title}} </h3>
        </div>
      </dff-card-a>
      </div>

      <div style="width: 300px">
      <dff-card-a dir="top">
      <dff-card-i [src]="imgCover" > </dff-card-i>
      <div #text>
        <h3> {{title}} </h3>
      </div>
    </dff-card-a>
    </div>
    <div style="width: 300px">
    <dff-card-a dir="bottom">
    <dff-card-i [src]="imgCover" > </dff-card-i>
    <div #text>
      <h3> {{title}} </h3>
    </div>
    </dff-card-a>
    </div>

    </dff-card-t>


    <dff-card-l [inputData] = "dataList" [gap]="4" > 
      <ng-template let-ele #itemTempl> 
          <dff-card-t shadow="true" bg="#fefdf1" align="left">
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

      img {
        position: relative;
        height: auto;
        left: 50%;
        -moz-transform: translate(-50%);
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
      }
    `
  ]
})
export class CardsComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  title = "Application ";
  imgCover = "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg";

  vedioCover =
    "https://s3.ap-south-1.amazonaws.com/dl-web-assets/Digital_Lync_Landing_Page_Video.mp4";

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
