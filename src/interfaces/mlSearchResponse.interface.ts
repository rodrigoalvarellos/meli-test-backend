export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Eshop {
  nick_name: string;
  eshop_rubro?: any;
  eshop_id: number;
  eshop_locations: any[];
  site_id: string;
  eshop_logo_url: string;
  eshop_status_id: number;
  seller: number;
  eshop_experience: number;
}

export interface Ratings {
  negative: number;
  positive: number;
  neutral: number;
}

export interface Transactions {
  total: number;
  canceled: number;
  period: string;
  ratings: Ratings;
  completed: number;
}

export interface Excluded {
  real_rate: number;
  real_value: number;
}

export interface Claims {
  rate: number;
  value: number;
  period: string;
  excluded: Excluded;
}

export interface Excluded2 {
  real_rate: number;
  real_value: number;
}

export interface DelayedHandlingTime {
  rate: number;
  value: number;
  period: string;
  excluded: Excluded2;
}

export interface Sales {
  period: string;
  completed: number;
}

export interface Excluded3 {
  real_rate: number;
  real_value: number;
}

export interface Cancellations {
  rate: number;
  value: number;
  period: string;
  excluded: Excluded3;
}

export interface Metrics {
  claims: Claims;
  delayed_handling_time: DelayedHandlingTime;
  sales: Sales;
  cancellations: Cancellations;
}

export interface SellerReputation {
  transactions: Transactions;
  power_seller_status: string;
  metrics: Metrics;
  level_id: string;
  protection_end_date?: Date;
  real_level: string;
}

export interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  eshop: Eshop;
  seller_reputation: SellerReputation;
}

export interface Conditions {
  context_restrictions: any[];
  start_time?: Date;
  end_time?: Date;
  eligible: boolean;
}

export interface Metadata {
  campaign_id: string;
  promotion_id: string;
  promotion_type: string;
  discount_meli_amount?: number;
  campaign_discount_percentage?: number;
  campaign_end_date?: Date;
  order_item_price?: number;
}

export interface Price {
  id: string;
  type: string;
  conditions: Conditions;
  amount: number;
  regular_amount?: number;
  currency_id: string;
  exchange_rate_context: string;
  metadata: Metadata;
  last_updated: Date;
}

export interface Presentation {
  display_currency: string;
}

export interface Prices {
  id: string;
  prices: Price[];
  presentation: Presentation;
  payment_method_prices: any[];
  reference_prices: any[];
  purchase_discounts: any[];
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

export interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
}

export interface Country {
  id: string;
  name: string;
}

export interface State {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Country;
  state: State;
  city: City;
  latitude: string;
  longitude: string;
}

export interface Struct {
  unit: string;
  number: number;
}

export interface Value {
  source: any;
  id: string;
  name: string;
  struct: Struct;
}

export interface ValueStruct {
  number: number;
  unit: string;
}

export interface Attribute {
  value_id: string;
  value_name: string;
  values: Value[];
  attribute_group_id: string;
  attribute_group_name: string;
  id: string;
  name: string;
  value_struct: ValueStruct;
  source: any;
}

export interface DifferentialPricing {
  id: number;
}

export interface Result {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price?: any;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price?: number;
  category_id: string;
  official_store_id?: any;
  domain_id: string;
  catalog_product_id: string;
  tags: string[];
  catalog_listing: boolean;
  use_thumbnail_id: boolean;
  order_backend: number;
  differential_pricing: DifferentialPricing;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface Value2 {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

export interface Value3 {
  id: string;
  name: string;
  results: number;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value3[];
}

export interface MeliSearchResponse {
  site_id: string;
  query: string;
  paging: Paging;
  results: Result[];
  secondary_results: any[];
  related_results: any[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}
