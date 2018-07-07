import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentinfoService {

  private _apiUrl = '/assets/data/students.json';

  constructor(private http: HttpClient) { }

  getStudentDetails(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._apiUrl);
  }
}
