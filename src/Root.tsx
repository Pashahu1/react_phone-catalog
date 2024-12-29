import React, { useEffect, useState } from 'react';
import { App } from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';
import { Accessories } from './pages/Accessories/Accessories';
import { Favourites } from './pages/Favourite';
import { Basket } from './pages/Basket';
import { Loader } from './components/Shared/Loader/Loader';

export const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayLoader = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(delayLoader);
    };
  }, []);

  return (
    <React.StrictMode>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="Phones" element={<Phones />} />
              <Route path="Tablets" element={<Tablets />} />
              <Route path="Accessories" element={<Accessories />} />
              <Route path="Favourites" element={<Favourites />} />
              <Route path="Basket" element={<Basket />} />
            </Route>
          </Routes>
        </Router>
      )}
    </React.StrictMode>
  );
};
