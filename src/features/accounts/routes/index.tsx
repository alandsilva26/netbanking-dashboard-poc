import { AccountList } from './AccountList';
import { CreateAccount } from './CreateAccount';

export const ACCOUNT_LIST_ROUTE = '/accounts';
export const ACCOUNT_CREATE_ROUTE = '/accounts/new';

export const accountListRoute = {
  path: ACCOUNT_LIST_ROUTE,
  element: <AccountList />,
};

export const accountCreateRoute = {
  path: ACCOUNT_CREATE_ROUTE,
  element: <CreateAccount />,
};
