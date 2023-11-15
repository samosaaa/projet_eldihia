import { Injectable } from '@angular/core';
import {ProductModel} from "../../models/product";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: ProductModel[] = [];

  addToCart(product: ProductModel) {
    this.items.push(product);
    console.log("je suis dans le service dans la fonction pour add un produit ", product)
    console.log("je suis dans le service aprés avoir add voici items : ",this.items)
  }
  getItems(): ProductModel[] {
    console.log("je suis dans le get du service : ",this.items)
    return this.items;
  }
  removeFromCart(product: ProductModel) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log("Item removed from cart:", product);
    }
  }
}