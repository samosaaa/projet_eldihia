import {Component} from '@angular/core';
import {AdminProductsService} from '../services/adminProducts/admin-products.service';
import {ProductModel} from "../models/product";
import {map, Observable, of, switchMap, tap} from "rxjs";


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    public products$: Observable<ProductModel[]> | undefined;

    constructor(private adminProductsService: AdminProductsService) {
    }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.products$ = this.adminProductsService.getAllProducts();
    }

// admin.component.ts
    updateStock(product: ProductModel, action: 'increment' | 'decrement'): void {
        this.adminProductsService.updateStock(product.id, action).subscribe(() => {
            this.loadProducts();  // Actualiser la liste des produits après l'incrémentation/décrémentation
        });
    }

}

