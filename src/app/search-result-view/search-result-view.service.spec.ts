import { TestBed } from '@angular/core/testing';

import { SearchResultViewService } from './search-result-view.service';

describe('SearchResultViewService', () => {
  let service: SearchResultViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
