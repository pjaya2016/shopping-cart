import { Component, OnInit } from '@angular/core';
import { loadScript, PayPalNamespace } from '@paypal/paypal-js';
import { PayPalPayment } from './Models/PayPalPayment';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    let _this = this;
    loadScript({
      'client-id':
        'AZ-QCXWz__6uJWjJZNr4PQrapcZuilkENg5ZGLprJ426MeNPpcB65Y9fOexd_1wMCA0ZH2nmEUb8b3pW',
    })
      .then((paypal) => {
        if (paypal?.Buttons != null) {
          paypal
            .Buttons({
              style: {
                layout: 'vertical',
                color: 'blue',
                shape: 'rect',
                label: 'paypal',
              },
              createOrder: function (data, actions) {
                console.log('Create Order:', data, actions);
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: 'USD',
                        value: '100',
                        breakdown: {
                          item_total: {
                            /* Required when including the `items` array */
                            currency_code: 'USD',
                            value: '100',
                          },
                        },
                      },
                      items: [
                        {
                          name: 'First Product Name' /* Shows within upper-right dropdown during payment approval */,
                          description:
                            'Optional descriptive text..' /* Item details will also be in the completed paypal.com transaction view */,
                          unit_amount: {
                            currency_code: 'USD',
                            value: '50',
                          },
                          quantity: '2',
                        },
                      ],
                    },
                  ],
                });
              },
              // Finalize the transaction after payer approval
              onApprove: function (data, actions) {
                return actions.order.capture().then((orderData) => {
                  _this.paymentService
                    .getPaymentDetails(orderData as unknown as PayPalPayment)
                    .subscribe((res) => {
                      console.log(res);
                    });

                  let payments = orderData.purchase_units[0].payments;
                  if (payments !== null) {
                    let x = payments?.captures;
                    if (x !== undefined) {
                      let transaction = x[0];
                    }
                  }
                });
              },
            })
            .render('#paypal-button-container')
            .catch((error) => {
              console.error('failed to render the PayPal Buttons', error);
            });
        }
      })
      .catch((error) => {
        console.error('failed to load the PayPal JS SDK script', error);
      });
  }
}
