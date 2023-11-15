import {Component} from '@angular/core';
import {ProductModel} from "./models/product";
import {ProductsService} from "./services/products/products.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'el-dihia';
    public products: ProductModel [] = [];

    constructor(private productService: ProductsService) {
        productService.getProducts().subscribe((data: ProductModel[]) => {
        });
    }


}
