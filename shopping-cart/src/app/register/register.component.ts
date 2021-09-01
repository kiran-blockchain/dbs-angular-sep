import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userProfile: any;
  countryList: Array<any>;
  constructor() {

    this.userProfile = {
      email: 'kiran@gmail.com',
      password: 'Test@123',
      country: '',
      gender:'M'
    };
    this.countryList = [{ name: "India", code: "IN" }, { name: 'United States', code: "USA" }];
  }

  handleRegister(){
    console.log(this.userProfile);
  }



}
