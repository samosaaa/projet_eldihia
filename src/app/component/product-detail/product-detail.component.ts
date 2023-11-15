import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {ProductModel} from "../../models/product";
import {CartService} from "../../services/cart/cart.service";
import {AuthService} from "../../services/authentication/auth.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  public product : ProductModel | undefined;
  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService, private authService : AuthService,private router: Router) { }

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
      }
      else {
        this.router.navigate(['/connexion']);
      }
    }
  }
}
