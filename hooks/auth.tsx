import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

type AuthContextType = {
  user: null;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);
AuthContext.displayName = 'AuthContext';

const tokenKey = 'userToken';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      setUser(null);
    };
    getUser();
  }, []);

  const login = (): void => {
    router.push('/');
  };

  const logout = (): void => {
    localStorage.remveItem(tokenKey);
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
