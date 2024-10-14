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
    // Stop the auto-zooming in Safari web on iPhone when focusing a text input,
    // but still leave users with the full ability to pinch and zoom.
    if (navigator.userAgent.indexOf('iPhone') > -1) {
      document
        .querySelector('[name=viewport]')
        ?.setAttribute(
          'content',
          'width=device-width, initial-scale=1, maximum-scale=1'
        );
    }

    // Setup the mock API server.
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
