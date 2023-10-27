import {ProductModel} from "../models/product";
import {UserModel} from "../models/user";

export const productData = [
  { id: '1', name: 'Robe 1', price: 50, image: 'assets/Robes/Robe1.jpeg',size: "M", color: "noire", type:"karakou" },
  { id: '2', name: 'Robe 2', price: 65, image: 'assets/Robes/Robe2.jpeg',size:"S", color :"noire",type:"caftan" },
  { id: '3', name: 'Robe 3', price: 90, image: 'assets/Robes/Robe3.jpeg',size:"L", color :"bleue",type:"chaoui" },
  { id: '4', name: 'Robe 4', price: 130, image: 'assets/Robes/Robe4.jpeg',size:"S", color :"noire",type:"caftan" },
];

export const productModels : ProductModel[] = productData.map(productData => {
  return new ProductModel(productData.id, productData.name, productData.price, productData.image, productData.size, productData.color, productData.type);
});
export const userData = [
  { id: '1', firstName: 'Salah', lastName: 'Bouroubi', mail: 'sbouroubi@gmail.com', mdp: '1234', role: 'admin' },
  { id: '2', firstName: 'John', lastName: 'Doe', mail: 'johndoe@gmail.com', mdp: 'password123', role: 'user' },
  { id: '3', firstName: 'Alice', lastName: 'Smith', mail: 'alicesmith@gmail.com', mdp: 'securepass', role: 'user' },
  { id: '4', firstName: 'Bob', lastName: 'Johnson', mail: 'bobjohnson@gmail.com', mdp: 'letmein', role: 'user' },
];

export const userModels : UserModel[] = userData.map(userData => {
  return new UserModel(userData.id,userData.firstName,userData.lastName,userData.mail,userData.mdp,userData.role)
});

