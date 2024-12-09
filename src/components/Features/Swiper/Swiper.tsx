import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from '../../../../public/img/Banner.svg';
import './swiper.scss';

export const Slider = () => {
  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="slide-content">
            <div className="text-block__content">
              <h2 className="text-block__content-title">
                Now available in our store!
                <span> 👌</span>
              </h2>
              <p className="text-block__content-text">Be the first!</p>
              <button className="button text-block__content-button">
                Order Now
              </button>
            </div>
            <div className="image-block">
              <img src={Banner} alt="iPhone 14 Pro" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </section>
  );
};
