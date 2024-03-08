import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IOrderUpload, Order } from '../shared/models/order';
import { Product } from '../shared/models/product'
import { ORDER_UPLOAD_URL,GET_PROD_REQ,GET_PROD_LIST } from '../shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private readonly serverURL: string;
  constructor(private http: HttpClient) {
    this.serverURL = this.determineServerURL();
  }
  private determineServerURL(): string {
      return 'http://localhost:666';
  }

  getprodList( ):Observable<Product[]>{
    console.log(">>>>>>>>>>>>>1",GET_PROD_LIST)
    return this.http.get<Product[]>(GET_PROD_LIST)
  }

  getprod(id:any):Observable<Product[]>{
    const checkparam = id;
    console.log(">>>>>>>>>>>>>1",GET_PROD_REQ+checkparam)
    return this.http.get<Product[]>(GET_PROD_REQ+checkparam)
  }

  createorder(orderDetails:IOrderUpload):Observable<Order>{
    return this.http.post<Order>(ORDER_UPLOAD_URL,orderDetails);
  }
}
