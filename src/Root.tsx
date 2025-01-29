import { lazy } from 'react';
import { useEffect, useState } from 'react';
import { App } from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Shared/Loader/Loader';
// eslint-disable-next-line max-len
import { ProductDetails } from './pages/ProductDetailsPage/ProductDetails/ProductDetails';
import CategoryPage from './components/Shared/CategoryPage/CategoryPage';
import { PostsProvider } from './store/PostsContext';
import { ShoppingCartProvider } from './store/ShoppingCartContext';
import { FavoritesCartProvider } from './store/FavoritesCartContext';

const Homepage = lazy(() =>
  import('./pages/Home/Home').then(module => ({ default: module.Home })),
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
        <ShoppingCartProvider>
          <FavoritesCartProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Homepage />} />
                <Route path="/:category" element={<CategoryPage />} />
                <Route
                  path="/:category/:productId"
                  element={<ProductDetails />}
                />
                <Route path="favourites" element={<Favourites />} />
                <Route path="basket" element={<Basket />} />
                <Route path="*" element={<p>Not found</p>} />
              </Route>
            </Routes>
          </FavoritesCartProvider>
        </ShoppingCartProvider>
      </PostsProvider>
    </Router>
  );
};
