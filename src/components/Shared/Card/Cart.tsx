import './card.scss';
import { Button } from '../Button/Button';
import favorite from '../../../../public/img/favourites.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Products } from '../../../types/global';

type Props = {
  product: Products;
};

export const Card: React.FC<Props> = ({ product }) => {
  const [clicked, setClicked] = useState(false);

  function handleChange() {
    setClicked(prevState => !prevState);
  }

  return (
    <article className="card">
      <div className="card__content">
        <img
          className="card__image-pick card__image"
          src={product.image}
          alt="mobile"
        />
        <div className="card__info">
          <h3 className="card__info-title">
            <Link to={`/${product.id}`}>{product.name}</Link>
          </h3>
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
