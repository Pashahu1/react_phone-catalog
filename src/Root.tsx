import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { App } from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Shared/Loader/Loader';
// eslint-disable-next-line max-len
import ProductDetailsPage from './components/Features/ProductDetailsPage/ProductDetailsPage';
import { PostsProvider } from './store/PostsContext';

const Homepage = lazy(() =>
  import('./pages/Home/Home').then(module => ({ default: module.Home })),
);
const Phones = lazy(() =>
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
      <PostsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="Phones" element={<Phones />} />
            <Route path="Tablets" element={<Tablets />} />
            <Route path="Accessories" element={<Accessories />} />
            <Route path="Favourites" element={<Favourites />} />
            <Route path="Basket" element={<Basket />} />
            <Route path="product/:productId" element={<ProductDetailsPage />} />
            <Route path="*" element={<p>Not found</p>} />
          </Route>
        </Routes>
      </PostsProvider>
    </Router>
  );
};
