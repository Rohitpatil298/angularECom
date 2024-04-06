import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from './productmodule';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent implements OnInit {
  data!: any | product[];
  ngOnInit(): void {
    this.displayproduct();
  }
  constructor(private api: ApiService, private router: Router) {}

  displayproduct() {
    this.api.products().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }
  viewpage() {
    // this.router.navigate(['productdetail']);
  }
  mycart(item: product) {
    this.api.addtocart(item);
  }
  remove(item: product) {
    this.api.removecart(item);
  }
}
