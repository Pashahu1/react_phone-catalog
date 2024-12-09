import './button.scss';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
