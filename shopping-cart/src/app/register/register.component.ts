import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  ngOnInit(): void {
    this.datasvc.getDataFromApi('https://restcountries.eu/rest/v2/all')
    .subscribe((result:any)=>{
     this.countryList = result.map((item:any)=>{
       return {name:item.name,code:item.alpha3Code};
     })
    },err=>{
     console.log(err);
    })
 }

  handleRegister(){
    console.log(this.userProfile);
  }



}
