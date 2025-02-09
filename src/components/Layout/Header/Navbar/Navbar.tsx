import { FC, useEffect, useState } from 'react';
import './navbar.scss';
import { CustomLink } from '../../../Shared/CustomLink/CustomLink';
import { useShoppingCart } from '../../../../store/ShoppingCartContext';
import { useFavoriteCart } from '../../../../store/FavoritesCartContext';

export const Navbar: FC = () => {
  const { getTotalItems } = useShoppingCart();
  const { favoriteItems } = useFavoriteCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalFavoriteItems = favoriteItems.length;

  const totalBasketItems = getTotalItems();

  const handleOpenMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__btn" onClick={handleOpenMenu}>
        <img
          src={
            !isMenuOpen ? './public/img/Menu.svg' : './public/img/CloseBtn.svg'
          }
          alt="Menu"
        />
      </div>
      <div
        className={`navbar__content ${isMenuOpen ? 'navbar__content--active' : ''}`}
      >
        <ul className="navbar__list">
          <CustomLink className="navbar" to="/" onClick={handleCloseMenu}>
            Home
          </CustomLink>
          <CustomLink className="navbar" to="phones" onClick={handleCloseMenu}>
            Phones
          </CustomLink>
          <CustomLink className="navbar" to="tablets" onClick={handleCloseMenu}>
            Tablets
          </CustomLink>
          <CustomLink
            className="navbar"
            to="accessories"
            onClick={handleCloseMenu}
          >
            Accessories
          </CustomLink>
        </ul>
        <ul className="navbar__product">
          <CustomLink
            className="navbar__product"
            to="/favourites"
            onClick={handleCloseMenu}
          >
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
          <CustomLink
            className="navbar__product"
            to="/basket"
            onClick={handleCloseMenu}
          >
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
      </div>
    </nav>
  );
};
