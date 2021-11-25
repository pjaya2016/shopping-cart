import { PayerName } from './PayerName';
import { PayerAddress } from './PayerAddress';

export interface Payer {
  name: PayerName;
  email_address: string;
  payer_id: string;
  address: PayerAddress;
}
