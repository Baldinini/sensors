import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SensorsListComponent } from './sensors-list/sensors-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateSensorComponent } from './create-sensor/create-sensor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SensorService} from './service/sensor.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sensors', component: SensorsListComponent },
  { path: 'sensors/create', component: CreateSensorComponent },
  { path: 'sensors/edit/:id', component: CreateSensorComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SensorsListComponent,
    CreateSensorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    ToastrModule.forRoot(),
  ],
  providers: [SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
