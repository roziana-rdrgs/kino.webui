import React, { createContext, useCallback, useEffect, useState } from 'react';


import { AuthState, IUser } from '../types';
import { clearLocalStorage, setLocalStorage, useLocalStorage } from './AuthLocal';
import { getFutureDateIncreasedBySeconds } from '../utils/date';

export interface IUpdateData {
  token: {
    accessToken: string;
    expiresIn: number;
  };
  user: IUser;
}

interface AuthContextData {
  data: AuthState | null;
  updateData: ({ user, token }: IUpdateData) => void;
  signOut(): void;
  token: string | undefined;
}

interface Props {
  children: React.ReactElement;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const localStorage = useLocalStorage();
  const [data, setData] = useState<AuthState | null>(localStorage.user);
  const [token, setToken] = useState<string | undefined>(
    localStorage.user?.token.accessToken,
  );

  const signOut = useCallback(() => {
    clearLocalStorage();
    setData(null);
  }, []);

  const updateData = ({ user, token }: IUpdateData) => {
    if (user && token) {
      const newToken = {
        ...token,
        expirationDate: getFutureDateIncreasedBySeconds(
          token.expiresIn,
        ).toDate(),
      };
      const newUser = { ...user };
      const objSigned = {
        logged: true,
        token: newToken,
        user: newUser,
      } as AuthState;

      setLocalStorage('user', objSigned);

      return setData(objSigned);
    }
    return setData(null);
  };

  useEffect(() => {
    if (data) {
      setToken(`Bearer ${data.token.accessToken}`);
    }
  }, [data, localStorage.user?.token.accessToken]);

  return (
    <AuthContext.Provider
      value={{
        data,
        updateData,
        signOut,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
