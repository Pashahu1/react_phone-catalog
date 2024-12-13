import products from '../../../public/api/products.json';

export const filteredCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const filteredPrices = () => {
  return products.filter(product => product.fullPrice > product.price);
};

export const filteredYear = () => {
  return products.filter(product => product.year >= 2022);
};
