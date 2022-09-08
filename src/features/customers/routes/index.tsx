import { RouteObject } from 'react-router-dom';
import { CreateCustomer } from './CreateCustomer';
import { CustomerList } from './CustomerList';
import { EditCustomer } from './EditCustomer';

export const CUSTOMER_ROUTE_PATHS = {
  LIST: '/customers',
  NEW: '/customers/new',
  EDIT: '/customers/edit',
};

export const customerListRoute: RouteObject = {
  path: CUSTOMER_ROUTE_PATHS.LIST,
  element: <CustomerList />,
};

export const createCustomerRoute: RouteObject = {
  path: CUSTOMER_ROUTE_PATHS.NEW,
  element: <CreateCustomer />,
};

export const editCustomerRoute: RouteObject = {
  path: CUSTOMER_ROUTE_PATHS.EDIT,
  element: <EditCustomer />,
};
