import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {Observable, switchMap} from "rxjs";
import {ProductModel} from "../../models/product";

@Injectable({
    providedIn: 'root'
})
export class AdminProductsService {
    private baseUrl = '/api/products'; // L'URL vers la base de données simulée

    constructor(private http: HttpClient) {
    }

    getAllProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(this.baseUrl);
    }

    updateStock(productId: string, action: 'increment' | 'decrement'): Observable<void> {
        const url = `${this.baseUrl}/${action}/${productId}`;
        return this.http.put<void>(url, {});
    }
}
