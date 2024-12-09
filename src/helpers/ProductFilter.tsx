import products from '../../public/api/products.json';

export const filteredCategory = (category: string) => {
  return products.filter(product => product.category === category);
};
