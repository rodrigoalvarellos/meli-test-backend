export interface Address {
  city: string;
  state: string;
}

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

export interface Transactions {
  canceled: number;
  completed: number;
  period: string;
  ratings: Ratings;
  total: number;
}

export interface SellerReputation {
  level_id: string;
  power_seller_status?: any;
  transactions: Transactions;
}

export interface BuyerReputation {
  tags: any[];
}

export interface Status {
  site_status: string;
}

export interface MeliSeller {
  id: number;
  nickname: string;
  first_name: string;
  last_name: string;
  registration_date: Date;
  country_id: string;
  address: Address;
  user_type: string;
  tags: string[];
  logo?: any;
  points: number;
  site_id: string;
  permalink: string;
  seller_reputation: SellerReputation;
  buyer_reputation: BuyerReputation;
  status: Status;
}
