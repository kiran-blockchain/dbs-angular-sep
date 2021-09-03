import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  schema: any;

  constructor() {
    this.schema = {
      options: [{ name: "", key: "" }],
      labelName: '',
      cssClass: "",
      selectedValue: "",
      controlName:"",
      defaultLabel:""
    }
  }

  ngOnInit(): void {
  }

}
