import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products/products.service";
import {ProductModel} from "../models/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  public product : ProductModel | undefined;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productsService.getProductById(productId).subscribe(product => {
      this.product = product;
      console.log("product detail",product)
    });
  }
}
