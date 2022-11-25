/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const MenuNavbar = lazyLoad(
  () => import('./index'),
  module => module.MenuNavbar,
);
