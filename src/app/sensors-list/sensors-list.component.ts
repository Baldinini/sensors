import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Sensor } from '../model/sensor';
import { SensorService } from '../service/sensor.service';

@Component({
  selector: 'app-sensors-list',
  templateUrl: './sensors-list.component.html',
  styleUrls: ['./sensors-list.component.css']
})

export class SensorsListComponent implements OnInit {
  sensors: Sensor[] = [];
  displayedColumns: string[] = ['name', 'model', 'typeName', 'unitName', 'range', 'location', 'buttons'];
  token: string;

  filter = {
    keyword: ''
  };
  constructor(private sensorService: SensorService, private login: LoginComponent) { }

  ngOnInit(): void {
    this.login.token.subscribe(token => this.token = token);
    console.log(this.token);
    this.sensorService.getAllSensors(this.token).subscribe(sensors => this.sensors = sensors);
  }
  getAllSensors(): void {
    this.sensorService.getAllSensors(this.token).subscribe(sensors => this.sensors = this.filterSensor(sensors));
  }
  delete(id: number): void {
    this.sensorService.deleteSensor(id).subscribe(() => {
      this.ngOnInit();
    });
  }
  filterSensor(sensors: Sensor[]): Sensor[] {
    return sensors.filter((e) => {
      return e.name.toLowerCase().includes(this.filter.keyword.toLowerCase())
        || e.model.toLowerCase().includes(this.filter.keyword.toLowerCase())
        || e.typeName.toLowerCase().includes(this.filter.keyword.toLowerCase())
        || e.unitName.toLowerCase().includes(this.filter.keyword.toLowerCase());
    });
  }
}
