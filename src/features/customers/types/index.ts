export interface ICustomer {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  createdAt?: string;
}

// export class Customer implements ICustomer {
//   public firstName: string;
//   public lastName: string;
//   public email: string;
//   public dob: string;

//   constructor({ firstName = '', lastName = '', email, dob }: ICustomer) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.dob = dob;
//   }

//   getName(): string {
//     return this.firstName + this.lastName;
//   }
// }
