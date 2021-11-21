import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecom-header',
  templateUrl: './ecom-header.component.html',
  styleUrls: ['./ecom-header.component.css'],
})
export class EcomHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchValue: String = '';

  getUsername() {
    let obj = (localStorage.getItem('userAuthDetails') ||
      '{name:"User not found"}') as any;
    return JSON.parse(obj)['name'];
  }

  searchProduct() {
    console.log(this.searchValue);
    this.router.navigate(['/search-result'], {
      queryParams: { value: this.searchValue },
    });
  }
}
