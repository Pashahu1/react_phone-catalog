import './basket.scss';
import { useState } from 'react';
// eslint-disable-next-line max-len
import iphone from '../../../public/img/phones/apple-iphone-11-pro/gold/00.webp';

export const Basket = () => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(prevCount => {
      if (prevCount <= 0) {
        return prevCount;
      }

      return prevCount - 1;
    });
  };

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart__title">Cart</h1>
      <div className="shopping-cart__content">
        <ul className="shopping-cart__info">
          <li className="shopping-cart__item">
            <button
              className="shopping-cart__item-button
              shopping-cart__item-remove"
            >
              x
            </button>
            <div className="shopping-cart__item-details">
              <img
                className="shopping-cart__item-image"
                src={iphone}
                alt="Phone"
              />
              <span className="shopping-cart__item-name"></span>
            </div>

            <div className="shopping-cart__item-quantity">
              <button
                onClick={handleMinus}
                className="shopping-cart__item-button
                shopping-cart__item-decrease"
              >
                -
              </button>
              <span className="shopping-cart__item-count">{count}</span>
              <button
                onClick={handlePlus}
                className="shopping-cart__item-button
                shopping-cart__item-increase"
              >
                +
              </button>
            </div>

            <div className="shopping-cart__item-price">
              <span>$988</span>
            </div>
          </li>
        </ul>

        <div className="shopping-cart__summary">
          <div className="shopping-cart__summary-total">
            <span className="shopping-cart__summary-price">$2657</span>
            <p className="shopping-cart__summary-text">total</p>
          </div>
          <span className="shopping-cart__separator"></span>
          <button className="button shopping-cart__checkout-button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
