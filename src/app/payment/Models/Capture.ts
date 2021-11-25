import { Handling } from './Handling';
import { SellerProtection } from './SellerProtection';

export interface Capture {
  id: string;
  status: string;
  amount: Handling;
  final_capture: boolean;
  disbursement_mode: string;
  seller_protection: SellerProtection;
  create_time: Date;
  update_time: Date;
}
