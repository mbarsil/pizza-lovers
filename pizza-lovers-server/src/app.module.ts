import { Module } from '@nestjs/common';
import { PizzaLoveModule } from './pizza-love/pizza-love.module';

@Module({
  imports: [PizzaLoveModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
