import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductInterface } from '../model/product';

@Component({
  selector: 'app-slack',
  templateUrl: './slack.component.html',
  styleUrls: ['./slack.component.sass']
})
export class SlackComponent implements OnInit {

  webhook: string;
  myGroup = this.formBuilder.group({
    webhook: [
      '',
      [
        Validators.required,
        Validators.pattern('^https://hooks.slack.com/services/')
      ]
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<string>,
    @Optional() @Inject(MAT_DIALOG_DATA) public productId: string) {}

  ngOnInit() {}

  addSlack(hook: string) {

  }
}
