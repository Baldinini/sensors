import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {

  name: string;
  model: string;
  rangeFrom: number;
  rangeTo: number;
  type: object;
  unit: object;
  location: string;
  description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
