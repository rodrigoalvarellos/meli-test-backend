import { Category } from './../interfaces/category.interface';
import { MeliCategory } from '../interfaces/mlCategory.interface';

/**
 *  Transform the list of categories of the ML api to the format required by the Category interface
 */
export const fromMeliCategoriesToCategories = (data: MeliCategory) => {
  const categories: Category[] = data.path_from_root;
  return categories;
};
