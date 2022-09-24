import { RouteObject } from 'react-router-dom';
import { HelloWorld } from '@/components/Temp/HelloWorld';

export const dummyRoutes: RouteObject[] = [
  {
    path: '/dummy',
    element: <HelloWorld />,
  },
];
