import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  constructor() { 
    this.loginForm= new FormGroup({
      username: new FormControl('',[Validators.required])
    })

  }

  ngOnInit(): void {
  }
  handleLogin(){
    console.log(this.loginForm.controls['username'].valid);
    console.log(this.loginForm.controls['username'].value);
  }
}
