import { Author } from '../interfaces/author.interface';
import { MeliSeller } from '../interfaces/mlSeller.interface';

/**
 *  Transform the seller data of the ML api to Author type.
 */
export const fromMeliSellerToAuthor = (seller: MeliSeller): Author => {
  let author: Author;

  if (!seller) {
    author = {
      name: '',
      lastname: '',
    };
  }

  if (seller.first_name && seller.last_name) {
    author = {
      name: seller.first_name,
      lastname: seller.last_name,
    };
  }

  if (seller.nickname) {
    author = {
      name: seller.nickname,
      lastname: '',
    };
  }

  return author;
};
