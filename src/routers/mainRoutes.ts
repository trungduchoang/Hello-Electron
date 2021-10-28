// routes
import { ROUTES } from '.';
// components
import Home from '@/pages/Home';
import Builder from '@/pages/Builder';

/**
 * Define main pages routes
 */
export default [
  {
    path: ROUTES.HOME,
    pageName: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: ROUTES.BUILDER,
    pageName: 'Builder',
    exact: true,
    component: Builder,
  },
];
