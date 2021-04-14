import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sensor } from '../model/sensor';
import { NotificationService } from '../service/notification.service';
import { SensorService } from '../service/sensor.service';

@Component({
  selector: 'app-sensors-list',
  templateUrl: './sensors-list.component.html',
  styleUrls: ['./sensors-list.component.css']
})

export class SensorsListComponent implements OnInit {
  sensors: Sensor[] = [];
  displayedColumns: string[] = ['name', 'model', 'typeName', 'unitName', 'range', 'location', 'buttons'];

  filter = {
    keyword: ''
  };

  constructor( private sensorService: SensorService, private notifyService: NotificationService, private router: Router ) {
  }

  ngOnInit(): void {
    this.sensorService.getAllSensors().toPromise().then(
      res => {
        this.sensors = res;
      },
      () => {
        this.notifyService.showError('Error', 'Error');
      });
  }

  condition(): boolean {
    return localStorage.getItem('userStatus').includes('ADMIN');
  }

  getAllSensors(): void {
    this.sensorService.getAllSensors().toPromise().then(
      sensors => {
        this.sensors = this.filterSensor(sensors);
      }
    );
  }

  delete( id: number ): void {
    this.sensorService.deleteSensor(id).subscribe(() => {
      this.ngOnInit();
    });
  }

  filterSensor( sensors: Sensor[] ): Sensor[] {
    return sensors.filter(( e ) => {
      return e.name.toLowerCase().includes(this.filter.keyword.toLowerCase())
        || e.model.toLowerCase().includes(this.filter.keyword.toLowerCase())
        || e.typeName.toLowerCase().includes(this.filter.keyword.toLowerCase())
        || e.unitName.toLowerCase().includes(this.filter.keyword.toLowerCase());
    });
  }
  logout(): void {
    this.sensorService.logout();
    this.router.navigateByUrl('login');
  }
}
