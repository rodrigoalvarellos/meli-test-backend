import { MeliCategory } from '../interfaces/mlCategory.interface';

export const fromMeliCategoriesToCategories = (data: MeliCategory) => {
  const categories = data.path_from_root;
  return categories;
};
