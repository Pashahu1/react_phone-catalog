import { ProductDetail, Products } from '../../../types/global';
import React, { useState, useEffect } from 'react';
import './productAttributes.scss';
// eslint-disable-next-line max-len
import { OptionSelector } from './OptionSelector/OptionSelector';
// eslint-disable-next-line import/no-extraneous-dependencies
import colornames from 'colornames';
import classNames from 'classnames';
// import { useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../../../store/ShoppingCartContext';
import { useFavoriteCart } from '../../../store/FavoritesCartContext';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = { productDetails: ProductDetail };

function mapProductDetailToProduct(
  detail: ProductDetail,
  id: number,
  color: string,
): Products {
  return {
    id: id,
    itemId: detail.id,
    color: color,
    year: 0,
    category: detail.category,
    name: detail.name,
    capacity: detail.capacity,
    price: detail.priceDiscount,
    fullPrice: detail.priceRegular,
    image: detail.images[0],
    screen: detail.screen,
    ram: detail.ram,
  };
}

export const ProductAttributes: React.FC<Props> = ({ productDetails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const initialColor = searchParams.get('color') || '';
  const initialCapacity = searchParams.get('capacity') || '';

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [activeIndex, setActiveIndex] = useState(
    productDetails.capacityAvailable.indexOf(initialCapacity) !== -1
      ? productDetails.capacityAvailable.indexOf(initialCapacity)
      : 0,
  );

  const { getItemQuantity, toggleCartQuantity } = useShoppingCart();
  const { favoriteItems, toggleFavorite } = useFavoriteCart();

  const quantity = getItemQuantity(productDetails?.id || '');
  const isFavorite = favoriteItems.some(
    item => item.product.itemId === productDetails?.id,
  );

  const updateURLParams = (color: string, capacity: string) => {
    const params = new URLSearchParams(location.search);

    if (color) {
      params.set('color', color);
    }

    if (capacity) {
      params.set('capacity', capacity);
    }

    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    updateURLParams(color, productDetails.capacityAvailable[activeIndex]);
  };

  const handleCapacityChange = (index: number) => {
    setActiveIndex(index);
    updateURLParams(selectedColor, productDetails.capacityAvailable[index]);
  };

  useEffect(() => {
    if (!initialColor && productDetails.colorsAvailable[0]) {
      setSelectedColor(productDetails.colorsAvailable[0]);
    }
  }, [initialColor, productDetails.colorsAvailable]);

  const techSpecDetails = [
    { label: 'Screen', value: productDetails?.screen },
    { label: 'Resolution', value: productDetails?.resolution },
    { label: 'Processor', value: productDetails?.processor },
    { label: 'RAM', value: productDetails?.ram },
  ];

  const colors: { [key: string]: string } = {
    rosegold: '#B76E79',
    midnightgreen: '#004953',
    spacegray: '#4A4A4A',
    'space gray': '#717378',
    sierrablue: '#BFDAF7',
    graphite: '#41424C',
    starlight: '#F8F9EC',
    midnight: '#302E41',
  };

  const handleCartsToggle = () => {
    const product = mapProductDetailToProduct(
      productDetails,
      quantity,
      selectedColor,
    );

    toggleCartQuantity(product);
  };

  const handleFavoriteToggle = () => {
    const product = mapProductDetailToProduct(
      productDetails,
      quantity,
      selectedColor,
    );

    toggleFavorite(product);
  };

  return (
    <div className="media-details">
      <OptionSelector label="Available colors" indicator="ID:855435343">
        {productDetails?.colorsAvailable.map((color, i) => {
          const hexColor = colors[color.toLowerCase()] || colornames(color);
          const isChecked = selectedColor === color;

          return (
            <div
              key={i}
              className={classNames(
                'media-details__option',
                'media-details__option--color',
                { 'media-details__option--active': isChecked },
              )}
            >
              <input
                className="media-details__radio"
                type="radio"
                name="color"
                value={color}
                checked={isChecked}
                style={{ backgroundColor: hexColor }}
                onChange={() => handleColorChange(color)}
              />
            </div>
          );
        })}
      </OptionSelector>

      <span className="media-details__separator"></span>

      <OptionSelector label="Select capacity">
        {productDetails?.capacityAvailable.map((capacity, i) => (
          <div key={i} className="media-details__option-capacity">
            <button
              onClick={() => handleCapacityChange(i)}
              className={classNames('media-details__button', {
                'media-details__button--active': activeIndex === i,
              })}
            >
              {capacity}
            </button>
          </div>
        ))}
      </OptionSelector>

      <span className="media-details__separator"></span>

      <div className="media-details__section">
        <div className="media-details__price">
          <h2 className="media-details__price--regular">
            {productDetails?.priceRegular}
          </h2>
          <span className="media-details__price--discount">
            {productDetails?.priceDiscount}
          </span>
        </div>
        <div className="media-details__actions">
          <button
            className={`media-details__actions-button ${quantity !== 0 ? 'media-details__actions-button--active' : ''}`}
            onClick={handleCartsToggle}
          >
            {quantity > 0 ? 'In cart' : 'Add to cart'}
          </button>
          <div
            className="media-details__actions-favorite"
            onClick={handleFavoriteToggle}
          >
            <img
              src={
                isFavorite ? '/img/FavouritesLike.svg' : '/img/Favourites.svg'
              }
              alt="Favourites"
            />
          </div>
        </div>
      </div>

      <div className="media-details__section">
        <ul className="media-details__list">
          {techSpecDetails.map(
            (details, i) =>
              details.value &&
              details.value.length > 0 && (
                <li key={i} className="media-details__list-item">
                  <p className="media-details__list-label">{details.label}</p>
                  <span className="media-details__list-value">
                    {details.value}
                  </span>
                </li>
              ),
          )}
        </ul>
      </div>
    </div>
  );
};
