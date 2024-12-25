import { FC } from 'react';
import './navbar.scss';
import { CustomLink } from '../../Shared/CustomLink/CustomLink';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <CustomLink className="navbar" to="/home">
          Home
        </CustomLink>
        <CustomLink className="navbar" to="/phone">
          Phone
        </CustomLink>
        <CustomLink className="navbar" to="/tablet">
          Tablet
        </CustomLink>
        <CustomLink className="navbar" to="/accessories">
          Accessories
        </CustomLink>
      </ul>
    </nav>
  );
};
