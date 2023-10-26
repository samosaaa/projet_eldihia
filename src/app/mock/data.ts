import {ProductModel} from "../models/product";

export const productData = [
  { id: '1', name: 'Robe 1', price: 50, image: '/assets/Robes/Robe1.jpg',size: "M", color: "noire", type:"karakou" },
  { id: '2', name: 'Robe 2', price: 65, image: '/assets/Robes/Robe2.jpg',size:"S", color :"noire",type:"caftan" },
];

export const productModels = productData.map(product => {
  return new ProductModel(product.id, product.name, product.price, product.image, product.size, product.color, product.type);
});
