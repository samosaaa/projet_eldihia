import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product";
import {CartService} from "../../services/cart/cart.service";
import {SnackbarService} from "../../services/snackbar/snackbar.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    public cartItems: ProductModel[] | undefined;

    constructor(private cartService: CartService, private snackbarService: SnackbarService ) {
    }

    ngOnInit(): void {
        this.cartItems = this.cartService.getItems();
    }

    removeProductFromCart(product: ProductModel): void {
        this.cartService.removeFromCart(product);
        this.snackbarService.openSnackBar("Cette robe à été supprimée du panier.")

    }

}
