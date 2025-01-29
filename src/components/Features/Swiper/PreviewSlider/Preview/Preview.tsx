import '../previewSlider.scss';
import React from 'react';
import './preview.scss';
import { Link } from 'react-router-dom';

type Props = {
  image: string | undefined;
  title: string | undefined;
  category: string | undefined;
  itemId: string | undefined;
};

export const Preview: React.FC<Props> = ({
  image,
  title,
  category,
  itemId,
}) => {
  return (
    <div className="preview">
      <div className="preview__order">
        <div className="preview__order-content">
          <div className="preview__order-header">
            <h1 className="preview__order-title">
              Now available in our store!
            </h1>
            <span className="preview__order-text">Be the first!</span>
          </div>
          <Link to={`/${category}/${itemId}`}>
            <button className="preview__order-button button">Order Now</button>
          </Link>
        </div>
      </div>
      <div className="preview__product">
        <h2 className="preview__product-title">{title}</h2>
        <p className="preview__product-text">Pro.Beyond</p>
        <img
          className="preview__product-image"
          src={image}
          alt="preview-pick"
        />
      </div>
    </div>
  );
};
