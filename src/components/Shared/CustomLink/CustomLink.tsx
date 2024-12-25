import { NavLink } from 'react-router-dom';
import React from 'react';

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const CustomLink: React.FC<Props> = ({ to, children, className }) => {
  return (
    <li className="navbar__item">
      <NavLink
        className={({ isActive }) =>
          isActive ? `${className}__link navbar__link--active` : `navbar__link`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};
