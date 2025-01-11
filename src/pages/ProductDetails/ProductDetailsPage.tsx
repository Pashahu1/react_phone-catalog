import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../store/PostsContext';
import './ProductDetailsPage.scss';
import { ProductDetail } from '../../types/global';

const ProductDetailsPage = () => {
  const { category, productId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error('PostsContext is not available');
  }

  // console.log(products);

  const { posts } = context;

  useEffect(() => {
    if (category) {
      fetch(`/api/${category}.json`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }

          return response.json();
        })
        .then(data => {
          setProducts(data);
        });
    }
  }, [category]);

  const product = posts.find(item => String(item.id) === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="ProductDetails">
      <h1>{product.name}</h1>
      <img src={`/${product.image}`} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Screen: {product.screen}</p>
      <p>RAM: {product.ram}</p>
      <p>Capacity: {product.capacity}</p>
    </div>
  );
};

export default ProductDetailsPage;
