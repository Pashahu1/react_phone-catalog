import React, { useEffect, useState } from 'react';
import { Product } from '../../types/global';
import { filteredCategory } from '../../helpers/Products/ProductFilter';
import { Card } from '../../components/Shared/Card/Cart';
import { Loader } from '../../components/Shared/Loader/Loader';
import { Pagination } from '../../components/Shared/Pagination/Pagination';
// import { Select } from '../../components/Shared/Select/Select';

export const Tablet = () => {
  const [tabletProducts, setTabletProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(20);

  const lastPageIndex = currentPage * pageSize;
  const firstPageIndex = lastPageIndex - pageSize;
  const currentPages = tabletProducts.slice(firstPageIndex, lastPageIndex);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

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
          <p>flow</p>
          <h1 className="tablet__title">Tablet</h1>
          <p>count phone</p>

          {/*<Select />*/}

          <div className="category">
            {currentPages.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            total={tabletProducts.length}
            perPage={pageSize}
            currentPage={currentPage}
            onPageChange={paginate}
          />

          <span>sort item on a display</span>
          <p>product slider</p>
        </section>
      )}
    </>
  );
};
