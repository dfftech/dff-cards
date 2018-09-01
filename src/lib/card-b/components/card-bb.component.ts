import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-bb',
  template: `
  <section class="card-bb">
  <div class="course_poster_banner">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
      <div class="video-block">
      <div class="videoWrapper videoWrapper169 js-videoWrapper" #jsVideoWrapper>
          <a [attr.href]="inputData.video" target="_blank" class="videoPoster js-videoPoster" style="background-position:center;" [ngStyle]="{ 'background-image': 'url(' + inputData.img + ')'}">Play video</a>
      </div>
  </div>
      </div>
    </div>
  </div>
  </div> 
</section>   
  `,
  styles: [`
  
  .card-bb .course_poster_banner{
  background-image: linear-gradient(116deg, #6db7c1, #07cab2);
  padding:52px;
}
@media only screen and (min-width: 320px) and (max-width: 500px) {
  .card-bb .course_poster_banner{
    
    padding:20px;
  }
  .slugName{
    display: block !important;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1024px){
  .card-bb .video-block{
    width: 90%;
  }
}

.card-bb .videoWrapper {
  position: relative;
  width: 100%;
  height: 0;
  //background-color: #bbb8b8;
}
.card-bb .videoWrapper43 {
  padding-top: 75%;
}
.card-bb .videoWrapper169 {
  //padding-top: 56%;
  padding-top: 35%;
  width: 70%;
  margin: auto;
}
.card-bb .videoPoster {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 0;
  outline: none;
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-size: cover;
  text-indent: -999em;
  overflow: hidden;
  opacity: 1;
  -webkit-transition: opacity 800ms, height 0s;
  -moz-transition: opacity 800ms, height 0s;
  transition: opacity 800ms, height 0s;
  -webkit-transition-delay: 0s, 0s;
  -moz-transition-delay: 0s, 0s;
  transition-delay: 0s, 0s;
}
.card-bb .videoPoster:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin: -40px 0 0 -40px;
  border: 5px solid #fff;
  border-radius: 100%;
  -webkit-transition: border-color 300ms;
  -moz-transition: border-color 300ms;
  transition: border-color 300ms;
  display: none;
}
.card-bb .videoPoster:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  margin: -20px 0 0 -10px;
  border-left: 40px solid #fff;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  -webkit-transition: border-color 300ms;
  -moz-transition: border-color 300ms;
  transition: border-color 300ms;
  display: none;
}
.card-bb .videoPoster:hover:before, .videoPoster:focus:before {
  border-color: #f00;
}
.card-bb .videoPoster:hover:after, .videoPoster:focus:after {
  border-left-color: #f00;
}
.card-bb .videoWrapperActive .videoPoster {
  opacity: 0;
  height: 0;
  -webkit-transition-delay: 0s, 800ms;
  -moz-transition-delay: 0s, 800ms;
  transition-delay: 0s, 800ms;
}

.card-bb .videoPoster{
  box-shadow: 12px 15px 20px 0 rgba(46,61,73,.37);
  border-radius: .375rem;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.card-bb .videoPoster:hover{
  -webkit-box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
  box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
}

@media only screen and (min-width: 992px) and (max-width: 1024px){
  .card-bb .video-block{
    width: 90%;
  }
}

  `]
})
export class CardBbComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}