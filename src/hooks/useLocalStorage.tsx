import { useCallback } from 'react';

export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      throw new Error(`Could not get local storage key: ${key}`);
    }
  };

  const getItem = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : [];
    } catch {
      throw new Error(`Could not get local storage key: ${key}`);
    }
  }, [key]);

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      throw new Error(`Could not get local storage key: ${key}`);
    }
  };

  return { setItem, getItem, removeItem };
};
