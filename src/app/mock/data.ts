import {ProductModel} from "../models/product";
import {UserModel} from "../models/user";

// mock/data.ts

export const productData = [
        {
            id: '1',
            name: 'Yasmina',
            price: 50,
            image: 'assets/Robes/kabyle/RobeK1.jpeg',
            size: 'M',
            color: 'blanc',
            type: 'kabyle',
            stock: 10
        },
        {
            id: '2',
            name: 'Lina',
            price: 65,
            image: 'assets/Robes/caftan/RobeCA1.jpeg',
            size: 'S',
            color: 'verte',
            type: 'caftan',
            stock: 15
        },
        {
            id: '3',
            name: 'Nora',
            price: 90,
            image: 'assets/Robes/chaoui/RobeCH1.jpeg',
            size: 'L',
            color: 'bleue',
            type: 'chaoui',
            stock: 8
        },
        {
            id: '4',
            name: 'Amel',
            price: 130,
            image: 'assets/Robes/karakou/RobeKA1.jpeg',
            size: 'S',
            color: 'rouge',
            type: 'karakou',
            stock: 12
        },
        {
            id: '5',
            name: 'Fella',
            price: 50,
            image: 'assets/Robes/kabyle/RobeK2.jpeg',
            size: 'L',
            color: 'blanc',
            type: 'kabyle',
            stock: 5
        },
        {
            id: '6',
            name: 'Nadia',
            price: 65,
            image: 'assets/Robes/caftan/RobeCA2.jpeg',
            size: 'M',
            color: 'noire',
            type: 'caftan',
            stock: 20
        },
        {
            id: '7',
            name: 'Djouher',
            price: 90,
            image: 'assets/Robes/chaoui/RobeCH2.jpeg',
            size: 'XL',
            color: 'bleue',
            type: 'chaoui',
            stock: 15
        },
        {
            id: '8',
            name: 'Mounia',
            price: 130,
            image: 'assets/Robes/karakou/RobeKA2.jpeg',
            size: 'M',
            color: 'verte',
            type: 'karakou',
            stock: 10
        },
        {
            id: '9',
            name: 'Lydia',
            price: 55,
            image: 'assets/Robes/kabyle/RobeK3.jpeg',
            size: 'S',
            color: 'blanc',
            type: 'kabyle',
            stock: 7
        },
        {
            id: '10',
            name: 'Sihem',
            price: 70,
            image: 'assets/Robes/caftan/RobeCA3.jpeg',
            size: 'M',
            color: 'verte',
            type: 'caftan',
            stock: 18
        },
        {
            id: '11',
            name: 'Nawal',
            price: 95,
            image: 'assets/Robes/chaoui/RobeCH3.jpeg',
            size: 'L',
            color: 'dorée',
            type: 'chaoui',
            stock: 9
        },
        {
            id: '12',
            name: 'Dalila',
            price: 140,
            image: 'assets/Robes/karakou/RobeKA3.jpeg',
            size: 'S',
            color: 'bleue',
            type: 'karakou',
            stock: 13
        },
        {
            id: '13',
            name: 'Tassadit',
            price: 60,
            image: 'assets/Robes/kabyle/RobeK4.jpeg',
            size: 'L',
            color: 'blanc',
            type: 'kabyle',
            stock: 6
        },
        {
            id: '14',
            name: 'Farida',
            price: 75,
            image: 'assets/Robes/caftan/RobeCA4.jpeg',
            size: 'S',
            color: 'verte',
            type: 'caftan',
            stock: 11
        },
        {
            id: '15',
            name: 'Zina',
            price: 100,
            image: 'assets/Robes/chaoui/RobeCH4.jpeg',
            size: 'M',
            color: 'bleue',
            type: 'chaoui',
            stock: 14
        },
        {
            id: '16',
            name: 'Wahiba',
            price: 150,
            image: 'assets/Robes/karakou/RobeKA4.jpeg',
            size: 'XL',
            color: 'bleue',
            type: 'karakou',
            stock: 17
        },
        {
            id: '17',
            name: 'Soraya',
            price: 80,
            image: 'assets/Robes/karakou/RobeKA5.jpeg',
            size: 'M',
            color: 'noire',
            type: 'karakou',
            stock: 22
        },
        {
            id: '18',
            name: 'Samia',
            price: 70,
            image: 'assets/Robes/karakou/RobeKA6.jpeg',
            size: 'S',
            color: 'noire',
            type: 'karakou',
            stock: 19
        },
        {
            id: '19',
            name: 'Amina',
            price: 90,
            image: 'assets/Robes/karakou/RobeKA7.jpeg',
            size: 'L',
            color: 'rouge',
            type: 'karakou',
            stock: 25
        }
    ]

;

export const productModels: ProductModel[] = productData.map(productData => {
    return new ProductModel(productData.id, productData.name, productData.price, productData.image, productData.size, productData.color, productData.type,productData.stock);
});
export const userData = [
    {firstName: 'Salah', lastName: 'Bouroubi', mail: 'sbouroubi@gmail.com', mdp: '1234', role: 'admin'},
    {firstName: 'Samra', lastName: 'Abdul', mail: 'samra@admin.admin', mdp: 'samosa', role: 'admin'},
    {firstName: 'John', lastName: 'Doe', mail: 'johndoe@gmail.com', mdp: 'password123', role: 'user'},
    {firstName: 'Alice', lastName: 'Smith', mail: 'alicesmith@gmail.com', mdp: 'securepass', role: 'user'},
    {firstName: 'Bob', lastName: 'Johnson', mail: 'bobjohnson@gmail.com', mdp: 'letmein', role: 'user'},
];

export const users: UserModel[] = userData.map(userData => {
    return new UserModel(userData.firstName, userData.lastName, userData.mail, userData.mdp, userData.role)
});

