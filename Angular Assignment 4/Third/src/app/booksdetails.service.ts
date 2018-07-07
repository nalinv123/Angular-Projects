import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBooks } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksdetailsService {

  private apiUrl = '/assets/booksdetails.json';

  constructor(private http: HttpClient) { }

  getBooksDetails(): Observable<IBooks[]> {
    return this.http.get<IBooks[]>(this.apiUrl);
  }
}
