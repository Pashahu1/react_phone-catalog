import { NavLink } from 'react-router-dom';
import React from 'react';

type Props = {
  to: string;
  children: React.ReactNode;
};

export const CustomLink: React.FC<Props> = ({ to, children }) => {
  return (
    <li className="navbar__item">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};
