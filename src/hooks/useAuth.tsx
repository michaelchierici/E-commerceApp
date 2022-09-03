/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, ReactNode, useContext, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../services/api';
import {showToast} from '../util/toasts';
import {Token} from '../services/token';

interface AuthProps {
  children: ReactNode;
}

export interface User {
  id: string;
  name: string;
  token: string;
}

interface AuthContextData {
  user: User;
  signOut(): Promise<void>;
  loading: boolean;
  login(name: any, password: any): Promise<any>;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const userStorageKey = '@pokedex/user';

  async function login(name: any, password: any) {
    if (!name && !password) {
      return;
    }
    try {
      const response = await api.post('/api/login', name, password);

      const {data} = response;
      Token.setToken(userStorageKey, data.token);

      const userLogged = {
        id: data.user.id,
        name: data.user.name,
        token: data.token,
      };

      setUser(userLogged);
    } catch (error) {
      showToast('usuário não cadastrado ou senha inválida!', 'error');
    }
  }
  async function signOut() {
    setUser({} as User);
    Token.removeToken(userStorageKey);
  }

  return (
    <AuthContext.Provider value={{user, signOut, loading, login}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthContext, useAuth};
