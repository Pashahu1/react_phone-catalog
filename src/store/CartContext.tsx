import React, { createContext, useState, useMemo } from 'react';
import { Product } from '../types/global';
import products from '../../public/api/products.json';

interface ContextValue {
  data?: Product[];
}

export const DataContext = createContext<ContextValue | undefined>({
  data: [],
});

type Props = {
  children: React.ReactNode;
};

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [product] = useState<Product[]>(products);
  const value = useMemo(
    () => ({
      data: product,
    }),
    [product],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
