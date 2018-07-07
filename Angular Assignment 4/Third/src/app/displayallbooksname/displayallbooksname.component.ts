import { Component, OnInit } from '@angular/core';
import { BooksdetailsService } from '../booksdetails.service';

@Component({
  selector: 'app-displayallbooksname',
  templateUrl: './displayallbooksname.component.html',
  styleUrls: ['./displayallbooksname.component.css']
})
export class DisplayallbooksnameComponent implements OnInit {

  private books = [];

  constructor(private booksDetailService: BooksdetailsService) { }

  ngOnInit() {
    this.booksDetailService.getBooksDetails().subscribe(data => this.books = data);
  }

}
