import { Category } from '../interfaces/category.interface';
import { Author } from './author.interface';
export interface SearchResult {  
  categories: Category[];
  items: Item[];
}

export interface Item {
  author: Author;
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
  address: {
    state: string;
  }
}

