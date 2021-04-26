import { Category } from '../interfaces/category.interface';
import { Author } from './author.interface';
export interface ProductDetailItem {
    author: Author;
    categories: Category[],
    item: ItemPD
  }

  export interface ItemPD {
    id: string;
    seller_id: string | number;
    title: string;
    price: {
      currency: string;
      amount: string;
      decimals: string;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    permalink: string;
    
  }
  