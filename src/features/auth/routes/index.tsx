import { Outlet, RouteObject } from 'react-router-dom';
import { CustomerLogin } from './CustomerLogin';

import { ManagerLogin } from './ManagerLogin';
import { PublicLayout } from '@/components/Layout';

// routes
import { homeRoute } from '@/features/misc';
import { Logout } from './Logout';
import { ChangePassword } from './ChangePassword';

const AlreadyAuthenticatedApp = () => { };

export const CUSTOMER_SIGNIN_ROUTE = '/signin';
export const ADMIN_SIGNIN_ROUTE = '/admin/signin';

const PublicApp = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

/** Public routes */
export const authRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PublicApp />,
    children: [
      {
        path: CUSTOMER_SIGNIN_ROUTE,
        element: <CustomerLogin />,
      },
      {
        path: '/admin/signin',
        element: <ManagerLogin />,
      },
    ],
  },
];

export const logoutRoute: RouteObject = {
  path: '/logout',
  element: <Logout />,
};

export const CHANGE_PASSWORD_ROUTE = '/users/password/change';

export const changePasswordRoute: RouteObject = {
  path: CHANGE_PASSWORD_ROUTE,
  element: <ChangePassword />,
};
