import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root',
})
export class MyProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`/products`);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`/products/${id}`);
  }

  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`/product`, product);
  }

  public getProductType(): Observable<String[]> {
    return this.http.get<String[]>(`/product-type`);
  }

  public imageUpload(fileToUpload: File, productId: string) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('productId', productId);
    return this.http.post('/image', formData);
  }

  public deleteImage(imageId: number) {
    console.log('deleting image');
    return this.http.delete(`/image/${imageId}`);
  }

  public deleteProduct(productId: number) {
    return this.http.delete(`/product/${productId}`);
  }
}
