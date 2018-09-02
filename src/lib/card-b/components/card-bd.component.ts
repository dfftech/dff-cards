import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-bd",
  template: `
  <div class="card-bd"> 
  <section class='landing'>
  <video autoplay='true' loop='true' muted='true' poster='' src='https://player.vimeo.com/external/174002664.hd.mp4?s=a9462820bdba3dee151d2ff32e4cbcebd982d77e&amp;profile_id=119&amp;oauth2_token_id=57447761'></video>
  <div class='dim'></div>
  <div class='text'>
    <h1 class='animated slideInLeft'>
      <span>Digital services don't have to be</span>
      <br>
      <span>"like a box of chocolates."</span>
    </h1>
  </div>
</section>
</div>
  `,
  styles: [
    `
      .card-bd {
        height: 100vh;
        width: 100%;
        margin: 0;
        color: white;
        position: relative;
      }

      .card-bd .landing {
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
      .card-bd .landing video {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        object-fit: cover;
      }
      .card-bd .landing .dim {
        height: 100%;
        width: 100%;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: black;
      }
      .card-bd .landing .text {
        position: relative;
        top: calc(50% - 2em);
        text-align: center;
      }
    `
  ]
})
export class CardBdComponent implements OnInit {
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
