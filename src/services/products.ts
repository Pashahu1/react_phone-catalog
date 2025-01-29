import { ProductDetail, Products } from '../types/global';
import { client } from '../utils/httpClient';

export function getProducts() {
  return client.get<Products[]>('/products.json');
}

export function getProductsByCategory(category: string) {
  switch (category) {
    case 'phones':
      return client.get<ProductDetail[]>('/phones.json');
    case 'tablets':
      return client.get<ProductDetail[]>('/tablets.json');
    case 'accessories':
      return client.get<ProductDetail[]>('/accessories.json');
    default:
      return Promise.reject(new Error('Category not found'));
  }
}
