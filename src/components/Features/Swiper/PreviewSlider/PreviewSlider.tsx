import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../ProductSlider/productSlider.scss';
import './previewSlider.scss';
import iPhone14 from '../../../../../public/img/category-phones.png';
import tablet from '../../../../../public/img/category-tablets.png';
import acc from '../../../../../public/img/category-accessories.png';

import { Preview } from './Preview';

export const PreviewSlider = () => {
  return (
    <div className="preview">
      <div className="preview-slider">
        <button className="preview__button--prev slider__button"> &lt;</button>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation={{
            nextEl: `.preview__button--next`,
            prevEl: `.preview__button--prev`,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={0}
          style={{ width: '1040px' }}
        >
          <SwiperSlide>
            <Preview img={iPhone14} />
          </SwiperSlide>
          <SwiperSlide>
            <Preview img={tablet} />
          </SwiperSlide>
          <SwiperSlide>
            <Preview img={acc} />
          </SwiperSlide>
        </Swiper>

        <button className="preview__button--next slider__button">&gt;</button>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};
