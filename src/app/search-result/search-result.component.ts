import { SearchFilter } from './Models/SearchFilter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultService } from './search-result.service';
import { Product } from '../my-product/Models/Product';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private searchResultService: SearchResultService
  ) {}
  searchValue: string = '';
  productsLst: Product[] = [];
  searchFilter: SearchFilter = {
    key: undefined,
    operation: undefined,
    value: undefined,
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.searchValue = params.value;
      this.searchFilter = new SearchFilter('name', ':', this.searchValue);
      this.searchResultService
        .searchProduct([this.searchFilter])
        .subscribe((res) => {
          console.log('Search Filter Result');
          this.productsLst = res;
        });
    });
  }
}
