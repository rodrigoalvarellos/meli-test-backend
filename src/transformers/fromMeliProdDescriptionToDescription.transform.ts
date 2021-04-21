import { MeliProductDescription } from "../interfaces/mlProductDescription.interface";


export const fromMeliProdDescriptionToDescription = (data: MeliProductDescription) => {

    const description = data.plain_text;

    return description;
    

}