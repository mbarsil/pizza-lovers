import { Test, TestingModule } from '@nestjs/testing';
import { PizzaLoveGateway } from './pizza-love.gateway';

describe('PizzaLoveGateway', () => {
  let gateway: PizzaLoveGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaLoveGateway],
    }).compile();

    gateway = module.get<PizzaLoveGateway>(PizzaLoveGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
