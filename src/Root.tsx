import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { App } from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Shared/Loader/Loader';
import { ProductView } from './components/Features/ProductView/ProductView';

import product from '../public/api/products.json';

const Homepage = lazy(() =>
  import('./pages/Home/Home').then(module => ({ default: module.Home })),
);
const Phone = lazy(() =>
  import('./pages/Phones/Phones').then(module => ({ default: module.Phones })),
);
const Tablets = lazy(() =>
  import('./pages/Tablets/Tablets').then(module => ({
    default: module.Tablets,
  })),
);
const Accessories = lazy(() =>
  import('./pages/Accessories/Accessories').then(module => ({
    default: module.Accessories,
  })),
);
const Favourites = lazy(() =>
  import('./pages/Favorites/Favourite').then(module => ({
    default: module.Favourites,
  })),
);
const Basket = lazy(() =>
  import('./pages/Basket/Basket').then(module => ({ default: module.Basket })),
);

export const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayLoader = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(delayLoader);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="Phones" element={<Phone />} />
          <Route path="Tablets" element={<Tablets />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Favourites" element={<Favourites />} />
          <Route path="Basket" element={<Basket />} />
          <Route
            path="/product/:id"
            element={<ProductView products={product} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
