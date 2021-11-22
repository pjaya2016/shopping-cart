import { Injectable, OnInit } from '@angular/core';
import { Cart } from './models/Cart';
import { Subject } from 'rxjs';
import { ProductInfo } from './models/ProductInfo';

export class CartUtil {
  static cart: Cart = {
    productIds: [],
    userId: 0,
  };

  public static subject = new Subject<Cart>();

  private static init() {
    let obj = localStorage.getItem('cart');
    if (obj === null) {
      console.log('Obj is null');
      this.setCartDetails(this.cart);
    }
  }

  static getCartDetails(): Cart {
    let obj = localStorage.getItem('cart') as string;
    if (obj != null) {
      return JSON.parse(obj) as Cart;
    }
    return this.cart;
  }

  private static setCartDetails(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.subject.next(this.getCartDetails());
  }

  static setCartInfor(productId: number, quantity: number) {
    this.init();
    let c = this.getCartDetails() as Cart;
    let filter = c.productIds.filter((p) => p.id === productId);
    if (filter.length === 0) {
      c.productIds.push(new ProductInfo(productId, quantity));
      this.setCartDetails(c);
    }
    console.log('Product already added');
  }

  static removeItemFromCart(id: number): void {
    this.cart.productIds = this.getCartDetails().productIds.filter(
      (p) => p.id !== id
    );
    this.setCartDetails(this.cart);
  }

  static deleteCartDetails(): void {
    localStorage.removeItem('cart');
  }
}
