import './ProductDetailsPage.scss';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div className="ProductDetails">
      <h1>id:{productId}</h1>
    </div>
  );
};

export default ProductDetails;
