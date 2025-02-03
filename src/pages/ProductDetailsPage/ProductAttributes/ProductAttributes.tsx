import { ProductDetail } from '../../../types/global';
import React, { useCallback, useEffect, useState } from 'react';
import './productAttributes.scss';
// eslint-disable-next-line max-len
import { OptionSelector } from '../../../components/Shared/OptionSelector/OptionSelector';
// eslint-disable-next-line import/no-extraneous-dependencies
import colornames from 'colornames';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = { productDetails: ProductDetail | null };

export const ProductAttributes: React.FC<Props> = ({ productDetails }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const normalizeColor = (color: string) =>
    color.toLowerCase().replace(/[\s-]/g, '');
  const navigate = useNavigate();

  const findColorInName = useCallback((_name: string, colors: string[]) => {
    const normalizedName = normalizeColor(_name);

    return (
      colors.find(color => normalizedName.includes(color.toLowerCase())) ||
      colors[0]
    );
  }, []);

  useEffect(() => {
    if (productDetails) {
      const detectedColor = findColorInName(
        productDetails.id,
        productDetails.colorsAvailable,
      );

      setSelectedColor(detectedColor);
    }
  }, [findColorInName, productDetails]);

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

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const productId = productDetails?.id;

    if (productId) {
      navigate(
        `/${productDetails.category}/${productId}?color=${color.toLowerCase()}`,
      );
    }
  };

  return (
    <div className="media-details">
      <OptionSelector label="Available colors">
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
              onClick={() => setActiveIndex(i)}
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
          <button className="media-details__actions-button">Add to cart</button>
          <div className="media-details__actions-favorite">
            <img src="./public/img/Favourites.svg" alt="Favourites" />
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
