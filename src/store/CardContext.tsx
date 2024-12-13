import React, { createContext, useState, useMemo } from 'react';
import { Product } from '../types/global';
import products from '../../public/api/products.json';

interface ContextValue {
  data: Product[];
  setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const DataContext = createContext<ContextValue | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [product, setProduct] = useState<Product[]>(products);
  const value = useMemo(
    () => ({
      data: product,
      setProduct,
    }),
    [product],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
