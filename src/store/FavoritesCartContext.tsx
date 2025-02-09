import React, { createContext, useContext, useEffect, useState } from 'react';
import { Products } from '../types/global';
import { useLocalStorage } from '../hooks/useLocalStorage';

type FavoritesProviderProps = {
  children: React.ReactNode;
};

type FavoritesItem = {
  product: Products;
};

type FavoritesProviderType = {
  favoriteItems: FavoritesItem[];
  toggleFavorite: (product: Products) => void;
  removeFromFavorites: (itemId: string) => void;
};

const FavoritesCartContext = createContext({} as FavoritesProviderType);

export const useFavoriteCart = () => useContext(FavoritesCartContext);

export const FavoritesCartProvider = ({ children }: FavoritesProviderProps) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoritesItem[]>([]);
  const { getItem, setItem, removeItem } = useLocalStorage('favoriteItems');

  useEffect(() => {
    const favoritesCart = getItem();

    if (favoritesCart.length > 0) {
      setFavoriteItems(favoritesCart);
    }
  }, [getItem]);

  useEffect(() => {
    if (favoriteItems.length > 0) {
      setItem(favoriteItems);
    } else {
      removeItem();
    }
  }, [favoriteItems, setItem, removeItem]);

  function toggleFavorite(product: Products) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setFavoriteItems(favoriteItems => {
      const exist = favoriteItems.find(
        item => item.product.itemId === product.itemId,
      );

      if (exist) {
        const updatedCart = favoriteItems.filter(
          item => item.product.itemId !== product.itemId,
        );

        if (updatedCart.length === 0) {
          removeItem();
        }

        return updatedCart;
      } else {
        return [...favoriteItems, { product }];
      }
    });
  }

  const removeFromFavorites = (itemId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setFavoriteItems(favoriteItems =>
      favoriteItems.filter(item => item.product.itemId !== itemId),
    );
  };

  return (
    <FavoritesCartContext.Provider
      value={{ favoriteItems, toggleFavorite, removeFromFavorites }}
    >
      {children}
    </FavoritesCartContext.Provider>
  );
};
