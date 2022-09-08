export interface AuthObj {
  /**
   * id can be email or customer id
   */
  id: string;
  password: string;
}

export enum Roles {
  CUSTOMER = 'customer',
  MANAGER = 'manager',
}

export class User {
  public name?: string;
  public email: string;
  public role: Roles;

  constructor(name: string, email: string, role: Roles) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  isCustomer(): this is Customer {
    return this instanceof Customer;
  }

  isManager(): this is Manager {
    return this instanceof Manager;
  }
}

export class Manager extends User {
  constructor(name: string, email: string) {
    super(name, email, Roles.MANAGER);
  }
}

export class Customer extends User {
  constructor(name: string, email: string) {
    super(name, email, Roles.CUSTOMER);
  }
}
