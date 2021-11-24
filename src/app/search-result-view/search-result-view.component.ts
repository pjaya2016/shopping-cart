import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../my-product/Models/Product';
import { CartUtil } from '../shared/CartUtil';
import { SearchResultViewService } from './search-result-view.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-result-view',
  templateUrl: './search-result-view.component.html',
  styleUrls: ['./search-result-view.component.css'],
})
export class SearchResultViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private searchResultViewService: SearchResultViewService
  ) {}

  productId: number = 0;

  quantity: number = 0;

  faCartPlus = faCartPlus;

  product: Product = {
    id: '',
    createdDate: '',
    name: '',
    description: '',
    rating: 0,
    price: 0,
    stocks: 0,
    productType: '',
    productImage: [],
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.productId = params.id;
      this.searchResultViewService
        .retriveProductInformation(this.productId)
        .subscribe((res) => {
          this.product = res;
          console.log(this.productId);
        });
    });
  }

  addChart(id: string, quantity: number) {
    CartUtil.setCartInfor(Number(id), quantity);
    console.log(CartUtil.getCartDetails());
  }
}
