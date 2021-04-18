import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {

  
  constructor(private itemService: ItemsService) {}

  @Get()
  async getSearchResults(@Query('q') query) {
    // const response = await this.itemService.getSearchResult(query).toPromise();
    // return response.data;

    return this.itemService.getMockedItems();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {

    const item = this.itemService.getMockedItems().items.find( it => it.id === id);

    if( item ) {
      return item;
    } else {
      return {};
    }


     
  }
}
