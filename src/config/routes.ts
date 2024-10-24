import { HomePage } from '~/pages';

const routes = {
  home: '/',
  product: '/san-pham',
  promotion: '/khuyen-mai',
  article: '/bai-viet',
};

export const publicRoutes = [
  // { path: routes.login, component: Login },
  { path: routes.home, component: HomePage },
];

export const privateRoutes = [
  { path: routes.home, component: HomePage },
  // { path: routes.tab1, component: Tab1 },
  // { path: routes.tab2, component: Tab2 },
  // { path: routes.tab3, component: Tab3 },
];

export default routes;
