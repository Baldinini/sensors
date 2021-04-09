import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from '../model/sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  baseUrl = 'http://localhost:8080/sensors';
  constructor(private httpClient: HttpClient) {
  }

  getAllSensors(): Observable<Sensor[]> {
    return this.httpClient.get<Sensor[]>(this.baseUrl);
  }

  createSensor(sensor: Sensor): Observable<void>{
    return this.httpClient.post<void>(this.baseUrl, sensor);
  }

  deleteSensor(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${(this.baseUrl)}/${id}`);
  }

  updateSensor(id: number, sensor: Sensor): Observable<void> {
    return this.httpClient.put<void>(`${(this.baseUrl)}/${id}`, sensor);
  }

  getSensor(id: number): Observable<Sensor> {
    return this.httpClient.get<Sensor>(`${(this.baseUrl)}/${id}`);
  }

  getDescription(id: number): Observable<string> {
    return this.httpClient.get<string>(`${(this.baseUrl)}/${id}/description`);
  }
}
