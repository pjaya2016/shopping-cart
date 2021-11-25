import { Handling } from './Handling';

export interface Breakdown {
  item_total: Handling;
  shipping: Handling;
  handling: Handling;
  insurance: Handling;
  shipping_discount: Handling;
}
