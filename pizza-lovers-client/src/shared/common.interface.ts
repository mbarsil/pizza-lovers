export interface OwnProps {
  props?: object;
  extraClass?: string;
}

export type Props = OwnProps;

export interface UserCredentials {
  userName: string;
  password: string;
}

interface UserInfo {
  userName: string;
  likes: number;
}
