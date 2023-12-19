import { DefaultTheme } from 'styled-components';
import { AuthState } from '../types';
import light from '../styles/light';

const keyLocal = `${import.meta.env.VITE_APP_NAME}`;

const initialValue: IDataLocalStorage = {
  theme: light,
  user: null,
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setLocalStorage(key: string, value: any) {
  try {
    const item = window.localStorage.getItem(keyLocal);

    if (item)
      return localStorage.setItem(
        keyLocal,
        JSON.stringify({
          ...JSON.parse(item),
          [key]: value,
        })
      );
  } catch (error) {
    console.error('Não foi possivel salvar os dados');
  }
}

export const useLocalStorage = (): IDataLocalStorage => {
  try {
    const item = window.localStorage.getItem(keyLocal);
    // Parse stored json or if none return initialValue
    if (item) return JSON.parse(item);

    localStorage.setItem(keyLocal, JSON.stringify(initialValue));
    return initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem(keyLocal);
};

export interface IDataLocalStorage {
  theme: DefaultTheme;
  user: AuthState | null;
}
