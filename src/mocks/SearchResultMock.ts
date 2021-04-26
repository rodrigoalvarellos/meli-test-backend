import { SearchResult } from "../interfaces/searchResult.interface";

export const SearchResultMock: SearchResult = {
  categories: [
    {
      id: 'MLA1051',
      name: 'Celulares y Teléfonos',
    },
    {
      id: 'MLA1055',
      name: 'Celulares y Smartphones',
    },
  ],
  items: [
    {
      id: 'MLA915289303',
      seller_id: 26941396,
      author: {
        name: 'MT-ELECTRO',
        lastname: '',
      },
      title: 'iPhone 11 64 Gb Negro',
      price: {
        currency: '$',
        amount: '134.999',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg',
      condition: 'new',
      free_shipping: true,
      address: {
        state: 'Capital Federal',
      },
    },
    {
      id: 'MLA915796743',
      seller_id: 26941396,
      author: {
        name: 'MT-ELECTRO',
        lastname: '',
      },
      title: 'iPhone 11 128 Gb Negro',
      price: {
        currency: '$',
        amount: '148.000',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_738648-MLA43654417399_102020-I.jpg',
      condition: 'new',
      free_shipping: true,
      address: {
        state: 'Capital Federal',
      },
    },
    {
      id: 'MLA917322558',
      seller_id: 6673807,
      author: {
        name: 'IDENTIKITNET',
        lastname: '',
      },
      title: ' iPhone SE (2nd Generation) 64 Gb Blanco',
      price: {
        currency: '$',
        amount: '89.990',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_732162-MLA42320762979_062020-I.jpg',
      condition: 'new',
      free_shipping: true,
      address: {
        state: 'Río Negro',
      },
    },
    {
      id: 'MLA912462032',
      seller_id: 208137579,
      author: {
        name: 'ONECLICKARG',
        lastname: '',
      },
      title: ' iPhone SE (2nd Generation) 128 Gb Negro',
      price: {
        currency: '$',
        amount: '97.300',
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_896633-MLA42320762680_062020-I.jpg',
      condition: 'new',
      free_shipping: true,
      address: {
        state: 'Santa Fe',
      },
    },
  ],
};
