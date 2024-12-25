import { Card } from '../../components/Shared/Card/Cart';
import { filteredCategory } from '../../helpers/Products/ProductFilter';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Shared/Loader/Loader';
import { Product } from '../../types/global';
import { Pagination } from '../../components/Shared/Pagination/Pagination';
import { Select } from '../../components/Shared/Select/Select';
import { Flow } from '../../components/Shared/Flow/Flow';
import usePagination from '../../components/Shared/Pagination/usePagination';
import './phone.scss';

export const Phone = () => {
  const [phoneProducts, setPhoneProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  const { currentItems, currentPage, pageSize, setPageSize, paginate } =
    usePagination(phoneProducts);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="phone">
          <Flow title="Phones" />
          <h1 className="phone__title">Mobile phones</h1>
          <p className="phone__count">{phoneProducts.length} models</p>
          <div className="controle-panel">
            <span>sort item on a display</span>
            <Select pageSize={pageSize} setSize={setPageSize} />
          </div>

          <div className="category">
            {currentItems.map(product => (
              <Card key={product.id} product={product} />
            ))}

            <Pagination
              total={phoneProducts.length}
              perPage={pageSize}
              currentPage={currentPage}
              onPageChange={paginate}
            />
          </div>
        </section>
      )}
    </>
  );
};
