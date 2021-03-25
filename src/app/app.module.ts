import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    FormsModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
