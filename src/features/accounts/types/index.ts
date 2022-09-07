export type CURRENT = 'current';
export type SAVINGS = 'savings';

export interface IAccount {
  accountNumber: string;
  customerId: string;
  type: CURRENT | SAVINGS;
  currentBalance: number;
  createdAt: string;
}
