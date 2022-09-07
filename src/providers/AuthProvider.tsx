import { createContext, useContext, useEffect, useState } from 'react';
import { IUser, IManager, ICustomer, AuthObj } from '../features/users';

type User = IManager | ICustomer;
type LoginAsManager = ({ id, password }: AuthObj) => Promise<void>;
type LoginAsCustomer = ({ id, password }: AuthObj) => Promise<void>;

interface IAuthContext {
  user: User | undefined;
  loginAsManager: LoginAsManager;
  loginAsCustomer: LoginAsCustomer;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
  return useContext(authContext);
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const DUMMY_MANAGER: IManager = {
    name: 'Alan Dsilva',
    email: 'alan.dsilva@lemon.com',
    role: 'manager',
  };
  const [user, setUser] = useState<User | undefined>(DUMMY_MANAGER);

  const loginAsManager: LoginAsManager = async ({ id, password }) => {
    setUser({ email: id, role: 'manager' });
  };

  const loginAsCustomer: LoginAsCustomer = async ({ id, password }) => {
    setUser({ id: id, role: 'customer' });
  };

  const values: IAuthContext = {
    user,
    loginAsManager,
    loginAsCustomer,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
