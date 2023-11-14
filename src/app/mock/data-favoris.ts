import {FavorisModel} from "../models/favoris";
import {ProductModel} from "../models/product";

export const favorisData = [
    {
      id: '1',
      name: 'Yasmina',
      price: 50,
      image: 'assets/Robes/kabyle/RobeK1.jpeg',
      size: 'M',
      color: 'blanc',
      type: 'kabyle'
    },
    {
      id: '2',
      name: 'Lina',
      price: 65,
      image: 'assets/Robes/caftan/RobeCA1.jpeg',
      size: 'S',
      color: 'verte',
      type: 'caftan'
    },
    {
      id: '3',
      name: 'Nora',
      price: 90,
      image: 'assets/Robes/chaoui/RobeCH1.jpeg',
      size: 'L',
      color: 'bleue',
      type: 'chaoui'
    },
    {
      id: '4',
      name: 'Amel',
      price: 130,
      image: 'assets/Robes/karakou/RobeKA1.jpeg',
      size: 'S',
      color: 'rouge',
      type: 'karakou'
    },
    {
      id: '5',
      name: 'Fella',
      price: 50,
      image: 'assets/Robes/kabyle/RobeK2.jpeg',
      size: 'L',
      color: 'blanc',
      type: 'kabyle'
    },
    {
      id: '6',
      name: 'Nadia',
      price: 65,
      image: 'assets/Robes/caftan/RobeCA2.jpeg',
      size: 'M',
      color: 'noire',
      type: 'caftan'
    },
    {
      id: '11',
      name: 'Nawal',
      price: 95,
      image: 'assets/Robes/chaoui/RobeCH3.jpeg',
      size: 'L',
      color: 'dorée',
      type: 'chaoui'
    },
    {
      id: '8',
      name: 'Mounia',
      price: 130,
      image: 'assets/Robes/karakou/RobeKA2.jpeg',
      size: 'M',
      color: 'verte',
      type: 'karakou'
    },
    {
      id: '9',
      name: 'Lydia',
      price: 55,
      image: 'assets/Robes/kabyle/RobeK3.jpeg',
      size: 'S',
      color: 'blanc',
      type: 'kabyle'
    },
    {
      id: '10',
      name: 'Sihem',
      price: 70,
      image: 'assets/Robes/caftan/RobeCA3.jpeg',
      size: 'M',
      color: 'verte',
      type: 'caftan'
    },
    {
      id: '7',
      name: 'Djouher',
      price: 90,
      image: 'assets/Robes/chaoui/RobeCH2.jpeg',
      size: 'XL',
      color: 'bleue',
      type: 'chaoui'
    },
    {
      id: '12',
      name: 'Dalila',
      price: 140,
      image: 'assets/Robes/karakou/RobeKA3.jpeg',
      size: 'S',
      color: 'bleue',
      type: 'karakou'
    },
    {
      id: '13',
      name: 'Tassadit',
      price: 60,
      image: 'assets/Robes/kabyle/RobeK4.jpeg',
      size: 'L',
      color: 'blanc',
      type: 'kabyle'
    },
    {
      id: '14',
      name: 'Farida',
      price: 75,
      image: 'assets/Robes/caftan/RobeCA4.jpeg',
      size: 'S',
      color: 'verte',
      type: 'caftan'
    },
    {
      id: '15',
      name: 'Zina',
      price: 100,
      image: 'assets/Robes/chaoui/RobeCH4.jpeg',
      size: 'M',
      color: 'bleue',
      type: 'chaoui'
    },
    {
      id: '16',
      name: 'Wahiba',
      price: 150,
      image: 'assets/Robes/karakou/RobeKA4.jpeg',
      size: 'XL',
      color: 'bleue',
      type: 'karakou'
    },
    {
      id: '17',
      name: 'Soraya',
      price: 80,
      image: 'assets/Robes/karakou/RobeKA5.jpeg',
      size: 'M',
      color: 'noire',
      type: 'karakou'
    },
    {
      id: '18',
      name: 'Samia',
      price: 70,
      image: 'assets/Robes/karakou/RobeKA6.jpeg',
      size: 'S',
      color: 'noire',
      type: 'karakou'
    },
    {
      id: '19',
      name: 'Amina',
      price: 90,
      image: 'assets/Robes/karakou/RobeKA7.jpeg',
      size: 'L',
      color: 'rouge',
      type: 'karakou'
    }
  ]

;

export const favorisModels: FavorisModel[] = favorisData.map(favorisData => {
  return new FavorisModel(favorisData.id, favorisData.name, favorisData.price, favorisData.image, favorisData.size, favorisData.color, favorisData.type);
});

