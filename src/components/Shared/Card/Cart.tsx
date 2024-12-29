import './card.scss';
import { Button } from '../Button/Button';
import favorite from '../../../../public/img/favourites.svg';
import { Product } from '../../../types/global';
import React, { useState } from 'react';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = ({ product }) => {
  const [clicked, setClicked] = useState(false);

  function handleChange() {
    setClicked(prevState => !prevState);
  }

  return (
    <article className="card">
      <div className="card__content">
        <div className="card__image">
          <img className="card__image-pick" src={product.image} alt="mobile" />
        </div>
        <div className="card__info">
          <h3 className="card__info-title">{product.name}</h3>
          <p className="card__info-price">
            <span className="card__info-price-discount">${product.price}</span>
            <span className="card__info-price-fullprice">
              ${product.fullPrice}
            </span>
          </p>
        </div>
        <span className="card__separator"></span>
        <div className="card__details">
          <p className="card__detail">
            <span className="card__detail-label">Screen</span>
            <span className="card__detail-value">{product.screen}</span>
          </p>
          <p className="card__detail">
            <span className="card__detail-label">Capacity</span>
            <span className="card__detail-value">{product.capacity}</span>
          </p>
          <p className="card__detail">
            <span className="card__detail-label">RAM</span>
            <span className="card__detail-value">{product.ram}</span>
          </p>
        </div>

        <div className="card__actions">
          <Button
            className={`button ${clicked ? 'card__button--active' : 'card__button'}`}
            onClick={handleChange}
          >
            Add to cart
          </Button>
          <div className="card__favorite">
            <img className="card__favorite-icon" src={favorite} alt="like" />
          </div>
        </div>
      </div>
    </article>
  );
};
