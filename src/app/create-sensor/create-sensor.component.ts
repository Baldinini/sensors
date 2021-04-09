import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from '../model/sensor';
import { SensorService } from '../service/sensor.service';

@Component({
  selector: 'app-create-sensor',
  templateUrl: './create-sensor.component.html',
  styleUrls: ['./create-sensor.component.css']
})
export class CreateSensorComponent implements OnInit {

  sensor: Sensor = new Sensor();
  constructor( private sensorService: SensorService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id != null) {
        this.sensorService.getSensor(+id).subscribe(data => this.sensor = data);
      }
    }
  }

  createSensor(): void {
    const isSensorPresent = this.activatedRoute.snapshot.paramMap.has('id');
    if (isSensorPresent) {
      this.editSensor();
    } else {
      this.sensorService.createSensor(this.sensor).subscribe(() => {
        this.router.navigateByUrl('sensors');
      });

    }
  }

  editSensor(): void {
    this.sensorService.updateSensor(this.sensor.id, this.sensor).subscribe(() => {
      this.router.navigateByUrl('sensors');
    });
  }
}
