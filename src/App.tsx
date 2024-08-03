import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { PageNotFound } from '~/pages';
import '~/App.css';

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
