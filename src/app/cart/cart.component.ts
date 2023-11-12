import { Component } from '@angular/core';
import {ProductModel} from "../models/product";
import {CartService} from "../services/cart/cart.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: ProductModel[] | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    console.log("je suis dans le ts du panier et voici le panier : ",this.cartItems);
  }
}
