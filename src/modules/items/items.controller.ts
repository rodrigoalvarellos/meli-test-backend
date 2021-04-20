import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {

  
  constructor(private itemService: ItemsService) {}

  // @Get()
  // async getSearchResults(@Query('q') query) {
  //   return this.itemService.getMockedItems();
  // }
  
  @Get()
  async getSearchResults(@Query('q') query) {

    return this.itemService.getSearchResult(query);
   
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.itemService.getProductById(id);
  }

//   @Get(':id')
//   getProductById(@Param('id') id: string) {
//     // const item = this.itemService.getMockedItems().items.find( it => it.id === id);

//     // if( item ) {
//     //   return item;
//     // } else {
//     //   return {};
//     // }

//     return this.itemService.getMockedProduct();     
//   }
}
