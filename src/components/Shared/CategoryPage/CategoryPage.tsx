import { Card } from '../Card/Cart';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './categorypage.scss';
import { getProductsCategory } from '../../../services/products';
import { Products } from '../../../types/global';

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.toLowerCase().split('/').pop() || '';

  const [posts, setPosts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      getProductsCategory(category)
        .then(setPosts)
        .catch(() => {
          setError('Error fetching products');
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, [category]);

  const { currentItems, currentPage, pageSize, paginate } =
    usePagination(posts);

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  return (
    <section className="category-page">
      {error && <p className="error">{error}</p>}
      {loading && <Loader />}
      <h1 className="category-page__title">{categoryTitle} Page</h1>
      <span className="category-page__models-count">{posts.length} models</span>
      <div className="category-page__products">
        {currentItems.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        total={posts?.length}
        perPage={pageSize}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </section>
  );
};

export default CategoryPage;
