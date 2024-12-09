export interface CartState {
  key: string;
}

export type UpdateState = (newValue: Partial<CartState>) => void;

export interface ContextValue {
  state: CartState;
  updateState: UpdateState;
}

export interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}
