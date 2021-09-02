import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent {
  
  navitems: Array<any>
  currentDate:any;
  price='1000';
  phone= '1234567890';
  countryList :any;
  country:any;
  cartTotal:any;
  constructor(private dataService:DataService) {
    this.currentDate= new Date();
    this.countryList = this.dataService.getCountryList();
    this.country='';
    
    this.navitems = [{
      text: "Login",
      link: "login"
    },
    {
      text: "Register",
      link: "register"
    },
    {
      text: "Products",
      link: "products"
    },
    {
      text: "Cart",
      link: "cart"
    },
  ]
  };



}
