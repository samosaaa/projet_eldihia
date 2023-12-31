import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private baseUrl: string = '/api/products';

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<ProductModel[]> {
        this.http.get<Array<ProductModel>>(this.baseUrl).subscribe((data: ProductModel[]) => {
        });
        return this.http.get<ProductModel[]>(this.baseUrl);
    }

    getProductById(id: string): Observable<ProductModel | undefined> {

        const url = `${this.baseUrl}/${id}`;
        this.http.get<ProductModel>(url).subscribe((data) => {
        });
        return this.http.get<ProductModel>(url);
    }
}


