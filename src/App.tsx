import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from '~/config/routes';
import { HomePage, Tab1, Tab2, Tab3, PageNotFound } from '~/pages';
import '~/App.css';

const publicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.tab1, component: Tab1 },
  { path: routes.tab2, component: Tab2 },
  { path: routes.tab3, component: Tab3 },
];

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />}></Route>;
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
