import routes from '~/config/routes';
import { HomePage, Tab1, Tab2, Tab3 } from '~/pages';

export const publicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.tab1, component: Tab1 },
  { path: routes.tab2, component: Tab2 },
  { path: routes.tab3, component: Tab3 },
];
