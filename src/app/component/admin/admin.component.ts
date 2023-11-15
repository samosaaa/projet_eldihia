import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product";
import {ProductsService} from "../../services/products/products.service";


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
    public products: ProductModel[] = [];

    constructor(private productService: ProductsService) {}

    ngOnInit(): void {
        // Charger la liste des produits depuis le service de produit
        this.productService.getProducts().subscribe((products) => {
            this.products = products;
        });
    }
}

