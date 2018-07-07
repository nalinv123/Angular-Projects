import { Component, OnInit } from '@angular/core';
import { BooksdetailsService } from '../booksdetails.service';

@Component({
  selector: 'app-displayallbooks',
  templateUrl: './displayallbooks.component.html',
  styleUrls: ['./displayallbooks.component.css']
})
export class DisplayallbooksComponent implements OnInit {

  private books = [];

  constructor(private booksDetailService: BooksdetailsService) { }

  ngOnInit() {
    this.booksDetailService.getBooksDetails().subscribe(data => this.books = data);
  }

}
