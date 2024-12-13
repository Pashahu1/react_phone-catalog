import { useEffect, useState } from 'react';
import { filteredCategory } from '../helpers/Products/ProductFilter';
import { Product } from '../types/global';
import { Loader } from '../components/Shared/Loader/Loader';
import { Card } from '../components/Shared/Card/Cart';

export const Accessories = () => {
  const [accessoriesProducts, setAccessoriesProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = filteredCategory('accessories');

    const loader = setTimeout(() => {
      setLoading(false);
      setAccessoriesProducts(filtered);
    }, 1000);

    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && accessoriesProducts && (
        <section className="accessories">
          <h1>Accessories</h1>
          <p>flow</p>
          <div className="category">
            {accessoriesProducts.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <p>count phone</p>
          <span>sort item on a display</span>
          <p>product slider</p>
        </section>
      )}
    </>
  );
};
