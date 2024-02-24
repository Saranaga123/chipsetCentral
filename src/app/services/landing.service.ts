import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  getprodList(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .get(
        `${this.serverURL}/sarabe/prod`,
        { headers }
      )
      .pipe(
        catchError((error) => {
          if (error.status === 401) {
            console.error('HTTP 401 Error:', error);
            sessionStorage.setItem('sessionStatus', 'expired');
          }
          throw error;
        })
      );
  }
  getprod(model:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .get(
        `${this.serverURL}/sarabe/prod/`+model,
        { headers }
      )
      .pipe(
        catchError((error) => {
          if (error.status === 401) {
            console.error('HTTP 401 Error:', error);
            sessionStorage.setItem('sessionStatus', 'expired');
          }
          throw error;
        })
      );
  }
}
