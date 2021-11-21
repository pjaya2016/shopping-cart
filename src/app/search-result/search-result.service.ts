import { SearchFilter } from './Models/SearchFilter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../my-product/Models/Product';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  constructor(private http: HttpClient) {}

  public searchProduct(searchValue: SearchFilter[]): Observable<Product[]> {
    return this.http.post<Product[]>(`/products/search`, searchValue);
  }
}
