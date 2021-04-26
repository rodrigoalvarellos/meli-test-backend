import { MeliProductDetail } from '../interfaces/mlProductDetail.interface';
import { setCurrencySymbol, splitAmount } from '../helpers/currency';
import { ProductDetailItem } from '../interfaces/product-detail.iterface';

/**
 *  Transform the product detail of the ML api to ProductDetailItem type.
 */
export const fromMeliProductDetailToProductDetail = (
  data: MeliProductDetail,
): ProductDetailItem  => {
  const price = splitAmount(data.price);

  const product: ProductDetailItem = {
    author: {
      name: '',
      lastname: '',
    },
    categories: [],
    item: {
      id: data.id,
      seller_id: data.seller_id,
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
