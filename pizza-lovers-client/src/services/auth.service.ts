import { UserCredentials } from '../shared/common.interface';

import { USERS } from './users.mock';

const CURRENT_USER_KEY = 'currentUser';

export const AuthService = () => {
  let _currentUser: UserCredentials | undefined;

  const getCurrentUser = (): UserCredentials | undefined => {
    return _currentUser;
  };

  const signIn = ({ userName, password }: UserCredentials): UserCredentials | null => {
    const isUserInSystem = USERS.some(
      (user: UserCredentials) => user.userName === userName && user.password === password
    );

    if (isUserInSystem) {
      sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ userName, password }));

      _currentUser = { userName, password };

      return _currentUser;
    } else {
      return null;
    }
  };

  const isAuthenticated = (): boolean => {
    return !!sessionStorage.getItem(CURRENT_USER_KEY);
  };

  return {
    getCurrentUser,
    signIn,
    isAuthenticated,
  };
};

export default AuthService();
