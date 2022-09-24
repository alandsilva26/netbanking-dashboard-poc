import { useRoutes, RouteObject, Outlet } from 'react-router-dom';

// layout
import { DefaultLayout } from '@/components/Layout';

// routes
import { dummyRoutes } from '@/features/dummy/routes';
import { authRoutes, logoutRoute } from '@/features/auth';
import { managerRoutes } from './protectedManagerRoutes';
import { protectedRoutes } from './protectedRoutes';
import { notFoundRoute } from '@/features/misc';

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
