import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PostsContext } from '../../../store/PostsContext';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error('PostsContext is not available');
  }

  const { posts } = context;
  const product = posts.find(item => String(item.id) === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Screen: {product.screen}</p>
      <p>RAM: {product.ram}</p>
      <p>Capacity: {product.capacity}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetailsPage;
