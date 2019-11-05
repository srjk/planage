import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductInterface } from '../model/product';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductFormComponent } from '../product-form/product-form.component';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  productData: ProductInterface[];
  userEmail: string;
  private isCookiePresent = false;

  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
    private service: UserService,
    private cookie: CookieService) { }

  ngOnInit() {
    if (this.cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.service.setUserAuthStatus(this.cookie.check('__scheduler'));
    const token = this.cookie.get('__scheduler');
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;
    console.log('++++++++++++++++++++++++++++++++', this.userEmail);
    this.productService.getProducts(this.userEmail);
    this.getAllData();
  }


  getAllData(): void {
    // let sortProductData: ProductInterface[];
    this.productService.getData().
      subscribe((data) => {
        // sortProductData = data;
        // sortProductData.sort(this.sortByProperty('createdAt'));
        this.productData = data;
      });
  }


  // Opening Product Form Component
  showDialogBox() {
    this.productService.sendToFormComponent(undefined);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    this.dialog.open(ProductFormComponent, dialogConfig);
  }
}
