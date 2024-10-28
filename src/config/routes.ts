import { HomePage, Article } from '~/pages';

const routes = {
  home: '/',
  product: '/san-pham',
  promotion: '/khuyen-mai',
  article: '/bai-viet',
};

export const publicRoutes = [
  // { path: routes.login, component: Login },
  { path: routes.home, component: HomePage },
  { path: routes.article, component: Article },
];

export const privateRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.article, component: Article },
];

export default routes;
