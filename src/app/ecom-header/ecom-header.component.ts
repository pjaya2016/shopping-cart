import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-header',
  templateUrl: './ecom-header.component.html',
  styleUrls: ['./ecom-header.component.css'],
})
export class EcomHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getUsername() {
    let obj = (localStorage.getItem('userAuthDetails') ||
      '{name:"User not found"}') as any;
    return JSON.parse(obj)['name'];
  }
}
