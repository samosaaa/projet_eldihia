import { Component } from '@angular/core';
import {ProductModel} from "../../models/product";
import {ProductsService} from "../../services/products/products.service";

@Component({
  selector: 'app-category-kabyle',
  templateUrl: './category-kabyle.component.html',
  styleUrls: ['./category-kabyle.component.scss']
})
export class CategoryKabyleComponent {
  robesKabyle: ProductModel [] = []

  constructor(private productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      // Filtrer les produits de type 1
      this.robesKabyle = data.filter(product => product.type === 'kabyle');
    });
  }
}
