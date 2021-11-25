import { Shipping } from './Shipping';
import { Payments } from './Payments';
import { Payee } from './Payee';
import { Item } from './Item';
import { Amount } from './Amount';

export interface PurchaseUnit {
  reference_id: string;
  amount: Amount;
  payee: Payee;
  description: string;
  items: Item[];
  shipping: Shipping;
  payments: Payments;
}
