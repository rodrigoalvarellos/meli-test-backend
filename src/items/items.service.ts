import { HttpService, Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { MeliSearchResponse } from 'src/interfaces/mlSearchResponse.interface';
// import { searchToItemsTransformer } from '../transformers/SearchToItems.transformer.js';
// import { SearchResult } from '../../dist/interfaces/searchResult';
import { SearchResultMock } from '../mocks/SearchResultMock';

@Injectable()
export class ItemsService {

  // https://api.mercadolibre.com/items/​:id
  // https://api.mercadolibre.com/items/​:id​/description
  constructor(private httpService: HttpService) {
    // this.getSearchResult('bicicleta').subscribe((res) =>console.log(res));
  }

  getMockedItems() {
    return SearchResultMock;
  }

  // getSearchResult(queryParam: string): Observable<any> {
  //   return this.httpService
  //     .get(`https://api.mercadolibre.com/sites/MLA/search?q=${queryParam}`)
  //     .pipe(
  //       map((resp) => {
  //         const result: SearchResult = searchToItemsTransformer(resp.data);

  //         return resp;
  //       }),
  //     );
  // }
}
