import { useState, useEffect } from 'react';
import { Product } from '../types/global';

export default function useFilteredProducts(category: string) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Сбрасываем ошибку перед новой загрузкой

      try {
        const response = await fetch('/api/products.json');

        if (!response.ok) {
          throw new Error(
            `Failed to fetch products. Status: ${response.status}`,
          );
        }

        const data: Product[] = await response.json();

        // Фильтруем продукты по категории
        const filteredProducts = data.filter(
          product => product.category.toLowerCase() === category.toLowerCase(),
        );

        setProducts(filteredProducts);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : 'Unknown error occurred';

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { loading, products, error };
};
