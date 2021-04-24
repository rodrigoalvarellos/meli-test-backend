import { Module } from '@nestjs/common';
import { ItemsModule } from '../items/items.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
