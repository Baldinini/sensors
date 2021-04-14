import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from '../model/auth-request';
import { SensorService } from '../service/sensor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authRequest: AuthRequest = new AuthRequest();
  hide = true;

  constructor( private service: SensorService, private router: Router ) {
  }

  ngOnInit(): void {
  }

  loginUser(): any {
    this.service.generateToken(this.authRequest).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('sensors');
    });
  }
}


