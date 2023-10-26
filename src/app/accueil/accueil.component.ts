import {Component, OnInit} from '@angular/core';
import { ProductsService} from "../services/products.service";
import {ProductModel} from "../models/product";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent{
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService, private route:ActivatedRoute) {
    this.loadData();
  }
    public loadData(){
        this.productsService.getProducts().subscribe(data =>(this.products=data));
        console.log(this.products);
    }
}
