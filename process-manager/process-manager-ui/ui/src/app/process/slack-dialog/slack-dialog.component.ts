import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-slack-dialog",
  templateUrl: "./slack-dialog.component.html",
  styleUrls: ["./slack-dialog.component.sass"]
})
export class SlackDialogComponent implements OnInit {
  webhook: string;
  myGroup = this.formBuilder.group({
    webhook: [
      '',
      [
        Validators.required,
        Validators.pattern('^https://hooks.slack.com/services/.*')
      ]
    ]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { }
}
