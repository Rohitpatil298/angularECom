import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../aboutus/productmodule';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: product | undefined;
  showadd: boolean = true;
  showremove: boolean = false;
  item: any;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  mycart(item: product) {
    this.api.addtocart(item);
  }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('productid');
    console.log(productId);

    if (productId) {
      this.api.getproductid(productId).subscribe((res) => {
        this.productData = res;
        console.log(res);
      });
    }
  }
  back() {
    this.router.navigate(['products']);
  }
}
