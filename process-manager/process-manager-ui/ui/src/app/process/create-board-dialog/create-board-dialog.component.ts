import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-create-board-dialog",
  templateUrl: "./create-board-dialog.component.html",
  styleUrls: ["./create-board-dialog.component.sass"]
})
export class CreateBoardDialogComponent implements OnInit {
  boardName: string;
  public isSlackEnable: boolean = false;
  myGroup = this.formBuilder.group({
    boardName: [
      "",
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern("^[a-zA-Z][a-z s A-Z0-9]*")
      ]
    ]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onChangeSlackEnableOption(event) {
    this.isSlackEnable = this.isSlackEnable ? false : true;
  }
}
