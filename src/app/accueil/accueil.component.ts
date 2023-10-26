import {Component, OnInit} from '@angular/core';
import { ProductsService} from "../services/products.service";
import {ProductModel} from "../models/product";
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: any) => {
      if (Array.isArray(data)) {
        this.products = data.map((productData: any) => new ProductModel(
          productData.id,
          productData.name,
          productData.price,
          productData.image,
          productData.size,
          productData.color,
          productData.type
        ));
      } else {
        this.products = [new ProductModel(
          data.id,
          data.name,
          data.price,
          data.image,
          data.size,
          data.color,
          data.type
        )];
      }

      console.log("les produits : ", this.products);
    });
  }

}
