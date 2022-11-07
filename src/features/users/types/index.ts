export interface AuthObj {
  /**
   * id can be email or customer id
   */
  id: string;
  password: string;
}

export enum Roles {
  CUSTOMER = 'CUSTOMER',
  MANAGER = 'MANAGER',
}

export class User {
  public id?: string;
  public name?: string;
  public email: string;
  public role: Roles;

  constructor(id: string, name: string, email: string, role: Roles) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }

  isCustomer(): this is Customer {
    return this instanceof Customer || this.role === Roles.CUSTOMER;
  }

  isManager(): this is Manager {
    return this instanceof Manager || this.role === Roles.MANAGER;
  }
}

export class Manager extends User {
  constructor(id: string, name: string, email: string) {
    super(id, name, email, Roles.MANAGER);
  }
}

export class Customer extends User {
  constructor(id: string, name: string, email: string) {
    super(id, name, email, Roles.CUSTOMER);
  }
}
