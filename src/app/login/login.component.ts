import { Component, OnInit } from '@angular/core';
import { AuthRequest } from '../model/auth-request';
import { JwtClientService } from '../service/jwt-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authRequest: AuthRequest = new AuthRequest();
  response: string;
  hide = true;

  constructor( private jwtClientService: JwtClientService ) {
  }

  ngOnInit(): void {
  }

  loginUser(): any {
    this.jwtClientService.generateToken(this.authRequest).subscribe(data => {
      console.log('Token: ' + JSON.parse(data)['jwt']);
      this.hello(data);
    });
  }

  hello( token ): any {
    return this.jwtClientService.hello(token).subscribe(data => console.log(data));
  }
}


