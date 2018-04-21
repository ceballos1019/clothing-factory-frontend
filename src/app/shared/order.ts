import { OrderDetail } from './orderDetail';

export class Order {
  name: string;
  docType: string;
  docNumber: number;
  date: string;
  address: string;
  quantity: number;
  detail: OrderDetail[];
  totalValue: number;
}
