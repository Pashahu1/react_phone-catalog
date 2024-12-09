import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  category: string;
};

export const Category: React.FC<Props> = ({ children, category, ...props }) => {
  return (
    <div className={`category category__${category}`} {...props}>
      {children}
    </div>
  );
};
