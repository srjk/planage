import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.sass']
})
export class AppBarComponent implements OnInit {
  private userId: string;
  private name: string;
  private userEmail: string;
  private email: string;
  constructor(private _userService: UserService,private cookie: CookieService,  private _productsService: ProductsService) { }
  customStyle = {
    backgroundColor: "#035382",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
  };
  ngOnInit() {
    const token = this.cookie.get('_planage_product');
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;
    this._userService.setUserEmail(this.userEmail);
    this._productsService.setUserEmail(this.userEmail);
    this._userService.getUserDetail(this.userEmail)
    .subscribe(data => {
      this.email = data.userEmail;
      this.name = data.userName;
      this.userId = data.id;
    });

  }

}
