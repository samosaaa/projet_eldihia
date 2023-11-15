import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products/products.service";
import {ProductModel} from "../../models/product";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
    products: ProductModel[] = [];

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.loadData();
    }

    public loadData() {
        this.productsService.getProducts().subscribe(data => (this.products = data));
    }

    protected readonly first = first;
}
