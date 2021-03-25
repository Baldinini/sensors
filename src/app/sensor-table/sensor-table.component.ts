import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css']
})
export class SensorTableComponent implements OnInit {

  searchData: LocalDataSource;
  settings = {
    columns: {
      name: {
        title: 'Name',
        filter: false
      },
      model: {
        title: 'Model',
        filter: false
      },
      type: {
        title: 'Type',
        filter: false
      },
      range: {
        title: 'Range',
        filter: false
      },
      unit: {
        title: 'Unit',
        filter: false
      },
      location: {
        title: 'Location',
        filter: false
      }
    }
  };

/*  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    }
  };*/

  data = [
    {
      name: 'Sensor1',
      model: 'Bret',
      type: 'voltage',
      range: '10-15',
      unit: 'bar',
      location: 'room1',
      description: 'good sensor'
    },
    {
      name: 'Sensor2',
      model: 'Qed',
      type: 'voltage',
      range: '1-200',
      unit: 'bar',
      location: 'room5',
      description: 'norm sensor'
    },
    {
      name: 'Sensor3',
      model: 'Crud',
      type: 'voltage',
      range: '2000-3000',
      unit: 'celsius',
      location: 'room3',
      description: 'bad sensor'
    }
  ];

  constructor() {
    this.searchData = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
  }

  onSearch( query: string = '' ): void {
    this.searchData.setFilter([
      {
        field: 'name',
        search: query
      },
      {
        field: 'model',
        search: query
      },
      {
        field: 'type',
        search: query
      },
      {
        field: 'range',
        search: query
      },
      {
        field: 'unit',
        search: query
      },
      {
        field: 'location',
        search: query
      },
      {
        field: 'description',
        search: query
      }
    ], false);
  }
}
