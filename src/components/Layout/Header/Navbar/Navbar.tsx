import { FC } from 'react';
import './navbar.scss';
import { CustomLink } from '../../../Shared/CustomLink/CustomLink';
import Icons_Favourites from '../../../../../public/img/Icons_Favourites.png';
import Icons_Shopping from '../../../../../public/img/Icons_Shopping-bag.png';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <CustomLink className="navbar" to="/">
          Home
        </CustomLink>
        <CustomLink className="navbar" to="Phones">
          Phones
        </CustomLink>
        <CustomLink className="navbar" to="Tablets">
          Tablets
        </CustomLink>
        <CustomLink className="navbar" to="Accessories">
          Accessories
        </CustomLink>
      </ul>
      <ul className="navbar__product">
        <CustomLink className="navbar__product" to="/Favourites">
          <img
            className="navbar__product-icon"
            src={Icons_Favourites}
            alt="Icons_Favourites"
          />
        </CustomLink>
        <CustomLink className="navbar__product" to="/Basket">
          <img
            className="navbar__product-icon"
            src={Icons_Shopping}
            alt="Icons_Shopping"
          />
        </CustomLink>
      </ul>
    </nav>
  );
};
