import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Header = lazy(() => import('./header/Header'));
const Home = lazy(() => import('../pages/home/Home'));
const Catalog = lazy(() => import('../pages/catalog/Catalog'));
const Favorites = lazy(() => import('../pages/favorites/Favorites'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export { App };
