import { lazy } from 'react';
import { App } from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/Shared/CategoryPage/CategoryPage';
import { PostsProvider } from './store/PostsContext';
import { ShoppingCartProvider } from './store/ShoppingCartContext';
import { FavoritesCartProvider } from './store/FavoritesCartContext';
import { Home } from './pages/Home/Home';

const Favourites = lazy(() =>
  import('./pages/Favorites/Favourite').then(module => ({
    default: module.Favourites,
  })),
);

const Basket = lazy(() =>
  import('./pages/Basket/Basket').then(module => ({ default: module.Basket })),
);

const ProductDetails = lazy(() =>
  import('./pages/ProductDetailsPage/ProductDetails/ProductDetails').then(
    module => ({ default: module.ProductDetails }),
  ),
);

export const Root = () => {
  return (
    <Router>
      <PostsProvider>
        <ShoppingCartProvider>
          <FavoritesCartProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/:category" element={<CategoryPage />} />
                <Route
                  path="/:category/:productId"
                  element={<ProductDetails />}
                />
                <Route path="favourites" element={<Favourites />} />
                <Route path="basket" element={<Basket />} />
                <Route
                  path="*"
                  element={
                    <img
                      src="./public/img/product-not-found.png"
                      alt="notFound"
                    />
                  }
                />
              </Route>
            </Routes>
          </FavoritesCartProvider>
        </ShoppingCartProvider>
      </PostsProvider>
    </Router>
  );
};
