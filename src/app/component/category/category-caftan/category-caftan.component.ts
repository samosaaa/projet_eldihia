import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product";
import {ProductsService} from "../../../services/products/products.service";

@Component({
  selector: 'app-category-caftan',
  templateUrl: './category-caftan.component.html',
  styleUrls: ['./category-caftan.component.scss']
})
export class CategoryCaftanComponent implements OnInit {

  robesCaftan: ProductModel [] = []

  constructor(private productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      // Filtrer les produits de type 1
      this.robesCaftan = data.filter(product => product.type === 'caftan');
    });
  }
}
