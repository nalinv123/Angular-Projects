import { Component, OnInit } from '@angular/core';
import { BooksdetailsService } from '../booksdetails.service';

@Component({
  selector: 'app-displayallbooksnameandprice',
  templateUrl: './displayallbooksnameandprice.component.html',
  styleUrls: ['./displayallbooksnameandprice.component.css']
})
export class DisplayallbooksnameandpriceComponent implements OnInit {

  private books = [];

  constructor(private booksDetailService: BooksdetailsService) { }

  ngOnInit() {
    this.booksDetailService.getBooksDetails().subscribe(data => this.books = data);
  }

}
