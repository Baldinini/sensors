import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthRequest } from '../model/auth-request';
import { JwtClientService } from '../service/jwt-client.service';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authRequest: AuthRequest = new AuthRequest();
  response: string;
  hide = true;
  token = new Subject<string>();

  constructor( private jwtClientService: JwtClientService, private router: Router) {
  }

  ngOnInit(): void {
  }

  loginUser(): any {
    this.jwtClientService.generateToken(this.authRequest).subscribe(data => {
      this.response = data;
      console.log('Token: ' + JSON.parse(data)['jwt']);
      this.token.next(data);
      this.hello(data);
      this.router.navigateByUrl('sensors');
    });
  }

  hello( token ): any {
    return this.jwtClientService.hello(token).subscribe(data => console.log(data));
  }
}


