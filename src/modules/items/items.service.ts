import { HttpService, Injectable } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductDetailMock } from '../../mocks/ProductDetailMock';
import { SearchResultMock } from '../../mocks/SearchResultMock';
import { fromMeliSearchToSearch } from '../../transformers/fromMeliSearchToSearch.transformer';
import { fromMeliProductDetailToProductDetail } from '../../transformers/fromMeliProductDetailToProductDetail.transformer';
import { MeliProductDetail } from 'src/interfaces/mlProductDetail.interface';
import { fromMeliCategoriesToCategories } from '../../transformers/fromMeliCategoriesToCategories.transformer';
import { fromMeliProdDescriptionToDescription } from '../../transformers/fromMeliProdDescriptionToDescription.transformer';
import { fromMeliSellerToAuthor } from '../../transformers/fromMeliSellerToAuthor.transformer';

@Injectable()
export class ItemsService {
  mlEndpoint = 'https://api.mercadolibre.com';
  mlSearchLimit = 4;
  // https://api.mercadolibre.com/items/​:id
  // https://api.mercadolibre.com/items/​:id​/description
  // https://api.mercadolibre.com/categories/:categoryId
  constructor(private httpService: HttpService) {
    this.getAuthorBySellerId('32369355');
  }

  getMockedItems() {
    return SearchResultMock;
  }

  getMockedProduct() {
    return ProductDetailMock;
  }

  async getSearchResult(queryParam: string, categoryParam: string) {

    let url = `${this.mlEndpoint}/sites/MLA/search?limit=${this.mlSearchLimit}`;

    if(queryParam) {
      url += `&q=${queryParam}`;
    }

    if(categoryParam) {
      url += `&category=${categoryParam}`;
    }

    try {
      const searchResult = await this.httpService
        .get(url)
        .pipe(map((resp) => fromMeliSearchToSearch(resp.data)))
        .toPromise();

      if (searchResult) {
        for await (const item of searchResult.items) {
          item.author = await this.getAuthorBySellerId(item.seller_id).catch(
            (error) => error,
          );
        }
      }

      return searchResult;
    } catch (error) {}
  }

  async getProductById(productId: string) {
    const url = `${this.mlEndpoint}/items/${productId}`;

    try {
      let resData: MeliProductDetail;
      const product = await this.httpService
        .get(url)
        .pipe(
          tap((resp) => (resData = resp.data)),
          map((resp) => fromMeliProductDetailToProductDetail(resp.data)),
        )
        .toPromise();

      if (product) {
        product.categories = await this.getCategoriesByProducId(
          resData.category_id,
        );

        product.item.description = await this.getProductDescriptionById(
          resData.id,
        );

        product.author = await this.getAuthorBySellerId(resData.seller_id);
      }

      return product;
    } catch (error) {
      console.log('Error fetching searched items', error);
    }
  }

  async getCategoriesByProducId(productId: string) {
    const url = `${this.mlEndpoint}/categories/${productId}`;

    try {
      const categories = await this.httpService
        .get(url)
        .pipe(map((resp) => fromMeliCategoriesToCategories(resp.data)))
        .toPromise();

      return categories;
    } catch (error) {
      console.log('error fetching categories', error);
    }

    return [];
  }

  async getProductDescriptionById(productId: string) {
    const url = `${this.mlEndpoint}/items/${productId}/description`;

    try {
      const description = await this.httpService
        .get(url)
        .pipe(map((resp) => fromMeliProdDescriptionToDescription(resp.data)))
        .toPromise();
      return description;
    } catch (error) {
      console.log('error fetching description', error);
    }

    return '';
  }

  async getAuthorBySellerId(userId: string | number) {
    const url = `${this.mlEndpoint}/users/${userId}`;

    try {
      const author = await this.httpService
        .get(url)
        .pipe(map((resp) => fromMeliSellerToAuthor(resp.data)))
        .toPromise();

      return author;
    } catch (error) {
      console.log('error fetching author', error);
    }

    return {
      name: '',
      lastname: '',
    };
  }
}
