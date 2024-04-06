import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from '../aboutus/productmodule';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public cartitemlist: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  products(): Observable<product[]> {
    return this.http.get<product[]>('https://dummyjson.com/products');
  }

  getproductid(id: string): Observable<product> {
    return this.http.get<product>('https://dummyjson.com/products/' + id);
  }
  addtocart(data: product) {
    this.cartitemlist.push(data);
    this.productList.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }
  getproduct() {
    return this.productList.asObservable();
  }
  removecart(data: product) {
    this.cartitemlist.map((a: product, index: product) => {
      if (data.id == a.id) {
        this.cartitemlist.splice(index, 1);
      }
    });
    this.productList.next(this.cartitemlist);
  }

  calculateprice() {
    let total = 0;
    this.cartitemlist.map((a: any) => {
      total += a.price;
    });
    return total;
  }
  emptycart(){
    this.cartitemlist=[];
    this.productList.next(this.cartitemlist);
  }
  search():void{
    this.cartitemlist=[];
  
}
}
