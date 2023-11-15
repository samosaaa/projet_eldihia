import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product";
import {ProductsService} from "../../../services/products/products.service";

@Component({
    selector: 'app-category-caftan',
    templateUrl: './category-caftan.component.html',
    styleUrls: ['./category-caftan.component.scss']
})
export class CategoryCaftanComponent implements OnInit {

    public robesCaftan: ProductModel [] = [];
    public robesFiltrees : ProductModel[]=[];
    public selectedSize: string | null = null;
    public selectedColor: string | null = null;

    public availableSizes: string[] = ['S', 'M', 'L', 'XL'];
    public availableColors: string[] = ['blanc', 'bleue', 'verte', 'rouge'];

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => {
            this.robesCaftan = data.filter(product => product.type === 'caftan');
            this.robesFiltrees = this.robesCaftan;
        });
    }

    filterDresses(): void {
        // Méthode pour filtrer les robes en fonction de la taille et de la couleur sélectionnées
        this.robesFiltrees = this.robesCaftan.filter((robeCaftan) => {
            if (this.selectedSize && robeCaftan.size !== this.selectedSize) {
                return false;
            }
            if (this.selectedColor && robeCaftan.color !== this.selectedColor) {
                return false;
            }
            return true;
        });
    }
    // Méthodes pour déclencher le filtrage en réponse aux changements de sélection
    onSizeChange(event: Event):void {
        const target = event.target as HTMLSelectElement;
        this.selectedSize = target.value;
        this.filterDresses();
    }

    onColorChange(event: Event):void {
        const target = event.target as HTMLSelectElement;
        this.selectedColor = target.value;
        this.filterDresses();
    }
    resetFilters():void {
        this.selectedSize = '';
        this.selectedColor = '';
        this.filterDresses();
    }
}
