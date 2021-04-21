import { splitAmount } from '../helpers/helpers';
import { MeliProductDetail } from '../interfaces/mlProductDetail.interface';
import { setCurrencySymbol } from '../helpers/currency';

export const fromMeliProductDetailToProductDetail = (
  data: MeliProductDetail,
) => {


  const price = splitAmount(data.price);
  
  const product = {
    author: {
      name: '',
      lastname: '',
    },
    categories: [],
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: setCurrencySymbol(data.currency_id),
        amount: price.amount,
        decimals: price.decimal,
      },
      picture: data.pictures[0].url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: '',
      permalink: data.permalink,
    },
  };

  return product;
};
