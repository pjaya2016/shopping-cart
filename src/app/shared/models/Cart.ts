import { ProductInfo } from './ProductInfo';

export class Cart {
  productIds: ProductInfo[] = [];
  userId: number = 0;
  constructor(productIds: ProductInfo[], userId: number) {
    this.productIds = productIds;
    this.userId = userId;
  }
}
