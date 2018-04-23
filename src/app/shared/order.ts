import { Product } from './product';

export class Order {
  name: string;
  docType: string;
  docNumber: number;
  date: string;
  address: string;
  quantity: number;
  detail: Product[];
  totalValue: number;
}
