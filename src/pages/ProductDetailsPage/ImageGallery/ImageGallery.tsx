import classNames from 'classnames';
import { ProductDetail } from '../../../types/global';
import React, { useEffect, useState } from 'react';
import './imageGallery.scss';

type Props = {
  productDetails: ProductDetail | null;
};

export const ImageGallery: React.FC<Props> = ({ productDetails }) => {
  const [mainImage, setMainImage] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (productDetails?.images && productDetails.images.length > 0) {
      setMainImage(productDetails.images[0]);
      setActiveIndex(0);
    }
  }, [productDetails]);

  const productImages = productDetails?.images;

  return (
    <div className="media-thumbnails">
      <div className="media-thumbnails__content">
        {productImages?.map((image, i) => (
          <article
            onClick={() => {
              setMainImage(image);
              setActiveIndex(i);
            }}
            key={i}
            className={classNames('media-thumbnails__item', {
              'media-thumbnails__item--active': activeIndex === i,
            })}
          >
            <img
              src={image}
              alt={`Thumbnail ${i + 1}`}
              className="media-thumbnails__image"
            />
          </article>
        ))}
      </div>

      <div className="media-thumbnails__main">
        <img
          src={mainImage}
          alt="Main product image"
          className="media-thumbnails__main-image"
        />
      </div>
    </div>
  );
};
