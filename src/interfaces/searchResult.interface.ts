export interface SearchResult {  
  categories: string[];
  items: Item[];
}

export interface Item {
  author: {
    name: string;
    lastname: string;
  };
  id: string;
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

