import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css']
})
export class SensorTableComponent implements OnInit {

  search: string;
  constructor() { }

  ngOnInit(): void {
  }

  Message() {
    const value = document.querySelector('input');
    console.log(value);
  }
}
