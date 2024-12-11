import { Card } from '../components/Shared/Card/Cart';
import { filteredCategory } from '../helpers/ProductFilter';
import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Shared/Loader/Loader';
import { Product } from '../types/global';
import { Pagination } from '../components/Shared/Pagination/Pagination';

export const Phone: React.FC = () => {
  const [phoneProducts, setPhoneProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const lastPageIndex = currentPage * pageSize;
  const firstPageIndex = lastPageIndex - pageSize;
  const currentPages = phoneProducts.slice(firstPageIndex, lastPageIndex);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

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
          <div className="category">
            {currentPages.map(product => (
              <Card key={product.id} product={product} />
            ))}
            <Pagination
              total={phoneProducts.length}
              perPage={pageSize}
              currentPage={currentPage}
              onPageChange={paginate}
              setPageSize={setPageSize}
            />
          </div>
          <p>flow</p>
          <p>count phone</p>
          <span>sort item on a display</span>
          <p>product slider</p>
        </section>
      )}
    </>
  );
};
