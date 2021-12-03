import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export class RecaptchaResponse {
  success: boolean | undefined;
  challenge_ts: Date | undefined;
  hostname: string | undefined; // the hostname of the site where the reCAPTCHA was solved
  'error-codes': string[] = [];

  constructor(
    success: boolean,
    challenge_ts: Date,
    hostname: string,
    errorCodes: string[]
  ) {
    this.success = success;
    this.challenge_ts = challenge_ts;
    this.hostname = hostname;
    this['error-codes'] = errorCodes;
  }
}
