import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product";
import {ProductsService} from "../../../services/products/products.service";

@Component({
    selector: 'app-category-kabyle',
    templateUrl: './category-kabyle.component.html',
    styleUrls: ['./category-kabyle.component.scss']
})
export class CategoryKabyleComponent implements OnInit {
    public robesKabyle: ProductModel [] = []

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => {
            this.robesKabyle = data.filter(product => product.type === 'kabyle');
        });
    }
}
