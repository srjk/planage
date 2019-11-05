import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductInterface } from '../model/product';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Router } from '@angular/router';
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
  styleUrls: ['./productcards.component.sass']
})

export class ProductcardsComponent implements OnInit {
  panelOpenState = false;
  @Input() data;
  productData: ProductInterface;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
  }

  editData() {
    this.productService.sendToFormComponent(this.data);
    console.log(this.data);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    this.dialog.open(ProductFormComponent, dialogConfig);
  }

  deleteData(productData: ProductInterface): void {
    console.log(productData);
    this.productService.deleteProductData(productData.id).subscribe();
  }

  addTaskData(productId: string) {
    console.log(productId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '500px';
    dialogConfig.data = productId;
    this.dialog.open(TaskComponent, dialogConfig);
  }

  openCalendar(data) {
    this.productService.calenderData = null;
    this.productService.calenderData = data;
    console.log(data);
    this.router.navigateByUrl('/calendar');
  }

  openProgram(data) {
    this.productService.calenderData = null;
    this.productService.calenderData = data;
    this.router.navigateByUrl('/programs');
  }


}
