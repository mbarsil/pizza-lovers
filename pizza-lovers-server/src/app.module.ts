import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaLoveModule } from './pizza-love/pizza-love.module';

@Module({
  imports: [PizzaLoveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
