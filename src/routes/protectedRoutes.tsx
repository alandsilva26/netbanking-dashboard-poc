import { RouteObject, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'providers';
import { homeRoute } from 'features/misc';
import { customerListRoute } from 'features/customers';
import { accountListRoute } from 'features/accounts/routes';

const ProtectedApp = () => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/signin"></Navigate>;
  }

  return <Outlet />;
};

/**
 * Protected routes that are not specific to customer or manager
 */
export const protectedRoutes: RouteObject = {
  path: '/',
  element: <ProtectedApp />,
  children: [homeRoute, customerListRoute, accountListRoute],
};
