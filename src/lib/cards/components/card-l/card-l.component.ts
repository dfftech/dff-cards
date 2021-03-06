import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "dff-card-l",
  templateUrl: "./card-l.component.html",
  styleUrls: ["./card-l.component.css"]
})
export class CardLComponent implements OnInit {
  @Input()
  type: string = "flex";

  @Input()
  inputData: any[] = [];
  @Input()
  gap: string = "4";

  @ContentChild("itemTempl")
  itemTmpl: TemplateRef<any>;

  constructor() {
    // console.log(this.inputData);
  }

  ngOnInit() {}
}
