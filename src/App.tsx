import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from '~/config/routes';
import { setupServer } from '~/utils/mockApi';
import { HomePage, Tab1, Tab2, Tab3, PageNotFound, Login } from '~/pages';
import { GuestGuard } from '~/components/Guards/GuestGuard';
import { AuthGuard } from '~/components/Guards/AuthGuard';
import '~/App.css';

/**
 * Routes for guests.
 */
const publicRoutes = [
  { path: routes.login, component: Login },
  { path: routes.home, component: HomePage },
];

/**
 * Routes for users.
 */
const privateRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.tab1, component: Tab1 },
  { path: routes.tab2, component: Tab2 },
  { path: routes.tab3, component: Tab3 },
];

export default function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const server = setupServer();
      return () => server.shutdown();
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Routes for guests */}
        <Route path={routes.home} element={<GuestGuard />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>

        {/* Routes for users */}
        <Route path={routes.home} element={<AuthGuard />}>
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>

        {/* Routes for invalid pathname */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
