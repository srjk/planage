import { Component, OnInit } from '@angular/core';
import {ProductInterface, Program} from '../model/product';
import {ProductService} from '../services/product.service';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.sass']
})
export class ProgramComponent implements OnInit {

  private isCookiePresent = false;
  productData: Program[];
  productName: string;
  constructor(
    private productService: ProductService,
    private userservice: UserService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    if (this.cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.userservice.setUserAuthStatus(this.cookie.check('__scheduler'));
    console.log(this.productService.calenderData);
    this.productName = this.productService.calenderData.productName;
    this.productData = this.productService.calenderData.programs;
    console.log(this.productData);
  }

}
