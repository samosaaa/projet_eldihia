// favoris.service.ts
import { Injectable } from '@angular/core';
import { ProductModel } from "../../models/product";

@Injectable({
  providedIn: 'root',
})
export class FavorisService {
  public favoris: ProductModel[] = [];

  addToFavorite(product:ProductModel){
    this.favoris.push(product);
  }

  getFavoris(): ProductModel[] {
    return this.favoris;
  }
  removeFromFavorite(product:ProductModel){
    const index = this.favoris.findIndex(favori => favori.id === product.id);
    if (index!==-1){
      this.favoris.splice(index,1);
    }
  }




}
