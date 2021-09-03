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
  constructor(private datasvc: DataService) {
    this.userProfile = {
      email: 'kiran@gmail.com',
      password: 'Test@123',
      phone: '',
      country: '',
      gender: 'M'
    };
    this.countryList = this.datasvc.getCountryList();
  }
  ngOnInit(): void {
    this.datasvc.getDataFromApi('https://restcountries.eu/rest/v2/all')
      .subscribe((result: any) => {
        this.countryList = result.map((item: any) => {
          return { name: item.name, code: item.alpha3Code };
        })
      }, err => {
        console.log(err);
      })
  }
  apiResult={
    success:false,
    error:false
  }
  handleRegister() {
    let url = 'http://51.81.71.198:3000/api/members/register'
    let payLoad = {
      "EMAIL": this.userProfile.email,
      "MOBILE_NUMBER": this.userProfile.phone,
      "PASSWORD": this.userProfile.password
    }
    this.datasvc.postApi(url, payLoad).subscribe(result => {
      console.log(result);
      this.apiResult.success=true;
      this.apiResult.error =false;
    }, err => {
      this.apiResult.success=false;
      this.apiResult.error =true;
    })

  }





}
