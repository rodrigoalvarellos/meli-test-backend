import { HttpModule, HttpService, INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AxiosResponse } from 'axios';
import * as request from 'supertest';
import { of } from 'rxjs';
import { ItemsModule } from './items.module';
import { ItemsService } from './items.service';

import { mlSearchResultMock } from '../../mocks/mlSearchResultMock';
import { mlProductDetailMock } from '../../mocks/mlProductDetailMock';

const SEARCH_RESULT = mlSearchResultMock;
const PRODUCT_DETAIL = mlProductDetailMock;

xdescribe('items (e2e)', () => {
    
    let app: INestApplication;
    let httpService: HttpService;
  
    beforeAll(async () => {
      const mockAppModule: TestingModule = await Test.createTestingModule({
        imports: [ItemsModule, HttpModule],
        providers: [ItemsService],
      }).compile();
  
      app = mockAppModule.createNestApplication();
      httpService = mockAppModule.get<HttpService>(HttpService);
      await app.init();
    });

    it('', async () => {

        const result: AxiosResponse = {
            data: SEARCH_RESULT,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
          };
          jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));
          const response = await request(app.getHttpServer())
          .get('/api/items?q=iPhone')
          .expect(200);

          expect(response.text).toEqual(SEARCH_RESULT.query);
        
        expect(true).toBe(true);
    } );
    
});