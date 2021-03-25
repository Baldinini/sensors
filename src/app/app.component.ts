import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-login><h2>Login</h2></app-login> ' +
    '<app-add-edit-form><h2>App/edit</h2></app-add-edit-form> ' +
    '<app-sensor-table><h2>Sensor table</h2></app-sensor-table>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sensors';
}
