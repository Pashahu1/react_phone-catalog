import React, { useEffect, useState } from 'react';
import { filteredCategory } from '../helpers/Products/ProductFilter';
import { Product } from '../types/global';
import { Loader } from '../components/Shared/Loader/Loader';
import { Card } from '../components/Shared/Card/Cart';
import { Pagination } from '../components/Shared/Pagination/Pagination';
// import { Select } from "../components/Shared/Select/Select";

export const Accessories = () => {
  const [accessoriesProducts, setAccessoriesProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(20);

  const lastPageIndex = currentPage * pageSize;
  const firstPageIndex = lastPageIndex - pageSize;
  const currentPages = accessoriesProducts.slice(firstPageIndex, lastPageIndex);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

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
          {/*<Select />*/}
          <div className="category">
            {currentPages.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            total={accessoriesProducts.length}
            perPage={pageSize}
            currentPage={currentPage}
            onPageChange={paginate}
          />
          <p>count phone</p>
          <span>sort item on a display</span>
          <p>product slider</p>
        </section>
      )}
    </>
  );
};
