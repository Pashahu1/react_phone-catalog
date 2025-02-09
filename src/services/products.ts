import { ProductDetail, Products } from '../types/global';
import { client } from '../utils/httpClient';

enum ProductsType {
  phones = 'phones',
  tablets = 'tablets',
  accessories = 'accessories',
}

export function getProducts() {
  return client.get<Products[]>('/products.json');
}

export function getProductsByCategory(category: string) {
  switch (category) {
    case ProductsType.phones:
      return client.get<ProductDetail[]>('/phones.json');
    case ProductsType.tablets:
      return client.get<ProductDetail[]>('/tablets.json');
    case ProductsType.accessories:
      return client.get<ProductDetail[]>('/accessories.json');
    default:
      return Promise.reject(new Error('Category not found'));
  }
}
