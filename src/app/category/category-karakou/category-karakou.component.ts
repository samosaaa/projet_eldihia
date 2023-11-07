import { Component } from '@angular/core';
import {ProductModel} from "../../models/product";
import {ProductsService} from "../../services/products/products.service";

@Component({
  selector: 'app-category-karakou',
  templateUrl: './category-karakou.component.html',
  styleUrls: ['./category-karakou.component.scss']
})
export class CategoryKarakouComponent {
  robesKarakou: ProductModel [] = []

  constructor(private productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.robesKarakou = data.filter(product => product.type === 'karakou');
    });
  }
}
