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
    fetch('/api/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        return response.json();
      })
      .then(data => {
        setPosts(data);
      })
      .catch(() => {
        setError('Error fetching products');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostsContext.Provider>
  );
};
