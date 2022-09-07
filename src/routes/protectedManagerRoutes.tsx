import { RouteObject, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'providers';

// routes
import { createCustomerRoute } from 'features/customers';
import { accountCreateRoute } from 'features/accounts';

const AdminApp = () => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/admin/signin"></Navigate>;
  }
  return <Outlet />;
};

export const managerRoutes: RouteObject = {
  path: '',
  element: <AdminApp />,
  children: [createCustomerRoute, accountCreateRoute],
};
