import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../model/auth-request';
import { Sensor } from '../model/sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private baseUrl = 'http://localhost:8080/sensors';
  private token: string;

  constructor( private httpClient: HttpClient ) {
  }

  public generateToken( authRequest: AuthRequest ): Observable<string> {
    const observable = this.httpClient.post<string>(`http://localhost:8080/authentication`, authRequest, {responseType: 'text' as 'json'});
    observable.subscribe(data => this.token = data);
    localStorage.setItem('Token', 'Bearer ' + JSON.parse(this.token)['jwt']);
    return observable;
  }

  getAllSensors(): Observable<Sensor[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('Token'));
    return this.httpClient.get<Sensor[]>(this.baseUrl, {headers});
  }

  createSensor( sensor: Sensor ): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('Token'));
    return this.httpClient.post<void>(this.baseUrl, sensor, {headers, responseType: 'text' as 'json'});
  }

  deleteSensor( id: number ): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('Token'));
    return this.httpClient.delete<void>(`${(this.baseUrl)}/${id}`, {headers, responseType: 'text' as 'json'});
  }

  updateSensor( id: number, sensor: Sensor ): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('Token'));
    return this.httpClient.put<void>(`${(this.baseUrl)}/${id}`, sensor, {headers, responseType: 'text' as 'json'});
  }

  getSensor( id: number ): Observable<Sensor> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('Token'));
    return this.httpClient.get<Sensor>(`${(this.baseUrl)}/${id}`, {headers});
  }

  logout(): void {
    localStorage.clear();
  }
}
