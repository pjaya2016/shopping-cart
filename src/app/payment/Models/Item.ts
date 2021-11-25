import { Handling } from './Handling';

export interface Item {
  name: string;
  unit_amount: Handling;
  tax: Handling;
  quantity: string;
  description: string;
}
