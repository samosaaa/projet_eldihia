import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = '/api/products'; // L'URL vers la base de données simulée

  constructor(private http: HttpClient) {}

  getProducts() : Observable<ProductModel[]> {
    console.log("dans le service" +this.http.get<Array<ProductModel>>(this.baseUrl));
    this.http.get<Array<ProductModel>>(this.baseUrl).subscribe((data: ProductModel[]) => {
        console.log("Les produits : ", data);
    });
    return this.http.get<ProductModel[]>(this.baseUrl);
  }
}

