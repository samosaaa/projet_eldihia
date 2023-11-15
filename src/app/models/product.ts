export class ProductModel {
    public id: string;
    public name: string;
    public price: number;
    public image: string;
    public size: string;
    public color: string;
    public type: string;
    public favorite: boolean; // Nouvelle propriété pour indiquer si le produit est un favori


    constructor(id: string, name: string, price: number, image: string, size: string, color: string, type: string, favorite: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.size = size;
        this.color = color;
        this.type = type;
        this.favorite = favorite;
    }
}
