import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from '~/config/routes';
import { setupServer } from '~/utils/mockApi';
import { HomePage, Tab1, Tab2, Tab3, PageNotFound } from '~/pages';
import { GuestGuard } from '~/components/Guards/GuestGuard';
import '~/App.css';

/**
 * Routes for guests.
 */
const publicRoutes = [
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
        <Route path={routes.home} element={<GuestGuard />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
