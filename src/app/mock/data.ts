import {ProductModel} from "../models/product";

export const productData = [
  { id: '1', name: 'Robe 1', price: 50, image: 'assets/Robes/Robe1.jpeg',size: "M", color: "noire", type:"karakou" },
  { id: '2', name: 'Robe 2', price: 65, image: 'assets/Robes/Robe2.jpeg',size:"S", color :"noire",type:"caftan" },
  { id: '3', name: 'Robe 3', price: 90, image: 'assets/Robes/Robe3.jpeg',size:"L", color :"bleue",type:"chaoui" },
  { id: '4', name: 'Robe 4', price: 130, image: 'assets/Robes/Robe4.jpeg',size:"S", color :"noire",type:"caftan" },
];

export const productModels : ProductModel[] = productData.map(productData => {
  return new ProductModel(productData.id, productData.name, productData.price, productData.image, productData.size, productData.color, productData.type);
});


