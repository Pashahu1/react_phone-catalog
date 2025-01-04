import { Navbar } from './Navbar';
import './header.scss';
import Logo from '../../../../public/img/logo.jpeg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <NavLink to="/">
          <img
            className="header__content-icon"
            src={Logo}
            alt="NiceGadgetLogo"
          />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
};
