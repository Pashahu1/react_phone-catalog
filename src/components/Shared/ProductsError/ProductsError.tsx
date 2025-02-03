import './productsError.scss';

export const ProductsError = () => {
  return (
    <div className="productsError">
      <img
        className="productsError--error"
        src="./public/img/product-not-found.png"
        alt="product-not-found"
      />
    </div>
  );
};
