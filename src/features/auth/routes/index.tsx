import { RouteObject } from 'react-router-dom';

import { ManagerLogin } from './ManagerLogin';

export const authRoutes: RouteObject[] = [
  {
    path: '/admin/login',
    element: <ManagerLogin />,
  },
];
