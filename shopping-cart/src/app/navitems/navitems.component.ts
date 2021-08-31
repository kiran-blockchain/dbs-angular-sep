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
      text: "Home",
      link: "home"
    },
    {
      text: "About us",
      link: "aboutus"
    },
    {
      text: "Contact us",
      link: "contactus"
    }
    ]
  }


}
