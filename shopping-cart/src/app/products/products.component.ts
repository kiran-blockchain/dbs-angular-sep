import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private dataSvc:DataService) {
    this.products =this.dataSvc.getProducts();
   }

  ngOnInit(): void {
  }

}
