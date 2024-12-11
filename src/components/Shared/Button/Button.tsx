import './button.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className: string;
};

export const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
