import { Home } from './Home';
import { NotFound } from './NotFound';

export const homeRoute = {
  path: '/',
  element: <Home />,
};

export const notFoundRoute = {
  path: '*',
  element: <NotFound />,
};
