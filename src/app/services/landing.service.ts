import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IuserLogin, userLogin } from '../shared/models/userLogin';
import { IOrderUpload, Order } from '../shared/models/order';
import { Product } from '../shared/models/product'
import { ORDER_UPLOAD_URL,GET_PROD_REQ,GET_PROD_LIST, LOGIN, ORDER_UPDATE_URL, GET_ORDERS } from '../shared/constants/urls';
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

  getorders(id:any):Observable<Product[]>{
    const checkparam = id;
    console.log(">>>>>>>>>>>>>1",GET_ORDERS+checkparam)
    return this.http.get<Product[]>(GET_ORDERS+checkparam)
  }

  login(orderDetails:IuserLogin):Observable<userLogin>{
    return this.http.post<userLogin>(LOGIN,orderDetails);
  }
  updateOrder(id: any, orderDetails: IOrderUpload): Observable<Product[]> {
    const checkparam = id;
    console.log(">>>>>>>>>>>>>1", ORDER_UPDATE_URL + checkparam, orderDetails);

    // Use HTTP PUT and send orderDetails in the request body
    return this.http.post<Product[]>(ORDER_UPDATE_URL + checkparam, orderDetails);
  }
}
