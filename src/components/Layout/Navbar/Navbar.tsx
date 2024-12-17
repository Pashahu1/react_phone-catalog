import { FC } from 'react';
import './navbar.scss';
import { CustomLink } from '../../Shared/CustomLink/CustomLink';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/phone">Phone</CustomLink>
        <CustomLink to="/tablet">Tablet</CustomLink>
        <CustomLink to="/accessories">Accessories</CustomLink>
      </ul>
    </nav>
  );
};
