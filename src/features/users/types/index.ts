export interface IUser {
  name?: string;
  email?: string;
  role: 'customer' | 'manager';
}

export interface AuthObj {
  id: string;
  password: string;
}

export interface IManager extends IUser {
  email: string;
  role: 'manager';
}

export interface ICustomer extends IUser {
  id: string;
  role: 'customer';
}
