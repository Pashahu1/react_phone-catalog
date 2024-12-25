import './previewSlider.scss';
import React from 'react';

type Props = {
  img: string;
};

export const Preview: React.FC<Props> = ({ img }) => {
  return (
    <div className="preview-slider__swiper-container">
      <div className="preview-slider__order">
        <div className="preview-slider__order-content">
          <div className="preview-slider__order-header">
            <h1 className="preview-slider__order-title">
              Now available in our store!
            </h1>
            <span className="preview-slider__order-text">Be the first!</span>
          </div>
          <button className="preview-slider__order-button button">
            Order Now
          </button>
        </div>
      </div>
      <img className="preview-slider__image" src={img} alt="preview-pick" />
    </div>
  );
};
