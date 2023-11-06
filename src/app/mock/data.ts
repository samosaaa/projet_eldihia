import {ProductModel} from "../models/product";
import {UserModel} from "../models/user";

export const productData = [
    { id: '1', name: 'Robe 1', price: 50, image: 'assets/Robes/kabyle/RobeK1.jpeg', size: 'M', color: 'noire', type: 'kabyle' },
    { id: '2', name: 'Robe 2', price: 65, image: 'assets/Robes/caftan/RobeCA1.jpeg', size: 'S', color: 'noire', type: 'caftan' },
    { id: '3', name: 'Robe 3', price: 90, image: 'assets/Robes/chaoui/RobeCH1.jpeg', size: 'L', color: 'bleue', type: 'chaoui' },
    { id: '4', name: 'Robe 4', price: 130, image: 'assets/Robes/karakou/RobeKA1.jpeg', size: 'S', color: 'noire', type: 'karakou' },
    { id: '5', name: 'Robe 5', price: 50, image: 'assets/Robes/kabyle/RobeK2.jpeg', size: 'L', color: 'rouge', type: 'kabyle' },
    { id: '6', name: 'Robe 6', price: 65, image: 'assets/Robes/caftan/RobeCA2.jpeg', size: 'M', color: 'blanche', type: 'caftan' },
    { id: '7', name: 'Robe 7', price: 90, image: 'assets/Robes/chaoui/RobeCH2.jpeg', size: 'XL', color: 'verte', type: 'chaoui' },
    { id: '8', name: 'Robe 8', price: 130, image: 'assets/Robes/karakou/RobeKA2.jpeg', size: 'M', color: 'dorée', type: 'karakou' },
    { id: '9', name: 'Robe 9', price: 55, image: 'assets/Robes/kabyle/RobeK3.jpeg', size: 'S', color: 'violette', type: 'kabyle' },
    { id: '10', name: 'Robe 10', price: 70, image: 'assets/Robes/caftan/RobeCA3.jpeg', size: 'M', color: 'noire', type: 'caftan' },
    { id: '11', name: 'Robe 11', price: 95, image: 'assets/Robes/chaoui/RobeCH3.jpeg', size: 'L', color: 'rouge', type: 'chaoui' },
    { id: '12', name: 'Robe 12', price: 140, image: 'assets/Robes/karakou/RobeKA3.jpeg', size: 'S', color: 'blanche', type: 'karakou' },
    { id: '13', name: 'Robe 13', price: 60, image: 'assets/Robes/kabyle/RobeK4.jpeg', size: 'L', color: 'bleue', type: 'kabyle' },
    { id: '14', name: 'Robe 14', price: 75, image: 'assets/Robes/caftan/RobeCA4.jpeg', size: 'S', color: 'verte', type: 'caftan' },
    { id: '15', name: 'Robe 15', price: 100, image: 'assets/Robes/chaoui/RobeCH4.jpeg', size: 'M', color: 'dorée', type: 'chaoui' },
    { id: '16', name: 'Robe 16', price: 150, image: 'assets/Robes/karakou/RobeKA4.jpeg', size: 'XL', color: 'violette', type: 'karakou' }
  ]
;

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

