import { Injectable } from '@nestjs/common';

import { USERS } from './users';
import { UserInfo } from './pizza-love.interface';

@Injectable()
export class PizzaLoveService {
  private _users = USERS;

  get users(): UserInfo[] {
    return this._users;
  }

  updatePizzaLove(userName: string): void {
    if (!userName) { return; }

    this._users = this._users
      .map((userInfo: UserInfo) => {
        if (userInfo.userName === userName) {
          userInfo.likes++;
        }

        return userInfo;
      })
      .sort((a: UserInfo, b: UserInfo) => (a.likes > b.likes) ? -1 : 1)
  }
}
