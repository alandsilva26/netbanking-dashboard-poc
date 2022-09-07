import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import { DefaultLayout } from 'components';

// routes
import { dummyRoutes } from 'features/dummy/routes';
import { authRoutes } from 'features/auth';
import { managerRoutes } from './protectedManagerRoutes';
import { protectedRoutes } from './protectedRoutes';
import { notFoundRoute } from 'features/misc';

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
      children: [...dummyRoutes, protectedRoutes, managerRoutes],
    },
    ...authRoutes,
    notFoundRoute,
  ];

  const elements = useRoutes([...defaultRoutes]);

  return <>{elements}</>;
};
