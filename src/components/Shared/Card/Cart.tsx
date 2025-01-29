import './cart.scss';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { Products } from '../../../types/global';
import { useShoppingCart } from '../../../store/ShoppingCartContext';
import { useFavoriteCart } from '../../../store/FavoritesCartContext';
import React, { useState, useEffect } from 'react';
import { LoadingCart } from './LoadingCart/LoadingCart';

type Props = {
  product: Products;
};

export const Card: React.FC<Props> = ({ product }) => {
  const { getItemQuantity, toggleCartQuantity } = useShoppingCart();
  const { favoriteItems, toggleFavorite } = useFavoriteCart();
  const [isLoading, setIsLoading] = useState(true);

  const isFavorite = favoriteItems.some(
    item => item.product.itemId === product.itemId,
  );
  const quantity = getItemQuantity(product.itemId);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <article className={`card ${isLoading ? 'is-loading' : ''}`}>
      {isLoading ? (
        <LoadingCart />
      ) : (
        <div className="card__content">
          <img
            className="card__image-pick card__image"
            src={product.image}
            alt="mobile"
          />
          <div className="card__info">
            <h3 className="card__info-title">
              <Link to={`/${product.category}/${product.itemId}`}>
                {product.name}
              </Link>
            </h3>
            <p className="card__info-price">
              <span className="card__info-price-discount">
                ${product.price}
              </span>
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
              onClick={() => toggleCartQuantity(product)}
              className={`button  ${quantity !== 0 ? 'card__button--active' : 'card__button'}`}
            >
              {quantity === 0 ? 'Add to cart' : 'in a card'}
            </Button>
            <div
              className="card__favorite"
              onClick={() => toggleFavorite(product)}
            >
              <img
                className="card__favorite-icon"
                src={
                  isFavorite ? '/img/FavouritesLike.svg' : '/img/Favourites.svg'
                }
                alt="like"
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
