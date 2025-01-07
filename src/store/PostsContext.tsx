import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { PostsContextType, Products } from '../types/global';

export const PostsContext = createContext<PostsContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const PostsProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products.json');

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        setPosts(data);
      } catch {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategoryData = async (category: string) => {
      try {
        const response = await fetch(`/api/${category}.json`);

        if (!response.ok) {
          throw new Error(`Failed to fetch ${category} products`);
        }

        const data = await response.json();

        setPosts(prevPosts => [...prevPosts, ...data]);
      } catch {
        setError(`Error fetching ${category} products`);
      }
    };

    fetchCategoryData('phones');
    fetchCategoryData('tablets');
    fetchCategoryData('accessories');
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostsContext.Provider>
  );
};
