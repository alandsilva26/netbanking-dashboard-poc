import { RouteObject } from 'react-router-dom';
import { CustomerLogin } from './CustomerLogin';

import { ManagerLogin } from './ManagerLogin';

// routes
import { homeRoute } from 'features/misc';

const AlreadyAuthenticatedApp = () => {};

export const CUSTOMER_SIGNIN_ROUTE = '/signin';
export const ADMIN_SIGNIN_ROUTE = '/admin/signin';

/** Public routes */
export const authRoutes: RouteObject[] = [
  {
    path: CUSTOMER_SIGNIN_ROUTE,
    element: <CustomerLogin />,
  },
  {
    path: '/admin/signin',
    element: <ManagerLogin />,
  },
];
