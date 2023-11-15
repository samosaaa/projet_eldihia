import { Injectable } from '@angular/core';
import {ProductModel} from "../../models/product";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: ProductModel[] = [];

  addToCart(product: ProductModel) {
    this.items.push(product);
  }
  getItems(): ProductModel[] {
    return this.items;
  }
  removeFromCart(product: ProductModel) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
