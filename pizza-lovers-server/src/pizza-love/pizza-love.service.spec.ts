import { Test, TestingModule } from '@nestjs/testing';

import { PizzaLoveService } from './pizza-love.service';

import {USERS} from './users';
import {UserInfo} from './pizza-love.interface';


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

  it('should update the pizza love data when receiving a valid userName', () => {
    const userName = USERS[0].userName;
    const newUsers = [...USERS];

    newUsers[0].likes++;

    service.updatePizzaLove(userName);

    expect(service.users).toEqual(newUsers);
  });

  it('should not update the pizza love data when receiving an invalid userName', () => {
    const newUsers = [...service.users];

    newUsers.sort((a: UserInfo, b: UserInfo) => (a.likes > b.likes) ? -1 : 1);

    service.updatePizzaLove('');

    expect(service.users).toEqual(newUsers);
  });

  it('should not update the pizza love data when receiving a non existing userName', () => {
    const newUsers = [...service.users];

    newUsers.sort((a: UserInfo, b: UserInfo) => (a.likes > b.likes) ? -1 : 1);

    service.updatePizzaLove('fakeName');

    expect(service.users).toEqual(newUsers);
  });
});
