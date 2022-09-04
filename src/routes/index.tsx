import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import { DefaultLayout } from 'components';

// routes
import { dummyRoutes } from 'features/dummy/routes';
import { authRoutes } from 'features/auth';
import { createCustomerRoute } from 'features/customers';

const DefaultApp = () => {
  return (
    <>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  );
};

export const AppRoutes = () => {
  const defaultRoutes: RouteObject[] = [
    {
      path: '/',
      element: <DefaultApp />,
      children: [...dummyRoutes, ...authRoutes, createCustomerRoute],
    },
  ];

  const elements = useRoutes([...defaultRoutes]);

  return <>{elements}</>;
};
