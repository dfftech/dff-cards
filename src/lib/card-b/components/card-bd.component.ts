import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dff-card-bd",
  template: `
  <div class="card-bd"> 
    <section class='landing'>
    <video autoplay='true' loop='true' muted='true' poster='' [src]='inputData.video'></video>
    <div class='dim'></div>
    <div class='typewriter'>
      <h1 > Digital services don't have to be </h1>
    </div>
  </section>
</div>
  `,
  styles: [
    `
      /* The typing effect */
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }

      // /* The typewriter cursor effect */
      // @keyframes blink-caret {
      //   from,
      //   to {
      //     border-color: transparent;
      //   }
      //   50% {
      //     border-color: orange;
      //   }
      // }

      .card-bd {
        height: 100vh;
        width: 100%;
        margin: 0;
        color: white;
        position: relative;
      }

      .card-bd .typewriter h1 {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: 0.15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: 0.15em; /* Adjust as needed */
        animation: typing 3.5s steps(40, end),
          blink-caret 0.75s step-end infinite;
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
      .card-bd .typewriter {
        position: relative;
        top: calc(50% - 2em);
        display: flex;
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
