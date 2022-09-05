import { RouteObject } from 'react-router-dom';
import { CustomerLogin } from './CustomerLogin';

import { ManagerLogin } from './ManagerLogin';

// routes
import { homeRoute } from 'features/misc';

const AlreadyAuthenticatedApp = () => {};

/** Public routes */
export const authRoutes: RouteObject[] = [
  {
    path: '/signin',
    element: <CustomerLogin />,
  },
  {
    path: '/admin/signin',
    element: <ManagerLogin />,
  },
];
