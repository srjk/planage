import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {


  @Input() productData: any;
  @Input() productId: string;
  productName: string;
  description: string;
  client: string;
  deadline: Date;
  teamList=[];
  customStyle = {
    backgroundColor: "#035382",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
  };
  customStyleForTeam = {
    backgroundColor: "#09847a",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
  }

  constructor(private router: Router, private productService: ProductsService) { }

  ngOnInit() {
    this.productName = this.productData.productName;
    this.description = this.productData.description;
    this.deadline = this.productData.deadline;
    this.client = this.productData.client;
    this.teamList = this.productData.teams;

  }

  goToAboutPage() {
    this.productService.setSelectedProduct(this.productData);
    this.router.navigate(['dashBoard/products', this.productId]);
    this.productService.getProductById(this.productId)
    .subscribe(data=> {
      this.teamList=data.teams;
      console.log(this.teamList);
    })
  }
}
