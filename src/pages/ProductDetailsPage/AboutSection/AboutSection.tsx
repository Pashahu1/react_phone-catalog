import React from 'react';
import { ProductDetail } from '../../../types/global';
import './aboutSection.scss';

type Props = {
  productDetails: ProductDetail | null;
};

export const AboutSection: React.FC<Props> = ({ productDetails }) => {
  return (
    <div className="product__about">
      <h3 className="product__about-title">About</h3>
      <span className="product__about-separator"></span>
      <ul className="product__about-list">
        {productDetails?.description.map((description, id) => (
          <li key={id} className="product__about-item">
            <h4 className="product__about-item-title">{description.title}</h4>
            <p className="product__about-item-text">{description.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
