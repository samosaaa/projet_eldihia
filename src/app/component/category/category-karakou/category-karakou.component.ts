import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product";
import {ProductsService} from "../../../services/products/products.service";

@Component({
    selector: 'app-category-karakou',
    templateUrl: './category-karakou.component.html',
    styleUrls: ['./category-karakou.component.scss']
})
export class CategoryKarakouComponent implements OnInit {
    public robesKarakou: ProductModel [] = [];
    public robesFiltrees : ProductModel[]=[];
    public selectedSize: string | null = null;
    public selectedColor: string | null = null;

    public availableSizes: string[] = ['S', 'M', 'L', 'XL'];
    public availableColors: string[] = ['blanc', 'bleue', 'verte', 'rouge'];

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe(data => {
            this.robesKarakou = data.filter(product => product.type === 'karakou');
            this.robesFiltrees = this.robesKarakou;
        });
    }

    filterDresses(): void {
        // Méthode pour filtrer les robes en fonction de la taille et de la couleur sélectionnées
        this.robesFiltrees = this.robesKarakou.filter((robeKarakou) => {
            if (this.selectedSize && robeKarakou.size !== this.selectedSize) {
                return false;
            }
            if (this.selectedColor && robeKarakou.color !== this.selectedColor) {
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
