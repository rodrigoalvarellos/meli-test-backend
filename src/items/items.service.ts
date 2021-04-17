import { Injectable } from '@nestjs/common';

const ITEMS = [
  {
    author: {
      name: 'Rodrigo',
      lastname: 'Alvarellos',
    },
    categories: ['Bicicletas', 'Mountain-Bike', 'R29', 'Aluminio'],
    items: [
      {
        id: '1',
        title: 'Bicicleta roja',
        price: {
          currency: '$',
          amount: '12000',
          decimals: '00',
        },
        picture:
          'http://http2.mlstatic.com/D_908600-MLA32582065628_102019-I.jpg',
        condition: 'Nuevo',
        free_shipping: 'true',
      },
    ],
  },
];

@Injectable()
export class ItemsService {
  getItemsByFilter() {
    return ITEMS;
  }
}
