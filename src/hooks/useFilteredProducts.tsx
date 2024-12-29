import { useState, useEffect } from 'react';
import { Product } from '../types/global';

type FilteredCategoryFunction = (category: string) => Product[];

const useFilteredProducts = (
  category: string,
  filteredCategory: FilteredCategoryFunction,
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = filteredCategory(category);

    const loader = setTimeout(() => {
      setLoading(false);
      setProducts(filtered);
    }, 1000);

    return () => {
      clearTimeout(loader);
    };
  }, [category, filteredCategory]);

  return { loading, products };
};

export default useFilteredProducts;
