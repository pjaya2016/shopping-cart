import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce-cv-project';
  url = '';
  constructor() {
    this.url = window.location.pathname;
  }

  checkUrl() {
    return localStorage.getItem('userAuthDetails') !== null;
  }
}
