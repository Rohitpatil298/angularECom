import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from '../aboutus/productmodule';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  showproduct: any = [];
  totalcart: number = 0;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.api.getproduct().subscribe((res) => {
      this.showproduct = res;
      this.totalcart = this.api.calculateprice();
    });
  }
  delete(item: product) {
    this.api.removecart(item);
  }
  gotoshop() {
    this.router.navigate(['products']);
  }
  emptycart() {
    this.api.emptycart();
  }
}
