import { HomePage, Login, Tab1, Tab2, Tab3 } from '~/pages';

const routes: { [x: string]: string } = {
  home: '/',
  login: '/login',
  tab1: '/tab1',
  tab2: '/tab2',
  tab3: '/tab3',
};

export const publicRoutes = [
  { path: routes.login, component: Login },
  { path: routes.home, component: HomePage },
];

export const privateRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.tab1, component: Tab1 },
  { path: routes.tab2, component: Tab2 },
  { path: routes.tab3, component: Tab3 },
];

export default routes;
