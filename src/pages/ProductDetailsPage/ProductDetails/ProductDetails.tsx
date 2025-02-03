import './ProductDetails.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getProductsByCategory } from '../../../services/products';
import { ProductDetail } from '../../../types/global';
import { AboutSection } from '../AboutSection/AboutSection';
import { SpecsSection } from '../SpecsSection/SpecsSection';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ProductAttributes } from '../ProductAttributes/ProductAttributes';
// eslint-disable-next-line max-len
import { ProductSlider } from '../../../components/Features/Swiper/ProductSlider';
import { PostsContext } from '../../../store/PostsContext';
import { useGoBack } from '../../../hooks/useGoBack';

export const ProductDetails = () => {
  const context = useContext(PostsContext);
  const { category, productId } = useParams();
  const [productDetails, setProductDetails] = useState<ProductDetail | null>(
    null,
  );

  const { goBack } = useGoBack();

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (category && productId) {
        const products = await getProductsByCategory(category);
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const product = products.find(product => product.id === productId);

        setProductDetails(product || null);
      }
    };

    fetchProductDetails();
  }, [category, productId]);

  if (!context) {
    return;
  }

  const { posts } = context;

  return (
    <section className="product">
      <div className="product__go-back" onClick={goBack}>
        <img
          className="product__go-back__arrow-icon"
          src="./public/img/ArrowLeft.svg"
          alt="arrow-back"
        />
        <span className="product__go-back-text">Back</span>
      </div>
      <h1 className="product__title">{productDetails?.name}</h1>
      <div className="product__content">
        <div className="product__media">
          <ImageGallery productDetails={productDetails} />
          <ProductAttributes productDetails={productDetails} />
          <span className="product__media-indeficator">ID:855435343</span>
        </div>
      </div>
      <div className="product__info">
        <AboutSection productDetails={productDetails} />
        <SpecsSection productDetails={productDetails} />
      </div>
      <div className="product__slider">
        <ProductSlider
          products={posts}
          title="You may also like"
          uniqueId="productDetails"
        />
      </div>
    </section>
  );
};
