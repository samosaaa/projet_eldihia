import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {ProductModel} from "../../models/product";
import {CartService} from "../../services/cart/cart.service";
import {AuthService} from "../../services/authentication/auth.service";
import {FavorisService} from "../../services/favoris/favoris.service";
import {SnackbarService} from "../../services/snackbar/snackbar.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  public product : ProductModel | undefined;
  isFavorite: boolean = false;

    constructor(private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService, private authService : AuthService, private favoriService:FavorisService, private router: Router, private snackbarService:SnackbarService) { }

    ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productsService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  addToCart() {
    if (this.product) {
      if (this.authService.isAuthenticatedUser()){
        this.cartService.addToCart(this.product);
        this.snackbarService.openSnackBar("Cette robe à été ajouté au panier.")

      }
      else {
        this.router.navigate(['/connexion']);
      }
    }
  }
  addToFavorite(){
    if(this.product){
      this.favoriService.addToFavorite(this.product);
      this.isFavorite = true;
      this.snackbarService.openSnackBar("Cette robe à été ajoutée au favoris.")


    }
  }
  removeFromFavorite(){
    if(this.product){
      this.favoriService.removeFromFavorite(this.product);
      this.isFavorite = false;
      this.snackbarService.openSnackBar("Cette robe à été supprimée des favoris.")

    }
  }


}
