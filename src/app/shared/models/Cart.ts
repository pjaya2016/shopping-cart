export class Cart {
  productIds: number[] = [];
  userId: number = 0;
  constructor(productIds: number[], userId: number) {
    this.productIds = productIds;
    this.userId = userId;
  }
}
