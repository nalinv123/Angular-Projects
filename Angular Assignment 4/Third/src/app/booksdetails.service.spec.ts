import { TestBed, inject } from '@angular/core/testing';

import { BooksdetailsService } from './booksdetails.service';

describe('BooksdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksdetailsService]
    });
  });

  it('should be created', inject([BooksdetailsService], (service: BooksdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
