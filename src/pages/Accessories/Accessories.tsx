import { useEffect, useState } from 'react';
import { filteredCategory } from '../../helpers/Products/ProductFilter';
import { Product } from '../../types/global';
import { Loader } from '../../components/Shared/Loader/Loader';
import { Card } from '../../components/Shared/Card/Cart';
import { Pagination } from '../../components/Shared/Pagination/Pagination';
import { Flow } from '../../components/Shared/Flow/Flow';
import usePagination from '../../components/Shared/Pagination/usePagination';
import { Select } from '../../components/Shared/Select/Select';
import './accessories.scss';

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

  const { currentItems, currentPage, pageSize, setPageSize, paginate } =
    usePagination(accessoriesProducts);

  return (
    <>
      {loading && <Loader />}
      {!loading && accessoriesProducts && (
        <section className="accessories ">
          <Flow title="Accessories" />
          <h1 className="accessories__title">Accessories</h1>
          <p className="accessories__count">
            {accessoriesProducts.length} models
          </p>

          <span>sort item on a display</span>
          <Select pageSize={pageSize} setSize={setPageSize} />

          <div className="category">
            {currentItems.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            total={accessoriesProducts.length}
            perPage={pageSize}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </section>
      )}
    </>
  );
};
