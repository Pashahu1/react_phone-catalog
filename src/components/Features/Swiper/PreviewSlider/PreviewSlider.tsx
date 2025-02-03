import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../ProductSlider/productSlider.scss';
import './previewSlider.scss';

import { Preview } from './Preview';
import { useContext } from 'react';
import { PostsContext } from '../../../../store/PostsContext';

export const PreviewSlider = () => {
  const context = useContext(PostsContext);

  if (!context) {
    return null;
  }

  const { posts } = context;

  const previewProductIds = [1, 16, 50];

  const previewProducts = previewProductIds.map(id => {
    const product = posts.find(post => post.id === id);

    return {
      image: product?.image,
      name: product?.name,
      category: product?.category,
      itemId: product?.itemId,
    };
  });

  return (
    <div className="previewSlider">
      <div className="previewSlider-content">
        <button className="previewSlider__button--prev slider__button">
          &lt;
        </button>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation={{
            nextEl: `.previewSlider__button--next`,
            prevEl: `.previewSlider__button--prev`,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          loop={true}
          style={{ width: '1040px' }}
        >
          {previewProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <Preview
                image={product.image}
                title={product.name}
                category={product.category}
                itemId={product.itemId}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="previewSlider__button--next slider__button">
          &gt;
        </button>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};
