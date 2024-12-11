import BannerPhone from '../../../public/img/category-phones.webp';
import BannerTablet from '../../../public/img/category-tablets.png';
import BannerAccessories from '../../../public/img/category-accessories.png';
// eslint-disable-next-line max-len
import { CategoryCard } from '../../components/Shared/CategoryCart/CategoryCard';
import './Home.scss';

export const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">Welcome to Nice Gadgets store!</h1>
      <div className="home__shop-category">
        <h2 className="home__shop-category-title">Shop by Category</h2>
        <div className="home__shop-category-page">
          <CategoryCard
            to="/Phone"
            imageSrc={BannerPhone}
            alt="Mobile phones"
            text="Mobile phones"
            count={32}
          />
          <CategoryCard
            to="/Tablet"
            imageSrc={BannerTablet}
            alt="Tablets"
            text="Tablets"
            count={24}
          />
          <CategoryCard
            to="/Accessories"
            imageSrc={BannerAccessories}
            alt="Accessories"
            text="Accessories"
            count={67}
          />
        </div>
      </div>
    </section>
  );
};
