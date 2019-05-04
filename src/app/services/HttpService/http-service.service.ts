import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  get(ENDPOINT: string): Observable<any>{
    return this.http.get(ENDPOINT);

  }
  post(ENDPOINT: string, body:any): Observable<any>{
    return this.http.post(ENDPOINT, body);

  }
  put(ENDPOINT: string, body:any): Observable<any>{
    return this.http.put(ENDPOINT, body);

  }
  delete(ENDPOINT: string): Observable<any>{
    return this.http.delete(ENDPOINT);

  }
}
