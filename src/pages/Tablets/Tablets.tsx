import { filteredCategory } from '../../helpers/Products/ProductFilter';
import { Card } from '../../components/Shared/Card/Cart';
import { Loader } from '../../components/Shared/Loader/Loader';
import { Pagination } from '../../components/Shared/Pagination/Pagination';
import usePagination from '../../hooks/usePagination';
// eslint-disable-next-line max-len
import { PageSelect } from '../../components/Shared/Select/PageSelect/PageSelect';
import './tablets.scss';
import { Breadcrumbs } from '../../components/Shared/Breadcrumbs/Breadcrumbs';
import useFilteredProducts from '../../hooks/useFilteredProducts';

export const Tablets = () => {
  const { loading, products } = useFilteredProducts(
    'tablets',
    filteredCategory,
  );

  const { currentItems, currentPage, pageSize, setPageSize, paginate } =
    usePagination(products);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="tablets">
          <Breadcrumbs />
          <h1 className="tablets__title">Tablet</h1>
          <p className="tablets__count"> {products.length} models</p>

          <div className="control-panel">
            <span>sort item on a display</span>
            <PageSelect pageSize={pageSize} setSize={setPageSize} />
          </div>

          <div className="category">
            {currentItems.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            total={products.length}
            perPage={20}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </section>
      )}
    </>
  );
};
