import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SensorTableComponent } from './sensor-table/sensor-table.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SensorTableComponent,
    AddEditFormComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
