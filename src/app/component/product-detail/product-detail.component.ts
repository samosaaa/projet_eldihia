import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";
import {ProductModel} from "../../models/product";
import {FavorisService} from "../../services/favoris/favoris.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: ProductModel | undefined;
  isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, public productsService: ProductsService, private favoriService:FavorisService) {
  }


  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productsService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  addToFavorite(){
    if(this.product){
      this.favoriService.addToFavorite(this.product);
      this.isFavorite = true;

    }
  }
  removeFromFavorite(){
    if(this.product){
      this.favoriService.removeFromFavorite(this.product);
      this.isFavorite = false;

    }
  }


}
