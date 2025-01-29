import { NavLink } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const CustomLink: React.FC<Props> = ({ to, children, className }) => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(`${className}__item`, {
      'is-active': isActive,
    });

  return (
    <li className={`${className}__list`}>
      <NavLink className={getLinkClass} to={to}>
        {children}
      </NavLink>
    </li>
  );
};
