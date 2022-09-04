import { RouteObject } from 'react-router-dom';
import { CustomerLogin } from './CustomerLogin';

import { ManagerLogin } from './ManagerLogin';

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
