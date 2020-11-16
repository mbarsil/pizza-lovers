export interface OwnProps {
  props?: object;
  extraClass?: string;
}

export type Props = OwnProps;

export interface UserCredentials {
  userName: string;
  password: string;
}
