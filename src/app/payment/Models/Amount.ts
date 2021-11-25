import { Breakdown } from './Breakdown';

export interface Amount {
  currency_code: string;
  value: string;
  breakdown: Breakdown;
}
