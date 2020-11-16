import { Test, TestingModule } from '@nestjs/testing';
import { PizzaLoveService } from './pizza-love.service';

describe('PizzaLoveService', () => {
  let service: PizzaLoveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaLoveService],
    }).compile();

    service = module.get<PizzaLoveService>(PizzaLoveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
