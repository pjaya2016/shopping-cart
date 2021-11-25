import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayPalPayment } from './Models/PayPalPayment';
@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  public getPaymentDetails(paypal: PayPalPayment) {
    return this.http.post('/webhook-payment', paypal);
  }
}
