import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dff-card-bc',
  template: `
    <div class='card-bc'>
    <section class="coursebanner section-padding" [ngStyle]="{ 'background-image': 'url(' + inputData.img + ')'}" style="background-color: linear-gradient(102deg, #7fdeea, #07cab2);">
    <div class="container-fluid Aligner">
        <div class="">
            <div class="bannerContainer">
                <h1 class="text-center">Events at
                    <span style=" font-weight: bold;color: #e22889;">Digital Lync.</span>
                    <br> Make sure that you are there!</h1>
                <p class="font-size-16 text-center hidden-xs hidden-sm white">{{inputData.description}}</p>
            </div>
            <div class="text-center">
                <a>
                    <button class="btn">View All Courses</button>
                </a>
            </div>
        </div>
    </div>
</section>
    </div>
  `,
  styles: [`.card-bc{}
  .Aligner {
    display: flex;
    align-items: center;
    vertical-align: middle;
    /* justify-content: center; */
}
.Aligner-item {
    max-width: 100%;
}

  .coursebanner .heading {
    font-size: 43px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    text-align: center;
    color: white;
    //margin-top: 150px;
    
  }
  .coursebanner {
    margin-top: 0px;
    display: flex;
    height: 61vh;
    //background-image: url('../images/home-banner.jpg');
    background-size: cover;
    width: 100%
  }
  @media only screen and (min-width: 320px) and (max-width: 500px){
    .course-page-enroll-form{
      width: 220px !important;
    }
    .coursebanner{
        height:21vh;
    }
    .coursebanner .heading, .bannerContainer>h1{
       font-size: 16px !important;
    }
    .coursebanner  .bannerContainer{
       padding: 0px !important;
     }
    .card-body h4{
        font-size:12px;
    }
  }


  .coursebanner .bannerContainer{
    padding: 100px 0px;
}
.coursebanner .bannerContainer h1{
    font-size: 43px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    text-align: center;
    color: white;
    /* //margin-top: 150px; */   
}

  .btn {
    width: 200px;
    height: 45px;
    color: white;
    //border-radius: 4px;
    background-image: linear-gradient(to left, #fe6277, #ff8149);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.05);
  }

.eventCheck{
  width: 100%;
  height: 50px;
  color: white;
  background-image: linear-gradient(99deg, #6db7c1, #07cab2);
  border-style: none;
}
.statusComplete{
  background-image: linear-gradient(to left, #fe6277, #ff8149);
}
.bg{
  background-color: #f3fafb;
}
.bg1{
  background-color: #f3fafb;
}
  `]
})
export class CardBcComponent implements OnInit {
  @Input() inputData; @Output() outputEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onCardSelect() { if(this.inputData && this.inputData.data){ this.outputEmitter.emit(this.inputData.data)}}
}