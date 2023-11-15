import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ProductModel} from "../../models/product";
import { tap } from 'rxjs/operators';
import {productData, productModels} from "../../mock/data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = '/api/products'; // L'URL vers la base de données simulée

  private products = productData;

    constructor(private http: HttpClient) {
  }

  getProducts() : Observable<ProductModel[]> {
    this.http.get<Array<ProductModel>>(this.baseUrl).subscribe((data: ProductModel[]) => {
    });
    return this.http.get<ProductModel[]>(this.baseUrl);
  }

  getProductById(id: string): Observable<ProductModel | undefined> {
    const url = `${this.baseUrl}/${id}`;
    this.http.get<ProductModel>(url).subscribe((data)=>{
    });
    // URL de la requête pour obtenir un produit par son ID
    return this.http.get<ProductModel>(url);
  }

}


