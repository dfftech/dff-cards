import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-ab",
  template: `
    <div class='card-ab' (click)="onCardSelect()" *ngIf="inputData">
        <div class="img-box">
          <div class="oval Aligner">
              <img [alt]="inputData.imgAlt" [src]="inputData.img" 
              class="img-responsive card-image margin-auto" style=" width:80px; height=80px;  padding-top: 10px"/>
          </div>
          <div class="carda  slideInLeft Aligner">
            <div class="Aligner-item">
              <h3>{{inputData.name}}</h3>
              <p>{{inputData.summary}}</p>
            </div>
          </div>

      </div>
    </div>
  `,
  styles: [
    `
      .card-ab {
        text-align: center;
        margin: 8px;
        justify-content: center;
        width: 100%;
      }
      .card-ab .img-box {
        width: 100%;
        height: auto;
        overflow: unset;
        background: transparent;
        position: sticky;
      }
      .card-ab .carda {
        left: 50px;
        position: relative;
        height: 160px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 2px 10px 0 rgba(194, 194, 194, 0.5);
        padding: 0px 10px 0px 60px;
        text-align: left;
        max-width: 350px;
      }
      .card-ab .oval {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        background-color: #ffffff;
        box-shadow: 0 2px 10px 0 rgba(194, 194, 194, 0.5);
        position: absolute;
        z-index: 1;
        top: 25px;
      }
      @media only screen and (min-width: 320px) and (max-width: 500px) {
      }
      .card-ab h3 {
        margin: 0px;
        padding: 0.5em 0;
        font-weight: 500;
        text-align: center;
      }
      .card-ab p {
        line-height: 24px;
        padding: 0.5em;
        text-align: left;
      }
    `
  ]
})
export class CardAbComponent implements OnInit {
  @Input()
  inputData;
  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onCardSelect() {
    if (this.inputData && this.inputData.data) {
      this.outputEmitter.emit(this.inputData.data);
    }
  }
}
