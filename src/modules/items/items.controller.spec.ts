import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { mlSearchResultMock } from '../../mocks/mlSearchResultMock';
import { mlProductDetailMock } from '../../mocks/mlProductDetailMock';

const SEARCH_RESULT = mlSearchResultMock;
const PRODUCT_DETAIL = mlProductDetailMock;

describe('ItemsController', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;

  const itemServiceStub = {
    getSearchResult: () => Promise.resolve(SEARCH_RESULT),
    getProductById: () => Promise.resolve(PRODUCT_DETAIL),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [{ provide: ItemsService, useValue: itemServiceStub }],
    }).compile();

    itemsService = await module.resolve<ItemsService>(ItemsService);
    itemsController = await module.resolve<ItemsController>(ItemsController);
  });

  it('should be defined', () => {
    expect(itemsController).toBeDefined();
  });

  it('should have result when "getSearchResults"method is called', async () => {
    const result = await itemsController.getSearchResults();
    expect(result).toBe(SEARCH_RESULT);
  });

  it('should have result when "getProductById"method is called', async () => {
    const result = await itemsController.getProductById('');
    expect(result).toBe(PRODUCT_DETAIL);
  });
});
