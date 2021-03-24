import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  pass: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  LoginUser() {
    if (this.login === 'admin' && this.pass === '1234') {
      console.log('Welcome!');
    }
  }
}


