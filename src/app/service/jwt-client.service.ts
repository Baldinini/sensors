import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../model/auth-request';

@Injectable({
  providedIn: 'root'
})

export class JwtClientService {
  baseUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {
  }
  public generateToken(authRequest: AuthRequest): Observable<string> {
    return this.httpClient.post<string>(`${(this.baseUrl)}/authentication`, authRequest, {responseType: 'text' as 'json'});
  }
  public hello(token): Observable<string> {
    const tokenStr = 'Bearer ' + JSON.parse(token)['jwt'];
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>(`${(this.baseUrl)}/hello`, {headers, responseType: 'text' as 'json'});
  }
}
