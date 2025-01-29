import { Navbar } from './Navbar';
import './header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <NavLink to="/">
          <img
            className="header__content-icon"
            src="./public/img/Logo.svg"
            alt="NiceGadgetLogo"
          />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
};
