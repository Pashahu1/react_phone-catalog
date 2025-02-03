// eslint-disable-next-line max-len
import { CategoryCard } from '../../components/Shared/CategoryCart/CategoryCard';

// eslint-disable-next-line max-len
import { ProductSlider } from '../../components/Features/Swiper/ProductSlider/ProductSlider';

import './home.scss';
import { useContext, useEffect, useState } from 'react';
import { Products } from '../../types/global';
import { filteredPrices, filteredYear } from '../../helpers/ProductFilter';
// eslint-disable-next-line max-len
import { PreviewSlider } from '../../components/Features/Swiper/PreviewSlider/PreviewSlider';
import { PostsContext } from '../../store/PostsContext';
import { Loader } from '../../components/Shared/Loader/Loader';

export const Home = () => {
  const [productsPrice, setProductsPrice] = useState<Products[]>([]);
  const [productsYears, setProductsYears] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(PostsContext);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const PriceFilter = filteredPrices();
        const YearFiltered = filteredYear();

        const [priceResults, yearResults] = await Promise.all([
          PriceFilter,
          YearFiltered,
        ]);

        setProductsPrice(priceResults);
        setProductsYears(yearResults);
      } catch (error) {
        throw Error(`fetchFilteredProducts ${error}}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilteredProducts();
  }, []);

  if (!context) {
    return null;
  }

  const { posts } = context;

  const phonesCount = posts.filter(post => post.category === 'phones').length;
  const tabletsCount = posts.filter(post => post.category === 'tablets').length;
  const accessoriesCount = posts.filter(
    post => post.category === 'accessories',
  ).length;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="home">
      <h1 className="home__title">Welcome to Nice Gadgets store!</h1>
      <div className="home__content">
        <PreviewSlider />
        <div className="home__brand-new-models">
          <ProductSlider
            title="Brand new models"
            products={productsYears}
            uniqueId="brand-new"
          />
        </div>

        <div className="home__shop-category">
          <h2 className="home__shop-category-title">Shop by Category</h2>
          <div className="home__shop-category-page">
            <CategoryCard
              to="/phones"
              imageSrc="./public/img/phonesCategory.png"
              alt="Mobile phones"
              text="Mobile phones"
              count={phonesCount}
            />
            <CategoryCard
              to="/tablets"
              imageSrc="./public/img/tabletsCategory.png"
              alt="Tablets"
              text="Tablets"
              count={tabletsCount}
            />
            <CategoryCard
              to="/accessories"
              imageSrc="./public/img/accsesoriesCategory.png"
              alt="Accessories"
              text="Accessories"
              count={accessoriesCount}
            />
          </div>
        </div>
        <div className="home__hot-prices">
          <ProductSlider
            title="Hot prices"
            products={productsPrice}
            uniqueId="hot-prices"
          />
        </div>
      </div>
    </section>
  );
};
