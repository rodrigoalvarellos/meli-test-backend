export interface SearchResult {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];  
}

export interface Item {
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

