import { Injectable, OnInit } from '@angular/core';
import { Cart } from './models/Cart';

export class CartUtil {
  static cart: Cart = {
    productIds: [],
    userId: 0,
  };

  private static init() {
    let obj = localStorage.getItem('cart');
    if (obj === null) {
      console.log('Obj is null');
      this.setCartDetails(this.cart);
    }
  }

  static getCartDetails(): Cart {
    let obj = localStorage.getItem('cart') as string;
    return JSON.parse(obj) as Cart;
  }

  private static setCartDetails(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  static setCartInfor(productId: number) {
    this.init();
    let c = this.getCartDetails() as Cart;
    let filter = c.productIds.filter((p) => p === productId);
    if (filter.length === 0) {
      c.productIds.push(productId);
      this.setCartDetails(c);
    }
    console.log('Product already added');
  }

  static deleteCartDetails(): void {
    localStorage.removeItem('cart');
  }
}
