import { CartUtil } from './../shared/CartUtil';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ecom-header',
  templateUrl: './ecom-header.component.html',
  styleUrls: ['./ecom-header.component.css'],
})
export class EcomHeaderComponent implements OnInit {
  numberOfItemsInCart: number = 0;
  items: MenuItem[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (CartUtil.getCartDetails() !== null)
      this.numberOfItemsInCart = CartUtil.getCartDetails().productIds.length;
    CartUtil.subject.subscribe((res) => {
      console.log(res);
      this.numberOfItemsInCart = res.productIds.length;
    });
  }

  searchValue: String = '';

  getUsername() {
    let obj = (localStorage.getItem('userAuthDetails') ||
      '{name:"User not found"}') as any;
    return JSON.parse(obj)['name'];
  }

  checkoutUser() {
    this.router.navigate(['/cart']);
  }

  searchProduct() {
    console.log(this.searchValue);
    this.router.navigate(['/search-result'], {
      queryParams: { value: this.searchValue },
    });
  }
}
