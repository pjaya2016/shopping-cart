import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../my-product/Models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`/product/${id}`);
  }
}
