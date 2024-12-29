import { Card } from '../../components/Shared/Card/Cart';
import { filteredCategory } from '../../helpers/Products/ProductFilter';
import { Loader } from '../../components/Shared/Loader/Loader';
import { Pagination } from '../../components/Shared/Pagination/Pagination';
// eslint-disable-next-line max-len
import { PageSelect } from '../../components/Shared/Select/PageSelect/PageSelect';
import usePagination from '../../hooks/usePagination';
import './phones.scss';
import { Breadcrumbs } from '../../components/Shared/Breadcrumbs/Breadcrumbs';
import useFilteredProducts from '../../hooks/useFilteredProducts';

export const Phones = () => {
  const { loading, products } = useFilteredProducts('phones', filteredCategory);

  const { currentItems, currentPage, pageSize, setPageSize, paginate } =
    usePagination(products);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="phones">
          <Breadcrumbs />
          <h1 className="phones__title">Mobile phones</h1>
          <p className="phones__count">{products.length} models</p>
          <div className="control-panel">
            <span>sort item on a display</span>
            <PageSelect pageSize={pageSize} setSize={setPageSize} />
          </div>

          <div className="category">
            {currentItems.map(product => (
              <Card key={product.id} product={product} />
            ))}

            <Pagination
              total={products.length}
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
