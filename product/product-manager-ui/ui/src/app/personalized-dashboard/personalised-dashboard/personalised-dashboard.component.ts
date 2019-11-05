import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../products.service';
import { MatDialog } from '@angular/material';
import { Products, Team } from '../../IProducts';
import { Router } from '@angular/router';
import { AddProductDetailComponent } from '../add-product-detail/add-product-detail.component';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from "../../user.service";
import { UserProduct } from 'src/app/iuser';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-personalised-dashboard',
  templateUrl: './personalised-dashboard.component.html',
  styleUrls: ['./personalised-dashboard.component.sass']
})
export class PersonalisedDashboardComponent implements OnInit {


  @Input() productData;
  @Input() productId;
  private userProductList: Products[] = [];
  private length: number= 0;
  product: Products = {};
  newProduct: Products = {};
  team: Team = {};
  userProduct: UserProduct = {};
  private userId: string;
  private name: string;
  private userEmail: string;
  private email: string;
  private searchItem: string;
  constructor(private spinner: NgxSpinnerService,
    private _userService: UserService,
     private _productsService: ProductsService, 
     public dialog: MatDialog,
      private router: Router) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    this._productsService.getProductOfUser()
      .subscribe(data => {
        if(data !== null) {
          this.userProductList = this.userProductList.concat(data);
          this.length = this.userProductList.length;
        }
      });
    }, 1000);
    this.userProductList.reverse();

    
      this.userEmail = this._userService.getUserEmail();
      console.log(this.userEmail);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductDetailComponent, {
      width: '750px',
      height: '600px',
      data: { product: this.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.spinner.show();
      this.product.productName = result.productName;
      this.product.deadline = result.deadline;
      this.product.description = result.description;
      this.product.client = result.client;
      this.product.productManagerEmail = this.userEmail;
      this.product.teams = [];
      console.log(this.product);
      this._productsService.addProduct(this.product)
        .subscribe(data => {
          console.log(data);            
        });

        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
        

      this._productsService.getProductOfUser()
      .subscribe(data => {
        if(data !== null) {
          this.userProductList = [];
          console.log("data retrieved")
          this.userProductList = this.userProductList.concat(data);
          console.log(this.userProductList);
          this.length = this.userProductList.length;
        }
      });
    }, 2000);

      

    });
  }

}
