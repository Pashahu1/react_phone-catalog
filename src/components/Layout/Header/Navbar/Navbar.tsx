import { FC } from 'react';
import './navbar.scss';
import { CustomLink } from '../../../Shared/CustomLink/CustomLink';
import { useShoppingCart } from '../../../../store/ShoppingCartContext';
import { useFavoriteCart } from '../../../../store/FavoritesCartContext';

export const Navbar: FC = () => {
  const { getTotalItems } = useShoppingCart();
  const { favoriteItems } = useFavoriteCart();
  const totalFavoriteItems = favoriteItems.length;

  const totalBasketItems = getTotalItems();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <CustomLink className="navbar" to="/">
          Home
        </CustomLink>
        <CustomLink className="navbar" to="phones">
          Phones
        </CustomLink>
        <CustomLink className="navbar" to="tablets">
          Tablets
        </CustomLink>
        <CustomLink className="navbar" to="accessories">
          Accessories
        </CustomLink>
      </ul>
      <ul className="navbar__product">
        <CustomLink className="navbar__product" to="/favourites">
          <img
            className="navbar__product-icon"
            src="./public/img/Favourites.svg"
            alt="Icons_Favourites"
          />
          {totalFavoriteItems > 0 && (
            <span className="navbar__product-icon--active">
              {totalFavoriteItems}
            </span>
          )}
        </CustomLink>
        <CustomLink className="navbar__product" to="/basket">
          <img
            className="navbar__product-icon"
            src="./public/img/ShoppingBag.svg"
            alt="Icons_Shopping"
          />
          {totalBasketItems > 0 && (
            <span className="navbar__product-icon--active">
              {totalBasketItems}
            </span>
          )}
        </CustomLink>
      </ul>
    </nav>
  );
};
