import { createContext, useContext, useEffect, useState } from 'react';
import { User, Customer, Manager, AuthObj } from '@/features/users';
import { getProfile } from '@/features/users/api/getProfile';

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
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>();

  const loginAsManager: LoginFn = async ({ id, password }) => {
    // setUser(new Manager(id, password));
  };

  const loginAsCustomer: LoginFn = async ({ id, password }) => {
    // setUser(new Customer(id, password));
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

  const fetchProfile = async () => {
    try {
      const user = await getProfile();
      const userObj = new User(user.id!, user.name!, user.email, user.role);
      console.log(userObj);
      setUser(userObj);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return <authContext.Provider value={values}>{
    loading ? <>Loading............</> : children
  }</authContext.Provider>;
};
