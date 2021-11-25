import { Link } from './Link';
import { Payer } from './Payer';
import { PurchaseUnit } from './PurchaseUnit';

export interface PayPalPayment {
  id: string;
  intent: string;
  status: string;
  purchase_units: PurchaseUnit[];
  payer: Payer;
  create_time: Date;
  update_time: Date;
  links: Link[];
}
