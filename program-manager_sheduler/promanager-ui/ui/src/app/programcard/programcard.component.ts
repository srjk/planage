import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../model/product';
import { ProductService } from '../services/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductFormComponent } from '../product-form/product-form.component';

import { AddparticipantComponent } from '../addparticipant/addparticipant.component';
import { HttpClient } from '@angular/common/http';
import { ProgramcardService } from '../services/programcard.service';


@Component({
  selector: 'app-programcard',
  templateUrl: './programcard.component.html',
  styleUrls: ['./programcard.component.sass']
})
export class ProgramcardComponent implements OnInit {
  panelOpenState = false;

  @Input() data;
  noOfParticipant = 0;
  participantsList = [];
  productData: ProductInterface;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private programcardService: ProgramcardService
  ) { }

  ngOnInit() {

    this.programcardService.getProgramParticipant(this.data.id).subscribe(
      data => {
      this.noOfParticipant = data.length;

      }
    );
  }

  addParticipant(data) {

    const program = { programId: data.id, text: data.text, startDate: data.startDate, endDate: data.endDate };
    const productId = { productId: this.productService.calenderData.id };

    const dialogRef = this.dialog.open(AddparticipantComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // tslint:disable-next-line: no-shadowed-variable
      result.map(result => {
        console.log('this is result ', JSON.stringify(result));

        const participant = Object.assign({}, result, program, productId);
        // tslint:disable-next-line: no-shadowed-variable
        this.programcardService.insertParticipant(participant).subscribe(data => {
          console.log('This is the post respose***********', data);
        });
        this.participantsList.push(JSON.parse(JSON.stringify(participant)));
        // tslint:disable-next-line: no-shadowed-variable
        this.programcardService.getProgramParticipant(data.id).subscribe(data => {
          this.noOfParticipant = data.length;

          }
        );
      });
    });


  }


}
