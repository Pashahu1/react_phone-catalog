import products from '../../public/api/products.json';

export const filteredPrices = () => {
  return products.filter(product => product.fullPrice > product.price);
};

export const filteredYear = () => {
  return products.filter(product => product.year >= 2022);
};

export const handlerUpperLetter = (str: string) => {
  const s = str.split('-');

  return s
    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join('-');
};
