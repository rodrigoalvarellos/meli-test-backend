import { MeliProductDetail } from "../interfaces/mlProductDetail.interface";


export const fromMeliProductDetailToProductDetail = ( data: MeliProductDetail ) => {



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
              currency: data.currency_id,
              amount: data.price,
              decimals: 0,
            },
            picture: data.pictures[0].url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: '',
            permalink: data.permalink,
          }
    }

    return product;

}