import BannerPhone from '../../../public/img/category-phones.png';
import BannerTablet from '../../../public/img/category-tablets.png';
import BannerAccessories from '../../../public/img/category-accessories.png';
// eslint-disable-next-line max-len
import { CategoryCard } from '../../components/Shared/CategoryCart/CategoryCard';

// eslint-disable-next-line max-len
import { ProductSlider } from '../../components/Features/Swiper/ProductSlider/ProductSlider';

import './home.scss';
import { useEffect, useState } from 'react';
import { Products } from '../../types/global';
import {
  filteredPrices,
  filteredYear,
} from '../../helpers/Products/ProductFilter';
// eslint-disable-next-line max-len
import { PreviewSlider } from '../../components/Features/Swiper/PreviewSlider/PreviewSlider';

export const Home = () => {
  const [productsPrice, setProductsPrice] = useState<Products[]>([]);
  const [productsYears, setProductsYears] = useState<Products[]>([]);

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
      }
    };

    fetchFilteredProducts();
  }, []);

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
              imageSrc={BannerPhone}
              alt="Mobile phones"
              text="Mobile phones"
              count={32}
            />
            <CategoryCard
              to="/tablets"
              imageSrc={BannerTablet}
              alt="Tablets"
              text="Tablets"
              count={24}
            />
            <CategoryCard
              to="/accessories"
              imageSrc={BannerAccessories}
              alt="Accessories"
              text="Accessories"
              count={67}
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
