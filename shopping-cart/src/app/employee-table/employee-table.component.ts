import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
   employees:Array<any>
   selectedEmployee:any;
  constructor() { 
    this.employees=[{name:"kiran",age:30,salary:400000},
    {name:"nitish",age:21,salary:400000}]
  }
  handleClick(emp:any){
    this.selectedEmployee=emp;
  }
 

}
