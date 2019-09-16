import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  UrlProduct = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  getListProduct(): Observable <Product[]> {
    return this.http.get<Product[]>(this.UrlProduct);
  }

  postProduct(pdt: Product): Observable<Product> {
    return this.http.post<Product>(this.UrlProduct, pdt);
  }

}
