import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './productSlider.scss';
import { Card } from '../../../Shared/Card/Cart';
import React from 'react';
import { Products } from '../../../../types/global';

type Props = {
  products: Products[];
  title: string;
  uniqueId: string;
};

export const ProductSlider: React.FC<Props> = ({
  title,
  products,
  uniqueId,
}) => {
  return (
    <section className="slider">
      <div className="slider__header">
        <h2 className="slider__title">{title}</h2>
        <div className="slider__navigation">
          <button className={`slider__button slider__button--prev-${uniqueId}`}>
            &lt;
          </button>
          <button className={`slider__button slider__button--next-${uniqueId}`}>
            &gt;
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: `.slider__button--next-${uniqueId}`,
          prevEl: `.slider__button--prev-${uniqueId}`,
        }}
        slidesPerView={4}
        spaceBetween={16}
      >
        {products.map(product => (
          <SwiperSlide style={{ width: '272px' }} key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
