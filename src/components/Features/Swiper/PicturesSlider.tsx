import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.scss';
import React from 'react';
import { Product } from '../../../types/global';
import { Card } from '../../Shared/Card/Cart';

type Props = {
  title: string;
  products: Product[];
};

export const Slider: React.FC<Props> = ({ title, products }) => {
  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <h1>{title}</h1>
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
