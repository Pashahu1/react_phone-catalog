import React, { useContext, useState, useEffect } from 'react';
import { Products } from '../types/global';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  product: Products;
  quantity: number;
};

type ShoppingCartContextType = {
  cartItems: CartItem[];
  getTotalItems: () => number;
  getItemQuantity: (itemId: string) => number;
  toggleCartQuantity: (product: Products) => void;
  increaseCartQuantity: (product: Products) => void;
  decreaseCartQuantity: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
};

const ShoppingCartContext = React.createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { getItem, setItem, removeItem } = useLocalStorage('cartItems');

  useEffect(() => {
    const storedCart = getItem();

    if (storedCart.length > 0) {
      setCartItems(storedCart);
    }
  }, [getItem]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setItem(cartItems);
    } else {
      removeItem();
    }
  }, [cartItems, setItem, removeItem]);

  function getTotalItems() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  function getItemQuantity(itemId: string) {
    return (
      cartItems.find(item => item.product.itemId === itemId)?.quantity || 0
    );
  }

  function toggleCartQuantity(product: Products) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setCartItems(cartItems => {
      const existingItem = cartItems.find(
        item => item.product.itemId === product.itemId,
      );

      if (existingItem) {
        const updatedCart = cartItems.filter(
          item => item.product.itemId !== product.itemId,
        );

        if (updatedCart.length === 0) {
          removeItem();
        }

        return updatedCart;
      } else {
        return [...cartItems, { product, quantity: 1 }];
      }
    });
  }

  function increaseCartQuantity(product: Products) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setCartItems(cartItems => {
      const existingItem = cartItems.find(
        item => item.product.itemId === product.itemId,
      );

      if (existingItem) {
        return cartItems.map(item =>
          item.product.itemId === product.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...cartItems, { product, quantity: 1 }];
      }
    });
  }

  function decreaseCartQuantity(itemId: string) {
    setCartItems(prevCartItems => {
      // Обновляем количество товара
      const updatedCartItems = prevCartItems
        .map(item =>
          item.product.itemId === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity > 0);

      return updatedCartItems;
    });
  }

  function removeFromCart(itemId: string) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setCartItems(cartItems =>
      cartItems.filter(item => item.product.itemId !== itemId),
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getTotalItems,
        getItemQuantity,
        toggleCartQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
