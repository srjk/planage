import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Products, Team } from '../../IProducts';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  productname: string;
  deadline: Date;
  client: string;
  description: string;
}

@Component({
  selector: 'app-add-product-detail',
  templateUrl: './add-product-detail.component.html',
  styleUrls: ['./add-product-detail.component.sass']
})
export class AddProductDetailComponent implements OnInit {

  // productBacklog: Products= {result: [{}]};
  isLinear = true;
  productInformation = this.formBuilder.group({
    productName : ['',  Validators.compose([
      Validators.required,
      Validators.maxLength(25),
    ])],
    deadline: ['', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])],
    client: ['',  Validators.compose([
      Validators.required,
      Validators.maxLength(25)
    ])],
    description: ['', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])],
    teamMember: []
  });

  constructor(private formBuilder: FormBuilder,  public dialogRef: MatDialogRef<AddProductDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Products) { }

  ngOnInit() {
    console.log(this.data);
  }
  closeDialogBox() {
    this.dialogRef.close(this.productInformation.value);
  }
}
