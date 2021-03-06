import { UserInfo } from './pizza-love.interface';

export const USERS: UserInfo[] = [
  {
    userName: 'mario',
    likes: 0
  },
  {
    userName: 'joe',
    likes: 1
  },
  {
    userName: 'mike',
    likes: 3
  },
  {
    userName: 'connor',
    likes: 4
  },
  {
    userName: 'floyd',
    likes: 5
  },
  {
    userName: 'vasyl',
    likes: 6
  },
  {
    userName: 'gennady',
    likes: 7
  },
  {
    userName: 'riddick',
    likes: 8
  },
  {
    userName: 'david',
    likes: 9
  },
  {
    userName: 'evander',
    likes: 10
  },
  {
    userName: 'roy',
    likes: 11
  },
  {
    userName: 'manny',
    likes: 12
  },
].sort((a: UserInfo, b: UserInfo) => (a.likes > b.likes) ? -1 : 1);
