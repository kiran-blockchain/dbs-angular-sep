import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  title:string;
  constructor() { 
    this.title="Unit Testing";
  }

  ngOnInit(): void {
  }
  changeTitle(){
    this.title="I am good";
  }
}
