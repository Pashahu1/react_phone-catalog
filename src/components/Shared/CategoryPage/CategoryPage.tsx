import { Card } from '../Card/Cart';
import { Pagination } from '../Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import './categorypage.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../../store/PostsContext';
import { Dropdown } from './Dropdown/Dropdown';

const CategoryPage = () => {
  const context = useContext(PostsContext);
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemsPerPage, setItemsPerPage] = useState<string | number>(16);

  if (!context) {
    throw new Error('products not found');
  }

  const { posts } = context;
  const filteredProducts = posts.filter(post => post.category === category);

  useEffect(() => {
    const items = searchParams.get('items');

    setItemsPerPage(items === 'all' ? 'all' : parseInt(items || '16', 10));
  }, [searchParams, filteredProducts]);

  const sortOption = searchParams.get('sort') || 'Newest';

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Alphabetically') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'Cheapest') {
      return a.price - b.price;
    }

    return b.id - a.id;
  });

  const itemPerPage =
    typeof itemsPerPage === 'string' && itemsPerPage === 'all'
      ? filteredProducts.length
      : Number(itemsPerPage);

  const { currentItems, currentPage, paginate } = usePagination(
    sortedProducts,
    itemPerPage,
  );

  const paginationSorts = ['Newest', 'Alphabetically', 'Cheapest'];
  const itemsOnPage = ['4', '8', '16', 'all'];

  const handleSortChange = (option: string) => {
    setSearchParams({
      sort: option,
      items: searchParams.get('items') || '16',
    });
  };

  const handleItemsPerPageChange = (option: string) => {
    setSearchParams({
      sort: searchParams.get('sort') || 'Newest',
      items: option,
    });
  };

  return (
    <section className="category-page">
      <h1 className="category-page__title">Title Page</h1>
      <span className="category-page__models-count">
        {filteredProducts.length} models
      </span>

      <div className="category-page__sort-panel">
        <Dropdown
          title="Sort by"
          sortOptions={paginationSorts}
          currentOption={sortOption}
          onOptionChange={handleSortChange}
        />

        <Dropdown
          title="Items on page"
          sortOptions={itemsOnPage}
          currentOption={
            itemsPerPage === 'all' ? 'all' : itemsPerPage.toString()
          }
          onOptionChange={handleItemsPerPageChange}
        />
      </div>

      <div className="category-page__products">
        {currentItems.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {itemsPerPage !== 'all' && (
        <Pagination
          total={filteredProducts?.length}
          itemsPerPage={Number(itemsPerPage)}
          currentPage={currentPage}
          onPageChange={paginate}
        />
      )}
    </section>
  );
};

export default CategoryPage;
