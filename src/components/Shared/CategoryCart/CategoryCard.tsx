import { Link } from 'react-router-dom';
import React from 'react';
import './categorycard.scss';

type Props = {
  to: string;
  imageSrc: string;
  alt: string;
  text: string;
  count: number;
};

export const CategoryCard: React.FC<Props> = ({
  to,
  imageSrc,
  alt,
  text,
  count,
}) => {
  return (
    <article className="category-card">
      <Link to={to} className="category-card__link">
        <img src={imageSrc} alt={alt} className="category-card__image" />
      </Link>
      <div className="category-card__content">
        <h2 className="category-card__title">{text}</h2>
        <span className="category-card__count">{count} models</span>
      </div>
    </article>
  );
};
