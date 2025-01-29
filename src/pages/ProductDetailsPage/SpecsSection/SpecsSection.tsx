import React from 'react';
import { ProductDetail } from '../../../types/global';
import './specsSection.scss';

type Props = {
  productDetails: ProductDetail | null;
};

export const SpecsSection: React.FC<Props> = ({ productDetails }) => {
  const techSpecs = [
    { label: 'Screen', value: productDetails?.screen },
    { label: 'Resolution', value: productDetails?.resolution },
    { label: 'Processor', value: productDetails?.processor },
    { label: 'RAM', value: productDetails?.ram },
    { label: 'Built in memory', value: productDetails?.capacity },
    { label: 'Camera', value: productDetails?.camera },
    { label: 'Zoom', value: productDetails?.zoom },
    { label: 'Cell', value: productDetails?.cell.join(', ') },
  ];

  return (
    <div className="product__specs">
      <h3 className="product__specs-title">Tech specs</h3>
      <span className="product__specs-separator"></span>
      <ul className="product__specs-list">
        {techSpecs.map(
          (item, id) =>
            item.value &&
            item.value.length > 0 && (
              <li key={id} className="product__specs-item">
                <p className="product__specs-label">{item.label}</p>
                <span className="product__specs-value">{item.value}</span>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};
