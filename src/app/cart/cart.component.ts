import { CartUtil } from './../shared/CartUtil';
import { Cart } from './../shared/models/Cart';
import { Component, OnInit } from '@angular/core';
import { Product } from '../my-product/Models/Product';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartsProducts: Product[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.cartsProducts = [];
    CartUtil.getCartDetails().productIds.forEach((p) => {
      this.cartService.getProduct(p.id).subscribe((res) => {
        this.cartsProducts.push(res);
      });
    });
  }

  public deleteItem(id: string): void {
    CartUtil.removeItemFromCart(Number(id));
    this.init();
  }
}
