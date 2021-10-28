export class Product {
  //Fields
  id: string;
  createdDate: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  stocks: number;
  productType: string;
  productImage: [];

  constructor(
    id: string,
    createdDate: string,
    name: string,
    productType: string,
    description: string,
    rating: number,
    price: number,
    stocks: number,
    productImage: any
  ) {
    this.id = id;
    this.createdDate = createdDate;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.price = price;
    this.stocks = stocks;
    this.productImage = productImage;
    this.productType = productType;
  }
}
