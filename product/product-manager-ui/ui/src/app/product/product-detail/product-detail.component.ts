import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  public productList = [];


  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this._productService.getItems(this.activatedRoute.snapshot.params.id)
    //   .subscribe(data =>{ this.productList.push(data.result);
    //   console.log(data)});
  }
}
