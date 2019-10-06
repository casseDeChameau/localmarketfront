import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../domain/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL: 'http://localhost:8080/products';
  constructor(private http: HttpClient) { }

  // get one product
  // getResearchedProduct(id: number): Observable <Product> {
  //   return this.http.get<Product>(environment.URL_Spring_Boot + '/' + id);
  // }
  // getProductByName(name: string): Observable<Product> {
  //   return this.http.get<Product>(environment.URL_Spring_Boot + '/' + name );
  // }

  // get all products
  getListProduct(): Observable <Product[]> {
    // return this.http.get<Product[]>(this.URL);
    return this.http.get<Product[]>(environment.URL_Spring_Boot);
  }

  // add product
  postProduct(pdt: Product): Observable <Product> {
    // return this.http.post<Product>(this.URL, pdt);
    return this.http.post<Product>(environment.URL_Spring_Boot, pdt);
  }

  // // get product to get seller location
  // getDirection(name: string): Observable <Product> {
  // return this.http.get<Product>(environment.URL_Spring_Boot + '/' + name );
  //  }
}
