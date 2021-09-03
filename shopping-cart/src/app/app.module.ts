import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lowercase2 } from './common/lowercase2.pipe';
import { PhoneFormatter } from './common/phone.formatter';
import { DataService } from './services/data.service';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    NavitemsComponent,
    EmployeeTableComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    CartComponent,
    Lowercase2,
    PhoneFormatter,
    DropdownComponent
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
      path:"products",component:ProductsComponent  
    },
    {
      path:'login', component:LoginComponent
    },
    {
      path:"register",component:RegisterComponent
    },
    {
      path:"cart",component:CartComponent
    },
    {
      path:"",component:LoginComponent
    }
  
  ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
