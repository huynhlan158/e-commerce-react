import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes, { privateRoutes, publicRoutes } from '~/config/routes';
import { setupServer } from '~/utils/mockApi';
import { PageNotFound } from '~/pages';
import { GuestGuard } from '~/components/Guards/GuestGuard';
import { AuthGuard } from '~/components/Guards/AuthGuard';
import '~/App.css';

export default function App() {
  useEffect(() => {
    const server = setupServer();
    return () => server.shutdown();
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
