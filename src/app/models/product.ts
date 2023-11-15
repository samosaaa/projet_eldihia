import {ReviewModel} from "./review";

export class ProductModel {
    public id: string;
    public name: string;
    public price: number;
    public image: string;
    public size: string;
    public color: string;
    public type: string;
    public stock:number;

    public reviews: ReviewModel[] = [];

    constructor(id: string, name: string, price: number, image: string, size: string, color: string, type: string,stock:number,reviews: ReviewModel[] = []) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.size = size;
        this.color = color;
        this.type = type;
        this.stock = stock;
        this.reviews = reviews;
    }
}
