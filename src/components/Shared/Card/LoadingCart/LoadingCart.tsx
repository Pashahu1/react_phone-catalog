import './loadingCart.scss';

export const LoadingCart = () => {
  return (
    <>
      <div className="card__image--loader"></div>
      <div className="card__info">
        <h3 className="ard__info-title--loader"></h3>
        <p className="card__info-price--loader">
          <span className="card__info-price-discount--loader"></span>
          <span className="card__info-price-fullprice--loader"></span>
        </p>
      </div>
      <div className="card__details">
        <p className="card__detail--loader">
          <span className="card__detail-label--loader"></span>
          <span className="card__detail-value--loader"></span>
        </p>
        <p className="card__detail card__detail--loader">
          <span className="card__detail-label--loader"></span>
          <span className="card__detail-value--loader"></span>
        </p>
        <p className="card__detail--loader">
          <span className="card__detail-label--loader"></span>
          <span className="card__detail-value--loader"></span>
        </p>
      </div>
      <div className="card__actions card__actions--loader">
        <div className="card__favorite card__favorite--loader"></div>
      </div>
    </>
  );
};
