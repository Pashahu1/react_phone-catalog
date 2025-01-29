import { useFavoriteCart } from '../../store/FavoritesCartContext';
import { Card } from '../../components/Shared/Card/Cart';
import './favorite.scss';

export const Favourites = () => {
  const { favoriteItems } = useFavoriteCart();

  return (
    <section className="favorite">
      {!favoriteItems.length ? (
        <img
          className="favorite__empty-page"
          src="./public/img/sadKitten.avif"
          alt="sadKitten"
        />
      ) : (
        <>
          <h1 className="favorite__title">Favourites</h1>
          <p className="favorite__count">{favoriteItems.length} items</p>
          <div className="favorite__content">
            {favoriteItems.map(item => (
              <Card product={item.product} key={item.product.itemId} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
