import { Cart } from '../components/Shared/Card/Cart';
import { Category } from '../components/Layout/Category/Category';
import { filteredCategory } from '../helpers/ProductFilter';
import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Shared/Loader/Loader';
import { Product } from '../types/global';

export const Phone: React.FC = () => {
  const [phoneProducts, setPhoneProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = filteredCategory('phones');

    const loader = setTimeout(() => {
      setLoading(false);
      setPhoneProducts(filtered);
    }, 1000);

    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="phone">
          <h1 className="phone__title">Mobile phones</h1>
          <p>flow</p>
          <Category category="phone">
            {phoneProducts.map(product => (
              <Cart key={product.id} product={product} />
            ))}
          </Category>
          <p>count phone</p>
          <span>sort item on a display</span>
          <p>product slider</p>
        </section>
      )}
    </>
  );
};
