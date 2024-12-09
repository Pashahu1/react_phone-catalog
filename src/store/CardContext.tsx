import React, { createContext, useState } from 'react';
import { CartState, ContextValue } from '../types/global';

export const CartContext = createContext<ContextValue | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const CardContext: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<CartState>({ key: 'value' });

  const updateState = (newValue: Partial<CartState>) => {
    setState(prev => ({ ...prev, ...newValue }));
  };

  const value: ContextValue = {
    state,
    updateState,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
