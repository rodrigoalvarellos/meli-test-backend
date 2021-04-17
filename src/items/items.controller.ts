import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {

  constructor(private itemService: ItemsService) {}

  @Get()
  getSearchResults() {
    return this.itemService.getItemsByFilter();
  }
}
