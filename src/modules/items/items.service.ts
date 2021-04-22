import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { ProductDetailMock } from '../../mocks/ProductDetailMock';
import { SearchResultMock } from '../../mocks/SearchResultMock';
import { fromMeliSearchToSearch } from '../../transformers/fromMeliSearchToSearch.transform';
import { fromMeliProductDetailToProductDetail } from '../../transformers/fromMeliProductDetailToProductDetail.transform';
import { MeliProductDetail } from 'src/interfaces/mlProductDetail.interface';
import { fromMeliCategoriesToCategories } from '../../transformers/fromMeliCategoriesToCategories.transform';
import { fromMeliProdDescriptionToDescription } from '../../transformers/fromMeliProdDescriptionToDescription.transform';
import { fromMeliSellerToAuthor } from '../../transformers/fromMeliSellerToAuthor.transform';
import { SearchResult } from '../../interfaces/searchResult.interface';
import { ProductDetailItem } from '../../interfaces/product-detail.iterface';
import { Category } from '../../interfaces/category.interface';
import { Author } from '../../interfaces/author.interface';

@Injectable()
export class ItemsService {
  mlEndpoint = 'https://api.mercadolibre.com';
  mlSearchLimit = 4;

  constructor(private httpService: HttpService) {}

  /**
   * Get a list of products by queryString or categoryId of ML api. 
   * @params { queryParam, categoryParam }
   * @return {promise}
   */
  async getSearchResult(queryParam: string, categoryParam: string): Promise<SearchResult> {
    let url = `${this.mlEndpoint}/sites/MLA/search?limit=${this.mlSearchLimit}`;

    if (queryParam) {
      url += `&q=${queryParam}`;
    }

    if (categoryParam) {
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
    } catch (error) {
      console.log('Error getting Search', { queryParam, categoryParam });
      throw new NotFoundException(
        {
          message: 'No results for your search',
          queryParam,
          categoryParam,
          error,
        },
        'Seach results not found',
      );
    }
  }

  /**
   * Get a single products by productId from ML api
   * @params { productId }
   * @return {promise}
   */
  async getProductById(productId: string):  Promise<ProductDetailItem> {
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
      throw new NotFoundException(
        {
          message: 'Product Detail noy found',
          productId,
          error,
        },
        'Product Detail not found',
      );
    }
  }

  /**
   * Get a list of categories by productId from ML api
   * @params { productId }
   * @return {promise}
   */
  async getCategoriesByProducId(productId: string): Promise<Category[]> {
    const url = `${this.mlEndpoint}/categories/${productId}`;

    try {
      const categories = await this.httpService
        .get(url)
        .pipe(map((resp) => fromMeliCategoriesToCategories(resp.data)))
        .toPromise();

      return categories;
    } catch (error) {
      console.log('error fetching categories', error);
      throw new NotFoundException(
        {
          message: 'Categories for product noy found',
          productId,
          error,
        },
        'Categories for product noy found',
      );
    }
  }

  /**
   * Get a list of categories by productId from ML api
   * @params { productId }
   * @return {promise}
   */
  async getProductDescriptionById(productId: string): Promise<string> {
    const url = `${this.mlEndpoint}/items/${productId}/description`;

    try {
      const description = await this.httpService
        .get(url)
        .pipe(map((resp) => fromMeliProdDescriptionToDescription(resp.data)))
        .toPromise();
      return description;
    } catch (error) {
      console.log('error fetching description', error);
      throw new NotFoundException(
        {
          message: 'Description for product noy found',
          productId,
          error,
        },
        'Description for product not found',
      );
    }
  }

  /**
   * Get a product author (seller) by userId from ML api
   * @params { userId }
   * @return {promise}
   */
  async getAuthorBySellerId(userId: string | number): Promise<Author> {
    const url = `${this.mlEndpoint}/users/${userId}`;

    try {
      const author = await this.httpService
        .get(url)
        .pipe(map((resp) => fromMeliSellerToAuthor(resp.data)))
        .toPromise();

      return author;
    } catch (error) {
      console.log('error fetching author', error);
      throw new NotFoundException(
        {
          message: 'Author for product noy found',
          userId,
          error,
        },
        'Author for product noy found',
      );
    }
  }

  /**
   * Get a mocked searchResult list
   * @return SearchResult object
   */
  getMockedItems(): SearchResult {
    return SearchResultMock;
  }

  /**
   * Get a mocked ProductDetailItem object
   * @return SearchResult object
   */
  getMockedProduct(): ProductDetailItem {
    return ProductDetailMock;
  }
}
