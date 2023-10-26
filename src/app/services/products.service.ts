import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = '/api/products'; // L'URL vers la base de données simulée

  constructor(private http: HttpClient) {}

  getProducts() {
    console.log("dans le service" +this.http.get<Array<ProductModel>>(this.baseUrl))
    return this.http.get<Array<ProductModel>>(this.baseUrl);
  }
}

