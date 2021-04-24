import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Get()
  async getSearchResults(
    @Query('q') query?: string,
    @Query('category') category?: string,
  ) {
    return this.itemService.getSearchResult(query, category);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.itemService.getProductById(id);
  }
}
