import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private dataSvc: DataService) {

  }

  ngOnInit(): void {
    if (this.dataSvc.getProducts().length == 0) {
      this.dataSvc.getDataFromApi('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
        .subscribe((result: any) => {
          this.products = result.map((x: any) => {
            return { ...x, quantity: 0 }
          });
          this.dataSvc.setProductsData(this.products);
        },err=>{
          console.log(err);
        })
    }
  }
  addToCart(item: any) {
    this.dataSvc.addToCart(item)
  }
  removeFromCart(item: any) {
    this.dataSvc.removeFromCart(item);
  }
}
