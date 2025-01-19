import { Products } from '../types/global';
import { client } from '../utils/httpClient';

export function getProductsCategory(category: string) {
  return client
    .get<Products[]>('/products.json')
    .then(data => data.filter(product => product.category === category));
}
