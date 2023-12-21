import { DefaultTheme } from 'styled-components';

export interface IErrors {
  Key: string;
  Message: string;
}

export interface IListErrors {
  listErrors: IErrors[] | null;
}

export interface IResponse {
  Id: number;
  Name: string;
  Active: boolean;
}

export interface IListItem {
  value: number;
  label: string;
}

export interface IPagination {
  Total: number;
}

export interface IPaginatedResponse<T> {
  Data: T;
  Pagination: IPagination;
}

export interface IUser {
  name: string;
  profiles: string[];
}

export interface AuthState {
  user: IUser;
  logged: boolean;
  token: {
    accessToken: string;
    expiresIn: number;
    expirationDate: Date;
    crossToken: string;
  };
}

export interface IDataLocalStorage {
  theme: DefaultTheme;
  user: AuthState | null;
}

export interface LayoutProps {
  mobile: boolean;
}
export interface ILoginForm {
  username: string;
  password: string;
}

export interface IFormSign {
  onSubmit: (values: ILoginForm) => void;
}

export interface ILoginResponse {
  token: {
    accessToken: string;
    idToken: string;
    expiresIn: number;
  };
  user: IUser;
}
