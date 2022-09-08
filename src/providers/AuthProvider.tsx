import { createContext, useContext, useEffect, useState } from 'react';
import { User, Customer, Manager, AuthObj } from 'features/users';

// type LoginAsManager = ({ id, password }: AuthObj) => Promise<void>;
type LoginFn = ({ id, password }: AuthObj) => Promise<void>;
type LogoutFn = () => void;

interface IAuthContext {
  user: User | undefined;
  loginAsManager: LoginFn;
  loginAsCustomer: LoginFn;
  logout: LogoutFn;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
  return useContext(authContext);
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(
    new Manager('Alan Dsilva', 'Alan.Dsilva@lemon.com')
  );

  const loginAsManager: LoginFn = async ({ id, password }) => {
    setUser(new Manager(id, password));
  };

  const loginAsCustomer: LoginFn = async ({ id, password }) => {
    setUser(new Customer(id, password));
  };

  const logout: LogoutFn = () => {
    setUser(undefined);
  };

  const values: IAuthContext = {
    user,
    loginAsManager,
    loginAsCustomer,
    logout,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
