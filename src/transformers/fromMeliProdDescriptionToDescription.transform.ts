import { MeliProductDescription } from '../interfaces/mlProductDescription.interface';

/**
 *  Transform the product description of the ML api to description string.
 */
export const fromMeliProdDescriptionToDescription = (
  data: MeliProductDescription,
): string => {
  const description: string = data.plain_text;
  return description;
};
