import { useEffect, useState } from 'react';
import { Product } from '../../types/global';
import { filteredCategory } from '../../helpers/Products/ProductFilter';
import { Card } from '../../components/Shared/Card/Cart';
import { Loader } from '../../components/Shared/Loader/Loader';
import { Pagination } from '../../components/Shared/Pagination/Pagination';
import { Flow } from '../../components/Shared/Flow/Flow';
import usePagination from '../../components/Shared/Pagination/usePagination';
import { Select } from '../../components/Shared/Select/Select';
import './tablet.scss';

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

  const { currentItems, currentPage, pageSize, setPageSize, paginate } =
    usePagination(tabletProducts);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="tablet">
          <Flow title="Tablets" />
          <h1 className="tablet__title">Tablet</h1>
          <p className="tablet__count"> {tabletProducts.length} models</p>
          <span>sort item on a display</span>
          <Select pageSize={pageSize} setSize={setPageSize} />

          <div className="category">
            {currentItems.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            total={tabletProducts.length}
            perPage={20}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </section>
      )}
    </>
  );
};