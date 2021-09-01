import { Component } from '@angular/core';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent {
  
  navitems: Array<any>
  
  constructor() {
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
  }


}
