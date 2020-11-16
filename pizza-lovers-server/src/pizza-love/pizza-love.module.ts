import { Module } from '@nestjs/common';

import { PizzaLoveService } from './pizza-love.service';
import { PizzaLoveGateway } from './pizza-love.gateway';

@Module({
  controllers: [],
  providers: [PizzaLoveService, PizzaLoveGateway]
})
export class PizzaLoveModule {}
