import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product";
import {FavorisService} from "../../services/favoris/favoris.service";
import {CartService} from "../../services/cart/cart.service";
import {SnackbarService} from "../../services/snackbar/snackbar.service";

@Component({
    selector: 'app-user-login',
    templateUrl: './favoris.component.html',
    styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
    public favoriteItems: ProductModel[] | undefined;
    public product: ProductModel | undefined;

    constructor(private favorisService: FavorisService, private cartService: CartService, private snackbarService:SnackbarService) {
    }

    ngOnInit() {
        this.favoriteItems = this.favorisService.getFavoris();
    }

    removeProductFromFavoris(product: ProductModel): void {
        this.favorisService.removeFromFavorite(product);
        this.snackbarService.openSnackBar("Unliked")

    }

    addFavToCart(favoris: ProductModel): void {
        this.cartService.addToCart(favoris);
        this.snackbarService.openSnackBar("Cette robe à été ajouté au panier.")

    }
}


