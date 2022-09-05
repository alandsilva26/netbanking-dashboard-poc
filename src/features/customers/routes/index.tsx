import { RouteObject } from 'react-router-dom';
import { CreateCustomerPage } from './CreateCustomerPage';
import { CustomerList } from './CustomerList';

export const createCustomerRoute: RouteObject = {
  path: '/customer/new',
  element: <CreateCustomerPage />,
};

export const customerListRoute: RouteObject = {
  path: '/customers',
  element: <CustomerList />,
};
