import { RouteObject } from 'react-router-dom';
import { CreateCustomerPage } from './CreateCustomerPage';

export const createCustomerRoute: RouteObject = {
  path: '/customer/new',
  element: <CreateCustomerPage />,
};
