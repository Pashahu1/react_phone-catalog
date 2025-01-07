import { Card } from '../Card/Cart';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useContext } from 'react';
import { PostsContext } from '../../../store/PostsContext';

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/').pop() || '';
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error('PostsContext is not available');
  }

  const { posts, error, loading } = context;

  const filteredProducts = posts.filter(
    product => product.category.toLowerCase() === category.toLowerCase(),
  );

  const { currentItems, currentPage, pageSize, paginate } =
    usePagination(filteredProducts);

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="category-page__error">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="category-page__empty">
        <h1>{formattedCategory} Page</h1>
        <p>There are no {formattedCategory.toLowerCase()} available yet.</p>
      </div>
    );
  }

  return (
    <section className="category-page">
      <Breadcrumbs />
      <h1 className="category-page__title">{formattedCategory} Page</h1>
      <div className="category-page__products">
        {currentItems.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        total={filteredProducts.length}
        perPage={pageSize}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </section>
  );
};

export default CategoryPage;
