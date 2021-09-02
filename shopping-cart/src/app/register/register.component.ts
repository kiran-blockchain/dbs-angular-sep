import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userProfile: any;
  countryList: Array<any>;
  constructor(private datasvc:DataService) {

    this.userProfile = {
      email: 'kiran@gmail.com',
      password: 'Test@123',
      country: '',
      gender:'M'
    };
    this.countryList = this.datasvc.getCountryList();
  }

  handleRegister(){
    console.log(this.userProfile);
  }



}
