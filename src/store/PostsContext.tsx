import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { PostsContextType, Products } from '../types/global';
import { getProducts } from '../services/products';

export const PostsContext = createContext<PostsContextType | null>(null);

type Props = {
  posts?: Products[];
  children: ReactNode;
};

export const PostsProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(setPosts, setLoading);
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading }}>
      {children}
    </PostsContext.Provider>
  );
};
