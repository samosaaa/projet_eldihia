import {Component, OnInit} from '@angular/core';
import {ProductModel} from "./models/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'el-dihia';
  public products : ProductModel []= [];

  constructor(private productService : ProductsService) {
    this.loadData()
  }
  public loadData(){
    this.productService.getProducts().subscribe(data =>(this.products=data));
  }
}
