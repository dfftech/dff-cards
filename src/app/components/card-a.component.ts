import { Component, OnInit } from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

@Component({
  selector: "dff-card-a",
  template: `
  <div style="boder: 1px solid #ccc">
    <h2> card-aa </h2>
    <p> {{cardAaData | json }} </p>
    <dff-card-aa [inputData]="cardAaData"></dff-card-aa>
  </div>

    <h2> card-ab </h2>
    <p> {{cardAbData | json }} </p>
    <dff-card-ab [inputData]="cardAbData"></dff-card-ab>

    <h2> card-ac </h2>
    <p> {{cardAcData | json }} </p>
    <dff-card-ac [inputData]="cardAcData"></dff-card-ac>


    <h2> card-ad </h2>
    <p> {{cardAdData | json }} </p>
    <dff-card-ad [inputData]="cardAdData"></dff-card-ad>

    <h2> card-ae </h2>
    <p> {{cardAeData | json }} </p>
    <dff-card-ae [inputData]="cardAeData" dir="left"></dff-card-ae>

    <h2> card-af </h2>
    <p> {{cardAfData | json }} </p>
    <dff-card-af [inputData]="cardAfData"></dff-card-af>
  `,
  styles: []
})
export class CardAComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  secureImg(img: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  ngOnInit() {}

  cardAaData = this.cardAaFn();
  cardAaFn() {
    return {
      img: "https://d38y6a0t4hqpxx.cloudfront.net/images/july8-cover.jpg",
      name: "card-aa",
      height: "300px",
      bg: "blue",
      summary:
        " abcd def ghtasdf ads asdf as dfa sd fa sd fa sdfasdfasdfas asdfasdfasd.",
      data: {
        id: 1
      }
    };
  }

  cardAbData = this.cardAbFn();
  cardAbFn() {
    return {
      name: "card-ab.",
      summary:
        "Upon successful completion of the course, candidates can choose their career as:",
      img:
        "https://digital-lync.com/assets/images/courses/devopscourse/linux-digital-lync.svg",
      imgAlt: "DevOps"
    };
  }

  cardAcData = {
    name: "card-ac",
    height: "300px",
    summary:
      "The JOSU Product is a skill matching job portal platform for students, employers and colleges. Employers can add jobs and find a right match for the positions using JOSU. Students can find a right place to work with their skill set and can even undergo trainings in new advanced technologies to increase the scope of finding best job in the market. Colleges can collaborate with Digital Lync and place their students in top MNC’s after proper training in required skill set.",
    img: "https://www.digital-lync.com/assets/images/josulogo.svg",
    imgAlt: "DevOps"
  };
  cardAeData = {
    name: "card-ae",
    height: "100px",
    borderColor: "red",

    img:
      "https://www.digital-lync.com/assets/images/courses/devopscourse/clock.png",
    imgAlt: "DevOps",
    pList: ["9 Weeks", "5 Hours/Week"]
  };
  cardAdData = {
    img: "https://d38y6a0t4hqpxx.cloudfront.net/images/devops-digital-lync.png",
    name: "card-ad",
    height: "300px",
    bg: "blue",
    data: {
      id: 1
    },
    views: {
      img: this.secureImg(
        "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJleWUiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1leWUgZmEtdy0xOCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01NjkuMzU0IDIzMS42MzFDNTEyLjk2OSAxMzUuOTQ5IDQwNy44MSA3MiAyODggNzIgMTY4LjE0IDcyIDYzLjAwNCAxMzUuOTk0IDYuNjQ2IDIzMS42MzFhNDcuOTk5IDQ3Ljk5OSAwIDAgMCAwIDQ4LjczOUM2My4wMzEgMzc2LjA1MSAxNjguMTkgNDQwIDI4OCA0NDBjMTE5Ljg2IDAgMjI0Ljk5Ni02My45OTQgMjgxLjM1NC0xNTkuNjMxYTQ3Ljk5NyA0Ny45OTcgMCAwIDAgMC00OC43Mzh6TTI4OCAzOTJjLTc1LjE2MiAwLTEzNi02MC44MjctMTM2LTEzNiAwLTc1LjE2MiA2MC44MjYtMTM2IDEzNi0xMzYgNzUuMTYyIDAgMTM2IDYwLjgyNiAxMzYgMTM2IDAgNzUuMTYyLTYwLjgyNiAxMzYtMTM2IDEzNnptMTA0LTEzNmMwIDU3LjQzOC00Ni41NjIgMTA0LTEwNCAxMDRzLTEwNC00Ni41NjItMTA0LTEwNGMwLTE3LjcwOCA0LjQzMS0zNC4zNzkgMTIuMjM2LTQ4Ljk3M2wtLjAwMS4wMzJjMCAyMy42NTEgMTkuMTczIDQyLjgyMyA0Mi44MjQgNDIuODIzczQyLjgyNC0xOS4xNzMgNDIuODI0LTQyLjgyM2MwLTIzLjY1MS0xOS4xNzMtNDIuODI0LTQyLjgyNC00Mi44MjRsLS4wMzIuMDAxQzI1My42MjEgMTU2LjQzMSAyNzAuMjkyIDE1MiAyODggMTUyYzU3LjQzOCAwIDEwNCA0Ni41NjIgMTA0IDEwNHoiPjwvcGF0aD48L3N2Zz4="
      ),
      count: "545"
    },
    share: {
      img: this.secureImg(
        "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJzaGFyZS1hbHQiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1zaGFyZS1hbHQgZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0zNTIgMzIwYy0yMi42MDggMC00My4zODcgNy44MTktNTkuNzkgMjAuODk1bC0xMDIuNDg2LTY0LjA1NGE5Ni41NTEgOTYuNTUxIDAgMCAwIDAtNDEuNjgzbDEwMi40ODYtNjQuMDU0QzMwOC42MTMgMTg0LjE4MSAzMjkuMzkyIDE5MiAzNTIgMTkyYzUzLjAxOSAwIDk2LTQyLjk4MSA5Ni05NlM0MDUuMDE5IDAgMzUyIDBzLTk2IDQyLjk4MS05NiA5NmMwIDcuMTU4Ljc5IDE0LjEzIDIuMjc2IDIwLjg0MUwxNTUuNzkgMTgwLjg5NUMxMzkuMzg3IDE2Ny44MTkgMTE4LjYwOCAxNjAgOTYgMTYwYy01My4wMTkgMC05NiA0Mi45ODEtOTYgOTZzNDIuOTgxIDk2IDk2IDk2YzIyLjYwOCAwIDQzLjM4Ny03LjgxOSA1OS43OS0yMC44OTVsMTAyLjQ4NiA2NC4wNTRBOTYuMzAxIDk2LjMwMSAwIDAgMCAyNTYgNDE2YzAgNTMuMDE5IDQyLjk4MSA5NiA5NiA5NnM5Ni00Mi45ODEgOTYtOTYtNDIuOTgxLTk2LTk2LTk2eiI+PC9wYXRoPjwvc3ZnPg=="
      ),
      count: "545"
    }
  };
  cardAfData = {
    img:
      "https://digital-lync.com/assets/images/courses/devopscourse/linux-digital-lync.svg",
    name: "card-af",
    title: "card-af"
  };
}
