import { MeliSeller } from '../interfaces/mlSeller.interface';

export const fromMeliSellerToAuthor = (seller: MeliSeller) => {
  if (!seller) {
    return {
      name: '',
      lastname: ''
    };
  }

  if (seller.first_name && seller.last_name) {
    return {
      name: seller.first_name,
      lastname: seller.last_name,
    };
  }

  if (seller.nickname) {
    return {
      name: seller.nickname,
      lastname: ''
    };
  }
};
