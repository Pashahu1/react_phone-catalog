import { useParams } from 'react-router-dom';
import { Product } from '../../../types/global';
import React from 'react';

type Props = {
  products: Product[];
};

export const ProductView: React.FC<Props> = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.itemId === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Full Price: ${product.fullPrice}</p>
      <p>Screen: {product.screen}</p>
      <p>Capacity: {product.capacity}</p>
      <p>RAM: {product.ram}</p>
    </div>
  );
};
