import { MeliSearchResponse } from '../interfaces/mlSearchResponse.interface';
import { setCurrencySymbol, splitAmount } from '../helpers/currency';
import { SearchResult } from '../interfaces/searchResult.interface';

/**
 *  Transform the search results  of the ML api to SearchResult type.
 */
export const fromMeliSearchToSearch = (data: MeliSearchResponse) => {
  const categories = data.filters.find((filter) => (filter.id = 'category'))
    .values[0].path_from_root;

  const items = data.results.map((it) => {
    const price = splitAmount(it.price);

    return {
      id: it.id,
      seller_id: it.seller.id,
      author: {
        name: '',
        lastname: '',
      },
      title: it.title,
      price: {
        currency: setCurrencySymbol(it.currency_id),
        amount: price.amount,
        decimals: price.decimal,
      },
      picture: it.thumbnail,
      condition: it.condition,
      free_shipping: it.shipping.free_shipping,
      address: {
        state: it.address.state_name,
      },
    };
  });

  const result: SearchResult = {
    categories: categories,
    items: items,
  };

  return result;
};
