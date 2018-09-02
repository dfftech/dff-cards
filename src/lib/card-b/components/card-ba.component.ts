import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-ba',
  template: `
  <div class="homepage-hero-module" id="vcont" >
  <div class="video-container">
    <div class="title-container Aligner">
        <div class="container Aligner-item xxx" style="position: relative;z-index:9;margin: auto;">
            <div class="body">
              <div class="landing-desc typewriter" style="text-align:center;width:90%">
                  <h1 class="text-center" style="font-size:60px; font-weight:700;color:black">The  <span style="font-size:72px; font-weight:700;color: #ff2c7c;"> Advanced Technology </span> Learning Hub</h1>
                  <h3 class="font-weight-bold text-center" style="color:black">{{inputData.subTitle}}</h3>
              </div>
            </div>
          </div>
    </div>
    <div class="filter"></div>
    <video autoplay loop class="fillWidth">
      <source [src]="inputData.video" type="video/mp4" />
    </video>
    <div class="poster hidden">
      <img [src]="inputData.videoPoster" alt="">
    </div>
  </div>
</div>
  `,
  styles: [`

  .landing-desc{
    h1{
        font-size: 60px;
        font-weight: 100;
    }
    h3{
        font-size: 40px;
        font-weight: 100;
    }
    
}
.text-center{
  text-align:center;
}
video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    //height: calc(100vh - 75px);
}
.homepage-hero-module {
    border-right: none;
    border-left: none;
    position: relative;
  }
 
  .video-container {
    position: relative;
    bottom: 0%;
    left: 0%;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-image: linear-gradient(102deg, #7fdeea, #07cab2);
  }
  .video-container .poster img {
    width: 100%;
    bottom: 0;
    position: absolute;
  }
  .video-container .filter {
    z-index: 100;
    position: absolute;
    background: rgba(29,60,97,0.6);
    width: 100%;
  }
  .video-container .title-container {
    z-index: 1000;
    //position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    color: #fff;
    height: calc(100vh - 62px);
  }
  .video-container .link {
    position: absolute;
    bottom: 3em;
    width: 100%;
    text-align: center;
    z-index: 1001;
    font-size: 2em;
    color: #fff;
  }
  .video-container .link a {
    color: #fff;
  }
  .video-container video {
    position: absolute;
    z-index: 0;
    bottom: 0;
  }
  .video-container video.fillWidth {
    width: 100%;
  }
  .Aligner {
    display: flex;
    align-items: center;
    vertical-align: middle;
    /* justify-content: center; */
}
.Aligner-item {
    max-width: 100%;
}

  @media only screen and (max-width: 500px) {
    .landing-desc{
      h1{
          font-size: 36px;
          font-weight: 100;
      }
      h3{
          font-size: 24px;
          font-weight: bold;
      }  
      .xxx{
        top:80px;
      }
  }
  .video-container video.fillWidth {
   // width: 100%;
    display: none !important;
  }
}
@media only screen and (min-width: 418px) and (max-width: 768px) {
  .xxx{
    top: 200px;
  }
}

/* GLOBAL STYLES */
.body {
  display: flex;
  justify-content: center;
}

/* DEMO-SPECIFIC STYLES */
.typewriter h1 {
  color: #fff;
  font-family: Lato;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  //letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: transparent }
}

@media only screen and (max-width: 768px) {
  .typewriter h1 {
    color: #fff;
    font-family: Lato;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    //letter-spacing: .15em; /* Adjust as needed */
    font-size: 60px !important;
  }
  .typewriter span{
    font-size:30px !important;
  }
  @keyframes typing {
    from { width: none }
    to { width: none }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: transparent }
  }
  
}
@media only screen and (max-width: 375px) {
  .typewriter h1 {
    color: #fff;
    font-family: Lato;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    //letter-spacing: .15em; /* Adjust as needed */
    font-size: 30px !important;
  }
  .typewriter span{
    font-size:16px !important;
  }
  @keyframes typing {
    from { width: none }
    to { width: none }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: transparent }
  }
  
}
@media only screen and (max-width: 414px) {
  .typewriter h1 {
    color: #fff;
    font-family: Lato;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    //letter-spacing: .15em; /* Adjust as needed */
    font-size: 32px !important;
  }
  .typewriter span{
    font-size:18px !important;
  }
  @keyframes typing {
    from { width: none }
    to { width: none }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: transparent }
  }
  
}
@media only screen and (max-width: 360px) {
  .typewriter h1 {
    color: #fff;
    font-family: Lato;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    font-size: 30px !important;
  }
  .typewriter span{
    font-size:14px !important;
  }
  @keyframes typing {
    from { width: none }
    to { width: none }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: transparent }
  }
  
}
@media only screen and (max-width: 384px) {
  .typewriter h1 {
    color: #fff;
    font-family: Lato;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    //letter-spacing: .15em; /* Adjust as needed */
    font-size: 28px !important;
  }
  .typewriter span{
    font-size:16px !important;
  }
  @keyframes typing {
    from { width: none }
    to { width: none }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: transparent }
  }
  
}
@media only screen and (min-width: 1025px) and (max-width: 1366px){
  .video-container .title-container {
    height: calc(100vh - 258px) !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px){
  .video-container {
    height: 100% !important;
  }
  .video-container .title-container {
    height: calc(100vh - 792px);
  }
}
@media only screen and (min-width: 500px) and (max-width: 768px){
  .video-container {
    height: 100% !important;
  }
  .video-container .title-container {
    height: calc(100vh - 592px);
  }
  .typewriter h1,span,h3 {
    display: none !important;
  } 
}
@media only screen and (min-width: 360px) and (max-width: 499px){
  .video-container {
    height: 100% !important;
  }
  .video-container .title-container {
    height: calc(100vh - 503px);
  }
  .video-container .title-container{
    background-image: url('https://s3.ap-south-1.amazonaws.com/dl-web-assets/landing_banner_image.png') ;
    height:100vh;
    background-size:cover;
    background-position: center;
  }
}
@media only screen and (min-width: 320px)  and (max-width: 360px){
  .video-container .title-container {
    height: calc(100vh - 400px);
  }
  .video-container .title-container{
    background-image: url('https://s3.ap-south-1.amazonaws.com/dl-web-assets/landing_banner_image.png') ;
    height:100vh;
    background-size:cover;
    background-position: center;
  }
}
  `]
})
export class CardBaComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    console.log(this.inputData)

  }
  onCardSelect() { if (this.inputData && this.inputData.data) { this.outputEmitter.emit(this.inputData.data) } }
}