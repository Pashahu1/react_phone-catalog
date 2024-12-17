import React, { useEffect, useState } from 'react';
import { App } from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Phone } from './pages/Phone';
import { Tablet } from './pages/Tablet/Tablet';
import { Accessories } from './pages/Accessories';
import { Favourite } from './pages/Favourite';
import { Basket } from './pages/Basket';
import { ContextProvider } from './store/CardContext';
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
        <ContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="phone" element={<Phone />} />
                <Route path="tablet" element={<Tablet />} />
                <Route path="accessories" element={<Accessories />} />
                <Route path="favourite" element={<Favourite />} />
                <Route path="basket" element={<Basket />} />
              </Route>
            </Routes>
          </Router>
        </ContextProvider>
      )}
    </React.StrictMode>
  );
};
