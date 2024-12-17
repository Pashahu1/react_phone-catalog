import { Navbar } from '../Navbar';
import './header.scss';
import Logo from '../../../../public/img/logo.jpeg';
import Icons_Favourites from '../../../../public/img/Icons_Favourites.png';
import Icons_Shopping from '../../../../public/img/Icons_Shopping-bag.png';
import { CustomLink } from '../../Shared/CustomLink/CustomLink';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/home">
          <img
            className="header__content-icon"
            src={Logo}
            alt="NiceGadgetLogo"
          />
        </Link>
        <Navbar />
      </div>
      <div className="header__product">
        <CustomLink to="/favourite">
          <img
            className="header__product-icon"
            src={Icons_Favourites}
            alt="Icons_Favourites"
          />
        </CustomLink>
        <CustomLink to="/basket">
          <img
            className="header__product-icon"
            src={Icons_Shopping}
            alt="Icons_Shopping"
          />
        </CustomLink>
      </div>
    </header>
  );
};
