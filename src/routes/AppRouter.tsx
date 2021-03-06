import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useDarkMode } from '../hooks/useDarkMode';

import { Home } from '../pages/home/Home';
import { List } from '../pages/list/List';
import { Login } from '../pages/login/Login';
import { New } from '../pages/new/New';
import { Single } from '../pages/single/Single';
import { productInputs, userInputs } from '../formSource';

import './../style/dark.scss';

export const AppRouter = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`app ${(darkMode && 'dark') || ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
