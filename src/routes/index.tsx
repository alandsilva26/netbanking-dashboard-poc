import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import { DefaultLayout } from 'components';

// routes
import { dummyRoutes } from 'features/dummy/routes';
import { authRoutes } from 'features/auth';

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
      children: [...dummyRoutes, ...authRoutes],
    },
  ];

  const elements = useRoutes([...defaultRoutes]);

  return <>{elements}</>;
};
