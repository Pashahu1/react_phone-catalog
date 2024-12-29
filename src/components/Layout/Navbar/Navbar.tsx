import { FC } from 'react';
import './navbar.scss';
import { CustomLink } from '../../Shared/CustomLink/CustomLink';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <CustomLink className="navbar" to="/Home">
          Home
        </CustomLink>
        <CustomLink className="navbar" to="/Phones">
          Phones
        </CustomLink>
        <CustomLink className="navbar" to="/Tablets">
          Tablets
        </CustomLink>
        <CustomLink className="navbar" to="/Accessories">
          Accessories
        </CustomLink>
      </ul>
    </nav>
  );
};
