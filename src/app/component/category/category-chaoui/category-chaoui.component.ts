import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product";
import {ProductsService} from "../../../services/products/products.service";

@Component({
    selector: 'app-category-chaoui',
    templateUrl: './category-chaoui.component.html',
    styleUrls: ['./category-chaoui.component.scss']
})
export class CategoryChaouiComponent implements OnInit {
    public robesChaoui: ProductModel [] = []

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => {
            this.robesChaoui = data.filter(product => product.type === 'chaoui');
        });
    }
}
