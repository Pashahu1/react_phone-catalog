import './basket.scss';
import { useShoppingCart } from '../../store/ShoppingCartContext';
import { useMemo } from 'react';
import { useGoBack } from '../../hooks/useGoBack';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Basket = () => {
  const { goBack } = useGoBack();
  const { removeItem } = useLocalStorage('product');

  const {
    cartItems,
    getTotalItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0,
      ),
    [cartItems],
  );

  const totalItems = getTotalItems();

  return (
    <div className="shopping-cart">
      {!cartItems.length ? (
        <img
          className="shopping-cart__empty-page"
          src="./public/img/cart-is-empty.png"
          alt="cart-is-empty"
        />
      ) : (
        <>
          <div className="shopping-cart__go-back" onClick={goBack}>
            <img
              className="shopping-cart__arrow-icon"
              src="./public/img/ArrowLeft.svg"
              alt="arrow-back"
            />
            <span className="shopping-cart__back-text">Back</span>
          </div>
          <h1 className="shopping-cart__title">Cart</h1>
          <div className="shopping-cart__content">
            <ul className="shopping-cart__info">
              {cartItems.map(item => (
                <li key={item.product.itemId} className="shopping-cart__item">
                  <span
                    onClick={() => {
                      removeFromCart(item.product.itemId);
                      removeItem();
                    }}
                    className="shopping-cart__item-remove"
                  >
                    <img src="./public/img/Close.svg" alt="Close" />
                  </span>
                  <div className="shopping-cart__item-details">
                    <img
                      className="shopping-cart__item-image"
                      src={item.product.image}
                      alt={item.product.name}
                    />
                    <span className="shopping-cart__item-name">
                      {item.product.name}
                    </span>
                  </div>

                  <div className="shopping-cart__item-quantity">
                    <button
                      onClick={() => decreaseCartQuantity(item.product.itemId)}
                      className="shopping-cart__item-button"
                    >
                      -
                    </button>
                    <span className="shopping-cart__item-count">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseCartQuantity(item.product)}
                      className="shopping-cart__item-button"
                    >
                      +
                    </button>
                  </div>

                  <div className="shopping-cart__item-price">
                    <h3>${item.quantity * item.product.price}</h3>
                  </div>
                </li>
              ))}
            </ul>

            <div className="shopping-cart__summary">
              <div className="shopping-cart__summary-total">
                <h3 className="shopping-cart__summary-price">${totalPrice}</h3>
                <p className="shopping-cart__summary-text">
                  Total for {totalItems} items
                </p>
              </div>
              <span className="shopping-cart__separator"></span>
              <button
                className="button shopping-cart__checkout-button"
                disabled={!cartItems.length}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
