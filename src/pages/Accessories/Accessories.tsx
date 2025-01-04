import { filteredCategory } from '../../helpers/Products/ProductFilter';
import { Loader } from '../../components/Shared/Loader/Loader';
import { Card } from '../../components/Shared/Card/Cart';
import { Pagination } from '../../components/Shared/Pagination/Pagination';
import usePagination from '../../hooks/usePagination';
// eslint-disable-next-line max-len
// import { PageSelect } from '../../components/Shared/Select/PageSelect/PageSelect';
import './accessories.scss';
import { Breadcrumbs } from '../../components/Shared/Breadcrumbs/Breadcrumbs';
import useFilteredProducts from '../../hooks/useFilteredProducts';

export const Accessories = () => {
  const { loading, products } = useFilteredProducts(
    'accessories',
    filteredCategory,
  );

  const { currentItems, currentPage, pageSize, paginate } =
    usePagination(products);

  return (
    <>
      {loading && <Loader />}
      {!loading && products && (
        <section className="accessories">
          <Breadcrumbs />
          <h1 className="accessories__title">Accessories</h1>
          <p className="accessories__count">{products.length} models</p>
          <div className="control-panel">
            <span>sort item on a display</span>
            <span>pageSelect item on a display</span>
            {/*<PageSelect pageSize={pageSize} setSize={setPageSize} />*/}
          </div>

          <div className="category">
            {currentItems.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            total={products.length}
            perPage={pageSize}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </section>
      )}
    </>
  );
};
