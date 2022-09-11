import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import axios from 'axios';

type AuthContextType = {
  user: string | null;
  login: () => void;
  logout: () => void;
};

const AuthContextDefaultValues: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {}
};

const AuthContext = createContext<AuthContextType>(AuthContextDefaultValues);
// AuthContext.displayName = 'AuthContext';

const tokenKey = 'userToken';

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<string | null>(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     setUser(null);
  //   };
  //   getUser();
  // }, []);

  // const login = (): void => {
  //   router.push('/');
  // };
  const login = async () => {
    return await axios({
      method: 'POST',
      url: `api/auth/sign-in`
    }).then(() => {
      router.push('/');
      console.log('user signed in');
    });
  };

  const logout = (): void => {
    localStorage.removeItem(tokenKey);
    setUser(null);
    queryClient.clear();
  };

  const value = { user, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an <AuthProvider />');
  }
  return context;
};
