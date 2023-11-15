import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {ProductModel} from "../../models/product";
import {map} from "rxjs";
import {FavorisService} from "../../services/favoris/favoris.service";

@Component({
    selector: 'app-user-login',
    templateUrl: './favoris.component.html',
    styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit{
    panelOpenState = false;

    favoriteItems : ProductModel[] | undefined;

    constructor( private favorisService: FavorisService) {
    }
    ngOnInit() {
        this.favoriteItems = this.favorisService.getFavoris();
    }

    removeProductFromFavoris(product:ProductModel):void{
        this.favorisService.removeFromFavorite(product);

    }

}


