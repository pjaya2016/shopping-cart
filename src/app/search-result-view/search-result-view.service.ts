import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../my-product/Models/Product';

@Injectable({
  providedIn: 'root',
})
export class SearchResultViewService {
  constructor(private http: HttpClient) {}

  public retriveProductInformation(id: number) {
    return this.http.get<Product>(`/products/${id}`);
  }
}
