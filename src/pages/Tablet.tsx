import { useEffect, useState } from 'react';
import { Product } from '../types/global';
import { filteredCategory } from '../helpers/ProductFilter';
import { Card } from '../components/Shared/Card/Cart';
import { Loader } from '../components/Shared/Loader/Loader';

export const Tablet = () => {
  const [tabletProducts, setTabletProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = filteredCategory('tablets');

    const loader = setTimeout(() => {
      setLoading(false);
      setTabletProducts(filtered);
    }, 1000);

    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="tablet">
          <h1 className="tablet__title">Tablet</h1>
          <p>flow</p>
          <div className="category">
            {tabletProducts.map(product => (
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
