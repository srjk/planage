import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductInterface } from '../../sprint-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productData: ProductInterface[];
  private userEmail: String;
  constructor(private productService: ProductService,private cookie: CookieService) { }

  ngOnInit() {
    const token = this.cookie.get('jwt-token');

    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;

    console.log(this.userEmail);

    this.productService.getProducts().subscribe(data => {
      this.productData = data;
    });

  }

  sprintData(data) {
    console.log(data);
  }

}
