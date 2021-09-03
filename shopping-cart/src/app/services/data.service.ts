import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    constructor(private http:HttpClient) {
        this.countryList = [{ name: "India", code: "IN" },
        { name: 'United States', code: "USA" }];
        this.products=[];
    }
    setProductsData(products:any){
        this.products = products;
    }
    getDataFromApi(url:string){
        return this.http.get(url);
    }
    addToCart(item: any) {
        this.products.forEach((element: any) => {
            if (item.id == element.id && element.quantity >= 0) {
                element.quantity = element.quantity + 1;
            }
        });
    }
    removeFromCart(item: any) {
        this.products.forEach((element: any) => {
            if (item.id == element.id && element.quantity > 0) {
                element.quantity = element.quantity - 1;
            }
        });
    }
    getCartItems() {
        return this.products.filter((i: any) => i.quantity > 0);
    }
    getCartTotal() {
        let total = 0;
        this.products.forEach((i: any) => {
            total += i.quantity * i.price;
        });
        return total;
    }
    private countryList: any
    private products: any;
   
    getCountryList() {
        return this.countryList;
    }
    getProducts() {
        return this.products;
    }

    postApi(url:string,payload:any){
        return this.http.post(url,payload);
    }
   

}