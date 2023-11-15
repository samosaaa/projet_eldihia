import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../models/product";
import {CartService} from "../services/cart/cart.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
    cartItems: ProductModel[] | undefined;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.cartItems = this.cartService.getItems();
    }

    removeProductFromCart(product: ProductModel): void {
        this.cartService.removeFromCart(product);
    }

}
